# -*- coding: utf-8 -*-
"""
Monta os 8 reels na linguagem de reels3: HTML por cena -> PNG -> segmento
MP4 com Ken Burns -> concatenação com corte suave -> faixa muda -> MP4.

Ritmo: foto, tipo, tipo, foto. Cena só de tipo não tem o que mover, então
leva um empurrão de câmera bem curto — o suficiente para o corte não
parecer slide de apresentação.
"""
import re
import shutil
import subprocess
from pathlib import Path

import reels3
from conteudo import CALENDARIO
from reel_fotos import REEL_FOTOS, CROPS

RAIZ = Path(__file__).parent
CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"
FFMPEG = ("/usr/local/lib/python3.11/dist-packages/imageio_ffmpeg/binaries/"
          "ffmpeg-linux-x86_64-v7.0.2")
FPS = 30

# corte a cada 1,8-3s; o gancho e o fecho seguram mais que o miolo
DUR = {"abertura": 2.9, "dito": 1.9, "travessa": 2.2, "cifra": 2.5, "vazado": 3.1}
FUNDO_DITO = ["tinta", "brasa"]


def _parte(texto):
    """Quebra a frase do CTA nas duas linhas do vazado (cheia / vazada)."""
    if "<br>" in texto:
        a, b = texto.split("<br>", 1)
    else:
        pedacos = texto.split(" ")
        meio = max(1, len(pedacos) // 2)
        a, b = " ".join(pedacos[:meio]), " ".join(pedacos[meio:])
    # a linha vazada é só contorno: <em> vermelho dentro dela sumiria
    return a.strip(), re.sub(r"</?em>", "", b).strip()


def plano(post):
    """Decide o dispositivo de cada cena. Devolve [(tipo, html), ...]."""
    foto_a, foto_b = REEL_FOTOS[post["id"]]
    cenas = post["cenas"]
    n = len(cenas)
    saida = []
    n_linha = 0

    for i, c in enumerate(cenas):
        ultima = i == n - 1
        crop = CROPS[i % len(CROPS)]

        if i == 0:
            saida.append(("abertura", reels3.abertura(foto_a, c["txt"], crop)))
        elif c["tipo"] == "stat":
            saida.append(("cifra", reels3.cifra(c["num"], c.get("suf"), c["txt"])))
        elif ultima:
            cheia, vazada = _parte(c["txt"])
            saida.append(("vazado", reels3.vazado(cheia, vazada, assina=True)))
        else:
            n_linha += 1
            if n_linha % 2 == 0:
                foto = foto_b if (n_linha // 2) % 2 else foto_a
                saida.append(("travessa", reels3.travessa(foto, c["txt"], crop)))
            else:
                fundo = FUNDO_DITO[(n_linha // 2) % len(FUNDO_DITO)]
                saida.append(("dito", reels3.dito(c["txt"], fundo)))
    return saida


def png(html_path, png_path):
    subprocess.run([
        CHROME, "--headless", "--disable-gpu", "--no-sandbox", "--hide-scrollbars",
        "--force-device-scale-factor=1", f"--window-size={reels3.L},2100",
        "--virtual-time-budget=6000", f"--screenshot={png_path}",
        f"file://{html_path}"], check=True, capture_output=True)
    from PIL import Image
    im = Image.open(png_path)
    if im.size != (reels3.L, reels3.A):
        im.crop((0, 0, reels3.L, reels3.A)).save(png_path)


def segmento(png_path, out, dur, direcao, sutil):
    frames = int(dur * FPS)
    alvo = 1.045 if sutil else 1.14          # cena de tipo se move pouco
    passo = (alvo - 1) / max(frames, 1)
    if direcao == "in":
        z = f"min(zoom+{passo:.5f},{alvo})"
    else:
        z = f"if(eq(on,1),{alvo},max(zoom-{passo:.5f},1.0))"
    vf = (f"scale={reels3.L*2}:-1,"
          f"zoompan=z='{z}':d={frames}:s={reels3.L}x{reels3.A}:fps={FPS},"
          f"fade=t=in:st=0:d=0.2,fade=t=out:st={max(dur-0.2,0):.2f}:d=0.2")
    subprocess.run([
        FFMPEG, "-y", "-loop", "1", "-i", str(png_path), "-vf", vf,
        "-t", f"{dur:.2f}", "-r", str(FPS), "-c:v", "libx264",
        "-pix_fmt", "yuv420p", "-crf", "18", "-preset", "medium", str(out),
    ], check=True, capture_output=True)


def montar(post):
    pasta = RAIZ / post["id"]
    pasta.mkdir(exist_ok=True)
    tmp = pasta / "_tmp"
    tmp.mkdir(exist_ok=True)
    segs = []

    for i, (tipo, html) in enumerate(plano(post)):
        hp = tmp / f"{i:02d}.html"
        hp.write_text(html, encoding="utf-8")
        pp = tmp / f"{i:02d}.png"
        png(hp, pp)
        sp = tmp / f"{i:02d}.mp4"
        segmento(pp, sp, DUR[tipo], "in" if i % 2 == 0 else "out",
                 sutil=tipo in ("dito", "vazado", "cifra"))
        segs.append(sp)

    lista = tmp / "lista.txt"
    lista.write_text("".join(f"file '{s.resolve()}'\n" for s in segs), encoding="utf-8")
    mudo = tmp / "mudo.mp4"
    subprocess.run([FFMPEG, "-y", "-f", "concat", "-safe", "0", "-i", str(lista),
                    "-c", "copy", str(mudo)], check=True, capture_output=True)
    final = pasta / "reel.mp4"
    subprocess.run([FFMPEG, "-y", "-i", str(mudo), "-f", "lavfi",
                    "-i", "anullsrc=r=44100:cl=stereo", "-shortest",
                    "-c:v", "copy", "-c:a", "aac", "-b:a", "128k", str(final)],
                   check=True, capture_output=True)
    shutil.rmtree(tmp)
    return final


def main():
    posts = [p for p in CALENDARIO if p["tipo"] == "reel"]
    for post in posts:
        out = montar(post)
        mb = out.stat().st_size / 1024 / 1024
        print(f"  {post['id']:<24} {mb:.1f} MB")
    print(f"\n{len(posts)} reels gerados.")


if __name__ == "__main__":
    main()
