# -*- coding: utf-8 -*-
"""Gera 1 exemplo de cada um dos 12 modelos novos, com conteúdo real
(mesmos fatos e casos do calendário), para revisão antes de aplicar ao mês."""
from pathlib import Path
import modelos2 as m

OUT = Path(__file__).parent / "showcase2"
OUT.mkdir(exist_ok=True)

PECAS = [
    ("01_hero_foto", m.hero_foto(
        foto="equipe-feliz.jpg", kicker="Caso real",
        titulo="Da segunda<br>página pro <em>topo</em>.",
        corpo="Wolf's Siding: +706% de cliques e 18 leads orgânicos em 28 dias, sem anúncio.")),

    ("02_muro", m.muro(
        palavra="Toda semana,<br><em>muda tudo</em>.", sub="Manifesto", fundo="tinta")),

    ("03_diagonal", m.diagonal(
        foto="coding-laptop.jpg", kicker="Método",
        titulo="Site rápido<br>não é <em>luxo</em>.",
        corpo="PageSpeed 100/100 foi parte do mesmo ciclo que tirou a Wolf's Siding da 3ª página do Google.")),

    ("04_ficha", m.ficha(
        numero="Nº 05", titulo="O que a gente <em>não</em> faz.",
        campos=[
            ("Prometer prazo fixo", "Recusado"),
            ("Comprar avaliação", "Recusado"),
            ("Segurar seu acesso", "Recusado"),
            ("Relatório sem decisão", "Recusado"),
        ],
        nota="Seis recusas guiam todo contrato assinado aqui.")),

    ("05_medalhao", m.medalhao(
        foto="ideia-lampada.jpg", kicker="Bastidor",
        titulo="Quem decide<br>o que <em>funciona</em>.",
        corpo="A parte que não aparece em print: escolher o que cada página tem a dizer.")),

    ("06_central", m.central(
        numero="78", sufixo="%", fundo="vermelho",
        legenda="dos brasileiros pesquisam online antes de comprar — mesmo na loja física.")),

    ("07_polaroid", m.polaroid(
        foto="compras-online.jpg", legenda="Loja real, cliente real.",
        titulo="Prova vale mais<br>que <em>adjetivo</em>.")),

    ("08_recibo", m.recibo(
        titulo="O que travava<br>o <em>funil</em>",
        itens=[
            ("Resposta em 12h", "-11h"),
            ("Perfil sem foto nova", "-40%"),
            ("Zero avaliação respondida", "-1,2★"),
            ("Site em 3ª página", "-88mil"),
        ],
        total_r="Resultado em 28 dias", total_v="+706%")),

    ("09_janela", m.janela(
        foto="tecnologia-simples.jpg", titulo="Cada projeto,<br><em>um</em> retrato.",
        legenda="Sites, funis e atendimento — construídos um de cada vez.")),

    ("10_cartaz", m.cartaz(
        linha1="Não é mágica.",
        linha2_em="É",
        linha3="manutenção.",
        rodape="Medir · Estancar · Construir · Manter")),

    ("11_metade", m.metade(
        foto="chatbot-whatsapp.jpg", kicker="Verdade dura",
        titulo="59% atendem<br>pelo <em>WhatsApp</em>.",
        corpo="É o canal que mais importa e o único que quase ninguém organiza.",
        botao="Chamar no WhatsApp")),

    ("12_selo", m.selo(
        texto_anel="Calazans Lumina · Desde 2026", palavra="Método<br>próprio", fundo="papel")),
]

for nome, html in PECAS:
    (OUT / f"{nome}.html").write_text(html, encoding="utf-8")

print(f"{len(PECAS)} peças em {OUT}")
