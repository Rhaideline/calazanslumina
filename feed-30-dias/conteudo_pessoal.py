# -*- coding: utf-8 -*-
"""
Conteúdo do perfil pessoal @rhaicalazans — três carrosséis, três capas.

Três porque um carrossel não prova um sistema. Cada um abre numa linguagem
de capa diferente (editorial, pergunta, empilhada) e usa o mesmo miolo —
que é o que torna o sistema um sistema e não uma peça bonita avulsa.

Sobre o texto: as cenas concretas são escritas na voz dela, a partir do que
ela contou de si — mãe e dona da própria agência. A pesquisa é clara que o
que conecta é cena específica, não aforismo arrumado, então escrever
genérico "pra não errar" seria escolher o erro pior. Quem confirma cada
frase é ela; trocar é uma linha por item.

Sem gênero e sem idade do bebê em lugar nenhum, porque isso eu não sei.
Nenhum conselho de sono, saúde ou amamentação: não é a área dela.
"""

FOTO = "rhai-bebe.jpg"

# (dispositivo, kwargs) — o dispositivo é o nome da função em pessoal.py
CARROSSEIS = [
    {
        "id": "01_melhor_no_trabalho",
        "titulo": "Virar mãe me deixou melhor no meu trabalho",
        "capa": "C5 · editorial",
        "slides": [
            ("c5_editorial", dict(rotulo="ninguém diz isso em voz alta",
                                  hook="Virar mãe me deixou<br>melhor no meu trabalho.")),
            ("m2_placa", dict(rotulo="o aviso",
                              frase="Me avisaram que eu<br>ia render menos.",
                              apoio="Antes, durante e depois. Sempre em voz baixa, como quem dá um recado difícil. E nenhuma dessas pessoas estava me desejando mal — elas só estavam repetindo a única versão que conhecem.",
                              plano="alto")),
            ("m1_sangria", dict(numero=1, frase="O meu sim<br>ficou caro.",
                                apoio="Quando o tempo passa a ter dono, você para de dizer sim por educação. Hoje eu recuso em uma linha — sem os três parágrafos de desculpa que eu escrevia antes. Ninguém nunca se ofendeu.")),
            ("m2_placa", dict(numero=2, frase="Dia cheio deixou<br>de ser troféu.",
                              apoio="Eu colecionava agenda lotada como prova de que ia bem. Dia cheio é sintoma, não resultado. Ninguém me paga pelas minhas horas — me paga pelo que sai delas.",
                              plano="baixo")),
            ("m1_sangria", dict(numero=3, frase="Aprendi a<br>terminar hoje.", mono=True,
                                plano="leve",
                                apoio="Quando “depois” virou uma coisa que pode simplesmente não existir, tarefa pela metade deixou de ser opção. É a coisa mais parecida com superpoder que eu ganhei sem ter pedido.")),
            ("m2_placa", dict(numero=4, frase="Parei de esconder<br>que sou mãe.",
                              apoio="Achei que ia parecer menos profissional. Não perdi um cliente. E entendi uma coisa que vale pro resto da vida: quem sabe o meu horário é exatamente quem respeita o meu horário.",
                              plano="alto")),
            ("m1_sangria", dict(numero=5, frase="Passei a ouvir<br>o que não foi dito.",
                                apoio="Um bebê não explica o que está sentindo e mesmo assim você aprende a entender. Cliente também não explica. Ele diz “quero mais movimento no Instagram” quando quer dizer “estou com medo de fechar as portas”.")),
            ("p1_desfoque", dict(texto="Não foi apesar dela.<br>Foi por causa dela.",
                                 arremate="e eu levei um tempo pra admitir")),
            ("f1_fecho", dict(linha="Você não ficou menor.<br>Você ficou mais exata.",
                              salvar="Salva pra reler no dia em que duvidarem de você.",
                              mandar="Manda pra uma mãe que acha que vai ter que escolher.",
                              comentar="Comenta o que ficou melhor no seu trabalho.")),
        ],
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
𝐢𝐢𝐢. Comenta: o que ficou melhor no seu trabalho depois que você virou mãe?

#maternidadereal #mãeempreendedora #maternidadeecarreira #mulheresempreendedoras""",
    },

    {
        "id": "02_me_conta",
        "titulo": "Me conta, o que você parou de fazer?",
        "capa": "C3 · pergunta",
        "slides": [
            ("c3_pergunta", dict(chamada="Me conta,",
                                 manuscrito="o que você parou de fazer<br>depois que virou mãe?")),
            ("m1_sangria", dict(numero=1, frase="Eu começo:<br>parei de pedir<br>desculpa por<br>ter horário.",
                                apoio="“Te respondo amanhã às 9” não é grosseria. É a frase que protege os dois lados — e eu levei tempo demais pra conseguir mandar ela sem enfeitar.")),
            ("m2_placa", dict(numero=2, frase="Parei de responder<br>trabalho com<br>ele no colo.",
                              apoio="Ou estou ali, ou estou trabalhando. As duas ao mesmo tempo viram meia coisa nas duas — e a pessoa do outro lado percebe.",
                              plano="baixo")),
            ("m1_sangria", dict(numero=3, frase="Parei de achar<br>que dar conta<br>sozinha era mérito.", mono=True,
                                plano="alto",
                                apoio="Ajuda pedida cedo é barata. Pedida no limite sai cara — porque no limite a gente escolhe errado.")),
            ("p1_desfoque", dict(texto="A lista de cada uma<br>é diferente.<br>O motivo é o mesmo.",
                                 arremate="o tempo passou a ter dono")),
            ("f1_fecho", dict(linha="Agora é a sua vez.",
                              salvar="Comenta a sua — eu leio todas.",
                              mandar="Manda pra uma amiga que acabou de ter bebê.",
                              comentar="Salva pra voltar quando precisar da sua própria lista.")),
        ],
        "legenda": """Me conta: o que você parou de fazer depois que virou mãe?

Eu começo, e é a que mais mudou a minha rotina: parei de pedir desculpa por ter horário.

Eu achava que responder na hora era ser boa profissional. Não é. É só ensinar a todo mundo que eu estou sempre disponível — e depois reclamar que estou.

"Te respondo amanhã às 9" não fecha porta nenhuma. Quem respeita horário continua. Quem não respeita ia embora de qualquer jeito.

Tem mais duas no carrossel. Mas a parte boa desse post não sou eu — é a sua lista.

A lista de cada uma é diferente. O motivo é sempre o mesmo: o tempo passou a ter dono.

━━━

Comenta a sua aqui embaixo. Eu leio todas. 🤍
E manda pra uma amiga que acabou de ter bebê — ela vai querer escrever a dela.

#maternidadereal #mãeempreendedora #maternidadeecarreira""",
    },

    {
        "id": "03_acho_chique",
        "titulo": "Coisas que eu acho chique numa mãe que trabalha",
        "capa": "C1 · empilhada",
        "slides": [
            ("c1_empilhada", dict(linhas=["Coisas que eu", "acho chique", "numa mãe", "que trabalha"],
                                  chapeu="sem ironia nenhuma")),
            ("m2_placa", dict(numero=1, frase="Dizer que não pode<br>sem inventar<br>motivo.",
                              apoio="Não precisa de história. “Nesse horário eu não consigo” é uma frase completa, e quem ouve respeita mais do que a desculpa elaborada.",
                              plano="alto")),
            ("m1_sangria", dict(numero=2, frase="Ter um horário<br>e defender ele.",
                                apoio="Não é rigidez. É a única maneira de a pessoa do outro lado saber quando contar com você de verdade.")),
            ("m2_placa", dict(numero=3, frase="Falar do filho<br>numa reunião<br>sem baixar a voz.",
                              apoio="A voz baixa é o que ensina todo mundo que aquilo é um problema. Falar no tom normal ensina o contrário — e ninguém nunca me cobrou por isso.",
                              plano="baixo")),
            ("m1_sangria", dict(numero=4, frase="Cobrar o preço<br>certo na primeira<br>mensagem.", mono=True,
                                plano="leve",
                                apoio="Desconto dado com medo vira ressentimento em trinta dias. O preço certo dito cedo poupa a conversa inteira.")),
            ("p1_desfoque", dict(texto="Chique é não pedir licença<br>pra ocupar<br>o próprio lugar.",
                                 arremate="nada disso tem a ver com roupa")),
            ("f1_fecho", dict(linha="Qual dessas você<br>ainda está treinando?",
                              salvar="Salva pra lembrar na próxima reunião.",
                              mandar="Manda pra quem precisa se ouvir dizendo isso.",
                              comentar="Comenta o número que mais pegou em você.")),
        ],
        "legenda": """Coisas que eu acho chique numa mãe que trabalha. E não tem nada a ver com roupa.

1. Dizer que não pode sem inventar motivo. "Nesse horário eu não consigo" é uma frase completa. A desculpa elaborada é que soa frágil.

2. Ter um horário e defender ele. Não é rigidez — é a única maneira de a pessoa do outro lado saber quando contar com você de verdade.

3. Falar do filho numa reunião sem baixar a voz. A voz baixa é o que ensina todo mundo que aquilo é um problema. Falar no tom normal ensina o contrário. Nunca me cobraram por isso.

4. Cobrar o preço certo na primeira mensagem. Desconto dado com medo vira ressentimento em trinta dias.

Chique é não pedir licença pra ocupar o próprio lugar.

━━━

𝐢. Salva pra lembrar na próxima reunião.
𝐢𝐢. Manda pra quem precisa se ouvir dizendo isso.
𝐢𝐢𝐢. Comenta o número que mais pegou em você.

#maternidadereal #mãeempreendedora #mulheresempreendedoras #maternidadeecarreira""",
    },
]

PUBLICACAO = """Como publicar — não é design, é alcance:

1. MÚSICA no carrossel antes de publicar. Carrossel com áudio vira
   elegível pra aba de Reels, que é onde o Instagram mostra conteúdo pra
   quem não te segue. Reels têm em média 36% mais alcance. É um toque na
   tela e quase todo mundo pula.
2. 1080x1440 (3:4) — o único formato que preenche o feed e a grade do
   perfil sem cortar.
3. O primeiro comentário pode repetir a pergunta da legenda: puxa resposta
   de quem não leu até o fim.
4. Alterne as capas. Três carrosséis seguidos com a mesma linguagem de
   capa fazem a grade parecer um catálogo."""
