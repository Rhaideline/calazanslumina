# -*- coding: utf-8 -*-
"""
"Se eu fosse você, e tivesse acabado de virar mãe" — perfil @rhaicalazans.

O TEXTO É O PONTO DESTE ARQUIVO. A cliente mandou o carrossel da
@dradunniabaldissera como referência e eu tinha copiado só o desenho. Ao
ler os textos dela de perto, o que sustenta aquele carrossel são cinco
coisas, e o meu não tinha nenhuma:

1. UM MODO VERBAL SUSTENTADO. Dez slides inteiros no futuro do pretérito:
   "eu faria", "eu estabeleceria", "não seguiria", "não confiaria". Não é
   estilo, é dispositivo — segura o carrossel como uma peça só. Até o
   pedido final dela obedece: "depois eu também curtiria este post".

2. AÇÃO CONCRETA, NÃO SLOGAN. "Estabeleceria uma hora para iniciar o nosso
   dia. Sempre a mesma." É coisa que se faz amanhã. Eu vinha escrevendo
   "ter um horário e defender ele", que é frase de crachá.

3. UMA RESSALVA QUE PROVA PENSAMENTO. "Eu até pesquisaria na IA, mas não o
   faria sem o apoio de alguém para confirmar." O "até... mas" é o que faz
   soar gente pesando, e não copy.

4. COMPRIMENTO. Duas a quatro frases por slide. Eu tinha cortado tanto que
   não sobrou nada pra ler.

5. UMA VERDADE QUE NINGUÉM DIZ EM VOZ ALTA. O item mais forte dela é o que
   nomeia o mecanismo: "não confiaria em ninguém que me induzisse a comprar
   algo para o meu filho cutucando a minha dor".

O ângulo desta versão sai daí. A Rhaideline é mãe E escreve anúncio pra
viver. Então ela é a pessoa que consegue mostrar, de dentro, como uma mãe
recém-parida é alvo de marketing — e isso ninguém no nicho dela pode
dizer com a mesma autoridade. É o item 5 da lista acima, aplicado ao que
ela sabe de verdade.

Nenhum conselho de sono, saúde ou amamentação: continua não sendo a área
dela. Tudo aqui é sobre dinheiro, atenção e rotina, que é.
"""

FOTO = "rhai-bebe2.jpg"

CARROSSEL = {
    "id": "05_se_eu_fosse_voce",
    "titulo": "Se eu fosse você, e tivesse acabado de virar mãe",
    "foto": FOTO,
    "slides": [
        # capa_texto, não capa: a pilha gigante cobre os dois rostos com
        # uma frase de nove palavras, e o rosto é metade do motivo do post
        ("capa_texto", dict(frase="Se eu fosse você, e tivesse acabado de virar mãe",
                            sub="eu faria todas estas coisas", n_linhas=4)),

        ("texto", dict(numero=1, corpo=
         "Eu desconfiaria de todo anúncio que me chamasse de “mãe que não "
         "abre mão”. Eu escrevo esses anúncios. O elogio da primeira linha "
         "é o que abre a carteira na última.")),

        ("texto", dict(numero=2, corpo=
         "Antes de comprar qualquer coisa, eu esperaria vinte e quatro "
         "horas. Não por disciplina. Porque quase toda pressa que eu sinto "
         "foi colocada ali por alguém — e ela não sobrevive a um dia.")),

        ("texto", dict(numero=3, corpo=
         "Eu não confiaria em nenhum vídeo que começasse com “ninguém te "
         "conta isso”. Sempre contam. Essa frase não existe para te "
         "informar, existe para te segurar mais trinta segundos.")),

        ("texto", dict(numero=4, corpo=
         "Eu seguiria duas pessoas, não vinte. E escolheria pelo que elas "
         "dizem quando não estão vendendo nada. Informação demais não "
         "organiza ninguém.")),

        ("texto", dict(numero=5, corpo=
         "Eu escolheria uma hora do dia que fosse só nossa e não entregaria "
         "ela pra ninguém. Nem pro trabalho, nem pro celular. Sempre a "
         "mesma hora.")),

        ("texto", dict(numero=6, corpo=
         "Quando alguém dissesse que eu estou “perdendo o melhor da vida "
         "dele”, eu não responderia. Culpa é o gatilho mais barato que "
         "existe, e quem usa sabe disso.")),

        ("texto", dict(numero=7, corpo=
         "Eu contaria pros meus clientes que tenho um bebê em casa. Não "
         "como desculpa — como horário. E descobriria, como descobri, que "
         "ninguém foi embora por causa disso.")),

        ("texto", dict(numero=8, corpo=
         "Eu compraria menos coisa e tiraria mais foto. Nenhuma das duas "
         "resolve o dia difícil. Mas só uma delas continua valendo alguma "
         "coisa em dez anos.")),

        ("fecho", dict(frase="Depois eu também salvaria este post",
                       n_linhas=3,
                       pedidos=[("i.", "E mandaria para uma mãe que anda comprando demais de madrugada."),
                                ("ii.", "E comentaria qual delas eu já tinha deixado de fazer."),
                                ("iii.", "E voltaria aqui no primeiro dia difícil.")])),
    ],
    "legenda": """Se eu fosse você, e tivesse acabado de virar mãe, eu faria todas estas coisas.

Eu escrevo anúncio pra viver. É o meu trabalho saber qual palavra faz alguém tirar o cartão do bolso — e depois que eu virei mãe, eu passei a ver esses mesmos truques virados contra mim.

Então essa lista não é conselho de maternidade. Não é a minha área e eu não daria. É o que eu faria sabendo o que eu sei do outro lado.

O elogio na primeira linha do anúncio é o que abre a carteira na última. "Mãe que não abre mão" não é um carinho, é um gancho. A pressa que você sente às duas da manhã foi colocada ali por alguém, e ela quase nunca sobrevive a vinte e quatro horas.

E a culpa — "você está perdendo o melhor da vida dele" — é o gatilho mais barato que existe. Quem usa sabe disso.

A parte boa: nada aqui exige disciplina. Exige só saber o nome do que está acontecendo.

━━━

Depois eu também salvaria este post.
E mandaria para uma mãe que anda comprando demais de madrugada.

#maternidadereal #mãeempreendedora #publicidade #maternidadeeconsumo""",
}
