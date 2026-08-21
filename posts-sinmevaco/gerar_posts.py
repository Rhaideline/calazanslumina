"""
Gerador de posts do SINMEVACO - Sindicato dos Medicos do Vale do Aco.
Formato: 1080x1350 (Instagram vertical 4:5)
Linha editorial: caso real -> pergunta -> "a resposta esta no documento" -> CTA juridico.

Cada slide e um HTML autonomo (renderiza sem foto). Os blocos .photo aceitam
uma imagem opcional em fotos/<nome>.jpg - se o arquivo nao existir, o degrade
de fundo assume e o slide continua fechado.
"""
from pathlib import Path

ROOT = Path(__file__).parent

# ====== IDENTIDADE (confirmar antes de publicar) ======
HANDLE = "@sinmevaco"
SITE = "sinmevaco.com.br"
FONE = "(31) 99507-4027"
CIDADE = "Coronel Fabriciano - Vale do Aco / MG"

# ====== BASE ======
BASE_CSS = """
:root{
  --navy:#132340;
  --navy-2:#0B1526;
  --navy-3:#1E355C;
  --cream:#F4EFE6;
  --cream-2:#E4DACA;
  --brass:#A8763E;
  --brass-2:#C89B5C;
  --ink:#141A24;
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-font-smoothing:antialiased}
html,body{width:1080px;height:1350px;overflow:hidden;background:#000}
body{font-family:'DM Sans',system-ui,sans-serif;color:var(--cream)}
.canvas{width:1080px;height:1350px;position:relative;overflow:hidden;display:flex;flex-direction:column}

/* ---- fundos ---- */
.bg-navy{background:
  radial-gradient(120% 80% at 78% 12%, rgba(60,102,168,.30) 0%, rgba(19,35,64,0) 58%),
  radial-gradient(90% 60% at 12% 96%, rgba(168,118,62,.20) 0%, rgba(11,21,38,0) 60%),
  linear-gradient(168deg,#16294A 0%,#101E36 46%,#0A1220 100%)}
.bg-cream{background:
  radial-gradient(90% 70% at 20% 8%, rgba(255,255,255,.85) 0%, rgba(244,239,230,0) 60%),
  linear-gradient(158deg,#F6F2EA 0%,#EFE8DC 52%,#E4DACA 100%)}
.bg-steel{background:
  radial-gradient(90% 70% at 24% 10%, rgba(146,163,186,.30) 0%, rgba(30,45,72,0) 62%),
  linear-gradient(172deg,#2A3B57 0%,#1B2942 55%,#111C2E 100%)}
.bg-brass{background:
  radial-gradient(100% 70% at 78% 6%, rgba(226,182,124,.34) 0%, rgba(120,80,38,0) 62%),
  linear-gradient(165deg,#8E6231 0%,#7A5228 55%,#5E3C1B 100%)}
.grain::before{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;opacity:.16;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)'/%3E%3C/svg%3E")}
.veins::after{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;opacity:.5;
  background:
    linear-gradient(112deg, transparent 41%, rgba(120,110,96,.14) 42%, transparent 43%),
    linear-gradient(98deg, transparent 66%, rgba(120,110,96,.10) 67%, transparent 68%),
    linear-gradient(126deg, transparent 20%, rgba(120,110,96,.08) 21%, transparent 22%)}

/* ---- foto opcional ---- */
.photo{position:absolute;inset:0;z-index:0;background-position:center;background-size:cover;background-repeat:no-repeat;
  filter:saturate(.72) contrast(1.05) brightness(.78)}
.photo::after{content:"";position:absolute;inset:0;
  background:linear-gradient(178deg, rgba(11,21,38,.45) 0%, rgba(11,21,38,.72) 55%, rgba(8,14,26,.94) 100%)}

/* ---- chrome do post ---- */
.wm{position:absolute;z-index:9;top:46px;left:56px;font-size:19px;letter-spacing:.06em;font-weight:500;opacity:.42}
.wm.dark{color:var(--ink)}
.counter{position:absolute;z-index:9;top:40px;right:56px;font-size:20px;font-weight:600;letter-spacing:.04em;
  padding:9px 20px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.16)}
.counter.dark{background:rgba(20,26,36,.10);border-color:rgba(20,26,36,.16);color:var(--ink)}

.logo{display:inline-flex;align-items:center;gap:16px;line-height:1}
.logo .mark{width:56px;height:56px;border-radius:8px;flex:0 0 56px;display:flex;align-items:center;justify-content:center;
  background:var(--brass);color:#fff;font-family:'DM Serif Display',serif;font-style:italic;font-size:34px;padding-bottom:4px}
.logo .wm2{display:flex;flex-direction:column;gap:6px}
.logo .name{font-family:'DM Serif Display',serif;font-style:italic;font-size:30px;letter-spacing:-.01em}
.logo .sub{font-size:11.5px;letter-spacing:.34em;text-transform:uppercase;font-weight:600;opacity:.62}
.logo.dark .name{color:var(--ink)}
.logo.dark .sub{color:rgba(20,26,36,.65)}

.foot{position:absolute;z-index:9;left:56px;right:56px;bottom:52px;display:flex;align-items:flex-end;justify-content:space-between;gap:24px}
.foot .tag{font-size:15px;letter-spacing:.26em;text-transform:uppercase;font-weight:600;opacity:.5;text-align:right;line-height:1.6}
.foot .tag.dark{color:rgba(20,26,36,.6)}

/* ---- capa ---- */
.cover .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 76px;gap:34px}
.cover .label{display:flex;flex-direction:column;align-items:flex-start;gap:10px}
.cover .label span{background:var(--navy-3);color:var(--cream);font-size:33px;font-weight:600;letter-spacing:-.01em;
  padding:8px 16px;box-decoration-break:clone}
.cover h1{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;font-size:104px;line-height:.96;
  letter-spacing:-.02em;color:var(--cream);max-width:14ch}
.cover h1 em{font-style:italic;color:var(--brass-2)}
.cover .ask{font-size:34px;font-weight:400;opacity:.72;letter-spacing:-.01em}
.cover .answer{position:absolute;z-index:6;right:0;bottom:250px;background:var(--brass);padding:30px 44px 30px 40px;
  max-width:560px;display:flex;align-items:center;gap:22px;font-size:29px;line-height:1.3;color:#FBF6EE}
.cover .answer .arrow{flex:0 0 76px;height:1px;background:rgba(251,246,238,.85);position:relative}
.cover .answer .arrow::after{content:"";position:absolute;right:0;top:-5px;width:11px;height:11px;
  border-top:1px solid rgba(251,246,238,.85);border-right:1px solid rgba(251,246,238,.85);transform:rotate(45deg)}

/* ---- split (2 fotos) ---- */
.split{display:flex;flex-direction:column}
.split .half{position:relative;flex:1;overflow:hidden;display:flex;align-items:center}
.split .half.a{justify-content:flex-end}
.split .half.b{justify-content:flex-start}
.split .half.b .box{background:rgba(122,82,40,.92)}
.split .box{position:relative;z-index:5;background:rgba(30,53,92,.90);backdrop-filter:blur(2px);
  padding:44px 48px;max-width:660px;margin:0 60px;font-size:35px;line-height:1.34;letter-spacing:-.005em;color:var(--cream)}
.split .box b{font-weight:700}
.split .box .serif{display:block;margin-top:14px;font-family:'DM Serif Display',serif;font-style:italic;font-size:52px;line-height:1.08}

/* ---- editorial (fundo claro) ---- */
.editorial{color:var(--ink)}
.editorial .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:46px;padding:0 96px;text-align:center}
.editorial .top{font-size:34px;line-height:1.42;letter-spacing:-.005em;max-width:20ch}
.editorial .top b{font-weight:700}
.editorial .rule{width:1px;height:78px;background:rgba(20,26,36,.35)}
.editorial h2{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;font-size:64px;line-height:1.16;
  letter-spacing:-.015em;max-width:17ch}
.editorial h2 em{font-style:italic;color:var(--brass)}
.editorial .bottom{font-size:32px;line-height:1.44;max-width:24ch;color:rgba(20,26,36,.86)}
.editorial .bottom b{font-weight:700}

/* ---- lista ---- */
.list .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 76px;gap:16px}
.list .kicker{font-size:15px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;color:var(--brass-2);margin-bottom:6px}
.list h2{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;font-size:66px;line-height:1.06;
  letter-spacing:-.02em;margin-bottom:30px;max-width:15ch}
.list .item{display:flex;gap:28px;padding:26px 0;border-top:1px solid rgba(244,239,230,.16)}
.list .item:last-child{border-bottom:1px solid rgba(244,239,230,.16)}
.list .n{font-family:'DM Serif Display',serif;font-style:italic;font-size:40px;color:var(--brass-2);flex:0 0 52px;line-height:1}
.list .t{font-size:31px;line-height:1.34;letter-spacing:-.005em}
.list .t b{font-weight:700}

/* ---- declaracao (post unico) ---- */
.statement .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 84px;gap:38px}
.statement .lead{font-size:44px;line-height:1.3;font-weight:500;letter-spacing:-.015em}
.statement .lead b{font-weight:700}
.statement h1{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;font-size:82px;line-height:1.04;
  letter-spacing:-.02em}
.statement h1 em{font-style:italic;color:var(--brass-2)}
.statement .note{font-size:28px;line-height:1.44;opacity:.74;max-width:26ch}

/* ---- balao de whatsapp ---- */
.bubble{display:inline-flex;align-items:center;gap:20px;background:#FCFAF6;color:var(--ink);
  border-radius:22px 22px 22px 6px;padding:26px 34px;box-shadow:0 26px 54px -22px rgba(0,0,0,.6);align-self:flex-start}
.bubble .file{width:52px;height:64px;border-radius:6px;background:#E9E2D5;position:relative;flex:0 0 52px}
.bubble .file::after{content:"";position:absolute;right:0;top:0;border-width:0 16px 16px 0;border-style:solid;
  border-color:#CFC4B0 #FCFAF6}
.bubble .fname{font-size:34px;font-weight:600;color:#1D3A6B}
.bubble .fsize{font-size:20px;opacity:.55;margin-top:4px}

/* ---- CTA ---- */
.cta .body{position:relative;z-index:5;flex:1;display:flex;flex-direction:column;justify-content:center;padding:0 84px;gap:34px}
.cta .kicker{font-size:15px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;color:var(--brass-2)}
.cta h2{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;font-size:76px;line-height:1.04;letter-spacing:-.02em;max-width:15ch}
.cta h2 em{font-style:italic;color:var(--brass-2)}
.cta p{font-size:32px;line-height:1.42;opacity:.8;max-width:24ch}
.cta .contatos{display:flex;flex-direction:column;gap:14px;margin-top:10px}
.cta .contatos div{display:flex;align-items:center;gap:18px;font-size:29px;letter-spacing:-.005em}
.cta .contatos .dot{width:7px;height:7px;border-radius:50%;background:var(--brass-2);flex:0 0 7px}
.cta .btn{align-self:flex-start;margin-top:14px;background:var(--brass);color:#FBF6EE;padding:26px 42px;font-size:30px;
  font-weight:600;letter-spacing:-.01em}
"""

LOGO_LIGHT = """<div class="logo"><div class="mark">S</div><div class="wm2">
  <div class="name">SINMEVA&Ccedil;O</div><div class="sub">Sindicato dos M&eacute;dicos do Vale do A&ccedil;o</div>
</div></div>"""
LOGO_DARK = LOGO_LIGHT.replace('class="logo"', 'class="logo dark"')


def page(title, canvas_class, inner, counter=None, dark_chrome=False, foot_tag=None, photo=None, show_foot=True):
    """Monta um slide 1080x1350 completo."""
    d = " dark" if dark_chrome else ""
    photo_html = ""
    if photo:
        photo_html = f'<div class="photo" style="background-image:url(\'{photo}\')"></div>'
    counter_html = f'<div class="counter{d}">{counter}</div>' if counter else ""
    tag_html = f'<div class="tag{d}">{foot_tag}</div>' if foot_tag else "<div></div>"
    logo = LOGO_DARK if dark_chrome else LOGO_LIGHT
    foot_html = f'<div class="foot">{logo}{tag_html}</div>' if show_foot else ""
    return f"""<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><title>{title}</title>
<link rel="stylesheet" href="../fontes/fonts.css">
<style>{BASE_CSS}</style></head>
<body><div class="canvas {canvas_class} grain">
{photo_html}
<div class="wm{d}">{HANDLE}</div>
{counter_html}
{inner}
{foot_html}
</div></body></html>"""


# ====== CONSTRUTORES DE SLIDE ======

def cover(labels, titulo, ask, resposta, counter, photo=None, foot_tag=None):
    lab = "".join(f"<span>{l}</span>" for l in labels)
    return page(titulo, "cover bg-navy", f"""
<div class="body">
  <div class="label">{lab}</div>
  <h1>{titulo}</h1>
  <div class="ask">{ask}</div>
</div>
<div class="answer">{resposta}<div class="arrow"></div></div>
""", counter=counter, photo=photo, foot_tag=foot_tag)


def split(bloco_a, bloco_b, counter, photo_a=None, photo_b=None):
    def half(cls, txt, ph):
        bg = f'<div class="photo" style="background-image:url(\'{ph}\')"></div>' if ph else ""
        base = "bg-navy" if cls == "a" else "bg-steel"
        return f'<div class="half {cls} {base}">{bg}<div class="box">{txt}</div></div>'
    return page("split", "split", half("a", bloco_a, photo_a) + half("b", bloco_b, photo_b),
                counter=counter, show_foot=False)


def editorial(topo, frase, rodape, counter):
    return page("editorial", "editorial bg-cream veins", f"""
<div class="body">
  <div class="top">{topo}</div>
  <div class="rule"></div>
  <h2>{frase}</h2>
  <div class="rule"></div>
  <div class="bottom">{rodape}</div>
</div>
""", counter=counter, dark_chrome=True)


def lista(kicker, titulo, itens, counter, foot_tag=None):
    li = "".join(
        f'<div class="item"><div class="n">{i+1}</div><div class="t">{t}</div></div>'
        for i, t in enumerate(itens))
    return page(titulo, "list bg-navy", f"""
<div class="body">
  <div class="kicker">{kicker}</div>
  <h2>{titulo}</h2>
  {li}
</div>
""", counter=counter, foot_tag=foot_tag)


def cta(kicker, titulo, texto, botao, counter=None):
    return page(titulo, "cta bg-navy", f"""
<div class="body">
  <div class="kicker">{kicker}</div>
  <h2>{titulo}</h2>
  <p>{texto}</p>
  <div class="contatos">
    <div><span class="dot"></span>{FONE}</div>
    <div><span class="dot"></span>{SITE}</div>
    <div><span class="dot"></span>{CIDADE}</div>
  </div>
  <div class="btn">{botao}</div>
</div>
""", counter=counter, foot_tag="Jur&iacute;dico<br>pr&oacute;prio")


def statement(lead, titulo, nota, fundo="bg-brass", extra="", foot_tag=None):
    return page(titulo, f"statement {fundo}", f"""
<div class="body">
  <div class="lead">{lead}</div>
  {extra}
  <h1>{titulo}</h1>
  <div class="note">{nota}</div>
</div>
""", foot_tag=foot_tag)


BUBBLE = """<div class="bubble"><div class="file"></div>
<div><div class="fname">Laudo-paciente.pdf</div><div class="fsize">2 p&aacute;ginas &middot; 480 KB</div></div></div>"""


# ====== POSTS ======
# Slots de foto: coloque o arquivo em fotos/<nome>.jpg. Sem o arquivo,
# o degrade de fundo assume e o slide continua fechado.
POSTS = [
    ("01_plantao_reduzido", [
        ("01_capa.html", cover(
            ["O hospital reduziu o valor do plant&atilde;o"],
            "e avisou pelo grupo do <em>WhatsApp.</em>",
            "Sou obrigado a aceitar?",
            "A resposta est&aacute; na conven&ccedil;&atilde;o coletiva.",
            "1/5", photo="fotos/plantao-capa.jpg", foot_tag="Jur&iacute;dico<br>SINMEVA&Ccedil;O")),
        ("02_caso.html", split(
            "O comunicado chegou em um grupo com dezenas de m&eacute;dicos. <b>Nenhum aditivo assinado.</b>"
            "<span class='serif'>Nenhuma negocia&ccedil;&atilde;o.</span>",
            "Tr&ecirc;s meses depois, a diferen&ccedil;a acumulada j&aacute; passava de <b>um plant&atilde;o inteiro por m&ecirc;s.</b>",
            "2/5", photo_a="fotos/plantao-a.jpg", photo_b="fotos/plantao-b.jpg")),
        ("03_virada.html", editorial(
            "Esse &eacute; um caso real de um m&eacute;dico associado que <b>procurou o sindicato.</b>",
            "O que muda tudo nessa hist&oacute;ria &eacute; que o valor do plant&atilde;o estava previsto em <em>conven&ccedil;&atilde;o coletiva.</em>",
            "Aviso em grupo n&atilde;o substitui <b>negocia&ccedil;&atilde;o coletiva</b>, nem <b>aditivo contratual</b>, nem o que j&aacute; foi pactuado.",
            "3/5")),
        ("04_checklist.html", lista(
            "Antes de aceitar",
            "O que fazer nos primeiros dias",
            ["<b>Salve o comunicado</b> &mdash; print com data, autor e o grupo em que foi enviado.",
             "<b>Junte 12 meses</b> de escalas, recibos e contracheques para provar o valor praticado.",
             "<b>N&atilde;o assine aditivo</b> nem termo de ci&ecirc;ncia sem leitura jur&iacute;dica.",
             "<b>Leve ao jur&iacute;dico do SINMEVA&Ccedil;O</b> &mdash; sem custo adicional para o associado."],
            "4/5")),
        ("05_cta.html", cta(
            "SINMEVA&Ccedil;O &middot; desde 1991",
            "Antes de assinar, <em>fale com o sindicato.</em>",
            "Defesa trabalhista, &eacute;tica e c&iacute;vel para o m&eacute;dico do Vale do A&ccedil;o, com advogados de direito m&eacute;dico.",
            "Falar com o jur&iacute;dico", "5/5")),
    ]),

    ("02_ameaca_de_processo", [
        ("01_capa.html", cover(
            ["O paciente disse que vai abrir representa&ccedil;&atilde;o no CRM"],
            "e o m&eacute;dico respondeu <em>tudo por mensagem.</em>",
            "Devo explicar por escrito?",
            "A resposta come&ccedil;a no prontu&aacute;rio.",
            "1/5", photo="fotos/crm-capa.jpg", foot_tag="Defesa &eacute;tica<br>SINMEVA&Ccedil;O")),
        ("02_caso.html", split(
            "Mensagem enviada no impulso vira prova &mdash; <b>inclusive contra quem escreveu.</b>",
            "<span class='serif'>Prontu&aacute;rio completo,</span> datado e assinado, &eacute; a pe&ccedil;a central de qualquer defesa.",
            "2/5", photo_a="fotos/crm-a.jpg", photo_b="fotos/crm-b.jpg")),
        ("03_virada.html", editorial(
            "Esse &eacute; um tipo de caso comum &mdash; e as <b>primeiras 48 horas</b> decidem o resto.",
            "Processo &eacute;tico n&atilde;o se resolve no impulso. Se resolve com <em>documento.</em>",
            "O que pesa na defesa &eacute; o <b>registro</b>: prontu&aacute;rio, termo de consentimento, exames e a linha do tempo do atendimento.",
            "3/5")),
        ("04_checklist.html", lista(
            "Primeiras 48 horas",
            "O protocolo que protege voc&ecirc;",
            ["<b>N&atilde;o altere o prontu&aacute;rio.</b> Edi&ccedil;&atilde;o posterior &eacute; o que mais compromete a defesa.",
             "<b>Re&uacute;na tudo</b>: TCLE, exames, receitas, agendamentos e registros de contato.",
             "<b>N&atilde;o responda acusa&ccedil;&atilde;o</b> por WhatsApp, direct ou telefone.",
             "<b>Acione o jur&iacute;dico</b> antes de escrever qualquer defesa ao CRM."],
            "4/5")),
        ("05_cta.html", cta(
            "SINMEVA&Ccedil;O &middot; jur&iacute;dico",
            "Defesa &eacute;tica <em>n&atilde;o se improvisa.</em>",
            "Acompanhamento em processo &eacute;tico-disciplinar, trabalhista e c&iacute;vel &mdash; sem custo adicional para o associado.",
            "Agendar atendimento", "5/5")),
    ]),

    ("03_contrato_pj", [
        ("01_capa.html", cover(
            ["Assinou como PJ para receber mais"],
            "e adoeceu <em>no meio do ano.</em>",
            "Quem paga o afastamento?",
            "A resposta est&aacute; no contrato.",
            "1/5", photo="fotos/pj-capa.jpg", foot_tag="Contratos<br>SINMEVA&Ccedil;O")),
        ("02_caso.html", split(
            "Sem v&iacute;nculo, <b>n&atilde;o h&aacute; afastamento remunerado</b>, nem 13&ordm;, nem f&eacute;rias, nem FGTS.",
            "<span class='serif'>E se a rotina &eacute; de empregado,</span> o contrato pode n&atilde;o descrever o que realmente acontece.",
            "2/5", photo_a="fotos/pj-a.jpg", photo_b="fotos/pj-b.jpg")),
        ("03_virada.html", editorial(
            "Esse &eacute; um caso comum entre m&eacute;dicos que <b>pejotizaram</b> para aumentar o l&iacute;quido.",
            "O que define o v&iacute;nculo n&atilde;o &eacute; o papel assinado &mdash; &eacute; a <em>rotina de trabalho.</em>",
            "Subordina&ccedil;&atilde;o, pessoalidade, habitualidade e onerosidade s&atilde;o o que a Justi&ccedil;a olha primeiro.",
            "3/5")),
        ("04_checklist.html", lista(
            "Antes de assinar",
            "Cinco cl&aacute;usulas que mudam sua vida",
            ["<b>Reajuste</b>: existe &iacute;ndice e data-base, ou o valor fica congelado?",
             "<b>Afastamento</b>: o que acontece com a remunera&ccedil;&atilde;o em caso de doen&ccedil;a?",
             "<b>Multa e aviso</b>: quanto custa sair &mdash; e quanto custa ser dispensado?",
             "<b>Responsabilidade civil</b>: quem responde e quem paga o seguro?",
             "<b>Escala e exclusividade</b>: o contrato descreve o que voc&ecirc; de fato faz?"],
            "4/5")),
        ("05_cta.html", cta(
            "SINMEVA&Ccedil;O &middot; contratos",
            "Leitura de contrato <em>antes</em> da assinatura.",
            "Envie a proposta ao jur&iacute;dico do sindicato e receba a an&aacute;lise cl&aacute;usula por cl&aacute;usula.",
            "Enviar meu contrato", "5/5")),
    ]),

    ("04_lgpd_laudo_whatsapp", [
        ("01_post.html", statement(
            "M&eacute;dico, se o laudo do seu paciente sai do consult&oacute;rio <b>em um print</b>",
            "a responsabilidade <em>&eacute; sua.</em>",
            "Exame e laudo s&atilde;o dado sens&iacute;vel de sa&uacute;de. Quem decide como esse dado circula responde pelo vazamento &mdash; n&atilde;o o aplicativo, n&atilde;o a secret&aacute;ria.",
            fundo="bg-brass", extra=BUBBLE, foot_tag="LGPD<br>Lei 13.709/2018")),
    ]),

    ("05_escala_de_plantao", [
        ("01_post.html", statement(
            "Trocaram sua escala no grupo, <b>na v&eacute;spera do fim de semana.</b>",
            "Escala n&atilde;o &eacute; <em>convite.</em>",
            "Altera&ccedil;&atilde;o de jornada tem regra &mdash; e a regra est&aacute; na conven&ccedil;&atilde;o coletiva da categoria, n&atilde;o no combinado de &uacute;ltima hora.",
            fundo="bg-navy", foot_tag="Conven&ccedil;&atilde;o coletiva<br>da categoria")),
    ]),

    ("06_beneficios_associado", [
        ("01_post.html", lista(
            "Voc&ecirc; contribui. Voc&ecirc; tem direito.",
            "O que j&aacute; est&aacute; inclu&iacute;do para o associado",
            ["<b>Jur&iacute;dico pr&oacute;prio</b> em processo &eacute;tico, trabalhista e c&iacute;vel.",
             "<b>Leitura de contratos</b> e propostas antes da assinatura.",
             "<b>Negocia&ccedil;&atilde;o coletiva</b> de piso, escala e reajuste.",
             "<b>Orienta&ccedil;&atilde;o</b> em PJ, cooperativa e presta&ccedil;&atilde;o de servi&ccedil;o.",
             "<b>Representa&ccedil;&atilde;o</b> junto a hospitais, prefeituras e operadoras."],
            None, foot_tag="Cel. Fabriciano &middot; Ipatinga<br>Tim&oacute;teo &middot; Santana do Para&iacute;so")),
    ]),
]


def main():
    total = 0
    for pasta, slides in POSTS:
        d = ROOT / pasta
        d.mkdir(exist_ok=True)
        for nome, conteudo in slides:
            (d / nome).write_text(conteudo, encoding="utf-8")
            total += 1
        print(f"  {pasta}: {len(slides)} slide(s)")
    print(f"\n{total} slides gerados em {ROOT}")


if __name__ == "__main__":
    main()
