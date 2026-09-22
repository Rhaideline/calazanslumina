# -*- coding: utf-8 -*-
"""
"Se eu fosse você, e tivesse acabado de virar mãe" — perfil @rhaicalazans.

Segunda escrita. O que estava errado na primeira, item por item:

  4 e 5   eram conteúdo da referência, não só forma dela. "Seguiria duas
          pessoas, não vinte" e "escolheria uma hora e sempre a mesma" são
          quase as frases da Dra. Dunnia. Copiar o dispositivo é aprender;
          copiar a ideia é outra coisa. Os dois saíram.
  fio     os oito itens puxavam para três assuntos diferentes — manipulação
          de anúncio, rotina de trabalho e sentimento. Carrossel bom tem um
          fio só.
  8       "nenhuma das duas resolve o dia difícil" era bonito e vago, do
          tipo que soa bem e não deixa nada com quem lê.

O fio agora é um só, e é o único que ela pode puxar sem concorrência:
**ela escreve anúncio pra viver e virou alvo dos próprios truques.** Cada
item nomeia uma tática real usada em mãe recém-parida e entrega um teste
que dá pra fazer amanhã — abrir o anúncio três dias depois, procurar o
nome do pediatra, ler o valor total antes do "12x". Nomear o mecanismo é o
que a referência faz de melhor ("cutucando a minha dor"); dar o teste é o
que sobra pra quem lê.

O item 4 assume o custo da honestidade — "inclusive por mim". Sem essa
linha, o carrossel é uma pessoa acusando o mercado. Com ela, é alguém
contando como o próprio trabalho funciona, que é o que dá autoridade.

Continua sem conselho de sono, saúde ou amamentação — não é a área dela.
Aqui é dinheiro, atenção e persuasão, que é.
"""

FOTO = "rhai-bebe2.jpg"

CARROSSEL = {
    "id": "05_se_eu_fosse_voce",
    "titulo": "Se eu fosse você, e tivesse acabado de virar mãe",
    "foto": FOTO,
    "slides": [
        ("capa_texto", dict(frase="Se eu fosse você, e tivesse acabado de virar mãe",
                            sub="eu faria todas estas coisas", n_linhas=4)),

        ("texto", dict(numero=1, corpo=
         "Eu desconfiaria de todo anúncio que me chamasse de “mãe que não "
         "abre mão”. Eu escrevo esses anúncios. O elogio da primeira linha "
         "é o que abre a carteira na última.")),

        ("texto", dict(numero=2, corpo=
         "Eu abriria o mesmo anúncio três dias depois. Se o contador de "
         "“últimas unidades” tivesse reiniciado, eu já saberia o que fazer "
         "com aquela pressa.")),

        ("texto", dict(numero=3, corpo=
         "Eu procuraria o nome do pediatra em “aprovado por pediatras”. "
         "Quando não tem nome, não tem pediatra — tem uma frase que "
         "ninguém precisa provar.")),

        ("texto", dict(numero=4, corpo=
         "Eu lembraria que ninguém filma a noite em que não funcionou. "
         "Todo depoimento é o melhor resultado de alguém, escolhido a dedo "
         "por quem está vendendo. Inclusive por mim.")),

        ("texto", dict(numero=5, corpo=
         "Quando um anúncio começasse com “não cometa esse erro”, eu "
         "perguntaria o que vem logo depois do medo. Se a resposta for um "
         "botão, o medo era o produto.")),

        ("texto", dict(numero=6, corpo=
         "Quando alguém dissesse que eu estou “perdendo o melhor da vida "
         "dele”, eu não responderia. Culpa é o gatilho mais barato que "
         "existe, e quem usa sabe disso.")),

        ("texto", dict(numero=7, corpo=
         "Eu leria o valor total antes do “12x de”. O parcelamento não foi "
         "inventado pra caber no seu mês. Foi inventado pra fazer o número "
         "parecer menor do que ele é.")),

        ("texto", dict(numero=8, corpo=
         "E eu não chamaria nada disso de desconfiança. Chamaria de parar "
         "de gastar, às duas da manhã, a única energia que me sobra "
         "decidindo uma coisa que alguém já decidiu por mim.")),

        ("fecho", dict(frase="Depois eu também salvaria este post",
                       n_linhas=3,
                       pedidos=[("i.", "E mandaria pra uma amiga que está com o carrinho cheio às duas da manhã."),
                                ("ii.", "E comentaria qual dessas eu já tinha caído."),
                                ("iii.", "E voltaria aqui antes da próxima compra.")])),
    ],
    "legenda": """Se eu fosse você, e tivesse acabado de virar mãe, eu faria todas estas coisas.

Eu escrevo anúncio pra viver. É o meu trabalho saber qual palavra faz alguém tirar o cartão do bolso.

Depois que eu virei mãe, esses mesmos truques passaram a ser usados em mim — e de madrugada, que é quando funcionam melhor.

Então isso aqui não é conselho de maternidade. Não é a minha área e eu não daria. É o que eu faria sabendo o que eu sei do outro lado do anúncio.

O elogio da primeira linha ("mãe que não abre mão") é o que abre a carteira na última. O contador de "últimas unidades" reinicia sozinho — abre o mesmo anúncio três dias depois e você vê. "Aprovado por pediatras" sem nome de pediatra é uma frase que ninguém precisa provar. E o "12x de" existe pra fazer o número parecer menor do que ele é.

O mais pesado de todos é a culpa. "Você está perdendo o melhor da vida dele" é o gatilho mais barato que existe, e quem usa sabe disso.

Nada disso é sobre ser desconfiada. É sobre parar de gastar, às duas da manhã, a única energia que sobra decidindo uma coisa que alguém já decidiu por você.

━━━

Depois eu também salvaria este post.
E mandaria pra uma amiga que está com o carrinho cheio agora.
E comentaria qual dessas eu já tinha caído — eu começo: a 7.

#maternidadereal #mãeempreendedora #maternidadeeconsumo #publicidade""",
}
