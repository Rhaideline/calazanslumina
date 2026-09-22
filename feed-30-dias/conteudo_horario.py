# -*- coding: utf-8 -*-
"""
"Se eu fosse você, e estivesse respondendo todo mundo" — @rhaicalazans.

Segundo carrossel no mesmo dispositivo do primeiro: futuro do pretérito
sustentado do primeiro ao último slide, pedido final incluído.

Fio único: **horário**. O que ela não responderia, em que ordem responderia
o resto, e o que faz esse limite se sustentar. Não entrou no carrossel dos
anúncios de propósito — misturar os dois é o erro que fez a primeira
versão daquele puxar para três assuntos ao mesmo tempo.

A régua de escrita é a mesma:
  - ação concreta em vez de slogan ("te retorno amanhã às 9", não "ter
    limites");
  - uma ressalva que prova pensamento em quase todo item;
  - duas a quatro frases;
  - uma verdade que ninguém diz em voz alta — aqui é o item 3, o custo do
    precedente, que não aparece no primeiro mês e sim no sexto.

O item 4 é o único que ela mesma admite não cumprir sempre, e é isso que
o pedido de comentário usa: quem lê responde mais fácil depois que o autor
já se expôs primeiro.

As cenas são escritas na voz dela, a partir do que ela contou de si — mãe
e dona da própria agência. Quem confirma cada uma é ela.
"""

FOTO = "rhai-bebe2.jpg"

CARROSSEL = {
    "id": "06_respondendo_todo_mundo",
    "titulo": "Se eu fosse você, e estivesse respondendo todo mundo",
    "foto": FOTO,
    "slides": [
        ("capa_texto", dict(frase="Se eu fosse você, e estivesse respondendo todo mundo",
                            sub="eu faria todas estas coisas", n_linhas=4)),

        ("texto", dict(numero=1, corpo=
         "Eu escolheria uma faixa de horas em que ninguém me encontra e "
         "contaria pra todo mundo qual é. O que protege não é o silêncio. "
         "É o aviso — silêncio sem aviso vira “ela sumiu”.")),

        ("texto", dict(numero=2, corpo=
         "Eu responderia “te retorno amanhã às 9” no lugar de “desculpa a "
         "demora”. Uma das duas frases dá uma data. A outra só devolve a "
         "culpa pra mim.")),

        ("texto", dict(numero=3, corpo=
         "Eu não responderia orçamento depois das sete. Quem for atendido "
         "às onze da noite uma vez vai esperar onze da noite sempre — e a "
         "conta desse precedente não chega no primeiro mês, chega no "
         "sexto.")),

        ("texto", dict(numero=4, corpo=
         "Antes de abrir o WhatsApp de manhã, eu escreveria as três coisas "
         "que precisam sair do dia. Abrir o celular primeiro é deixar a "
         "minha lista ser escrita por quem acordou mais cedo que eu.")),

        ("texto", dict(numero=5, corpo=
         "Eu separaria “urgente pra ele” de “urgente pra mim”. Quase tudo "
         "que chega marcado como urgente é o atraso de outra pessoa "
         "chegando na minha mesa com nome novo.")),

        ("texto", dict(numero=6, corpo=
         "Eu deixaria uma resposta automática honesta no lugar do vácuo. "
         "Não é frieza. É a diferença entre “ela não respondeu” e “ela "
         "respondeu que responde amanhã”.")),

        ("texto", dict(numero=7, corpo=
         "Eu não viraria a madrugada pra compensar o dia. Isso não repõe o "
         "dia, antecipa o de amanhã. E de madrugada eu decido pior — "
         "inclusive sobre preço.")),

        ("texto", dict(numero=8, corpo=
         "E eu não pediria desculpa por nada disso. Quem respeita horário "
         "continua. Quem não respeita ia embora de qualquer jeito — só que "
         "mais tarde, e mais caro.")),

        ("fecho", dict(frase="Depois eu também salvaria este post",
                       n_linhas=3,
                       pedidos=[("i.", "E mandaria pra quem me manda mensagem às onze da noite."),
                                ("ii.", "E comentaria qual dessas eu ainda não consigo fazer."),
                                ("iii.", "E voltaria aqui na próxima vez que o dia não coubesse.")])),
    ],
    "legenda": """Se eu fosse você, e estivesse respondendo todo mundo, eu faria todas estas coisas.

Por muito tempo eu achei que responder na hora era ser boa profissional. Não é. É ensinar a todo mundo que eu estou sempre disponível — e depois reclamar que estou.

A frase que mais mudou a minha rotina não foi um "não". Foi um "te retorno amanhã às 9". Uma dá uma data. A outra — "desculpa a demora" — só devolve a culpa pra mim.

E tem uma conta que ninguém faz: quem for atendido às onze da noite uma vez vai esperar onze da noite sempre. O preço desse precedente não aparece no primeiro mês. Aparece no sexto, quando você já não sabe mais por que o dia não cabe.

Nada aqui é sobre trabalhar menos. É sobre parar de deixar a minha lista do dia ser escrita por quem acordou mais cedo que eu.

E eu não peço mais desculpa por isso. Quem respeita horário continua. Quem não respeita ia embora de qualquer jeito — só que mais tarde, e mais caro.

━━━

Depois eu também salvaria este post.
E mandaria pra quem me manda mensagem às onze da noite. 🙂
E comentaria qual dessas eu ainda não consigo fazer — eu começo: a 4.

#mãeempreendedora #rotina #produtividade #maternidadeecarreira""",
}
