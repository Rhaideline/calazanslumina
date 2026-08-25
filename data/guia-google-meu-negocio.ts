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
 * pagina, esquece o PDF, e quem baixou fica com a versao errada. Aqui a
 * correcao entra num lugar so e os dois saem certos.
 *
 * TOM
 * O leitor tipico nao sabe o que e "categoria principal", tem medo de clicar
 * errado e vai fazer isso sozinho, sem agencia. Por isso cada passo diz onde
 * clicar com as palavras que aparecem na tela, e nao "acesse as configuracoes".
 *
 * ATENCAO AO ATUALIZAR
 * O Google renomeia botao com frequencia. Quando um caminho de clique mudar,
 * corrija `ondeClicar` — e o campo que quebra primeiro e o que mais trava a
 * pessoa leiga.
 */

export interface Passo {
  n: number
  titulo: string
  /** Tempo realista para quem nunca fez. Vira o "5 min" ao lado do titulo. */
  tempo: string
  /** Uma frase: o que estara pronto quando este passo terminar. */
  objetivo: string
  /** Caminho de clique literal, com as palavras que aparecem na tela. */
  ondeClicar: string[]
  /** O porque, em linguagem de gente. */
  detalhe: string
  dica?: string
  atencao?: string
  /** Texto pronto para copiar (modelo de descricao, mensagem, resposta). */
  copiar?: { titulo: string; texto: string }
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
      'Não é o nome do CNPJ nem o nome com propaganda junto. É o nome que o cliente lê na porta. Isso vai importar no Passo 4.',
  },
  {
    item: 'Endereço completo com CEP — ou a lista de bairros e cidades que você atende',
    porque:
      'São dois caminhos diferentes dentro do cadastro. Quem atende em casa ou vai até o cliente NÃO deve mostrar o endereço, e o Passo 6 explica como esconder.',
  },
  {
    item: 'Um telefone que alguém atende de verdade',
    porque:
      'Pode ser o WhatsApp do negócio. O botão "Ligar" é um dos mais clicados do perfil — telefone que chama e ninguém atende queima o cliente que você levou meses para conquistar.',
  },
  {
    item: 'De 8 a 12 fotos no celular: fachada, ambiente, você ou a equipe, produto ou serviço',
    porque:
      'Perfil sem foto quase não recebe clique. Não precisa de fotógrafo: celular, de dia, sem filtro, resolve. O Passo 11 diz quais fotos e em que ordem.',
  },
  {
    item: '15 minutos sem interrupção e o celular carregado',
    porque:
      'A verificação mais comum hoje é por VÍDEO, gravado na hora, andando pelo local. Se a bateria acabar no meio, você recomeça.',
  },
]

export const partes: Parte[] = [
  {
    numero: 1,
    titulo: 'Criar e verificar',
    resumo:
      'Do zero até o Google confirmar que o negócio é seu. É a parte que trava a maioria das pessoas — e a única que tem prazo.',
    passos: [
      {
        n: 1,
        titulo: 'Entre na conta Google certa (e só nela)',
        tempo: '2 min',
        objetivo: 'Estar logado no e-mail que vai ser o dono do perfil para sempre.',
        ondeClicar: [
          'Abra o navegador e vá em google.com',
          'Olhe o canto superior direito da tela',
          'Se aparecer a bolinha com sua foto ou a inicial do seu nome, você já está logado',
          'Clique nessa bolinha e confira o e-mail que aparece embaixo do seu nome',
          'Se não for o e-mail que você quer usar, clique em "Adicionar outra conta" ou "Fazer login"',
        ],
        detalhe:
          'Todo perfil no Google pertence a uma conta de e-mail. Quem estiver logado na hora da criação vira o proprietário. Parece detalhe, mas é o erro número um que faz um negócio perder o próprio perfil dois anos depois — o estagiário que criou foi embora e levou o acesso junto.',
        dica: 'Se o negócio tem sócio, crie com um e-mail do negócio (contato@..., ou um Gmail novo do tipo padariadosol.contato@gmail.com) e depois adicione os sócios como gerentes. E-mail pessoal de uma pessoa só é um risco desnecessário.',
        atencao:
          'Não crie o perfil pelo celular de outra pessoa nem por um e-mail de agência que você não controla. Se um dia você trocar de agência, o perfil fica com eles.',
      },
      {
        n: 2,
        titulo: 'Antes de criar: veja se seu negócio JÁ existe no Google',
        tempo: '3 min',
        objetivo: 'Descobrir se você precisa criar do zero ou apenas reivindicar um perfil que já está lá.',
        ondeClicar: [
          'Na busca do Google, digite o nome do seu negócio + a cidade. Exemplo: "Padaria do Sol Contagem"',
          'Veja se aparece um quadro do lado direito (no computador) ou um cartão no topo (no celular)',
          'Se aparecer, procure a frase "É o proprietário desta empresa?" ou "Reivindicar esta empresa"',
          'Clique nessa frase e siga o processo — você cai direto na verificação',
          'Se não aparecer nada, aí sim você cria do zero (Passo 3)',
        ],
        detalhe:
          'O Google cria perfis sozinho. Ele junta o que achou em lista telefônica, cadastro de prefeitura, mapa antigo, ou alguém marcou seu endereço no Maps. Muito negócio já tem um perfil rodando há anos — às vezes com telefone e horário errados — e o dono nem sabe.',
        dica: 'Procure também pelo endereço e pelo telefone antigo, não só pelo nome. Perfis criados automaticamente costumam ter o nome escrito de um jeito diferente do seu.',
        atencao:
          'Se você criar um segundo perfil sabendo que já existe um, o Google suspende os dois por duplicidade. Pior: as avaliações ficam divididas entre os dois e nenhum tem força.',
      },
      {
        n: 3,
        titulo: 'Crie o perfil',
        tempo: '2 min',
        objetivo: 'Ter o cadastro aberto, com o formulário na tela.',
        ondeClicar: [
          'Na busca do Google, digite: criar perfil da empresa',
          'Clique no resultado oficial do Google (google.com/business) e depois em "Gerenciar agora"',
          'Escreva o nome do seu negócio no campo que aparecer',
          'Se o Google sugerir um nome parecido numa listinha embaixo, LEIA a sugestão — pode ser o seu perfil antigo (volte ao Passo 2)',
          'Se não for, clique em "Criar empresa com o nome ..." e siga',
        ],
        detalhe:
          'Um aviso que confunde muita gente: o aplicativo "Google Meu Negócio" não existe mais. O Google desligou o app, e hoje você gerencia tudo pela própria busca — basta estar logado e pesquisar o nome do seu negócio, que os botões de edição aparecem na tela. O nome popular "Google Meu Negócio" continua, mas o nome oficial hoje é "Perfil da Empresa no Google".',
        dica: 'Faça este cadastro pelo computador se puder. A tela é maior, os campos ficam todos visíveis e você erra menos. A verificação por vídeo, essa sim, vai precisar do celular.',
      },
      {
        n: 4,
        titulo: 'Nome do negócio: exatamente como está na fachada',
        tempo: '2 min',
        objetivo: 'Escrever o nome de um jeito que não derrube seu perfil lá na frente.',
        ondeClicar: [
          'No campo "Nome da empresa", escreva só o nome real',
          'Confira letra por letra: acento, hífen, "&", tudo igual à placa',
          'Não acrescente cidade, bairro, serviço, telefone nem "24h"',
        ],
        detalhe:
          'A regra do Google é curta: o nome no perfil tem que ser o nome que o cliente vê no mundo real — na fachada, no cartão, na embalagem. Só isso.',
        dica: 'Se o nome fantasia é diferente do nome do CNPJ, use o nome fantasia. É o que o cliente conhece e o que ele vai digitar na busca.',
        atencao:
          'CERTO: "Padaria do Sol". ERRADO: "Padaria do Sol - Melhor Pão Quente de Contagem | Bolos e Salgados 24h". Enfiar palavra-chave no nome é a causa mais comum de suspensão. E qualquer concorrente pode denunciar seu perfil em dois cliques.',
      },
      {
        n: 5,
        titulo: 'Categoria principal: a escolha que mais pesa',
        tempo: '5 min',
        objetivo: 'Escolher a categoria que decide em quais buscas você vai aparecer.',
        ondeClicar: [
          'No campo "Categoria da empresa", comece a digitar o que você É (não o que você vende)',
          'Escolha uma opção da lista que o Google mostra — não dá para inventar categoria',
          'Depois de criar o perfil, volte em "Editar perfil" › "Sobre" › "Categorias" e adicione até 9 categorias secundárias',
        ],
        detalhe:
          'De tudo que você vai preencher, a categoria principal é o que mais decide se você aparece. Ela é o filtro: quando alguém busca "cabeleireiro perto de mim", o Google mostra quem está na categoria "Cabeleireiro" — não quem escreveu "cabeleireiro" na descrição. Escolha o que o negócio É na maior parte do faturamento. Uma lanchonete que também faz bolo é "Lanchonete" (principal) e "Confeitaria" (secundária), nunca o contrário.',
        dica: 'Truque para acertar: pesquise no Google o termo que você quer ranquear ("manicure Betim"). Abra os 3 primeiros perfis que aparecerem no mapa e veja qual categoria está escrita embaixo do nome deles — ela é pública. Use a que mais se repete.',
        atencao:
          'Categoria secundária demais atrapalha. Se você marcar 9 coisas sem relação, o Google fica sem entender o que você é e você perde força em todas. Marque só o que você faz de verdade e com frequência.',
      },
      {
        n: 6,
        titulo: 'Endereço OU área de atendimento (não erre aqui)',
        tempo: '5 min',
        objetivo: 'Aparecer no mapa da região certa sem expor o endereço de casa.',
        ondeClicar: [
          'Na pergunta "Você quer adicionar um local que os clientes possam visitar?", pare e pense',
          'TEM LOJA OU SALA que recebe cliente: responda SIM, preencha CEP, rua e número, e depois arraste o pino no mapa até a porta exata',
          'ATENDE NA CASA DO CLIENTE ou trabalha de casa: responda NÃO. O Google vai pedir as regiões que você atende',
          'Em "Áreas atendidas", digite cidades ou bairros e escolha da lista (até 20)',
        ],
        detalhe:
          'São três situações e cada uma tem um caminho. (1) Loja, consultório, restaurante: endereço visível, o cliente vai até você. (2) Eletricista, diarista, fotógrafo, bolo por encomenda feito em casa: endereço ESCONDIDO e área de atendimento marcada — você continua aparecendo no mapa da região, mas ninguém vê onde você mora. (3) Os dois casos juntos, como uma barbearia que também atende a domicílio: endereço visível mais áreas de atendimento.',
        dica: 'Depois de salvar, procure seu endereço no Google Maps e veja onde o pino caiu. É comum ele parar no meio da rua ou no vizinho. Arraste até a porta — quem chega usando aplicativo de rota agradece.',
        atencao:
          'Não use endereço de escritório virtual, coworking que você não ocupa, nem casa de parente em outra cidade só para "pegar" aquela região. O Google verifica isso por vídeo e suspende. Perder o perfil por isso é comum, e a recuperação demora semanas.',
      },
      {
        n: 7,
        titulo: 'Telefone e site',
        tempo: '2 min',
        objetivo: 'Dar ao cliente dois jeitos de falar com você sem sair do Google.',
        ondeClicar: [
          'Preencha o telefone com DDD. Pode ser o número do WhatsApp do negócio',
          'No campo do site, cole o endereço completo do seu site (com https://)',
          'Não tem site? Cole o link do seu Instagram ou um link de WhatsApp no formato https://wa.me/5531999999999',
        ],
        detalhe:
          'O telefone do perfil vira o botão "Ligar", um dos mais clicados. Use um número que alguém atende no horário que você declarou. Se você só responde por WhatsApp, coloque o número do WhatsApp mesmo — a pessoa liga, vê que é WhatsApp e manda mensagem.',
        dica: 'Aquele site gratuito que o Google oferecia dentro do Meu Negócio foi desativado e não existe mais. Se você tinha um, ele saiu do ar. Enquanto não tiver site próprio, o link do WhatsApp converte melhor do que o do Instagram.',
      },
      {
        n: 8,
        titulo: 'Verificação: a prova de que o negócio é seu',
        tempo: '10 a 20 min (resposta em até 5 dias)',
        objetivo: 'Provar ao Google que você existe de verdade, para o perfil começar a aparecer.',
        ondeClicar: [
          'Quando o Google pedir "Escolha uma forma de verificação", leia as opções disponíveis para o SEU caso',
          'VÍDEO (a mais comum hoje): pegue o celular, clique em "Gravar vídeo" e siga o roteiro abaixo',
          'CARTÃO-POSTAL: chega pelo correio em até 14 dias com um código de 5 dígitos',
          'TELEFONE ou E-MAIL: o código chega na hora — só aparece para alguns tipos de negócio',
          'Depois de enviar, é só esperar. O resultado chega no e-mail da conta',
        ],
        detalhe:
          'A verificação por vídeo é um filme único, sem cortes e sem pausa, de 1 a 5 minutos, gravado NO LOCAL. O Google quer ver três coisas, nesta ordem: (1) que o lugar existe — grave a fachada com a placa e a rua, mostrando um ponto de referência, o número da casa, o comércio vizinho; (2) que é o seu negócio — entre e mostre o ambiente, os equipamentos, o estoque, as ferramentas na van; (3) que você manda ali — mostre algo que só o dono tem: a chave abrindo a porta, a maquininha de cartão, o sistema do caixa aberto, um documento com o nome da empresa.',
        dica: 'Grave na horizontal, andando devagar, de dia. Não precisa falar nada, mas falar ajuda: "aqui é a fachada da Padaria do Sol, rua tal, número tal; entrando, o balcão; aqui o forno; e aqui a maquininha no nome da empresa". Se der errado, você pode tentar de novo.',
        atencao:
          'Enquanto não for verificado, seu perfil quase não aparece nas buscas. E este é o único passo do guia com prazo: se escolher cartão-postal e ele não chegar em 14 dias, peça outro, não fique esperando.',
      },
    ],
  },
  {
    numero: 2,
    titulo: 'Deixar o perfil completo',
    resumo:
      'Perfil verificado mas vazio não vende. Aqui você preenche o que faz a pessoa escolher você, e não o concorrente ao lado.',
    passos: [
      {
        n: 9,
        titulo: 'Horário de funcionamento (e o de feriado)',
        tempo: '5 min',
        objetivo: 'Nunca mais aparecer como "Fechado" num dia em que você está aberto.',
        ondeClicar: [
          'Pesquise o nome do seu negócio no Google, já logado',
          'Clique em "Editar perfil"',
          'Vá na aba "Horário"',
          'Preencha dia por dia. Fecha para almoço? Clique em "Adicionar horário" e crie os dois turnos',
          'Desça até "Horários especiais" e cadastre os feriados dos próximos meses',
        ],
        detalhe:
          'O Google mostra "Aberto agora" ou "Fechado" em letras grandes, verde ou vermelho, antes de qualquer outra informação. Um horário errado não é um detalhe: é um cliente que leu "Fechado" e clicou no concorrente. E, quando alguém vai até a loja e encontra fechado, o resultado costuma ser uma avaliação de 1 estrela.',
        dica: 'Cadastre os feriados de uma vez, no começo do ano. Leva 10 minutos e evita o pior cenário: o cliente que atravessa a cidade num feriado porque o Google disse que você estava aberto.',
      },
      {
        n: 10,
        titulo: 'A descrição: 750 caracteres que vendem',
        tempo: '15 min',
        objetivo: 'Escrever um texto que responde "por que eu escolheria você?" em 30 segundos de leitura.',
        ondeClicar: [
          'Em "Editar perfil", vá na aba "Sobre"',
          'Clique no campo "Descrição da empresa"',
          'Cole seu texto e clique em "Salvar"',
          'Pode levar algumas horas até o Google aprovar e publicar',
        ],
        detalhe:
          'A descrição não muda muito sua posição no mapa, mas muda a decisão de quem já te achou. Ela precisa dizer, nesta ordem: o que você faz, para quem, onde, há quanto tempo e o que você tem de diferente. Escreva como falaria com um cliente no balcão — sem "somos uma empresa que preza pela excelência", que não significa nada para ninguém.',
        copiar: {
          titulo: 'Modelo — troque o que está em MAIÚSCULA',
          texto:
            'A NOME DO NEGÓCIO atua em CIDADE/BAIRRO desde ANO, oferecendo SERVIÇO 1, SERVIÇO 2 e SERVIÇO 3 para PARA QUEM É (ex.: famílias, condomínios, pequenas empresas).\n\nAtendemos BAIRRO 1, BAIRRO 2 e região, com DIFERENCIAL REAL (ex.: atendimento no mesmo dia, orçamento sem compromisso, garantia de 90 dias, estacionamento próprio).\n\nO que os clientes mais procuram aqui: SERVIÇO MAIS VENDIDO. Trabalhamos de DIA a DIA, das HORA às HORA. Agende pelo telefone TELEFONE ou passe na RUA, NÚMERO.',
        },
        dica: 'Cite o bairro e a cidade de forma natural no texto — não repetidos dez vezes. Uma ou duas menções ajudam o Google a entender onde você atua; dez viram spam.',
        atencao:
          'Não coloque preço, promoção com prazo, telefone repetido nem link na descrição. O Google recusa, e você fica sem descrição nenhuma sem entender o motivo.',
      },
      {
        n: 11,
        titulo: 'Fotos: quais tirar, quantas e em que ordem',
        tempo: '20 min',
        objetivo: 'Fazer o perfil parecer um negócio de verdade — porque perfil sem foto passa batido.',
        ondeClicar: [
          'Pesquise seu negócio no Google, logado, e clique em "Adicionar foto"',
          'Envie primeiro o LOGO (quadrado, cerca de 720 x 720 pixels)',
          'Depois a CAPA — a melhor foto do lugar ou do trabalho pronto, na horizontal',
          'Depois as demais, marcando a categoria de cada uma: "Exterior", "Interior", "Equipe", "Produto"',
        ],
        detalhe:
          'A ordem que funciona: 1 logo, 1 capa, 2 ou 3 fotos da FACHADA (é a foto que faz a pessoa reconhecer o lugar na rua e não desistir), 3 ou 4 do ambiente por dentro, 2 da equipe ou de você trabalhando (rosto humano aumenta confiança) e 3 ou mais do produto ou do serviço pronto. Comece com 10 a 12 e acrescente 3 novas por mês.',
        dica: 'Celular basta. Regras simples: de dia, luz natural, câmera limpa, sem zoom, na horizontal e sem filtro. Para a fachada, atravesse a rua e enquadre a placa inteira.',
        atencao:
          'Não use foto de banco de imagens, não escreva texto ou promoção por cima e não coloque marca d’água com telefone. O Google remove essas fotos, e imagem genérica de internet é o sinal mais rápido de perfil abandonado.',
      },
      {
        n: 12,
        titulo: 'Serviços e produtos, um por um',
        tempo: '20 min',
        objetivo: 'Aparecer em buscas por serviço específico, não só pelo nome do negócio.',
        ondeClicar: [
          'Em "Editar perfil", procure a aba "Serviços" (ou "Produtos", dependendo da sua categoria)',
          'Clique em "Adicionar serviço"',
          'Escolha primeiro os serviços que o Google já sugere pela sua categoria — eles valem mais',
          'Não encontrou o seu? Clique em "Adicionar serviço personalizado" e escreva o nome',
          'Preencha a descrição (até 300 caracteres) e, se fizer sentido, o preço ou "A partir de R$ ..."',
        ],
        detalhe:
          'Cada serviço cadastrado é uma porta de entrada. Um salão que cadastra "corte feminino", "escova", "coloração", "progressiva" e "penteado para festa" passa a aparecer em cinco buscas diferentes, em vez de só em "salão de beleza". Cadastre um por um, com o nome do jeito que o cliente fala — "desentupimento de pia", não "serviços hidráulicos especializados".',
        dica: 'Preço assusta menos do que você imagina e filtra curioso. Se não quiser fixar, use "A partir de". Quem não mostra preço nenhum recebe muita mensagem de quem não vai comprar.',
      },
      {
        n: 13,
        titulo: 'Atributos e botões: os detalhes que decidem',
        tempo: '10 min',
        objetivo: 'Ativar as informações que o cliente filtra na hora de escolher.',
        ondeClicar: [
          'Em "Editar perfil", vá em "Mais" ou "Atributos"',
          'Marque as formas de pagamento: Pix, cartão, dinheiro',
          'Marque acessibilidade: entrada acessível para cadeira de rodas, estacionamento',
          'Marque comodidades: Wi-Fi, banheiro, ar-condicionado, aceita pet, espaço kids',
          'Se fizer sentido, marque identificação: "Mulheres à frente", "Empresa familiar"',
          'Ative as mensagens em "Mensagens" — mas só se você for responder',
        ],
        detalhe:
          'Atributo não é enfeite: o Google usa como filtro de busca. Quem procura "restaurante com estacionamento" ou "aceita Pix" só vê quem marcou. É o item que leva 10 minutos e que a maioria dos concorrentes nunca preencheu.',
        atencao:
          'Ativou mensagens? Responda em até 24 horas. O Google mede seu tempo de resposta e desativa o botão de quem ignora, além de exibir "costuma demorar a responder" para o cliente.',
      },
    ],
  },
  {
    numero: 3,
    titulo: 'Aparecer mais e ganhar avaliações',
    resumo:
      'Perfil completo é o básico. O que separa quem fica no topo de quem some é o que você faz DEPOIS de criar.',
    passos: [
      {
        n: 14,
        titulo: 'Sua primeira publicação',
        tempo: '10 min',
        objetivo: 'Mostrar ao Google (e ao cliente) que o negócio está ativo.',
        ondeClicar: [
          'Pesquise seu negócio no Google, logado',
          'Clique em "Adicionar novidade" ou "Publicar"',
          'Escolha o tipo: Novidade, Oferta ou Evento',
          'Escreva até cerca de 1.500 caracteres — mas as 2 primeiras linhas são o que aparece',
          'Adicione UMA foto boa e escolha um botão: "Saiba mais", "Ligar agora", "Reservar"',
        ],
        detalhe:
          'São três tipos. NOVIDADE: o dia a dia — chegou produto, mudou horário, terminou um serviço. Some da vitrine depois de cerca de 7 dias, então repita. OFERTA: promoção com data de início e fim; fica no ar até a data acabar. EVENTO: data e hora marcadas, para aula, feira ou inauguração.',
        copiar: {
          titulo: 'Modelo de primeira publicação',
          texto:
            'Chegamos ao Google! Agora você encontra a NOME DO NEGÓCIO aqui, com endereço, horário e telefone sempre atualizados.\n\nEstamos na RUA, NÚMERO, BAIRRO, de DIA a DIA, das HORA às HORA. Fazemos SERVIÇO 1, SERVIÇO 2 e SERVIÇO 3.\n\nPasse aqui ou chame no telefone TELEFONE — a gente responde rápido.',
        },
        dica: 'Publique 1 vez por semana, sempre no mesmo dia. Perfil que publica aparece mais do que perfil parado, e isso leva 5 minutos.',
      },
      {
        n: 15,
        titulo: 'Pegue seu link de avaliação e comece a pedir',
        tempo: '10 min',
        objetivo: 'Ter um link curto que abre a janelinha de estrelas em um clique.',
        ondeClicar: [
          'Pesquise seu negócio no Google, logado',
          'Clique em "Peça avaliações" ou "Receber mais avaliações"',
          'O Google mostra um link curto — clique em "Copiar link"',
          'Guarde esse link no bloco de notas do celular. Você vai usar todo dia',
          'Mande no WhatsApp logo depois de atender, com o cliente ainda satisfeito',
        ],
        detalhe:
          'Avaliação é o segundo fator que mais pesa para aparecer no mapa, depois da categoria. E é o que mais pesa na decisão do cliente: a maioria lê as avaliações antes de ligar. O ponto não é ter 500 — é ter avaliações recentes e constantes. Cinco por mês, todo mês, valem mais que 60 de uma vez e nunca mais.',
        copiar: {
          titulo: 'Mensagem de WhatsApp para pedir avaliação',
          texto:
            'Oi, NOME! Espero que tenha gostado do atendimento de hoje.\n\nPosso te pedir um favor de 30 segundos? Sua avaliação no Google ajuda demais outras pessoas da região a nos encontrar.\n\nÉ só clicar aqui e tocar nas estrelinhas: SEU LINK\n\nMuito obrigado!',
        },
        atencao:
          'NUNCA ofereça desconto, brinde ou sorteio em troca de avaliação. É proibido pelo Google, é denúncia fácil do concorrente e pode custar todas as suas avaliações de uma vez. Também não peça para todo mundo no mesmo dia: 40 avaliações numa terça-feira é o padrão que dispara o alarme de fraude.',
      },
      {
        n: 16,
        titulo: 'Responda TODAS as avaliações — inclusive as ruins',
        tempo: '10 min por semana',
        objetivo: 'Transformar avaliação em vitrine, e reclamação em prova de que você resolve.',
        ondeClicar: [
          'Pesquise seu negócio no Google, logado',
          'Clique em "Ler avaliações"',
          'Clique em "Responder" embaixo de cada uma',
          'Responda em até 48 horas — as negativas, no mesmo dia',
        ],
        detalhe:
          'Quem lê uma avaliação ruim não está julgando o problema: está olhando como você reagiu. Uma resposta calma, que assume e resolve, converte MAIS do que não ter reclamação nenhuma. Use o caminho: lamente, assuma o que for seu, tire a discussão da vitrine (chame no telefone ou WhatsApp) e diga o que vai mudar. Nunca discuta, nunca exponha o cliente e nunca escreva com raiva — respire e responda amanhã, se precisar.',
        copiar: {
          titulo: '3 respostas prontas',
          texto:
            'PARA 5 ESTRELAS:\n"Que alegria ler isso, NOME! Obrigado pela confiança — a equipe toda fica feliz. Te esperamos na próxima!"\n\nPARA 3 ESTRELAS:\n"Obrigado pelo retorno, NOME. Fico feliz que no geral tenha sido bom, e quero entender o que faltou para chegar nas 5. Pode me chamar no TELEFONE? Sua opinião ajuda a gente a melhorar de verdade."\n\nPARA 1 ESTRELA:\n"Sinto muito pelo ocorrido, NOME. Não foi o atendimento que a gente quer entregar, e a responsabilidade é nossa. Já conversei com a equipe sobre o que aconteceu. Pode falar comigo direto no TELEFONE? Quero resolver isso com você."',
        },
        dica: 'Na resposta positiva, cite naturalmente o serviço e a cidade: "obrigado por confiar na gente para a troca de resistência, aqui em Betim". Isso dá contexto ao Google sem parecer forçado.',
      },
    ],
  },
  {
    numero: 4,
    titulo: 'Manter vivo',
    resumo:
      'Perfil abandonado cai. Esta parte é curta de propósito: são 15 minutos por semana para não perder o que você construiu.',
    passos: [
      {
        n: 17,
        titulo: 'Leia o Desempenho (só 5 números importam)',
        tempo: '10 min por mês',
        objetivo: 'Saber se o perfil está trazendo cliente — e não só "visualização".',
        ondeClicar: [
          'Pesquise seu negócio no Google, logado',
          'Clique em "Desempenho"',
          'Escolha o período "Últimos 3 meses" para poder comparar',
          'Olhe: ligações, cliques no site, pedidos de rota, mensagens e as buscas que te acharam',
        ],
        detalhe:
          'Ignore o número grande de visualizações — ele sobe e desce sozinho e não paga conta. Olhe as AÇÕES: quantas pessoas ligaram, pediram rota, clicaram no site ou mandaram mensagem. Esses são clientes de verdade. E olhe a lista de termos pesquisados: ela mostra as palavras que as pessoas usaram para te achar. Se aparecer um serviço que você faz e não cadastrou, volte ao Passo 12 e cadastre.',
        dica: 'Anote os números do mês num caderno ou numa planilha simples. Sem comparação, nenhum número significa nada.',
      },
      {
        n: 18,
        titulo: 'A rotina de 15 minutos por semana',
        tempo: '15 min por semana',
        objetivo: 'Manter o perfil ativo com o mínimo de esforço possível.',
        ondeClicar: [
          'TODA SEMANA: 1 publicação nova e responder as avaliações e mensagens que chegaram',
          'TODO MÊS: 3 fotos novas, conferir o horário e olhar o Desempenho',
          'A CADA 3 MESES: reler a descrição, revisar serviços e preços, cadastrar os feriados que vêm',
          'SEMPRE QUE MUDAR ALGO: telefone, endereço ou horário, atualize no MESMO dia',
        ],
        detalhe:
          'Não existe segredo nem truque. Os perfis que ficam no topo são os que recebem avaliação toda semana, publicam, têm foto recente e informação certa. É chato, é repetitivo, e é exatamente por isso que a maioria dos concorrentes desiste no segundo mês — e você fica.',
        dica: 'Marque no celular: toda terça, 9h, "15 min do Google". Repetir sempre no mesmo horário é o que faz a rotina durar.',
      },
    ],
  },
]

export const erros = [
  {
    erro: 'Enfiar palavra-chave no nome do negócio',
    porque: 'É a causa número 1 de suspensão, e qualquer concorrente denuncia em 2 cliques.',
    solucao: 'Use só o nome da fachada. As palavras-chave entram na categoria, nos serviços e na descrição.',
  },
  {
    erro: 'Criar um perfil novo quando já existia um',
    porque: 'O Google suspende por duplicidade e suas avaliações ficam divididas entre dois perfis fracos.',
    solucao: 'Pesquise antes (Passo 2). Se achar o antigo, clique em "É o proprietário desta empresa?" e reivindique.',
  },
  {
    erro: 'Usar endereço de escritório virtual ou de coworking que você não ocupa',
    porque: 'A verificação por vídeo pega isso na hora, e a suspensão é difícil de reverter.',
    solucao: 'Sem ponto físico, use área de atendimento e esconda o endereço (Passo 6). Funciona igual.',
  },
  {
    erro: 'Deixar o perfil sem verificar',
    porque: 'Perfil não verificado praticamente não aparece. Todo o resto do trabalho fica invisível.',
    solucao: 'Faça a verificação no mesmo dia da criação, enquanto o assunto está fresco.',
  },
  {
    erro: 'Escolher a categoria errada "porque parecia mais bonita"',
    porque: 'Categoria é o filtro principal do Google. Errou a categoria, some das buscas certas.',
    solucao: 'Copie a categoria dos 3 primeiros concorrentes no termo que você quer ranquear.',
  },
  {
    erro: 'Pagar por avaliação ou dar brinde em troca',
    porque: 'É proibido. O Google pode apagar TODAS as avaliações do perfil de uma só vez.',
    solucao: 'Peça de graça, na hora certa, com o link curto e uma mensagem educada (Passo 15).',
  },
  {
    erro: 'Não responder avaliação negativa (ou responder com raiva)',
    porque: 'Quem lê está avaliando VOCÊ, não o cliente irritado. Silêncio e briga afastam do mesmo jeito.',
    solucao: 'Responda em 24h, com calma, assumindo o que for seu e chamando para resolver no privado.',
  },
  {
    erro: 'Foto de banco de imagens ou com telefone escrito por cima',
    porque: 'O Google remove, e o cliente percebe que é genérica. Passa impressão de negócio abandonado.',
    solucao: 'Fotos reais tiradas com o celular, de dia, sem filtro e sem texto por cima.',
  },
  {
    erro: 'Esquecer o horário de feriado',
    porque: 'Cliente que atravessa a cidade e encontra fechado costuma deixar 1 estrela.',
    solucao: 'Cadastre os "Horários especiais" do ano inteiro de uma vez só.',
  },
  {
    erro: 'Criar e nunca mais voltar',
    porque: 'O Google prioriza perfil ativo. Sem foto, publicação ou avaliação nova, você cai posição a posição.',
    solucao: '15 minutos por semana, sempre no mesmo dia (Passo 18). É o suficiente.',
  },
]

export const faq = [
  {
    q: 'Preciso ter CNPJ para criar?',
    a: 'Não. Autônomo, MEI e profissional liberal podem criar normalmente. O que o Google exige é que o negócio exista de verdade e que você consiga provar isso na verificação — com fachada, ferramentas, estoque, sistema ou documento com o nome do negócio.',
  },
  {
    q: 'Quanto custa? Recebi uma ligação cobrando para "ativar" meu perfil.',
    a: 'É gratuito, do começo ao fim, para sempre. O Google nunca liga cobrando taxa para criar, ativar, verificar ou manter um perfil. Toda ligação assim é golpe — e é comum logo depois que você cria, porque o telefone fica público. Não pague, não passe código por telefone e não dê acesso a ninguém que ligou do nada.',
  },
  {
    q: 'Trabalho em casa. Vou ter que mostrar meu endereço?',
    a: 'Não. No Passo 6 você responde "não" para a pergunta do endereço visível e cadastra as áreas que atende. Seu endereço fica escondido do público e você continua aparecendo nas buscas da sua região. Você ainda precisa informar o endereço ao Google na verificação, mas ele não vai ao ar.',
  },
  {
    q: 'Quanto tempo demora para aparecer no Google?',
    a: 'Depois da verificação aprovada, as informações básicas costumam aparecer em poucos dias. Ficar bem posicionado no mapa para buscas concorridas leva de 2 a 6 meses de rotina — publicação, foto e avaliação nova toda semana. Não existe atalho pago para essa parte.',
  },
  {
    q: 'Minha verificação por vídeo foi recusada. E agora?',
    a: 'Você pode tentar de novo. Os motivos mais comuns são: vídeo cortado ou editado, escuro demais, não mostrar a placa com o nome, não mostrar a rua e o número, e não mostrar nada que prove que você administra o lugar. Regrave de dia, numa tomada só, começando pela fachada com a placa, mostrando a rua, entrando, e terminando com a chave, a maquininha ou o sistema no nome da empresa.',
  },
  {
    q: 'Meu perfil foi suspenso. Dá para recuperar?',
    a: 'Dá, mas exige paciência. Primeiro corrija o que causou — quase sempre nome com palavra-chave, endereço que não confere ou categoria incompatível. Só depois peça a reativação pelo formulário de restabelecimento do Google, anexando fotos da fachada e um documento do negócio. Pedir reativação sem corrigir a causa costuma resultar em nova recusa.',
  },
  {
    q: 'Posso mudar o nome ou o endereço depois?',
    a: 'Pode. Mudanças pequenas entram rápido; mudança de endereço ou de nome pode pedir nova verificação e demorar alguns dias. Se você mudou de ponto, ATUALIZE em vez de criar um perfil novo — criar de novo faz você perder todas as suas avaliações.',
  },
  {
    q: 'Recebi uma avaliação falsa de alguém que nunca foi meu cliente.',
    a: 'Responda publicamente, com educação, dizendo que não localizou o atendimento no sistema e se colocando à disposição. Depois clique nos três pontinhos da avaliação e escolha "Denunciar". A análise do Google demora e nem sempre remove — por isso a defesa que funciona é ter avaliações boas e recentes chegando sempre, para diluir a nota.',
  },
  {
    q: 'Meu concorrente usa palavra-chave no nome e está na frente. Vale a pena copiar?',
    a: 'Não. Ele está em situação irregular e pode cair a qualquer momento — inclusive porque você pode sugerir a correção: clique em "Sugerir uma edição" no perfil dele e corrija o nome. Copiar só coloca você na mesma fila de suspensão.',
  },
  {
    q: 'Preciso de site para ter um bom perfil?',
    a: 'Não para criar. Mas o botão "Site" é um dos mais clicados, e quem tem site costuma ranquear melhor, porque o Google cruza as informações dos dois. Enquanto não tiver, coloque o link do WhatsApp (https://wa.me/55 + DDD + número), que converte melhor do que rede social.',
  },
  {
    q: 'Tenho duas lojas. Crio dois perfis?',
    a: 'Sim, um por endereço, cada um com seu telefone e seu horário. O que não pode é ter dois perfis para o mesmo endereço — isso é duplicidade e suspende.',
  },
  {
    q: 'Perdi o acesso ao e-mail que criou o perfil.',
    a: 'Pesquise seu negócio no Google logado com o e-mail novo, clique em "É o proprietário desta empresa?" e siga o pedido de acesso. O Google avisa o dono atual e dá um prazo (normalmente de 3 a 7 dias) para ele responder. Se ninguém responder, o acesso costuma passar para você.',
  },
]

export const checklistFinal = [
  {
    grupo: 'Básico (faça hoje)',
    itens: [
      'Conta Google certa, que é sua e você não vai perder',
      'Pesquisei antes para ver se o perfil já existia',
      'Nome igual ao da fachada, sem palavra-chave',
      'Categoria principal escolhida com base nos 3 primeiros concorrentes',
      'Endereço visível OU área de atendimento marcada',
      'Telefone que alguém atende, mais o link do site ou do WhatsApp',
      'Verificação enviada (vídeo gravado numa tomada só)',
    ],
  },
  {
    grupo: 'Perfil completo (primeira semana)',
    itens: [
      'Horário de todos os dias, com turno de almoço se houver',
      'Horários especiais de feriado cadastrados',
      'Descrição de até 750 caracteres publicada',
      '10 a 12 fotos enviadas: logo, capa, fachada, interior, equipe, produto',
      'Todos os serviços cadastrados um a um, com descrição',
      'Atributos marcados: pagamento, acessibilidade, comodidades',
      'Primeira publicação no ar',
      'Link curto de avaliação copiado e salvo no celular',
    ],
  },
  {
    grupo: 'Rotina (para não cair)',
    itens: [
      '1 publicação por semana, sempre no mesmo dia',
      'Todas as avaliações respondidas em até 48h',
      'Pedido de avaliação enviado depois de cada atendimento',
      '3 fotos novas por mês',
      'Desempenho conferido uma vez por mês',
      'Descrição, serviços e preços revisados a cada 3 meses',
    ],
  },
]

/** Numeros usados na pagina e na capa do PDF. */
export const totalPassos = partes.reduce((n, p) => n + p.passos.length, 0)
