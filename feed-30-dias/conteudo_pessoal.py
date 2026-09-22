# -*- coding: utf-8 -*-
"""
Carrossel do perfil pessoal @rhaicalazans.

Sobre o texto: as cenas concretas são escritas na voz dela, a partir do que
ela contou sobre si — mãe e dona da própria agência. O que a pesquisa diz é
que o que conecta é cena específica, não aforismo arrumado, então escrever
genérico "pra não errar" seria escolher o erro pior. Ainda assim, quem
confirma cada frase é ela, e trocar é uma linha por item.

Continua sem gênero e sem idade do bebê, porque isso eu não sei.

Nenhum conselho de sono, saúde ou amamentação: não é a área dela, e o que é
dela — organização, atendimento, leitura de cliente — dá material de sobra.
"""

FOTO = "rhai-bebe.jpg"

CARROSSEL = {
    "id": "01_melhor_no_trabalho",
    "titulo": "Virar mãe me deixou melhor no meu trabalho",
    "foto": FOTO,

    "rotulo": "ninguém diz isso em voz alta",
    "hook": "Virar mãe me deixou<br>melhor no meu trabalho.",

    "tensao": {
        "rotulo": "o aviso",
        "frase": "Me avisaram que eu<br>ia render menos.",
        "apoio": "Antes, durante e depois. Sempre em voz baixa, como quem "
                 "dá um recado difícil. E nenhuma dessas pessoas estava me "
                 "desejando mal — elas só estavam repetindo a única versão "
                 "que conhecem.",
        "plano": "alto",
    },

    # (numero, frase, apoio, plano, dispositivo)
    # dispositivo: sangria (foto cheia) | placa (chapa emoldurada) | mono
    "itens": [
        (1, "O meu sim<br>ficou caro.",
         "Quando o tempo passa a ter dono, você para de dizer sim por "
         "educação. Hoje eu recuso em uma linha — sem os três parágrafos de "
         "desculpa que eu escrevia antes. Ninguém nunca se ofendeu.",
         "aberto", "sangria"),

        (2, "Dia cheio deixou<br>de ser troféu.",
         "Eu colecionava agenda lotada como prova de que ia bem. Dia cheio é "
         "sintoma, não resultado. Ninguém me paga pelas minhas horas — me "
         "paga pelo que sai delas.",
         "baixo", "placa"),

        (3, "Aprendi a<br>terminar hoje.",
         "Quando “depois” virou uma coisa que pode simplesmente não existir, "
         "tarefa pela metade deixou de ser opção. É a coisa mais parecida "
         "com superpoder que eu ganhei sem ter pedido.",
         "leve", "mono"),

        (4, "Parei de esconder<br>que sou mãe.",
         "Achei que ia parecer menos profissional. Não perdi um cliente. E "
         "entendi uma coisa que vale pro resto da vida: quem sabe o meu "
         "horário é exatamente quem respeita o meu horário.",
         "alto", "placa"),

        (5, "Passei a ouvir<br>o que não foi dito.",
         "Um bebê não explica o que está sentindo e mesmo assim você aprende "
         "a entender. Cliente também não explica. Ele diz “quero mais "
         "movimento no Instagram” quando quer dizer “estou com medo de "
         "fechar as portas”.",
         "aberto", "sangria"),
    ],

    "citacao": "Não foi apesar dela.<br>Foi por causa dela.",
    "citacao_arremate": "e eu levei um tempo pra admitir",

    "fecho": "Você não ficou menor.<br>Você ficou mais exata.",
    "fecho_salvar": "Salva pra reler no dia em que duvidarem de você.",
    "fecho_mandar": "Manda pra uma mãe que acha que vai ter que escolher.",

    "legenda": """Virar mãe me deixou melhor no meu trabalho. Ninguém diz isso em voz alta.

Me avisaram do contrário. Antes, durante e depois — sempre naquele tom baixo de quem está dando um recado difícil. E olha, nenhuma dessas pessoas estava me desejando mal. Elas só estavam repetindo a única versão que conhecem.

Não foi o que aconteceu comigo.

O que aconteceu foi que o meu tempo passou a ter dono. E quando o tempo tem dono, você para de fazer um monte de coisa que nunca fez diferença: escrever três parágrafos pra dizer não, colecionar agenda lotada como se fosse resultado, deixar tarefa pela metade porque "depois eu termino".

Mas a que mais mexeu comigo não foi nenhuma dessas.

Foi descobrir que eu passei a ouvir o que não foi dito. Um bebê não explica o que está sentindo e mesmo assim você aprende a entender. Cliente também não explica. Ele diz "quero mais movimento no Instagram" quando quer dizer "estou com medo de fechar as portas". Eu não sabia escutar isso antes.

Não foi apesar dela. Foi por causa dela.

━━━

𝐢. Salva pra reler no dia em que duvidarem de você.
𝐢𝐢. Manda pra uma mãe que está achando que vai ter que escolher.
𝐢𝐢𝐢. E me conta aqui embaixo: o que ficou melhor no seu trabalho depois que você virou mãe?

#maternidadereal #mãeempreendedora #maternidadeecarreira #mulheresempreendedoras #maternidadeenegocios""",

    "publicacao": """Como publicar (não é design, é alcance):

1. Coloca MÚSICA no carrossel antes de publicar. Carrossel com áudio vira
   elegível pra aba de Reels, que é onde o Instagram mostra conteúdo pra
   quem não te segue. Reels têm em média 36% mais alcance. É um toque na
   tela e quase todo mundo pula.
2. Publica em 1080x1440 (3:4) — o único formato que preenche o feed e a
   grade do perfil sem cortar.
3. O primeiro comentário pode repetir a pergunta da legenda: puxa resposta
   de quem não leu até o fim.""",
}
