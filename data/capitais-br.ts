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
      'São Paulo movimenta cerca de R$ 830 bilhões em PIB municipal, respondendo sozinha por aproximadamente 10% da economia brasileira segundo o IBGE. A cidade concentra 63 dos 100 maiores escritórios de advocacia do país, mais de 19 mil startups mapeadas pela Distrito e o trecho da Faria Lima onde o metro quadrado comercial supera R$ 25 mil.',
    doresEspecificas:
      'Em São Paulo, pequenos infoprodutores e prestadores de serviço pagam CPC médio de R$ 8 a R$ 15 no Google Ads em nichos saturados como marketing, advocacia e estética. O custo de coworking na Vila Olímpia ultrapassa R$ 1.800/mês, e a brutal disputa por atenção exige funis com nutrição longa para o paulistano cético sobrecarregado por anúncios.',
    populacao: '12,3 milhões de habitantes',
    referencia:
      'Capital financeira do país, sede da B3 na Rua XV de Novembro, Avenida Paulista e Faria Lima como epicentros de negócios e inovação.',
  },
  {
    slug: 'rio-de-janeiro',
    nome: 'Rio de Janeiro',
    estado: 'Rio de Janeiro',
    siglaEstado: 'RJ',
    descricao:
      'O Rio de Janeiro tem PIB municipal de aproximadamente R$ 380 bilhões e abriga 17 das 20 maiores produtoras audiovisuais do Brasil, segundo a ANCINE. A cidade concentra a sede da Petrobras, da Vale e o Porto Maravilha, polo de inovação com mais de 250 startups instaladas. O turismo gera 7% do PIB municipal e o setor criativo emprega quase 200 mil pessoas.',
    doresEspecificas:
      'No Rio, comerciantes de Copacabana e Ipanema sofrem oscilação brutal entre alta temporada (dez-fev) e baixa, com queda de até 60% no faturamento. Operações em bairros como Tijuca e Méier disputam o mesmo público com lojas de shopping (BarraShopping, NorteShopping), enquanto a violência urbana muda hábitos de consumo e força delivery a virar canal principal — exigindo estratégia digital adaptada à geografia carioca.',
    populacao: '6,7 milhões de habitantes',
    referencia:
      'Cidade Maravilhosa, segundo maior PIB do Brasil, Cristo Redentor, Pão de Açúcar e Porto Maravilha como vetores de economia criativa.',
  },
  {
    slug: 'belo-horizonte',
    nome: 'Belo Horizonte',
    estado: 'Minas Gerais',
    siglaEstado: 'MG',
    descricao:
      'Belo Horizonte tem PIB de aproximadamente R$ 110 bilhões e abriga o San Pedro Valley, ecossistema que já gerou unicórnios como Hotmart, Méliuz e Sympla. A capital mineira tem o terceiro maior número de bares per capita do Brasil (mais de 14 mil estabelecimentos) e é sede de hospitais-referência como Mater Dei e Vila da Serra, formando polo nacional de saúde.',
    doresEspecificas:
      'Em BH, empreendedores enfrentam o "mineirinho desconfiado": o consumidor que precisa de 7 a 12 pontos de contato antes de comprar, contra média nacional de 5. Bares e botecos do Santa Tereza e Lourdes operam com margem apertada e dependem de Stories no Instagram para encher na semana — sem isso, perdem para Savassi e Funcionários, que dominam o feed de food influencers locais.',
    populacao: '2,5 milhões de habitantes',
    referencia:
      'Capital mineira, berço do San Pedro Valley com Hotmart e Méliuz, Mercado Central, Praça da Liberdade e Pampulha como cartões-postais.',
  },
  {
    slug: 'brasilia',
    nome: 'Brasília',
    estado: 'Distrito Federal',
    siglaEstado: 'DF',
    descricao:
      'Brasília tem renda per capita de aproximadamente R$ 90 mil — quase o dobro da média nacional — e PIB de R$ 290 bilhões segundo o IBGE. A capital federal concentra mais de 230 mil servidores públicos federais e movimenta R$ 4 bilhões/ano em contratos de TI via ComprasNet. O Plano Piloto e o Lago Sul têm IDH superior a 0,930, comparável ao da Noruega.',
    doresEspecificas:
      'Em Brasília, infoprodutores de concursos públicos enfrentam saturação brutal — só no nicho de fiscal há 30+ players grandes disputando o mesmo público. Empreendedores de Taguatinga e Ceilândia (RAs onde 70% da população reside) competem com pequenos negócios do Plano enquanto operam com ticket médio 40% menor, exigindo segmentação geográfica precisa no Google Ads para sobreviver.',
    populacao: '3,0 milhões de habitantes',
    referencia:
      'Capital federal, sede dos três poderes, Esplanada dos Ministérios, projeto urbanístico tombado pela UNESCO e maior renda per capita do Brasil.',
  },
  {
    slug: 'salvador',
    nome: 'Salvador',
    estado: 'Bahia',
    siglaEstado: 'BA',
    descricao:
      'Salvador tem PIB municipal de aproximadamente R$ 70 bilhões e movimenta R$ 2,2 bilhões por ano só com o Carnaval, segundo a Secretaria Municipal de Turismo — a maior festa popular do mundo, com mais de 17 milhões de foliões. A cidade abriga o Porto de Salvador (segundo do Nordeste em movimentação), o Polo Industrial de Camaçari na região metropolitana e mais de 80% de população negra.',
    doresEspecificas:
      'Em Salvador, prestadores de serviço sofrem com a "concentração de receita" do Carnaval: 40% do faturamento anual de hotéis, barracas e camarotes acontece em 6 dias. Empreendedores do Subúrbio Ferroviário (700 mil habitantes) competem com Pituba e Itaigara por delivery, mas o consumidor compra por WhatsApp — não Google — exigindo funis adaptados à cultura mobile-first soteropolitana.',
    populacao: '2,9 milhões de habitantes',
    referencia:
      'Primeira capital do Brasil, Pelourinho tombado pela UNESCO, Elevador Lacerda, Carnaval como maior festa popular do planeta.',
  },
  {
    slug: 'fortaleza',
    nome: 'Fortaleza',
    estado: 'Ceará',
    siglaEstado: 'CE',
    descricao:
      'Fortaleza tem PIB de R$ 80 bilhões e é a capital com maior densidade demográfica do Brasil (mais de 7.700 hab/km²). A cidade é sede do maior parque eólico e solar do país (Pecém) e abriga 1.500+ confecções no polo de jeans do Nordeste, que exporta para EUA e América Latina. O setor de turismo gera R$ 6 bilhões/ano e a Beira-Mar concentra 60% da hotelaria estadual.',
    doresEspecificas:
      'Em Fortaleza, dropshippers e revendedores na Av. Monsenhor Tabosa competem direto com a feira da Beira-Mar e o José Avelino, onde 250 mil peças/dia são vendidas no atacado. Pousadas em Cumbuco e Praia do Futuro lutam com a sazonalidade europeia (alta com argentinos jul-jan), e prestadores de serviço sofrem com a informalidade — 47% do mercado de trabalho cearense é sem carteira segundo o IBGE.',
    populacao: '2,7 milhões de habitantes',
    referencia:
      'Capital cearense, Beira-Mar, Praia do Futuro, Mercado Central do artesanato, polo têxtil-jeans do Nordeste e Complexo do Pecém.',
  },
  {
    slug: 'recife',
    nome: 'Recife',
    estado: 'Pernambuco',
    siglaEstado: 'PE',
    descricao:
      'Recife abriga o Porto Digital, parque tecnológico que reúne mais de 350 empresas, gera 14 mil empregos diretos e movimenta R$ 4 bilhões/ano segundo o NGPD. A cidade tem PIB de R$ 55 bilhões e o segundo maior polo médico do Norte/Nordeste, com hospitais como Real Português e Memorial São José. O Recife Antigo e o complexo de Suape (gerador de US$ 5 bi/ano em transações) sustentam logística e turismo.',
    doresEspecificas:
      'No Recife, comerciantes de Boa Viagem e Casa Forte enfrentam público de classe A/B que pesquisa no Google Reviews antes de marcar restaurante — sem nota 4.5+, o estabelecimento some. Negócios de moda do Polo de Confecções do Agreste (Caruaru/Toritama) que vendem para Recife competem com fast fashion via marketplace, e a maré alta dos arrecifes regularmente interdita praias, afetando o calendário do turismo costeiro.',
    populacao: '1,6 milhão de habitantes',
    referencia:
      'Capital pernambucana, sede do Porto Digital, Marco Zero, frevo e Maracatu no Carnaval, Olinda vizinha como patrimônio mundial.',
  },
  {
    slug: 'curitiba',
    nome: 'Curitiba',
    estado: 'Paraná',
    siglaEstado: 'PR',
    descricao:
      'Curitiba tem PIB de R$ 95 bilhões e foi nomeada Capital Smart City da América Latina em 2023 pelo Smart City Expo. A cidade abriga as fábricas da Renault, Volvo e Nissan na CIC (Cidade Industrial), que representa 22% do PIB municipal, e o quinto maior número de startups do Brasil — mais de 800 mapeadas pela Associação Brasileira de Startups (ABStartups).',
    doresEspecificas:
      'Em Curitiba, o "frio" começa em abril e dura até setembro — sazonalidade que muda hábitos: gastronomia explode no inverno (cafés, fondue), enquanto sorveterias e moda praia desaparecem. O consumidor curitibano é o que mais pesquisa no Reclame Aqui antes de comprar (3x média nacional, segundo Movidesk), e exige preço-prazo-qualidade explícitos no anúncio — promessas vagas não vendem aqui.',
    populacao: '1,9 milhão de habitantes',
    referencia:
      'Capital paranaense, Jardim Botânico, Ópera de Arame, BRT pioneiro mundialmente e Cidade Industrial sede da Renault, Volvo e Nissan.',
  },
  {
    slug: 'porto-alegre',
    nome: 'Porto Alegre',
    estado: 'Rio Grande do Sul',
    siglaEstado: 'RS',
    descricao:
      'Porto Alegre tem PIB de R$ 85 bilhões e abriga o Tecnopuc — incubadora que gerou unicórnios como Movile e que reúne mais de 130 empresas e 7 mil profissionais de TI. O Quarto Distrito virou polo criativo após o Pacto Alegre, e o complexo agroindustrial gaúcho (soja e arroz) movimenta R$ 60 bilhões/ano na região metropolitana segundo o IBGE.',
    doresEspecificas:
      'Porto Alegre ainda se recupera das enchentes históricas de maio/2024 que afetaram 95% do comércio do Centro Histórico e do bairro Cidade Baixa, com prejuízo estimado pela FIERGS em R$ 100 bilhões para o estado. Empreendedores locais agora vendem com "trauma de enchente" no consumidor — quem não comunica resiliência, estoque seguro e logística alternativa perde para concorrentes de Canoas e São Leopoldo.',
    populacao: '1,5 milhão de habitantes',
    referencia:
      'Capital gaúcha, Mercado Público, chimarrão, polo do calçado vizinho no Vale dos Sinos e Tecnopuc como hub de tecnologia.',
  },
  {
    slug: 'florianopolis',
    nome: 'Florianópolis',
    estado: 'Santa Catarina',
    siglaEstado: 'SC',
    descricao:
      'Florianópolis tem o terceiro maior PIB per capita entre capitais brasileiras (cerca de R$ 60 mil) e o ecossistema ACATE reúne mais de 1.300 empresas de tecnologia que faturaram R$ 8,5 bilhões em 2023. A ilha cresce 4% ao ano em população — duas vezes a média nacional — e atrai a maior densidade de nômades digitais brasileiros, com hubs no Campeche e Lagoa da Conceição.',
    doresEspecificas:
      'Em Floripa, o verão dobra a população (de 500 mil para 1 milhão entre dez-fev): aluguéis de temporada saltam para R$ 8 mil/semana em Jurerê Internacional, restaurantes precisam dobrar equipe, e o trânsito da SC-401 vira gargalo logístico. Negócios locais que dependem do turista português/argentino sofrem com câmbio, e o consumidor manezinho local é hiper-conectado mas valoriza autenticidade — odeia copy "marketês".',
    populacao: '516 mil habitantes',
    referencia:
      'Capital catarinense, Ilha da Magia, Lagoa da Conceição, Jurerê Internacional, ponte Hercílio Luz e ACATE como hub de SaaS.',
  },
  {
    slug: 'vitoria',
    nome: 'Vitória',
    estado: 'Espírito Santo',
    siglaEstado: 'ES',
    descricao:
      'Vitória tem PIB per capita de R$ 80 mil — o quarto maior entre capitais brasileiras — impulsionado pelos portos de Tubarão e Capuaba, que exportam 35% do minério de ferro do Brasil via Vale. A capital capixaba tem a maior renda média de servidores públicos do Sudeste e abriga sede da Suzano (celulose) e da ArcelorMittal Tubarão, o maior produtor de placas de aço da América Latina.',
    doresEspecificas:
      'Em Vitória, prestadores de serviço dependem do ciclo das commodities: quando minério ou celulose caem internacionalmente, restaurantes da Praia do Canto e barbearias da Reta da Penha sentem na semana seguinte. Empreendedores capixabas competem com uma diáspora forte para SP/RJ — talentos vão embora, então atrair clientes de Cariacica e Vila Velha (juntas, 1 milhão de hab.) é vital para escalar.',
    populacao: '365 mil habitantes',
    referencia:
      'Capital capixaba, Convento da Penha visível da cidade, Terceira Ponte, porto de Tubarão e Praia de Camburi como pontos de referência.',
  },
  {
    slug: 'goiania',
    nome: 'Goiânia',
    estado: 'Goiás',
    siglaEstado: 'GO',
    descricao:
      'Goiânia tem PIB de R$ 65 bilhões e é sede do polo farmacêutico que produz 20% dos genéricos do Brasil — empresas como Neo Química, Geolab e Vitamedic faturam mais de R$ 6 bi/ano juntas, segundo a Pró-Genéricos. A cidade tem o maior número de academias de ginástica per capita do país (mais de 1.500), reflexo da cultura do "boy fitness goiano", e o setor sertanejo movimenta cerca de R$ 1,8 bi/ano em shows.',
    doresEspecificas:
      'Em Goiânia, infoprodutos de emagrecimento, estética e bariátrica saturaram o Instagram local — cada clínica do Setor Bueno e Setor Marista tem dezenas de concorrentes na mesma rua. Empreendedores rurais que vendem para o agro têm que competir com lives no YouTube de cantor sertanejo divulgando insumos (Henrique e Juliano, Marília Mendonça em vida), exigindo posicionamento orgânico autêntico para furar a bolha publicitária.',
    populacao: '1,5 milhão de habitantes',
    referencia:
      'Capital goiana, Parque Vaca Brava, Centro Cultural Oscar Niemeyer, Setor Bueno como polo de classe A e capital do sertanejo universitário.',
  },
  {
    slug: 'manaus',
    nome: 'Manaus',
    estado: 'Amazonas',
    siglaEstado: 'AM',
    descricao:
      'Manaus abriga o Polo Industrial de Manaus (PIM), que reúne 600 indústrias, gera 100 mil empregos diretos e faturou R$ 180 bilhões em 2023, segundo a SUFRAMA. A cidade produz 99% das motos do Brasil (Honda, Yamaha) e a maioria dos celulares e TVs do mercado nacional. O PIB municipal supera R$ 95 bilhões — maior de toda a Região Norte.',
    doresEspecificas:
      'Em Manaus, o comércio do Centro e da Av. Eduardo Ribeiro sofre 3-4 meses de cheia anual do Rio Negro (mai-ago), quando ruas adjacentes alagam e a Manaus Moderna fica parcialmente submersa. Empreendedores enfrentam frete que custa R$ 80-150 só para enviar para Boa Vista, e o e-commerce local trava em ZIPs do Tarumã/Compensa por instabilidade de internet em comunidades ribeirinhas.',
    populacao: '2,2 milhões de habitantes',
    referencia:
      'Capital amazonense, Teatro Amazonas, Encontro das Águas, Zona Franca de Manaus e porta de entrada para o turismo ecológico amazônico.',
  },
  {
    slug: 'belem',
    nome: 'Belém',
    estado: 'Pará',
    siglaEstado: 'PA',
    descricao:
      'Belém será sede da COP30 em novembro de 2025 e recebeu R$ 5 bilhões em investimentos federais para infraestrutura, segundo o governo do Pará. A cidade tem PIB de R$ 35 bilhões e é o maior produtor mundial de açaí, que movimenta R$ 5 bilhões/ano no estado. O Círio de Nazaré, em outubro, é a maior procissão católica do mundo com mais de 2 milhões de fiéis.',
    doresEspecificas:
      'Em Belém, o calendário comercial gira em torno do Círio (outubro): hotéis, restaurantes e brinquedos de miriti faturam em uma semana o que vendem em três meses. Empreendedores enfrentam chuva diária às 15h ("chuva das 3"), que muda o fluxo do varejo de rua na Av. Presidente Vargas, e a expectativa pela COP30 já dobrou o aluguel comercial no entorno do Hangar — pressão imobiliária inédita para a cidade.',
    populacao: '1,5 milhão de habitantes',
    referencia:
      'Capital paraense, Ver-o-Peso (maior feira a céu aberto da América Latina), Estação das Docas, Círio de Nazaré e sede da COP30 2025.',
  },
  {
    slug: 'sao-luis',
    nome: 'São Luís',
    estado: 'Maranhão',
    siglaEstado: 'MA',
    descricao:
      'São Luís é a única capital brasileira fundada por franceses e tem o maior conjunto arquitetônico português da América Latina, com mais de 3.500 casarões tombados pela UNESCO. A cidade tem PIB de R$ 30 bilhões, abriga o Porto do Itaqui (maior em movimentação de grãos do Norte/Nordeste, com 35 milhões de t/ano) e o complexo da Vale com a estrada de ferro Carajás, que transporta minério para exportação.',
    doresEspecificas:
      'Em São Luís, o calendário sofre forte impacto do São João — junho é o mês de pico para grupos de bumba-meu-boi de Axixá, Maioba e Madre Deus, e o turismo cultural enche pousadas do Centro Histórico. Fora do São João, ludovicenses sofrem com a chuva de 5 meses (jan-mai), o reggae da Av. Litorânea define horário do comércio, e prestadores competem com a "saída" para Imperatriz, polo agro-emergente.',
    populacao: '1,1 milhão de habitantes',
    referencia:
      'Capital maranhense, Centro Histórico tombado pela UNESCO com 3.500 casarões, Bumba-meu-boi, capital brasileira do reggae e Lençóis Maranhenses vizinhos.',
  },
  {
    slug: 'teresina',
    nome: 'Teresina',
    estado: 'Piauí',
    siglaEstado: 'PI',
    descricao:
      'Teresina é a única capital nordestina não litorânea e o segundo maior polo de saúde do Nordeste, atrás apenas de Recife — atende pacientes de Piauí, Maranhão, Tocantins e Pará. Hospitais como São Marcos, Promed e o Hospital Getúlio Vargas movimentam R$ 1,5 bilhão/ano segundo a SESAPI. A cidade também é uma das mais quentes do Brasil, com média de 35°C no segundo semestre.',
    doresEspecificas:
      'Em Teresina, o calor é o principal definidor de hábito de consumo: comércio de rua só lota antes das 10h e depois das 17h, e delivery de bebida e açaí explode após as 18h. Médicos e clínicas competem pelo paciente que vem do interior do Piauí e Maranhão (Floriano, Imperatriz) e gasta hospedagem na cidade — funis precisam fazer agendamento+hospedagem+exame, modelo "kit saúde" único da região.',
    populacao: '871 mil habitantes',
    referencia:
      'Capital piauiense, encontro dos rios Poti e Parnaíba, polo de saúde do Meio-Norte e única capital nordestina não banhada pelo mar.',
  },
  {
    slug: 'joao-pessoa',
    nome: 'João Pessoa',
    estado: 'Paraíba',
    siglaEstado: 'PB',
    descricao:
      'João Pessoa abriga a Ponta do Seixas, o ponto mais oriental das Américas — onde o sol nasce primeiro no continente. A cidade tem o segundo maior IDH do Nordeste (0,763) e o terceiro lugar nacional em arborização urbana, segundo o IBGE. O PIB é de R$ 22 bilhões, com forte presença do setor coureiro-calçadista (polo de Campina Grande vizinho) e crescente turismo de luxo em Tambaú e Cabo Branco.',
    doresEspecificas:
      'Em João Pessoa, prestadores enfrentam concorrência da vizinha Recife (130 km) que rouba pacientes médicos e estudantes universitários. O boom imobiliário levou metro quadrado em Tambaú a R$ 12 mil, dobrando custo de aluguel comercial em 5 anos, enquanto pousadas de Jacumã e Tabatinga competem com Pipa/RN no mesmo público sulista — exigindo SEO focado em "praia tranquila Paraíba" para vencer o destino mais conhecido.',
    populacao: '825 mil habitantes',
    referencia:
      'Capital paraibana, Ponta do Seixas como ponto mais oriental das Américas, praias de Tambaú e Cabo Branco e maior bosque urbano do mundo na Mata do Buraquinho.',
  },
  {
    slug: 'maceio',
    nome: 'Maceió',
    estado: 'Alagoas',
    siglaEstado: 'AL',
    descricao:
      'Maceió tem as praias com águas mais translúcidas do Brasil — Pajuçara, Ponta Verde e Cruz das Almas, com visibilidade média de 8 metros segundo o Instituto Chico Mendes. O turismo cresceu 28% entre 2022 e 2024, e o aeroporto Zumbi dos Palmares recebe mais de 3 milhões de passageiros/ano. PIB de R$ 18 bilhões com peso forte do açúcar/álcool da Zona da Mata e do polo cloroquímico de Pilar/Marechal Deodoro.',
    doresEspecificas:
      'Em Maceió, a crise do bairro Pinheiro/Mutange (subsidência causada pela Braskem que afundou 5 bairros e expulsou 60 mil pessoas desde 2018) deslocou comércio inteiro para Jatiúca e Cruz das Almas — mudou o eixo da cidade. Pousadas em Maragogi (130 km) competem direto, e os jangadeiros das piscinas naturais sofrem com Booking.com tirando 25% das reservas em alta temporada.',
    populacao: '1,0 milhão de habitantes',
    referencia:
      'Capital alagoana, Praia do Francês, Maragogi vizinha, jangadas nas piscinas naturais de Pajuçara e Lagoa Mundaú como ponto turístico.',
  },
  {
    slug: 'aracaju',
    nome: 'Aracaju',
    estado: 'Sergipe',
    siglaEstado: 'SE',
    descricao:
      'Aracaju foi a primeira capital planejada do Brasil (1855), com traçado em xadrez no centro. A economia gira em torno da bacia de Sergipe-Alagoas, que produz 27% do gás natural offshore brasileiro, e da Petrobras (sede regional). A cidade tem o quarto maior PIB per capita do Nordeste (R$ 36 mil) e ocupa o primeiro lugar entre capitais nordestinas em saneamento básico, segundo o ranking Trata Brasil.',
    doresEspecificas:
      'Em Aracaju, a alta gastronomia da Orla de Atalaia (caranguejo, sururu, casquinha de siri) compete por turista com Maceió e Salvador no mesmo perfil de viajante. Empreendedores do bairro Jardins (classe A) e do Centro brigam por bolsões pequenos de consumidor — 670 mil hab. limita o ticket. O Forró Caju (em junho) é o momento de pico anual, e quem não vende quentinha+camiseta+pacote temático perde a janela.',
    populacao: '664 mil habitantes',
    referencia:
      'Capital sergipana, primeira capital planejada do Brasil, Orla de Atalaia, Mercado Antônio Franco e bacia de petróleo offshore Sergipe-Alagoas.',
  },
  {
    slug: 'natal',
    nome: 'Natal',
    estado: 'Rio Grande do Norte',
    siglaEstado: 'RN',
    descricao:
      'Natal é a "Capital do Sol" com 3.000 horas de insolação anual — uma das maiores do mundo — e abriga o maior parque eólico onshore da América Latina, com mais de 200 aerogeradores no litoral norte. O Rio Grande do Norte gera 25% da energia eólica do Brasil segundo a ABEEólica, e a cidade tem PIB de R$ 25 bilhões com forte presença do setor de fruticultura irrigada (Mossoró exporta melão para 35 países).',
    doresEspecificas:
      'Em Natal, bugueiros de Genipabu e operadores de Pipa competem diretamente com Maragogi/AL e Jericoacoara/CE pelo viajante sudestino com R$ 5-8 mil/semana. O Beach Park de Fortaleza e o Aqualunna em Maceió rouba famílias com crianças, e o consumidor argentino (40% do estrangeiro) sumiu pós-crise cambial 2023-25, forçando pousadas da Via Costeira a refazer ICP para casais de Brasília e SP.',
    populacao: '890 mil habitantes',
    referencia:
      'Capital potiguar, dunas de Genipabu, Forte dos Reis Magos, Praia de Ponta Negra com Morro do Careca e polo de energia eólica onshore.',
  },
  {
    slug: 'campo-grande',
    nome: 'Campo Grande',
    estado: 'Mato Grosso do Sul',
    siglaEstado: 'MS',
    descricao:
      'Campo Grande é "Capital Brasileira da Carne" — o Mato Grosso do Sul tem o maior rebanho bovino do país (mais de 18 milhões de cabeças), segundo a IBGE PPM. A cidade abriga sedes da JBS, Marfrig e Minerva, e a Rota Bioceânica (que ligará por terra Brasil ao Pacífico via Paraguai/Chile) deve dobrar o fluxo logístico até 2026. PIB de R$ 32 bilhões e forte presença coreana e japonesa — segunda maior colônia okinawana do Brasil.',
    doresEspecificas:
      'Em Campo Grande, restaurantes da Av. Afonso Pena disputam público com a soba (lámen okinawano) da Feira Central — patrimônio imaterial estadual — e churrascarias premium do Cabreúva. Empreendedores rurais que vendem para produtores de Bonito, Aquidauana e Dourados (corredor pantaneiro) sofrem com rotas de até 350 km, e a estiagem de 2024 (pior em 30 anos) reduziu pastagem e atrasou pagamento do agro à cadeia urbana.',
    populacao: '916 mil habitantes',
    referencia:
      'Capital sul-mato-grossense, Feira Central da soba, Parque das Nações Indígenas, porta de entrada do Pantanal e Capital da Carne.',
  },
  {
    slug: 'cuiaba',
    nome: 'Cuiabá',
    estado: 'Mato Grosso',
    siglaEstado: 'MT',
    descricao:
      'Cuiabá é a capital do estado que produz 30% da soja do Brasil — Mato Grosso colheu 45 milhões de toneladas em 2024 segundo a CONAB, sendo o maior produtor mundial. A cidade tem PIB de R$ 26 bilhões e abriga revendas multinacionais (John Deere, Case, AGCO) que faturam R$ 8+ bi/ano. Cuiabá registra temperatura máxima média de 40°C entre setembro e outubro, sendo uma das capitais mais quentes do planeta.',
    doresEspecificas:
      'Em Cuiabá, o calendário do agro define tudo: maio-agosto é colheita e o comércio enche de boné, camionete e cheque; novembro-fevereiro é plantio com chuva diária, e clínicas e serviços ficam vazios pelas estradas intransitáveis ao redor (BR-163 sofre 200+ atoleiros por safra). Empreendedores precisam fazer "marketing duas estações" — verão chuvoso e seca extrema — e a alta do milho/soja muda ticket de loja de moda em uma semana.',
    populacao: '650 mil habitantes',
    referencia:
      'Capital mato-grossense, centro geodésico da América do Sul, Arena Pantanal, sopa cuiabana e porta de entrada para o Pantanal Norte.',
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
