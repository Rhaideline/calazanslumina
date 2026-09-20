/**
 * O QUE CADA SERVICO RESOLVE, DITO PELO MERCADO BRASILEIRO.
 *
 * ⚠️ POR QUE ISTO EXISTE
 * Na medicao de 20/set/2026 o bloco "Nossos servicos em <cidade>" era 128
 * palavras com 80% de semelhanca entre irmas: os cinco cartoes repetiam o
 * mesmo `servico.descricaoCurta` nas 209 cidades, mudando so o nome da cidade
 * no titulo. Texto que muda so o nome proprio nao e texto diferente — o
 * trigrama continua identico e o Google continua vendo a mesma pagina.
 *
 * ⚠️ E POR QUE ELE E BRASILEIRO, E NAO TRADUCAO DO `.com`
 * Os dois sites vendem o mesmo servico. Se falarem das mesmas coisas, disputam
 * a mesma busca e uma derruba a outra. A separacao e por MERCADO:
 *
 *     .com     brasileiro nos EUA — comunidade local, Google Business
 *              Profile, WhatsApp Business API, licenca de oficio, inverno.
 *     .com.br  empresa no Brasil — CPL em real, Pix e parcelamento, MEI e
 *              CNPJ, Google Meu Negocio, WhatsApp como canal principal,
 *              Instagram, sazonalidade brasileira.
 *
 * Nada aqui promete prazo, preco ou resultado, e nenhum numero aparece sem
 * origem.
 */

/** uma linha, para o cartao de servico na pagina de cidade */
export function anguloCurto(slug: string, cidade: string): string {
  switch (slug) {
    case 'sites-landing-pages':
      return `Quase todo acesso em ${cidade} chega pelo celular, muitas vezes em rede instável. A página sai pronta do servidor, então ela aparece antes de a pessoa desistir.`
    case 'funis-automacao-ghl':
      return `Em ${cidade} o pedido de orçamento chega pelo WhatsApp à noite e no fim de semana. A esteira responde na hora e continua sozinha até virar conversa.`
    case 'crm-ia-whatsapp':
      return `Quem responde primeiro conversa. O robô atende em português, qualifica e marca na agenda enquanto você está com a mão ocupada em ${cidade}.`
    case 'gestao-redes-sociais':
      return `Perfil que não diz o que você faz não vira cliente. Antes do post vem o sistema: paleta, fonte e modelos que se reconhecem na grade.`
    case 'google-meu-negocio':
      return `A busca com o bairro junto acontece o dia inteiro em ${cidade}. Categoria errada tira o negócio de buscas inteiras, e ninguém percebe.`
    default:
      return ''
  }
}

/** titulo da secao, quando a pagina e de um servico so */
export function tituloAngulo(slug: string): string {
  switch (slug) {
    case 'sites-landing-pages':
      return 'O site precisa abrir antes de a pessoa desistir'
    case 'funis-automacao-ghl':
      return 'No Brasil o lead chega pelo WhatsApp, e chega fora do horário'
    case 'crm-ia-whatsapp':
      return 'Quem responde primeiro conversa; quem responde depois encontra fechado'
    case 'gestao-redes-sociais':
      return 'Perfil que não diz o que você faz não vira cliente'
    case 'google-meu-negocio':
      return 'A busca com o nome do bairro junto acontece o dia inteiro'
    default:
      return ''
  }
}

/** paragrafo longo, para a pagina de cidade x servico */
export function anguloLongo(slug: string, cidade: string): string {
  switch (slug) {
    case 'sites-landing-pages':
      return `Boa parte do acesso em ${cidade} chega pelo celular, muitas vezes em rede móvel instável. Site montado em construtor carrega tema, plugin e script antes do primeiro texto, e some nessa espera. Aqui a página já sai pronta do servidor, e o botão de WhatsApp vai com a mensagem escrita — formular a primeira frase é onde a conversa morre.`
    case 'funis-automacao-ghl':
      return `Quem vende serviço em ${cidade} recebe mensagem à noite, no fim de semana e no meio do atendimento. O funil resolve isso sem depender da sua memória: o formulário marca o contato, a esteira responde em segundos e continua por WhatsApp, SMS e e-mail em intervalos definidos, e para sozinha quando a pessoa responde.`
    case 'crm-ia-whatsapp':
      return `O robô lê a mensagem, responde em português sobre os seus serviços, qualifica e marca na sua agenda. Também sabe onde parar: fora do que foi treinado, ele entrega a conversa para você com o histórico do lado. Em ${cidade} isso transforma o horário em que você está trabalhando em horário de venda.`
    case 'gestao-redes-sociais':
      return `O problema de quase todo perfil de prestador em ${cidade} não é falta de post: é que cada post parece de uma empresa diferente. Antes de qualquer publicação entra o sistema — paleta fechada, duas fontes com função, e modelos que se reconhecem lado a lado na grade.`
    case 'google-meu-negocio':
      return `Quem digita o serviço mais o bairro em ${cidade} não está pesquisando, está decidindo. Categoria principal errada tira o negócio de buscas inteiras, área de atendimento em branco faz sumir no bairro vizinho, e horário desatualizado derruba a posição. O pedido de avaliação entra no processo, no momento em que o serviço acabou.`
    default:
      return ''
  }
}
