export interface CapitalBR {
  slug: string
  nome: string
  estado: string
  siglaEstado: string
  descricao: string
  doresEspecificas: string
  populacao: string
  referencia: string
}

export const capitaisBR: CapitalBR[] = [
  {
    slug: 'sao-paulo',
    nome: 'São Paulo',
    estado: 'São Paulo',
    siglaEstado: 'SP',
    descricao:
      'São Paulo é o maior polo econômico da América Latina e concentra o ecossistema digital mais competitivo do Brasil. Com milhares de agências, startups e profissionais de marketing disputando cada nicho, destacar-se exige estratégia de alto nível, posicionamento claro e execução impecável em SEO, tráfego pago e branding.',
    doresEspecificas:
      'Empresas paulistanas enfrentam um custo por clique elevadíssimo no Google Ads, saturação de conteúdo genérico nos resultados de busca e dificuldade em reter clientes diante de uma concorrência feroz que oferece promoções agressivas o ano inteiro.',
    populacao: '12,3 milhões de habitantes',
    referencia:
      'Capital financeira do país, sede da B3, Avenida Paulista e Faria Lima como epicentros de negócios e inovação.',
  },
  {
    slug: 'rio-de-janeiro',
    nome: 'Rio de Janeiro',
    estado: 'Rio de Janeiro',
    siglaEstado: 'RJ',
    descricao:
      'O Rio de Janeiro combina turismo internacional, indústria criativa e um mercado digital em franca expansão. A cidade atrai marcas globais e possui um público exigente, conectado e influenciado por tendências culturais que nascem nos morros, praias e estúdios cariocas.',
    doresEspecificas:
      'Negócios cariocas sofrem com sazonalidade ligada ao turismo, dificuldade de fidelização em bairros com perfis socioeconômicos muito distintos e a necessidade de competir com grandes players nacionais que também investem pesado no mercado local.',
    populacao: '6,7 milhões de habitantes',
    referencia:
      'Cidade Maravilhosa, segundo maior PIB do Brasil, referência em entretenimento, moda, gastronomia e economia criativa.',
  },
  {
    slug: 'belo-horizonte',
    nome: 'Belo Horizonte',
    estado: 'Minas Gerais',
    siglaEstado: 'MG',
    descricao:
      'Belo Horizonte se consolidou como um dos principais hubs de tecnologia e inovação do Brasil, com o ecossistema San Pedro Valley atraindo investidores e talentos. O mercado digital mineiro valoriza relacionamento de longo prazo, qualidade e um atendimento próximo.',
    doresEspecificas:
      'Empresas de BH lidam com a concorrência crescente de startups de tecnologia, dificuldade em escalar operações digitais para atender o interior do estado e um público conservador que demanda confiança antes de converter.',
    populacao: '2,5 milhões de habitantes',
    referencia:
      'Capital mineira, berço do San Pedro Valley, forte em gastronomia, mineração e serviços de tecnologia.',
  },
  {
    slug: 'brasilia',
    nome: 'Brasília',
    estado: 'Distrito Federal',
    siglaEstado: 'DF',
    descricao:
      'Brasília possui a maior renda per capita do país e um mercado digital dominado por serviços voltados ao funcionalismo público, consultorias, escritórios de advocacia e empresas que atuam junto ao governo. O poder de compra elevado cria oportunidades únicas para quem sabe segmentar.',
    doresEspecificas:
      'O mercado brasiliense é altamente dependente do setor público, gerando instabilidade em períodos de transição política. Empresas locais têm dificuldade em se posicionar fora do nicho governamental e diversificar sua base de clientes.',
    populacao: '3,0 milhões de habitantes',
    referencia:
      'Capital federal, sede dos três poderes, maior renda per capita do Brasil e forte presença de concursos públicos e licitações.',
  },
  {
    slug: 'salvador',
    nome: 'Salvador',
    estado: 'Bahia',
    siglaEstado: 'BA',
    descricao:
      'Salvador é a capital cultural do Brasil e seu mercado digital cresce impulsionado pelo turismo, gastronomia, música e uma cena empreendedora vibrante. A identidade cultural forte da cidade exige comunicação autêntica que ressoe com o público baiano.',
    doresEspecificas:
      'Empresas soteropolitanas enfrentam desafios com logística para e-commerce, baixa maturidade digital em alguns setores tradicionais e a necessidade de adaptar estratégias nacionais à cultura local sem parecer genérico ou desconectado.',
    populacao: '2,9 milhões de habitantes',
    referencia:
      'Primeira capital do Brasil, Pelourinho como patrimônio histórico, Carnaval como maior festa popular e polo de axé e afrocultura.',
  },
  {
    slug: 'fortaleza',
    nome: 'Fortaleza',
    estado: 'Ceará',
    siglaEstado: 'CE',
    descricao:
      'Fortaleza vive um boom digital impulsionado pelo turismo, pelo setor têxtil e de confecções e por um ecossistema de startups que cresce ano após ano. A cidade se destaca pela resiliência empreendedora e pela adoção rápida de novas plataformas digitais.',
    doresEspecificas:
      'Negócios fortalezenses lutam com a informalidade que ainda domina muitos setores, a dificuldade de competir em preço com marketplaces nacionais e a necessidade de educar o mercado local sobre o valor do marketing digital profissional.',
    populacao: '2,7 milhões de habitantes',
    referencia:
      'Capital cearense, destino turístico internacional, polo têxtil do Nordeste e berço de grandes redes varejistas regionais.',
  },
  {
    slug: 'recife',
    nome: 'Recife',
    estado: 'Pernambuco',
    siglaEstado: 'PE',
    descricao:
      'Recife é reconhecida como o Vale do Silício brasileiro graças ao Porto Digital, um dos maiores parques tecnológicos urbanos do país. O ecossistema de inovação pernambucano atrai investimentos e forma profissionais de alto nível em desenvolvimento e marketing digital.',
    doresEspecificas:
      'Apesar do ecossistema tech maduro, muitas empresas recifenses de setores tradicionais ainda resistem à transformação digital. A retenção de talentos é desafiadora, pois profissionais qualificados são atraídos por oportunidades remotas em empresas do Sudeste.',
    populacao: '1,6 milhão de habitantes',
    referencia:
      'Capital pernambucana, sede do Porto Digital, forte em tecnologia da informação, cultura popular e turismo histórico.',
  },
  {
    slug: 'curitiba',
    nome: 'Curitiba',
    estado: 'Paraná',
    siglaEstado: 'PR',
    descricao:
      'Curitiba é referência em planejamento urbano e inovação, com um mercado digital maduro e exigente. A cidade concentra empresas de tecnologia, indústria automotiva e um público com alto poder aquisitivo que valoriza qualidade, design e soluções bem estruturadas.',
    doresEspecificas:
      'O consumidor curitibano é criterioso e pesquisa muito antes de comprar, tornando o ciclo de vendas mais longo. Empresas locais precisam investir em autoridade de marca e conteúdo técnico para superar a barreira da desconfiança inicial.',
    populacao: '1,9 milhão de habitantes',
    referencia:
      'Capital paranaense, referência em urbanismo e sustentabilidade, polo automotivo e de tecnologia do Sul do Brasil.',
  },
  {
    slug: 'porto-alegre',
    nome: 'Porto Alegre',
    estado: 'Rio Grande do Sul',
    siglaEstado: 'RS',
    descricao:
      'Porto Alegre possui um mercado digital robusto, alimentado por universidades de ponta, aceleradoras e um ecossistema empreendedor consolidado. O público gaúcho é fiel a marcas que entregam valor real e se identifica com comunicação direta e transparente.',
    doresEspecificas:
      'Empresas porto-alegrenses enfrentam a concorrência de players nacionais que subestimam o mercado local, custos operacionais elevados e a necessidade de reconstruir presença digital após eventos climáticos que impactaram a economia da cidade.',
    populacao: '1,5 milhão de habitantes',
    referencia:
      'Capital gaúcha, berço do Fórum Social Mundial, forte em tecnologia da informação, agronegócio e indústria calçadista.',
  },
  {
    slug: 'florianopolis',
    nome: 'Florianópolis',
    estado: 'Santa Catarina',
    siglaEstado: 'SC',
    descricao:
      'Florianópolis é a capital brasileira das startups e do empreendedorismo digital, com uma concentração impressionante de empresas SaaS, fintechs e edtechs. A qualidade de vida da ilha atrai nômades digitais e profissionais de tecnologia de todo o país.',
    doresEspecificas:
      'O mercado florianopolitano é pequeno em termos de população local, forçando empresas a pensar nacionalmente desde o início. A sazonalidade turística impacta o comércio local e a competição por talentos de TI é acirrada entre as centenas de startups da ilha.',
    populacao: '516 mil habitantes',
    referencia:
      'Capital catarinense, Ilha da Magia, polo de startups e inovação, alta qualidade de vida e forte presença de empresas de tecnologia.',
  },
  {
    slug: 'vitoria',
    nome: 'Vitória',
    estado: 'Espírito Santo',
    siglaEstado: 'ES',
    descricao:
      'Vitória é uma capital compacta com economia forte, impulsionada pelo setor portuário, mineração e comércio exterior. O mercado digital capixaba está em crescimento acelerado, com empresas locais buscando se modernizar e competir além das fronteiras estaduais.',
    doresEspecificas:
      'Empresas vitorienses sofrem com a percepção de mercado pequeno, o que dificulta atrair investimentos em marketing. A dependência econômica de grandes indústrias como mineração e celulose gera oscilações que afetam toda a cadeia de serviços local.',
    populacao: '365 mil habitantes',
    referencia:
      'Capital capixaba, terceiro maior complexo portuário do país, economia ligada a commodities e logística internacional.',
  },
  {
    slug: 'goiania',
    nome: 'Goiânia',
    estado: 'Goiás',
    siglaEstado: 'GO',
    descricao:
      'Goiânia é uma metrópole em expansão que combina agronegócio, setor imobiliário aquecido e um comércio varejista pulsante. O mercado digital goianiense cresce rapidamente, com empresas locais investindo cada vez mais em presença online para acompanhar o ritmo da cidade.',
    doresEspecificas:
      'Negócios goianienses enfrentam a informalidade de muitos concorrentes, dificuldade em se diferenciar no setor de serviços saturado e a necessidade de equilibrar comunicação entre o público urbano sofisticado e o agro tradicional.',
    populacao: '1,5 milhão de habitantes',
    referencia:
      'Capital goiana, polo do agronegócio, mercado imobiliário aquecido e forte presença da indústria farmacêutica e alimentícia.',
  },
  {
    slug: 'manaus',
    nome: 'Manaus',
    estado: 'Amazonas',
    siglaEstado: 'AM',
    descricao:
      'Manaus é o coração econômico da Amazônia e abriga o Polo Industrial de Manaus, um dos maiores distritos industriais da América Latina. O mercado digital local cresce à medida que empresas da Zona Franca buscam visibilidade nacional e consumidores migram para o e-commerce.',
    doresEspecificas:
      'A logística é o maior gargalo para empresas manauaras: fretes caros e prazos longos dificultam o e-commerce. Além disso, a conexão de internet instável em áreas periféricas e a distância dos grandes centros tornam o marketing digital um desafio estratégico.',
    populacao: '2,2 milhões de habitantes',
    referencia:
      'Capital amazonense, sede da Zona Franca de Manaus, polo industrial e porta de entrada para o turismo ecológico amazônico.',
  },
  {
    slug: 'belem',
    nome: 'Belém',
    estado: 'Pará',
    siglaEstado: 'PA',
    descricao:
      'Belém é a metrópole da Amazônia oriental e vive um momento de efervescência digital, impulsionado pela gastronomia reconhecida internacionalmente e pelo crescimento do turismo sustentável. A cidade busca se posicionar como referência em bioeconomia e inovação verde.',
    doresEspecificas:
      'Empresas belenenses lidam com infraestrutura digital ainda em desenvolvimento, baixa penetração de pagamentos online em parte da população e a necessidade de comunicar valor para um público que prioriza relações pessoais e indicações.',
    populacao: '1,5 milhão de habitantes',
    referencia:
      'Capital paraense, patrimônio gastronômico mundial, mercado do Ver-o-Peso e polo de bioeconomia amazônica.',
  },
  {
    slug: 'sao-luis',
    nome: 'São Luís',
    estado: 'Maranhão',
    siglaEstado: 'MA',
    descricao:
      'São Luís, patrimônio cultural da humanidade, possui um mercado digital emergente com enorme potencial de crescimento. A cidade combina tradição cultural riquíssima com uma nova geração de empreendedores que aposta na tecnologia para transformar a economia local.',
    doresEspecificas:
      'O mercado ludovicense enfrenta baixa maturidade digital em setores como comércio e serviços, escassez de profissionais qualificados em marketing digital e a dificuldade de justificar investimento em presença online para empresários acostumados ao modelo tradicional.',
    populacao: '1,1 milhão de habitantes',
    referencia:
      'Capital maranhense, patrimônio mundial da UNESCO, rica em cultura popular com Bumba-meu-boi e forte influência azulejaria portuguesa.',
  },
  {
    slug: 'teresina',
    nome: 'Teresina',
    estado: 'Piauí',
    siglaEstado: 'PI',
    descricao:
      'Teresina é um mercado digital em estágio inicial de maturação, o que representa uma janela de oportunidade para empresas que se posicionarem cedo. A cidade cresce no setor de saúde, educação superior e comércio, com empreendedores cada vez mais abertos à digitalização.',
    doresEspecificas:
      'Negócios teresinenses sofrem com o ticket médio mais baixo da região, concorrência predatória de preços no comércio local e a resistência de empresários tradicionais em alocar orçamento para estratégias digitais que exigem tempo para gerar retorno.',
    populacao: '871 mil habitantes',
    referencia:
      'Capital piauiense, polo de saúde e educação do Meio-Norte, única capital nordestina não litorânea.',
  },
  {
    slug: 'joao-pessoa',
    nome: 'João Pessoa',
    estado: 'Paraíba',
    siglaEstado: 'PB',
    descricao:
      'João Pessoa é uma das capitais que mais crescem no Nordeste, com boom imobiliário, turismo em alta e um ecossistema digital que se fortalece a cada ano. A qualidade de vida da cidade atrai profissionais remotos e novos empreendimentos que movimentam o mercado local.',
    doresEspecificas:
      'Empresas pessoenses enfrentam a competição com capitais vizinhas como Recife, dificuldade de escalar além do mercado estadual e o desafio de profissionalizar o marketing em setores como turismo e gastronomia que ainda operam de forma artesanal.',
    populacao: '825 mil habitantes',
    referencia:
      'Capital paraibana, ponto mais oriental das Américas, crescimento imobiliário acelerado e turismo em expansão.',
  },
  {
    slug: 'maceio',
    nome: 'Maceió',
    estado: 'Alagoas',
    siglaEstado: 'AL',
    descricao:
      'Maceió vive uma transformação digital puxada pelo turismo que se reinventou nos últimos anos, colocando a cidade no mapa dos destinos mais desejados do Brasil. O mercado local cresce com pousadas, restaurantes e operadoras que descobriram o poder das redes sociais.',
    doresEspecificas:
      'O mercado maceioense é fortemente dependente do turismo sazonal, com queda brusca de faturamento fora da alta temporada. Empresas locais lutam com a falta de agências especializadas e precisam importar serviços de marketing de outras capitais.',
    populacao: '1,0 milhão de habitantes',
    referencia:
      'Capital alagoana, praias de águas cristalinas, destino turístico em ascensão e economia fortemente ligada ao setor de hospitalidade.',
  },
  {
    slug: 'aracaju',
    nome: 'Aracaju',
    estado: 'Sergipe',
    siglaEstado: 'SE',
    descricao:
      'Aracaju é a menor capital do Nordeste em extensão, mas possui um mercado digital com oportunidades interessantes para quem souber atuar com proximidade. A economia local gira em torno de petróleo, gás, comércio e um setor gastronômico que ganha projeção nacional.',
    doresEspecificas:
      'Empresas aracajuanas lidam com um mercado pequeno onde todo mundo se conhece, tornando a reputação online crucial. A migração de consumidores para e-commerces de fora do estado e a falta de mão de obra digital especializada são dores constantes.',
    populacao: '664 mil habitantes',
    referencia:
      'Capital sergipana, menor estado do Brasil, economia ligada a petróleo e gás, gastronomia regional em destaque.',
  },
  {
    slug: 'natal',
    nome: 'Natal',
    estado: 'Rio Grande do Norte',
    siglaEstado: 'RN',
    descricao:
      'Natal é uma capital turística por excelência, e seu mercado digital reflete essa vocação com forte presença de negócios ligados a hospedagem, passeios e experiências. A cidade também cresce no setor de energia eólica e solar, atraindo novos investimentos e profissionais.',
    doresEspecificas:
      'Negócios natalenses enfrentam a guerra de preços no setor turístico online, dependência de plataformas como Booking e Airbnb que corroem margens, e a dificuldade de manter fluxo de caixa constante em um mercado com picos sazonais bem definidos.',
    populacao: '890 mil habitantes',
    referencia:
      'Capital potiguar, cidade do sol, polo turístico do Nordeste e referência em energia renovável eólica e solar.',
  },
  {
    slug: 'campo-grande',
    nome: 'Campo Grande',
    estado: 'Mato Grosso do Sul',
    siglaEstado: 'MS',
    descricao:
      'Campo Grande é uma capital em crescimento constante, impulsionada pelo agronegócio, pela pecuária e por uma classe média pujante. O mercado digital campo-grandense amadurece rapidamente, com empresas locais investindo em e-commerce e marketing de conteúdo para alcançar novos públicos.',
    doresEspecificas:
      'Empresas de Campo Grande enfrentam o desafio de comunicar sofisticação em um mercado ainda associado majoritariamente ao agro. A distância dos grandes centros encarece serviços especializados e há escassez de profissionais de marketing digital experientes na cidade.',
    populacao: '916 mil habitantes',
    referencia:
      'Capital sul-mato-grossense, portal do Pantanal, forte no agronegócio e com crescente diversificação econômica.',
  },
  {
    slug: 'cuiaba',
    nome: 'Cuiabá',
    estado: 'Mato Grosso',
    siglaEstado: 'MT',
    descricao:
      'Cuiabá é o coração do agronegócio brasileiro e movimenta bilhões anualmente em commodities. O mercado digital cuiabano cresce à medida que produtores rurais, revendas agrícolas e empresas de serviços descobrem o potencial de vendas e posicionamento online.',
    doresEspecificas:
      'O mercado cuiabano é dominado pelo agro, e empresas de outros setores têm dificuldade de captar atenção e investimento. O calor extremo afeta o comportamento de consumo e os horários de pico digital diferem dos padrões nacionais, exigindo estratégias personalizadas.',
    populacao: '650 mil habitantes',
    referencia:
      'Capital mato-grossense, centro geodésico da América do Sul, epicentro do agronegócio e porta de entrada para o Pantanal Norte.',
  },
  {
    slug: 'palmas',
    nome: 'Palmas',
    estado: 'Tocantins',
    siglaEstado: 'TO',
    descricao:
      'Palmas é a capital mais jovem do Brasil, planejada e em plena construção de sua identidade econômica. O mercado digital é nascente e repleto de oportunidades para quem chegar primeiro, especialmente nos setores de agronegócio, serviços públicos e comércio.',
    doresEspecificas:
      'Empresas palmenses lidam com uma população ainda pequena, o que limita o mercado local. A baixa concorrência digital é uma faca de dois gumes: há espaço, mas também falta cultura de investimento em marketing, exigindo um trabalho forte de educação do mercado.',
    populacao: '306 mil habitantes',
    referencia:
      'Capital tocantinense, cidade mais jovem do Brasil, planejada e com potencial de crescimento no cerrado brasileiro.',
  },
  {
    slug: 'rio-branco',
    nome: 'Rio Branco',
    estado: 'Acre',
    siglaEstado: 'AC',
    descricao:
      'Rio Branco é a principal cidade do Acre e serve como centro comercial para todo o estado. O mercado digital local é incipiente, mas cresce com a expansão da conectividade e com empreendedores que enxergam na internet a possibilidade de superar o isolamento geográfico.',
    doresEspecificas:
      'A conectividade limitada e a velocidade de internet abaixo da média nacional são os maiores obstáculos para negócios rio-branquenses. Soma-se a isso a logística cara para e-commerce e a escassez quase total de agências e profissionais de marketing digital na região.',
    populacao: '413 mil habitantes',
    referencia:
      'Capital acreana, economia ligada à borracha, castanha e sustentabilidade florestal, fronteira com Peru e Bolívia.',
  },
  {
    slug: 'porto-velho',
    nome: 'Porto Velho',
    estado: 'Rondônia',
    siglaEstado: 'RO',
    descricao:
      'Porto Velho é uma capital em transformação, com economia que vai além do extrativismo e avança no agronegócio, energia hidrelétrica e comércio de fronteira. O digital ganha espaço à medida que a cidade se urbaniza e novos empreendimentos buscam visibilidade.',
    doresEspecificas:
      'Empresas porto-velhenses enfrentam infraestrutura de telecomunicações deficiente, mercado local reduzido e a dificuldade de encontrar fornecedores de serviços digitais qualificados sem precisar recorrer a profissionais de outros estados.',
    populacao: '548 mil habitantes',
    referencia:
      'Capital rondoniense, às margens do Rio Madeira, economia baseada em energia hidrelétrica, agropecuária e comércio de fronteira.',
  },
  {
    slug: 'macapa',
    nome: 'Macapá',
    estado: 'Amapá',
    siglaEstado: 'AP',
    descricao:
      'Macapá é a única capital brasileira cortada pela linha do Equador e possui um mercado digital praticamente virgem. A economia local depende fortemente do funcionalismo público e do comércio, criando nichos específicos para quem souber atender essas demandas digitalmente.',
    doresEspecificas:
      'Macapá sofre com apagões frequentes e instabilidade na infraestrutura elétrica, o que impacta diretamente operações digitais. A dependência de produtos importados via Zona Franca e a falta de cultura digital entre comerciantes locais tornam o cenário desafiador.',
    populacao: '512 mil habitantes',
    referencia:
      'Capital amapaense, cortada pela linha do Equador, Fortaleza de São José como patrimônio histórico e economia ligada ao setor público.',
  },
  {
    slug: 'boa-vista',
    nome: 'Boa Vista',
    estado: 'Roraima',
    siglaEstado: 'RR',
    descricao:
      'Boa Vista é a capital mais setentrional do Brasil e a única acima da linha do Equador. O mercado digital roraimense é o menor do país em volume, mas oferece vantagem competitiva enorme para pioneiros que estabeleçam presença online sólida antes da concorrência.',
    doresEspecificas:
      'O mercado de Boa Vista é extremamente pequeno e isolado, com logística dependente de rotas aéreas ou da única rodovia que liga a cidade a Manaus. A população conectada cresce, mas o investimento em marketing digital ainda é visto como luxo pela maioria dos empresários locais.',
    populacao: '419 mil habitantes',
    referencia:
      'Capital roraimense, única capital totalmente ao norte do Equador, fronteira com Venezuela e Guiana, economia ligada ao funcionalismo e comércio.',
  },
]

export function getCapitalBRBySlug(slug: string): CapitalBR | undefined {
  return capitaisBR.find((c) => c.slug === slug)
}
