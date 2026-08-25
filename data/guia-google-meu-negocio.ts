/**
 * Conteudo do guia "Como criar o Google Meu Negocio do zero".
 *
 * POR QUE ESTE ARQUIVO EXISTE
 * O mesmo conteudo alimenta DOIS destinos:
 *   1. a pagina /como-criar-google-meu-negocio (HTML, indexavel, gratis)
 *   2. o PDF /guia-google-meu-negocio-passo-a-passo.pdf, gerado por
 *      `node gerar-pdf-google-meu-negocio.ts`, que le este mesmo arquivo
 *
 * Escrever duas vezes e como o conteudo apodrece: alguem corrige o passo na
 * pagina, esquece o PDF, e quem baixou fica com a versao errada.
 *
 * REGRA DE OURO DESTE ARQUIVO: NUMERO SEM FONTE NAO ENTRA
 * A primeira versao deste guia afirmava que avaliacao era "o segundo fator
 * que mais pesa" e que no video de verificacao "falar ajuda". Nenhum dos dois
 * se sustentou na conferencia: o primeiro era chute com cara de dado, e o
 * segundo era o oposto do que o Google pede — os revisores nem ouvem o audio.
 *
 * Por isso todo passo com numero ou regra externa carrega `fonte`, e a lista
 * `fontes` no fim vira uma pagina do PDF. Se voce for editar: ou o dado tem
 * origem citavel, ou ele sai. Opiniao pode ficar — desde que esteja escrita
 * como opiniao, e nao fantasiada de estatistica.
 *
 * TOM
 * O leitor tipico nao sabe o que e "categoria principal", tem medo de clicar
 * errado e vai fazer isso sozinho, sem agencia. Cada passo diz onde clicar
 * com as palavras que aparecem na tela, e nao "acesse as configuracoes".
 *
 * ATENCAO AO ATUALIZAR
 * O Google renomeia botao com frequencia. Quando um caminho mudar, corrija
 * `ondeClicar` — e o campo que quebra primeiro e o que mais trava o leigo.
 * Conferencia das regras: agosto de 2026.
 */

export interface Tabela {
  titulo: string
  colunas: string[]
  linhas: string[][]
}

export interface Passo {
  n: number
  titulo: string
  /** Tempo realista para quem nunca fez. */
  tempo: string
  /** Uma frase: o que estara pronto quando este passo terminar. */
  objetivo: string
  /** Caminho de clique literal, com as palavras que aparecem na tela. */
  ondeClicar: string[]
  /** O porque, em paragrafos. Um item do array = um paragrafo. */
  detalhe: string[]
  tabela?: Tabela
  dica?: string
  atencao?: string
  /** Texto pronto para copiar (modelo de descricao, mensagem, resposta). */
  copiar?: { titulo: string; texto: string }
  /** De onde veio a regra ou o numero citado no passo. */
  fonte?: string
  /** Chaves de data/ilustracoes-google-meu-negocio.ts, na ordem de leitura. */
  ilustracoes?: string[]
}

export interface Parte {
  numero: number
  titulo: string
  resumo: string
  passos: Passo[]
}

export const preparacao = [
  {
    item: 'Um e-mail do Google (Gmail) que seja SEU e que você não vá perder',
    porque:
      'Quem cria o perfil vira o dono dele. Se você usar o e-mail de um funcionário ou do sobrinho que "entende de computador", o perfil fica na mão dessa pessoa. Recuperar depois dá trabalho e nem sempre dá certo.',
  },
  {
    item: 'O nome do negócio escrito exatamente como está na fachada',
    porque:
      'Não é o nome do CNPJ nem o nome com propaganda junto. É o nome que o cliente lê na porta. Isso vai importar — e muito — no Passo 4.',
  },
  {
    item: 'Endereço completo com CEP — ou a lista de bairros e cidades que você atende',
    porque:
      'São dois caminhos diferentes dentro do cadastro. Quem atende em casa ou vai até o cliente NÃO deve mostrar o endereço, e o Passo 6 explica como esconder.',
  },
  {
    item: 'Um telefone que alguém atende de verdade',
    porque:
      'Pode ser o WhatsApp do negócio. O botão "Ligar" fica em destaque no perfil — telefone que chama e ninguém atende queima o cliente que você levou meses para conquistar.',
  },
  {
    item: 'De 8 a 12 fotos no celular: fachada, ambiente, você ou a equipe, produto ou serviço',
    porque:
      'Não precisa de fotógrafo: celular, de dia, sem filtro, resolve. O Passo 11 diz quais fotos e em que ordem.',
  },
  {
    item: 'O celular carregado e o negócio aberto e arrumado',
    porque:
      'A verificação hoje costuma ser por VÍDEO, gravado ao vivo, andando pelo local — não dá para gravar antes e enviar depois. Se a bateria acabar no meio, você recomeça.',
  },
]

export const partes: Parte[] = [
  {
    numero: 1,
    titulo: 'Criar e verificar',
    resumo:
      'Do zero até o Google confirmar que o negócio é seu. É a parte que trava a maioria das pessoas — e a única que depende de alguém do outro lado aprovar.',
    passos: [
      {
        n: 1,
        titulo: 'Entre na conta Google certa (e só nela)',
        tempo: '2 minutos',
        objetivo: 'Estar logado no e-mail que vai ser o dono do perfil para sempre.',
        ondeClicar: [
          'Abra o navegador e vá em google.com',
          'Olhe o canto superior direito da tela',
          'Se aparecer a bolinha com sua foto ou a inicial do seu nome, você já está logado',
          'Clique nessa bolinha e confira o e-mail que aparece embaixo do seu nome',
          'Se não for o e-mail que você quer usar, clique em "Adicionar outra conta" ou "Fazer login"',
        ],
        detalhe: [
          'Todo perfil no Google pertence a uma conta de e-mail. Quem estiver logado na hora da criação vira o proprietário — e proprietário é quem pode, um dia, tirar o seu acesso.',
          'Parece detalhe, mas é o erro que faz um negócio perder o próprio perfil dois anos depois: o estagiário que criou foi embora e levou o acesso junto. Recuperar existe — a página de dúvidas, no fim do guia, explica o caminho —, mas leva dias e depende da boa vontade de quem está com a conta.',
        ],
        dica: 'Se o negócio tem sócio, crie com um e-mail do negócio — contato@seudominio, ou um Gmail novo do tipo padariadosol.contato@gmail.com — e depois adicione os sócios como gerentes. E-mail pessoal de uma pessoa só é um risco que não precisa correr.',
        atencao:
          'Não crie o perfil pelo celular de outra pessoa nem por um e-mail de agência que você não controla. Se um dia você trocar de agência, o perfil fica com eles.',
      },
      {
        n: 2,
        titulo: 'Antes de criar: veja se seu negócio já existe no Google',
        ilustracoes: ['busca', 'cartao'],
        tempo: '3 minutos',
        objetivo: 'Descobrir se você precisa criar do zero ou apenas reivindicar um perfil que já está lá.',
        ondeClicar: [
          'Na busca do Google, digite o nome do seu negócio mais a cidade. Exemplo: Padaria do Sol Contagem',
          'Veja se aparece um quadro do lado direito, no computador, ou um cartão no topo, no celular',
          'Se aparecer, procure a frase "É o proprietário desta empresa?" ou "Reivindicar esta empresa"',
          'Clique nessa frase e siga o processo — você cai direto na verificação',
          'Se não aparecer nada, aí sim você cria do zero (Passo 3)',
        ],
        detalhe: [
          'O Google cria perfis sozinho. Ele junta o que achou em lista telefônica, cadastro público, mapa antigo, ou alguém marcou seu endereço no Maps. Muito negócio já tem um perfil rodando há anos — às vezes com telefone e horário errados — e o dono nem sabe.',
          'Procure também pelo endereço e pelo telefone antigo, não só pelo nome: perfis criados automaticamente costumam ter o nome escrito de um jeito diferente do seu.',
        ],
        atencao:
          'Se você criar um segundo perfil sabendo que já existe um, os dois entram em risco de suspensão por duplicidade. Pior: as avaliações ficam divididas entre eles e nenhum tem força.',
      },
      {
        n: 3,
        titulo: 'Crie o perfil',
        tempo: '2 minutos',
        objetivo: 'Ter o cadastro aberto, com o formulário na tela.',
        ondeClicar: [
          'Na busca do Google, digite: criar perfil da empresa',
          'Clique no resultado oficial do Google (google.com/business) e depois em "Gerenciar agora"',
          'Escreva o nome do seu negócio no campo que aparecer',
          'Se o Google sugerir um nome parecido numa listinha embaixo, LEIA a sugestão — pode ser o seu perfil antigo (volte ao Passo 2)',
          'Se não for, clique em "Criar empresa com o nome ..." e siga',
        ],
        detalhe: [
          'Um aviso que confunde muita gente: o antigo aplicativo "Google Meu Negócio" foi desativado. Hoje a gestão acontece dentro da própria Busca e do Google Maps — você entra logado, pesquisa o nome do seu negócio, e os botões de edição aparecem na tela.',
          'O nome popular continua sendo Google Meu Negócio, mas o nome oficial hoje é Perfil da Empresa no Google. Se um tutorial mandar você "abrir o aplicativo do Meu Negócio", ele está desatualizado — e provavelmente o resto dele também.',
        ],
        dica: 'Faça este cadastro pelo computador se puder: a tela é maior, os campos ficam todos visíveis e você erra menos. A verificação por vídeo, essa sim, vai precisar do celular.',
        fonte: 'Aposentadoria do aplicativo e migração da gestão para a Busca e o Maps: Search Engine Land, "Google My Business mobile app has stopped functioning forever".',
      },
      {
        n: 4,
        titulo: 'Nome do negócio: exatamente como está na fachada',
        ilustracoes: ['nome'],
        tempo: '2 minutos',
        objetivo: 'Escrever o nome de um jeito que não derrube seu perfil lá na frente.',
        ondeClicar: [
          'No campo "Nome da empresa", escreva só o nome real',
          'Confira letra por letra: acento, hífen, "&", tudo igual à placa',
          'Não acrescente cidade, bairro, serviço, telefone nem "24h"',
        ],
        detalhe: [
          'A regra do Google é curta: o nome no perfil tem que ser o nome que o cliente vê no mundo real — na fachada, no cartão, na embalagem, no site. Só isso. Acrescentar palavra-chave, cidade ou frase de propaganda é infração, e a punição vai de perda de posição até a suspensão do perfil.',
          'Agora a parte que ninguém te conta, e que você precisa saber para não se sentir trouxa: encher o nome de palavra-chave FUNCIONA. No estudo anual da Whitespark com especialistas de SEO local, "palavra-chave no nome do perfil" aparece como o 3º fator individual mais forte do bloco de mapas de 2026. É por isso que o seu concorrente faz.',
          'E é exatamente por isso que ele é frágil. O nome irregular é a denúncia mais fácil que existe: qualquer pessoa — inclusive você — clica em "Sugerir uma edição" no perfil dele e propõe o nome certo. Quem constrói em cima disso está construindo em terreno alugado. Não copie.',
        ],
        tabela: {
          titulo: 'O mesmo negócio, escrito certo e escrito errado',
          colunas: ['Escreva assim', 'Nunca assim'],
          linhas: [
            ['Padaria do Sol', 'Padaria do Sol — Melhor Pão Quente de Contagem | 24h'],
            ['Studio Bela Face', 'Studio Bela Face Design de Sobrancelha e Cílios BH'],
            ['Elétrica Andrade', 'Eletricista 24 Horas Andrade Betim Urgência'],
            ['Dra. Marina Reis', 'Dra. Marina Reis Dentista Implante Clareamento'],
          ],
        },
        dica: 'Se o nome fantasia é diferente do nome do CNPJ, use o nome fantasia. É o que o cliente conhece e o que ele vai digitar na busca.',
        fonte:
          'Regra do nome: Google Business Profile Help, "Diretrizes para representar sua empresa no Google". Peso da palavra-chave no nome: Whitespark, Local Search Ranking Factors 2026.',
      },
      {
        n: 5,
        titulo: 'Categoria principal: a escolha que mais pesa',
        ilustracoes: ['categoria'],
        tempo: '5 minutos',
        objetivo: 'Escolher a categoria que decide em quais buscas você vai aparecer.',
        ondeClicar: [
          'No campo "Categoria da empresa", comece a digitar o que você É (não o que você vende)',
          'Escolha uma opção da lista que o Google mostra — não dá para inventar categoria',
          'Depois de criar o perfil, volte em "Editar perfil", aba "Sobre", campo "Categorias"',
          'Acrescente até 9 categorias secundárias (o total é sempre 1 principal mais 9)',
        ],
        detalhe: [
          'De tudo que você vai preencher, a categoria principal é o que mais decide se você aparece. No estudo da Whitespark de 2026, ela é o fator individual mais forte do bloco de mapas — à frente até da distância entre você e quem está pesquisando.',
          'Ela funciona como filtro: quando alguém busca "cabeleireiro perto de mim", o Google monta a lista com quem está na categoria "Cabeleireiro" — não com quem escreveu "cabeleireiro" na descrição. Escreveu no texto e não marcou a categoria? Você não está na disputa.',
          'Escolha o que o negócio É na maior parte do faturamento. Uma lanchonete que também faz bolo é "Lanchonete" como principal e "Confeitaria" como secundária. Inverter isso muda para quais buscas você aparece.',
        ],
        dica: 'Truque para acertar sem adivinhar: pesquise no Google o termo que você quer disputar ("manicure Betim"). Abra os 3 primeiros perfis do mapa e veja a categoria escrita embaixo do nome deles — ela é pública. Use a que mais se repete.',
        atencao:
          'Categoria secundária demais atrapalha. Se você marcar 9 coisas sem relação, o Google fica sem entender o que você é e você perde força em todas. Marque só o que você faz de verdade e com frequência.',
        fonte: 'Limite de 1 categoria principal mais 9 secundárias: Google Business Profile Help, "Gerenciar a categoria da sua empresa". Peso da categoria: Whitespark, Local Search Ranking Factors 2026.',
      },
      {
        n: 6,
        titulo: 'Endereço ou área de atendimento (não erre aqui)',
        ilustracoes: ['endereco'],
        tempo: '5 minutos',
        objetivo: 'Aparecer no mapa da região certa sem expor o endereço de casa.',
        ondeClicar: [
          'Na pergunta "Você quer adicionar um local que os clientes possam visitar?", pare e pense',
          'TEM LOJA OU SALA que recebe cliente: responda SIM, preencha CEP, rua e número, e arraste o pino no mapa até a porta exata',
          'ATENDE NA CASA DO CLIENTE ou trabalha de casa: responda NÃO',
          'Em "Áreas atendidas", digite cidades ou bairros e escolha da lista — até 20 no total',
        ],
        detalhe: [
          'São três situações, e cada uma tem um caminho diferente. Errar aqui ou expõe o seu endereço residencial, ou tira você do mapa da região onde trabalha.',
        ],
        tabela: {
          titulo: 'Qual é o seu caso',
          colunas: ['Seu negócio', 'O que fazer', 'O cliente vê'],
          linhas: [
            ['Loja, consultório, restaurante — o cliente vai até você', 'Endereço visível e pino ajustado na porta', 'Endereço completo e rota'],
            ['Eletricista, diarista, fotógrafo, bolo por encomenda feito em casa', 'Endereço escondido e áreas de atendimento marcadas', 'Só as regiões atendidas'],
            ['Barbearia que também atende a domicílio', 'Endereço visível mais áreas de atendimento', 'Endereço e regiões'],
          ],
        },
        dica: 'Depois de salvar, procure seu endereço no Google Maps e veja onde o pino caiu. É comum ele parar no meio da rua ou no vizinho. Arraste até a porta — quem chega usando aplicativo de rota agradece.',
        atencao:
          'Não use endereço de escritório virtual, coworking que você não ocupa, nem casa de parente em outra cidade só para "pegar" aquela região. A verificação por vídeo existe justamente para checar isso, e reverter uma suspensão leva semanas.',
        fonte: 'Limite de 20 áreas de atendimento: Google Business Profile Help, "Editar as áreas atendidas".',
      },
      {
        n: 7,
        titulo: 'Telefone e site',
        tempo: '2 minutos',
        objetivo: 'Dar ao cliente dois jeitos de falar com você sem sair do Google.',
        ondeClicar: [
          'Preencha o telefone com DDD. Pode ser o número do WhatsApp do negócio',
          'No campo do site, cole o endereço completo do seu site, começando com https://',
          'Não tem site? Cole o link do seu Instagram ou um link de WhatsApp no formato https://wa.me/5531999999999',
        ],
        detalhe: [
          'O telefone do perfil vira o botão "Ligar". Use um número que alguém atende no horário que você declarou — não adianta ganhar a busca e perder a ligação.',
          'Se você só responde por WhatsApp, coloque o número do WhatsApp mesmo: a pessoa liga, vê que é WhatsApp e manda mensagem. É melhor do que um número que ninguém atende.',
          'Aquele site gratuito que o Google oferecia dentro do Meu Negócio não existe mais. Ele foi desligado em 1º de março de 2024; até 10 de junho de 2024 o endereço ainda redirecionava para o perfil, e depois disso passou a dar erro. Se você tinha um e nunca entendeu por que saiu do ar, era isso.',
        ],
        dica: 'Enquanto não tiver site próprio, o link do WhatsApp costuma render mais contato do que o do Instagram: um leva direto para a conversa, o outro leva para uma vitrine onde a pessoa se distrai.',
        fonte: 'Datas do desligamento dos sites do Perfil da Empresa: comunicado do Google reproduzido pela imprensa especializada em fevereiro e março de 2024.',
      },
      {
        n: 8,
        titulo: 'Verificação: a prova de que o negócio é seu',
        ilustracoes: ['video'],
        tempo: '20 minutos, mais a espera',
        objetivo: 'Provar ao Google que o negócio existe e é seu, para o perfil começar a aparecer.',
        ondeClicar: [
          'Termine o cadastro. O Google vai apresentar a forma de verificação do SEU caso',
          'Você quase nunca escolhe: o método é definido pelo Google conforme o tipo de negócio',
          'Se cair vídeo, tenha o celular na mão e esteja NO local — a gravação é ao vivo, dentro da própria tela do Google',
          'Se cair cartão-postal, confira o endereço com atenção antes de pedir',
          'Se cair telefone ou e-mail, o código chega na hora',
        ],
        detalhe: [
          'Esta é a etapa que mais reprova gente, e quase sempre por um motivo bobo. Vale ler tudo antes de começar a gravar.',
          'O vídeo precisa ser uma gravação única, sem cortes, sem edição e sem pausa, com pelo menos 30 segundos. Entre 30 e 60 segundos costuma bastar. E ele é gravado ao vivo, dentro do fluxo do Google: não adianta gravar antes com o celular e tentar enviar depois.',
          'Você não precisa falar nada. Mais que isso: não fale, e não filme o rosto de funcionários ou clientes. O Google pede que a gravação não exponha terceiros, e quem analisa o vídeo avalia o que vê, não o que ouve — narração não conta ponto nenhum.',
        ],
        tabela: {
          titulo: 'O que o vídeo precisa provar, nesta ordem',
          colunas: ['O quê', 'Como filmar'],
          linhas: [
            [
              'Que o lugar existe',
              'Comece na calçada oposta: fachada com a placa, número da casa, placa da rua e o comércio vizinho',
            ],
            [
              'Que o negócio é este',
              'Entre e mostre o ambiente, os equipamentos, o estoque, as ferramentas na van, os produtos expostos',
            ],
            [
              'Que quem manda é você',
              'Termine com algo que só o responsável tem: a chave abrindo a porta, a maquininha, o sistema do caixa aberto, o depósito nos fundos',
            ],
          ],
        },
        dica: 'Grave na horizontal, de dia, andando devagar, sem zoom. Faça um ensaio antes, sem gravar, para saber o caminho que vai percorrer: calçada, fachada, entrada, salão, fundos. Se reprovar, você pode tentar de novo.',
        atencao:
          'Não filme documento com número de CPF, CNPJ, conta bancária ou identidade. O Google orienta a não expor dados sensíveis, e um crachá ou um extrato na tela pode custar a aprovação. Chave, maquininha e sistema aberto provam a mesma coisa sem risco.',
        fonte:
          'Requisitos do vídeo (gravação ao vivo, sem edição, mínimo de 30 segundos, sem expor terceiros ou dados sensíveis) e prazo de análise: Google Business Profile Help, "Verificar sua empresa com uma gravação em vídeo".',
      },
      {
        n: 9,
        titulo: 'Enquanto espera a resposta',
        tempo: '5 minutos',
        objetivo: 'Saber quanto tempo esperar e o que fazer se der errado, sem repetir o pedido à toa.',
        ondeClicar: [
          'O resultado chega no e-mail da conta que criou o perfil — confira a caixa de spam',
          'Vídeo: a análise costuma levar até 5 dias úteis',
          'Cartão-postal: a carta leva de 5 a 14 dias, e o código vence 30 dias depois de emitido',
          'Reprovou? Corrija o que faltou e refaça — não crie um perfil novo',
        ],
        detalhe: [
          'Enquanto o perfil não é verificado, ele praticamente não aparece nas buscas. Todo o trabalho das Partes 2 e 3 depende disto aqui — dá para adiantar o preenchimento, mas nada disso rende antes da aprovação.',
        ],
        tabela: {
          titulo: 'Por que um vídeo é reprovado, e como resolver',
          colunas: ['Motivo comum', 'O que fazer'],
          linhas: [
            ['Vídeo cortado, editado ou pausado no meio', 'Regrave numa tomada só, sem soltar o dedo'],
            ['Escuro demais ou tremido', 'Refaça de dia, andando devagar, sem zoom'],
            ['Não aparece a placa com o nome', 'Comece pela fachada inteira, enquadrando a placa'],
            ['Não dá para saber onde fica', 'Mostre número da casa, placa da rua e vizinhança'],
            ['Nada prova que você administra o lugar', 'Termine com chave, maquininha ou sistema aberto'],
          ],
        },
        atencao:
          'Criar um perfil novo porque o primeiro reprovou é o caminho mais rápido para uma suspensão por duplicidade. Insista no mesmo perfil.',
        fonte: 'Prazos de análise do vídeo e de entrega do cartão-postal, e validade do código: Google Business Profile Help, "Verificar sua empresa no Google".',
      },
    ],
  },
  {
    numero: 2,
    titulo: 'Deixar o perfil completo',
    resumo:
      'Perfil verificado mas vazio não vende. Aqui você preenche o que faz a pessoa escolher você, e não o concorrente que aparece logo abaixo.',
    passos: [
      {
        n: 10,
        titulo: 'Horário de funcionamento (e o de feriado)',
        ilustracoes: ['horario'],
        tempo: '5 minutos, mais 10 uma vez por ano',
        objetivo: 'Nunca mais aparecer como "Fechado" num dia em que você está aberto.',
        ondeClicar: [
          'Pesquise o nome do seu negócio no Google, já logado',
          'Clique em "Editar perfil" e vá na aba "Horário"',
          'Preencha dia por dia. Fecha para almoço? Clique em "Adicionar horário" e crie os dois turnos',
          'Desça até "Horários especiais" e cadastre os feriados dos próximos meses',
        ],
        detalhe: [
          'Este passo parece burocrático e é um dos mais rentáveis do guia. No estudo da Whitespark de 2026, estar aberto no momento da busca aparece entre os cinco fatores mais fortes do bloco de mapas. Ou seja: horário errado não deixa só o cliente confuso — tira você da lista bem na hora em que ele ia comprar.',
          'E tem o efeito visível: o Google mostra "Aberto agora" ou "Fechado" em destaque, antes de qualquer outra informação. Quem lê "Fechado" clica no concorrente. Quem atravessa a cidade num feriado e encontra a porta trancada costuma voltar para deixar uma estrela.',
        ],
        dica: 'Cadastre os feriados do ano inteiro de uma vez, em janeiro. São 10 minutos que resolvem o problema até dezembro — e é o tipo de coisa que ninguém lembra de fazer na véspera.',
        fonte: 'Peso de estar aberto no momento da busca: Whitespark, Local Search Ranking Factors 2026.',
      },
      {
        n: 11,
        titulo: 'A descrição: 750 caracteres que vendem',
        ilustracoes: ['descricao'],
        tempo: '15 minutos',
        objetivo: 'Responder "por que eu escolheria você?" em 30 segundos de leitura.',
        ondeClicar: [
          'Em "Editar perfil", vá na aba "Sobre"',
          'Clique no campo "Descrição da empresa"',
          'Escreva até 750 caracteres e clique em "Salvar"',
          'Pode levar algumas horas até o Google aprovar e publicar',
        ],
        detalhe: [
          'O campo aceita 750 caracteres, mas só cerca de 250 aparecem antes do "Mais". Ou seja: as duas ou três primeiras frases são o texto que a maioria vai ler. Coloque nelas o que você faz, onde, e o motivo de escolher você. O resto é para quem já se interessou.',
          'Escreva como falaria com um cliente no balcão. "Somos uma empresa que preza pela excelência e pelo compromisso com o cliente" não significa nada para ninguém — e é a frase que aparece em metade dos perfis do Brasil.',
        ],
        copiar: {
          titulo: 'Modelo — troque o que está em maiúscula',
          texto:
            'A NOME DO NEGÓCIO atua em CIDADE/BAIRRO desde ANO, oferecendo SERVIÇO 1, SERVIÇO 2 e SERVIÇO 3 para PARA QUEM É (famílias, condomínios, pequenas empresas).\n\nAtendemos BAIRRO 1, BAIRRO 2 e região, com DIFERENCIAL REAL (atendimento no mesmo dia, orçamento sem compromisso, garantia de 90 dias, estacionamento próprio).\n\nO que os clientes mais procuram aqui: SERVIÇO MAIS VENDIDO. Trabalhamos de DIA a DIA, das HORA às HORA. Agende pelo telefone TELEFONE ou passe na RUA, NÚMERO.',
        },
        dica: 'Cite o bairro e a cidade de forma natural, uma ou duas vezes. Repetir dez vezes não ajuda o ranqueamento e deixa o texto com cara de spam para quem lê.',
        atencao:
          'Não coloque preço, promoção com prazo, telefone repetido nem link na descrição. O Google recusa esse tipo de conteúdo, e você fica sem descrição nenhuma sem entender o motivo.',
        fonte: 'Limite de 750 caracteres e corte visível por volta de 250: Google Business Profile Help, "Adicionar ou editar a descrição da empresa".',
      },
      {
        n: 12,
        titulo: 'Fotos: quais tirar, quantas e em que ordem',
        ilustracoes: ['fotos'],
        tempo: '20 minutos',
        objetivo: 'Fazer o perfil parecer um negócio de verdade — porque perfil sem foto passa batido.',
        ondeClicar: [
          'Pesquise seu negócio no Google, logado, e clique em "Adicionar foto"',
          'Envie primeiro o logo, quadrado, com cerca de 720 por 720 pixels',
          'Depois a capa: a melhor foto do lugar ou do trabalho pronto, na horizontal',
          'Depois as demais, marcando a categoria de cada uma: Exterior, Interior, Equipe, Produto',
        ],
        detalhe: [
          'Não é sobre ter foto bonita, é sobre ter foto que responde a uma dúvida. A da fachada responde "vou reconhecer o lugar quando chegar?". A do interior responde "é limpo?". A da equipe responde "vou ser bem atendido?". A do trabalho pronto responde "eles sabem fazer?".',
        ],
        tabela: {
          titulo: 'O mínimo para começar',
          colunas: ['Tipo', 'Quantas', 'Para quê'],
          linhas: [
            ['Logo', '1', 'Identifica o perfil na lista'],
            ['Capa', '1', 'É a foto grande do topo'],
            ['Fachada', '2 a 3', 'Faz a pessoa reconhecer o lugar na rua'],
            ['Interior', '3 a 4', 'Mostra o ambiente e o cuidado'],
            ['Equipe ou você trabalhando', '2', 'Rosto humano aumenta a confiança'],
            ['Produto ou serviço pronto', '3 ou mais', 'É a prova do que você entrega'],
          ],
        },
        dica: 'Celular basta. Regras simples: de dia, luz natural, lente limpa, sem zoom, na horizontal e sem filtro. Para a fachada, atravesse a rua e enquadre a placa inteira. Depois, acrescente 3 fotos novas por mês.',
        atencao:
          'Não use foto de banco de imagens, não escreva texto ou promoção por cima e não coloque marca d’água com telefone. O Google remove esse tipo de imagem, e foto genérica de internet é o sinal mais rápido de perfil abandonado.',
      },
      {
        n: 13,
        titulo: 'Serviços e produtos, um por um',
        tempo: '20 minutos',
        objetivo: 'Aparecer em buscas por serviço específico, não só pelo nome do negócio.',
        ondeClicar: [
          'Em "Editar perfil", procure a aba "Serviços" — ou "Produtos", dependendo da sua categoria',
          'Clique em "Adicionar serviço"',
          'Escolha primeiro os serviços que o Google já sugere pela sua categoria',
          'Não encontrou o seu? Clique em "Adicionar serviço personalizado" e escreva o nome',
          'Preencha a descrição e, se fizer sentido, o preço ou "A partir de R$ ..."',
        ],
        detalhe: [
          'Cada serviço cadastrado é uma porta de entrada a mais. Um salão que cadastra corte feminino, escova, coloração, progressiva e penteado para festa passa a poder aparecer em cinco buscas diferentes, em vez de só em "salão de beleza".',
          'Cadastre um por um, com o nome do jeito que o cliente fala. "Desentupimento de pia" é o que a pessoa digita; "serviços hidráulicos especializados" é o que ninguém procura.',
        ],
        dica: 'Preço assusta menos do que você imagina, e filtra curioso. Se não quiser fixar, use "A partir de". Quem não mostra preço nenhum recebe muita mensagem de quem nunca ia comprar.',
      },
      {
        n: 14,
        titulo: 'Atributos e botões: os detalhes que decidem',
        tempo: '10 minutos',
        objetivo: 'Ativar as informações que o cliente usa como filtro na hora de escolher.',
        ondeClicar: [
          'Em "Editar perfil", vá em "Mais" ou "Atributos"',
          'Marque as formas de pagamento: Pix, cartão, dinheiro',
          'Marque acessibilidade: entrada acessível para cadeira de rodas, estacionamento',
          'Marque comodidades: Wi-Fi, banheiro, ar-condicionado, aceita pet, espaço kids',
          'Se fizer sentido, marque identificação: "Mulheres à frente", "Empresa familiar"',
        ],
        detalhe: [
          'Atributo não é enfeite: parte deles vira filtro de busca. Quem procura restaurante com estacionamento, ou lugar que aceita Pix, só encontra quem marcou. É o item que leva dez minutos e que a maioria dos concorrentes nunca preencheu.',
          'Os atributos de identificação — empresa familiar, mulheres à frente — não mudam ranqueamento, mas mudam decisão. Para uma parte do público, é exatamente o desempate.',
        ],
        atencao:
          'Se o seu perfil oferecer mensagens, só ative se você for responder. O Google acompanha o tempo de resposta e pode desativar o recurso de quem ignora — além de exibir para o cliente que você costuma demorar.',
      },
    ],
  },
  {
    numero: 3,
    titulo: 'Aparecer mais e ganhar avaliações',
    resumo:
      'Perfil completo é o básico. O que separa quem fica no topo de quem some é o que você faz depois de criar.',
    passos: [
      {
        n: 15,
        titulo: 'Sua primeira publicação',
        ilustracoes: ['publicacao'],
        tempo: '10 minutos',
        objetivo: 'Mostrar ao Google, e a quem visita o perfil, que o negócio está ativo.',
        ondeClicar: [
          'Pesquise seu negócio no Google, logado',
          'Clique em "Adicionar novidade" ou "Publicar"',
          'Escolha o tipo: Novidade, Oferta ou Evento',
          'Escreva até 1.500 caracteres — mas os primeiros 100 são o que aparece antes do corte',
          'Adicione uma foto boa e escolha um botão: "Saiba mais", "Ligar agora", "Reservar"',
        ],
        detalhe: [
          'São três tipos, com prazos diferentes. Novidade é o dia a dia — chegou produto, mudou horário, terminou um serviço — e sai da vitrine depois de cerca de 7 dias, por isso precisa ser repetida. Oferta e Evento ficam no ar até a data final que você definir.',
          'Como a novidade expira, a conta é simples: publicar uma vez por semana mantém o espaço sempre ocupado. Publicar uma vez e sumir por dois meses deixa o perfil com cara de abandonado justamente para quem estava decidindo.',
        ],
        copiar: {
          titulo: 'Modelo de primeira publicação',
          texto:
            'Chegamos ao Google! Agora você encontra a NOME DO NEGÓCIO aqui, com endereço, horário e telefone sempre atualizados.\n\nEstamos na RUA, NÚMERO, BAIRRO, de DIA a DIA, das HORA às HORA. Fazemos SERVIÇO 1, SERVIÇO 2 e SERVIÇO 3.\n\nPasse aqui ou chame no telefone TELEFONE — a gente responde rápido.',
        },
        dica: 'Escolha um dia fixo da semana e publique sempre nele. Cinco minutos, com foto do que aconteceu de mais interessante nos últimos dias, resolve.',
        fonte: 'Limite de 1.500 caracteres e expiração da Novidade em cerca de 7 dias: Google Business Profile Help, "Criar postagens no seu Perfil da Empresa".',
      },
      {
        n: 16,
        titulo: 'Pegue seu link de avaliação e comece a pedir',
        ilustracoes: ['avaliacao'],
        tempo: '10 minutos',
        objetivo: 'Ter um link curto que abre a janela de estrelas em um clique.',
        ondeClicar: [
          'Pesquise seu negócio no Google, logado',
          'Clique em "Peça avaliações" ou "Receber mais avaliações"',
          'O Google mostra um link curto — clique em "Copiar link"',
          'Guarde esse link no bloco de notas do celular. Você vai usar todo dia',
          'Mande logo depois de atender, com o cliente ainda satisfeito',
        ],
        detalhe: [
          'Avaliação é o segundo bloco de sinais mais forte do ranqueamento local, atrás só do conjunto de informações do próprio perfil: no levantamento da Whitespark de 2026, sinais de avaliação respondem por cerca de 20% do peso do bloco de mapas, e essa fatia vem crescendo.',
          'Mas o efeito maior é o outro: a maioria das pessoas lê avaliação antes de ligar. O que conta não é ter 500 — é ter avaliações recentes e constantes. Cinco por mês, todo mês, sustentam melhor do que sessenta de uma vez e nunca mais.',
          'Pedir é permitido. O que não é permitido é oferecer alguma coisa em troca, ou pedir que a pessoa escreva um conteúdo específico. Peça a opinião dela, não a nota que você quer.',
        ],
        copiar: {
          titulo: 'Mensagem para pedir avaliação',
          texto:
            'Oi, NOME! Espero que tenha gostado do atendimento de hoje.\n\nPosso te pedir um favor de 30 segundos? Sua avaliação no Google ajuda outras pessoas da região a encontrar a gente.\n\nÉ só clicar aqui e escrever o que achou: SEU LINK\n\nMuito obrigado!',
        },
        atencao:
          'Nunca ofereça desconto, brinde, sorteio ou fidelidade em troca de avaliação. O Google trata isso como engajamento falso e a punição pode ser apagar todas as avaliações do perfil de uma vez, ou suspendê-lo. Também não dispare o pedido para a base inteira no mesmo dia: quarenta avaliações numa terça-feira é o padrão que dispara o alarme.',
        fonte:
          'Proibição de incentivo (política de engajamento falso) e permissão para solicitar avaliações sem direcionar o conteúdo: Google Maps, "Políticas de conteúdo e avaliações". Peso dos sinais de avaliação: Whitespark, Local Search Ranking Factors 2026.',
      },
      {
        n: 17,
        titulo: 'Responda todas as avaliações — inclusive as ruins',
        tempo: '10 minutos por semana',
        objetivo: 'Transformar avaliação em vitrine, e reclamação em prova de que você resolve.',
        ondeClicar: [
          'Pesquise seu negócio no Google, logado',
          'Clique em "Ler avaliações"',
          'Clique em "Responder" embaixo de cada uma',
          'Responda em até 48 horas — as negativas, no mesmo dia',
        ],
        detalhe: [
          'Quem lê uma avaliação ruim não está julgando o problema: está olhando como você reagiu. Uma resposta calma, que assume e resolve, convence mais do que um perfil sem nenhuma reclamação — perfil só com elogio desperta desconfiança.',
          'O caminho é sempre o mesmo: lamente, assuma o que for seu, tire a discussão da vitrine chamando para o telefone ou WhatsApp, e diga o que vai mudar. Nunca discuta, nunca exponha o cliente, nunca responda com raiva. Se a mão coçar, responda amanhã.',
        ],
        copiar: {
          titulo: 'Três respostas prontas',
          texto:
            'PARA 5 ESTRELAS\n"Que alegria ler isso, NOME! Obrigado pela confiança — a equipe toda fica feliz. Te esperamos na próxima."\n\nPARA 3 ESTRELAS\n"Obrigado pelo retorno, NOME. Fico feliz que no geral tenha sido bom, e quero entender o que faltou. Pode me chamar no TELEFONE? Sua opinião ajuda a gente a melhorar de verdade."\n\nPARA 1 ESTRELA\n"Sinto muito pelo ocorrido, NOME. Não foi o atendimento que a gente quer entregar, e a responsabilidade é nossa. Já conversei com a equipe sobre o que aconteceu. Pode falar comigo direto no TELEFONE? Quero resolver isso com você."',
        },
        dica: 'Na resposta positiva, cite naturalmente o serviço e a cidade: "obrigado por confiar na gente para a troca de resistência, aqui em Betim". Dá contexto sem soar forçado, e ajuda quem lê a entender o que você faz.',
      },
    ],
  },
  {
    numero: 4,
    titulo: 'Manter vivo',
    resumo:
      'Perfil abandonado perde posição. Esta parte é curta de propósito: são 15 minutos por semana para não perder o que você construiu.',
    passos: [
      {
        n: 18,
        titulo: 'Leia o Desempenho (só cinco números importam)',
        ilustracoes: ['desempenho'],
        tempo: '10 minutos por mês',
        objetivo: 'Saber se o perfil está trazendo cliente — e não só "visualização".',
        ondeClicar: [
          'Pesquise seu negócio no Google, logado',
          'Clique em "Desempenho"',
          'Escolha o período de três meses, para poder comparar',
          'Olhe ligações, cliques no site, pedidos de rota, mensagens e as buscas que te acharam',
        ],
        detalhe: [
          'Ignore o número grande de visualizações. Ele sobe e desce sozinho, depende de quanta gente pesquisou na sua região naquele mês, e não paga conta nenhuma.',
          'Olhe as ações: quantas pessoas ligaram, pediram rota, clicaram no site ou mandaram mensagem. Essas são pessoas com intenção real. E olhe a lista de termos pesquisados — ela mostra as palavras que levaram gente até você. Se aparecer um serviço que você faz e não cadastrou, volte ao Passo 13 e cadastre.',
        ],
        dica: 'Anote os cinco números num caderno ou numa planilha, uma vez por mês, sempre no mesmo dia. Número solto não diz nada; a comparação é que mostra se está funcionando.',
      },
      {
        n: 19,
        titulo: 'A rotina de 15 minutos por semana',
        tempo: '15 minutos por semana',
        objetivo: 'Manter o perfil ativo com o mínimo de esforço possível.',
        ondeClicar: [
          'Toda semana: uma publicação nova e responder o que chegou de avaliação e mensagem',
          'Todo mês: três fotos novas, conferir o horário e olhar o Desempenho',
          'A cada três meses: reler a descrição, revisar serviços e preços, cadastrar os feriados que vêm',
          'Sempre que mudar algo: telefone, endereço ou horário, atualize no mesmo dia',
        ],
        detalhe: [
          'Não existe segredo nem truque. Os perfis que ficam no topo são os que recebem avaliação toda semana, publicam, têm foto recente e informação certa.',
          'É repetitivo, e é exatamente por isso que funciona: a maioria dos concorrentes desiste no segundo mês. A vantagem não é fazer melhor — é continuar fazendo.',
        ],
        dica: 'Marque no celular um compromisso fixo: toda terça, 9h, "15 minutos do Google". Rotina com horário marcado dura; rotina "quando sobrar tempo" não sobrevive ao primeiro mês corrido.',
      },
    ],
  },
]

export const erros = [
  {
    erro: 'Enfiar palavra-chave no nome do negócio',
    porque: 'É infração das diretrizes, e a denúncia é fácil: qualquer pessoa sugere a correção do nome em dois cliques.',
    solucao: 'Use só o nome da fachada. As palavras-chave entram na categoria, nos serviços e na descrição.',
  },
  {
    erro: 'Criar um perfil novo quando já existia um',
    porque: 'Vira duplicidade, com risco de suspensão dos dois, e suas avaliações ficam divididas entre perfis fracos.',
    solucao: 'Pesquise antes (Passo 2). Achou o antigo, clique em "É o proprietário desta empresa?" e reivindique.',
  },
  {
    erro: 'Usar endereço de escritório virtual ou coworking que você não ocupa',
    porque: 'A verificação por vídeo existe justamente para checar isso, e reverter uma suspensão leva semanas.',
    solucao: 'Sem ponto físico, use área de atendimento e esconda o endereço (Passo 6). O alcance é o mesmo.',
  },
  {
    erro: 'Gravar o vídeo de verificação antes e tentar enviar depois',
    porque: 'A gravação é ao vivo, dentro do fluxo do Google. Vídeo pronto não é aceito.',
    solucao: 'Esteja no local, com bateria, e grave na hora — numa tomada só, de pelo menos 30 segundos.',
  },
  {
    erro: 'Escolher a categoria pelo nome que parecia mais bonito',
    porque: 'A categoria principal é o fator individual mais forte do bloco de mapas. Errou nela, some das buscas certas.',
    solucao: 'Copie a categoria dos três primeiros concorrentes no termo que você quer disputar.',
  },
  {
    erro: 'Oferecer desconto ou brinde em troca de avaliação',
    porque: 'O Google trata como engajamento falso. A punição chega a apagar todas as avaliações do perfil.',
    solucao: 'Peça de graça, na hora certa, com o link curto e uma mensagem educada (Passo 16).',
  },
  {
    erro: 'Não responder avaliação negativa, ou responder com raiva',
    porque: 'Quem lê está avaliando você, não o cliente irritado. Silêncio e briga afastam do mesmo jeito.',
    solucao: 'Responda em 24 horas, com calma, assumindo o que for seu e chamando para resolver no privado.',
  },
  {
    erro: 'Foto de banco de imagens, ou com telefone escrito por cima',
    porque: 'O Google remove esse tipo de imagem, e o cliente percebe na hora que é genérica.',
    solucao: 'Fotos reais tiradas com o celular, de dia, sem filtro e sem texto por cima.',
  },
  {
    erro: 'Esquecer o horário de feriado',
    porque: 'Estar aberto na hora da busca pesa no ranqueamento, e porta trancada num feriado rende estrela ruim.',
    solucao: 'Cadastre os horários especiais do ano inteiro de uma vez, em janeiro.',
  },
  {
    erro: 'Criar e nunca mais voltar',
    porque: 'Sem foto, publicação ou avaliação nova, o perfil vai perdendo posição para quem se mexe.',
    solucao: '15 minutos por semana, sempre no mesmo dia (Passo 19). É o suficiente.',
  },
]

export const faq = [
  {
    q: 'Preciso ter CNPJ para criar?',
    a: 'Não. Autônomo, MEI e profissional liberal podem criar normalmente. O que o Google exige é que o negócio exista de verdade e que você consiga provar isso na verificação — com fachada, ferramentas, estoque ou o sistema do caixa aberto.',
  },
  {
    q: 'Quanto custa? Recebi uma ligação cobrando para ativar meu perfil.',
    a: 'É gratuito, do começo ao fim, para sempre. O Google não liga cobrando taxa para criar, ativar, verificar ou manter um perfil. Ligação assim é golpe, e é comum logo depois que você cria, porque o telefone fica público. Não pague, não passe código por telefone e não dê acesso a quem ligou do nada.',
  },
  {
    q: 'Trabalho em casa. Vou ter que mostrar meu endereço?',
    a: 'Não. No Passo 6 você responde "não" para a pergunta do endereço visível e cadastra as áreas que atende. O endereço fica escondido do público e você continua aparecendo nas buscas da região. Você ainda informa o endereço ao Google na verificação, mas ele não vai ao ar.',
  },
  {
    q: 'Posso escolher a forma de verificação?',
    a: 'Em geral, não. O Google define o método conforme o tipo de negócio e o que ele já sabe sobre o endereço. Hoje o vídeo é o caminho mais comum. Se a opção oferecida não for possível para você — o endereço mudou, ninguém atende o telefone —, complete o que der e procure o suporte do Perfil da Empresa dentro da própria tela de verificação.',
  },
  {
    q: 'Quanto tempo demora para aparecer no Google?',
    a: 'A análise do vídeo costuma levar até cinco dias úteis; o cartão-postal, de 5 a 14 dias. Depois de aprovado, as informações básicas aparecem em poucos dias. Ficar bem posicionado no mapa para buscas concorridas é outra coisa: leva meses de rotina, e não existe atalho pago para essa parte.',
  },
  {
    q: 'Minha verificação por vídeo foi recusada. E agora?',
    a: 'Você pode tentar de novo, no mesmo perfil. Os motivos mais comuns são vídeo cortado ou editado, escuro demais, sem a placa com o nome, sem mostrar rua e número, ou sem nada que prove que você administra o lugar. A tabela do Passo 9 lista os cinco motivos e a correção de cada um.',
  },
  {
    q: 'Meu perfil foi suspenso. Dá para recuperar?',
    a: 'Dá, mas exige paciência e ordem. Primeiro corrija a causa — quase sempre nome com palavra-chave, endereço que não confere ou categoria incompatível. Só depois peça o restabelecimento pelo formulário do Google, anexando fotos da fachada e um documento do negócio. Pedir reativação sem corrigir a causa costuma render uma segunda recusa.',
  },
  {
    q: 'Posso mudar o nome ou o endereço depois?',
    a: 'Pode. Mudanças pequenas entram rápido; mudança de endereço ou de nome pode pedir nova verificação e demorar alguns dias. Se você mudou de ponto, atualize o perfil em vez de criar outro — criar de novo faz você perder todas as avaliações.',
  },
  {
    q: 'Recebi uma avaliação falsa de alguém que nunca foi meu cliente.',
    a: 'Responda publicamente, com educação, dizendo que não localizou o atendimento no sistema e se colocando à disposição. Depois clique nos três pontinhos da avaliação e escolha "Denunciar". A análise demora e nem sempre remove — por isso a defesa que funciona no dia a dia é ter avaliações boas e recentes chegando sempre.',
  },
  {
    q: 'Meu concorrente usa palavra-chave no nome e está na minha frente. Copio?',
    a: 'Não. Funciona mesmo — é um dos fatores mais fortes do bloco de mapas —, e é justamente por isso que é infração e que ele pode cair a qualquer momento. Você pode inclusive sugerir a correção: clique em "Sugerir uma edição" no perfil dele e proponha o nome certo. Copiar só coloca você na mesma fila de suspensão.',
  },
  {
    q: 'Preciso de site para ter um bom perfil?',
    a: 'Não para criar. Mas o botão "Site" é um dos mais clicados, e quem tem site costuma se sair melhor, porque o Google cruza as informações dos dois. Enquanto não tiver, use o link do WhatsApp: https://wa.me/55, mais o DDD e o número, sem espaços nem traços.',
  },
  {
    q: 'Tenho duas lojas. Crio dois perfis?',
    a: 'Sim, um por endereço, cada um com seu telefone e seu horário. O que não pode é ter dois perfis para o mesmo endereço — isso é duplicidade.',
  },
  {
    q: 'Perdi o acesso ao e-mail que criou o perfil.',
    a: 'Pesquise seu negócio no Google logado com o e-mail novo, clique em "É o proprietário desta empresa?" e siga o pedido de acesso. O Google avisa quem está com o perfil e dá um prazo para a pessoa responder. Se ninguém responder, o acesso costuma passar para você.',
  },
]

/** Numeros e limites que o leitor vai querer conferir depois. Vira a "cola". */
export const cola = {
  titulo: 'A cola: todos os números num lugar só',
  linhas: [
    ['Categorias', '1 principal mais até 9 secundárias'],
    ['Áreas de atendimento', 'até 20'],
    ['Descrição', '750 caracteres — só uns 250 aparecem antes do "Mais"'],
    ['Publicação', '1.500 caracteres — os 100 primeiros são o que aparece'],
    ['Novidade', 'sai da vitrine em cerca de 7 dias'],
    ['Oferta e Evento', 'ficam até a data final que você marcar'],
    ['Vídeo de verificação', 'ao vivo, sem cortes, no mínimo 30 segundos'],
    ['Análise do vídeo', 'costuma levar até 5 dias úteis'],
    ['Cartão-postal', 'chega em 5 a 14 dias; o código vale 30 dias'],
    ['Logo', 'quadrado, cerca de 720 por 720 pixels'],
    ['Fotos para começar', '10 a 12, mais 3 novas por mês'],
    ['Rotina', '15 minutos por semana, sempre no mesmo dia'],
  ],
}

export const checklistFinal = [
  {
    grupo: 'Básico',
    quando: 'faça hoje',
    itens: [
      'Conta Google certa, que é sua e você não vai perder',
      'Pesquisei antes para ver se o perfil já existia',
      'Nome igual ao da fachada, sem palavra-chave',
      'Categoria principal escolhida com base nos três primeiros concorrentes',
      'Endereço visível ou área de atendimento marcada',
      'Telefone que alguém atende, mais o link do site ou do WhatsApp',
      'Verificação enviada — se for vídeo, gravada ao vivo e numa tomada só',
    ],
  },
  {
    grupo: 'Perfil completo',
    quando: 'primeira semana',
    itens: [
      'Horário de todos os dias, com turno de almoço se houver',
      'Horários especiais de feriado cadastrados até dezembro',
      'Descrição escrita, com o essencial nas duas primeiras frases',
      '10 a 12 fotos enviadas: logo, capa, fachada, interior, equipe, produto',
      'Todos os serviços cadastrados um a um, com descrição',
      'Atributos marcados: pagamento, acessibilidade, comodidades',
      'Primeira publicação no ar',
      'Link curto de avaliação copiado e salvo no celular',
    ],
  },
  {
    grupo: 'Rotina',
    quando: 'para não cair',
    itens: [
      'Uma publicação por semana, sempre no mesmo dia',
      'Todas as avaliações respondidas em até 48 horas',
      'Pedido de avaliação enviado depois de cada atendimento',
      'Três fotos novas por mês',
      'Desempenho conferido uma vez por mês, com os números anotados',
      'Descrição, serviços e preços revisados a cada três meses',
    ],
  },
]

/** Fontes das regras e dos numeros citados. Vira a ultima pagina do PDF. */
export const fontes = [
  {
    o: 'Regras de nome, endereço, categorias e o que causa suspensão',
    onde: 'Google Business Profile Help — "Diretrizes para representar sua empresa no Google"',
    url: 'support.google.com/business/answer/3038177',
  },
  {
    o: 'Limite de categorias e como escolher a principal',
    onde: 'Google Business Profile Help — "Gerenciar a categoria da sua empresa"',
    url: 'support.google.com/business/answer/7249669',
  },
  {
    o: 'Requisitos do vídeo de verificação e prazo de análise',
    onde: 'Google Business Profile Help — "Verificar sua empresa com uma gravação em vídeo"',
    url: 'support.google.com/business/answer/14271705',
  },
  {
    o: 'Formas de verificação e prazos do cartão-postal',
    onde: 'Google Business Profile Help — "Verificar sua empresa no Google"',
    url: 'support.google.com/business/answer/7107242',
  },
  {
    o: 'Como o Google monta os resultados locais: relevância, distância e destaque',
    onde: 'Google Business Profile Help — "Dicas para melhorar seu ranqueamento local"',
    url: 'support.google.com/business/answer/7091',
  },
  {
    o: 'Proibição de incentivo em troca de avaliação (engajamento falso)',
    onde: 'Google Maps — "Políticas de conteúdo e avaliações"',
    url: 'support.google.com/contributionpolicy',
  },
  {
    o: 'Peso da categoria principal, dos sinais de avaliação e do horário aberto',
    onde: 'Whitespark — Local Search Ranking Factors 2026',
    url: 'whitespark.ca/local-search-ranking-factors',
  },
  {
    o: 'Aposentadoria do aplicativo Google Meu Negócio',
    onde: 'Search Engine Land — "Google My Business mobile app has stopped functioning forever"',
    url: 'searchengineland.com',
  },
]

export const totalPassos = partes.reduce((n, p) => n + p.passos.length, 0)

/* ==========================================================================
   O QUE TRANSFORMA REFERENCIA EM PRODUTO

   Os 19 passos acima sao a enciclopedia: certos, conferidos, completos. So que
   enciclopedia ninguem termina. O que faz alguem chegar ao fim e um plano com
   data, um exemplo que ele possa copiar inteiro, e um lugar onde ele se
   reconhece antes de comecar.

   E por isso que vem abaixo: diagnostico (onde voce esta), plano de 30 dias
   (quando fazer cada coisa), um negocio de exemplo preenchido campo por campo,
   modelos por ramo, e um mes de publicacoes ja escritas.
   ========================================================================== */

/** Diagnostico de entrada. A pessoa marca, soma, e descobre por onde comecar. */
export const diagnostico = {
  titulo: 'Em que pé está o seu perfil hoje?',
  instrucao:
    'Marque cada frase verdadeira e some 1 ponto para cada uma. Leva dois minutos e diz por onde você deve começar.',
  itens: [
    'Meu negócio aparece no Google quando eu pesquiso o nome dele',
    'O perfil está verificado (não aparece nenhum aviso pedindo verificação)',
    'Eu tenho o acesso — consigo editar sem pedir para ninguém',
    'O nome está igual ao da fachada, sem cidade nem serviço grudado',
    'A categoria principal descreve o que eu faço na maior parte do faturamento',
    'O horário está certo, incluindo feriados dos próximos meses',
    'Tem pelo menos 10 fotos, e alguma foi tirada nos últimos 30 dias',
    'Todos os meus serviços estão cadastrados um a um',
    'Publiquei alguma coisa nos últimos 7 dias',
    'Recebi pelo menos uma avaliação no último mês',
    'Respondi todas as avaliações, inclusive as ruins',
    'Olhei o Desempenho no último mês e sei quantas ligações vieram de lá',
  ],
  faixas: [
    {
      de: 0, ate: 3,
      titulo: 'Você está começando do zero',
      texto:
        'É o cenário mais comum, e o melhor: nada para desfazer. Faça a Parte 1 inteira hoje, de uma vez só. Ela termina com a verificação enviada, que é a etapa que depende de alguém aprovar — quanto antes sair, antes o resto começa a valer.',
    },
    {
      de: 4, ate: 7,
      titulo: 'O perfil existe, mas está pela metade',
      texto:
        'É onde está a maioria dos negócios do Brasil, e onde mais se perde cliente sem perceber: você aparece, a pessoa abre, e não encontra o que precisava para decidir. Pule direto para a Parte 2 e reserve uma tarde. Fotos, serviços e horário, nessa ordem, são os que mudam mais rápido.',
    },
    {
      de: 8, ate: 10,
      titulo: 'Está bom — e é aqui que quase todo mundo para',
      texto:
        'Seu perfil está melhor que o do concorrente médio. O que separa você do bloco de três agora não é preenchimento, é frequência. Vá para as Partes 3 e 4 e monte a rotina: publicação semanal e pedido de avaliação depois de cada atendimento.',
    },
    {
      de: 11, ate: 12,
      titulo: 'Você está entre os que disputam de verdade',
      texto:
        'Poucos chegam aqui. Use este guia como conferência: leia a página da cola, rode o checklist do fim, e concentre-se em manter o que já funciona. A partir deste ponto o ganho vem de avaliação recente e de responder rápido — não de mexer no cadastro.',
    },
  ],
}

/** Plano de execucao. O guia diz o que fazer; isto diz quando. */
export const plano30 = [
  {
    quando: 'Dia 1',
    tempo: '1h30',
    titulo: 'Nasce o perfil',
    tarefas: [
      'Passos 1 a 3: conta certa, busca pelo que já existe, criação',
      'Passos 4 a 7: nome, categoria, endereço ou área, telefone e site',
      'Passo 8: gravar e enviar a verificação, com o negócio aberto e o celular carregado',
    ],
    resultado: 'Perfil criado e verificação enviada. A partir daqui é esperar.',
  },
  {
    quando: 'Dias 2 a 5',
    tempo: '30 min por dia',
    titulo: 'Enquanto o Google analisa',
    tarefas: [
      'Passo 10: horário completo, com os feriados do ano inteiro',
      'Passo 11: escrever a descrição usando o modelo do seu ramo',
      'Passo 12: tirar e enviar as 10 primeiras fotos',
      'Passo 9: se a verificação reprovar, corrigir e reenviar no mesmo dia',
    ],
    resultado: 'Perfil pronto por dentro, esperando só a aprovação para render.',
  },
  {
    quando: 'Semana 2',
    tempo: '1h no total',
    titulo: 'Tudo que você vende, cadastrado',
    tarefas: [
      'Passo 13: cadastrar os serviços um a um, com o nome que o cliente usa',
      'Passo 14: marcar atributos de pagamento, acessibilidade e comodidade',
      'Passo 15: publicar a primeira novidade',
      'Passo 16: copiar o link curto de avaliação e salvar no celular',
    ],
    resultado: 'O perfil passa a aparecer em buscas por serviço, não só pelo nome.',
  },
  {
    quando: 'Semana 3',
    tempo: '20 min por dia',
    titulo: 'As primeiras avaliações',
    tarefas: [
      'Mandar o pedido de avaliação para todo cliente atendido, no mesmo dia',
      'Passo 17: responder cada avaliação que chegar, em até 48 horas',
      'Publicar a segunda novidade, no mesmo dia da semana da primeira',
      'Acrescentar 3 fotos novas',
    ],
    resultado: 'De 5 a 10 avaliações reais, e o hábito de pedir já instalado.',
  },
  {
    quando: 'Semana 4',
    tempo: '30 min',
    titulo: 'Medir e fechar o ciclo',
    tarefas: [
      'Passo 18: abrir o Desempenho e anotar os cinco números',
      'Conferir os termos pesquisados e cadastrar o serviço que faltou',
      'Publicar a terceira e a quarta novidade',
      'Rodar o checklist do fim do guia e marcar o que ficou faltando',
    ],
    resultado: 'Você sabe quantos clientes o Google trouxe — e o que fazer no mês seguinte.',
  },
]

/**
 * Um negocio de exemplo, preenchido campo por campo.
 * Leigo nao aprende com regra abstrata: aprende vendo alguem preencher.
 */
export const exemploCompleto = {
  titulo: 'Um perfil inteiro, preenchido na sua frente',
  intro:
    'A Padaria do Sol é inventada, mas cada campo abaixo segue exatamente as regras dos 19 passos. Use como gabarito: troque os dados pelos seus e o resultado é um perfil correto.',
  /* Duas tabelas em vez de uma: onze linhas de tres colunas nao cabem numa
     folha, e tabela cortada no meio e pior que tabela dividida por tema. */
  camposIdentidade: [
    ['Nome', 'Padaria do Sol', 'Igual à placa. Sem "melhor pão de Contagem" grudado.'],
    ['Categoria principal', 'Padaria', 'É o que ela é na maior parte do faturamento.'],
    ['Categorias secundárias', 'Confeitaria · Cafeteria · Loja de bolos', 'Só o que ela faz de verdade e toda semana.'],
    ['Endereço', 'R. das Flores, 240 — Jardim Industrial, Contagem/MG', 'Visível: o cliente vai até lá. Pino arrastado até a porta.'],
    ['Áreas atendidas', 'Jardim Industrial, Eldorado, Cidade Industrial', 'Só para as encomendas com entrega.'],
    ['Telefone', '(31) 98294-8067', 'É o WhatsApp da loja, e alguém responde.'],
    ['Site', 'wa.me/5531982948067', 'Não tem site ainda; o link leva direto à conversa.'],
    ['Horário', 'Seg a sáb, 6h às 19h · Dom, 6h às 12h', 'Com os feriados do ano já cadastrados.'],
  ],
  camposOferta: [
    ['Serviços', 'Bolo de aniversário · Salgado para festa · Café da manhã · Encomenda de pão', 'Um por um, com o nome que o cliente fala.'],
    ['Atributos', 'Pix · Cartão · Entrada acessível · Empresa familiar', 'Cada um vira filtro de busca para alguém.'],
    ['Fotos', '12 no primeiro dia, 3 novas por mês', 'Logo, capa, 3 da fachada, 4 do salão, 2 da equipe, resto de produto.'],
  ],
  descricao:
    'A Padaria do Sol assa pão quente de hora em hora no Jardim Industrial, em Contagem, desde 2011. Fazemos bolo de aniversário, salgado para festa e encomenda de pão para padarias menores da região.\n\nAtendemos Jardim Industrial, Eldorado e Cidade Industrial. Encomenda de bolo com 48 horas de antecedência, e entrega no bairro sem taxa.\n\nAbrimos às 6h todos os dias, inclusive domingo. Estamos na R. das Flores, 240, com estacionamento na porta.',
}

/** Descricao pronta por ramo. O modelo generico do Passo 11, ja preenchido. */
export const modelosPorRamo = [
  {
    ramo: 'Salão de beleza',
    texto:
      'O NOME atende em BAIRRO, CIDADE, desde ANO, com corte feminino, escova, coloração e penteado para festa. Trabalhamos com hora marcada, então você não espera.\n\nAtendemos BAIRRO 1, BAIRRO 2 e região. Coloração com avaliação de fio antes, sem compromisso.\n\nDe terça a sábado, das 9h às 19h. Agende pelo WhatsApp TELEFONE ou passe na RUA, NÚMERO.',
  },
  {
    ramo: 'Eletricista, encanador, montador',
    texto:
      'NOME atende CIDADE e região desde ANO em instalação elétrica, troca de disjuntor, chuveiro e tomada. Atendimento no mesmo dia para urgência.\n\nVamos até BAIRRO 1, BAIRRO 2 e arredores. Orçamento sem compromisso pelo WhatsApp, com foto do problema.\n\nGarantia de 90 dias no serviço. Chame no TELEFONE de segunda a sábado, das 7h às 18h.',
  },
  {
    ramo: 'Restaurante, lanchonete, padaria',
    texto:
      'O NOME serve TIPO DE COMIDA em BAIRRO, CIDADE, desde ANO. O mais pedido é PRATO CARRO-CHEFE.\n\nTemos salão com ar-condicionado, atendimento para grupo e entrega em BAIRRO 1 e BAIRRO 2. Aceitamos Pix e cartão.\n\nDe DIA a DIA, das HORA às HORA. Reserve pelo TELEFONE ou venha na RUA, NÚMERO — tem estacionamento na porta.',
  },
  {
    ramo: 'Clínica, consultório, profissional de saúde',
    texto:
      'A NOME atua em BAIRRO, CIDADE, desde ANO, com ESPECIALIDADE 1, ESPECIALIDADE 2 e ESPECIALIDADE 3. Atendimento com hora marcada e retorno incluso.\n\nRecebemos pacientes de BAIRRO 1, BAIRRO 2 e região. Aceitamos CONVÊNIO 1 e CONVÊNIO 2, e também particular.\n\nDe DIA a DIA, das HORA às HORA. Agende pelo TELEFONE. Estamos na RUA, NÚMERO, com entrada acessível.',
  },
  {
    ramo: 'Loja de bairro',
    texto:
      'A NOME vende O QUE VENDE em BAIRRO, CIDADE, desde ANO. Trabalhamos com MARCA 1, MARCA 2 e MARCA 3.\n\nTem troca em 30 dias, parcelamento em até 6 vezes e Pix. Se não tiver na loja, a gente encomenda e avisa quando chegar.\n\nDe DIA a DIA, das HORA às HORA. Passe na RUA, NÚMERO ou chame no TELEFONE.',
  },
  {
    ramo: 'Serviço feito em casa (bolo, costura, artesanato)',
    texto:
      'NOME faz O QUE FAZ por encomenda, em CIDADE, desde ANO. Cada peça é feita sob medida, com PRAZO de antecedência.\n\nEntregamos em BAIRRO 1, BAIRRO 2 e região; combinamos o ponto de entrega pelo WhatsApp. Orçamento na hora, pela foto do que você quer.\n\nChame no TELEFONE de DIA a DIA, das HORA às HORA. Atendimento só por encomenda — não temos loja.',
  },
]

/** Um mes de publicacoes ja escritas. Tira a desculpa de "nao sei o que postar". */
export const calendarioPublicacoes = [
  {
    semana: 'Semana 1',
    tema: 'Apresentação',
    oQue: 'Diga que vocês estão no Google, com endereço, horário e o que fazem.',
    modelo:
      'Agora você encontra a NOME DO NEGÓCIO aqui no Google, com endereço, horário e telefone sempre atualizados. Estamos na RUA, NÚMERO, de DIA a DIA. Fazemos SERVIÇO 1, SERVIÇO 2 e SERVIÇO 3.',
  },
  {
    semana: 'Semana 2',
    tema: 'O carro-chefe',
    oQue: 'Mostre o serviço ou produto mais vendido, com foto dele pronto.',
    modelo:
      'O mais pedido aqui é SERVIÇO MAIS VENDIDO — e é por isso: MOTIVO CURTO E CONCRETO. A partir de R$ VALOR. Chame no TELEFONE para reservar o seu.',
  },
  {
    semana: 'Semana 3',
    tema: 'Prova',
    oQue: 'Um trabalho concluído, um antes e depois, ou um agradecimento a um cliente.',
    modelo:
      'Terminamos mais um TIPO DE TRABALHO em BAIRRO esta semana. Levou TEMPO e ficou assim. Se você precisa de SERVIÇO, chame no TELEFONE que a gente passa o orçamento hoje mesmo.',
  },
  {
    semana: 'Semana 4',
    tema: 'Utilidade',
    oQue: 'Ensine algo pequeno do seu ramo. É o que mais faz a pessoa salvar o perfil.',
    modelo:
      'DICA RÁPIDA DO SEU RAMO — em duas linhas, do jeito que você explicaria para um cliente no balcão. Qualquer dúvida, chame no TELEFONE: a gente responde mesmo sem você comprar nada.',
  },
]
