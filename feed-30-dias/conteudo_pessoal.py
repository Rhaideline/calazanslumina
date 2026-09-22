# -*- coding: utf-8 -*-
"""
Conteúdo do perfil pessoal @rhaicalazans — maternidade.

A foto é dela com o bebê, e isso muda a voz: saiu o condicional que a
versão anterior usava ("se eu fosse você, e tivesse um bebê") e entrou
primeira pessoa de verdade. Ela é mãe — a foto confirma —, então o post
não precisa fingir que é conselho de terceiro.

Duas coisas ficaram deliberadamente sem gênero e sem data: eu não sei o
nome nem o sexo do bebê, então em lugar nenhum está escrito "ele" ou
"ela", e em lugar nenhum tem idade. Trocar isso pelo real deixa o texto
mais forte e é edição de uma palavra por linha.

Nenhum conselho de saúde, sono ou amamentação. Não é a área dela e não
seria honesto — o que é dela é organização de rotina e de negócio, e é
só disso que os oito itens falam.
"""

FOTO = "rhai-bebe.jpg"

CARROSSEL = {
    "id": "01_parei_de_fazer",
    "titulo": "Coisas que eu parei de fazer depois que virei mãe",
    "foto": FOTO,
    # cinco linhas subiam o título até o rosto do bebê; virou chapéu + três
    "capa_chapeu": "depois que virei mãe",
    "capa": ["Coisas que", "eu parei", "de fazer"],

    "itens": [
        ("Parei de responder<br>trabalho com<br>ele no colo.",
         "Ou estou ali, ou estou trabalhando. As duas ao mesmo tempo viram meia coisa nas duas."),

        ("Parei de pedir<br>desculpa por<br>ter horário.",
         "“Te respondo amanhã às 9” não é grosseria. É a única frase que protege os dois lados."),

        ("Parei de achar<br>que dar conta<br>sozinha era mérito.",
         "Ajuda pedida cedo é barata. Pedida no limite sai cara — porque no limite a gente escolhe errado."),

        ("Parei de procurar<br>resposta rolando<br>o feed de madrugada.",
         "Duas pessoas de confiança resolvem mais que quinhentos perfis. Informação demais não organiza: paralisa."),

        ("Parei de chamar<br>de preguiça o<br>que era cansaço.",
         "Dia que não rende não é falta de caráter. É corpo avisando que a conta não fecha."),

        ("Parei de guardar<br>o “depois eu<br>organizo”.",
         "Cinco minutos hoje valem mais que a tarde inteira que nunca chega."),

        ("Parei de esconder<br>que sou mãe pra<br>parecer profissional.",
         "Ninguém nunca me contratou por eu fingir que tenho o dia todo livre. Contrataram porque eu entrego."),

        ("Parei de medir<br>o dia pelo que<br>não deu tempo.",
         "Passei a medir pelo que deu. Muda o dia inteiro — e não custa nada."),
    ],

    "fecho": "Nenhuma dessas eu<br>aprendi de primeira.",
    "fecho_pedido": "salva pra ler num dia difícil ↓",

    "legenda": """Coisas que eu parei de fazer depois que virei mãe.

Nenhuma delas eu aprendi de primeira. Todas custaram um dia ruim antes.

A que mais mudou minha rotina foi a segunda: parar de pedir desculpa por ter horário. Eu achava que responder na hora era ser boa profissional. Não é. É só ensinar a todo mundo que eu estou sempre disponível — e depois reclamar que estou.

“Te respondo amanhã às 9” não fecha porta nenhuma. Quem respeita horário continua. Quem não respeita ia embora de qualquer jeito.

E a oitava é a que eu preciso relembrar toda semana: parar de medir o dia pelo que não deu tempo. A lista do que não deu é infinita por construção. A do que deu cabe num post.

Salva pra ler num dia difícil. E me conta aqui embaixo: o que você parou de fazer? 🤍""",
}


# ── as outras três capas, pra ela escolher a linguagem das próximas ──────
ALTERNATIVAS = [
    ("capa_mista", dict(
        foto=FOTO, serif="Ocupada", sans="não é presente",
        sob="maternidade e trabalho", cta="leia a legenda")),

    ("capa_pergunta", dict(
        foto=FOTO, chamada="Me conta,",
        manuscrito="o que você parou de<br>fazer depois que<br>virou mãe?")),

    ("capa_diario", dict(
        foto=FOTO, manuscrito="meu dia<br>em um post",
        episodio="ep 1:<br>a manhã<br>que deu certo")),
]
