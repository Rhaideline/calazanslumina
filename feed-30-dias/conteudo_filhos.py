# -*- coding: utf-8 -*-
"""
"A melhor parte da minha vida tem 20 anos e 5 meses" — @rhaicalazans.

Esta é a reescrita depois de a cliente apontar o erro de fundo: eu estava
escrevendo sobre negócio e chamando de maternidade. Os carrosséis 05
(táticas de anúncio) e 07 (preço) são bons, mas são conteúdo de agência —
o lugar deles é o @calazanslumina, não o perfil pessoal.

O material real, que veio dela:

  - tem uma filha de 20 anos e o Rafael, de 5 meses
  - estabelece horário para ter lazer com ele, de propósito
  - faz questão de viver os momentos sem abrir mão do trabalho
  - entrega o trabalho que promete
  - parou de se preocupar com o que os outros acham por ela ter filho
  - "meus filhos são a melhor parte da minha vida"

O fato mais forte é o intervalo: vinte anos entre os dois. Ninguém no
nicho dela tem esse ponto de vista — ela está fazendo pela segunda vez,
sabendo como a primeira terminou. É daí que sai a capa e o item 4.

O dispositivo condicional ("se eu fosse você") sai. Ele existia porque eu
não tinha material real e precisava de uma hipótese. Com a vida dela na
mão, primeira pessoa direta é mais forte e mais honesta.

REGRA QUE EU QUEBREI E NÃO QUEBRO MAIS: nada aqui afirma um fato que ela
não me contou. Não há nome da filha, não há cena do passado que eu não
saiba, não há fala atribuída a ninguém. O que não é fato dela é opinião
dela — e opinião ela pode confirmar lendo.
"""

FOTO = "rhai-bebe2.jpg"

CARROSSEL = {
    "id": "08_vinte_anos_cinco_meses",
    "titulo": "A melhor parte da minha vida tem 20 anos e 5 meses",
    "foto": FOTO,
    "slides": [
        ("capa_texto", dict(frase="A melhor parte da minha vida tem 20 anos e 5 meses",
                            sub="o que eu aprendi tendo os dois",
                            serie="maternidade", n_linhas=4)),

        ("texto", dict(numero=1, corpo=
         "Eu tenho hora marcada pra estar com o Rafael. Não é a hora que "
         "sobra depois do trabalho — é a hora que o trabalho contorna. A "
         "diferença entre as duas é o dia inteiro.")),

        ("texto", dict(numero=2, corpo=
         "Eu não parei de trabalhar pra ser mãe, e não paro de ser mãe pra "
         "trabalhar. Entrego o que prometi, no prazo que eu mesma dei. Só "
         "não entrego na hora que é dele.")),

        ("texto", dict(numero=3, corpo=
         "Eu já tenho uma filha de vinte anos. Então eu sei, com uma "
         "precisão que dói, o tamanho exato de cinco meses. Não é tempo. "
         "É um piscar.")),

        ("texto", dict(numero=4, corpo=
         "Quando eu estou com ele, eu estou com ele. Celular longe. Não é "
         "disciplina — é que eu já sei como essa parte acaba, e acaba mais "
         "rápido do que qualquer um avisa.")),

        ("texto", dict(numero=5, corpo=
         "Eu parei de me preocupar com o que fulano acha por eu ter filho. "
         "Levei tempo demais nisso. E nenhuma das pessoas que me julgaram "
         "por isso pagou uma conta minha.")),

        ("texto", dict(numero=6, corpo=
         "Eu não me sinto culpada por gostar do meu trabalho. Minha filha "
         "de vinte anos cresceu me vendo trabalhar, e eu não trocaria esse "
         "exemplo por culpa nenhuma.")),

        ("texto", dict(numero=7, corpo=
         "Nenhum cliente meu vai lembrar do dia em que eu respondi mais "
         "rápido. Os meus filhos vão lembrar de quem estava ali. Foi só "
         "isso que eu precisei entender pra organizar o resto.")),

        ("fecho", dict(frase="A gente não volta pra buscar o dia que passou",
                       n_linhas=4,
                       pedidos=[("i.", "Salva pra ler no dia em que te fizerem sentir culpa."),
                                ("ii.", "Manda pra uma mãe que acha que vai ter que escolher."),
                                ("iii.", "Comenta a idade dos seus — eu começo: 20 anos e 5 meses.")])),
    ],
    "legenda": """A melhor parte da minha vida tem 20 anos e 5 meses.

Uma filha de vinte. E o Rafael, de cinco meses.

Ter os dois com essa distância me deu uma coisa que eu não tinha da primeira vez: eu sei exatamente o tamanho de cinco meses. Não é tempo. É um piscar. Alguém me disse isso quando a minha filha era bebê e eu não entendi. Agora eu entendo, e é diferente entender vendo.

Foi isso que organizou o resto.

Eu tenho hora marcada pra estar com ele. Não é a hora que sobra depois do trabalho — é a hora que o trabalho contorna. Parece um detalhe e é o dia inteiro.

E eu não parei de trabalhar pra ser mãe, nem paro de ser mãe pra trabalhar. Entrego o que prometi, no prazo que eu mesma dei. Só não entrego na hora que é dele.

A parte que levou mais tempo foi outra: parar de me preocupar com o que os outros acham por eu ter filho. Levei tempo demais nisso. E nenhuma das pessoas que me julgaram pagou uma conta minha.

Nenhum cliente vai lembrar do dia em que eu respondi mais rápido. Os meus filhos vão lembrar de quem estava ali.

━━━

📌 Salva pra ler no dia em que te fizerem sentir culpa.
📩 Manda pra uma mãe que acha que vai ter que escolher.
💬 Comenta a idade dos seus. Eu começo: 20 anos e 5 meses. 🤍

#maternidadereal #mãeempreendedora #maternidadeecarreira #maedemenino #maternidade""",
}
