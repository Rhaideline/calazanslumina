# -*- coding: utf-8 -*-
"""
O feed inteiro desenhado com os 16 modelos de modelos3.py.

Antes existiam duas camadas — capas.py para o slide 1 e modelos.py para o
miolo. Isso produzia carrossel com capa bonita e miolo genérico. Aqui a
peça inteira usa o mesmo repertório: o que muda de slide para slide é o
dispositivo gráfico, não o padding.

Como cada carrossel é montado
------------------------------
  capa      um dispositivo com foto ou forma forte — é o que a grade mostra
  mapa      grade / linha / colunas — a visão geral antes do detalhe
  detalhe   fantasma repetido, o algarismo gigante fazendo a contagem
  respiro   aspas, travessa ou retícula no meio ou perto do fim
  fecho     vazado vermelho — o mesmo em todos, é a assinatura da casa

Das 14 peças que aparecem na grade do perfil, 14 usam dispositivos
diferentes. Nenhuma capa repete a anterior.
"""
import modelos3 as m

FONE = "31 98294-8067"
SITE = "calazanslumina.com.br"

FEED = {}

# ═══════════════════════════════════════════ 02 · 5 ERROS NO GOOGLE ═══
_ERROS_GMN = [
    ("1", "Categoria<br><em>genérica</em>.",
     "“Empresa” não é categoria, é desistência. O Google precisa saber exatamente o que você faz para te mostrar a quem procura isso.",
     "Você some da busca de quem já queria comprar"),
    ("2", "Avaliação sem<br><em>resposta</em>.",
     "Responder review não é etiqueta. É conteúdo novo no perfil, assinado por você, indexado pelo Google.",
     "Silêncio público pesa mais que nota baixa"),
    ("3", "Última foto<br>de <em>2023</em>.",
     "Perfil parado parece negócio fechado. Foto recente é o sinal mais barato de que a porta ainda abre.",
     "A pessoa fecha a aba antes de procurar o telefone"),
    ("4", "Endereço<br><em>divergente</em>.",
     "Site diz uma coisa, Maps outra, o Instagram uma terceira. Cada divergência derruba a confiança do cadastro.",
     "O Google prefere o concorrente cujos dados batem"),
    ("5", "<em>Zero</em> post<br>no perfil.",
     "O Google Meu Negócio tem campo de post. Quase ninguém usa. Quem usa aparece com conteúdo direto na busca.",
     "Você entrega de graça um espaço que o concorrente ocupa"),
]

FEED["02_erros_google"] = [
    ("01_capa", lambda: m.reticula(
        foto="coding-laptop.jpg",
        titulo="5 erros que<br>o Google <em>não</em><br><em>perdoa</em>.",
        nota="Nenhum deles custa dinheiro para consertar")),
] + [
    (f"{i+2:02d}_fantasma", (lambda n, t, c, x: lambda: m.fantasma(n, t, c, x))(n, t, c, x))
    for i, (n, t, c, x) in enumerate(_ERROS_GMN)
] + [
    ("07_vazado", lambda: m.vazado(
        linha_cheia="Um por dia.", linha_vazada="Sexta tá limpo.",
        nota=f"Se preferir que a gente faça · {FONE}")),
]

# ═══════════════════════════════════════════ 04 · CASO WOLF'S SIDING ═══
FEED["04_case_wolfs"] = [
    ("01_capa", lambda: m.duotone(
        foto="equipe-feliz.jpg",
        titulo="Página 3.<br>28 dias depois,<br><em>página 1</em>.",
        nota="Wolf's Siding · Northborough MA · sem anúncio")),
    ("02_colunas", lambda: m.colunas(
        titulo="Antes e <em>depois</em>.",
        rot_a="Antes", itens_a=["Posição média 26,8", "16 cliques no mês",
                                 "Zero lead orgânico", "PageSpeed no vermelho"],
        rot_b="28 dias depois", itens_b=["Primeira página", "+706% de cliques",
                                          "18 leads orgânicos", "PageSpeed 100/100"])),
    ("03_planta", lambda: m.planta(
        codigo="WOLF'S SIDING / 28 DIAS", titulo="+706% de<br><em>cliques</em>.",
        medidas=[("Impressões", "+230%"), ("Leads / 28 dias", "18"),
                 ("Posições ganhas", "↑ 11"), ("PageSpeed", "100/100")],
        nota="Siding · Northborough, MA · nenhum real em anúncio")),
    ("04_fantasma", lambda: m.fantasma(
        "1", "Arrumar a<br><em>casa</em> primeiro.",
        "SEO on-page e local refeitos, velocidade em 100/100. Nenhuma tática avançada funciona sobre um site lento.",
        "O que foi feito")),
    ("05_fantasma", lambda: m.fantasma(
        "2", "Atender<br><em>sempre</em>.",
        "Chatbot que qualifica em seis passos, IVR com quatro ramificações e CRM movendo o lead sozinho.",
        "O que foi feito")),
    ("06_vazado", lambda: m.vazado(
        linha_cheia="Em qual página", linha_vazada="está o seu?",
        nota="Eu olho e te digo · resposta em 24h")),
]

# ══════════════════════════════════════ 07 · O QUE UMA IA PRECISA SABER ═══
_IA = [
    ("1", "Quem <em>é</em><br>você.",
     "Nome, serviço, região atendida, o que você não faz. Sem isso a IA inventa — e inventar é o único erro imperdoável.",
     "Fundamento"),
    ("2", "O que<br><em>perguntar</em>.",
     "As três ou quatro informações sem as quais você não consegue orçar. Nem uma a mais: cada pergunta extra derruba resposta.",
     "Fundamento"),
    ("3", "Como<br><em>falar</em>.",
     "O tom da casa, por escrito. Clínica não fala como construtora. Isso se define uma vez e vale para sempre.",
     "Fundamento"),
    ("4", "Onde<br><em>guardar</em>.",
     "Toda conversa vira registro no CRM, com etiqueta e histórico. Atendimento que não vira dado é atendimento perdido.",
     "Fundamento"),
    ("5", "Quando<br><em>te avisar</em>.",
     "Lead quente não espera turno. A regra de notificação é parte do projeto, não um ajuste depois.",
     "Fundamento"),
    ("6", "A hora<br>de <em>sair</em>.",
     "A IA precisa reconhecer o que não sabe e passar para humano. Bot que insiste queima mais cliente que secretária eletrônica.",
     "O que quase ninguém faz"),
]

FEED["07_ia_atendimento"] = [
    ("01_capa", lambda: m.lombada(
        foto="chatbot-whatsapp.jpg", vertical="Método da casa",
        titulo="Antes de atender,<br><em>saber</em>.",
        nota="Seis coisas que toda IA precisa saber primeiro")),
] + [
    (f"{i+2:02d}_fantasma", (lambda n, t, c, x: lambda: m.fantasma(n, t, c, x))(n, t, c, x))
    for i, (n, t, c, x) in enumerate(_IA)
] + [
    ("08_vazado", lambda: m.vazado(
        linha_cheia="Esse roteiro,", linha_vazada="no seu negócio.",
        nota=f"A gente escreve junto e sobe o fluxo · {FONE}")),
]

# ════════════════════════════════════════ 10 · FUNIL QUE NÃO VAZA ═══
FEED["10_funil_nao_vaza"] = [
    ("01_capa", lambda: m.recorte(
        foto="pessoa-celular.jpg", titulo="Funil que<br>não <em>vaza</em>.",
        nota="Sete etapas, nesta ordem · nenhuma delas é anúncio")),
    ("02_linha", lambda: m.linha(
        titulo="As quatro primeiras,<br>antes de <em>qualquer</em> verba.",
        pontos=[("01 · Achar", "Medir onde o lead some hoje."),
                ("02 · Destino", "Todo canal aponta pro mesmo lugar."),
                ("03 · Resposta", "Automática, curta e honesta."),
                ("04 · Qualificar", "Três perguntas antes de você entrar.")],
        nota="As etapas 5, 6 e 7 vêm depois destas — e só depois.")),
    ("03_fantasma", lambda: m.fantasma(
        "1", "Achar o<br><em>furo</em>.",
        "Antes de construir, medir onde o lead some hoje. Quase sempre é entre a mensagem chegar e alguém responder.",
        "Etapa")),
    ("04_fantasma", lambda: m.fantasma(
        "2", "Um <em>destino</em><br>só.",
        "Todo canal aponta para o mesmo lugar. Lead espalhado em quatro caixas de entrada é lead de que ninguém é dono.",
        "Etapa")),
    ("05_fantasma", lambda: m.fantasma(
        "3", "Resposta<br><em>imediata</em>.",
        "Automática, curta e honesta. Confirmar que chegou já segura a pessoa enquanto um humano não entra.",
        "Etapa")),
    ("06_fantasma", lambda: m.fantasma(
        "4", "<em>Qualificar</em><br>antes de falar.",
        "Três perguntas que definem se é seu cliente. Você entra na conversa já sabendo se vale a sua hora.",
        "Etapa")),
    ("07_grade", lambda: m.grade(
        indice="ETAPAS 5 — 7", titulo="O que segura<br>o que já <em>entrou</em>.",
        colunas=[("05 · Etiqueta", "Cada lead com um nome e um lugar no pipeline. Sem isso não existe follow-up, existe memória."),
                 ("06 · Retorno", "“Depois eu vejo” vira data no sistema, não intenção. É aqui que mora o dinheiro."),
                 ("07 · Ciclo", "Cliente atendido vira pedido de avaliação, e a reputação realimenta o topo.")],
        nota="Três etapas que quase todo funil pula.")),
    ("08_aspas", lambda: m.aspas(
        texto="A maior parte do dinheiro está em quem disse “depois eu vejo”. Depois é uma data no sistema, não uma intenção.",
        autor="Rhaideline Calazans", fundo="tinta")),
    ("09_vazado", lambda: m.vazado(
        linha_cheia="Qual das sete", linha_vazada="é o seu buraco?",
        nota=f"Manda que eu abro e te digo · {FONE}")),
]

# ═══════════════════════════════════════════ 12 · CASO RS DEVELOPMENT ═══
FEED["12_case_rs"] = [
    ("01_capa", lambda: m.planta(
        codigo="RS DEVELOPMENT / 04 MESES", titulo="100 páginas.<br>Zero <em>anúncio</em>.",
        medidas=[("Impressões / mês", "+24.500%"), ("Cliques", "+1.092%"),
                 ("Páginas indexadas", "100+"), ("Leads orgânicos", "8")],
        nota="De 358 para 88.103 impressões por mês, tudo orgânico.")),
    ("02_colunas", lambda: m.colunas(
        titulo="O negócio vivia<br>de <em>indicação</em>.",
        rot_a="No começo", itens_a=["358 impressões / mês", "Nenhuma página de serviço",
                                     "Zero lead orgânico", "100% boca a boca"],
        rot_b="Quatro meses", itens_b=["88.103 impressões / mês", "100+ páginas indexadas",
                                        "8 leads orgânicos", "Zero em anúncio"])),
    ("03_fantasma", lambda: m.fantasma(
        "1", "Serviço <em>vezes</em><br>cidade.",
        "Arquitetura programática de SEO local: cada serviço em cada cidade da região vira uma página com endereço próprio na busca.",
        "O que foi feito")),
    ("04_fantasma", lambda: m.fantasma(
        "2", "Conteúdo <em>real</em><br>por região.",
        "Página de cidade sem conteúdo próprio o Google trata como lixo — e com razão. Cada uma precisava ter motivo para existir.",
        "O que foi feito")),
    ("05_fantasma", lambda: m.fantasma(
        "3", "Estrutura que<br>o robô <em>lê</em>.",
        "Interlink hub-and-spoke, JSON-LD de LocalBusiness, Service e FAQ, e formato pensado para aparecer em resposta de IA.",
        "O que foi feito")),
    ("06_aspas", lambda: m.aspas(
        texto="A maior parte do trabalho não apareceu em lugar nenhum. Foi decidir o que cada página tinha a dizer.",
        autor="Rhaideline Calazans", fundo="vermelho")),
    ("07_vazado", lambda: m.vazado(
        linha_cheia="Quantas páginas", linha_vazada="o seu site tem?",
        nota=f"Eu levanto e te mando · {SITE}")),
]

# ═══════════════════════════════════════════ 15 · CHECKLIST DO SITE ═══
FEED["15_checklist_site"] = [
    ("01_capa", lambda: m.vazado(
        linha_cheia="Seu site está", linha_vazada="perdendo venda?",
        nota="Sete perguntas · responda sem defender o site", fundo="tinta")),
    ("02_grade", lambda: m.grade(
        indice="AS SETE PERGUNTAS", titulo="Responde sem<br><em>defender</em> o site.",
        colunas=[("Velocidade e contato", "Abre em menos de 3 segundos no celular? Dá para falar com você sem rolar a página?"),
                 ("Preço e prova", "Tem preço, faixa ou “a partir de”? Tem foto de obra, avaliação com nome, caso publicado?"),
                 ("Alcance e resposta", "Aparece para quem não sabe o seu nome? Tem página por serviço? Alguém responde o formulário?")],
        nota="Três “não” já explicam o mês fraco.")),
    ("03_fantasma", lambda: m.fantasma(
        "1", "Sem <em>preço</em><br>nenhum.",
        "Medo de assustar. O efeito real é filtrar errado: quem não tem orçamento chama mesmo assim e ocupa a sua agenda.",
        "Você perde quem só queria confirmar a faixa")),
    ("04_fantasma", lambda: m.fantasma(
        "2", "Nenhuma<br><em>prova</em>.",
        "Adjetivo não convence ninguém. Foto do serviço feito, avaliação com nome, número de caso — isso convence.",
        "A pessoa procura prova em outro lugar. E fecha lá")),
    ("05_fantasma", lambda: m.fantasma(
        "3", "Uma página<br>para <em>tudo</em>.",
        "Um site só, com todos os serviços na mesma página, não tem endereço para o Google mandar ninguém.",
        "Você compete por uma busca em vez de ganhar dez")),
    ("06_veladura", lambda: m.veladura(
        foto="tecnologia-simples.jpg", titulo="Manda o<br><em>endereço</em>.",
        nota="Passo as sete no seu site · resposta em 24h")),
]

# ═════════════════════════════════════════════ 17 · O PRIMEIRO MÊS ═══
FEED["17_primeiro_mes"] = [
    ("01_capa", lambda: m.travessa(
        foto="compras-online.jpg", titulo_claro="O que a gente faz",
        titulo_escuro="no <em>primeiro mês</em>.",
        nota="Na ordem real · sem reunião de alinhamento")),
    ("02_linha", lambda: m.linha(
        titulo="Quatro semanas,<br>quatro <em>entregas</em>.",
        pontos=[("Semana 1 · Medir", "O que entra hoje, por onde chega e onde some."),
                ("Semana 2 · Estancar", "O vazamento maior, antes de construir."),
                ("Semana 3 · Construir", "O que o diagnóstico apontou."),
                ("Semana 4 · Entregar", "Funcionando e com você sabendo mexer.")],
        nota="Repara que campanha não entra em nenhuma das quatro.")),
    ("03_fantasma", lambda: m.fantasma(
        "1", "Medir <em>antes</em><br>de opinar.",
        "Sem número inicial não existe resultado depois, existe sensação. E sensação todo mundo tem de graça.",
        "Semana 1")),
    ("04_fantasma", lambda: m.fantasma(
        "2", "Estancar o<br><em>maior</em> furo.",
        "Um de cada vez, o maior primeiro. Projeto que tenta arrumar tudo junto não termina nada.",
        "Semana 2")),
    ("05_trama", lambda: m.trama(
        palavra="campanha depois", destaque_linha=4,
        nota="Anúncio entra quando o que recebe o clique já está de pé")),
    ("06_vazado", lambda: m.vazado(
        linha_cheia="A semana 1", linha_vazada="é de graça.",
        nota=f"Você fica com o documento de qualquer jeito · {FONE}")),
]

# ═══════════════════════════════════════════ 19 · GMN PARA FAZER HOJE ═══
FEED["19_gmn_hoje"] = [
    ("01_capa", lambda: m.mosaico(
        fotos=["ideia-lampada.jpg", "compras-online.jpg",
               "equipe-feliz.jpg", "tecnologia-simples.jpg"],
        titulo="Dá para fazer<br><em>hoje</em>.",
        nota="Google Meu Negócio · seis itens, numa tarde, sem pagar nada")),
    ("02_fantasma", lambda: m.fantasma(
        "52", "Metade da descoberta<br>começa numa <em>busca</em>.",
        "52% das descobertas de produto no Brasil vêm da busca do Google — à frente de rede social e de indicação.",
        "Portal Customer · Consumidor Brasileiro em Números, 2026")),
    ("03_grade", lambda: m.grade(
        indice="NA ORDEM", titulo="Os seis<br><em>itens</em>.",
        colunas=[("1 — 2 · Cadastro", "Categoria principal exata e as secundárias. Depois os serviços, um a um, com descrição."),
                 ("3 — 4 · Sinal de vida", "Cinco fotos suas, tiradas esta semana. E resposta em toda avaliação que está sem."),
                 ("5 — 6 · O esquecido", "Publicar um post no perfil — o campo existe. Conferir horário, feriado e link.")],
        nota="De cima para baixo. O item 5 é o que quase ninguém faz.")),
    ("04_fantasma", lambda: m.fantasma(
        "5", "O perfil tem<br><em>campo de post</em>.",
        "Igual rede social, dentro do resultado de busca. Quase nenhum negócio local usa. Quem usa ocupa o espaço sozinho.",
        "O item esquecido")),
    ("05_reticula", lambda: m.reticula(
        foto="pessoa-celular.jpg", titulo="Foto de <em>banco</em><br>não engana.",
        nota="Perfil com foto de celular sua converte mais que estoque")),
    ("06_vazado", lambda: m.vazado(
        linha_cheia="Faz hoje.", linha_vazada="Me conta depois.",
        nota=f"Empacou em algum item? Manda print · {FONE}")),
]

# ═══════════════════════════════════════ 22 · O QUE A GENTE NÃO FAZ ═══
FEED["22_o_que_nao_fazemos"] = [
    ("01_capa", lambda: m.colunas(
        titulo="O que a gente<br><em>não</em> faz.",
        rot_a="Recusado", itens_a=["Prometer prazo fixo", "Comprar avaliação",
                                    "Segurar seu acesso", "Copiar concorrente"],
        rot_b="Em vez disso", itens_b=["Mostrar caso publicado", "Pedir review no fluxo",
                                        "Acesso no seu nome", "Partir do seu diagnóstico"])),
    ("02_grade", lambda: m.grade(
        indice="AS SEIS RECUSAS", titulo="Cada uma já<br>custou <em>contrato</em>.",
        colunas=[("Promessa", "Prometer número de leads em prazo fixo. Contagem regressiva falsa e vaga que nunca acaba."),
                 ("Vaidade", "Comprar seguidor, curtida ou avaliação. Relatório de métrica que não vira decisão."),
                 ("Refém", "Copiar o site do concorrente trocando as cores. Segurar o acesso do cliente como garantia.")],
        nota="E eu manteria todas as seis.")),
    ("03_fantasma", lambda: m.fantasma(
        "1", "Prometer <em>número</em><br>em prazo fixo.",
        "Quem promete resultado sem olhar o seu negócio está vendendo sorte com nota fiscal. Eu mostro caso, não garantia.",
        "Contrato caro pago contra promessa que ninguém cumpre")),
    ("04_fantasma", lambda: m.fantasma(
        "2", "Comprar<br><em>avaliação</em>.",
        "Review comprada é infração de política do Google e some numa varredura. O perfil volta pior do que estava.",
        "Risco de suspensão do perfil inteiro")),
    ("05_travessa", lambda: m.travessa(
        foto="coding-laptop.jpg", titulo_claro="O acesso é",
        titulo_escuro="<em>seu</em>. Sempre.",
        nota="Site, domínio, CRM e perfil no nome de quem paga")),
    ("06_vazado", lambda: m.vazado(
        linha_cheia="Sem proposta.", linha_vazada="Só diagnóstico.",
        nota=f"Se isso fizer sentido pra você · {SITE}")),
]

# ═══════════════════════════════════════════════════════ ESTÁTICOS ═══
FEED["03_silencio"] = [
    ("01_capa", lambda: m.mascara(
        foto="compras-online.jpg", palavra="SILÊNCIO",
        nota="Orçamento não se perde no preço. Se perde aqui.")),
]

FEED["06_59_por_cento"] = [
    ("01_capa", lambda: m.fantasma(
        "59", "O canal que mais<br>importa é o único<br>sem <em>processo</em>.",
        "59% dos consumidores brasileiros usam o WhatsApp como principal canal de atendimento — à frente de chat no site, e-mail e telefone.",
        "Portal Customer · Consumidor Brasileiro em Números, 2026")),
]

FEED["09_mito_ia"] = [
    ("01_capa", lambda: m.trama(
        palavra="bot que insiste", destaque_linha=5,
        nota="Bot bom é o que sabe a hora de passar para humano")),
]

FEED["13_bastidor"] = [
    ("01_capa", lambda: m.aspas(
        texto="Ninguém contrata agência para ganhar arquivo bonito. A parte que decide o resultado é a que não dá print.",
        autor="Rhaideline Calazans", fundo="tinta")),
]

FEED["20_convite_auditoria"] = [
    ("01_capa", lambda: m.veladura(
        foto="ideia-lampada.jpg", titulo="Eu olho<br>o <em>seu</em>.",
        nota=f"Diagnóstico sem custo · {FONE}")),
]
