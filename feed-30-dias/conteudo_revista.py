# -*- coding: utf-8 -*-
"""
"Coisas que eu acho chique numa mãe que trabalha" — no modelo REVISTA.

O texto encurtou muito em relação à versão anterior, e isso é parte da
correção. Parágrafo de apoio em toda peça é uma das três marcas que faziam
o carrossel parecer gerado; a referência dela tem sete palavras na peça
inteira. Aqui cada item tem uma frase e no máximo uma linha de apoio.

As cenas são escritas na voz dela, a partir do que ela contou de si — mãe
e dona da própria agência. Quem confirma cada uma é ela.
"""

FOTO = "rhai-bebe2.jpg"
CATEGORIA = "maternidade"

CARROSSEL = {
    "id": "04_acho_chique_revista",
    "titulo": "Coisas que eu acho chique numa mãe que trabalha",
    "foto": FOTO,
    "slides": [
        ("capa", dict(acima="Coisas que eu acho", palavra="chique",
                      abaixo="numa mãe que trabalha",
                      pilula=("confira na", "legenda"))),

        ("item", dict(numero=1, frase="Dizer que não pode<br>sem inventar motivo.",
                      apoio="“Nesse horário eu não consigo” é uma frase completa.")),

        ("item", dict(numero=2, frase="Ter um horário<br>e defender ele.",
                      apoio="É como a outra pessoa sabe quando contar com você.")),

        ("destaque", dict(acima="não é rigidez,", palavra="é clareza",
                          abaixo="e todo mundo agradece")),

        ("item", dict(numero=3, frase="Falar do filho numa<br>reunião sem baixar a voz.",
                      apoio="A voz baixa é o que ensina todo mundo que aquilo é um problema.")),

        ("item", dict(numero=4, frase="Cobrar o preço certo<br>na primeira mensagem.",
                      apoio="Desconto dado com medo vira ressentimento em trinta dias.")),

        ("frase", dict(texto="Chique é não pedir licença<br>pra ocupar o próprio lugar.",
                       credito="rhaideline calazans")),

        ("fecho", dict(acima="qual dessas você", palavra="ainda treina",
                       abaixo="me conta aqui embaixo",
                       pedidos=[("↓", "Salva pra lembrar na próxima reunião."),
                                ("→", "Manda pra quem precisa se ouvir dizendo isso."),
                                ("♥", "Comenta o número que mais pegou em você.")])),
    ],
    "legenda": """Coisas que eu acho chique numa mãe que trabalha. E não tem nada a ver com roupa.

01. Dizer que não pode sem inventar motivo. "Nesse horário eu não consigo" é uma frase completa. A desculpa elaborada é que soa frágil.

02. Ter um horário e defender ele. Não é rigidez — é clareza. É como a outra pessoa sabe quando pode contar com você de verdade.

03. Falar do filho numa reunião sem baixar a voz. A voz baixa é o que ensina todo mundo que aquilo é um problema. Falar no tom normal ensina o contrário. Nunca me cobraram por isso.

04. Cobrar o preço certo na primeira mensagem. Desconto dado com medo vira ressentimento em trinta dias.

Chique é não pedir licença pra ocupar o próprio lugar.

━━━

↓ Salva pra lembrar na próxima reunião.
→ Manda pra quem precisa se ouvir dizendo isso.
♥ Comenta o número que mais pegou em você.

#maternidadereal #mãeempreendedora #mulheresempreendedoras #maternidadeecarreira""",
}
