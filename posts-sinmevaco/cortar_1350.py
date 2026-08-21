"""Corta PNGs renderizados para exatamente 1080x1350 (o headless do Chrome
devolve alguns pixels pretos a mais no rodape)."""
import struct, zlib, sys
from pathlib import Path

ALVO_W, ALVO_H = 1080, 1350


def chunks(data):
    i = 8
    while i < len(data):
        ln = struct.unpack(">I", data[i:i + 4])[0]
        tipo = data[i + 4:i + 8]
        yield tipo, data[i + 8:i + 8 + ln]
        i += 8 + ln + 4


def chunk(tipo, dados):
    return struct.pack(">I", len(dados)) + tipo + dados + struct.pack(
        ">I", zlib.crc32(tipo + dados) & 0xFFFFFFFF)


def cortar(path):
    raw = Path(path).read_bytes()
    idat, ihdr = b"", None
    for tipo, dados in chunks(raw):
        if tipo == b"IHDR":
            ihdr = dados
        elif tipo == b"IDAT":
            idat += dados
    w, h, prof, cor = struct.unpack(">IIBB", ihdr[:10])
    if (w, h) == (ALVO_W, ALVO_H):
        return False
    canais = {0: 1, 2: 3, 3: 1, 4: 2, 6: 4}[cor]
    linha = 1 + w * canais * prof // 8
    px = zlib.decompress(idat)[:linha * ALVO_H]
    novo = (b"\x89PNG\r\n\x1a\n"
            + chunk(b"IHDR", struct.pack(">IIBB", w, ALVO_H, prof, cor) + ihdr[10:13])
            + chunk(b"IDAT", zlib.compress(px, 9))
            + chunk(b"IEND", b""))
    Path(path).write_bytes(novo)
    return True


if __name__ == "__main__":
    alvos = sys.argv[1:] or [str(p) for p in Path(__file__).parent.glob("**/*.png")]
    print(f"{sum(cortar(p) for p in alvos)} de {len(alvos)} PNGs cortados para {ALVO_W}x{ALVO_H}")
