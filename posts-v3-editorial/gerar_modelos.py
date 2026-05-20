"""
Calazans Lumina · 4 Modelos · Design System Editorial Brasileiro V3
Formato: 1080x1350 (Instagram 4:5)
Tipografia: Fraunces (serif display) + Bricolage Grotesque + Inter
Cores: bege papel #F5F1E8, preto profundo #1A1815, vermelho coral #E63946,
       bege escuro #8B7355, verde-musgo #4A5C3E
"""
from pathlib import Path

ROOT = Path(__file__).parent
WHATSAPP = "31 98294-8067"
HANDLE = "@calazanslumina"
SITE = "calazanslumina.com.br"

# Fotos GHL (Rhaideline)
RHAI_3 = "https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/67d74aa28b2801643ac3f117.jpeg"

# Fotos Unsplash (HTTP 200 testadas)
PEDREIRO = "https://images.unsplash.com/photo-1673865641469-34498379d8af?w=1080&q=80&auto=format&fit=crop"
WPP = "https://images.unsplash.com/photo-1610548822783-33fb5cb0e3a8?w=1080&q=80&auto=format&fit=crop"
WPP2 = "https://images.unsplash.com/photo-1587573578181-f3342274f4c7?w=1080&q=80&auto=format&fit=crop"
OBRA = "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?w=1080&q=80&auto=format&fit=crop"

# ====== BASE STYLES (design system editorial) ======
BASE_CSS = """
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400;1,9..144,500;1,9..144,600&family=Geist:wght@300;400;500;600;700;800;900&family=Geist+Mono:wght@400;500;600&display=swap');

*{margin:0;padding:0;box-sizing:border-box;-webkit-font-smoothing:antialiased}
html,body{width:1080px;height:1350px;overflow:hidden;background:#1a1815}
body{font-family:'Geist',sans-serif;color:#1a1815}
.canvas{width:1080px;height:1350px;position:relative;overflow:hidden;background:#F5F1E8}
.canvas::before{content:"";position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.10 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");opacity:.5;mix-blend-mode:multiply;pointer-events:none;z-index:1}
.canvas > *{position:relative;z-index:2}
.canvas.dark::before{filter:invert(1);opacity:.3}
.canvas.dark{background:#1A1815;color:#F5F1E8}

/* ============ HEADER ============ */
.header{position:absolute;top:0;left:0;right:0;padding:36px 56px 0;display:flex;justify-content:space-between;align-items:center;z-index:10}
.brand{display:flex;align-items:center;gap:14px}
.brand-mark{width:46px;height:46px;background:#E63946;color:#F5F1E8;display:flex;align-items:center;justify-content:center;font-family:'Fraunces',serif;font-size:28px;font-weight:700;line-height:1;letter-spacing:-1px;border-radius:2px}
.brand-text{display:flex;flex-direction:column;line-height:1.1}
.brand-name{font-family:'Fraunces',serif;font-size:19px;font-weight:600;color:#1a1815;letter-spacing:-.2px}
.brand-name.light{color:#F5F1E8}
.brand-sub{font-family:'Geist',sans-serif;font-size:10px;letter-spacing:2.5px;color:#8B7355;text-transform:uppercase;font-weight:600;margin-top:3px}
.brand-sub.light{color:#c4b89e}
.issue-tag{font-family:'Geist',sans-serif;font-size:11px;letter-spacing:2.5px;color:#8B7355;text-transform:uppercase;font-weight:500;display:flex;align-items:center;gap:10px}
.issue-tag.light{color:#c4b89e}
.issue-tag::before{content:'';display:inline-block;width:6px;height:6px;background:#E63946;border-radius:50%}

/* ============ RULES ============ */
.top-rule{position:absolute;top:108px;left:56px;right:56px;height:1px;background:#1a1815;z-index:5}
.top-rule.light{background:#F5F1E8;opacity:.25}
.foot-rule{position:absolute;bottom:90px;left:56px;right:56px;height:1px;background:#1a1815}
.foot-rule.light{background:#F5F1E8;opacity:.25}

/* ============ ASTERISK ORNAMENT ============ */
.ornament{position:absolute;top:170px;right:56px;font-family:'Fraunces',serif;font-size:60px;color:#E63946;line-height:1;font-weight:400}

/* ============ KICKER ============ */
.kicker{position:absolute;top:144px;left:56px;font-family:'Geist',sans-serif;font-size:13px;letter-spacing:4px;text-transform:uppercase;font-weight:700;color:#E63946;display:flex;align-items:center;gap:14px}
.kicker::before{content:'·';font-size:34px;line-height:0.5;color:#E63946}

/* ============ FOOTER ============ */
.footer{position:absolute;bottom:34px;left:56px;right:56px;display:flex;justify-content:space-between;align-items:center;font-family:'Geist',sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:600}
.footer .handle{color:#E63946;font-weight:700;letter-spacing:3px}
.footer .meta{color:#8B7355;font-weight:500;display:flex;gap:18px;align-items:center}
.footer .meta::before{content:'';width:4px;height:4px;background:#8B7355;border-radius:50%;display:inline-block}
.footer.light .meta{color:#c4b89e}
.footer.light .meta::before{background:#c4b89e}
.swipe{display:flex;align-items:center;gap:8px;color:#1a1815;font-weight:700;letter-spacing:3px}
.swipe.light{color:#F5F1E8}
.swipe svg{width:22px;height:22px}

/* ============ STAT CARD ============ */
.stat-card{padding:26px 28px;background:#1a1815;color:#F5F1E8;border-radius:2px}
.stat-card.inverted{background:#F5F1E8;color:#1a1815}
.stat-num{font-family:'Fraunces',serif;font-size:68px;font-weight:700;line-height:1;letter-spacing:-2px;color:#E63946;margin-bottom:10px}
.stat-text{font-family:'Geist',sans-serif;font-size:16px;line-height:1.5;color:#F5F1E8;font-weight:400}
.stat-card.inverted .stat-text{color:#1a1815}
.stat-source{font-family:'Geist',sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8B7355;margin-top:16px;padding-top:12px;border-top:1px solid #3a3530;font-weight:600}
.stat-card.inverted .stat-source{border-top-color:#d9d2c0}
"""

ARROW_SVG = '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'

def header(edition="Edição 01 · Maio 2026", dark=False):
    light_cls = " light" if dark else ""
    return f"""
  <div class="header">
    <div class="brand">
      <div class="brand-mark">C</div>
      <div class="brand-text">
        <span class="brand-name{light_cls}">Calazans Lumina</span>
        <span class="brand-sub{light_cls}">Agência · MG</span>
      </div>
    </div>
    <div class="issue-tag{light_cls}">{edition}</div>
  </div>
  <div class="top-rule{light_cls}"></div>"""

def footer(arrasta=False, dark=False, custom_meta=None):
    light_cls = " light" if dark else ""
    arrow = f'<span class="swipe{light_cls}">Arrasta {ARROW_SVG}</span>' if arrasta else ''
    meta = custom_meta or WHATSAPP
    return f"""
  <div class="foot-rule{light_cls}"></div>
  <div class="footer{light_cls}">
    <span class="handle">{HANDLE}</span>
    <span class="meta">{meta}</span>
    {arrow if arrasta else f'<span style="color:#8B7355;font-weight:500;letter-spacing:2px">{SITE}</span>'}
  </div>"""

def render(inner, extra_css=""):
    return f"""<!DOCTYPE html>
<html lang="pt-BR"><head><meta charset="UTF-8"><title>Calazans Lumina</title><style>{BASE_CSS}
{extra_css}
</style></head><body><div class="canvas{' dark' if 'class=\"canvas dark\"' in inner else ''}">{inner}</div></body></html>"""


# =============================================================
# MODELO 01 · FRASE FORTE "O cliente já te googlou"
# =============================================================
def modelo_01_frase():
    css = """
    .m1-kicker::before{display:none}
    .m1-headline{
      position:absolute;top:228px;left:56px;right:56px;
      font-family:'Fraunces',serif;font-size:108px;font-weight:600;
      line-height:.95;letter-spacing:-2.5px;color:#1a1815;
      font-variation-settings:'opsz' 96;
    }
    .m1-headline em{font-style:italic;color:#E63946;font-weight:500}
    .m1-deck{
      position:absolute;top:720px;left:56px;right:430px;
      font-family:'Fraunces',serif;font-size:30px;font-weight:400;
      line-height:1.35;color:#3a3530;letter-spacing:-.3px;font-style:italic;
    }
    .m1-stat{position:absolute;top:720px;right:56px;width:340px}
    .m1-body{
      position:absolute;top:920px;left:56px;right:430px;
      font-family:'Geist',sans-serif;font-size:21px;line-height:1.55;
      color:#3a3530;font-weight:400;
    }
    .m1-body p+p{margin-top:14px}
    .m1-body b{color:#1a1815;font-weight:600}
    .m1-signature{
      position:absolute;top:1180px;left:56px;right:56px;
      display:flex;justify-content:space-between;align-items:center;
    }
    .m1-quote-mark{
      font-family:'Fraunces',serif;font-size:88px;line-height:.6;
      color:#E63946;font-weight:600;font-style:italic;
    }
    .m1-author{
      font-family:'Fraunces',serif;font-size:18px;font-style:italic;
      color:#8B7355;text-align:right;line-height:1.3;
    }
    .m1-author b{font-style:normal;font-weight:600;color:#1a1815;display:block}
    """
    inner = f"""
  {header()}
  <div class="ornament">*</div>
  <div class="kicker m1-kicker">Verdade dura</div>
  <h1 class="m1-headline">O cliente já <em>te googlou</em> antes de te ligar.</h1>
  <div class="m1-deck">E o que ele achou decidiu se você ia ganhar ou perder esse orçamento. Você nem soube.</div>
  <div class="m1-stat">
    <div class="stat-card">
      <div class="stat-num">96%</div>
      <div class="stat-text">dos consumidores leem avaliações no Google antes de contratar serviço.</div>
      <div class="stat-source">Fonte · Reclame Aqui 2025</div>
    </div>
  </div>
  <div class="m1-body">
    <p>Quando o cliente recebeu seu nome de uma indicação, <b>a primeira coisa que ele fez</b> foi pegar o celular e te procurar no Instagram e no Google.</p>
    <p>Se o que ele achou foi um perfil parado, sem foto recente, sem cidade na bio · ele decidiu ali se vale ou não ligar.</p>
  </div>
  <div class="m1-signature">
    <div class="m1-quote-mark">"</div>
    <div class="m1-author"><b>Calazans Lumina</b>Marketing para quem vive da obra.</div>
  </div>
  {footer(custom_meta=WHATSAPP)}"""
    return [("01_frase_cliente_googlou", render(inner, css))]


# =============================================================
# MODELO 02 · CARROSSEL "Por que pintor bom perde cliente?"
# =============================================================
def modelo_02_carrossel():
    slides = []

    # ===== SLIDE 1 · CAPA =====
    css1 = """
    .m2c-headline{
      position:absolute;top:208px;left:56px;right:56px;
      font-family:'Fraunces',serif;font-size:96px;font-weight:600;
      line-height:.97;letter-spacing:-2px;color:#1a1815;
      font-variation-settings:'opsz' 96;
    }
    .m2c-headline em{font-style:italic;color:#E63946;font-weight:500}
    .m2c-deck{
      position:absolute;top:760px;left:56px;right:56px;
      font-family:'Fraunces',serif;font-size:28px;font-weight:400;
      line-height:1.35;color:#3a3530;letter-spacing:-.3px;font-style:italic;
    }
    .m2c-stat{position:absolute;top:920px;left:56px;width:340px}
    .m2c-body{
      position:absolute;top:920px;left:430px;right:56px;
      font-family:'Geist',sans-serif;font-size:21px;line-height:1.55;
      color:#3a3530;font-weight:400;
    }
    .m2c-body b{color:#1a1815;font-weight:600}
    """
    s1 = f"""
  {header()}
  <div class="ornament">*</div>
  <div class="kicker">Erros que custam caro</div>
  <h1 class="m2c-headline">Por que pintor com a melhor mão de obra <em>perde cliente</em> pro concorrente pior?</h1>
  <div class="m2c-deck">A resposta não está na sua qualidade. Está em três coisas que você não está fazendo no celular.</div>
  <div class="m2c-stat">
    <div class="stat-card">
      <div class="stat-num">73%</div>
      <div class="stat-text">dos brasileiros já contrataram serviço descoberto no Instagram.</div>
      <div class="stat-source">Fonte · Opinion Box 2025</div>
    </div>
  </div>
  <div class="m2c-body">
    <p>Cliente novo chega por indicação. <b>Primeira coisa que faz:</b> abre o celular e procura você no Instagram.</p>
    <p>Em 5 segundos, decide se vai ligar.</p>
  </div>
  {footer(arrasta=True)}"""
    slides.append(("01_capa", render(s1, css1)))

    # ===== SLIDE 2-4 · Os 3 erros =====
    css_erro = """
    .m2e-num{
      position:absolute;top:170px;left:56px;
      font-family:'Fraunces',serif;font-size:280px;
      font-weight:600;line-height:.85;
      color:#E63946;letter-spacing:-10px;font-style:italic;
    }
    .m2e-tag{
      position:absolute;top:182px;left:380px;
      font-family:'Geist',sans-serif;font-size:13px;
      letter-spacing:4px;text-transform:uppercase;
      font-weight:700;color:#8B7355;
    }
    .m2e-title{
      position:absolute;top:230px;left:380px;right:56px;
      font-family:'Fraunces',serif;font-size:72px;
      font-weight:600;line-height:1;letter-spacing:-1.5px;
      color:#1a1815;
    }
    .m2e-title em{font-style:italic;color:#E63946;font-weight:500}
    .m2e-rule{
      position:absolute;top:520px;left:56px;right:56px;
      height:1px;background:#1a1815;opacity:.15;
    }
    .m2e-explain{
      position:absolute;top:570px;left:56px;right:56px;
      font-family:'Fraunces',serif;font-size:34px;font-weight:400;
      line-height:1.3;color:#3a3530;letter-spacing:-.4px;font-style:italic;
    }
    .m2e-body{
      position:absolute;top:830px;left:56px;right:56px;
      font-family:'Geist',sans-serif;font-size:22px;line-height:1.6;
      color:#3a3530;font-weight:400;
    }
    .m2e-body p+p{margin-top:18px}
    .m2e-body b{color:#1a1815;font-weight:600}
    """
    erros = [
        ("Erro 01", "Postar só foto de obra <em>pronta.</em>",
         "Cliente quer ver o ANTES, o processo e o DEPOIS.",
         "É o processo que vende · mostra o quanto você trabalha. Foto pronta sem contexto vira só mais uma imagem no feed. Cliente passa direto sem entender o que aquilo significa pra ele.",
         "Solução: a cada obra, registre 3 momentos · chegada do material, meio do trabalho, entrega final. Não precisa estética perfeita. Precisa ser real."),
        ("Erro 02", "Bio sem cidade + <em>WhatsApp</em> clicável.",
         "Cliente abre seu perfil e em 5 segundos quer saber duas coisas.",
         "Você atende a cidade dele? Como falar agora? Se ele tem que procurar a resposta, perdeu. A bio precisa entregar isso em uma olhada · cidade, serviço, botão de WhatsApp.",
         "Solução: 1ª linha · Pintor profissional em Ipatinga e região. 2ª linha · Orçamento sem compromisso. 3ª linha · Botão WhatsApp clicável."),
        ("Erro 03", "Sumir por <em>semanas</em> seguidas.",
         "O algoritmo entende que você parou de trabalhar.",
         "Quem te via antes deixa de ver. O perfil esfria. E o pior · o cliente que entrou no seu feed esses dias acha que você fechou. Constância importa mais que perfeição.",
         "Solução: 3 posts simples por semana ganham de um post genial por mês. Foto da obra no fim do dia + legenda curta resolve."),
    ]
    for i, (tag, title, intro, body1, body2) in enumerate(erros, start=2):
        edition = f"Erros · {i-1} de 3"
        s = f"""
  {header(edition=edition)}
  <div class="ornament">*</div>
  <div class="m2e-num">{i-1:02d}</div>
  <div class="m2e-tag">{tag}</div>
  <h2 class="m2e-title">{title}</h2>
  <div class="m2e-rule"></div>
  <div class="m2e-explain">{intro}</div>
  <div class="m2e-body">
    <p>{body1}</p>
    <p><b>{body2}</b></p>
  </div>
  {footer(arrasta=True)}"""
        slides.append((f"0{i}_erro{i-1}", render(s, css_erro)))

    # ===== SLIDE 5 · CTA DARK =====
    css5 = """
    .m2f-kicker{color:#FF8590 !important}
    .m2f-kicker::before{color:#FF8590 !important}
    .m2f-headline{
      position:absolute;top:228px;left:56px;right:56px;
      font-family:'Fraunces',serif;font-size:96px;font-weight:600;
      line-height:.95;letter-spacing:-2px;color:#F5F1E8;
      font-variation-settings:'opsz' 96;
    }
    .m2f-headline em{font-style:italic;color:#E63946;font-weight:500}
    .m2f-deck{
      position:absolute;top:730px;left:56px;right:56px;
      font-family:'Fraunces',serif;font-size:30px;font-weight:400;
      line-height:1.35;color:#c4b89e;letter-spacing:-.3px;font-style:italic;
    }
    .m2f-cta-box{
      position:absolute;top:900px;left:56px;right:56px;
      padding:32px 36px;background:#E63946;color:#F5F1E8;
      display:flex;justify-content:space-between;align-items:center;
      border-radius:2px;
    }
    .m2f-cta-l{font-family:'Fraunces',serif;font-size:32px;font-weight:600;letter-spacing:-.5px;line-height:1.15}
    .m2f-cta-r{text-align:right;font-family:'Geist',sans-serif}
    .m2f-cta-r .wp{display:inline-block;background:#1a1815;color:#F5F1E8;padding:14px 24px;font-size:13px;letter-spacing:2.5px;font-weight:800;text-transform:uppercase;border-radius:2px}
    .m2f-cta-r .num{display:block;font-size:14px;letter-spacing:2px;margin-top:10px;font-weight:600;color:#F5F1E8}
    .m2f-note{
      position:absolute;top:1100px;left:56px;right:56px;
      font-family:'Geist',sans-serif;font-size:14px;color:#c4b89e;
      letter-spacing:1.5px;text-transform:uppercase;font-weight:500;text-align:center;
    }
    """
    s5 = f"""
  <div class="canvas dark">
  {header(edition="Fim · 5 de 5", dark=True)}
  <div class="ornament">*</div>
  <div class="kicker m2f-kicker">Pronto pra ajeitar?</div>
  <h1 class="m2f-headline">A gente cuida do seu Instagram <em>enquanto você cuida</em> da obra.</h1>
  <div class="m2f-deck">12 a 16 posts profissionais por mês. WhatsApp automático 24h. Você no Google da sua cidade.</div>
  <div class="m2f-cta-box">
    <div class="m2f-cta-l">A partir de R$ 1.500<br>por mês.</div>
    <div class="m2f-cta-r"><span class="wp">Chama no WhatsApp</span><span class="num">{WHATSAPP}</span></div>
  </div>
  <div class="m2f-note">Salve esse post · Marque um amigo prestador</div>
  {footer(dark=True, custom_meta=SITE)}
  </div>"""
    slides.append(("05_cta", render(s5, css5).replace('<div class="canvas">', '')))
    return slides


# =============================================================
# MODELO 03 · DIA DO PEDREIRO (25/10)
# =============================================================
def modelo_03_pedreiro():
    css = f"""
    .canvas{{background:#1a1815}}
    .m3-photo{{
      position:absolute;inset:0;
      background:url('{PEDREIRO}') center 25% / cover no-repeat;
    }}
    .m3-photo::after{{
      content:'';position:absolute;inset:0;
      background:linear-gradient(180deg,
        rgba(20,16,12,.3) 0%,
        rgba(20,16,12,.55) 38%,
        rgba(20,16,12,.85) 65%,
        rgba(20,16,12,.97) 88%,
        rgba(20,16,12,1) 100%
      );
    }}
    .m3-ornament{{position:absolute;top:170px;right:56px;font-family:'Fraunces',serif;font-size:60px;color:#E63946;line-height:1;z-index:5}}
    .m3-kicker{{position:absolute;top:144px;left:56px;font-family:'Geist',sans-serif;font-size:13px;letter-spacing:4px;text-transform:uppercase;font-weight:700;color:#E63946;z-index:5;display:flex;align-items:center;gap:14px}}
    .m3-kicker::before{{content:'·';font-size:34px;line-height:.5;color:#E63946}}
    .m3-date{{
      position:absolute;bottom:480px;left:56px;
      font-family:'Fraunces',serif;font-size:220px;
      font-weight:700;color:#E63946;line-height:.85;
      letter-spacing:-6px;font-style:italic;z-index:5;
    }}
    .m3-month{{
      position:absolute;bottom:430px;left:380px;
      font-family:'Fraunces',serif;font-size:34px;
      font-weight:400;color:#F5F1E8;font-style:italic;
      letter-spacing:-.3px;z-index:5;
    }}
    .m3-title{{
      position:absolute;bottom:280px;left:56px;right:56px;
      font-family:'Fraunces',serif;font-size:84px;
      font-weight:600;color:#F5F1E8;line-height:.95;
      letter-spacing:-2px;z-index:5;
      font-variation-settings:'opsz' 96;
    }}
    .m3-title em{{font-style:italic;color:#E63946;font-weight:500}}
    .m3-body{{
      position:absolute;bottom:140px;left:56px;right:380px;
      font-family:'Fraunces',serif;font-size:24px;
      font-weight:400;color:#F5F1E8;opacity:.92;
      line-height:1.4;font-style:italic;letter-spacing:-.2px;z-index:5;
    }}
    .m3-body b{{font-style:normal;font-weight:600;opacity:1}}
    .m3-stat{{
      position:absolute;bottom:140px;right:56px;
      width:280px;padding:20px 24px;
      background:rgba(245,241,232,.08);
      border:1px solid rgba(245,241,232,.18);
      border-radius:2px;z-index:5;
    }}
    .m3-stat-num{{font-family:'Fraunces',serif;font-size:52px;font-weight:700;color:#E63946;line-height:1;letter-spacing:-1.5px;font-style:italic;margin-bottom:8px}}
    .m3-stat-text{{font-family:'Geist',sans-serif;font-size:13px;color:#F5F1E8;line-height:1.4}}
    .m3-stat-source{{font-family:'Geist',sans-serif;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:#c4b89e;margin-top:10px;padding-top:8px;border-top:1px solid rgba(245,241,232,.18);font-weight:600}}
    .m3-foot{{
      position:absolute;bottom:34px;left:56px;right:56px;
      display:flex;justify-content:space-between;align-items:center;
      font-family:'Geist',sans-serif;font-size:12px;letter-spacing:2px;
      text-transform:uppercase;font-weight:600;z-index:5;
    }}
    .m3-foot .handle{{color:#F5F1E8;font-weight:700;letter-spacing:3px}}
    .m3-foot .meta{{color:#c4b89e;font-weight:500}}
    .m3-foot-rule{{position:absolute;bottom:90px;left:56px;right:56px;height:1px;background:#F5F1E8;opacity:.2;z-index:5}}
    """
    inner = f"""
  <div class="m3-photo"></div>
  {header(edition="Edição Especial · Out 2026", dark=True)}
  <div class="m3-ornament">*</div>
  <div class="m3-date">25</div>
  <div class="m3-month">de outubro</div>
  <h1 class="m3-title">Dia do <em>Pedreiro.</em></h1>
  <div class="m3-body">Pra quem ergue o Brasil tijolo por tijolo, com o sol na cabeça e a família em mente. <b>Respeito.</b></div>
  <div class="m3-stat">
    <div class="m3-stat-num">2,8M</div>
    <div class="m3-stat-text">de trabalhadores formais na construção civil.</div>
    <div class="m3-stat-source">Fonte · CBIC / CAGED 2024</div>
  </div>
  <div class="m3-foot-rule"></div>
  <div class="m3-foot">
    <span class="handle">{HANDLE}</span>
    <span class="meta">25 · 10 · 2026</span>
    <span style="color:#c4b89e">{SITE}</span>
  </div>"""
    return [("01", render(inner, css))]


# =============================================================
# MODELO 04 · CTA SERVIÇOS
# =============================================================
def modelo_04_cta():
    css = """
    .m4-headline{
      position:absolute;top:198px;left:56px;right:360px;
      font-family:'Fraunces',serif;font-size:82px;font-weight:600;
      line-height:.96;letter-spacing:-2px;color:#1a1815;
      font-variation-settings:'opsz' 96;
    }
    .m4-headline em{font-style:italic;color:#E63946;font-weight:500}
    .m4-photo-mini{
      position:absolute;top:198px;right:56px;
      width:280px;height:280px;
      background-size:cover;background-position:center;
      border-radius:2px;
    }
    .m4-photo-mini.work{background-image:url('""" + OBRA + """')}
    .m4-stat-banner{
      position:absolute;top:560px;left:56px;right:56px;
      padding:18px 24px;background:#1a1815;color:#F5F1E8;
      border-radius:2px;display:flex;align-items:center;gap:14px;
      font-family:'Geist',sans-serif;font-size:16px;line-height:1.4;
    }
    .m4-stat-banner b{color:#E63946;font-weight:700}
    .m4-stat-banner .source{margin-left:auto;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#c4b89e;font-weight:600;flex-shrink:0}

    /* Asymmetric grid: card grande (Instagram) + 2 pequenos empilhados */
    .m4-grid{
      position:absolute;top:670px;left:56px;right:56px;
      display:grid;
      grid-template-columns:1.4fr 1fr;
      grid-template-rows:1fr 1fr;
      gap:14px;
      height:300px;
    }
    .m4-card-big{
      grid-row:1 / span 2;
      padding:28px 30px 30px;background:#1a1815;color:#F5F1E8;
      border-radius:2px;display:flex;flex-direction:column;
      position:relative;overflow:hidden;
    }
    .m4-card-big::after{
      content:'';position:absolute;top:-80px;right:-80px;
      width:240px;height:240px;
      background:radial-gradient(circle,rgba(230,57,70,.35) 0%,transparent 65%);
      border-radius:50%;
    }
    .m4-card-big-tag{font-family:'Geist',sans-serif;font-size:11px;letter-spacing:3px;font-weight:700;color:#E63946;text-transform:uppercase;margin-bottom:14px;position:relative;z-index:2}
    .m4-card-big-t{font-family:'Fraunces',serif;font-size:38px;font-weight:600;line-height:1.05;color:#F5F1E8;letter-spacing:-.8px;margin-bottom:14px;position:relative;z-index:2}
    .m4-card-big-t em{font-style:italic;color:#E63946;font-weight:500}
    .m4-card-big-d{font-family:'Geist',sans-serif;font-size:15px;line-height:1.55;color:#c4b89e;margin-bottom:auto;position:relative;z-index:2}
    .m4-card-big-foot{display:flex;justify-content:space-between;align-items:flex-end;padding-top:18px;border-top:1px solid #3a3530;font-family:'Geist Mono',monospace;font-size:11px;letter-spacing:2px;color:#8B7355;text-transform:uppercase;font-weight:500;position:relative;z-index:2}
    .m4-card-big-foot b{color:#E63946;font-weight:700;font-family:'Fraunces',serif;font-size:24px;letter-spacing:-.5px;text-transform:none;font-style:italic}

    .m4-card-sm{
      padding:18px 20px 20px;background:#F5F1E8;
      border:1px solid #d9d2c0;border-radius:2px;
      display:flex;flex-direction:column;
    }
    .m4-card-sm-tag{font-family:'Geist',sans-serif;font-size:10px;letter-spacing:2.5px;font-weight:700;color:#E63946;text-transform:uppercase;margin-bottom:8px}
    .m4-card-sm-t{font-family:'Fraunces',serif;font-size:20px;font-weight:600;line-height:1.1;color:#1a1815;letter-spacing:-.3px;margin-bottom:6px}
    .m4-card-sm-d{font-family:'Geist',sans-serif;font-size:12px;line-height:1.45;color:#3a3530}

    .m4-cta-box{
      position:absolute;top:1010px;left:56px;right:56px;
      padding:28px 32px;background:#1a1815;color:#F5F1E8;
      display:flex;justify-content:space-between;align-items:center;
      border-radius:2px;
    }
    .m4-cta-l{font-family:'Fraunces',serif;font-size:26px;font-weight:600;letter-spacing:-.5px;line-height:1.15}
    .m4-cta-l em{font-style:italic;color:#E63946;font-weight:500}
    .m4-cta-r{text-align:right}
    .m4-cta-r .wp{display:inline-block;background:#E63946;color:#F5F1E8;padding:14px 22px;font-size:13px;letter-spacing:2.5px;font-weight:800;text-transform:uppercase;border-radius:2px}
    .m4-cta-r .num{display:block;font-size:13px;letter-spacing:2px;margin-top:10px;font-weight:600;color:#F5F1E8;font-family:'Geist Mono',monospace}
    """
    inner = f"""
  {header(edition="Nossos serviços")}
  <div class="ornament">*</div>
  <div class="kicker">Pacote completo</div>
  <h1 class="m4-headline">Marketing digital sob medida pra quem <em>vive da obra.</em></h1>
  <div class="m4-photo-mini work"></div>
  <div class="m4-stat-banner">
    <span><b>Construção civil cresceu 4,3% no Brasil em 2024.</b> Quem aparece agora colhe nos próximos meses.</span>
    <span class="source">CBIC 2025</span>
  </div>
  <div class="m4-grid">
    <div class="m4-card-big">
      <div class="m4-card-big-tag">Serviço principal · 01</div>
      <div class="m4-card-big-t">Instagram <em>profissional</em></div>
      <div class="m4-card-big-d">12 a 16 publicações por mês · carrosséis editoriais, reels e posts únicos. Identidade visual, legendas com fonte verificável e agendamento pelo GHL.</div>
      <div class="m4-card-big-foot"><span>A partir de</span><b>R$ 1.500/mês</b></div>
    </div>
    <div class="m4-card-sm">
      <div class="m4-card-sm-tag">02 · Automação</div>
      <div class="m4-card-sm-t">WhatsApp automático</div>
      <div class="m4-card-sm-d">Resposta 24h. Você volta da obra com os orçamentos prontos.</div>
    </div>
    <div class="m4-card-sm">
      <div class="m4-card-sm-tag">03 · Busca local</div>
      <div class="m4-card-sm-t">No Google da cidade</div>
      <div class="m4-card-sm-d">Site rápido + ficha Google Empresa. Quem busca, te acha.</div>
    </div>
  </div>
  <div class="m4-cta-box">
    <div class="m4-cta-l">Sua obra mostra qualidade.<br>Seu <em>marketing</em> também deveria.</div>
    <div class="m4-cta-r"><span class="wp">Chama no WhatsApp</span><span class="num">{WHATSAPP}</span></div>
  </div>
  {footer(custom_meta=SITE)}"""
    return [("01", render(inner, css))]


# =============================================================
# EXECUTOR
# =============================================================
MODELOS = [
    ("01_frase_cliente_googlou", modelo_01_frase),
    ("02_carrossel_3_erros", modelo_02_carrossel),
    ("03_dia_do_pedreiro", modelo_03_pedreiro),
    ("04_cta_servicos", modelo_04_cta),
]

def main():
    total = 0
    for folder_name, fn in MODELOS:
        folder = ROOT / folder_name
        folder.mkdir(parents=True, exist_ok=True)
        for old in folder.glob('*.html'):
            old.unlink()
        slides = fn()
        for slide_id, html in slides:
            (folder / f"{slide_id}.html").write_text(html, encoding='utf-8')
            total += 1
        print(f"OK {folder_name} ({len(slides)} slide(s))")
    print(f"\nTotal: {total} slides")

if __name__ == "__main__":
    main()
