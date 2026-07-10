# -*- coding: utf-8 -*-
"""Gera as 11 capas de curso num sistema editorial premium unico (800x500, 8:5).
Marca: vermelho #FF0005 + preto #111. Gold exclusivo do Mercado Livre.
Sem cropping: mesma proporcao dos conteineres (aspect-[8/5]).
"""
import os

OUT = os.path.join(os.path.dirname(__file__), "public", "cursos")

W, H = 800, 500

# Paletas de destaque
PALETTES = {
    "red": {
        "bg": [("0%", "#1a0507"), ("55%", "#120406"), ("100%", "#0a0203")],
        "accent": [("0%", "#FF6B6E"), ("45%", "#FF0005"), ("100%", "#B00003")],
        "glow": "rgba(255,0,5,0.20)",
    },
    "gold": {
        "bg": [("0%", "#1a0e08"), ("50%", "#0d0805"), ("100%", "#080503")],
        "accent": [("0%", "#E8C76A"), ("45%", "#D4AF37"), ("100%", "#A88825")],
        "glow": "rgba(212,175,55,0.20)",
    },
}

CREAM = "#F5EDE0"
WHITE = "#FBF7F2"

# Especificacao por capa: cada title line = (texto, size, italic, accent)
COURSES = {
    "capa-chatgpt-para-idosos.svg": dict(
        accent="red", eyebrow="CURSO GRATUITO · IA",
        title=[("ChatGPT", 62, False, False), ("para Idosos", 44, True, True)],
        stat="PASSO A PASSO · LINGUAGEM SIMPLES", free=True,
    ),
    "capa-ia-chatgpt-completo.svg": dict(
        accent="red", eyebrow="IA & MARKETING DIGITAL",
        title=[("IA & ChatGPT", 56, False, False), ("Curso Completo", 44, True, True)],
        stat="DO ZERO · APLICADO AO SEU NEGÓCIO", price="R$ 9,90 · ACESSO VITALÍCIO",
    ),
    "capa-ia-do-zero-ao-avancado.svg": dict(
        accent="red", eyebrow="◆ EDIÇÃO PREMIUM · IA ◆",
        title=[("IA do Zero", 58, False, False), ("ao ", 50, False, False, "Avançado", 50, True, True)],
        stat="95 PÁGINAS · 10 IAs · 50 TEMPLATES", price="DE R$ 297 · POR R$ 9,90",
    ),
    "capa-marketing-digital-definitivo.svg": dict(
        accent="red", eyebrow="◆ EDIÇÃO PREMIUM · MARKETING ◆",
        title=[("Marketing Digital", 50, False, False), ("O Curso ", 44, False, False, "Definitivo", 44, True, True)],
        stat="146 PÁGINAS · 13 MÓDULOS · 4 NÍVEIS", price="DE R$ 297 · POR R$ 9,90",
    ),
    "capa-mercado-livre-definitivo.svg": dict(
        accent="gold", eyebrow="◆ MERCADO LIVRE ◆",
        title=[("Do Zero ao", 46, False, False), ("Mercado Líder", 46, False, False), ("Gold.", 78, True, True)],
        stat="126 PÁGINAS · 15 MÓDULOS", price="DE R$ 297 · POR R$ 9,90",
    ),
    "capa-marketing-digital-iniciantes.svg": dict(
        accent="red", eyebrow="MARKETING · INICIANTES",
        title=[("Marketing Digital", 50, False, False), ("para Iniciantes", 44, True, True)],
        stat="COMECE DO ABSOLUTO ZERO", price="DE R$ 197 · POR R$ 9,90",
    ),
    "capa-google-meu-negocio-do-zero.svg": dict(
        accent="red", eyebrow="CURSO GRATUITO · SEO LOCAL",
        title=[("Google Meu", 54, False, False), ("Negócio do Zero", 44, True, True)],
        stat="APAREÇA NO MAPA DA SUA CIDADE", free=True,
    ),
    "capa-redes-sociais-que-vendem.svg": dict(
        accent="red", eyebrow="CURSO GRATUITO · SOCIAL",
        title=[("Redes Sociais", 54, False, False), ("que Vendem", 46, True, True)],
        stat="CONTEÚDO QUE VIRA CLIENTE", free=True,
    ),
    "capa-funis-de-vendas-simplificado.svg": dict(
        accent="red", eyebrow="VENDAS · AUTOMAÇÃO",
        title=[("Funis de Vendas", 52, False, False), ("Simplificado", 46, True, True)],
        stat="DO LEAD À VENDA · PASSO A PASSO", price="DE R$ 297 · POR R$ 9,90",
    ),
    "capa-ferramentas-digitais-secretarias.svg": dict(
        accent="red", eyebrow="CURSO GRATUITO · PRODUTIVIDADE",
        title=[("Ferramentas Digitais", 44, False, False), ("para Secretárias", 42, True, True)],
        stat="ORGANIZE · AUTOMATIZE · GANHE TEMPO", free=True,
    ),
    "capa-ebook-ia-marketing-sites.svg": dict(
        accent="red", eyebrow="EBOOK · IA + SITES",
        title=[("Crie Sites ", 48, False, False, "com IA", 48, True, True), ("usando Claude", 42, True, False)],
        stat="DO BRIEFING AO SITE NO AR", price="DE R$ 197 · POR R$ 9,90",
    ),
}


def esc(s):
    return s.replace("&", "&amp;")


def render_title_line(line, y, accent_id):
    """line = (t,size,italic,accent) ou (t1,s1,i1,a1, t2,s2,i2,a2) para dois trechos."""
    serif = "Georgia, 'DM Serif Display', serif"
    if len(line) == 4:
        t, size, italic, acc = line
        fill = accent_id if acc else CREAM
        style = ' font-style="italic"' if italic else ''
        weight = 700 if not italic else 700
        return (f'  <text x="400" y="{y}" font-family="{serif}" font-size="{size}" '
                f'font-weight="{weight}"{style} fill="{fill}" text-anchor="middle" '
                f'letter-spacing="-1">{esc(t)}</text>\n'), size
    else:
        # dois trechos na mesma linha, centralizados juntos
        t1, s1, i1, a1, t2, s2, i2, a2 = line
        size = max(s1, s2)
        # aproxima largura (0.54*size por char em serif) pra centralizar
        w1 = len(t1) * 0.54 * s1
        w2 = len(t2) * 0.54 * s2
        total = w1 + w2
        x1 = 400 - total / 2
        fill1 = accent_id if a1 else CREAM
        fill2 = accent_id if a2 else CREAM
        st1 = ' font-style="italic"' if i1 else ''
        st2 = ' font-style="italic"' if i2 else ''
        s = (f'  <text y="{y}" font-family="{serif}" text-anchor="start" letter-spacing="-1">\n'
             f'    <tspan x="{x1:.0f}" font-size="{s1}" font-weight="700"{st1} fill="{fill1}">{esc(t1)}</tspan>'
             f'<tspan font-size="{s2}" font-weight="700"{st2} fill="{fill2}">{esc(t2)}</tspan>\n'
             f'  </text>\n')
        return s, size


def build(spec):
    pal = PALETTES[spec["accent"]]
    bg_stops = "".join(f'<stop offset="{o}" stop-color="{c}"/>' for o, c in pal["bg"])
    ac_stops = "".join(f'<stop offset="{o}" stop-color="{c}"/>' for o, c in pal["accent"])
    accent_id = "url(#accent)"

    s = []
    s.append(f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" '
             f'viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice" role="img">')
    s.append('  <defs>')
    s.append(f'    <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">{bg_stops}</linearGradient>')
    s.append(f'    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">{ac_stops}</linearGradient>')
    s.append('    <radialGradient id="glow" cx="50%" cy="50%" r="55%">'
             f'<stop offset="0%" stop-color="{pal["glow"]}"/>'
             f'<stop offset="72%" stop-color="rgba(0,0,0,0)"/></radialGradient>')
    s.append('    <radialGradient id="vig" cx="50%" cy="48%" r="72%">'
             '<stop offset="38%" stop-color="rgba(0,0,0,0)"/>'
             '<stop offset="100%" stop-color="rgba(0,0,0,0.55)"/></radialGradient>')
    s.append('  </defs>')

    # fundo + halos + vinheta
    s.append(f'  <rect width="{W}" height="{H}" fill="url(#bg)"/>')
    s.append('  <circle cx="110" cy="110" r="230" fill="url(#glow)"/>')
    s.append('  <circle cx="700" cy="430" r="210" fill="url(#glow)"/>')
    s.append(f'  <rect width="{W}" height="{H}" fill="url(#vig)"/>')
    # moldura fina
    s.append(f'  <rect x="18" y="18" width="{W-36}" height="{H-36}" rx="6" fill="none" '
             f'stroke="{accent_id}" stroke-width="1" stroke-opacity="0.28"/>')

    # asteriscos decorativos
    s.append(f'  <text x="46" y="66" font-family="Georgia, serif" font-size="26" fill="{accent_id}" opacity="0.4">✦</text>')
    s.append(f'  <text x="742" y="470" font-family="Georgia, serif" font-size="22" fill="{accent_id}" opacity="0.35">✦</text>')

    # eyebrow + linha
    s.append(f'  <text x="400" y="70" font-family="Arial, Helvetica, sans-serif" font-size="13" '
             f'font-weight="800" fill="{accent_id}" text-anchor="middle" letter-spacing="7">{esc(spec["eyebrow"])}</text>')
    s.append(f'  <line x1="320" y1="88" x2="480" y2="88" stroke="{accent_id}" stroke-width="0.8" stroke-opacity="0.45"/>')

    # titulo (bloco centralizado verticalmente em ~y 120..300)
    lines = spec["title"]
    heights = []
    for ln in lines:
        heights.append(ln[1] if len(ln) == 4 else max(ln[1], ln[5]))
    gap = 1.06
    total = sum(h * gap for h in heights)
    y = 150 + heights[0] - total / 2 + total * 0.5 - (total - heights[0]*gap)  # aproxima
    # posicionamento simples e estavel: primeira baseline em start
    start = 150 + heights[0]
    if len(lines) == 3:
        start = 132 + heights[0]
    y = start
    for ln in lines:
        txt, size = render_title_line(ln, int(y), accent_id)
        s.append(txt.rstrip("\n"))
        y += size * gap + 6

    # divisor accent
    dy = int(y) + 4
    s.append(f'  <rect x="360" y="{dy}" width="80" height="2.5" rx="1" fill="{accent_id}" opacity="0.9"/>')

    # stat
    sy = dy + 34
    s.append(f'  <text x="400" y="{sy}" font-family="Arial, Helvetica, sans-serif" font-size="12" '
             f'font-weight="700" fill="{WHITE}" text-anchor="middle" letter-spacing="4" opacity="0.72">{esc(spec["stat"])}</text>')

    # price chip / free chip (ancorado ao rodape)
    if spec.get("free"):
        chip_fill = "rgba(34,197,94,0.14)"
        chip_stroke = "#22C55E"
        chip_text_fill = "#4ADE80"
        chip_text = "GRÁTIS · PDF IMEDIATO"
    else:
        chip_fill = "rgba(255,0,5,0.12)"
        chip_stroke = accent_id
        chip_text_fill = accent_id
        chip_text = spec["price"]
    cw = 268
    cx = 400 - cw / 2
    cy = 418
    s.append(f'  <rect x="{cx:.0f}" y="{cy}" width="{cw}" height="34" rx="17" fill="{chip_fill}" '
             f'stroke="{chip_stroke}" stroke-width="1" stroke-opacity="0.6"/>')
    s.append(f'  <text x="400" y="{cy+22}" font-family="Arial, Helvetica, sans-serif" font-size="12" '
             f'font-weight="800" fill="{chip_text_fill}" text-anchor="middle" letter-spacing="3">{esc(chip_text)}</text>')

    # brand footer
    s.append(f'  <text x="400" y="480" font-family="Arial, Helvetica, sans-serif" font-size="9" '
             f'font-weight="700" fill="{WHITE}" text-anchor="middle" letter-spacing="7" opacity="0.5">CALAZANS LUMINA</text>')

    s.append('</svg>')
    return "\n".join(s) + "\n"


def main():
    for fname, spec in COURSES.items():
        svg = build(spec)
        with open(os.path.join(OUT, fname), "w", encoding="utf-8") as f:
            f.write(svg)
        print("ok", fname, len(svg), "bytes")


if __name__ == "__main__":
    main()
