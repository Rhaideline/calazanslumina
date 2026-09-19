"""
Modelos de peca do feed da Calazans Lumina.

Cada funcao devolve (classes_extra, topo_direito, miolo, css_extra).
O tema (t-tinta / t-papel / t-brasa) e o fio de costura vem de fora, do
motor de variacao em gerar.py — assim o mesmo modelo consegue aparecer
em tres roupas diferentes sem virar outro desenho.

Teto de 20 palavras por miolo (ver ESTUDO-CRAFT-2026.md, item 6).
"""

SETA = ('<span style="font-family:\'DM Serif Display\',serif;font-style:italic;'
        'font-size:26px;letter-spacing:0;text-transform:none">&rarr;</span>')


def _tag(txt):
    return f'<span class="tag">{txt}</span>' if txt else ""


# ---------------------------------------------------------------- 01 manifesto
def manifesto(titulo, lead=None, chapeu=None, tamanho="xl"):
    """Uma frase grande e ar. O modelo que sustenta a identidade no grid."""
    css = """
    .mf{display:flex;flex-direction:column;gap:40px}
    .mf .risco{width:96px;height:4px;background:var(--acento)}
    """
    corpo = f'<p class="corpo">{lead}</p>' if lead else ""
    meio = f"""<div class="mf">
      <div class="risco"></div>
      <h1 class="{tamanho}">{titulo}</h1>
      {corpo}</div>"""
    return "", _tag(chapeu), meio, css


# ------------------------------------------------------------------ 02 numero
def numero(num, frase, fonte=None, chapeu=None, sufixo=None):
    """Um dado gigante. Serve de ancora visual e de prova."""
    css = """
    .nm{display:flex;flex-direction:column;gap:30px;align-items:flex-start}
    .nm .cifra{font-family:'DM Serif Display',serif;font-style:italic;color:var(--acento);
               font-size:340px;line-height:.78;letter-spacing:-.05em;display:flex;align-items:baseline}
    .nm .cifra sup{font-size:150px;line-height:1;letter-spacing:-.03em}
    .nm h2{font-size:58px;line-height:1.1;max-width:880px}
    """
    sup = f"<sup>{sufixo}</sup>" if sufixo else ""
    src = f'<p class="fonte">{fonte}</p>' if fonte else ""
    meio = f"""<div class="nm">
      <div class="cifra">{num}{sup}</div>
      <h2>{frase}</h2>
      {src}</div>"""
    return "", _tag(chapeu), meio, css


# -------------------------------------------------------------------- 03 capa
def capa(titulo, promessa, edicao, chapeu=None):
    """Slide 1 de carrossel tratado como capa de revista (estudo, item 3).
    Uma ideia so, o laco aberto, e a promessa do que vem depois."""
    css = """
    .cp{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;justify-content:flex-end;gap:52px}
    .cp .alto{display:flex;flex-direction:column;gap:34px}
    .cp h1{font-size:110px;max-width:900px}
    .cp .promessa{display:flex;align-items:flex-end;justify-content:space-between;gap:30px;
                  border-top:1px solid var(--fio);padding-top:26px}
    .cp .promessa p{font-size:23px;line-height:1.45;color:var(--corpo);max-width:560px;font-weight:400}
    .cp .ed{font-family:'DM Serif Display',serif;font-style:italic;font-size:74px;color:var(--acento);
            line-height:.9;text-align:right;white-space:nowrap}
    .cp .ed small{display:block;font-family:'DM Sans',sans-serif;font-style:normal;font-size:12px;
                  letter-spacing:.3em;text-transform:uppercase;color:var(--fraco);font-weight:600;margin-top:12px}
    """
    meio = f"""<div class="cp">
      <div class="alto"><h1>{titulo}</h1></div>
      <div class="promessa">
        <p>{promessa}</p>
        <div class="ed">{edicao}<small>edição</small></div>
      </div></div>"""
    return "capa", _tag(chapeu), meio, css


# -------------------------------------------------------------------- 04 passo
def passo(n, rotulo, titulo, corpo):
    """Slide numerado. O numero e o marcador de progresso do carrossel."""
    css = """
    .ps{display:flex;flex-direction:column;gap:36px}
    .ps .cab{display:flex;align-items:flex-start;gap:34px}
    .ps .n{font-family:'DM Serif Display',serif;font-style:italic;font-size:170px;line-height:.82;
           color:var(--acento);letter-spacing:-.05em}
    .ps .rot{font-size:14px;letter-spacing:.3em;text-transform:uppercase;font-weight:700;
             color:var(--fraco);padding-top:22px}
    .ps h2{font-size:80px;line-height:1.0}
    """
    meio = f"""<div class="ps">
      <div class="cab"><span class="n">{n}</span><span class="rot">{rotulo}</span></div>
      <h2>{titulo}</h2>
      <p class="corpo">{corpo}</p></div>"""
    return "", "", meio, css


# --------------------------------------------------------------------- 05 erro
def erro(n, titulo, corpo, custo):
    """Erro + o que ele custa. A linha de custo e o que faz salvar."""
    css = """
    .er{display:flex;flex-direction:column;gap:32px}
    .er .sel{display:inline-flex;align-items:center;gap:14px;font-size:14px;letter-spacing:.3em;
             text-transform:uppercase;font-weight:700;color:var(--acento);align-self:flex-start}
    .er .sel b{font-family:'DM Serif Display',serif;font-style:italic;font-size:46px;letter-spacing:-.02em;
               font-weight:400;line-height:1}
    .er h2{font-size:84px;line-height:1.0}
    .er .custo{margin-top:8px;border-left:4px solid var(--acento);padding:14px 0 14px 26px;
               font-size:25px;line-height:1.45;color:var(--corpo);max-width:760px}
    .er .custo span{display:block;font-size:12px;letter-spacing:.3em;text-transform:uppercase;
                    font-weight:700;color:var(--acento);margin-bottom:10px}
    """
    meio = f"""<div class="er">
      <span class="sel">Erro <b>{n}</b></span>
      <h2>{titulo}</h2>
      <p class="corpo">{corpo}</p>
      <div class="custo"><span>O que isso custa</span>{custo}</div></div>"""
    return "", "", meio, css


# ------------------------------------------------------------------- 06 versus
def versus(rot_a, txt_a, rot_b, txt_b, chapeu=None):
    """Mito x verdade, antes x depois. Dois blocos, peso desigual de proposito."""
    css = """
    .vs{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;gap:0;justify-content:center}
    .vs .bloco{padding:44px 0}
    .vs .bloco + .bloco{border-top:1px solid var(--fio)}
    .vs .rot{font-size:13px;letter-spacing:.32em;text-transform:uppercase;font-weight:700;
             margin-bottom:22px;display:block}
    .vs .a .rot{color:var(--fraco)}
    .vs .b .rot{color:var(--acento)}
    .vs .a h2{font-size:62px;line-height:1.06;color:var(--fraco)}
    .vs .b h2{font-size:76px;line-height:1.04}
    """
    meio = f"""<div class="vs">
      <div class="bloco a"><span class="rot">{rot_a}</span><h2>{txt_a}</h2></div>
      <div class="bloco b"><span class="rot">{rot_b}</span><h2>{txt_b}</h2></div></div>"""
    return "", _tag(chapeu), meio, css


# -------------------------------------------------------------------- 07 lista
def lista(titulo, itens, chapeu=None, nota=None):
    """Pilha de itens. Formato de maior salvamento quando e acionavel."""
    css = """
    .ls{display:flex;flex-direction:column;gap:38px}
    .ls h2{font-size:74px;line-height:1.02}
    .ls ol{list-style:none;display:flex;flex-direction:column;gap:0}
    .ls li{display:flex;gap:26px;align-items:baseline;padding:22px 0;border-top:1px solid var(--fio);
           font-size:29px;line-height:1.35;font-weight:400}
    .ls li:last-child{border-bottom:1px solid var(--fio)}
    .ls li i{font-family:'DM Serif Display',serif;font-style:italic;font-size:34px;color:var(--acento);
             min-width:46px;line-height:1}
    .ls .nota{font-size:21px;color:var(--fraco);line-height:1.5}
    """
    lis = "".join(f"<li><i>{i:02d}</i><span>{t}</span></li>" for i, t in enumerate(itens, 1))
    nt = f'<p class="nota">{nota}</p>' if nota else ""
    meio = f'<div class="ls"><h2>{titulo}</h2><ol>{lis}</ol>{nt}</div>'
    return "", _tag(chapeu), meio, css


# -------------------------------------------------------------------- 08 prova
def prova(cliente, categoria, cifra, rotulo, frase, metricas):
    """Case com numero real. `metricas` = [(valor, label), ...]"""
    css = """
    .pv{display:flex;flex-direction:column;gap:34px}
    .pv .cli{display:flex;align-items:baseline;gap:18px;flex-wrap:wrap}
    .pv .cli b{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;font-size:40px}
    .pv .cli span{font-size:13px;letter-spacing:.3em;text-transform:uppercase;font-weight:600;color:var(--fraco)}
    .pv .cifra{font-family:'DM Serif Display',serif;font-style:italic;color:var(--acento);
               font-size:240px;line-height:.8;letter-spacing:-.05em}
    .pv .rot{font-size:15px;letter-spacing:.3em;text-transform:uppercase;font-weight:700;color:var(--corpo);margin-top:-14px}
    .pv .frase{font-family:'DM Serif Display',serif;font-style:italic;font-size:46px;line-height:1.16;max-width:820px}
    .pv .grade{display:flex;gap:0;border-top:1px solid var(--fio);padding-top:24px;margin-top:6px}
    .pv .grade div{flex:1;display:flex;flex-direction:column;gap:9px}
    .pv .grade b{font-family:'DM Serif Display',serif;font-style:italic;font-weight:400;font-size:44px;line-height:1}
    .pv .grade span{font-size:12px;letter-spacing:.24em;text-transform:uppercase;font-weight:600;color:var(--fraco);line-height:1.3}
    """
    cels = "".join(f"<div><b>{v}</b><span>{l}</span></div>" for v, l in metricas)
    meio = f"""<div class="pv">
      <div class="cli"><b>{cliente}</b><span>{categoria}</span></div>
      <div class="cifra">{cifra}</div>
      <div class="rot">{rotulo}</div>
      <p class="frase">{frase}</p>
      <div class="grade">{cels}</div></div>"""
    return "", _tag("Prova"), meio, css


# ----------------------------------------------------------------- 09 pergunta
def pergunta(texto, opcoes, chapeu=None):
    """Pergunta com alternativas. Puxa comentario, que e sinal de rank."""
    css = """
    .pg{display:flex;flex-direction:column;gap:42px}
    .pg h2{font-size:92px;line-height:1.0}
    .pg .ops{display:flex;flex-direction:column;gap:16px}
    .pg .op{display:flex;align-items:center;gap:22px;padding:24px 30px;border:1px solid var(--fio);
            border-radius:6px;font-size:27px;font-weight:400}
    .pg .op i{font-family:'DM Serif Display',serif;font-style:italic;font-size:30px;color:var(--acento);min-width:34px}
    """
    ops = "".join(f'<div class="op"><i>{chr(97+i)})</i><span>{t}</span></div>'
                  for i, t in enumerate(opcoes))
    meio = f'<div class="pg"><h2>{texto}</h2><div class="ops">{ops}</div></div>'
    return "", _tag(chapeu), meio, css


# ------------------------------------------------------------------ 10 convite
def convite(titulo, corpo, botao, chapeu=None, selo=None):
    """Fecho. Um pedido so, explicito, sem urgencia inventada."""
    css = """
    .cv{display:flex;flex-direction:column;gap:38px}
    .cv h2{font-size:100px;line-height:.98}
    .cv .linha{display:flex;align-items:center;gap:22px;flex-wrap:wrap;margin-top:6px}
    .cv .selo{font-size:14px;letter-spacing:.26em;text-transform:uppercase;font-weight:600;color:var(--fraco)}
    """
    sl = f'<span class="selo">{selo}</span>' if selo else ""
    meio = f"""<div class="cv">
      <h2>{titulo}</h2>
      <p class="corpo">{corpo}</p>
      <div class="linha"><span class="pilula clara">{botao} {SETA}</span>{sl}</div></div>"""
    return "", _tag(chapeu), meio, css


# ------------------------------------------------------------------ 11 citacao
def citacao(texto, autor, chapeu=None):
    """Fala de bastidor. O humano do feed, sem precisar de foto."""
    css = """
    .ct{display:flex;flex-direction:column;gap:34px;position:relative}
    .ct .aspas{font-family:'DM Serif Display',serif;font-style:italic;font-size:220px;color:var(--acento);
               line-height:.6;height:88px;opacity:.9}
    .ct h2{font-size:64px;line-height:1.14;max-width:860px}
    .ct .autor{display:flex;align-items:center;gap:16px;font-size:15px;letter-spacing:.26em;
               text-transform:uppercase;font-weight:600;color:var(--fraco);margin-top:8px}
    .ct .autor::before{content:"";width:44px;height:2px;background:var(--acento)}
    """
    meio = f"""<div class="ct">
      <div class="aspas">&ldquo;</div>
      <h2>{texto}</h2>
      <div class="autor">{autor}</div></div>"""
    return "", _tag(chapeu), meio, css


# ------------------------------------------------------------------- 12 agenda
def agenda(titulo, blocos, chapeu=None):
    """Grade de dois em dois. Serve pra comparar servico, etapa ou prazo.
    `blocos` = [(rotulo, valor, nota), ...]"""
    css = """
    .ag{display:flex;flex-direction:column;gap:40px}
    .ag h2{font-size:78px;line-height:1.02}
    .ag .grade{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--fio)}
    .ag .cel{background:inherit;padding:30px 28px;display:flex;flex-direction:column;gap:12px}
    .ag .cel .r{font-size:12px;letter-spacing:.3em;text-transform:uppercase;font-weight:700;color:var(--acento)}
    .ag .cel .v{font-family:'DM Serif Display',serif;font-style:italic;font-size:46px;line-height:1.05}
    .ag .cel .n{font-size:19px;line-height:1.45;color:var(--corpo)}
    """
    cels = "".join(
        f'<div class="cel"><span class="r">{r}</span><span class="v">{v}</span>'
        f'<span class="n">{n}</span></div>' for r, v, n in blocos)
    meio = f'<div class="ag"><h2>{titulo}</h2><div class="grade">{cels}</div></div>'
    return "", _tag(chapeu), meio, css
