# -*- coding: utf-8 -*-
"""
"Coisas que eu acho chique numa mãe que trabalha" — no modelo CHIQUE.

As frases são escritas inteiras, sem <br>: quem decide a quebra é o
`_quebrar()` do modelo, por largura de glifo. Foi assim que a referência
foi feita, ainda que o designer tenha feito no olho.

As cenas são escritas na voz dela, a partir do que ela contou de si — mãe
e dona da própria agência. Quem confirma cada uma é ela.
"""

FOTO = "rhai-bebe2.jpg"

CARROSSEL = {
    "id": "05_acho_chique",
    "titulo": "Coisas que eu acho chique numa mãe que trabalha",
    "foto": FOTO,
    "slides": [
        ("capa", dict(frase="Coisas que eu acho chique",
                      sub="numa mãe que trabalha", n_linhas=4)),

        ("retrato", dict(numero=1, frase="Dizer que não pode sem inventar motivo",
                         n_linhas=3,
                         apoio="“Nesse horário eu não consigo” é uma frase completa.")),

        ("janela", dict(numero=2, frase="Ter um horário e defender ele",
                        n_linhas=2,
                        apoio="Não é rigidez. É como a outra pessoa sabe quando pode contar com você de verdade.")),

        ("retrato", dict(numero=3, frase="Falar do filho numa reunião sem baixar a voz",
                         n_linhas=3,
                         apoio="A voz baixa é o que ensina todo mundo que aquilo é um problema.")),

        ("janela", dict(numero=4, frase="Cobrar o preço certo na primeira mensagem",
                        n_linhas=2,
                        apoio="Desconto dado com medo vira ressentimento em trinta dias.")),

        ("citacao", dict(frase="Chique é não pedir licença pra ocupar o próprio lugar",
                         n_linhas=3)),

        ("fecho", dict(frase="Qual dessas você ainda treina", n_linhas=2,
                       pedidos=[("i.", "Salva pra lembrar na próxima reunião."),
                                ("ii.", "Manda pra quem precisa se ouvir dizendo isso."),
                                ("iii.", "Comenta o número que mais pegou em você.")])),
    ],
    "legenda": """Coisas que eu acho chique numa mãe que trabalha. E não tem nada a ver com roupa.

01. Dizer que não pode sem inventar motivo. "Nesse horário eu não consigo" é uma frase completa. A desculpa elaborada é que soa frágil.

02. Ter um horário e defender ele. Não é rigidez — é como a outra pessoa sabe quando pode contar com você de verdade.

03. Falar do filho numa reunião sem baixar a voz. A voz baixa é o que ensina todo mundo que aquilo é um problema. Falar no tom normal ensina o contrário. Nunca me cobraram por isso.

04. Cobrar o preço certo na primeira mensagem. Desconto dado com medo vira ressentimento em trinta dias.

Chique é não pedir licença pra ocupar o próprio lugar.

━━━

i. Salva pra lembrar na próxima reunião.
ii. Manda pra quem precisa se ouvir dizendo isso.
iii. Comenta o número que mais pegou em você.

#maternidadereal #mãeempreendedora #mulheresempreendedoras #maternidadeecarreira""",
}
