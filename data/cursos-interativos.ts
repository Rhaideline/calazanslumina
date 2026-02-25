import type { CursoInterativo } from '@/components/curso-viewer/types'

export const cursosInterativos: CursoInterativo[] = [
  {
    slug: 'chatgpt-para-idosos',
    nome: 'ChatGPT para Idosos — Curso Gratuito',
    modulos: [
      // ============================================================
      // MODULO 1 — O Que e Essa Tal de Inteligencia Artificial?
      // ============================================================
      {
        titulo: 'O Que é Essa Tal de Inteligência Artificial?',
        slides: [
          {
            type: 'content',
            title: 'O que é IA? (explicação como se fosse para um amigo)',
            body: 'Inteligência Artificial, ou IA, é como um programa de computador muito esperto que aprendeu a entender o que a gente fala e escreve. Imagine que você tem um assistente que leu milhões de livros, receitas, notícias e conversas — e agora consegue responder suas perguntas de forma educada e útil. A IA não pensa como nós, mas consegue imitar muito bem uma conversa natural. É como ter alguém disponível 24 horas por dia para te ajudar com qualquer dúvida.',
            tip: 'Não precisa ter medo da IA. Ela é apenas uma ferramenta, como o telefone ou a televisão. Você está no controle!',
          },
          {
            type: 'content',
            title: 'ChatGPT: seu novo assistente digital gratuito',
            body: 'O ChatGPT é um programa de IA criado pela empresa OpenAI. Ele funciona como uma conversa por escrito: você digita uma pergunta ou pedido, e ele responde na hora. O melhor de tudo é que a versão básica é totalmente gratuita! Você pode usar pelo celular ou pelo computador, sem precisar instalar nada. É como ter um ajudante muito paciente que nunca se cansa de responder suas perguntas.',
            tip: 'O ChatGPT é gratuito. Você não precisa pagar nada para começar a usar!',
          },
          {
            type: 'quiz',
            question: 'O que é o ChatGPT?',
            options: [
              'Um robô que anda pela sua casa',
              'Um programa de conversa por escrito que responde suas perguntas',
              'Um aplicativo de banco',
              'Um jogo de celular',
            ],
            correctIndex: 1,
            explanation: 'O ChatGPT é um programa de inteligência artificial que funciona como uma conversa por escrito. Você digita uma pergunta e ele responde na hora, de graça!',
          },
          {
            type: 'content',
            title: 'Isso é seguro? Posso confiar?',
            body: 'É normal ter dúvidas sobre coisas novas, e isso é muito saudável! O ChatGPT é seguro de usar para conversas do dia a dia, como pedir receitas, tirar dúvidas ou escrever mensagens. Porém, ele não é perfeito e pode errar às vezes, principalmente sobre informações muito recentes. O importante é nunca colocar seus dados pessoais, como senhas ou número de documentos. Pense nele como um colega inteligente, mas que precisa ser conferido de vez em quando.',
            tip: 'Regra de ouro: nunca digite senhas, CPF ou dados bancários no ChatGPT. Para o resto, pode usar sem medo!',
          },
          {
            type: 'content',
            title: 'Exemplos do dia a dia: como outras pessoas usam',
            body: 'Dona Maria, de 72 anos, usa o ChatGPT para pedir receitas com os ingredientes que tem em casa. Seu Jorge, de 68, pede para o ChatGPT explicar as notícias do jornal de forma mais simples. Dona Lúcia, de 75, escreve mensagens de aniversário lindas para os netos com a ajuda dele. Seu Antônio, de 70, usa para encontrar exercícios leves que pode fazer em casa. Essas são apenas algumas das muitas formas de usar essa ferramenta no dia a dia!',
            tip: 'Você pode usar o ChatGPT para qualquer coisa que faria a um amigo muito inteligente: pedir conselhos, tirar dúvidas, ajudar a escrever.',
          },
          {
            type: 'quiz',
            question: 'Qual das opções abaixo é algo que você NÃO deve fazer no ChatGPT?',
            options: [
              'Pedir uma receita de bolo',
              'Digitar sua senha do banco',
              'Perguntar sobre exercícios físicos',
              'Pedir para explicar uma notícia',
            ],
            correctIndex: 1,
            explanation: 'Nunca coloque informações pessoais sensíveis como senhas, CPF ou dados bancários no ChatGPT. Para receitas, exercícios e tirar dúvidas, pode usar à vontade!',
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 1',
            points: [
              'Inteligência Artificial é um programa de computador que aprendeu a entender e responder o que escrevemos',
              'O ChatGPT é gratuito e funciona como uma conversa por escrito',
              'É seguro para uso no dia a dia, mas nunca coloque dados pessoais como senhas ou CPF',
              'Muitas pessoas da sua idade já usam o ChatGPT para receitas, mensagens, dúvidas e muito mais',
              'O ChatGPT pode errar às vezes — sempre confira informações importantes',
            ],
          },
        ],
      },

      // ============================================================
      // MODULO 2 — Criando Sua Conta (Passo a Passo com Imagens)
      // ============================================================
      {
        titulo: 'Criando Sua Conta (Passo a Passo com Imagens)',
        slides: [
          {
            type: 'content',
            title: 'Abrindo o navegador e acessando o site do ChatGPT',
            body: 'Para começar, abra o navegador de internet do seu celular ou computador. Pode ser o Google Chrome, o Safari ou qualquer outro que você já use. Na barra de endereço lá em cima, digite: chat.openai.com e aperte Enter. Essa é a página oficial do ChatGPT. Quando a página carregar, você vai ver um botão escrito "Sign up" (que significa "Cadastrar-se") ou "Log in" (que significa "Entrar"). Se é sua primeira vez, clique em "Sign up".',
            tip: 'Se você usa WhatsApp no celular, já sabe usar a internet! O processo é bem parecido: abrir o navegador é como abrir o WhatsApp.',
          },
          {
            type: 'content',
            title: 'Criando sua conta com email (tela por tela)',
            body: 'Depois de clicar em "Sign up", o site vai pedir seu email. Use o mesmo email que você já usa, como o do Gmail ou Hotmail. Em seguida, escolha uma senha. A senha precisa ter pelo menos 8 letras ou números. Anote sua senha em um papel e guarde em lugar seguro! Depois, o site vai enviar um email de confirmação. Abra seu email, procure a mensagem da OpenAI e clique no link azul para confirmar. Pronto, conta criada!',
            tip: 'Anote o email e a senha que você usou em um caderninho. Assim, você nunca vai esquecer!',
          },
          {
            type: 'quiz',
            question: 'Qual é o endereço correto para acessar o ChatGPT?',
            options: [
              'www.google.com',
              'chat.openai.com',
              'www.facebook.com',
              'www.whatsapp.com',
            ],
            correctIndex: 1,
            explanation: 'O endereço oficial do ChatGPT é chat.openai.com. É lá que você cria sua conta e começa a conversar com a inteligência artificial.',
          },
          {
            type: 'content',
            title: 'Fazendo login pela primeira vez',
            body: 'Agora que você criou sua conta, vamos fazer login! Acesse novamente o site chat.openai.com e clique em "Log in". Digite o email e a senha que você cadastrou. Se tudo estiver certo, você vai entrar na tela principal do ChatGPT. Da próxima vez que acessar, seu navegador pode lembrar seus dados, então talvez nem precise digitar de novo. Se esquecer a senha, não se preocupe: tem um botão "Esqueci minha senha" que ajuda a recuperar.',
            tip: 'Se o celular perguntar "Deseja salvar a senha?", pode aceitar. Assim, na próxima vez, o login será automático!',
          },
          {
            type: 'content',
            title: 'Conhecendo a tela principal: onde escrever e onde ler',
            body: 'A tela do ChatGPT é bem simples. No centro, você vai ver um espaço grande onde aparecerão as respostas. Lá embaixo, tem uma caixa de texto onde você digita sua pergunta ou pedido. É só escrever o que quiser e apertar o botão de enviar (uma setinha). A resposta aparece logo acima, como numa conversa de WhatsApp. Do lado esquerdo, tem uma lista com suas conversas anteriores, para você voltar a elas quando quiser.',
            tip: 'A tela do ChatGPT parece com o WhatsApp: você escreve embaixo e a resposta aparece em cima. Simples assim!',
          },
          {
            type: 'quiz',
            question: 'Onde você digita sua pergunta no ChatGPT?',
            options: [
              'No canto superior direito da tela',
              'Na caixa de texto que fica na parte de baixo da tela',
              'Precisa ligar para um telefone',
              'No email',
            ],
            correctIndex: 1,
            explanation: 'Você digita sua pergunta na caixa de texto que fica na parte de baixo da tela e aperta o botão de enviar. A resposta aparece logo acima, como uma conversa!',
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 2',
            points: [
              'Acesse o ChatGPT pelo navegador no endereço chat.openai.com',
              'Para criar sua conta, você precisa de um email e uma senha de pelo menos 8 caracteres',
              'Anote email e senha em um caderninho para não esquecer',
              'O login é simples: email + senha, e o navegador pode salvar seus dados',
              'A tela funciona como o WhatsApp: escreva embaixo e a resposta aparece em cima',
            ],
          },
        ],
      },

      // ============================================================
      // MODULO 3 — Suas Primeiras Conversas com o ChatGPT
      // ============================================================
      {
        titulo: 'Suas Primeiras Conversas com o ChatGPT',
        slides: [
          {
            type: 'content',
            title: 'Como escrever uma pergunta clara',
            body: 'O segredo para ter boas respostas do ChatGPT é falar com ele como se estivesse falando com uma pessoa. Não precisa usar palavras difíceis ou comandos especiais. Por exemplo, em vez de escrever apenas "receita", escreva "Me dê uma receita fácil de bolo de cenoura com cobertura de chocolate". Quanto mais detalhes você der, melhor será a resposta. Se a resposta não ficar boa, é só pedir para ele tentar de novo ou explicar de outro jeito.',
            tip: 'Fale com o ChatGPT como falaria com um neto educado: de forma natural e sem pressa. Se não gostar da resposta, peça para ele refazer!',
          },
          {
            type: 'content',
            title: 'Pedindo uma receita com o que tem na geladeira',
            body: 'Uma das coisas mais legais do ChatGPT é pedir receitas! Você pode escrever algo como: "Tenho frango, batata, cebola e tomate na geladeira. Me sugira uma receita fácil para o almoço." O ChatGPT vai te dar uma receita completa, com ingredientes e modo de preparo passo a passo. Se quiser, pode pedir receitas sem sal, sem açúcar ou para diabéticos. Também pode pedir que a receita seja para uma pessoa só, ou para toda a família.',
            tip: 'Experimente pedir: "Me dê uma receita simples e saudável usando [os ingredientes que você tem]". Ele vai te surpreender!',
          },
          {
            type: 'content',
            title: 'Perguntando sobre um remédio ou sintoma',
            body: 'Você pode usar o ChatGPT para entender melhor sobre remédios ou sintomas. Por exemplo: "Para que serve o remédio Losartana?" ou "O que pode causar dor no joelho?". Ele vai explicar de forma clara e fácil de entender. Porém, lembre-se sempre: o ChatGPT NÃO substitui o médico. Ele pode ajudar a entender, mas qualquer decisão sobre saúde deve ser conversada com seu médico de confiança. Use como um primeiro passo para se informar.',
            tip: 'Importante: use o ChatGPT para entender, mas nunca para se medicar sozinho. Sempre confirme com seu médico!',
          },
          {
            type: 'quiz',
            question: 'Qual é a melhor forma de pedir uma receita ao ChatGPT?',
            options: [
              'Escrever apenas "comida"',
              'Dizer os ingredientes que tem e pedir uma receita fácil',
              'Mandar uma foto da geladeira',
              'Ligar para o ChatGPT pelo telefone',
            ],
            correctIndex: 1,
            explanation: 'Quanto mais detalhes você der, melhor a resposta! Dizer os ingredientes que você tem disponíveis e pedir uma receita fácil é a forma ideal.',
          },
          {
            type: 'content',
            title: 'Pedindo para explicar uma notícia de forma simples',
            body: 'Às vezes as notícias na televisão ou no jornal são difíceis de entender, com muitas palavras complicadas. Você pode copiar um trecho da notícia e pedir ao ChatGPT: "Explique essa notícia de forma simples, como se eu tivesse 10 anos." Ele vai reescrever tudo com palavras fáceis e exemplos do dia a dia. Também pode perguntar: "O que significa [tal palavra]?" e ele explica na hora. É como ter um professor particular sempre disponível.',
            tip: 'Você pode pedir: "Explique de forma bem simples" ou "Fale como se eu não soubesse nada sobre o assunto". O ChatGPT vai se adaptar!',
          },
          {
            type: 'content',
            title: 'Escrevendo uma mensagem de aniversário para alguém especial',
            body: 'Quer mandar uma mensagem bonita de aniversário pelo WhatsApp, mas está sem inspiração? O ChatGPT pode ajudar! Escreva algo como: "Escreva uma mensagem carinhosa de aniversário para minha neta de 15 anos que adora dançar." Ele vai criar uma mensagem personalizada e bonita. Você pode pedir mensagens para qualquer ocasião: Natal, Dia das Mães, agradecimento, ou até uma carta de saudade para alguém querido.',
            tip: 'Diga para quem é a mensagem e o que a pessoa gosta. Assim, o ChatGPT cria algo bem pessoal e bonito!',
          },
          {
            type: 'quiz',
            question: 'Posso confiar totalmente no ChatGPT para informações sobre saúde?',
            options: [
              'Sim, ele sabe tudo sobre remédios',
              'Não, o ChatGPT ajuda a entender mas não substitui o médico',
              'Sim, ele é formado em medicina',
              'Não, ele não sabe nada sobre saúde',
            ],
            correctIndex: 1,
            explanation: 'O ChatGPT pode ajudar a entender termos médicos e sintomas, mas ele NÃO substitui seu médico. Sempre confirme informações de saúde com um profissional.',
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 3',
            points: [
              'Fale com o ChatGPT de forma natural, como se estivesse conversando com alguém',
              'Quanto mais detalhes você der na pergunta, melhor será a resposta',
              'Use para receitas dizendo os ingredientes que tem disponível',
              'Pode perguntar sobre remédios e sintomas, mas sempre confirme com seu médico',
              'Peça para explicar notícias de forma simples e escrever mensagens para pessoas queridas',
            ],
          },
        ],
      },

      // ============================================================
      // MODULO 4 — ChatGPT no Dia a Dia
      // ============================================================
      {
        titulo: 'ChatGPT no Dia a Dia',
        slides: [
          {
            type: 'content',
            title: 'Ajuda para entender contas e documentos',
            body: 'Recebeu uma conta de luz, água ou telefone e não entendeu algum item? Você pode descrever o que está vendo para o ChatGPT e pedir que ele explique. Por exemplo: "Na minha conta de luz aparece ICMS e COSIP. O que são essas siglas?" Ele vai explicar cada item de forma clara. Também pode ajudar com documentos do banco, contratos ou até receitas médicas que estão difíceis de ler. É como ter um tradutor de "linguagem difícil" sempre à mão.',
            tip: 'Nunca envie fotos ou números de conta ao ChatGPT. Apenas descreva o que quer entender, como "o que significa ICMS na conta de luz?"',
          },
          {
            type: 'content',
            title: 'Planejando uma viagem ou passeio',
            body: 'O ChatGPT pode ser seu agente de viagem particular! Experimente perguntar: "Quero fazer um passeio de um dia saindo de São Luís. O que você sugere?" ou "Vou visitar minha filha em São Paulo e tenho 3 dias livres. O que posso conhecer?" Ele sugere lugares, explica como chegar, dá dicas de restaurantes e até ajuda a montar um roteiro dia a dia. Se você tem alguma limitação de mobilidade, pode pedir sugestões de lugares acessíveis.',
            tip: 'Diga sua cidade, quantos dias tem e se há algo especial que gosta (natureza, museus, comida). Quanto mais detalhes, melhor o roteiro!',
          },
          {
            type: 'quiz',
            question: 'Como o ChatGPT pode ajudar com contas e documentos?',
            options: [
              'Ele paga suas contas automaticamente',
              'Ele explica o significado de itens e siglas que você não entende',
              'Ele altera os valores das suas contas',
              'Ele liga para a empresa de energia',
            ],
            correctIndex: 1,
            explanation: 'O ChatGPT ajuda a entender o que significam siglas, termos e itens nas suas contas e documentos. Ele explica de forma clara e simples, mas lembre-se: nunca envie dados pessoais.',
          },
          {
            type: 'content',
            title: 'Encontrando exercícios leves para fazer em casa',
            body: 'Manter o corpo ativo é muito importante, e o ChatGPT pode ajudar a encontrar exercícios adequados para você. Experimente perguntar: "Me sugira 5 exercícios leves que posso fazer sentado na cadeira" ou "Quero exercícios de alongamento para quem tem dor nas costas." Ele vai explicar cada exercício passo a passo, dizendo quantas vezes repetir e por quanto tempo. Também pode pedir exercícios para melhorar o equilíbrio, a memória ou para relaxar antes de dormir.',
            tip: 'Sempre avise o ChatGPT sobre suas limitações físicas. Exemplo: "Tenho problema no joelho, quero exercícios sem impacto." E confirme com seu médico!',
          },
          {
            type: 'content',
            title: 'Aprendendo palavras em inglês (ou outro idioma)',
            body: 'Nunca é tarde para aprender algo novo! O ChatGPT é um excelente professor de idiomas. Você pode pedir: "Me ensine 10 palavras em inglês para usar em viagem" ou "Como se diz bom dia em espanhol, francês e italiano?" Ele ensina a palavra, a pronúncia (escrita de como se fala) e exemplos de uso. Você pode até pedir para ele criar frases simples e depois explicar cada parte. É como ter aulas particulares sem sair de casa!',
            tip: 'Peça para o ChatGPT ensinar poucas palavras por dia. Assim fica mais fácil lembrar. Aprender um pouquinho cada dia vale muito!',
          },
          {
            type: 'content',
            title: 'Organizando sua rotina da semana',
            body: 'O ChatGPT pode ajudar a organizar sua semana de forma prática. Diga para ele: "Me ajude a organizar minha semana. Tenho consulta médica na terça, aula de ginástica na quarta e sexta, e quero reservar tempo para ler e caminhar." Ele vai criar uma rotina organizada, dia por dia, com horários sugeridos. Também pode pedir para incluir lembretes de tomar remédios, horários de refeição e momentos de descanso. É como ter uma agenda inteligente!',
            tip: 'Peça para ele montar a rotina em formato de lista, com os dias da semana. Assim fica fácil de copiar para um papel ou caderno!',
          },
          {
            type: 'quiz',
            question: 'O ChatGPT pode ser usado como professor de idiomas?',
            options: [
              'Não, ele só fala português',
              'Sim, ele pode ensinar palavras, pronúncia e frases em diversos idiomas',
              'Só se você pagar a versão premium',
              'Apenas para crianças',
            ],
            correctIndex: 1,
            explanation: 'O ChatGPT pode ensinar palavras, pronúncias e frases em muitos idiomas, de forma gratuita. É como ter um professor particular disponível a qualquer hora!',
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 4',
            points: [
              'Use o ChatGPT para entender siglas e termos em contas e documentos',
              'Peça sugestões de passeios e roteiros de viagem personalizados',
              'Encontre exercícios leves adequados para suas necessidades (mas confirme com o médico)',
              'Aprenda palavras em outros idiomas no seu ritmo, pouquinho por dia',
              'Organize sua rotina da semana com horários para compromissos, exercícios e lazer',
            ],
          },
        ],
      },

      // ============================================================
      // MODULO 5 — Dicas de Seguranca e Cuidados
      // ============================================================
      {
        titulo: 'Dicas de Segurança e Cuidados',
        slides: [
          {
            type: 'content',
            title: 'Nunca coloque senhas, CPF ou dados bancários no ChatGPT',
            body: 'Essa é a regra mais importante de todas: nunca, em hipótese nenhuma, digite suas senhas, número de CPF, dados do cartão de crédito ou informações bancárias no ChatGPT. O ChatGPT não precisa dessas informações para te ajudar. Se alguém pedir para você colocar esses dados no ChatGPT, é golpe! As conversas no ChatGPT podem ser armazenadas, então trate como se fosse uma conversa em lugar público: não fale o que não quer que outros saibam.',
            tip: 'Se alguém disser que você precisa colocar CPF ou senha no ChatGPT para ganhar algo, NÃO faça. Isso é golpe!',
          },
          {
            type: 'content',
            title: 'O ChatGPT pode errar — sempre confirme informações de saúde',
            body: 'O ChatGPT é muito inteligente, mas não é perfeito. Ele pode inventar informações que parecem verdadeiras, mas não são. Isso é especialmente perigoso quando se trata de saúde. Nunca mude um remédio ou tratamento por causa de algo que o ChatGPT disse. Use-o apenas para entender melhor, e depois converse com seu médico. Também tenha cuidado com datas, números de telefone e endereços — ele pode errar esses dados. Sempre confirme informações importantes com fontes confiáveis.',
            tip: 'Pense no ChatGPT como um amigo que sabe muito, mas que às vezes se confunde. Confie, mas verifique as informações importantes.',
          },
          {
            type: 'quiz',
            question: 'O que você NUNCA deve digitar no ChatGPT?',
            options: [
              'Uma receita de bolo',
              'Suas senhas, CPF e dados bancários',
              'Uma pergunta sobre exercícios',
              'Um pedido de mensagem de aniversário',
            ],
            correctIndex: 1,
            explanation: 'Nunca digite informações pessoais sensíveis como senhas, CPF, número de cartão de crédito ou dados bancários no ChatGPT. Para todo o resto, pode usar com tranquilidade!',
          },
          {
            type: 'content',
            title: 'Golpes com IA: como identificar e se proteger',
            body: 'Infelizmente, pessoas mal-intencionadas usam a IA para aplicar golpes. Fique atento a mensagens ou ligações que parecem de parentes pedindo dinheiro — hoje a IA consegue imitar vozes. Se receber algo estranho, ligue diretamente para a pessoa antes de tomar qualquer atitude. Também desconfie de sites que prometem "ChatGPT grátis" fora do site oficial. O verdadeiro ChatGPT está apenas em chat.openai.com. Não clique em links suspeitos que chegam por WhatsApp ou email.',
            tip: 'Recebeu uma mensagem estranha de um parente pedindo dinheiro? Antes de qualquer coisa, ligue diretamente para a pessoa e confirme!',
          },
          {
            type: 'content',
            title: 'Quando usar e quando NÃO usar o ChatGPT',
            body: 'Use o ChatGPT para: receitas, dúvidas gerais, escrever mensagens, aprender coisas novas, organizar rotinas e se divertir com conversas. NÃO use o ChatGPT para: decisões médicas sem consultar o doutor, informações legais sérias, enviar dados pessoais, acreditar em tudo sem verificar. Também não use quando precisar de informações muito recentes (como notícias de hoje), pois ele pode não estar atualizado. O ChatGPT é uma ferramenta maravilhosa quando usada com bom senso!',
            tip: 'Na dúvida, pergunte a si mesmo: "Eu confiaria essa informação a um desconhecido?" Se a resposta for não, não coloque no ChatGPT.',
          },
          {
            type: 'quiz',
            question: 'Se você receber uma mensagem de voz de um "neto" pedindo dinheiro urgente, o que deve fazer?',
            options: [
              'Transferir o dinheiro imediatamente',
              'Perguntar ao ChatGPT se é golpe',
              'Ligar diretamente para o neto no número que você já conhece para confirmar',
              'Ignorar completamente',
            ],
            correctIndex: 2,
            explanation: 'Hoje a IA pode imitar vozes de pessoas. Sempre ligue diretamente para a pessoa no número que você já conhece antes de tomar qualquer atitude com dinheiro.',
          },
          {
            type: 'summary',
            title: 'Resumo do Módulo 5',
            points: [
              'NUNCA digite senhas, CPF, dados bancários ou de cartão de crédito no ChatGPT',
              'O ChatGPT pode errar — sempre confirme informações de saúde com seu médico',
              'Cuidado com golpes: a IA pode imitar vozes, sempre confirme ligando diretamente',
              'Acesse o ChatGPT apenas pelo site oficial: chat.openai.com',
              'Use o bom senso: o ChatGPT é ótimo para o dia a dia, mas não substitui profissionais de saúde ou advogados',
            ],
          },
        ],
      },

      // ============================================================
      // MODULO 6 — Atividades Praticas (Mao na Massa!)
      // ============================================================
      {
        titulo: 'Atividades Práticas (Mão na Massa!)',
        slides: [
          {
            type: 'checklist',
            title: 'Atividade 1: Peça uma receita do seu prato favorito',
            description: 'Vamos praticar pedindo uma receita ao ChatGPT! Siga os passos abaixo, um de cada vez, sem pressa.',
            items: [
              'Abra o navegador e acesse chat.openai.com',
              'Faça login com seu email e senha',
              'Na caixa de texto, escreva: "Me ensine a fazer [seu prato favorito] de forma simples, passo a passo"',
              'Leia a receita que o ChatGPT escreveu',
              'Se quiser, peça para ele adaptar (sem sal, para 2 pessoas, etc.)',
              'Experimente fazer a receita na sua cozinha!',
            ],
          },
          {
            type: 'checklist',
            title: 'Atividade 2: Escreva uma carta para alguém que você ama',
            description: 'Agora vamos usar o ChatGPT para escrever uma mensagem bonita e carinhosa. Pode ser para um filho, neto, amigo ou qualquer pessoa especial.',
            items: [
              'Pense em alguém especial para quem você gostaria de escrever',
              'No ChatGPT, escreva: "Escreva uma mensagem carinhosa para meu(minha) [parentesco], que se chama [nome] e gosta de [algo que a pessoa gosta]"',
              'Leia a mensagem que ele criou',
              'Se quiser mudar algo, peça: "Pode deixar mais curta" ou "Adicione algo sobre saudade"',
              'Copie a mensagem e envie pelo WhatsApp para a pessoa',
              'Observe a reação da pessoa — vai ser linda!',
            ],
          },
          {
            type: 'quiz',
            question: 'Ao pedir uma receita ao ChatGPT, o que ajuda a ter uma resposta melhor?',
            options: [
              'Escrever apenas "comida"',
              'Dizer o nome do prato, quantas pessoas e se tem alguma restrição alimentar',
              'Mandar emoji de comida',
              'Não faz diferença o que você escreve',
            ],
            correctIndex: 1,
            explanation: 'Quanto mais detalhes você der (nome do prato, quantidade de pessoas, restrições), melhor e mais personalizada será a receita!',
          },
          {
            type: 'checklist',
            title: 'Atividade 3: Peça dicas de filmes ou livros do seu gênero favorito',
            description: 'O ChatGPT conhece milhares de filmes e livros. Vamos pedir sugestões personalizadas para você!',
            items: [
              'Pense no tipo de filme ou livro que você mais gosta (romance, comédia, aventura, etc.)',
              'Escreva no ChatGPT: "Me sugira 5 filmes de [gênero] que são emocionantes e fáceis de assistir"',
              'Ou peça livros: "Me sugira 3 livros de [gênero] com histórias bonitas e leitura fácil"',
              'Leia as sugestões e veja se alguma te interessou',
              'Se quiser mais detalhes, pergunte: "Sobre o que é o filme [nome]?"',
              'Anote os que mais gostou para assistir ou ler!',
            ],
          },
          {
            type: 'checklist',
            title: 'Atividade 4: Crie sua rotina matinal ideal',
            description: 'Vamos pedir ao ChatGPT para montar uma rotina de manhã perfeita para você, com suas preferências e necessidades.',
            items: [
              'Pense a que horas você costuma acordar e o que gosta de fazer pela manhã',
              'Escreva no ChatGPT: "Me ajude a criar uma rotina matinal saudável. Acordo às [hora], gosto de [atividades] e preciso tomar [remédios/café]"',
              'Leia a sugestão de rotina que ele criou',
              'Se quiser ajustar, peça: "Pode incluir 15 minutos de alongamento?" ou "Preciso de tempo para ler o jornal"',
              'Copie a rotina final e cole em um papel para deixar na geladeira',
              'Tente seguir a rotina por uma semana e veja como se sente!',
            ],
          },
          {
            type: 'checklist',
            title: 'Atividade 5: Pergunte curiosidades sobre sua cidade ou país',
            description: 'Vamos usar o ChatGPT para aprender coisas interessantes sobre o lugar onde você mora ou nasceu. É muito divertido!',
            items: [
              'Escreva no ChatGPT: "Me conte 5 curiosidades interessantes sobre [sua cidade ou estado]"',
              'Leia as curiosidades — com certeza vai aprender algo novo!',
              'Pergunte mais: "Qual é a história do nome da minha cidade?" ou "Quais são as comidas típicas de [seu estado]?"',
              'Se quiser, peça: "Me conte uma história engraçada sobre [sua cidade]"',
              'Compartilhe o que aprendeu com um amigo ou familiar',
              'Experimente perguntar sobre outros lugares que você gostaria de conhecer!',
            ],
          },
          {
            type: 'quiz',
            question: 'Qual é a melhor atitude ao usar o ChatGPT?',
            options: [
              'Ter medo e nunca usar',
              'Acreditar em tudo sem questionar',
              'Usar com curiosidade e bom senso, verificando informações importantes',
              'Usar apenas uma vez e nunca mais voltar',
            ],
            correctIndex: 2,
            explanation: 'A melhor atitude é usar o ChatGPT com curiosidade e bom senso! Explore bastante, mas sempre verifique informações importantes, especialmente sobre saúde e dinheiro.',
          },
          {
            type: 'summary',
            title: 'Parabéns! Você completou o curso!',
            points: [
              'Você aprendeu a pedir receitas personalizadas ao ChatGPT',
              'Descobriu como escrever mensagens bonitas para pessoas queridas',
              'Sabe pedir sugestões de filmes e livros do seu gosto',
              'Aprendeu a criar uma rotina matinal organizada',
              'Explorou curiosidades sobre sua cidade e país',
              'Agora você é capaz de usar o ChatGPT no seu dia a dia com segurança e confiança!',
            ],
          },
        ],
      },
    ],
  },
]
