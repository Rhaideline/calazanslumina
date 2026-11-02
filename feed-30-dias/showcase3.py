# -*- coding: utf-8 -*-
"""Um exemplo de cada um dos 16 modelos novos, com conteúdo real da agência."""
from pathlib import Path
import modelos3 as m

OUT = Path(__file__).parent / "showcase3"
OUT.mkdir(exist_ok=True)

PECAS = [
    ("01_mascara", m.mascara(
        foto="compras-online.jpg", palavra="SILÊNCIO",
        nota="o que custa mais caro no seu atendimento")),

    ("02_grade", m.grade(
        indice="Nº 02 / MÉTODO", titulo="O que a gente faz no <em>primeiro mês</em>.",
        colunas=[("Semana 1 · Medir", "O que entra hoje, por onde chega e em que ponto some."),
                 ("Semana 2 · Estancar", "Arrumar o vazamento maior antes de construir qualquer coisa."),
                 ("Semana 3 · Construir", "Site, fluxo ou perfil — o que o diagnóstico apontou.")])),

    ("03_fantasma", m.fantasma(
        numero="59", titulo="O canal que mais<br>importa é o único<br>sem <em>processo</em>.",
        corpo="59% dos consumidores brasileiros usam o WhatsApp como principal canal de atendimento — à frente de chat no site, e-mail e telefone.",
        nota="Portal Customer · Consumidor Brasileiro em Números, 2026")),

    ("04_vazado", m.vazado(
        linha_cheia="Não é mágica.", linha_vazada="É manutenção.",
        nota="Medir · Estancar · Construir · Manter", fundo="vermelho")),

    ("05_duotone", m.duotone(
        foto="equipe-feliz.jpg", titulo="Página 3.<br>28 dias depois,<br><em>página 1</em>.",
        nota="Wolf's Siding · +706% de cliques · sem anúncio")),

    ("06_reticula", m.reticula(
        foto="coding-laptop.jpg", titulo="Site bonito<br>não <em>vende</em>.",
        nota="PageSpeed 100/100 no caso Wolf's Siding")),

    ("07_lombada", m.lombada(
        foto="chatbot-whatsapp.jpg", vertical="Método da casa",
        titulo="Antes de atender,<br><em>saber</em>.",
        nota="As seis coisas que toda IA precisa saber primeiro.")),

    ("08_recorte", m.recorte(
        foto="pessoa-celular.jpg", titulo="Quantos orçamentos<br>você perdeu <em>sem saber</em>?",
        nota="A mensagem de madrugada · o formulário · a ligação")),

    ("09_trama", m.trama(
        palavra="depois eu vejo", destaque_linha=5,
        nota="É onde mora a maior parte do seu dinheiro")),

    ("10_mosaico", m.mosaico(
        fotos=["equipe-feliz.jpg", "compras-online.jpg", "coding-laptop.jpg", "ideia-lampada.jpg"],
        titulo="Cinco casos.<br>Um <em>método</em> só.",
        nota="RS Development · Wolf's Siding · JH Painting · HBM Solar · Fisio & Movimento")),

    ("11_planta", m.planta(
        codigo="RS-DEV / 04 MESES", titulo="100 páginas.<br>Zero <em>anúncio</em>.",
        medidas=[("Impressões / mês", "+24.500%"), ("Cliques", "+1.092%"),
                 ("Páginas indexadas", "100+"), ("Leads orgânicos", "8")],
        nota="De 358 para 88.103 impressões por mês, tudo orgânico.")),

    ("12_travessa", m.travessa(
        foto="compras-online.jpg", titulo_claro="Orçamento não se",
        titulo_escuro="perde no <em>preço</em>.",
        nota="60% esperam resposta em até uma hora")),

    ("13_linha", m.linha(
        titulo="Como a gente monta<br>um funil que <em>não vaza</em>.",
        pontos=[("01 · Achar", "Medir onde o lead some hoje."),
                ("02 · Destino", "Todo canal aponta pro mesmo lugar."),
                ("03 · Qualificar", "Três perguntas antes de você entrar."),
                ("04 · Retorno", "“Depois eu vejo” vira data no sistema.")],
        nota="Sete etapas no carrossel completo — estas são as quatro primeiras.")),

    ("14_colunas", m.colunas(
        titulo="O que a gente <em>não</em> faz.",
        rot_a="Recusado", itens_a=["Prometer prazo fixo", "Comprar avaliação",
                                     "Segurar seu acesso", "Copiar concorrente"],
        rot_b="Em vez disso", itens_b=["Mostrar caso publicado", "Pedir review no fluxo",
                                         "Acesso no seu nome", "Partir do seu diagnóstico"])),

    ("15_aspas", m.aspas(
        texto="Ninguém contrata agência para ganhar arquivo bonito. A parte que decide o resultado é a que não dá print.",
        autor="Rhaideline Calazans", fundo="tinta")),

    ("16_veladura", m.veladura(
        foto="ideia-lampada.jpg", titulo="Eu olho<br>o <em>seu</em>.",
        nota="Diagnóstico sem custo · 31 98294-8067")),
]

for nome, html in PECAS:
    (OUT / f"{nome}.html").write_text(html, encoding="utf-8")
print(f"{len(PECAS)} peças em {OUT}")
