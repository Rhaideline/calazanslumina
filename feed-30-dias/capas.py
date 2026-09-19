# -*- coding: utf-8 -*-
"""
Mapa dos 14 posts "de imagem única ou capa" (9 capas de carrossel + 5
estáticos) para os 12 modelos novos de modelos2.py.

Regra de intercalação que o cliente pediu: alterna com foto e sem foto.
Dos 14, 8 levam foto e 6 são só tipografia/forma — o mais perto de 50/50
que dá pra chegar com 12 modelos (6 são fotográficos por natureza).

Cada modelo aparece pelo menos uma vez; hero_foto e medalhao repetem uma
vez cada (14 posts, 12 modelos), sempre com foto e conteúdo diferentes.
"""
import modelos2 as m

CAPAS = {
    # ── carrosséis: substitui o slide 1 (a capa) ──────────────────────
    "02_erros_google": lambda: m.hero_foto(
        foto="coding-laptop.jpg", kicker="Google Meu Negócio",
        palavra="5 erros<br><em>escondem</em><br>seu negócio.",
        nota="Nenhum custa dinheiro para consertar."),

    "04_case_wolfs": lambda: m.diagonal(
        foto="equipe-feliz.jpg", kicker="Caso real",
        palavra="Página 3 <em>virou</em><br>página 1.",
        nota="Wolf's Siding · 28 dias · sem anúncio"),

    "07_ia_atendimento": lambda: m.medalhao(
        foto="chatbot-whatsapp.jpg", kicker="Método da casa",
        palavra="Antes de<br>atender,<br><em>saber</em>.",
        nota="O que toda IA precisa saber primeiro"),

    "10_funil_nao_vaza": lambda: m.polaroid(
        foto="pessoa-celular.jpg", legenda="Sete etapas, nesta ordem.",
        palavra="Funil que<br>não <em>vaza</em>."),

    "12_case_rs": lambda: m.recibo(
        titulo="100 páginas.<br>Zero <em>anúncio</em>.",
        itens=[("Impressões / mês", "+24.500%"), ("Cliques", "+1.092%"),
               ("Páginas indexadas", "100+"), ("Leads orgânicos", "8")],
        total_r="RS Development · 4 meses", total_v="358 → 88.103"),

    "15_checklist_site": lambda: m.cartaz(
        linha1="Seu site está", linha2_em="perdendo", linha3="venda?",
        rodape="Sete perguntas · responda sem defender o site"),

    "17_primeiro_mes": lambda: m.metade(
        foto="tecnologia-simples.jpg", kicker="Sem caixa fechada",
        palavra="O primeiro<br><em>mês</em>.",
        nota="Medir · estancar · construir · entregar",
        botao="Ver as 4 semanas"),

    "19_gmn_hoje": lambda: m.janela(
        foto="ideia-lampada.jpg", palavra="Faça <em>hoje</em>.",
        nota="Google Meu Negócio, numa tarde"),

    "22_o_que_nao_fazemos": lambda: m.ficha(
        numero="Nº 09", titulo="O que a gente<br><em>não</em> faz.",
        campos=[("Prometer prazo fixo", "Recusado"), ("Comprar avaliação", "Recusado"),
                ("Segurar seu acesso", "Recusado"), ("Copiar concorrente", "Recusado")],
        nota="Seis recusas guiam todo contrato — aqui estão quatro."),

    # ── estáticos: substitui o post inteiro ───────────────────────────
    "03_silencio": lambda: m.muro(
        palavra="Orçamento não se perde<br>no preço. Se perde<br>no <em>silêncio</em>.",
        sub="Verdade dura", fundo="tinta"),

    "06_59_por_cento": lambda: m.central(
        numero="59", sufixo="%", fundo="vermelho",
        legenda="atendem pelo WhatsApp antes de qualquer outro canal."),

    "09_mito_ia": lambda: m.selo(
        texto_anel="Mito × Verdade", palavra="Espanta<br><em>bot ruim</em>", fundo="papel"),

    "13_bastidor": lambda: m.medalhao(
        foto="ideia-lampada.jpg", kicker="Bastidor",
        palavra="O que não<br><em>aparece</em><br>no print.",
        nota="Quem decide o que cada página diz"),

    "20_convite_auditoria": lambda: m.hero_foto(
        foto="compras-online.jpg", kicker="Convite",
        palavra="Eu olho<br>o <em>seu</em>.",
        nota="E te digo o que está travando"),
}
