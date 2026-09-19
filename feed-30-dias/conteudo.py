# -*- coding: utf-8 -*-
"""
Calendario de 30 dias — @calazanslumina.

Regras que valem para tudo aqui dentro:
  · Todo numero tem fonte declarada. Numero sem fonte nao entra na arte.
  · Todo case usa metrica que ja esta publicada em data/portfolio.ts do site.
  · Nenhuma promessa de resultado. A agencia mostra o que fez, nao o que promete.
  · Teto de 20 palavras por slide (ver ESTUDO-CRAFT-2026.md, item 6).

Cadencia: 5 publicacoes por semana, de segunda a sexta, 21/09 a 20/10/2026.
Mix: 9 carrosseis, 8 reels, 5 estaticos (ver estudo, item 2).
"""

# --------------------------------------------------------------------------
# Fontes reutilizaveis. Cada chave vira o rodape "Fonte: ..." de uma peca.
# --------------------------------------------------------------------------
FONTES = {
    "busca52":   "Fonte: Portal Customer, Consumidor Brasileiro em Números, 2026",
    "pesq78":    "Fonte: NegóciosSC, Jornada de compra do brasileiro, 2026",
    "multi61":   "Fonte: NegóciosSC, Jornada de compra do brasileiro, 2026",
    "zap59":     "Fonte: Portal Customer, Consumidor Brasileiro em Números, 2026",
    "hora60":    "Fonte: Portal Customer, Consumidor Brasileiro em Números, 2026",
    "google64":  "Fonte: Portal Making Of, sobre pesquisa de lembrança de marca, 2026",
    "carrossel": "Fonte: Sprout Social, Content Benchmarks; Carouselli, 2026",
    "portfolio": "Fonte: caso publicado em calazanslumina.com.br/cases",
}

# --------------------------------------------------------------------------
# PUBLICACOES
#   tipo: "carrossel" | "estatico" | "reel"
#   pilar: Verdade | Metodo | Prova | Erro | Convite
#   slides: lista de (nome_modelo, kwargs) — so para carrossel/estatico
#   cenas: lista de dicts — so para reel (ver gerar_reels.py)
# --------------------------------------------------------------------------

CALENDARIO = [

# ═══════════════════════════ SEMANA 1 — SER ENCONTRADO ═══════════════════

dict(
    id="01_antes_de_te_ligar", data="2026-09-21", hora="09:00", tipo="reel",
    pilar="Verdade", titulo="Antes de te ligar, ele te pesquisa",
    legenda="""Ninguém liga para o desconhecido.

78% dos consumidores brasileiros pesquisam online antes de comprar — inclusive quando a compra termina na loja física. E 61,6% pesquisam em mais de um canal antes de decidir.

Traduzindo para o seu negócio: entre a indicação que te citaram e o telefone tocando, existe uma etapa invisível. A pessoa digita seu nome. Abre o Google. Olha o site, olha o Maps, olha as avaliações, olha se tem foto recente.

Se nesse intervalo ela não encontra nada — ou encontra um perfil parado em 2022 — ela não te liga. Ela volta e clica no próximo.

Você não perdeu por preço. Perdeu numa busca que nunca viu.

O que dá para resolver ainda hoje, de graça:
· foto nova no Google Meu Negócio
· horário de funcionamento correto
· responder as avaliações que estão sem resposta

O resto a gente conversa.

Fontes: NegóciosSC, jornada de compra do brasileiro, 2026; Portal Customer, Consumidor Brasileiro em Números, 2026.

#MarketingDigital #GoogleMeuNegocio #NegocioLocal #CalazansLumina""",
    cenas=[
        dict(t="tinta", tipo="hook", txt="Antes de te ligar,<br>ele te <em>pesquisa</em>."),
        dict(t="tinta", tipo="linha", txt="E você não vê essa parte."),
        dict(t="papel", tipo="stat", num="78", suf="%", txt="pesquisam online antes de comprar"),
        dict(t="papel", tipo="linha", txt="Mesmo quando compram na loja física."),
        dict(t="tinta", tipo="stat", num="61,6", suf="%", txt="olham mais de um canal antes de decidir"),
        dict(t="tinta", tipo="linha", txt="Site. Maps. Avaliações. Foto."),
        dict(t="brasa", tipo="linha", txt="Se não acha nada,<br>ela clica no <em>próximo</em>."),
        dict(t="brasa", tipo="linha", txt="Você não perdeu no preço."),
        dict(t="tinta", tipo="cta", txt="Perdeu numa busca<br>que <em>nunca viu</em>."),
    ],
),

dict(
    id="02_erros_google", data="2026-09-22", hora="09:00", tipo="carrossel",
    pilar="Erro", titulo="5 erros que fazem o Google te esconder",
    legenda="""O Google não escondeu você por maldade. Ele escondeu porque não teve como confirmar que você existe.

Perfil de negócio é cadastro de confiança. Cada campo vazio é uma dúvida que o algoritmo resolve a favor do concorrente que preencheu.

Os 5 erros do carrossel, em uma linha cada:

1. Categoria genérica — "empresa" não é categoria. É desistência.
2. Avaliação sem resposta — silêncio público vale mais que nota baixa.
3. Última foto de 2023 — perfil parado parece negócio fechado.
4. Endereço e horário divergentes entre site, Maps e redes.
5. Zero postagem no perfil — o campo existe e quase ninguém usa.

Nenhum deles custa dinheiro para consertar. Todos custam cliente enquanto ficam abertos.

Salva esse post e resolve um por dia essa semana. Em cinco dias tá limpo.

Fonte: Portal Customer, Consumidor Brasileiro em Números, 2026.

#GoogleMeuNegocio #SEOLocal #NegocioLocal #MarketingDigital #CalazansLumina""",
    slides=[
        ("capa", dict(chapeu="Google Meu Negócio", edicao="01",
                      titulo="5 erros que fazem o Google <em>te esconder</em>.",
                      promessa="Nenhum deles custa dinheiro para consertar. Todos custam cliente enquanto ficam abertos.")),
        ("erro", dict(n=1, titulo="Categoria <em>genérica</em>.",
                      corpo="“Empresa” não é categoria. É desistência. O Google precisa saber exatamente o que você faz para te mostrar a quem procura isso.",
                      custo="Você some da busca de quem já queria comprar e só aparece para quem digitou seu nome.")),
        ("erro", dict(n=2, titulo="Avaliação <em>sem resposta</em>.",
                      corpo="Responder review não é etiqueta. É conteúdo novo no perfil, assinado por você, indexado pelo Google.",
                      custo="Silêncio público pesa mais que nota baixa. Quem lê conclui que ninguém cuida da loja.")),
        ("erro", dict(n=3, titulo="Última foto de <em>2023</em>.",
                      corpo="Perfil parado parece negócio fechado. Foto recente é o sinal mais barato de que a porta ainda abre.",
                      custo="A pessoa fecha a aba antes de procurar o telefone. Você nunca fica sabendo.")),
        ("erro", dict(n=4, titulo="Endereço <em>divergente</em>.",
                      corpo="Site diz uma coisa, Maps outra, o Instagram uma terceira. Cada divergência derruba a confiança do cadastro.",
                      custo="O Google prefere mostrar o concorrente cujos dados batem em todo lugar.")),
        ("erro", dict(n=5, titulo="<em>Zero</em> postagem no perfil.",
                      corpo="O Google Meu Negócio tem campo de post. Quase ninguém usa. Quem usa aparece com conteúdo direto na busca.",
                      custo="Você entrega de graça um espaço que o seu concorrente está ocupando.")),
        ("convite", dict(chapeu="Sua vez", titulo="Um por dia.<br>Sexta tá <em>limpo</em>.",
                         corpo="Se preferir que a gente faça, é uma tarde de trabalho e some da sua lista para sempre.",
                         botao="Chamar no WhatsApp", selo="31 98294-8067")),
    ],
),

dict(
    id="03_silencio", data="2026-09-23", hora="09:00", tipo="estatico",
    pilar="Verdade", titulo="Orçamento não se perde no preço",
    legenda="""A gente sempre acha que perdeu no valor. Quase nunca é.

60% dos consumidores brasileiros esperam resposta em até uma hora — em qualquer canal. Uma hora. Não um dia, não "amanhã cedo".

O que acontece na prática: a mensagem chega 21h40, você vê no dia seguinte às 8h, responde educadamente, e a pessoa já fechou com quem respondeu às 21h44.

Não foi o preço. Foi o intervalo.

Isso tem conserto e não precisa de ninguém acordado de madrugada. Precisa de um fluxo que responda, qualifique e registre — para você chegar de manhã com o orçamento pronto em vez de um "boa noite" sem contexto.

Fonte: Portal Customer, Consumidor Brasileiro em Números, 2026.

#Atendimento #WhatsAppBusiness #AutomacaoDeVendas #CalazansLumina""",
    slides=[
        ("manifesto", dict(chapeu="Verdade dura",
                           titulo="Orçamento não se perde no preço.<br>Se perde no <em>silêncio</em>.",
                           lead="60% dos brasileiros esperam resposta em até uma hora. Você respondeu em doze.",
                           tamanho="g")),
    ],
),

dict(
    id="04_case_wolfs", data="2026-09-24", hora="09:00", tipo="carrossel",
    pilar="Prova", titulo="Página 3 do Google. 28 dias depois, página 1.",
    legenda="""Caso real, número conferível, tudo publicado no nosso site.

A Wolf's Siding estava na posição média 26,8 no Google. Traduzindo: terceira página. Dezesseis cliques no mês inteiro e zero lead pelo formulário. O site existia e era invisível.

O que foi feito em um ciclo de 28 dias:
· reestruturação de SEO on-page e local
· PageSpeed de 100/100
· chatbot que qualifica em 6 passos, ligado 24 horas
· pipeline de CRM, IVR e automação de reputação

Resultado do período: +706% de cliques, +230% de impressões, subida de 11 posições e 18 leads orgânicos em 28 dias.

Nenhum centavo de anúncio nesse número.

Não estou dizendo que todo negócio faz isso em 28 dias. Estou dizendo que esse fez, e que dá para verificar.

Caso completo em calazanslumina.com.br/cases

#SEO #SEOLocal #GoHighLevel #MarketingDigital #CalazansLumina""",
    slides=[
        ("capa", dict(chapeu="Caso real", edicao="02",
                      titulo="Página 3 do Google.<br>28 dias depois, <em>página 1</em>.",
                      promessa="Wolf's Siding, Northborough MA. Os números do meio estão todos publicados.")),
        ("versus", dict(chapeu="Antes e depois", rot_a="Antes",
                        txt_a="Posição média 26,8.<br>16 cliques no mês.<br>Zero lead.",
                        rot_b="Depois de 28 dias",
                        txt_b="Primeira página.<br>18 leads orgânicos.<br><em>Sem anúncio.</em>")),
        ("prova", dict(cliente="Wolf's Siding Inc.", categoria="Siding · Northborough, MA",
                       cifra="+706%", rotulo="cliques no período",
                       frase="A busca já existia. O site é que não estava lá para atender.",
                       metricas=[("+230%", "Impressões"), ("18", "Leads / 28 dias"),
                                 ("↑11", "Posições"), ("100", "PageSpeed")])),
        ("passo", dict(n=1, rotulo="O que foi feito", titulo="Arrumar a <em>casa</em> primeiro.",
                       corpo="SEO on-page e local refeitos, e velocidade em 100/100. Nenhuma tática avançada funciona sobre um site lento.")),
        ("passo", dict(n=2, rotulo="O que foi feito", titulo="Atender <em>sempre</em>.",
                       corpo="Chatbot que qualifica em seis passos, IVR com quatro ramificações e CRM movendo o lead sozinho.")),
        ("convite", dict(chapeu="Seu caso", titulo="O seu site está<br>em qual <em>página</em>?",
                         corpo="Eu olho e te digo — posição média, o que está travando e o que dá para resolver primeiro.",
                         botao="Pedir o diagnóstico", selo="Resposta em 24h")),
    ],
),

dict(
    id="05_21h47", data="2026-09-25", hora="09:00", tipo="reel",
    pilar="Verdade", titulo="A mensagem das 21h47",
    legenda="""21h47. Chega a mensagem: "boa noite, vocês fazem orçamento?"

Você está jantando. Vê às 8h da manhã. Responde bonito, educado, completo.

Tarde demais. Às 21h51 alguém já tinha respondido.

59% dos consumidores brasileiros usam o WhatsApp como principal canal de atendimento — na frente de chat no site (49%), e-mail (43%) e telefone (35%). É onde o seu cliente está. E é o canal que menos gente organiza.

O ponto não é você virar a noite acordado. É que existir uma resposta enquanto você dorme.

Um fluxo bem montado faz três coisas enquanto você não está:
· responde na hora e confirma que chegou
· pergunta o que você precisa saber para orçar
· registra tudo, para você abrir de manhã com o contexto pronto

Você não perde a venda. E não perde o sono.

Fonte: Portal Customer, Consumidor Brasileiro em Números, 2026.

#WhatsAppBusiness #Atendimento #AutomacaoDeVendas #CalazansLumina""",
    cenas=[
        dict(t="tinta", tipo="hook", txt="<em>21h47.</em>"),
        dict(t="tinta", tipo="linha", txt="“Boa noite, vocês<br>fazem orçamento?”"),
        dict(t="tinta", tipo="linha", txt="Você está jantando."),
        dict(t="papel", tipo="linha", txt="Vê às 8h da manhã."),
        dict(t="papel", tipo="linha", txt="Responde bonito. Completo."),
        dict(t="brasa", tipo="linha", txt="Às <em>21h51</em> alguém<br>já tinha respondido."),
        dict(t="tinta", tipo="stat", num="59", suf="%", txt="atendem pelo WhatsApp antes de qualquer outro canal"),
        dict(t="tinta", tipo="linha", txt="Não é sobre virar a noite."),
        dict(t="brasa", tipo="cta", txt="É sobre existir<br>uma <em>resposta</em>."),
    ],
),

# ═══════════════════════════ SEMANA 2 — RESPONDER ════════════════════════

dict(
    id="06_59_por_cento", data="2026-09-28", hora="09:00", tipo="estatico",
    pilar="Verdade", titulo="59% — o canal que ninguém organiza",
    legenda="""59% dos consumidores brasileiros usam o WhatsApp como principal canal de atendimento.

Atrás dele: chat no site com 49%, e-mail com 43% e telefone com 35%.

Olha o tamanho da distância. E agora olha quanto da sua estrutura está montada nesse canal.

Na maioria dos negócios que eu abro, é assim: site caprichado, e-mail marketing configurado, telefone com gravação bonita — e o WhatsApp sendo um celular pessoal, sem etiqueta, sem histórico, sem ninguém sabendo quem respondeu o quê.

O canal que mais importa é o único sem processo.

Fonte: Portal Customer, Consumidor Brasileiro em Números, 2026.

#WhatsAppBusiness #CRM #Atendimento #CalazansLumina""",
    slides=[
        ("numero", dict(chapeu="O canal do cliente", num="59", sufixo="%",
                        frase="atendem pelo WhatsApp antes de qualquer <em>outro canal</em>.",
                        fonte="Chat no site 49% · E-mail 43% · Telefone 35% · Portal Customer, 2026")),
    ],
),

dict(
    id="07_ia_atendimento", data="2026-09-29", hora="09:00", tipo="carrossel",
    pilar="Metodo", titulo="O que uma IA precisa saber antes de atender por você",
    legenda="""Toda vez que alguém diz "IA no atendimento espanta cliente", é porque conheceu uma IA mal montada.

Bot ruim é o que responde qualquer coisa. Bot bom é o que sabe exatamente seis coisas e cala a boca no resto.

O carrossel mostra as seis. É o mesmo roteiro que a gente usa em todo projeto — o da JH Painting, por exemplo, que virou uma secretária virtual chamada Jafet, atendendo 24 horas e passando para humano na hora certa.

O detalhe que muda tudo é o último slide: a IA precisa saber a hora de sair. Um bot que insiste em atender o que não sabe queima mais cliente do que uma secretária eletrônica.

Quer o roteiro aplicado ao seu negócio? Chama.

#IA #Atendimento #WhatsAppBusiness #GoHighLevel #CalazansLumina""",
    slides=[
        ("capa", dict(chapeu="Método da casa", edicao="03",
                      titulo="O que uma IA precisa saber <em>antes</em> de atender por você.",
                      promessa="Seis coisas. Bot ruim é o que responde qualquer coisa — bom é o que cala a boca no resto.")),
        ("passo", dict(n=1, rotulo="Fundamento", titulo="Quem <em>é</em> você.",
                       corpo="Nome, serviço, região atendida, o que você não faz. Sem isso, a IA inventa — e inventar é o único erro imperdoável.")),
        ("passo", dict(n=2, rotulo="Fundamento", titulo="O que <em>perguntar</em>.",
                       corpo="As três ou quatro informações sem as quais você não consegue orçar. Nem uma a mais: cada pergunta extra derruba resposta.")),
        ("passo", dict(n=3, rotulo="Fundamento", titulo="Como <em>falar</em>.",
                       corpo="O tom da casa, por escrito. Clínica não fala como construtora. Isso se define uma vez e vale para sempre.")),
        ("passo", dict(n=4, rotulo="Fundamento", titulo="Onde <em>guardar</em>.",
                       corpo="Toda conversa vira registro no CRM, com etiqueta e histórico. Atendimento que não vira dado é atendimento perdido.")),
        ("passo", dict(n=5, rotulo="Fundamento", titulo="Quando <em>avisar</em> você.",
                       corpo="Lead quente não espera turno. A regra de notificação é parte do projeto, não um ajuste depois.")),
        ("passo", dict(n=6, rotulo="O que quase ninguém faz", titulo="A hora de <em>sair</em>.",
                       corpo="A IA precisa saber reconhecer o que não sabe e passar para humano. Bot que insiste queima mais cliente que secretária eletrônica.")),
        ("convite", dict(chapeu="Aplicar no seu", titulo="Esse roteiro,<br>no <em>seu</em> negócio.",
                         corpo="A gente escreve as seis respostas junto com você e sobe o fluxo. Costuma levar menos tempo do que você imagina.",
                         botao="Chamar no WhatsApp", selo="31 98294-8067")),
    ],
),

dict(
    id="08_uma_hora", data="2026-09-30", hora="09:00", tipo="reel",
    pilar="Verdade", titulo="Uma hora",
    legenda="""Uma hora. É esse o prazo.

60% dos consumidores brasileiros esperam resposta em até uma hora, independentemente do canal que usaram.

Não é exigência de cliente chato. É o padrão que o mercado inteiro já estabeleceu — porque alguém, em algum lugar, está respondendo em quatro minutos.

Faz um teste honesto essa semana: pega o seu WhatsApp comercial e mede o tempo entre a mensagem chegar e alguém responder. Mede de verdade, nas últimas vinte conversas.

Se a média passar de uma hora, o problema do seu funil não é topo. É atendimento.

Fonte: Portal Customer, Consumidor Brasileiro em Números, 2026.

#Atendimento #WhatsAppBusiness #Vendas #CalazansLumina""",
    cenas=[
        dict(t="brasa", tipo="hook", txt="<em>Uma hora.</em>"),
        dict(t="brasa", tipo="linha", txt="É esse o prazo."),
        dict(t="tinta", tipo="stat", num="60", suf="%", txt="esperam resposta em até uma hora"),
        dict(t="tinta", tipo="linha", txt="Em qualquer canal."),
        dict(t="papel", tipo="linha", txt="Não é cliente chato."),
        dict(t="papel", tipo="linha", txt="É que <em>alguém</em> responde<br>em quatro minutos."),
        dict(t="tinta", tipo="linha", txt="Mede as suas últimas<br>vinte conversas."),
        dict(t="brasa", tipo="cta", txt="Passou de uma hora?<br>O problema não é <em>topo</em>."),
    ],
),

dict(
    id="09_mito_ia", data="2026-10-01", hora="09:00", tipo="estatico",
    pilar="Verdade", titulo="Mito e verdade: IA no atendimento",
    legenda=""""Bot espanta cliente."

Espanta mesmo — quando é bot ruim. O que espanta não é a automação, é ser obrigado a falar com uma parede que não entende e não deixa sair.

O que o cliente não suporta: menu infinito, resposta genérica, e nenhuma porta para chegar num humano.

O que o cliente aceita numa boa: ser respondido na hora, responder três perguntas objetivas e receber um "já chamei alguém, te respondo em X".

A diferença entre os dois não é a tecnologia. É o projeto.

#IA #Atendimento #WhatsAppBusiness #CalazansLumina""",
    slides=[
        ("versus", dict(chapeu="Mito e verdade",
                        rot_a="O que dizem",
                        txt_a="“Bot espanta cliente.”",
                        rot_b="O que acontece",
                        txt_b="Espanta <em>bot ruim</em>.<br>Ninguém reclama de ser<br>respondido na hora.")),
    ],
),

dict(
    id="10_funil_nao_vaza", data="2026-10-02", hora="09:00", tipo="carrossel",
    pilar="Metodo", titulo="Como a gente monta um funil que não vaza",
    legenda="""Funil que vaza não dá erro. Ele só entrega menos, e você acha que é o mercado.

Esse carrossel é o método que a gente aplica em todo projeto de GoHighLevel, na ordem em que aplica. A ordem importa mais que as ferramentas — a maioria dos funis quebrados que eu abro tem todas as peças certas montadas na sequência errada.

Sete etapas. Nenhuma delas é "anúncio". Anúncio entra depois que o cano para de furar, senão você paga para vazar mais rápido.

Se quiser, eu abro o seu e te digo em qual das sete está o buraco. Sem compromisso e sem apresentação de slides.

#FunilDeVendas #GoHighLevel #CRM #AutomacaoDeVendas #CalazansLumina""",
    slides=[
        ("capa", dict(chapeu="Método da casa", edicao="04",
                      titulo="Como a gente monta um funil que <em>não vaza</em>.",
                      promessa="Sete etapas, nesta ordem. Nenhuma delas é anúncio — anúncio entra depois que o cano para de furar.")),
        ("passo", dict(n=1, rotulo="Etapa", titulo="Achar o <em>furo</em>.",
                       corpo="Antes de construir, medir onde o lead some hoje. Quase sempre é entre a mensagem chegar e alguém responder.")),
        ("passo", dict(n=2, rotulo="Etapa", titulo="Um <em>destino</em> só.",
                       corpo="Todo canal aponta para o mesmo lugar. Lead espalhado em quatro caixas de entrada é lead que ninguém é dono.")),
        ("passo", dict(n=3, rotulo="Etapa", titulo="Resposta <em>imediata</em>.",
                       corpo="Automática, curta e honesta. Confirmar que chegou já segura a pessoa enquanto um humano não entra.")),
        ("passo", dict(n=4, rotulo="Etapa", titulo="<em>Qualificar</em> antes de falar.",
                       corpo="Três perguntas que definem se é seu cliente. Você entra na conversa já sabendo se vale a sua hora.")),
        ("passo", dict(n=5, rotulo="Etapa", titulo="<em>Etiqueta</em> e estágio.",
                       corpo="Cada lead com um nome e um lugar no pipeline. Sem isso não existe follow-up, existe memória — e memória falha.")),
        ("passo", dict(n=6, rotulo="Etapa", titulo="O <em>retorno</em> programado.",
                       corpo="A maior parte do dinheiro está em quem disse “depois eu vejo”. Depois é uma data no sistema, não uma intenção.")),
        ("passo", dict(n=7, rotulo="Etapa", titulo="Fechar o <em>ciclo</em>.",
                       corpo="Cliente atendido vira pedido de avaliação. A reputação alimenta o topo do funil e o funil recomeça sozinho.")),
        ("convite", dict(chapeu="Seu funil", titulo="Em qual das sete<br>está o <em>seu buraco</em>?",
                         corpo="Manda que eu abro e te digo. Sem compromisso e sem apresentação de slides.",
                         botao="Chamar no WhatsApp", selo="31 98294-8067")),
    ],
),

# ═══════════════════════════ SEMANA 3 — PROVA ════════════════════════════

dict(
    id="11_358_88mil", data="2026-10-05", hora="09:00", tipo="reel",
    pilar="Prova", titulo="De 358 para 88.103",
    legenda="""358 impressões por mês. Quatro meses depois: 88.103.

RS Development Group, Massachusetts. Quando o projeto começou, o site tinha uma página indexada e três buscas com clique — todas com o nome da empresa. Ou seja: só achava quem já conhecia.

O que foi feito: site reconstruído com arquitetura programática de SEO local, serviço por cidade, cobrindo a Grande Boston inteira. Mais de 100 páginas com conteúdo real por região, interlink hub-and-spoke e schema completo.

Números do período: +24.500% de impressões, +1.092% de cliques, 100+ páginas indexadas, 8 leads orgânicos.

Zero anúncio. Nem um centavo.

Isso não é o que acontece em todo projeto, e eu não vou fingir que é. É o que aconteceu nesse, e está publicado com print do Search Console no nosso site.

Caso completo em calazanslumina.com.br/cases

#SEO #SEOLocal #SEOProgramatico #MarketingDigital #CalazansLumina""",
    cenas=[
        dict(t="tinta", tipo="hook", txt="<em>358</em> impressões<br>por mês."),
        dict(t="tinta", tipo="linha", txt="Uma página indexada."),
        dict(t="tinta", tipo="linha", txt="Três buscas com clique —<br>todas com o nome da empresa."),
        dict(t="papel", tipo="linha", txt="Só achava<br>quem já <em>conhecia</em>."),
        dict(t="papel", tipo="linha", txt="Quatro meses depois:"),
        dict(t="brasa", tipo="stat", num="88.103", suf="", txt="impressões por mês"),
        dict(t="tinta", tipo="linha", txt="100+ páginas.<br>+1.092% de cliques."),
        dict(t="tinta", tipo="linha", txt="<em>Zero</em> anúncio."),
        dict(t="brasa", tipo="cta", txt="A busca já existia.<br>O site é que não <em>estava lá</em>."),
    ],
),

dict(
    id="12_case_rs", data="2026-10-06", hora="09:00", tipo="carrossel",
    pilar="Prova", titulo="O caso RS Development, número por número",
    legenda="""Ontem eu contei o resultado. Hoje eu mostro como.

A RS Development Group dependia 100% de indicação. Não aparecia para nenhuma busca de intenção comercial na própria região — nem "deck builder", nem "porch contractor". Tinha uma página indexada.

O que a gente construiu:
· site em Next.js de alta performance
· 100+ páginas de serviço × cidade cobrindo a Grande Boston
· conteúdo real por região, não texto trocado com find-and-replace
· cluster de blog e interlink hub-and-spoke
· JSON-LD completo (LocalBusiness, Service, FAQ)
· otimização pensada para AI Overviews

Quatro meses: de 358 para 88.103 impressões/mês. +24.500% de impressões, +1.092% de cliques, 8 leads orgânicos. Tudo orgânico.

A parte que eu mais gosto desse caso é a menos glamourosa: cada uma das 100 páginas precisava ter motivo para existir. Página de cidade sem conteúdo próprio o Google trata como lixo — e com razão.

Caso completo, com prints do Search Console, em calazanslumina.com.br/cases

#SEO #SEOProgramatico #NextJS #SEOLocal #CalazansLumina""",
    slides=[
        ("capa", dict(chapeu="Caso real", edicao="05",
                      titulo="100 páginas.<br>Quatro meses.<br><em>Zero anúncio.</em>",
                      promessa="RS Development Group, Grande Boston. Como se constrói alcance orgânico do zero — e o que quase ninguém faz.")),
        ("prova", dict(cliente="RS Development Group", categoria="General Contractor · MA",
                       cifra="+24.500%", rotulo="impressões por mês, em 4 meses",
                       frase="De 358 para 88.103. O negócio dependia 100% de indicação.",
                       metricas=[("+1.092%", "Cliques"), ("100+", "Páginas"),
                                 ("8", "Leads orgânicos"), ("0", "Em anúncio")])),
        ("passo", dict(n=1, rotulo="O que foi feito", titulo="Serviço <em>vezes</em> cidade.",
                       corpo="Arquitetura programática de SEO local: cada serviço em cada cidade da região vira uma página com endereço próprio na busca.")),
        ("passo", dict(n=2, rotulo="O que foi feito", titulo="Conteúdo <em>real</em> por região.",
                       corpo="Página de cidade sem conteúdo próprio o Google trata como lixo — e com razão. Cada uma precisava ter motivo para existir.")),
        ("passo", dict(n=3, rotulo="O que foi feito", titulo="Estrutura que o robô <em>lê</em>.",
                       corpo="Interlink hub-and-spoke, JSON-LD de LocalBusiness, Service e FAQ, e formato pensado para aparecer em resposta de IA.")),
        ("citacao", dict(chapeu="A parte sem glamour",
                         texto="A maior parte do trabalho não apareceu em lugar nenhum. Foi decidir o que cada página tinha a dizer.",
                         autor="Rhaideline Calazans")),
        ("convite", dict(chapeu="O seu caso", titulo="Quantas páginas<br>o seu site <em>tem</em> hoje?",
                         corpo="E quantas delas aparecem para alguém que ainda não sabe o seu nome? Eu levanto isso e te mando.",
                         botao="Pedir o levantamento", selo="calazanslumina.com.br")),
    ],
),

dict(
    id="13_bastidor", data="2026-10-07", hora="09:00", tipo="estatico",
    pilar="Verdade", titulo="Bastidor — o trabalho que não aparece",
    legenda="""Ninguém contrata agência para ganhar arquivo bonito.

A parte do trabalho que realmente decide o resultado quase nunca é a que dá print: é escolher o que cada página tem a dizer, decidir quais três perguntas o bot vai fazer, definir em que momento o lead muda de estágio.

Decisão não rende post. Mas é o que separa um projeto que funciona de um projeto que ficou lindo.

Quando você for contratar alguém — eu ou qualquer outro — pergunta menos sobre ferramenta e mais sobre decisão. As ferramentas são as mesmas para todo mundo.

#MarketingDigital #Bastidor #CalazansLumina""",
    slides=[
        ("citacao", dict(chapeu="Bastidor",
                         texto="Ninguém contrata agência para ganhar arquivo bonito. A parte que decide o resultado é a que não dá print.",
                         autor="Rhaideline Calazans · Calazans Lumina")),
    ],
),

dict(
    id="14_site_rapido", data="2026-10-08", hora="09:00", tipo="reel",
    pilar="Erro", titulo="Site bonito não vende. Site que abre, vende.",
    legenda="""O site mais bonito que você já fez pode estar te custando cliente.

Não é exagero estético: é que a pessoa que chega pelo celular, no 4G, na rua, esperando o elevador, não espera. Ela volta.

E o Google sabe disso. Velocidade é sinal de ranqueamento há anos — o site lento não só perde quem chegou, como aparece menos para quem ia chegar.

No caso da Wolf's Siding, PageSpeed 100/100 foi parte do mesmo ciclo que tirou o site da terceira página. Não foi o único fator. Mas nenhum dos outros funcionaria em cima de um site que demora.

Teste grátis, leva 30 segundos: joga o endereço do seu site no PageSpeed Insights do Google. Se o número de celular estiver abaixo de 50, você tem um problema que custa dinheiro hoje.

#PageSpeed #SEO #Sites #MarketingDigital #CalazansLumina""",
    cenas=[
        dict(t="papel", tipo="hook", txt="Site bonito<br>não <em>vende</em>."),
        dict(t="papel", tipo="linha", txt="Site que abre, vende."),
        dict(t="tinta", tipo="linha", txt="Celular. 4G na rua.<br>Esperando o elevador."),
        dict(t="tinta", tipo="linha", txt="Ela não espera.<br>Ela <em>volta</em>."),
        dict(t="brasa", tipo="linha", txt="E o Google sabe disso."),
        dict(t="brasa", tipo="linha", txt="Site lento aparece <em>menos</em>."),
        dict(t="tinta", tipo="stat", num="100", suf="/100", txt="PageSpeed no caso Wolf's Siding"),
        dict(t="papel", tipo="cta", txt="Testa o seu.<br>Leva <em>30 segundos</em>."),
    ],
),

dict(
    id="15_checklist_site", data="2026-10-09", hora="09:00", tipo="carrossel",
    pilar="Erro", titulo="Checklist: seu site está perdendo venda?",
    legenda="""Sete perguntas. Responde honestamente, sem defender o site.

Se você travou em três ou mais, não é o seu texto que está fraco e não é o mercado que está difícil. É estrutura.

A boa notícia é que estrutura é a parte mais fácil de arrumar — é trabalho conhecido, com começo e fim, diferente de "melhorar o conteúdo", que não termina nunca.

Salva o carrossel e passa item por item com o seu site aberto do lado. Se quiser, manda o endereço que eu faço isso com você.

#Sites #ConversaoDeVendas #SEO #MarketingDigital #CalazansLumina""",
    slides=[
        ("capa", dict(chapeu="Diagnóstico", edicao="06",
                      titulo="Seu site está<br><em>perdendo</em> venda?",
                      promessa="Sete perguntas. Responde sem defender o site. Travou em três, é estrutura — não é o seu texto.")),
        ("lista", dict(chapeu="Passa item por item",
                       titulo="As sete <em>perguntas</em>.",
                       itens=[
                           "Abre em menos de 3 segundos no celular?",
                           "Dá para falar com você sem rolar a página?",
                           "Tem preço, faixa de preço ou “a partir de”?",
                           "Tem prova — foto de obra, avaliação, caso?",
                           "Aparece para quem não sabe o seu nome?",
                           "Tem página para cada serviço que você vende?",
                           "Alguém responde quando o formulário chega?",
                       ],
                       nota="Três “não” já explicam o mês fraco.")),
        ("erro", dict(n=1, titulo="Sem <em>preço</em> nenhum.",
                      corpo="Medo de assustar. O efeito real é filtrar errado: quem não tem orçamento chama mesmo assim e ocupa a sua agenda.",
                      custo="Você gasta hora com quem nunca ia fechar e perde quem só queria confirmar a faixa.")),
        ("erro", dict(n=2, titulo="Nenhuma <em>prova</em>.",
                      corpo="Adjetivo não convence ninguém. Foto do serviço feito, avaliação com nome, número de caso — isso convence.",
                      custo="A pessoa sai para procurar prova em outro lugar. E fecha onde encontrou.")),
        ("erro", dict(n=3, titulo="Uma página para <em>tudo</em>.",
                      corpo="Um site só, com todos os serviços na mesma página, não tem endereço para o Google mandar ninguém.",
                      custo="Você compete por uma busca genérica em vez de ganhar dez buscas específicas.")),
        ("convite", dict(chapeu="Sem custo", titulo="Manda o<br><em>endereço</em>.",
                         corpo="Eu passo as sete perguntas no seu site e te devolvo o que está travando, por ordem de impacto.",
                         botao="Mandar meu site", selo="Resposta em 24h")),
    ],
),

# ═══════════════════════════ SEMANA 4 — AGIR ═════════════════════════════

dict(
    id="16_quantos_perdeu", data="2026-10-12", hora="09:00", tipo="reel",
    pilar="Verdade", titulo="Quantos orçamentos você perdeu esse mês sem saber?",
    legenda="""Essa é a pergunta mais desconfortável que eu faço numa primeira conversa.

Não "quantos você fechou". Quantos você perdeu sem nunca ficar sabendo que existiram.

A mensagem que chegou de madrugada e ficou sem resposta. O formulário que caiu numa caixa de e-mail que ninguém abre. A ligação perdida que ninguém retornou. A pessoa que buscou seu serviço no Google, não te achou, e fechou com outro.

Nenhum desses aparece no seu relatório. Eles não existem em lugar nenhum — por isso doem pouco e custam muito.

O primeiro trabalho de qualquer projeto sério não é vender mais. É medir o que já está entrando e sumindo.

Se você não tem esse número hoje, é o único que vale a pena levantar essa semana.

#Vendas #CRM #Atendimento #MarketingDigital #CalazansLumina""",
    cenas=[
        dict(t="tinta", tipo="hook", txt="Quantos orçamentos<br>você perdeu <em>sem saber</em>?"),
        dict(t="tinta", tipo="linha", txt="Não quantos você fechou."),
        dict(t="papel", tipo="linha", txt="A mensagem de madrugada."),
        dict(t="papel", tipo="linha", txt="O formulário na caixa<br>que ninguém abre."),
        dict(t="papel", tipo="linha", txt="A ligação não retornada."),
        dict(t="brasa", tipo="linha", txt="Nenhum aparece<br>no seu <em>relatório</em>."),
        dict(t="brasa", tipo="linha", txt="Doem pouco.<br>Custam muito."),
        dict(t="tinta", tipo="cta", txt="Esse é o número<br>a levantar <em>essa semana</em>."),
    ],
),

dict(
    id="17_primeiro_mes", data="2026-10-13", hora="09:00", tipo="carrossel",
    pilar="Metodo", titulo="O que a gente faz no primeiro mês",
    legenda="""Transparência de processo, porque contratar agência costuma ser comprar caixa fechada.

Esse é o primeiro mês, de verdade, na ordem em que acontece. Sem "imersão de alinhamento estratégico" — nome bonito para reunião sem entrega.

Semana 1: medir. O que entra hoje, por onde, e onde some.
Semana 2: estancar. Arrumar o vazamento maior antes de construir qualquer coisa nova.
Semana 3: construir. Site, fluxo ou perfil — o que o diagnóstico apontou.
Semana 4: entregar funcionando e te ensinar a mexer.

Repara que "campanha" não aparece. Anúncio entra quando o que recebe o clique já está de pé. Antes disso é pagar para vazar mais rápido.

E sim: no fim do primeiro mês você sabe mexer. Cliente refém não é modelo de negócio, é sintoma.

#MarketingDigital #Processo #GoHighLevel #CalazansLumina""",
    slides=[
        ("capa", dict(chapeu="Sem caixa fechada", edicao="07",
                      titulo="O que a gente faz no <em>primeiro mês</em>.",
                      promessa="Na ordem real. Sem “imersão de alinhamento estratégico” — nome bonito para reunião sem entrega.")),
        ("agenda", dict(chapeu="As quatro semanas",
                        titulo="Quatro semanas,<br>quatro <em>entregas</em>.",
                        blocos=[
                            ("Semana 1", "Medir", "O que entra hoje, por onde chega e em que ponto some."),
                            ("Semana 2", "Estancar", "Arrumar o vazamento maior antes de construir qualquer coisa nova."),
                            ("Semana 3", "Construir", "Site, fluxo ou perfil — o que o diagnóstico apontou, não o que está na moda."),
                            ("Semana 4", "Entregar", "Funcionando, documentado, e com você sabendo mexer."),
                        ])),
        ("passo", dict(n=1, rotulo="Semana 1", titulo="Medir <em>antes</em> de opinar.",
                       corpo="Sem número inicial não existe resultado depois, existe sensação. E sensação todo mundo tem de graça.")),
        ("passo", dict(n=2, rotulo="Semana 2", titulo="Estancar o <em>maior</em> furo.",
                       corpo="Um de cada vez, o maior primeiro. Projeto que tenta arrumar tudo junto não termina nada.")),
        ("manifesto", dict(chapeu="O que não aparece",
                           titulo="Repara que<br><em>campanha</em> não entra.",
                           lead="Anúncio entra quando o que recebe o clique já está de pé. Antes disso é pagar para vazar mais rápido.",
                           tamanho="m")),
        ("convite", dict(chapeu="Começar", titulo="A semana 1<br>é <em>de graça</em>.",
                         corpo="O diagnóstico inicial eu faço e te mando, decida você contratar ou não. Você fica com o documento de qualquer jeito.",
                         botao="Pedir o diagnóstico", selo="31 98294-8067")),
    ],
),

dict(
    id="18_reputacao", data="2026-10-14", hora="09:00", tipo="reel",
    pilar="Metodo", titulo="Reputação não é sorte",
    legenda="""Cinco estrelas não acontecem. São pedidas.

O cliente satisfeito não avalia sozinho — ele já foi embora feliz e pensando em outra coisa. Quem avalia sozinho é o insatisfeito, e esse escreve rápido.

Por isso perfil sem processo de avaliação tende a piorar com o tempo mesmo com o serviço bom. Não é azar. É estatística.

O ciclo que a gente monta tem quatro peças, e é o mesmo em clínica ou em construtora:
· pedido automático depois do serviço entregue
· caminho fácil e curto até o Google
· recuperação de feedback ruim antes de virar review
· resposta em toda avaliação, boa ou não

Na JH Painting isso virou reputação 5.0 no Google. Na Fisio & Movimento, um ciclo com quatro modelos de mensagem rodando sozinho.

Nenhum dos dois pediu sorte.

#Reputacao #GoogleMeuNegocio #Avaliacoes #GoHighLevel #CalazansLumina""",
    cenas=[
        dict(t="papel", tipo="hook", txt="Cinco estrelas<br>não <em>acontecem</em>."),
        dict(t="papel", tipo="linha", txt="São pedidas."),
        dict(t="tinta", tipo="linha", txt="O cliente satisfeito<br>já foi embora feliz."),
        dict(t="tinta", tipo="linha", txt="Quem avalia sozinho<br>é o <em>insatisfeito</em>."),
        dict(t="brasa", tipo="linha", txt="Perfil sem processo<br>piora com o tempo."),
        dict(t="brasa", tipo="linha", txt="Não é azar.<br>É <em>estatística</em>."),
        dict(t="tinta", tipo="stat", num="5.0", suf="★", txt="reputação no Google — JH Painting Services"),
        dict(t="papel", tipo="cta", txt="Ninguém ali<br>pediu <em>sorte</em>."),
    ],
),

dict(
    id="19_gmn_hoje", data="2026-10-15", hora="09:00", tipo="carrossel",
    pilar="Metodo", titulo="Google Meu Negócio: o que dá para fazer hoje",
    legenda="""Sem contratar ninguém, sem pagar nada, numa tarde.

52% das descobertas de produto no Brasil acontecem na busca do Google, e 64% dos brasileiros pensam no Google primeiro na hora de comprar online. O seu perfil é a sua vitrine nessa busca — e ele é de graça.

Os seis itens do carrossel são os que mais movem o ponteiro, na ordem. Faz de cima para baixo.

O item 5 é o que quase ninguém faz: o Google Meu Negócio tem campo de publicação, igual rede social, e quase nenhum negócio local usa. Quem usa aparece com conteúdo próprio dentro do resultado de busca.

Salva, faz hoje, me conta depois.

Fontes: Portal Customer, Consumidor Brasileiro em Números, 2026; Portal Making Of, 2026.

#GoogleMeuNegocio #SEOLocal #NegocioLocal #CalazansLumina""",
    slides=[
        ("capa", dict(chapeu="Faça hoje", edicao="08",
                      titulo="Google Meu Negócio:<br>o que dá para fazer <em>hoje</em>.",
                      promessa="Sem contratar ninguém, sem pagar nada, numa tarde. Seis itens, na ordem que move o ponteiro.")),
        ("numero", dict(chapeu="Por que importa", num="52", sufixo="%",
                        frase="das descobertas de produto no Brasil vêm da <em>busca do Google</em>.",
                        fonte="Portal Customer, Consumidor Brasileiro em Números, 2026")),
        ("lista", dict(chapeu="Na ordem", titulo="Os seis <em>itens</em>.",
                       itens=[
                           "Categoria principal exata — e as secundárias",
                           "Serviços cadastrados um a um, com descrição",
                           "Cinco fotos novas, tiradas por você, desta semana",
                           "Responder toda avaliação que está sem resposta",
                           "Publicar um post no perfil (o campo existe)",
                           "Horário, feriado e link de WhatsApp conferidos",
                       ],
                       nota="De cima para baixo. O item 5 é o que quase ninguém faz.")),
        ("passo", dict(n=5, rotulo="O item esquecido", titulo="O perfil tem<br><em>campo de post</em>.",
                       corpo="Igual rede social, dentro do resultado de busca. Quase nenhum negócio local usa. Quem usa ocupa o espaço sozinho.")),
        ("erro", dict(n=1, titulo="Foto de <em>banco de imagem</em>.",
                      corpo="A pessoa quer ver a sua loja, a sua obra, a sua equipe. Foto de estoque diz que não há nada real para mostrar.",
                      custo="Perfil com foto genérica converte menos que perfil com foto de celular tirada por você.")),
        ("convite", dict(chapeu="Se travar", titulo="Faz hoje.<br>Me conta <em>depois</em>.",
                         corpo="Se empacar em algum item, manda print que eu te respondo. Não precisa ser cliente para isso.",
                         botao="Chamar no WhatsApp", selo="31 98294-8067")),
    ],
),

dict(
    id="20_convite_auditoria", data="2026-10-16", hora="09:00", tipo="estatico",
    pilar="Convite", titulo="Convite — diagnóstico sem custo",
    legenda="""Faz um mês que eu publico método aqui. Hoje é o convite.

Eu faço um diagnóstico do seu negócio digital sem cobrar: onde você aparece hoje na busca, qual o tempo real de resposta do seu atendimento, o que está travando o seu site e por onde os leads estão sumindo.

Você recebe o documento e decide o que fazer com ele. Se quiser contratar, ótimo. Se quiser executar sozinho, o documento serve igual — está escrito para ser entendido, não para te deixar dependente.

Não tem contagem regressiva, não tem "últimas vagas" e não tem preço que sobe amanhã. Tem uma agenda real, que enche e esvazia.

Manda "diagnóstico" no WhatsApp que eu começo.

📲 31 98294-8067
🌐 calazanslumina.com.br

#MarketingDigital #Diagnostico #CalazansLumina""",
    slides=[
        ("convite", dict(chapeu="Convite", titulo="Eu olho o seu.<br>E te <em>digo</em>.",
                         corpo="Onde você aparece hoje, quanto demora o seu atendimento, o que trava o seu site e por onde o lead some. Você fica com o documento, contratando ou não.",
                         botao="Mandar “diagnóstico”", selo="31 98294-8067")),
    ],
),

# ═══════════════════════════ SEMANA 5 — FECHO ════════════════════════════

dict(
    id="21_nao_e_magica", data="2026-10-19", hora="09:00", tipo="reel",
    pilar="Verdade", titulo="Não é mágica. É manutenção.",
    legenda="""Um mês publicando aqui e nenhum post prometeu resultado. Isso foi de propósito.

O que eu mostrei foram casos com número publicado e método com ordem de execução. Nenhuma fórmula, nenhum "segredo que as agências escondem", nenhum funil de sete dígitos.

Porque o trabalho é esse: medir, estancar, construir, manter. Repetir. Não é bonito de vender e é o que funciona.

Quem promete resultado em prazo fixo sem olhar o seu negócio está vendendo sorte com nota fiscal.

Se um dia eu prometer, desconfia de mim também.

#MarketingDigital #CalazansLumina""",
    cenas=[
        dict(t="tinta", tipo="hook", txt="Não é <em>mágica</em>."),
        dict(t="tinta", tipo="linha", txt="É manutenção."),
        dict(t="papel", tipo="linha", txt="Medir."),
        dict(t="papel", tipo="linha", txt="Estancar."),
        dict(t="papel", tipo="linha", txt="Construir."),
        dict(t="papel", tipo="linha", txt="Manter. <em>Repetir.</em>"),
        dict(t="brasa", tipo="linha", txt="Quem promete prazo fixo<br>sem olhar o seu negócio"),
        dict(t="brasa", tipo="linha", txt="vende <em>sorte</em><br>com nota fiscal."),
        dict(t="tinta", tipo="cta", txt="Se eu prometer,<br>desconfia de <em>mim</em> também."),
    ],
),

dict(
    id="22_o_que_nao_fazemos", data="2026-10-20", hora="09:00", tipo="carrossel",
    pilar="Convite", titulo="O que a gente não faz",
    legenda="""Post de posicionamento, e por isso o mais honesto do mês.

Lista de serviço todo mundo tem. Lista do que a agência se recusa a fazer é mais rara — e diz muito mais sobre com quem você vai trabalhar.

São seis recusas. Cada uma já me custou contrato, e eu manteria todas.

A última é a que mais gera desconforto em reunião: a gente não segura acesso de cliente. Site, domínio, CRM, perfil — tudo fica no nome de quem paga. Se um dia você quiser sair, sai levando tudo, sem pedir nada a ninguém.

Isso não é generosidade. É o único arranjo em que o meu trabalho precisa se provar todo mês.

#MarketingDigital #Posicionamento #CalazansLumina""",
    slides=[
        ("capa", dict(chapeu="Posicionamento", edicao="09",
                      titulo="O que a gente<br><em>não</em> faz.",
                      promessa="Seis recusas. Cada uma já custou contrato — e eu manteria todas as seis.")),
        ("lista", dict(chapeu="As seis recusas", titulo="Não <em>fazemos</em>.",
                       itens=[
                           "Prometer número de leads em prazo fixo",
                           "Contagem regressiva falsa e vaga que não acaba",
                           "Comprar seguidor, curtida ou avaliação",
                           "Entregar relatório de métrica que não vira decisão",
                           "Copiar o site do concorrente trocando as cores",
                           "Segurar o acesso do cliente como garantia",
                       ])),
        ("erro", dict(n=1, titulo="Prometer <em>número</em> em prazo fixo.",
                      corpo="Quem promete resultado sem olhar o seu negócio está vendendo sorte com nota fiscal. Eu mostro caso, não garantia.",
                      custo="Pra você: contrato caro pago adiantado contra uma promessa que ninguém consegue cumprir.")),
        ("erro", dict(n=2, titulo="Comprar <em>avaliação</em>.",
                      corpo="Review comprada é infração de política do Google e some numa varredura. O perfil volta pior do que estava.",
                      custo="Risco de suspensão do perfil inteiro — e aí você perde também as avaliações verdadeiras.")),
        ("manifesto", dict(chapeu="A recusa mais desconfortável",
                           titulo="O acesso é<br><em>seu</em>. Sempre.",
                           lead="Site, domínio, CRM e perfil ficam no nome de quem paga. Se quiser sair, sai levando tudo, sem pedir nada a ninguém.",
                           tamanho="m")),
        ("convite", dict(chapeu="Trabalhar junto", titulo="Se isso fizer<br><em>sentido</em> pra você",
                         corpo="a conversa começa com um diagnóstico sem custo. Sem apresentação, sem proposta de trinta páginas.",
                         botao="Chamar no WhatsApp", selo="calazanslumina.com.br")),
    ],
),

]


def resumo():
    from collections import Counter
    c = Counter(p["tipo"] for p in CALENDARIO)
    slides = sum(len(p.get("slides", [])) for p in CALENDARIO)
    cenas = sum(len(p.get("cenas", [])) for p in CALENDARIO)
    return (f"{len(CALENDARIO)} publicações · {c['carrossel']} carrosséis, "
            f"{c['reel']} reels, {c['estatico']} estáticos · "
            f"{slides} slides · {cenas} cenas de reel")


if __name__ == "__main__":
    print(resumo())
    for p in CALENDARIO:
        n = len(p.get("slides") or p.get("cenas") or [])
        print(f"  {p['data']} {p['hora']}  {p['tipo']:<9} {p['pilar']:<8} "
              f"{n:>2}  {p['titulo']}")
