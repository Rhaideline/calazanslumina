#!/usr/bin/env python3
"""Ebook: IA para Marketing Digital — versao leiga e explicativa"""
from fpdf import FPDF
import os

IMG = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'ebook-imgs')

class E(FPDF):
    def __init__(self):
        super().__init__('P','mm','A4')
        self.set_auto_page_break(True, 25)
        self.dk=(26,26,46); self.mt=(78,205,196); self.wh=(255,255,255)
        self.gr=(160,160,180); self.lb=(245,245,250)

    def cover(self):
        self.add_page()
        self.set_fill_color(*self.dk); self.rect(0,0,210,297,'F')
        self.set_fill_color(*self.mt); self.rect(0,0,210,6,'F')
        self.set_y(70)
        self.set_font('Helvetica','B',44); self.set_text_color(*self.wh)
        self.cell(0,18,'IA para Marketing',new_x='LMARGIN',new_y='NEXT',align='C')
        self.cell(0,18,'Digital',new_x='LMARGIN',new_y='NEXT',align='C')
        self.set_fill_color(*self.mt); self.rect(75,self.get_y()+5,60,3,'F'); self.ln(15)
        self.set_font('Helvetica','',18); self.set_text_color(*self.mt)
        self.cell(0,10,'Como Usar o Claude para Criar',new_x='LMARGIN',new_y='NEXT',align='C')
        self.cell(0,10,'Sites Profissionais',new_x='LMARGIN',new_y='NEXT',align='C')
        self.ln(8)
        self.set_font('Helvetica','',13); self.set_text_color(*self.gr)
        self.cell(0,7,'Guia COMPLETO para iniciantes',new_x='LMARGIN',new_y='NEXT',align='C')
        self.cell(0,7,'Voce NAO precisa saber programar',new_x='LMARGIN',new_y='NEXT',align='C')
        self.ln(25)
        self.set_font('Helvetica','',14); self.set_text_color(*self.gr)
        self.cell(0,8,'Por Rhaideline Calazans',new_x='LMARGIN',new_y='NEXT',align='C')
        self.set_font('Helvetica','B',12); self.set_text_color(*self.mt)
        self.cell(0,8,'Calazans Lumina',new_x='LMARGIN',new_y='NEXT',align='C')
        self.set_fill_color(*self.mt); self.rect(0,291,210,6,'F')

    def mc(self, n, title, sub=''):
        self.add_page()
        self.set_fill_color(*self.dk); self.rect(0,0,210,297,'F')
        self.set_fill_color(*self.mt); self.rect(0,0,6,297,'F')
        self.set_y(85)
        self.set_font('Helvetica','B',55); self.set_text_color(*self.mt)
        self.cell(0,22,f'{n:02d}' if n>0 else '++',new_x='LMARGIN',new_y='NEXT',align='C')
        self.set_font('Helvetica','B',22); self.set_text_color(*self.wh)
        for l in title.split('\n'): self.cell(0,11,l,new_x='LMARGIN',new_y='NEXT',align='C')
        if sub:
            self.ln(5); self.set_font('Helvetica','',13); self.set_text_color(*self.gr)
            self.multi_cell(0,7,sub,align='C')

    def cp(self):
        self.add_page()
        self.set_fill_color(*self.wh); self.rect(0,0,210,297,'F')
        self.set_fill_color(*self.mt); self.rect(0,0,210,3,'F')
        self.set_y(15)

    def ck(self, n=35):
        if self.get_y()>272-n: self.cp()

    def h2(self, t):
        self.ck(25); self.ln(5)
        self.set_font('Helvetica','B',20); self.set_text_color(*self.dk)
        self.multi_cell(0,10,t)
        self.set_fill_color(*self.mt); self.rect(15,self.get_y()+2,40,2.5,'F'); self.ln(6)

    def h3(self, t):
        self.ck(15); self.ln(3)
        self.set_font('Helvetica','B',15); self.set_text_color(*self.mt)
        self.multi_cell(0,8,t); self.ln(3)

    def p(self, t):
        self.ck(15)
        self.set_font('Helvetica','',13); self.set_text_color(50,50,60)
        self.multi_cell(0,7,t); self.ln(3)

    def b(self, t):
        self.ck(10)
        self.set_font('Helvetica','',13); self.set_text_color(50,50,60)
        self.set_x(self.get_x()+5); self.cell(6,7,'-'); self.multi_cell(160,7,t); self.ln(2)

    def code(self, t):
        lines=t.split('\n'); bh=len(lines)*6+10; self.ck(bh+5); self.ln(3)
        self.set_fill_color(35,35,55); y=self.get_y()
        self.rect(15,y,180,bh,'F'); self.set_y(y+5)
        self.set_font('Courier','',11); self.set_text_color(200,220,200)
        for l in lines: self.set_x(22); self.cell(0,6,l,new_x='LMARGIN',new_y='NEXT')
        self.ln(5)

    def tip(self, t, tipo='dica'):
        self.ck(30); self.ln(3); y=self.get_y()
        colors={'dica':(78,205,196),'alerta':(220,50,50),'info':(30,64,175)}
        bc=colors.get(tipo,colors['info'])
        bgs={'dica':(240,253,250),'alerta':(255,245,245),'info':(235,245,255)}
        self.set_fill_color(*bgs.get(tipo,bgs['info'])); self.rect(15,y,180,28,'F')
        self.set_fill_color(*bc); self.rect(15,y,3,28,'F')
        self.set_xy(22,y+3)
        self.set_font('Helvetica','B',10); self.set_text_color(*bc)
        label={'dica':'DICA','alerta':'IMPORTANTE','info':'SAIBA'}.get(tipo,'INFO')
        self.cell(0,5,label,new_x='LMARGIN',new_y='NEXT')
        self.set_x(22); self.set_font('Helvetica','',11); self.set_text_color(50,50,60)
        self.multi_cell(168,5.5,t); self.set_y(y+30); self.ln(3)

    def img(self, f, cap=''):
        self.ck(85); self.ln(3)
        path=os.path.join(IMG,f)
        if os.path.exists(path):
            self.image(path,x=20,w=170)
            if cap:
                self.ln(2); self.set_font('Helvetica','I',8); self.set_text_color(120,120,140)
                self.cell(0,4,cap,align='C',new_x='LMARGIN',new_y='NEXT')
        self.ln(3)

    def tr(self, cols, hdr=False):
        self.ck(12); w=180/len(cols)
        if hdr: self.set_fill_color(*self.dk); self.set_text_color(*self.wh); self.set_font('Helvetica','B',11)
        else: self.set_fill_color(*self.lb); self.set_text_color(50,50,60); self.set_font('Helvetica','',11)
        self.set_x(15)
        for c in cols: self.cell(w,9,str(c),border=0,fill=True,align='C')
        self.ln()

def build():
    pdf=E()

    # CAPA
    pdf.cover()

    # SUMARIO
    pdf.add_page()
    pdf.set_fill_color(*pdf.dk); pdf.rect(0,0,210,297,'F')
    pdf.set_fill_color(*pdf.mt); pdf.rect(0,0,210,4,'F')
    pdf.set_y(25)
    pdf.set_font('Helvetica','B',26); pdf.set_text_color(*pdf.mt)
    pdf.cell(0,12,'O QUE VOCE VAI APRENDER',new_x='LMARGIN',new_y='NEXT',align='C')
    pdf.ln(8)
    for n,t in [('01','O que e IA e por que muda tudo'),('02','Instalando tudo no seu computador'),('03','Criando seu primeiro site (passo a passo)'),('04','Fazendo seu site aparecer no Google'),('05','Adicionando funcoes avancadas'),('06','Resultados reais (com provas)'),('07','Textos prontos para copiar e usar'),('++','Checklist final')]:
        pdf.set_font('Helvetica','B',13); pdf.set_text_color(*pdf.mt)
        pdf.cell(20,9,n,align='R')
        pdf.set_font('Helvetica','',13); pdf.set_text_color(*pdf.wh)
        pdf.cell(0,9,f'   {t}',new_x='LMARGIN',new_y='NEXT'); pdf.ln(1)

    # ==================== MODULO 1 ====================
    pdf.mc(1,'O QUE E INTELIGENCIA\nARTIFICIAL','E por que ela muda tudo no marketing')
    pdf.cp()
    pdf.h2('Imagina o seguinte...')
    pdf.p('Voce abre o computador, digita uma frase tipo "cria um site bonito para uma empresa de pintura em Boston" e em 15 minutos... o site esta pronto. Bonito. Profissional. Funcionando.')
    pdf.p('Parece magica? Nao e. E Inteligencia Artificial.')
    pdf.p('IA e um programa de computador que aprendeu a fazer coisas que antes so humanos conseguiam: escrever textos, criar designs, programar sites, responder perguntas. E o melhor: ela faz em minutos o que um humano levaria dias.')
    pdf.img('mod1-marketing-digital.jpg','O marketing digital mudou completamente com a IA')
    pdf.tip('Voce NAO precisa saber programar para usar IA. Se voce sabe digitar no WhatsApp, voce consegue criar sites com IA. Serio.','alerta')

    pdf.h2('O que mudou no mercado')
    pdf.p('Antes (2024 e antes):')
    pdf.b('Criar um site custava R$3.000 a R$15.000')
    pdf.b('Demorava semanas ou meses')
    pdf.b('Voce dependia de um programador')
    pdf.b('Se quisesse mudar algo, pagava de novo')
    pdf.p('Agora (2026):')
    pdf.b('Voce cria um site profissional em horas')
    pdf.b('Custa apenas $20/mes (o preco da ferramenta)')
    pdf.b('Voce conversa com a IA em portugues')
    pdf.b('Muda o que quiser na hora, de graca')

    pdf.h2('O que e o Claude?')
    pdf.p('Claude e uma Inteligencia Artificial criada pela empresa Anthropic. Pense nele como um assistente super inteligente que entende o que voce pede e faz o trabalho.')
    pdf.p('Existem varias IAs no mercado: ChatGPT (da OpenAI), Gemini (do Google), Copilot (da Microsoft). Mas para CRIAR SITES, o Claude e o melhor. Por que?')
    pdf.img('tecnologia-simples.jpg','Claude: tecnologia avancada com uso simples')
    pdf.b('Ele entende pedidos longos e complexos sem se perder')
    pdf.b('O codigo que ele cria e profissional (nao e "codigo de estudante")')
    pdf.b('Ele sabe fazer sites bonitos (com cores, animacoes, layout moderno)')
    pdf.b('Ele ja inclui SEO automaticamente (SEO e o que faz seu site aparecer no Google)')

    pdf.h2('O que voce vai conseguir fazer')
    pdf.p('Ao terminar este curso, voce vai saber:')
    pdf.b('Criar sites profissionais usando IA (sem saber programar)')
    pdf.b('Publicar o site na internet de graca')
    pdf.b('Fazer o site aparecer no Google quando clientes pesquisarem')
    pdf.b('Adicionar formulario de contato, WhatsApp, chatbot automatico')
    pdf.b('Cobrar clientes R$3.000 a R$15.000 por sites que voce cria em horas')
    pdf.img('equipe-feliz.jpg','Voce pode comecar a vender sites ainda essa semana')
    pdf.tip('Se voce cobra R$5.000 por um site e leva 2 dias para fazer, esta ganhando R$2.500 por dia. Isso e R$50.000 por mes. A IA multiplica seu valor.')

    # ==================== MODULO 2 ====================
    pdf.mc(2,'INSTALANDO TUDO\nNO SEU COMPUTADOR','Em 15 minutos voce esta pronto')
    pdf.cp()
    pdf.h2('O que voce vai precisar (tudo gratis)')
    pdf.p('Antes de criar sites, precisamos instalar 5 programas no seu computador. Todos sao gratuitos e a instalacao e simples (next, next, finish).')
    pdf.img('mod2-coding-setup.jpg','Seu ambiente de trabalho - simples e organizado')

    pdf.h3('1. Node.js - O motor do site')
    pdf.p('O que e? Pense no Node.js como o "motor" que faz o site funcionar no seu computador antes de publicar na internet. Sem ele, o site nao roda.')
    pdf.p('Como instalar:')
    pdf.b('Abra o navegador e va em nodejs.org')
    pdf.b('Clique no botao verde grande escrito "LTS"')
    pdf.b('Abra o arquivo que baixou')
    pdf.b('Clique "Next" em todas as telas ate "Finish"')
    pdf.p('Como saber se instalou certo:')
    pdf.b('Aperte as teclas Windows + R ao mesmo tempo')
    pdf.b('Digite "cmd" e aperte Enter')
    pdf.b('Na tela preta que abriu, digite:')
    pdf.code('node --version')
    pdf.p('Se aparecer um numero tipo "v22.14.0", esta instalado! Se der erro, tente reiniciar o computador e repetir.')

    pdf.cp()
    pdf.h3('2. VS Code - Onde voce ve os arquivos')
    pdf.p('O que e? O VS Code e como o "Word" para codigo. E onde voce vai ver os arquivos que a IA criou. Voce NAO precisa entender o codigo - so precisa ver que esta la.')
    pdf.p('Como instalar:')
    pdf.b('Va em code.visualstudio.com')
    pdf.b('Clique em "Download"')
    pdf.b('Instale normalmente (next, next, finish)')
    pdf.tip('Depois de instalar o VS Code, instale a extensao do Claude: clique no icone de quadradinhos na barra lateral esquerda, pesquise "Claude" e clique em "Install".')

    pdf.h3('3. Git - Salva seu progresso')
    pdf.p('O que e? O Git e como um "ctrl+Z" poderoso. Ele salva cada versao do seu site. Se algo der errado, voce volta para a versao anterior.')
    pdf.p('Como instalar:')
    pdf.b('Va em git-scm.com e clique "Download"')
    pdf.b('Instale com todas as opcoes padrao')
    pdf.b('Depois, crie uma conta gratuita em github.com')
    pdf.p('O GitHub e como um "Google Drive para codigo" - seus projetos ficam salvos na nuvem.')

    pdf.cp()
    pdf.h3('4. Claude Code - A IA que cria os sites')
    pdf.p('O que e? E o Claude rodando direto no seu computador. Voce conversa com ele no terminal (aquela tela preta) e ele cria os arquivos do site.')
    pdf.p('Como instalar:')
    pdf.b('Va em claude.ai e crie uma conta')
    pdf.b('Assine o plano Pro ($20 por mes) - esse e o unico custo')
    pdf.b('Abra o VS Code, aperte Ctrl + ` (crase) para abrir o terminal')
    pdf.b('Digite esse comando e aperte Enter:')
    pdf.code('npm install -g @anthropic-ai/claude-code')
    pdf.p('Aguarde instalar (pode levar 1-2 minutos). Depois, para usar, basta digitar:')
    pdf.code('claude')
    pdf.tip('Os $20/mes do Claude se pagam com UM UNICO site vendido. Se voce cobrar R$3.000 por um site, o retorno e de 150x. E o melhor investimento que voce vai fazer.','alerta')

    pdf.h3('5. Vercel - Publica o site na internet')
    pdf.p('O que e? A Vercel e o servico que coloca seu site no ar para o mundo todo acessar. O plano gratuito e suficiente para comecar.')
    pdf.b('Va em vercel.com e clique "Sign Up"')
    pdf.b('Conecte com sua conta do GitHub')
    pdf.b('Pronto! Quando voce enviar o site para o GitHub, a Vercel publica automaticamente')

    # ==================== MODULO 3 ====================
    pdf.mc(3,'CRIANDO SEU\nPRIMEIRO SITE','O momento mais emocionante - passo a passo')
    pdf.cp()
    pdf.h2('Como pedir um site para a IA')
    pdf.p('A IA e como um funcionario muito inteligente, mas que precisa de instrucoes claras. Quanto mais detalhado voce pedir, melhor o resultado.')
    pdf.img('ideia-lampada.jpg','A qualidade do site depende da qualidade do seu pedido')

    pdf.h3('Pedido RUIM (resultado ruim):')
    pdf.code('"Cria um site para mim"')
    pdf.p('A IA nao sabe: site de que? Para quem? Com quais cores? Que paginas? O resultado vai ser generico e feio.')

    pdf.h3('Pedido BOM (resultado profissional):')
    pdf.code('"Cria um site profissional para uma\nempresa de pintura em Boston chamada\nJH Painting Services.\n\nO site precisa ter:\n- Pagina inicial com fotos de trabalho\n- Pagina de servicos (interior, exterior)\n- Formulario para pedir orcamento\n- Telefone e endereco\n\nCores: azul escuro e branco.\nEstilo: profissional e moderno."')
    pdf.p('Viu a diferenca? No segundo pedido, a IA sabe EXATAMENTE o que criar.')

    pdf.cp()
    pdf.h2('Os 7 ingredientes do pedido perfeito')
    pdf.p('Sempre inclua esses 7 itens quando pedir um site:')
    pdf.b('1. QUEM: Nome da empresa, o que faz, onde fica')
    pdf.b('2. PAGINAS: Quais paginas o site precisa ter (inicio, sobre, servicos, contato)')
    pdf.b('3. CONTEUDO: Textos, numeros, diferenciais ("10 anos de experiencia", "500 clientes")')
    pdf.b('4. CORES: Quais cores usar ("azul e branco", "vermelho e preto")')
    pdf.b('5. ESTILO: Moderno? Classico? Divertido? Serio?')
    pdf.b('6. FUNCOES: Formulario? Botao WhatsApp? Galeria de fotos?')
    pdf.b('7. SEO: "Otimize para aparecer no Google quando pesquisarem [servico] em [cidade]"')

    pdf.h2('AGORA VAI: Criando seu primeiro site')
    pdf.p('Siga cada passo. Se travar em algum, releia com calma.')
    pdf.img('mod3-website-design.jpg','Seu primeiro site profissional esta a alguns passos')

    pdf.h3('Passo 1: Crie uma pasta para o projeto')
    pdf.p('Abra o VS Code. Aperte Ctrl + ` (crase, a tecla do lado esquerdo do 1) para abrir o terminal. O terminal e aquela area escura na parte de baixo. Digite:')
    pdf.code('mkdir meu-primeiro-site\ncd meu-primeiro-site')
    pdf.p('"mkdir" cria uma pasta. "cd" entra na pasta. Simples assim.')

    pdf.h3('Passo 2: Chame o Claude')
    pdf.p('Ainda no terminal, digite:')
    pdf.code('claude')
    pdf.p('Vai aparecer uma interface do Claude. Agora voce pode conversar com ele.')

    pdf.cp()
    pdf.h3('Passo 3: Faca o pedido')
    pdf.p('Copie e cole este texto (troque os dados para o SEU cliente):')
    pdf.code('Crie um site profissional completo para uma\nempresa de limpeza em Boston chamada\n"Clean Pro Boston".\n\nPaginas:\n- Inicio (com foto de destaque, servicos,\n  depoimentos de clientes e botao de contato)\n- Sobre nos (historia da empresa, 5 anos)\n- Servicos (limpeza residencial, comercial,\n  pos-obra, com descricao de cada um)\n- Contato (formulario com nome, email,\n  telefone e mensagem)\n\nCores: azul (#1e40af) e branco\nEstilo: moderno, limpo, profissional\nO site deve funcionar bem no celular\n\nInclua SEO para "cleaning service Boston"')
    pdf.p('Aperte Enter e ESPERE. O Claude vai trabalhar de 5 a 15 minutos criando tudo. Voce vai ver linhas de texto aparecendo - e ele criando os arquivos.')
    pdf.tip('Nao feche o terminal enquanto o Claude estiver trabalhando! Deixe ele terminar. Quando ele parar e esperar sua proxima mensagem, esta pronto.','alerta')

    pdf.h3('Passo 4: Veja o resultado')
    pdf.p('Quando o Claude terminar, digite no terminal:')
    pdf.code('npm run dev')
    pdf.p('Agora abra o navegador (Chrome, por exemplo) e digite na barra de endereco:')
    pdf.code('http://localhost:3000')
    pdf.p('SEU SITE ESTA LA! Navegue pelas paginas, veja como ficou. Se quiser mudar algo, volte ao terminal do Claude e peca (em portugues mesmo):')
    pdf.code('"Muda a cor do topo para verde escuro"\n"Aumenta o tamanho do titulo"\n"Coloca um botao de WhatsApp no canto"')

    pdf.cp()
    pdf.h3('Passo 5: Publique na internet')
    pdf.p('Agora vamos colocar o site no ar para qualquer pessoa acessar. No terminal:')
    pdf.code('git init\ngit add .\ngit commit -m "meu primeiro site"')
    pdf.p('Isso "salvou" o site. Agora envie para o GitHub:')
    pdf.code('gh repo create meu-site --public --source=. --push')
    pdf.p('E finalmente, publique na Vercel:')
    pdf.code('vercel --prod')
    pdf.p('A Vercel vai te dar um link tipo "meu-site.vercel.app". PRONTO! Seu site esta na internet!')
    pdf.tip('Para colocar um dominio proprio (tipo "meusite.com.br"), basta comprar o dominio no Registro.br ou GoDaddy e configurar na Vercel. Custa cerca de R$40/ano.')

    # ==================== MODULO 4 ====================
    pdf.mc(4,'FAZENDO SEU SITE\nAPARECER NO GOOGLE','O segredo que faz clientes te encontrarem sozinhos')
    pdf.cp()
    pdf.h2('O que e SEO (explicacao simples)')
    pdf.p('SEO significa "Search Engine Optimization" - em portugues: "otimizacao para mecanismos de busca". Mas esquece o nome tecnico. SEO e basicamente:')
    pdf.p('"Fazer seu site aparecer quando alguem pesquisar no Google."')
    pdf.p('Por exemplo: se alguem digita "pintor em Boston" no Google, e o site do SEU cliente aparece nos primeiros resultados - isso e SEO funcionando.')
    pdf.img('seo-analytics.jpg','SEO: quando seu site aparece no Google sem pagar anuncio')
    pdf.p('Sem SEO, seu site e como uma loja no meio do deserto - bonita, mas ninguem sabe que existe.')
    pdf.tip('Dado REAL: Eu fiz o SEO do site RS Development Group. Em 4 meses, as impressoes (vezes que o site apareceu no Google) passaram de 358 para 88.103. Isso e um crescimento de 24.500%. E zero reais gastos em anuncio.','info')

    pdf.h2('Como pedir SEO para o Claude')
    pdf.p('A boa noticia: voce nao precisa entender SEO tecnicamente. Basta pedir para o Claude:')
    pdf.code('"Adiciona SEO completo no site.\nOtimiza para aparecer no Google\nquando pesquisarem:\n- pintor em Boston\n- painting service near me\n- house painter Massachusetts\n\nInclui:\n- Titulo e descricao em cada pagina\n- Informacoes da empresa para o Google\n- Mapa do site (sitemap)\n- Perguntas frequentes"')
    pdf.p('O Claude vai criar tudo automaticamente. Voce nao precisa entender o codigo - so precisa pedir.')

    pdf.cp()
    pdf.h2('O segredo dos milhares de impressoes: paginas por cidade')
    pdf.p('Este e o truque mais poderoso que eu uso com meus clientes. E simples de entender:')
    pdf.p('Em vez de ter UMA pagina dizendo "fazemos pintura", voce cria UMA PAGINA PARA CADA CIDADE que o cliente atende.')
    pdf.p('Exemplo:')
    pdf.b('Pagina 1: "Pintor em Boston" - otimizada para quem pesquisa pintor em Boston')
    pdf.b('Pagina 2: "Pintor em Cambridge" - otimizada para Cambridge')
    pdf.b('Pagina 3: "Pintor em Somerville" - otimizada para Somerville')
    pdf.b('... e assim por diante, para 100 cidades ou mais!')
    pdf.p('Como pedir para o Claude:')
    pdf.code('"Crie uma pagina automatica para cada\ncidade de Massachusetts. Sao 100+ cidades.\n\nCada pagina deve dizer:\n- Pintor em [Nome da Cidade], MA\n- Texto explicando o servico na cidade\n- Formulario de orcamento\n- Perguntas frequentes"')
    pdf.tip('Resultado real: O site Wolf\'s Siding saiu de 16 cliques para 129 cliques por mes (+706%) usando essa estrategia. Foram criadas 800+ paginas automaticamente.')

    pdf.h2('Aparecendo nas IAs (ChatGPT, Gemini, etc)')
    pdf.p('Alem do Google, voce tambem quer que seu site apareca quando alguem perguntar para uma IA. Por exemplo, se alguem perguntar ao ChatGPT "melhor pintor em Boston", voce quer que mencione seu cliente.')
    pdf.p('Para isso, basta pedir ao Claude:')
    pdf.code('"Cria um arquivo especial para que as IAs\n(ChatGPT, Gemini, Perplexity) encontrem\ninformacoes sobre a empresa.\n\nInclui: nome, servicos, cidade,\nperguntas frequentes e contato."')

    # ==================== MODULO 5 ====================
    pdf.mc(5,'FUNCOES AVANCADAS','WhatsApp automatico, formularios e pagamento')
    pdf.cp()
    pdf.h2('Formulario que avisa voce no celular')
    pdf.p('Quando um cliente preenche o formulario no site, voce pode receber uma notificacao no celular imediatamente. Para isso usamos o GoHighLevel (GHL) - uma plataforma de CRM.')
    pdf.img('chatbot-whatsapp.jpg','Automacoes que trabalham por voce 24 horas por dia')
    pdf.code('"Cria um formulario de contato que envia\nos dados para meu sistema.\n\nCampos: nome, email, telefone,\ntipo de servico, mensagem.\n\nQuando enviar, mostra mensagem de sucesso."')

    pdf.h2('Robo de WhatsApp (Chatbot IA)')
    pdf.p('Imagina: um cliente manda mensagem no WhatsApp as 2 da manha. Em vez de ficar sem resposta ate voce acordar, um ROBO inteligente responde, pergunta o que o cliente precisa, pega o nome, telefone e marca um orcamento. Tudo automatico.')
    pdf.p('Isso e um chatbot IA. E ele funciona 24 horas por dia, 7 dias por semana.')
    pdf.p('Exemplo REAL de conversa (do meu cliente JH Painting):')
    pdf.code('Cliente: "Oi, preciso de pintura na minha casa"\n\nRobo: "Obrigado pelo contato! Para enviar\no especialista certo - seria pintura\ninterna, externa ou outra coisa?"\n\nCliente: "Interna"\n\nRobo: "Otimo! Posso ter seu nome completo?"')
    pdf.p('O robo coleta: tipo de servico, nome, endereco, telefone e agenda. Tudo sozinho.')

    pdf.cp()
    pdf.h2('Sistema de pagamento (para vender cursos ou servicos)')
    pdf.p('Voce pode adicionar pagamento direto no site. O cliente clica no botao, paga com PIX ou cartao, e recebe acesso imediato.')
    pdf.code('"Adiciona uma pagina de cursos onde cada\ncurso tem titulo, descricao, preco e um\nbotao de compra que leva para o pagamento."')
    pdf.img('compras-online.jpg','Venda cursos, servicos e produtos direto pelo site')

    # ==================== MODULO 6 ====================
    pdf.mc(6,'RESULTADOS REAIS','Provas com dados do Google')
    pdf.cp()
    pdf.h2('Esses numeros sao REAIS')
    pdf.p('Tudo que voce vai ver agora veio direto do Google Search Console (a ferramenta oficial do Google que mostra como seu site esta performando). Nao sao promessas - sao fatos.')
    pdf.img('mod6-results.jpg','Dados reais - nao promessas')

    pdf.h2("Case 1: Wolf's Siding (+706% cliques)")
    pdf.p('Empresa de siding (revestimento de casa) em Massachusetts.')
    pdf.p('O que eu criei: site com 800+ paginas, blog, chatbot IA, sistema telefonico automatico.')
    pdf.tr(['O que','Antes','Depois','Cresceu'],True)
    pdf.tr(['Impressoes','14.500','47.900','+230%'])
    pdf.tr(['Cliques','16','129','+706%'])
    pdf.tr(['Posicao Google','26.8','15.5','Subiu 11'])
    pdf.tr(['Leads organicos','0','18','Do zero!'])
    pdf.ln(3)
    pdf.img('wolfs-site.png',"Site Wolf's Siding - 800+ paginas criadas com IA")
    pdf.img('wolfs-sc.png','Google Search Console - crescimento real')
    pdf.img('wolfs-pagespeed.png','Nota 99/100 em performance')

    pdf.cp()
    pdf.h2('Case 2: RS Development (+24.500% impressoes)')
    pdf.p('Empresa de construcao em Massachusetts.')
    pdf.p('O que eu criei: site com 600+ paginas por cidade, blog SEO, otimizacao para IAs.')
    pdf.tr(['O que','Antes','Depois','Cresceu'],True)
    pdf.tr(['Impressoes','358','88.103','+24.500%'])
    pdf.tr(['Cliques','13','155','+1.092%'])
    pdf.tr(['Paginas no Google','1','100+','+10.000%'])
    pdf.tr(['Leads organicos','0','13','Do zero!'])
    pdf.ln(3)
    pdf.img('rs-site.png','RS Development Group - site criado com IA')
    pdf.img('rs-sc.png','Google Search Console - de 358 para 88.103 impressoes')
    pdf.p('Em novembro 2025, esse site era INVISIVEL no Google. So tinha 1 pagina. Em marco 2026, tinha 100+ paginas e recebia clientes todos os dias. Tudo organico - zero reais em anuncio.')

    pdf.cp()
    pdf.h2('Case 3: JH Painting (Chatbot IA 24/7)')
    pdf.p('Empresa de pintura em Marlborough, MA.')
    pdf.p('O que eu criei: site, chatbot IA que atende sozinho, sistema telefonico, CRM completo.')
    pdf.b('Chatbot IA respondendo clientes 24 horas por dia')
    pdf.b('Pipeline de vendas organizado (novo > contato > orcamento > fechou)')
    pdf.b('Sistema telefonico inteligente (direciona ligacao automaticamente)')
    pdf.b('5.0 estrelas no Google (20+ avaliacoes)')
    pdf.img('ghl-bot.png','Bot IA qualificando leads automaticamente dentro do GHL')

    pdf.h2('Quanto cobrar pelos sites que voce criar')
    pdf.tr(['Tipo de site','Seu tempo real','Quanto cobrar'],True)
    pdf.tr(['Simples (3 paginas)','2-4 horas','R$1.500-3.000'])
    pdf.tr(['Completo (8 paginas)','1-2 dias','R$3.000-6.000'])
    pdf.tr(['Com SEO (50+ paginas)','3-5 dias','R$5.000-10.000'])
    pdf.tr(['SEO local (200+ pags)','1-2 semanas','R$8.000-15.000'])
    pdf.tr(['Site + automacoes','2-3 semanas','R$10.000-20.000'])
    pdf.ln(3)
    pdf.tip('A conta e simples: se voce cobrar R$5.000 por um site que leva 2 dias para fazer, esta ganhando R$2.500 por dia. Isso da R$50.000 por mes trabalhando 20 dias. A IA nao tira seu emprego - ela MULTIPLICA o seu valor.')

    # ==================== MODULO 7 ====================
    pdf.mc(7,'TEXTOS PRONTOS\n(COPIE E USE)','So copiar, trocar os dados e usar')
    pdf.cp()
    pdf.img('coding-laptop.jpg','Textos prontos - e so copiar e colar')
    pdf.h2('Texto 1: Criar site completo')
    pdf.code('Crie um site profissional para [EMPRESA]\nque faz [SERVICO] em [CIDADE].\n\nPaginas: inicio, sobre, servicos,\ngaleria, contato e blog.\nCores: [COR 1] e [COR 2].\nEstilo: moderno e profissional.\nInclua SEO para "[servico] [cidade]".')

    pdf.h2('Texto 2: Criar paginas por cidade')
    pdf.code('Crie paginas automaticas para cada\ncidade de [ESTADO]. Sao 100+ cidades.\n\nCada pagina com titulo, texto unico,\nperguntas frequentes e formulario.')

    pdf.h2('Texto 3: Adicionar SEO')
    pdf.code('Adicione SEO completo no site.\nOtimize para "[servico] em [cidade]".\nInclua informacoes da empresa para Google,\nmapa do site e perguntas frequentes.')

    pdf.h2('Texto 4: Criar blog')
    pdf.code('Crie 10 artigos de blog sobre [ASSUNTO].\nCada artigo com 1500+ palavras.\nOtimize para aparecer no Google.\nInclua links para paginas de servico.')

    pdf.cp()
    pdf.h2('Texto 5: Formulario de contato')
    pdf.code('Crie formulario com: nome, email, telefone,\ntipo de servico e mensagem.\nQuando enviar, mostra mensagem de sucesso.')

    pdf.h2('Texto 6: Aparecer nas IAs')
    pdf.code('Crie arquivo especial para que ChatGPT,\nGemini e Perplexity encontrem informacoes\nsobre a empresa. Inclua nome, servicos,\ncidade, perguntas frequentes e contato.')

    pdf.h2('Texto 7: Mudar design')
    pdf.code('"Mude a cor do topo para [COR].\nAumente o titulo. Adicione secao com\nnumeros: [X] anos, [Y] clientes,\n[Z]% satisfacao."')

    pdf.h2('Texto 8: Publicar o site')
    pdf.code('git init\ngit add .\ngit commit -m "site pronto"\ngh repo create [NOME] --public --source=. --push\nvercel --prod')

    # ==================== BONUS ====================
    pdf.mc(0,'CHECKLIST FINAL','Confira tudo antes de entregar')
    pdf.cp()
    pdf.img('bonus-checklist.jpg','Confira cada item antes de entregar')
    pdf.h2('Antes de publicar, confira:')
    pdf.b('O site funciona no CELULAR? (abra pelo telefone e teste)')
    pdf.b('O formulario FUNCIONA? (preencha e veja se recebeu)')
    pdf.b('Todos os links funcionam? (clique em cada um)')
    pdf.b('O telefone e clicavel no celular? (toque e veja se liga)')
    pdf.b('Tem favicon? (aquele iconezinho pequeno na aba do navegador)')
    pdf.b('O site carrega rapido? (menos de 3 segundos)')
    pdf.b('O Google Search Console esta configurado?')
    pdf.b('O sitemap foi enviado ao Google?')
    pdf.b('O dominio proprio esta configurado?')
    pdf.b('O Google Meu Negocio esta criado?')

    pdf.h2('Seus proximos passos')
    pdf.b('1. PRATIQUE: Crie 3 sites para empresas inventadas. A pratica faz perfeito.')
    pdf.b('2. PORTFOLIO: Use esses sites como exemplos para mostrar a clientes.')
    pdf.b('3. VENDA: Procure negocios que nao tem site ou tem sites feios. Oferte.')
    pdf.b('4. AUTOMATIZE: Adicione chatbot IA e CRM para cobrar mais.')
    pdf.b('5. ESCALE: A IA cria, voce vende e atende. E a maquina de dinheiro.')
    pdf.img('grafico-crescimento.jpg','Seu crescimento comeca agora')

    # SOBRE
    pdf.add_page()
    pdf.set_fill_color(*pdf.dk); pdf.rect(0,0,210,297,'F')
    pdf.set_fill_color(*pdf.mt); pdf.rect(0,0,210,4,'F')
    pdf.set_y(70)
    pdf.set_font('Helvetica','B',22); pdf.set_text_color(*pdf.wh)
    pdf.cell(0,12,'Sobre a Autora',new_x='LMARGIN',new_y='NEXT',align='C')
    pdf.ln(8)
    pdf.set_font('Helvetica','B',18); pdf.set_text_color(*pdf.mt)
    pdf.cell(0,10,'Rhaideline Calazans',new_x='LMARGIN',new_y='NEXT',align='C')
    pdf.ln(5)
    pdf.set_font('Helvetica','',11); pdf.set_text_color(*pdf.gr)
    pdf.set_x(30)
    pdf.multi_cell(150,6,'Fundadora da Calazans Lumina. Mais de 8 anos de experiencia em marketing digital e 100+ projetos entregues. Usa Inteligencia Artificial diariamente para criar sites que aparecem na primeira pagina do Google. Seus clientes incluem empresas de construction, pintura, energia solar, HVAC e muito mais nos EUA e Brasil.',align='C')
    pdf.ln(15)
    pdf.set_text_color(*pdf.wh); pdf.set_font('Helvetica','',12)
    pdf.cell(0,7,'calazanslumina.com.br',new_x='LMARGIN',new_y='NEXT',align='C')
    pdf.cell(0,7,'WhatsApp: +55 31 98294-8067',new_x='LMARGIN',new_y='NEXT',align='C')
    pdf.cell(0,7,'Instagram: @calazanslumina',new_x='LMARGIN',new_y='NEXT',align='C')
    pdf.ln(20)
    pdf.set_font('Helvetica','',9); pdf.set_text_color(*pdf.gr)
    pdf.cell(0,7,'(c) 2026 Calazans Lumina. Todos os direitos reservados.',new_x='LMARGIN',new_y='NEXT',align='C')

    out=r'C:\Users\RHAIDELINE\Downloads\CALAZANS LUMINA\ebook-ia-marketing-sites-completo.pdf'
    pdf.output(out)
    print(f'PDF: {out}')
    print(f'Paginas: {pdf.pages_count}')

if __name__=='__main__':
    build()
