"""
Gerador V2 dos 12 modelos da Calazans Lumina.
Formato: 1080x1350 (Instagram vertical 4:5)
- Variacao visual: fullbleed, split, mosaico, tipografico
- Dados verificaveis com fonte (Sebrae, DataReportal, CBIC, Mobile Time)
- Fotos Unsplash CDN (HTTP 200 testado)
"""
from pathlib import Path
import re, unicodedata

ROOT = Path(__file__).parent

# ====== BRANDING ======
WHATSAPP = "31 98294-8067"
HANDLE = "@calazanslumina"
SITE = "calazanslumina.com.br"

# ====== FOTOS PESSOAIS (GHL CDN) ======
RHAI_1 = "https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b435a20c0357f3208c418.jpeg"
RHAI_2 = "https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b435a20c035285908c419.jpeg"
RHAI_3 = "https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d74aa28b2801643ac3f117.jpeg"

# ====== FOTOS UNSPLASH (HTTP 200 testadas) ======
PEDREIRO_1 = "https://images.unsplash.com/photo-1673865641469-34498379d8af?w=1080&q=80&auto=format&fit=crop"
PEDREIRO_2 = "https://images.unsplash.com/photo-1617720356637-6264c1c0b4bb?w=1080&q=80&auto=format&fit=crop"
PINTOR_1 = "https://images.unsplash.com/photo-1652829069834-2c05031199c5?w=1080&q=80&auto=format&fit=crop"
PINTOR_2 = "https://images.unsplash.com/photo-1516962080544-eac695c93791?w=1080&q=80&auto=format&fit=crop"
OBRA_1 = "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?w=1080&q=80&auto=format&fit=crop"
OBRA_2 = "https://images.unsplash.com/photo-1509453721491-c3af5961df76?w=1080&q=80&auto=format&fit=crop"
FERRAMENTA_1 = "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=1080&q=80&auto=format&fit=crop"
FERRAMENTA_2 = "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?w=1080&q=80&auto=format&fit=crop"
WPP_1 = "https://images.unsplash.com/photo-1610548822783-33fb5cb0e3a8?w=1080&q=80&auto=format&fit=crop"
WPP_2 = "https://images.unsplash.com/photo-1587573578181-f3342274f4c7?w=1080&q=80&auto=format&fit=crop"
IA_1 = "https://images.unsplash.com/photo-1676272682018-b1435bad1cf0?w=1080&q=80&auto=format&fit=crop"
IA_2 = "https://images.unsplash.com/photo-1678347123725-2d0d31bc06bd?w=1080&q=80&auto=format&fit=crop"
PROF_1 = "https://images.unsplash.com/photo-1732395805034-e0bf859665e5?w=1080&q=80&auto=format&fit=crop"
PROF_2 = "https://images.unsplash.com/photo-1742844019488-12a9356a7ace?w=1080&q=80&auto=format&fit=crop"
REFORMA_1 = "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?w=1080&q=80&auto=format&fit=crop"
REFORMA_2 = "https://images.unsplash.com/photo-1523413363574-c30aa1c2a516?w=1080&q=80&auto=format&fit=crop"
MARCENEIRO_1 = "https://images.unsplash.com/photo-1590880795696-20c7dfadacde?w=1080&q=80&auto=format&fit=crop"
MARCENEIRO_2 = "https://images.unsplash.com/photo-1687422810663-c316494f725a?w=1080&q=80&auto=format&fit=crop"
CASA_1 = "https://images.unsplash.com/photo-1712124343150-f33fa86e431f?w=1080&q=80&auto=format&fit=crop"
CASA_2 = "https://images.unsplash.com/photo-1711452183732-1899e63cf0b3?w=1080&q=80&auto=format&fit=crop"

# ====== BASE CSS ======
BASE_CSS = """
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Bebas+Neue&family=Inter:wght@400;500;600;700;800;900&display=swap');
*{margin:0;padding:0;box-sizing:border-box;-webkit-font-smoothing:antialiased}
html,body{width:1080px;height:1350px;overflow:hidden;background:#000}
body{font-family:'Inter',sans-serif;color:#1c1c1c}
.canvas{width:1080px;height:1350px;position:relative;overflow:hidden}

/* LOGO */
.logo{display:inline-flex;align-items:center;gap:14px}
.logo-c{width:62px;height:62px;background:#FF0005;color:#fff;display:flex;align-items:center;justify-content:center;font-family:'Bricolage Grotesque',sans-serif;font-size:46px;font-weight:700;line-height:1;border-radius:3px;flex-shrink:0}
.logo-text{display:flex;flex-direction:column;line-height:1.05}
.logo-name{font-family:'Bricolage Grotesque',sans-serif;font-size:24px;font-weight:700;letter-spacing:.5px;line-height:1}
.logo-sub{font-size:10px;letter-spacing:3px;color:#FF0005;font-weight:700;text-transform:uppercase;margin-top:5px}
.logo.dark .logo-name{color:#fff}
.logo.dark .logo-sub{color:#ffb3b5}

/* PAGINACAO */
.pagn{font-family:'Bebas Neue',sans-serif;font-size:30px;letter-spacing:2px;color:#FF0005}
.pagn .total{color:#999;font-size:27px}
.pagn.dark{color:#fff}.pagn.dark .total{color:#888}

/* EYEBROW */
.eyebrow{font-size:13px;letter-spacing:5px;color:#FF0005;font-weight:800;text-transform:uppercase}
.eyebrow.dark{color:#FF6B6F}

/* SWIPE */
.swipe{display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#FF0005}
.swipe.dark{color:#FF6B6F}

/* SOURCE BADGE */
.source{font-size:11px;letter-spacing:1.5px;color:#888;font-weight:500;font-style:italic}
.source.dark{color:#888}
.source b{font-style:normal;color:#aaa;font-weight:700;letter-spacing:2px}
.source.dark b{color:#bbb}

/* =================== LAYOUTS COMUNS =================== */

/* FULLBLEED: foto cobre 100%, conteudo sobreposto */
.fb{position:absolute;inset:0;width:100%;height:100%}
.fb-img{position:absolute;inset:0;background-size:cover;background-position:center}
.fb-overlay{position:absolute;inset:0}
.fb-top{position:absolute;top:54px;left:64px;right:64px;display:flex;justify-content:space-between;align-items:flex-start;z-index:5}
.fb-bottom{position:absolute;bottom:0;left:0;right:0;padding:0 64px 56px;z-index:5;color:#fff}
.fb-footline{margin-top:32px;padding-top:22px;border-top:1px solid rgba(255,255,255,.2);display:flex;justify-content:space-between;align-items:center;font-size:13px;letter-spacing:2px;font-weight:600;color:rgba(255,255,255,.75)}
.fb-footline .handle{color:#fff;font-weight:800;letter-spacing:3px}

/* SPLIT: 50% foto top + 50% texto bottom */
.sp{display:grid;grid-template-rows:560px 1fr;width:1080px;height:1350px}
.sp-img{background-size:cover;background-position:center;position:relative}
.sp-img-tag{position:absolute;top:32px;left:32px;background:#FF0005;color:#fff;padding:10px 18px;font-size:11px;letter-spacing:4px;font-weight:800;text-transform:uppercase;border-radius:3px}
.sp-text{padding:48px 64px 56px;display:flex;flex-direction:column;justify-content:space-between;background:#fafaf7;position:relative}
.sp-text.dark{background:#1a1a1a;color:#fff}

/* TIPO: conteudo tipografico padrao */
.tipo{width:1080px;height:1350px;display:grid;grid-template-rows:auto minmax(0,1fr) auto;padding:68px;background:#fafaf7}
.tipo.dark{background:#1a1a1a;color:#fff}
.tipo .head{display:flex;justify-content:space-between;align-items:flex-start}
.tipo .body{align-self:center;width:100%;overflow:hidden}
.tipo .foot{display:flex;justify-content:space-between;align-items:flex-end;padding-top:28px;border-top:1px solid #d4d2c8;font-size:13px;letter-spacing:2px;font-weight:600}
.tipo.dark .foot{border-top-color:rgba(255,255,255,.15)}
.tipo .handle{color:#FF0005;font-weight:800;letter-spacing:3px}
.tipo.dark .handle{color:#fff}
.tipo .foot-r{color:#555}
.tipo.dark .foot-r{color:#aaa}
"""

def render_canvas(inner_html, extra_css=""):
    return f"""<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="UTF-8"><style>{BASE_CSS}
{extra_css}
</style></head><body><div class="canvas">{inner_html}</div></body></html>"""

# ====== HELPERS ======
def logo_light():
    return '<div class="logo"><div class="logo-c">C</div><div class="logo-text"><span class="logo-name">Calazans Lumina</span><span class="logo-sub">Agencia · MG</span></div></div>'

def logo_dark():
    return '<div class="logo dark"><div class="logo-c">C</div><div class="logo-text"><span class="logo-name">Calazans Lumina</span><span class="logo-sub">Agencia · MG</span></div></div>'

def pagn(n, total, dark=False):
    cls = "pagn dark" if dark else "pagn"
    return f'<div class="{cls}">{n:02d}<span class="total">/{total:02d}</span></div>'


# ============================================
# MODELO 01 — APRESENTACAO RHAIDELINE (fullbleed)
# ============================================
def modelo_01_apresentacao_rhaideline():
    css = f"""
    .m1-img{{background-image:url('{RHAI_3}');background-position:center 20%}}
    .m1-img::after{{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.4) 45%,rgba(0,0,0,.88) 78%,rgba(0,0,0,.98) 100%)}}
    .m1-label{{background:#FF0005;color:#fff;padding:12px 22px;font-size:12px;letter-spacing:4px;font-weight:800;text-transform:uppercase;border-radius:3px}}
    .m1-eyebrow{{font-size:13px;letter-spacing:5px;color:#FF6B6F;font-weight:800;text-transform:uppercase;margin-bottom:18px}}
    .m1-name{{font-family:'Bricolage Grotesque',sans-serif;font-size:94px;font-weight:700;line-height:.98;letter-spacing:0;color:#fff;margin-bottom:22px}}
    .m1-role{{font-size:27px;font-weight:500;color:#fff;opacity:.92;line-height:1.5;max-width:920px}}
    .m1-role b{{color:#FF6B6F;font-weight:700}}
    """
    inner = f"""
      <div class="fb">
        <div class="fb-img m1-img"></div>
        <div class="fb-top">{logo_dark()}<div class="m1-label">Quem somos</div></div>
        <div class="fb-bottom">
          <div class="m1-eyebrow">Fundadora</div>
          <div class="m1-name">Rhaideline<br>Calazans</div>
          <div class="m1-role">Marketing digital sob medida pra <b>pintores, pedreiros, marceneiros, eletricistas e construtoras</b> que querem ser encontrados pelo cliente certo.</div>
          <div class="fb-footline"><span class="handle">{HANDLE}</span><span>{WHATSAPP}</span></div>
        </div>
      </div>
    """
    return [("01", render_canvas(inner, css))]


# ============================================
# MODELO 02 — APRESENTACAO AGENCIA (4 slides mistos)
# ============================================
def modelo_02_apresentacao_agencia():
    slides = []
    # SLIDE 1 — CAPA FULLBLEED COM FOTO DE OBRA
    css1 = f"""
    .m2c-img{{background-image:url('{OBRA_1}')}}
    .m2c-overlay{{background:linear-gradient(180deg,rgba(10,10,15,.55) 0%,rgba(10,10,15,.7) 50%,rgba(10,10,15,.95) 100%)}}
    .m2c-eyebrow{{font-size:13px;letter-spacing:5px;color:#FF6B6F;font-weight:800;text-transform:uppercase;margin-bottom:22px}}
    .m2c-t{{font-family:'Bricolage Grotesque',sans-serif;font-size:90px;font-weight:700;line-height:1;letter-spacing:-1px;color:#fff;margin-bottom:24px}}
    .m2c-t em{{color:#FF0005;font-style:normal}}
    .m2c-s{{font-size:27px;color:rgba(255,255,255,.88);line-height:1.5;max-width:880px}}
    """
    s1 = f"""<div class="fb">
      <div class="fb-img m2c-img"></div>
      <div class="fb-overlay m2c-overlay"></div>
      <div class="fb-top">{logo_dark()}{pagn(1,4,dark=True)}</div>
      <div class="fb-bottom">
        <div class="m2c-eyebrow">Quem somos</div>
        <div class="m2c-t">A agencia que fala <em>a lingua</em> da obra.</div>
        <div class="m2c-s">Sem marketing generico de manual. Sem agencia que nunca pegou em uma furadeira na vida.</div>
        <div class="fb-footline"><span class="handle">{HANDLE}</span><span class="swipe dark">Arrasta › </span></div>
      </div></div>"""
    slides.append(("01_capa", render_canvas(s1, css1)))

    # SLIDE 2 — SPLIT: foto profissional + lista de quem
    css2 = f"""
    .m2p-img{{background-image:url('{PROF_1}')}}
    .m2p-list{{list-style:none;margin-top:24px}}
    .m2p-list li{{padding:11px 0 11px 30px;position:relative;font-size:26px;color:#1c1c1c;font-weight:600;border-bottom:1px solid #e8e6dc}}
    .m2p-list li:last-child{{border-bottom:none}}
    .m2p-list li::before{{content:'›';position:absolute;left:0;top:5px;color:#FF0005;font-weight:800;font-size:26px;line-height:1}}
    """
    s2 = f"""<div class="sp">
      <div class="sp-img m2p-img"><div class="sp-img-tag">Para quem</div></div>
      <div class="sp-text">
        <div>
          <div class="eyebrow" style="margin-bottom:10px">02 · {pagn(2,4).replace('<div class="pagn">','').replace('</div>','')}</div>
          <h2 style="font-family:'Bricolage Grotesque',sans-serif;font-size:42px;font-weight:700;line-height:1.1;letter-spacing:-.3px;color:#1c1c1c">Trabalhamos com quem faz o Brasil andar.</h2>
          <ul class="m2p-list">
            <li>Pintores · Pedreiros · Marceneiros</li>
            <li>Eletricistas · Encanadores · Serralheiros</li>
            <li>Construtoras pequenas · Empresas de reforma</li>
          </ul>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:flex-end;padding-top:18px;border-top:1px solid #d4d2c8;font-size:13px;letter-spacing:2px;font-weight:600">
          <span style="color:#FF0005;font-weight:800;letter-spacing:3px">{HANDLE}</span>
          <span class="swipe">Arrasta › </span>
        </div>
      </div></div>"""
    slides.append(("02_para_quem", render_canvas(s2, css2)))

    # SLIDE 3 — TIPOGRAFICO: como trabalhamos (3 passos)
    css3 = """
    .m2c3-step{display:flex;gap:28px;align-items:flex-start;padding:22px 0;border-bottom:1px solid #d4d2c8}
    .m2c3-step:last-child{border-bottom:none}
    .m2c3-n{font-family:'Bricolage Grotesque',sans-serif;font-size:54px;color:#FF0005;font-weight:700;line-height:1;width:80px;flex-shrink:0}
    .m2c3-t{font-family:'Bricolage Grotesque',sans-serif;font-size:32px;font-weight:700;line-height:1.2;color:#1c1c1c;margin-bottom:6px}
    .m2c3-d{font-size:25px;color:#555;line-height:1.5}
    """
    s3 = f"""<div class="tipo">
      <div class="head">{logo_light()}{pagn(3,4)}</div>
      <div class="body">
        <div class="eyebrow" style="margin-bottom:14px">O que fazemos</div>
        <h2 style="font-family:'Bricolage Grotesque',sans-serif;font-size:56px;font-weight:700;line-height:1.05;letter-spacing:-.6px;color:#1c1c1c;margin-bottom:22px">Tres frentes pra o telefone tocar.</h2>
        <div class="m2c3-step"><div class="m2c3-n">01</div><div><div class="m2c3-t">Instagram profissional</div><div class="m2c3-d">12 a 16 posts por mes, carrosseis e reels que mostram seu trabalho do jeito que cliente entende.</div></div></div>
        <div class="m2c3-step"><div class="m2c3-n">02</div><div><div class="m2c3-t">WhatsApp automatico</div><div class="m2c3-d">Resposta na hora, 24h por dia, mesmo voce na obra. Voce volta e ja tem os orcamentos.</div></div></div>
        <div class="m2c3-step"><div class="m2c3-n">03</div><div><div class="m2c3-t">Voce no Google da sua cidade</div><div class="m2c3-d">Site rapido + ficha Google Empresa. Quem pesquisa o seu servico te acha em primeiro.</div></div></div>
      </div>
      <div class="foot"><span class="handle">{HANDLE}</span><span class="swipe">Arrasta › </span></div>
    </div>"""
    slides.append(("03_como", render_canvas(s3, css3)))

    # SLIDE 4 — CTA DARK
    css4 = """
    .m2f{width:1080px;height:1350px;display:grid;grid-template-rows:auto minmax(0,1fr) auto;background:#1a1a1a;color:#fff;padding:68px;position:relative;overflow:hidden}
    .m2f::before{content:'';position:absolute;top:-180px;right:-180px;width:560px;height:560px;background:radial-gradient(circle,rgba(255,0,5,.4) 0%,transparent 60%);border-radius:50%}
    .m2f .head{display:flex;justify-content:space-between;position:relative;z-index:2}
    .m2f .body{align-self:center;position:relative;z-index:2}
    .m2f-t{font-family:'Bricolage Grotesque',sans-serif;font-size:64px;font-weight:700;line-height:1.05;letter-spacing:-.6px;color:#fff;margin-bottom:34px}
    .m2f-t em{color:#FF0005;font-style:normal}
    .m2f-cta{display:inline-block;background:#FF0005;color:#fff;padding:24px 40px;font-size:16px;letter-spacing:2.5px;font-weight:800;text-transform:uppercase;border-radius:3px;margin-bottom:18px}
    .m2f-wp{font-size:26px;font-weight:600;color:#fff;opacity:.9;letter-spacing:1px}
    .m2f .foot{display:flex;justify-content:space-between;align-items:flex-end;padding-top:28px;border-top:2px solid #FF0005;position:relative;z-index:2;font-size:13px;letter-spacing:2px;font-weight:600;color:#aaa}
    .m2f .handle{color:#fff;font-weight:800;letter-spacing:3px}
    """
    s4 = f"""<div class="m2f">
      <div class="head">{logo_dark()}{pagn(4,4,dark=True)}</div>
      <div class="body">
        <div class="eyebrow dark" style="margin-bottom:22px">Vamos conversar</div>
        <h2 class="m2f-t">Sua obra mostra qualidade. Seu <em>Instagram</em> tambem deveria.</h2>
        <div class="m2f-cta">Chama no WhatsApp</div>
        <div class="m2f-wp">{WHATSAPP}</div>
      </div>
      <div class="foot"><span class="handle">{HANDLE}</span><span>{SITE}</span></div>
    </div>"""
    slides.append(("04_cta", render_canvas(s4, css4)))
    return slides


# ============================================
# MODELO 03 — 3 ERROS NO INSTAGRAM (5 slides com fotos)
# ============================================
def modelo_03_3_erros():
    slides = []
    # 01 CAPA TIPO COM DADO
    css1 = """
    .m3-num{font-family:'Bebas Neue',sans-serif;font-size:260px;line-height:.85;color:#FF0005;letter-spacing:0}
    .m3-num em{color:#1c1c1c;font-style:normal}
    .m3-sub{font-family:'Bricolage Grotesque',sans-serif;font-size:42px;font-weight:700;line-height:1.15;letter-spacing:-.3px;color:#1c1c1c;max-width:920px;margin-top:18px}
    .m3-stat{margin-top:24px;padding:16px 22px;background:#fff;border-left:4px solid #FF0005;display:inline-block;font-size:16px;color:#1c1c1c;line-height:1.5;max-width:880px}
    .m3-stat b{color:#FF0005;font-weight:800}
    """
    s1 = f"""<div class="tipo">
      <div class="head">{logo_light()}{pagn(1,5)}</div>
      <div class="body">
        <div class="eyebrow" style="margin-bottom:14px">Erros no Instagram</div>
        <div class="m3-num"><em>03</em> ERROS</div>
        <div class="m3-sub">que estao fazendo seu Instagram perder cliente todo dia.</div>
        <div class="m3-stat"><b>73% dos brasileiros</b> ja contrataram servico que descobriram no Instagram. <span class="source"><b>Fonte:</b> Opinion Box, 2025</span></div>
      </div>
      <div class="foot"><span class="handle">{HANDLE}</span><span class="swipe">Arrasta › </span></div>
    </div>"""
    slides.append(("01_capa", render_canvas(s1, css1)))

    # 02 — SPLIT: foto pessoa olhando celular + erro 1
    css2 = f"""
    .m3-2-img{{background-image:url('{WPP_2}')}}
    .m3-frase{{font-family:'Bricolage Grotesque',sans-serif;font-size:38px;font-weight:700;line-height:1.15;letter-spacing:-.3px;color:#1c1c1c;margin-top:14px}}
    .m3-frase span{{color:#FF0005}}
    .m3-exp{{font-size:25px;color:#555;line-height:1.55;margin-top:18px}}
    .m3-foot{{display:flex;justify-content:space-between;align-items:flex-end;padding-top:18px;border-top:1px solid #d4d2c8;font-size:13px;letter-spacing:2px;font-weight:600}}
    .m3-foot .handle{{color:#FF0005;font-weight:800;letter-spacing:3px}}
    """
    s2 = f"""<div class="sp">
      <div class="sp-img m3-2-img"><div class="sp-img-tag">Erro 01</div></div>
      <div class="sp-text">
        <div>
          <div class="eyebrow" style="margin-bottom:6px">02 · de 05</div>
          <div class="m3-frase">Postar so foto de obra <span>pronta.</span></div>
          <p class="m3-exp">O cliente quer ver o ANTES, o processo e o DEPOIS. E o processo que vende, porque mostra o quanto voce trabalha. Foto pronta sem contexto vira so mais uma imagem no feed.</p>
        </div>
        <div class="m3-foot"><span class="handle">{HANDLE}</span><span class="swipe">Arrasta › </span></div>
      </div></div>"""
    slides.append(("02_erro1", render_canvas(s2, css2)))

    # 03 — SPLIT: foto profissional + erro 2
    css3 = f"""
    .m3-3-img{{background-image:url('{PROF_2}')}}
    """ + css2.replace("m3-2-img", "m3-3-img")
    s3 = f"""<div class="sp">
      <div class="sp-img m3-3-img"><div class="sp-img-tag">Erro 02</div></div>
      <div class="sp-text">
        <div>
          <div class="eyebrow" style="margin-bottom:6px">03 · de 05</div>
          <div class="m3-frase">Bio sem cidade e sem <span>WhatsApp clicavel.</span></div>
          <p class="m3-exp">O cliente abre seu perfil e em 5 segundos quer saber: voce atende minha cidade? Como falo agora? Se ele tem que procurar essa resposta, voce perdeu.</p>
        </div>
        <div class="m3-foot"><span class="handle">{HANDLE}</span><span class="swipe">Arrasta › </span></div>
      </div></div>"""
    slides.append(("03_erro2", render_canvas(s3, css3)))

    # 04 — SPLIT: foto obra + erro 3
    css4 = f"""
    .m3-4-img{{background-image:url('{OBRA_2}')}}
    """ + css2.replace("m3-2-img", "m3-4-img")
    s4 = f"""<div class="sp">
      <div class="sp-img m3-4-img"><div class="sp-img-tag">Erro 03</div></div>
      <div class="sp-text">
        <div>
          <div class="eyebrow" style="margin-bottom:6px">04 · de 05</div>
          <div class="m3-frase">Sumir por <span>semanas seguidas.</span></div>
          <p class="m3-exp">O algoritmo entende que voce parou de trabalhar. Quem te via, ja nao ve mais. Constancia importa mais que perfeicao: 3 posts simples por semana ganham de um post genial por mes.</p>
        </div>
        <div class="m3-foot"><span class="handle">{HANDLE}</span><span class="swipe">Arrasta › </span></div>
      </div></div>"""
    slides.append(("04_erro3", render_canvas(s4, css4)))

    # 05 — CTA DARK
    css5 = """
    .m3f{width:1080px;height:1350px;display:grid;grid-template-rows:auto minmax(0,1fr) auto;background:#1a1a1a;color:#fff;padding:68px;position:relative;overflow:hidden}
    .m3f::before{content:'';position:absolute;top:-180px;right:-180px;width:560px;height:560px;background:radial-gradient(circle,rgba(255,0,5,.4) 0%,transparent 60%);border-radius:50%}
    .m3f .head{display:flex;justify-content:space-between;position:relative;z-index:2}
    .m3f .body{align-self:center;position:relative;z-index:2}
    .m3f-t{font-family:'Bricolage Grotesque',sans-serif;font-size:60px;font-weight:700;line-height:1.05;letter-spacing:-.5px;color:#fff;margin-bottom:32px}
    .m3f-t em{color:#FF0005;font-style:normal}
    .m3f-cta{display:inline-block;background:#FF0005;color:#fff;padding:22px 36px;font-size:16px;letter-spacing:2px;font-weight:800;text-transform:uppercase;border-radius:3px;margin-bottom:18px}
    .m3f-wp{font-size:26px;font-weight:600;color:#fff;opacity:.9;letter-spacing:1px}
    .m3f .foot{display:flex;justify-content:space-between;padding-top:28px;border-top:2px solid #FF0005;position:relative;z-index:2;font-size:13px;letter-spacing:2px;font-weight:600;color:#aaa}
    .m3f .handle{color:#fff;font-weight:800;letter-spacing:3px}
    """
    s5 = f"""<div class="m3f">
      <div class="head">{logo_dark()}{pagn(5,5,dark=True)}</div>
      <div class="body">
        <div class="eyebrow dark" style="margin-bottom:22px">Pronto pra ajeitar?</div>
        <h2 class="m3f-t">A gente cuida do seu Instagram <em>enquanto voce cuida da obra.</em></h2>
        <div class="m3f-cta">Chama no WhatsApp</div>
        <div class="m3f-wp">{WHATSAPP}</div>
      </div>
      <div class="foot"><span class="handle">{HANDLE}</span><span>{SITE}</span></div>
    </div>"""
    slides.append(("05_cta", render_canvas(s5, css5)))
    return slides


# ============================================
# MODELO 04 — CHECKLIST (6 slides tipograficos)
# ============================================
def modelo_04_checklist():
    slides = []
    css_base = """
    .m4-capa-t{font-family:'Bricolage Grotesque',sans-serif;font-size:84px;font-weight:700;line-height:1;letter-spacing:-1px;color:#fff;margin-top:18px}
    .m4-capa-t em{color:#FF0005;font-style:normal;display:block}
    .m4-capa-s{font-size:27px;line-height:1.5;color:#ccc;margin-top:24px;max-width:820px}
    .m4-stat{margin-top:30px;padding:18px 22px;background:#222;border-left:4px solid #FF0005;display:inline-block;font-size:16px;color:#fff;line-height:1.5;max-width:870px}
    .m4-stat b{color:#FF0005;font-weight:800}
    .m4-box{display:inline-flex;align-items:center;gap:14px;background:#fff;border:1.5px solid #FF0005;padding:14px 22px;border-radius:3px;margin-bottom:22px;font-size:13px;letter-spacing:3px;text-transform:uppercase;font-weight:800;color:#FF0005}
    .m4-box .sq{width:18px;height:18px;border:1.5px solid #FF0005;background:#fff}
    .m4-q{font-family:'Bricolage Grotesque',sans-serif;font-size:46px;font-weight:700;line-height:1.15;letter-spacing:-.3px;color:#1c1c1c;max-width:920px}
    .m4-q span{color:#FF0005}
    .m4-e{font-size:25px;color:#555;line-height:1.55;margin-top:18px;max-width:880px}
    .m4-final-t{font-family:'Bricolage Grotesque',sans-serif;font-size:60px;font-weight:700;line-height:1.1;letter-spacing:-.5px;color:#fff;margin-bottom:30px}
    .m4-final-t em{color:#FF0005;font-style:normal}
    .m4-cta{display:inline-block;background:#FF0005;color:#fff;padding:22px 36px;font-size:16px;letter-spacing:2px;font-weight:800;text-transform:uppercase;border-radius:3px;margin-bottom:18px}
    .m4-wp{font-size:26px;font-weight:600;color:#fff;opacity:.9;letter-spacing:1px}
    """
    # 01 CAPA DARK
    s1 = f"""<div class="tipo dark">
      <div class="head">{logo_dark()}{pagn(1,6,dark=True)}</div>
      <div class="body">
        <div class="eyebrow dark">Checklist · 1 minuto</div>
        <h2 class="m4-capa-t">Seu Instagram <em>esta vendendo?</em></h2>
        <div class="m4-capa-s">4 perguntas pra voce responder agora. Marcou menos de 3? Esta perdendo cliente todo dia.</div>
        <div class="m4-stat"><b>7 em cada 10 pequenos negocios</b> ja tem perfil em rede social. Instagram lidera com 64%. <span class="source dark"><b>Fonte:</b> Sebrae, 2024</span></div>
      </div>
      <div class="foot"><span class="handle">{HANDLE}</span><span class="swipe dark">Arrasta › </span></div>
    </div>"""
    slides.append(("01_capa", render_canvas(s1, css_base)))

    # 02-05 perguntas
    perguntas = [
        ("Pergunta 01", "Sua bio mostra <span>cidade</span> + servico + <span>WhatsApp clicavel?</span>",
         "Cliente entra, le 3 linhas e decide se vale a pena. Se ele tem que procurar a cidade que voce atende, voce ja perdeu."),
        ("Pergunta 02", "Sua foto de perfil <span>e a sua logo</span> (e nao uma selfie)?",
         "Selfie no perfil empresarial confunde. Logo profissional aumenta a confianca de quem nunca te conheceu. Se nao tem logo, ate o nome em fonte boa ja resolve."),
        ("Pergunta 03", "Tem destaques com <span>\"Trabalhos\", \"Avaliacoes\" e \"Orcamento\"?</span>",
         "Os destaques sao a vitrine. E onde o cliente checa se voce e confiavel antes de te chamar. Sem isso, voce parece amador."),
        ("Pergunta 04", "Voce posta <span>pelo menos 3x por semana?</span>",
         "Constancia derrota perfeicao. Quem posta com regularidade, ainda que simples, vence quem posta uma vez por mes com producao bonita."),
    ]
    for i, (tag, q, e) in enumerate(perguntas, start=2):
        s = f"""<div class="tipo">
          <div class="head">{logo_light()}{pagn(i,6)}</div>
          <div class="body">
            <div class="m4-box"><span class="sq"></span> {tag}</div>
            <div class="m4-q">{q}</div>
            <p class="m4-e">{e}</p>
          </div>
          <div class="foot"><span class="handle">{HANDLE}</span><span class="swipe">Arrasta › </span></div>
        </div>"""
        slides.append((f"0{i}_p{i-1}", render_canvas(s, css_base)))

    # 06 CTA DARK
    s6 = f"""<div class="tipo dark">
      <div class="head">{logo_dark()}{pagn(6,6,dark=True)}</div>
      <div class="body">
        <div class="eyebrow dark">Marcou menos de 3?</div>
        <h2 class="m4-final-t">A gente <em>resolve em 7 dias.</em><br>Voce volta pra obra.</h2>
        <div class="m4-cta">Chama no WhatsApp</div>
        <div class="m4-wp">{WHATSAPP}</div>
      </div>
      <div class="foot"><span class="handle">{HANDLE}</span><span class="foot-r">{SITE}</span></div>
    </div>"""
    slides.append(("06_cta", render_canvas(s6, css_base)))
    return slides


# ============================================
# MODELO 05 — IA (5 slides com foto)
# ============================================
def modelo_05_ia():
    slides = []
    # 01 CAPA FULLBLEED IA
    css1 = f"""
    .m5c-img{{background-image:url('{IA_1}')}}
    .m5c-overlay{{background:linear-gradient(180deg,rgba(10,10,15,.55) 0%,rgba(10,10,15,.78) 60%,rgba(10,10,15,.98) 100%)}}
    .m5c-eyebrow{{font-size:13px;letter-spacing:5px;color:#FF6B6F;font-weight:800;text-transform:uppercase;margin-bottom:22px}}
    .m5c-t{{font-family:'Bebas Neue',sans-serif;font-size:130px;line-height:.92;letter-spacing:2px;color:#fff;margin-bottom:24px}}
    .m5c-t em{{color:#FF0005;font-style:normal}}
    .m5c-s{{font-size:27px;color:rgba(255,255,255,.88);line-height:1.5;max-width:880px}}
    .m5c-stat{{margin-top:24px;padding:14px 20px;background:rgba(255,0,5,.18);border-left:4px solid #FF0005;display:inline-block;font-size:15px;color:#fff;line-height:1.5}}
    .m5c-stat b{{color:#FF6B6F;font-weight:800}}
    """
    s1 = f"""<div class="fb">
      <div class="fb-img m5c-img"></div>
      <div class="fb-overlay m5c-overlay"></div>
      <div class="fb-top">{logo_dark()}{pagn(1,5,dark=True)}</div>
      <div class="fb-bottom">
        <div class="m5c-eyebrow">Inteligencia Artificial</div>
        <div class="m5c-t">3 jeitos<br>de usar IA<br><em>essa</em> semana.</div>
        <div class="m5c-s">Ferramentas gratis e simples. Voce nao precisa entender de tecnologia. So precisa querer ganhar tempo.</div>
        <div class="m5c-stat"><b>44% dos pequenos negocios</b> ja usam IA no Brasil. 74% dos MEIs usam pra marketing. <span class="source dark"><b>Fonte:</b> Sebrae, 2025</span></div>
        <div class="fb-footline"><span class="handle">{HANDLE}</span><span class="swipe dark">Arrasta › </span></div>
      </div></div>"""
    slides.append(("01_capa", render_canvas(s1, css1)))

    # SLIDES 2-4 SPLIT
    css_tool = """
    .m5-tag{display:inline-block;background:#FF0005;color:#fff;padding:7px 16px;font-size:11px;letter-spacing:3px;font-weight:800;text-transform:uppercase;margin-bottom:14px;border-radius:2px}
    .m5-name{font-family:'Bricolage Grotesque',sans-serif;font-size:38px;font-weight:700;line-height:1.1;letter-spacing:-.3px;color:#1c1c1c;margin-bottom:14px}
    .m5-desc{font-size:25px;color:#555;line-height:1.55}
    .m5-desc b{color:#1c1c1c;font-weight:700}
    .m5-num{position:absolute;top:32px;right:32px;font-family:'Bebas Neue',sans-serif;font-size:80px;color:#fff;background:#FF0005;width:90px;height:90px;display:flex;align-items:center;justify-content:center;line-height:1;border-radius:3px}
    .m5-foot{display:flex;justify-content:space-between;align-items:flex-end;padding-top:18px;border-top:1px solid #d4d2c8;font-size:13px;letter-spacing:2px;font-weight:600}
    .m5-foot .handle{color:#FF0005;font-weight:800;letter-spacing:3px}
    """
    tools = [
        (IA_2, "Ferramenta gratis", "ChatGPT escreve seu orcamento.",
         'Voce digita os itens em palavras simples: <b>"piso de 30m2, mao de obra e material, prazo 5 dias".</b> A IA devolve o orcamento formal e profissional em 20 segundos. Voce so cola no WhatsApp.'),
        (REFORMA_2, "IA + Foto", "IA escreve a legenda do post.",
         "Voce mostra a foto do antes e depois pra IA. Ela descreve o servico, sugere hashtags da sua regiao e te entrega a legenda pronta. <b>Posta em 2 minutos, do bolso da obra.</b>"),
        (WPP_1, "Atendimento 24h", "IA atende seu cliente no WhatsApp.",
         "Voce esta na obra, o telefone toca. A IA responde a saudacao, pergunta o que o cliente precisa, registra o nome e o servico. <b>Quando voce volta, ja tem 5 orcamentos pra fazer.</b>"),
    ]
    for i, (img, tag, name, desc) in enumerate(tools, start=2):
        css_t = f".m5-img{i}{{background-image:url('{img}')}}\n" + css_tool
        s = f"""<div class="sp">
          <div class="sp-img m5-img{i}"><div class="m5-num">0{i-1}</div></div>
          <div class="sp-text">
            <div>
              <div class="eyebrow" style="margin-bottom:8px">0{i} · de 05</div>
              <span class="m5-tag">{tag}</span>
              <div class="m5-name">{name}</div>
              <p class="m5-desc">{desc}</p>
            </div>
            <div class="m5-foot"><span class="handle">{HANDLE}</span><span class="swipe">Arrasta › </span></div>
          </div></div>"""
        slides.append((f"0{i}_{['chatgpt','legenda','atendimento'][i-2]}", render_canvas(s, css_t)))

    # 05 CTA DARK
    css5 = """
    .m5f{width:1080px;height:1350px;display:grid;grid-template-rows:auto minmax(0,1fr) auto;background:#1a1a1a;color:#fff;padding:68px;position:relative;overflow:hidden}
    .m5f::before{content:'';position:absolute;top:-180px;right:-180px;width:560px;height:560px;background:radial-gradient(circle,rgba(255,0,5,.4) 0%,transparent 60%);border-radius:50%}
    .m5f .head{display:flex;justify-content:space-between;position:relative;z-index:2}
    .m5f .body{align-self:center;position:relative;z-index:2}
    .m5f-t{font-family:'Bricolage Grotesque',sans-serif;font-size:58px;font-weight:700;line-height:1.05;letter-spacing:-.5px;color:#fff;margin-bottom:32px}
    .m5f-t em{color:#FF0005;font-style:normal}
    .m5f-cta{display:inline-block;background:#FF0005;color:#fff;padding:22px 36px;font-size:16px;letter-spacing:2px;font-weight:800;text-transform:uppercase;border-radius:3px;margin-bottom:18px}
    .m5f-wp{font-size:26px;font-weight:600;color:#fff;opacity:.9;letter-spacing:1px}
    .m5f .foot{display:flex;justify-content:space-between;padding-top:28px;border-top:2px solid #FF0005;position:relative;z-index:2;font-size:13px;letter-spacing:2px;font-weight:600;color:#aaa}
    .m5f .handle{color:#fff;font-weight:800;letter-spacing:3px}
    """
    s5 = f"""<div class="m5f">
      <div class="head">{logo_dark()}{pagn(5,5,dark=True)}</div>
      <div class="body">
        <div class="eyebrow dark" style="margin-bottom:22px">Quer essas IAs configuradas?</div>
        <h2 class="m5f-t">A gente <em>monta tudo</em><br>do jeito do seu negocio.</h2>
        <div class="m5f-cta">Chama no WhatsApp</div>
        <div class="m5f-wp">{WHATSAPP}</div>
      </div>
      <div class="foot"><span class="handle">{HANDLE}</span><span>{SITE}</span></div>
    </div>"""
    slides.append(("05_cta", render_canvas(s5, css5)))
    return slides


# ============================================
# MODELO 06 — WHATSAPP 3 PASSOS (4 slides com foto WhatsApp)
# ============================================
def modelo_06_whatsapp():
    slides = []
    # 01 CAPA FULLBLEED WPP
    css1 = f"""
    .m6c-img{{background-image:url('{WPP_1}')}}
    .m6c-overlay{{background:linear-gradient(180deg,rgba(10,10,15,.5) 0%,rgba(10,10,15,.78) 60%,rgba(10,10,15,.98) 100%)}}
    .m6c-eyebrow{{font-size:13px;letter-spacing:5px;color:#FF6B6F;font-weight:800;text-transform:uppercase;margin-bottom:22px}}
    .m6c-t{{font-family:'Bricolage Grotesque',sans-serif;font-size:72px;line-height:1.02;font-weight:700;letter-spacing:-1px;color:#fff;margin-bottom:24px}}
    .m6c-t em{{color:#FF0005;font-style:normal}}
    .m6c-s{{font-size:27px;color:rgba(255,255,255,.88);line-height:1.5;max-width:820px}}
    .m6c-stat{{margin-top:24px;padding:14px 20px;background:rgba(255,0,5,.18);border-left:4px solid #FF0005;display:inline-block;font-size:15px;color:#fff;line-height:1.5}}
    .m6c-stat b{{color:#FF6B6F;font-weight:800}}
    """
    s1 = f"""<div class="fb">
      <div class="fb-img m6c-img"></div>
      <div class="fb-overlay m6c-overlay"></div>
      <div class="fb-top">{logo_dark()}{pagn(1,4,dark=True)}</div>
      <div class="fb-bottom">
        <div class="m6c-eyebrow">WhatsApp Business</div>
        <div class="m6c-t">Resposta automatica no WhatsApp <em>em 3 passos.</em></div>
        <div class="m6c-s">Tudo gratis, dentro do proprio WhatsApp. Voce faz hoje a noite e amanha de manha o cliente ja recebe boas-vindas sozinho.</div>
        <div class="m6c-stat"><b>WhatsApp esta em 98% dos celulares no Brasil.</b> 147 milhoes de usuarios. <span class="source dark"><b>Fonte:</b> Mobile Time / Statista, 2024</span></div>
        <div class="fb-footline"><span class="handle">{HANDLE}</span><span class="swipe dark">Arrasta › </span></div>
      </div></div>"""
    slides.append(("01_capa", render_canvas(s1, css1)))

    # SLIDES 2-4: passos tipograficos com numerao grande
    css_step = """
    .m6-tag{display:inline-block;background:#FF0005;color:#fff;padding:8px 18px;font-size:11px;letter-spacing:4px;font-weight:800;text-transform:uppercase;margin-bottom:18px;border-radius:2px}
    .m6-n{font-family:'Bebas Neue',sans-serif;font-size:260px;line-height:.85;color:#FF0005;margin-bottom:8px;letter-spacing:0}
    .m6-t{font-family:'Bricolage Grotesque',sans-serif;font-size:52px;font-weight:700;line-height:1.1;letter-spacing:-.5px;color:#1c1c1c;max-width:900px}
    .m6-e{font-size:25px;color:#555;line-height:1.55;max-width:880px;margin-top:18px}
    .m6-e b{color:#1c1c1c;font-weight:700}
    """
    passos = [
        ("Passo 01", "Baixe o WhatsApp Business.",
         "E gratis. Tem na loja de aplicativos com o nome <b>WhatsApp Business.</b> Voce pode usar o mesmo numero do WhatsApp comum. E mais profissional, libera horario de atendimento, catalogo e respostas automaticas."),
        ("Passo 02", "Ative saudacao + ausencia.",
         "Em <b>Configuracoes › Ferramentas comerciais</b>, ligue a <b>Mensagem de saudacao</b> (vai pra todo cliente novo) e a <b>Mensagem de ausencia</b> (vai quando voce esta na obra fora do horario). Cliente nunca mais espera no vazio."),
        ("Passo 03", "Crie respostas rapidas.",
         "Em <b>Ferramentas comerciais › Respostas rapidas</b>, crie atalhos. Exemplo: digita <b>/orcamento</b> e ja sai mensagem padrao pedindo metragem, prazo e endereco. Voce ganha 10 minutos por cliente."),
    ]
    for i, (tag, t, e) in enumerate(passos, start=2):
        s = f"""<div class="tipo">
          <div class="head">{logo_light()}{pagn(i,4)}</div>
          <div class="body">
            <div class="m6-tag">{tag}</div>
            <div class="m6-n">0{i-1}</div>
            <div class="m6-t">{t}</div>
            <p class="m6-e">{e}</p>
          </div>
          <div class="foot"><span class="handle">{HANDLE}</span><span class="swipe">{'Quer ajuda? ' + WHATSAPP if i == 4 else 'Arrasta › '}</span></div>
        </div>"""
        slides.append((f"0{i}_passo{i-1}", render_canvas(s, css_step)))
    return slides


# ============================================
# MODELO 07 — MITO vs VERDADE (4 slides com dados)
# ============================================
def modelo_07_mito_verdade():
    slides = []
    # 01 CAPA DARK COM DADO
    css1 = """
    .m7-capa-t{font-family:'Bebas Neue',sans-serif;font-size:170px;line-height:.92;letter-spacing:1px;color:#fff;margin-top:18px}
    .m7-capa-t em{color:#FF0005;font-style:normal}
    .m7-capa-s{font-size:27px;color:#ccc;line-height:1.5;margin-top:22px;max-width:820px}
    """
    s1 = f"""<div class="tipo dark">
      <div class="head">{logo_dark()}{pagn(1,4,dark=True)}</div>
      <div class="body">
        <div class="eyebrow dark">Marketing Digital</div>
        <div class="m7-capa-t">Mito<br><em>vs</em><br>Verdade.</div>
        <div class="m7-capa-s">3 crencas antigas que estao deixando o seu negocio pra tras. Hora de matar.</div>
      </div>
      <div class="foot"><span class="handle">{HANDLE}</span><span class="swipe dark">Arrasta › </span></div>
    </div>"""
    slides.append(("01_capa", render_canvas(s1, css1)))

    # 02-04 mitos
    css_mv = """
    .m7-block{padding:30px 34px;border-radius:3px}
    .m7-mito{background:#fff;border:1.5px solid #d4d2c8}
    .m7-verd{background:#1a1a1a;color:#fff;border:1.5px solid #1a1a1a}
    .m7-tag{font-size:12px;letter-spacing:5px;font-weight:800;text-transform:uppercase;margin-bottom:14px}
    .m7-tag.x{color:#999}
    .m7-tag.v{color:#fff}
    .m7-mito-t{font-family:'Bricolage Grotesque',sans-serif;font-size:30px;font-weight:700;line-height:1.25;color:#999;text-decoration:line-through;text-decoration-color:#999;text-decoration-thickness:2px;letter-spacing:-.3px}
    .m7-verd-t{font-family:'Bricolage Grotesque',sans-serif;font-size:32px;font-weight:700;line-height:1.2;color:#fff;letter-spacing:-.3px}
    .m7-verd-t em{color:#FF0005;font-style:normal}
    .m7-stat{margin-top:18px;padding:14px 18px;background:#2a2a2a;border-left:3px solid #FF0005;font-size:14px;color:#fff;line-height:1.5}
    .m7-stat b{color:#FF6B6F;font-weight:800}
    .m7-arrow{display:flex;justify-content:center;align-items:center;height:30px}
    .m7-arrow span{font-family:'Bebas Neue',sans-serif;font-size:42px;color:#FF0005;line-height:1}
    """
    mitos = [
        ('"Instagram e so pra empresa grande, eu sou prestador de servico."',
         'O cliente da sua cidade <em>te pesquisa no Instagram</em> antes de te ligar. Se voce nao aparece, ele acha outro.',
         '<b>73% dos brasileiros</b> ja compraram servico que descobriram no Instagram. <span class="source dark"><b>Fonte:</b> Opinion Box, 2025</span>'),
        ('"Anuncio pago e coisa de quem tem dinheiro sobrando."',
         'O Meta Ads permite <em>comecar com R$ 6 por dia</em>, ja segmentando por cidade e tipo de servico. E mais barato que panfleto.',
         '<b>WhatsApp + Instagram</b> sao os canais que mais convertem venda em pequeno negocio: 56% e 43%. <span class="source dark"><b>Fonte:</b> Sebrae, 2024</span>'),
        ('"Pra mim, indicacao boca a boca basta."',
         'Mesmo a indicacao boa, hoje <em>passa primeiro pelo Instagram.</em> O amigo te indica, mas o cliente checa seu perfil antes de ligar.',
         '<b>96% dos consumidores</b> leem avaliacoes no Google antes de contratar. <span class="source dark"><b>Fonte:</b> Reclame Aqui, 2025</span>'),
    ]
    for i, (mito, verd, stat) in enumerate(mitos, start=2):
        s = f"""<div class="tipo">
          <div class="head">{logo_light()}{pagn(i,4)}</div>
          <div class="body">
            <div class="m7-block m7-mito">
              <div class="m7-tag x">Mito 0{i-1}</div>
              <div class="m7-mito-t">{mito}</div>
            </div>
            <div class="m7-arrow"><span>↓</span></div>
            <div class="m7-block m7-verd">
              <div class="m7-tag v">Verdade</div>
              <div class="m7-verd-t">{verd}</div>
              <div class="m7-stat">{stat}</div>
            </div>
          </div>
          <div class="foot"><span class="handle">{HANDLE}</span><span class="swipe">{'Arrasta › ' if i < 4 else WHATSAPP}</span></div>
        </div>"""
        slides.append((f"0{i}_m{i-1}", render_canvas(s, css_mv)))
    return slides


# ============================================
# MODELO 08 — "Quem nao aparece, nao vende" (1 slide fullbleed)
# ============================================
def modelo_08_frase_quem_nao_aparece():
    css = f"""
    .m8-img{{background-image:url('{REFORMA_2}')}}
    .m8-overlay{{background:linear-gradient(180deg,rgba(0,0,0,.3) 0%,rgba(0,0,0,.55) 30%,rgba(0,0,0,.88) 70%,rgba(0,0,0,.95) 100%)}}
    .m8-mark{{font-family:'Bricolage Grotesque',sans-serif;font-size:230px;line-height:.8;color:#FF0005;margin-bottom:-20px}}
    .m8-t{{font-family:'Bricolage Grotesque',sans-serif;font-size:96px;font-weight:700;line-height:1.02;letter-spacing:-1.5px;color:#fff;margin-bottom:28px}}
    .m8-t em{{color:#FF0005;font-style:normal}}
    .m8-s{{font-size:27px;color:rgba(255,255,255,.85);line-height:1.55;max-width:870px}}
    """
    s = f"""<div class="fb">
      <div class="fb-img m8-img"></div>
      <div class="fb-overlay m8-overlay"></div>
      <div class="fb-top">{logo_dark()}</div>
      <div class="fb-bottom">
        <div class="m8-mark">"</div>
        <div class="m8-t">Quem nao aparece, <em>nao vende.</em></div>
        <div class="m8-s">Seu servico pode ser o melhor da cidade. Se ninguem te ve, e como se voce nao existisse.</div>
        <div class="fb-footline"><span class="handle">{HANDLE}</span><span>{WHATSAPP}</span></div>
      </div></div>"""
    return [("01", render_canvas(s, css))]


# ============================================
# MODELO 09 — "O cliente ja te googlou" (fullbleed celular)
# ============================================
def modelo_09_verdade_dura():
    css = f"""
    .m9-img{{background-image:url('{WPP_2}')}}
    .m9-overlay{{background:linear-gradient(180deg,rgba(10,10,15,.4) 0%,rgba(10,10,15,.7) 45%,rgba(10,10,15,.95) 85%,rgba(10,10,15,1) 100%)}}
    .m9-tag{{display:inline-block;background:#FF0005;color:#fff;padding:10px 20px;font-size:11px;letter-spacing:5px;font-weight:800;text-transform:uppercase;margin-bottom:34px}}
    .m9-t{{font-family:'Bricolage Grotesque',sans-serif;font-size:80px;font-weight:700;line-height:1.05;letter-spacing:-1px;color:#fff;margin-bottom:28px}}
    .m9-t em{{color:#FF0005;font-style:normal}}
    .m9-s{{font-size:27px;color:rgba(255,255,255,.88);line-height:1.55;max-width:880px}}
    .m9-s b{{color:#fff;font-weight:700}}
    """
    s = f"""<div class="fb">
      <div class="fb-img m9-img"></div>
      <div class="fb-overlay m9-overlay"></div>
      <div class="fb-top">{logo_dark()}</div>
      <div class="fb-bottom">
        <div class="m9-tag">Verdade dura</div>
        <div class="m9-t">O cliente ja <em>te googlou</em> antes de te ligar.</div>
        <div class="m9-s">O que ele achou no seu Instagram <b>decidiu</b> se voce ia ganhar o orcamento ou perder pro concorrente. Voce nem soube que perdeu.</div>
        <div class="fb-footline"><span class="handle">{HANDLE}</span><span>{WHATSAPP}</span></div>
      </div></div>"""
    return [("01", render_canvas(s, css))]


# ============================================
# MODELO 10 — DIA DO PEDREIRO (fullbleed pedreiro)
# ============================================
def modelo_10_pedreiro():
    css = f"""
    .m10-img{{background-image:url('{PEDREIRO_1}')}}
    .m10-overlay{{background:linear-gradient(180deg,rgba(10,8,5,.35) 0%,rgba(10,8,5,.65) 45%,rgba(10,8,5,.94) 80%,rgba(10,8,5,1) 100%)}}
    .m10-data{{font-family:'Bebas Neue',sans-serif;font-size:220px;line-height:.85;color:#FF0005;letter-spacing:0;margin-bottom:-10px}}
    .m10-mes{{font-family:'Bricolage Grotesque',sans-serif;font-size:34px;font-weight:700;color:#fff;margin-bottom:28px;letter-spacing:.5px}}
    .m10-t{{font-family:'Bricolage Grotesque',sans-serif;font-size:68px;font-weight:700;line-height:1.05;letter-spacing:-.8px;color:#fff;margin-bottom:24px}}
    .m10-t em{{color:#FF0005;font-style:normal}}
    .m10-s{{font-size:27px;color:rgba(255,255,255,.88);line-height:1.55;max-width:860px}}
    .m10-s b{{color:#fff;font-weight:700}}
    """
    s = f"""<div class="fb">
      <div class="fb-img m10-img"></div>
      <div class="fb-overlay m10-overlay"></div>
      <div class="fb-top">{logo_dark()}</div>
      <div class="fb-bottom">
        <div class="m10-data">25</div>
        <div class="m10-mes">de outubro</div>
        <div class="m10-t">Dia do <em>Pedreiro.</em></div>
        <div class="m10-s">Pra quem ergue o Brasil tijolo por tijolo, com o sol na cabeca e a familia em mente. <b>Respeito.</b></div>
        <div class="fb-footline"><span class="handle">{HANDLE}</span><span>25 · 10 · 2026</span></div>
      </div></div>"""
    return [("01", render_canvas(s, css))]


# ============================================
# MODELO 11 — DIA DO PINTOR (fullbleed pintor)
# ============================================
def modelo_11_pintor():
    css = f"""
    .m11-img{{background-image:url('{PINTOR_1}')}}
    .m11-overlay{{background:linear-gradient(180deg,rgba(0,0,0,.25) 0%,rgba(0,0,0,.55) 45%,rgba(0,0,0,.92) 80%,rgba(0,0,0,1) 100%)}}
    .m11-data{{font-family:'Bebas Neue',sans-serif;font-size:220px;line-height:.85;color:#FF0005;letter-spacing:0;margin-bottom:-10px}}
    .m11-mes{{font-family:'Bricolage Grotesque',sans-serif;font-size:34px;font-weight:700;color:#fff;margin-bottom:28px;letter-spacing:.5px}}
    .m11-t{{font-family:'Bricolage Grotesque',sans-serif;font-size:62px;font-weight:700;line-height:1.05;letter-spacing:-.8px;color:#fff;margin-bottom:24px}}
    .m11-t em{{color:#FF0005;font-style:normal}}
    .m11-s{{font-size:27px;color:rgba(255,255,255,.88);line-height:1.55;max-width:860px}}
    .m11-s b{{color:#fff;font-weight:700}}
    """
    s = f"""<div class="fb">
      <div class="fb-img m11-img"></div>
      <div class="fb-overlay m11-overlay"></div>
      <div class="fb-top">{logo_dark()}</div>
      <div class="fb-bottom">
        <div class="m11-data">14</div>
        <div class="m11-mes">de marco</div>
        <div class="m11-t">Dia Nacional <em>do Pintor.</em></div>
        <div class="m11-s">Voce nao pinta parede. Voce <b>entrega casa nova</b> pra familia que ja morava ali. Obrigada por colorir o pais.</div>
        <div class="fb-footline"><span class="handle">{HANDLE}</span><span>14 · 03 · 2026</span></div>
      </div></div>"""
    return [("01", render_canvas(s, css))]


# ============================================
# MODELO 12 — CTA SERVICOS (mosaico 3 fotos + cards)
# ============================================
def modelo_12_cta():
    css = f"""
    .m12{{width:1080px;height:1350px;display:grid;grid-template-rows:auto auto auto 1fr auto;padding:64px;background:#fafaf7;gap:0}}
    .m12-head{{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px}}
    .m12-eyebrow{{font-size:13px;letter-spacing:5px;color:#FF0005;font-weight:800;text-transform:uppercase}}
    .m12-t{{font-family:'Bricolage Grotesque',sans-serif;font-size:56px;font-weight:700;line-height:1.05;letter-spacing:-.8px;color:#1c1c1c;margin-bottom:24px}}
    .m12-t em{{color:#FF0005;font-style:normal}}
    .m12-grid{{display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px;margin-bottom:24px}}
    .m12-card{{background:#fff;border:1.5px solid #d4d2c8;border-radius:3px;overflow:hidden;display:flex;flex-direction:column}}
    .m12-card-img{{height:130px;background-size:cover;background-position:center}}
    .m12-card-body{{padding:18px 18px 20px}}
    .m12-card-tag{{font-size:11px;letter-spacing:3px;font-weight:800;color:#FF0005;text-transform:uppercase;margin-bottom:8px}}
    .m12-card-t{{font-family:'Bricolage Grotesque',sans-serif;font-size:26px;font-weight:700;line-height:1.2;color:#1c1c1c;margin-bottom:6px}}
    .m12-card-d{{font-size:12px;color:#555;line-height:1.4}}
    .m12-cta{{background:#1a1a1a;color:#fff;padding:30px 36px;border-radius:3px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;margin-bottom:18px}}
    .m12-cta-l{{font-family:'Bricolage Grotesque',sans-serif;font-size:24px;font-weight:700;line-height:1.2;color:#fff}}
    .m12-cta-l em{{color:#FF0005;font-style:normal}}
    .m12-cta-r{{display:flex;flex-direction:column;align-items:flex-end}}
    .m12-cta-wp{{background:#FF0005;color:#fff;padding:14px 24px;font-size:13px;letter-spacing:2px;font-weight:800;text-transform:uppercase;border-radius:3px}}
    .m12-cta-num{{color:#fff;font-size:13px;letter-spacing:2px;font-weight:600;margin-top:8px}}
    .m12-foot{{display:flex;justify-content:space-between;align-items:flex-end;padding-top:18px;border-top:1px solid #d4d2c8;font-size:13px;letter-spacing:2px;font-weight:600}}
    .m12-foot .handle{{color:#FF0005;font-weight:800;letter-spacing:3px}}
    .m12-stat{{padding:14px 18px;background:#fff;border-left:4px solid #FF0005;font-size:14px;color:#1c1c1c;line-height:1.45;margin-bottom:22px}}
    .m12-stat b{{color:#FF0005;font-weight:800}}
    .img-insta{{background-image:url('{PROF_2}')}}
    .img-wpp{{background-image:url('{WPP_1}')}}
    .img-google{{background-image:url('{CASA_1}')}}
    """
    s = f"""<div class="m12">
      <div class="m12-head">{logo_light()}<span class="m12-eyebrow">Nossos servicos</span></div>
      <h1 class="m12-t">Marketing digital sob medida pra quem <em>vive da obra.</em></h1>
      <div class="m12-stat"><b>A construcao civil cresceu 4,3% no Brasil em 2024.</b> 2,8 milhoes de profissionais formalizados. <span class="source"><b>Fonte:</b> CBIC, 2025</span></div>
      <div class="m12-grid">
        <div class="m12-card"><div class="m12-card-img img-insta"></div><div class="m12-card-body"><div class="m12-card-tag">01</div><div class="m12-card-t">Instagram profissional</div><div class="m12-card-d">12 a 16 posts por mes. Carrosseis e reels do seu trabalho.</div></div></div>
        <div class="m12-card"><div class="m12-card-img img-wpp"></div><div class="m12-card-body"><div class="m12-card-tag">02</div><div class="m12-card-t">WhatsApp automatico</div><div class="m12-card-d">IA atende 24h. Voce volta da obra com os orcamentos.</div></div></div>
        <div class="m12-card"><div class="m12-card-img img-google"></div><div class="m12-card-body"><div class="m12-card-tag">03</div><div class="m12-card-t">Aparecer no Google</div><div class="m12-card-d">Site rapido + ficha Google Empresa. Quem busca, te acha.</div></div></div>
      </div>
      <div class="m12-cta">
        <div class="m12-cta-l">Sua obra mostra qualidade.<br>Seu <em>marketing</em> tambem deveria.</div>
        <div class="m12-cta-r"><span class="m12-cta-wp">Chama no WhatsApp</span><span class="m12-cta-num">{WHATSAPP}</span></div>
      </div>
      <div class="m12-foot"><span class="handle">{HANDLE}</span><span style="color:#555">{SITE}</span></div>
    </div>"""
    return [("01", render_canvas(s, css))]


# ============================================
# EXECUTOR
# ============================================
MODELOS = [
    ("01_apresentacao_rhaideline", modelo_01_apresentacao_rhaideline),
    ("02_apresentacao_agencia_carrossel", modelo_02_apresentacao_agencia),
    ("03_3_erros_instagram_carrossel", modelo_03_3_erros),
    ("04_checklist_instagram_carrossel", modelo_04_checklist),
    ("05_ia_pra_empresa_carrossel", modelo_05_ia),
    ("06_whatsapp_automatico_carrossel", modelo_06_whatsapp),
    ("07_mito_verdade_carrossel", modelo_07_mito_verdade),
    ("08_frase_quem_nao_aparece", modelo_08_frase_quem_nao_aparece),
    ("09_verdade_dura_cliente_googlou", modelo_09_verdade_dura),
    ("10_dia_do_pedreiro", modelo_10_pedreiro),
    ("11_dia_do_pintor", modelo_11_pintor),
    ("12_cta_servicos", modelo_12_cta),
]

def main():
    count = 0
    for folder_name, fn in MODELOS:
        folder = ROOT / folder_name
        folder.mkdir(parents=True, exist_ok=True)
        # limpar HTMLs antigos
        for old in folder.glob('*.html'):
            old.unlink()
        slides = fn()
        for slide_id, html in slides:
            out = folder / f"{slide_id}.html"
            out.write_text(html, encoding='utf-8')
            count += 1
        print(f"OK {folder_name} ({len(slides)} slide(s))")
    print(f"\nTotal slides gerados: {count}")

if __name__ == "__main__":
    main()
