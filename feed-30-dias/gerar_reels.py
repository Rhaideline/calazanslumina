# -*- coding: utf-8 -*-
"""
Gera os 8 reels: HTML por cena -> PNG -> segmento MP4 com Ken Burns ->
concatenado com corte suave -> áudio mudo -> MP4 final.

Duração por tipo de cena (a régua vem do estudo: corte a cada 1,5-3s,
gancho não pode ser lento):
    hook/cta  2,6s   (precisa segurar o olho um pouco mais)
    stat      2,4s
    linha     1,9s
"""
import shutil
import subprocess
from pathlib import Path

import reels
from conteudo import CALENDARIO
from reel_fotos import REEL_FOTOS, CROPS

RAIZ = Path(__file__).parent
CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"
FFMPEG = "/usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/ffmpeg-linux-x86_64-v7.0.2"

DURACAO = {"hook": 2.6, "cta": 2.6, "stat": 2.4, "linha": 1.9}
FPS = 30


def renderizar_png(html_path: Path, png_path: Path):
    subprocess.run([
        CHROME, "--headless", "--disable-gpu", "--no-sandbox", "--hide-scrollbars",
        "--force-device-scale-factor=1", f"--window-size={reels.L},2100",
        "--virtual-time-budget=5000", f"--screenshot={png_path}",
        f"file://{html_path}",
    ], check=True, capture_output=True)


def recortar_png(png_path: Path):
    from PIL import Image
    im = Image.open(png_path)
    if im.size != (reels.L, reels.A):
        im.crop((0, 0, reels.L, reels.A)).save(png_path)


def segmento_mp4(png_path: Path, out_path: Path, dur: float, zoom_dir: str):
    frames = int(dur * FPS)
    if zoom_dir == "in":
        z = "min(zoom+0.0022,1.14)"
    else:
        z = "if(eq(on,1),1.14,max(zoom-0.0022,1.0))"
    vf = (
        f"scale={reels.L*2}:-1,"
        f"zoompan=z='{z}':d={frames}:s={reels.L}x{reels.A}:fps={FPS},"
        f"fade=t=in:st=0:d=0.22,fade=t=out:st={max(dur-0.22,0):.2f}:d=0.22"
    )
    subprocess.run([
        FFMPEG, "-y", "-loop", "1", "-i", str(png_path),
        "-vf", vf, "-t", f"{dur:.2f}", "-r", str(FPS),
        "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "18", "-preset", "medium",
        str(out_path),
    ], check=True, capture_output=True)


def montar_reel(post):
    pid = post["id"]
    pasta = RAIZ / pid
    pasta.mkdir(exist_ok=True)
    tmp = pasta / "_tmp"
    tmp.mkdir(exist_ok=True)

    foto_a, foto_b = REEL_FOTOS[pid]
    cenas = post["cenas"]
    n = len(cenas)
    segs = []

    for i, c in enumerate(cenas):
        foto = foto_a if i % 2 == 0 else foto_b
        crop = CROPS[i % len(CROPS)]
        zoom_dir = "in" if i % 2 == 0 else "out"
        kicker = post["pilar"] if i == 0 else None
        html = reels.cena(
            foto=foto, tipo=c["tipo"], txt=c["txt"], indice=i, total=n,
            kicker=kicker, num=c.get("num"), suf=c.get("suf"),
            crop=crop, zoom_dir=zoom_dir)
        html_path = tmp / f"{i:02d}.html"
        html_path.write_text(html, encoding="utf-8")
        png_path = tmp / f"{i:02d}.png"
        renderizar_png(html_path, png_path)
        recortar_png(png_path)

        dur = DURACAO.get(c["tipo"], 2.0)
        seg_path = tmp / f"{i:02d}.mp4"
        segmento_mp4(png_path, seg_path, dur, zoom_dir)
        segs.append(seg_path)

    lista = tmp / "lista.txt"
    lista.write_text("".join(f"file '{s.resolve()}'\n" for s in segs), encoding="utf-8")

    silencioso = tmp / "silencioso.mp4"
    subprocess.run([
        FFMPEG, "-y", "-f", "concat", "-safe", "0", "-i", str(lista),
        "-c", "copy", str(silencioso),
    ], check=True, capture_output=True)

    final = pasta / "reel.mp4"
    subprocess.run([
        FFMPEG, "-y", "-i", str(silencioso),
        "-f", "lavfi", "-i", "anullsrc=r=44100:cl=stereo",
        "-shortest", "-c:v", "copy", "-c:a", "aac", "-b:a", "128k",
        str(final),
    ], check=True, capture_output=True)

    shutil.rmtree(tmp)
    return final


def main():
    reels_posts = [p for p in CALENDARIO if p["tipo"] == "reel"]
    for post in reels_posts:
        out = montar_reel(post)
        tam = out.stat().st_size / 1024 / 1024
        print(f"  {post['id']:<24} {tam:.1f} MB  -> {out}")
    print(f"\n{len(reels_posts)} reels gerados.")


if __name__ == "__main__":
    main()
