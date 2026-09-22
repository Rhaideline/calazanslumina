# -*- coding: utf-8 -*-
"""
"Se eu fosse você, e estivesse com medo de cobrar" — @rhaicalazans.

Terceiro do mesmo dispositivo, e o que fecha a trilogia:

    05  atenção — as táticas de anúncio usadas em mãe recém-parida
    06  tempo   — o que ela não responderia e em que ordem
    07  dinheiro — o que ela faria antes de baixar o próprio preço

Três carrosséis na mesma gramática e em três assuntos vizinhos leem como
coleção na grade do perfil; três assuntos soltos leem como acaso. Por isso
a placa de baixo da capa passa a carregar o nome da série.

Fio único: preço. Mesma régua — ação concreta, ressalva que prova
pensamento, duas a quatro frases, e uma verdade que ninguém diz.

A verdade dura aqui é o item 8: o silêncio depois do preço. É a única
coisa desta lista que não se resolve com planilha, e é a que custa mais
caro pra aprender.

As cenas são escritas na voz dela, a partir do que ela contou de si — mãe
e dona da própria agência. Quem confirma cada uma é ela.
"""

FOTO = "rhai-bebe2.jpg"

CARROSSEL = {
    "id": "07_medo_de_cobrar",
    "titulo": "Se eu fosse você, e estivesse com medo de cobrar",
    "foto": FOTO,
    "slides": [
        ("capa_texto", dict(frase="Se eu fosse você, e estivesse com medo de cobrar",
                            sub="eu faria todas estas coisas",
                            serie="dinheiro · 3 de 3", n_linhas=4)),

        ("texto", dict(numero=1, corpo=
         "Eu diria o preço na primeira mensagem. Não no áudio de três "
         "minutos, não depois da proposta bonita. Preço que demora a "
         "aparecer ensina a pessoa a esperar desconto.")),

        ("texto", dict(numero=2, corpo=
         "Eu pararia de mandar “a partir de”. Quem lê “a partir de” guarda "
         "só o primeiro número — e depois acha que eu subi o preço no meio "
         "do caminho.")),

        ("texto", dict(numero=3, corpo=
         "Eu não daria desconto pra quem pediu. Daria pra quem paga "
         "adiantado, fecha pacote ou me indica — coisas que me custam "
         "menos. Desconto por insistência só ensina a insistir.")),

        ("texto", dict(numero=4, corpo=
         "Antes de baixar o valor, eu tiraria coisa do escopo. Preço menor "
         "com a mesma entrega não é gentileza. É prejuízo com sorriso.")),

        ("texto", dict(numero=5, corpo=
         "Eu somaria as horas que não dá pra cobrar: a reunião que virou "
         "três, o “só um ajustezinho”, a mensagem de domingo. O meu preço "
         "só faz sentido depois que essas horas entram na conta.")),

        ("texto", dict(numero=6, corpo=
         "Quando alguém dissesse que está caro, eu perguntaria: caro "
         "comparado com o quê? Metade das vezes a resposta é uma coisa que "
         "não é o que eu faço.")),

        ("texto", dict(numero=7, corpo=
         "Eu não competiria por preço com quem cobra a própria hora a "
         "zero. Essa conta não fecha pra mim — e não fecha pra ela "
         "também. Ela só ainda não fez.")),

        ("texto", dict(numero=8, corpo=
         "E eu não pediria desculpa pelo valor. Diria o número, ficaria "
         "quieta e deixaria a outra pessoa falar. O silêncio depois do "
         "preço é meu, não dela.")),

        ("fecho", dict(frase="Depois eu também salvaria este post",
                       n_linhas=3,
                       pedidos=[("i.", "E mandaria pra amiga que ainda cobra por camaradagem."),
                                ("ii.", "E comentaria qual dessas me custou caro pra aprender."),
                                ("iii.", "E leria de novo antes do próximo orçamento.")])),
    ],
    "legenda": """Se eu fosse você, e estivesse com medo de cobrar, eu faria todas estas coisas.

Medo de cobrar quase nunca é sobre o número. É sobre o segundo que vem depois dele.

Eu levei tempo pra entender que o silêncio depois do preço é meu, não do cliente. Dizer o número e continuar falando — explicando, justificando, oferecendo — é a forma mais rápida de derrubar o próprio valor sem ninguém pedir.

Tem três coisas que mudaram a minha conta:

Dizer o preço na primeira mensagem. Preço que demora a aparecer ensina a pessoa a esperar desconto.

Parar de mandar "a partir de". Quem lê isso guarda só o primeiro número, e depois acha que eu subi o preço no meio do caminho.

E somar as horas que não dá pra cobrar — a reunião que virou três, o "só um ajustezinho", a mensagem de domingo. O meu preço só fazia sentido depois que essas horas entraram na conta.

Desconto eu dou. Mas pra quem paga adiantado, fecha pacote ou me indica. Desconto por insistência só ensina a insistir.

━━━

Depois eu também salvaria este post.
E mandaria pra amiga que ainda cobra por camaradagem.
E comentaria qual dessas me custou caro pra aprender — eu começo: a 5.

#mãeempreendedora #precificacao #mulheresempreendedoras #negociosdigitais""",
}
