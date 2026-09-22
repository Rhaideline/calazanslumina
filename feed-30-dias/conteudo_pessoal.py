# -*- coding: utf-8 -*-
"""
Carrossel do perfil pessoal @rhaicalazans.

AVISO QUE PRECISA FICAR AQUI, não só no chat: as cenas concretas dos itens
(os três parágrafos pra recusar, nenhum cliente ter ido embora) são
rascunho escrito na voz dela, não biografia verificada. A pesquisa é clara
que o que conecta é cena específica, não aforismo arrumado — então escrever
genérico "pra não errar" seria escolher o erro pior. Mas quem confirma cada
frase é ela, e trocar é uma linha por item.

Também continua sem gênero e sem idade do bebê, porque isso eu não sei.

Nenhum conselho de sono, saúde ou amamentação: não é a área dela.
"""

FOTO = "rhai-bebe.jpg"

CARROSSEL = {
    "id": "01_melhor_no_trabalho",
    "titulo": "Virar mãe me deixou melhor no meu trabalho",
    "foto": FOTO,

    # gancho: 8 palavras, tese contraintuitiva, legível em menos de 2s
    "chapeu": "ninguém fala disso",
    "hook": "Virar mãe me deixou<br>melhor no meu trabalho.",

    "tensao": {
        "chapeu": "a virada",
        "frase": "A história que contam<br>é a contrária.",
        "apoio": "Que você vai render menos, sumir das reuniões, perder o "
                 "fôlego. Eu ouvi isso antes, ouvi durante e ouvi depois. "
                 "Só que não foi o que aconteceu comigo — e eu demorei pra "
                 "ter coragem de dizer isso em voz alta.",
    },

    "itens": [
        # (dispositivo, frase, apoio)
        ("sobre_foto",
         "Aprendi a dizer não<br>em uma linha.",
         "Antes eu escrevia três parágrafos pra recusar um projeto, com "
         "pedido de desculpa no meio. Hoje é “obrigada, não vou conseguir "
         "pegar”. Ninguém nunca se ofendeu."),

        ("papel",
         "Parei de confundir<br>ocupada com<br>produtiva.",
         "Dia cheio foi meu troféu por muito tempo. Hoje eu sei que dia "
         "cheio é sintoma, não resultado. Ninguém me paga pelas minhas "
         "horas — me paga pelo que sai delas."),

        ("sobre_foto",
         "Parei de esconder<br>que sou mãe.",
         "Eu achava que ia parecer menos profissional. Nenhum cliente foi "
         "embora. E os que sabem o meu horário são exatamente os que "
         "respeitam o meu horário."),

        ("papel",
         "Aprendi a terminar<br>hoje.",
         "Quando o “depois” virou uma coisa que pode simplesmente não "
         "existir, eu parei de deixar tarefa pela metade. É a coisa mais "
         "parecida com superpoder que eu ganhei."),
    ],

    "citacao": "Não foi apesar dela.<br>Foi por causa dela.",
    "citacao_apoio": "e eu levei um tempo pra admitir isso",

    "fecho": "Você não ficou menor.<br>Você ficou mais rápida.",
    "fecho_salvar": "Salva pra reler no dia em que duvidarem de você",
    "fecho_mandar": "Manda pra uma mãe que acha que vai ter que escolher",

    "legenda": """Virar mãe me deixou melhor no meu trabalho. Ninguém fala disso.

A história que contam é a contrária — que você vai render menos, sumir das reuniões, perder o fôlego. Eu ouvi isso antes, durante e depois.

Não foi o que aconteceu comigo.

O que aconteceu foi que o tempo ficou caro. E quando o tempo fica caro, você para de fazer um monte de coisa que nunca fez diferença: escrever três parágrafos pra dizer não, colecionar dia cheio como se fosse resultado, deixar tarefa pela metade porque "depois eu termino".

A que mais mudou a minha rotina foi parar de esconder que sou mãe pra parecer mais profissional. Eu achava que ia perder cliente. Não perdi nenhum. E descobri uma coisa: quem sabe o meu horário é exatamente quem respeita o meu horário.

Não foi apesar dela. Foi por causa dela.

━━━

📌 Salva esse carrossel pra reler no dia em que duvidarem de você.
📩 Manda pra uma mãe que está achando que vai ter que escolher.
💬 E comenta aqui embaixo: o que ficou melhor no seu trabalho depois que você virou mãe?

#maternidadereal #mãeempreendedora #maternidadeecarreira #mulheresempreendedoras""",

    "publicacao": """Como publicar (não é design, é alcance):

1. Coloca MÚSICA no carrossel antes de publicar. Carrossel com áudio vira
   elegível pra aba de Reels, que é onde o Instagram mostra conteúdo pra
   quem não te segue. Reels têm em média 36% mais alcance. É um toque na
   tela e quase todo mundo pula.
2. Publica em 1080x1440 (3:4). É o único formato que preenche o feed e a
   grade do perfil sem cortar.
3. O primeiro comentário pode ser a pergunta da legenda de novo — puxa
   resposta de quem não leu até o fim.""",
}
