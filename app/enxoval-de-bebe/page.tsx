import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'

const BASE = 'https://calazanslumina.com.br'

export const metadata: Metadata = {
  title: 'Enxoval de Bebe Completo 2026: Checklist + Lista PDF Gratis | Calazans Lumina',
  description: 'Checklist completo de enxoval de bebe 2026 com lista em PDF gratis para baixar. Roupinhas 100% algodao, berco, fraldas, higiene, carrinho e bebe conforto. Guia com quantidades, dicas de pediatras e melhores precos na Shopee. Monte o enxoval perfeito!',
  keywords: [
    'enxoval de bebe', 'enxoval de bebe completo', 'lista enxoval bebe',
    'checklist enxoval bebe 2026', 'enxoval recem nascido', 'roupinha de bebe 100 algodao',
    'enxoval bebe menina', 'enxoval bebe menino', 'lista de enxoval para imprimir',
    'berco portatil', 'mamadeira anti colica MAM', 'carrinho de bebe',
    'bebe conforto', 'bolsa maternidade', 'fraldas recem nascido',
    'enxoval de bebe barato', 'enxoval bebe shopee', 'o que comprar enxoval bebe',
    'quantas roupas enxoval bebe', 'enxoval bebe essencial',
    'enxoval de bebe lista completa', 'checklist maternidade',
    'mala maternidade o que levar', 'produtos para recem nascido',
  ],
  alternates: { canonical: `${BASE}/enxoval-de-bebe` },
  openGraph: {
    title: 'Enxoval de Bebe Completo 2026: Checklist + Lista PDF Gratis',
    description: 'O guia definitivo para montar o enxoval do bebe. Checklist com quantidades, dicas de especialistas, produtos 100% algodao e os melhores precos. Baixe o PDF gratis!',
    url: `${BASE}/enxoval-de-bebe`,
    type: 'website',
    siteName: 'Calazans Lumina',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enxoval de Bebe Completo 2026: Checklist + Lista PDF Gratis',
    description: 'Checklist completo de enxoval de bebe com lista em PDF gratis. Roupinhas 100% algodao, berco, fraldas, higiene e passeio com melhores precos.',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large' as const,
    'max-video-preview': -1,
  },
}

type Produto = {
  nome: string
  desc: string
  preco: number
  precoOriginal: number
  desconto: number
  rating: number
  likes: number
  imagem: string
  link: string
  destaque?: boolean
  tag?: string
  algodao?: boolean
}

type Categoria = {
  id: string
  titulo: string
  subtitulo: string
  icone: string
  gradient: string
  dica: string
  produtos: Produto[]
}

const categorias: Categoria[] = [
  {
    id: 'roupas-bebe',
    titulo: 'Roupinhas do Bebe',
    subtitulo: 'Bodies, mijoes, macacoes e saida de maternidade — priorize 100% algodao para pele sensivel do RN',
    icone: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    gradient: 'from-fuchsia-400 to-pink-500',
    dica: 'Compre poucas pecas RN — o bebe cresce rapido! Invista mais nos tamanhos P e M. Prefira aberturas frontais com botoes de pressao.',
    produtos: [
      {
        nome: 'Kit 4 Body + Calca Mijao Bebe Menina RN',
        desc: '2 bodies de manga curta + 2 calcas mijao. Kit essencial para recem-nascido. 100% algodao puro, ideal para pele sensivel.',
        preco: 40.00, precoOriginal: 58.00, desconto: 31, rating: 4.80, likes: 2799,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81ztc-mjjwigwgs0zqf8',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F23797641493',
        destaque: true, tag: 'Essencial RN', algodao: true,
      },
      {
        nome: 'Macacão Bebe com Botoes Frontais Estampado',
        desc: 'Macacao fofo com botoes frontais de pressao. Facil de vestir e trocar fralda. Tecido macio e confortavel.',
        preco: 38.00, precoOriginal: 54.00, desconto: 30, rating: 4.93, likes: 15300,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rdvu-mc7g31995bxq06',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F426378412%2F28122818119',
        destaque: true, tag: 'Mais Vendido',
      },
      {
        nome: 'Kit Saida Maternidade Menino 7 Pecas Completa',
        desc: 'Saida de maternidade completa: body, mijao, macacao, manta, luva, touca e meia. Tudo para o primeiro dia do bebe.',
        preco: 209.90, precoOriginal: 280.00, desconto: 25, rating: 4.85, likes: 8500,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-lyqhktrxbgw152',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F338592214%2F4763603548',
        destaque: true, tag: 'Kit Completo',
      },
      {
        nome: 'Saida de Maternidade 5 Pecas Conjunto Pagao RN',
        desc: 'Conjunto pagao 5 pecas para recem-nascido: body, calca mijao, manta, touca e luva. Unissex, menino e menina.',
        preco: 30.00, precoOriginal: 45.00, desconto: 33, rating: 4.78, likes: 5200,
        imagem: 'https://cf.shopee.com.br/file/27252fdaa046e681fc8e4d1344041f65',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F413850328%2F19672439184',
        tag: 'Custo-Beneficio',
      },
      {
        nome: 'Manta Cobertor Microfibra Dupla Face Bebe',
        desc: 'Manta de bebe antialergica dupla face sherpa. Macia, quentinha e perfeita para enxoval e saida de maternidade.',
        preco: 43.89, precoOriginal: 65.00, desconto: 33, rating: 4.88, likes: 12400,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m8p0k8n32o0258',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F424219988%2F22592975480',
        tag: 'Essencial RN',
      },
      {
        nome: 'Kit 4 Pecas Moletom Bebe Menina Inverno',
        desc: '2 casacos + 2 calcas de moletom peluciado. Quentinho e confortavel para bebes no inverno.',
        preco: 60.00, precoOriginal: 100.00, desconto: 40, rating: 4.78, likes: 39526,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m1gxe6gf4utk9e',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F23997496332',
        tag: 'Custo-Beneficio',
      },
    ],
  },
  {
    id: 'berco-quarto-bebe',
    titulo: 'Berco & Quarto do Bebe',
    subtitulo: 'Bercos, comodas, cadeiras de descanso e tudo para montar o quartinho seguro',
    icone: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
    gradient: 'from-pink-400 to-rose-500',
    dica: 'NUNCA coloque travesseiros, almofadas ou bichos de pelucia dentro do berco. O colchao deve ser firme (D18 a D23) e justo. Berco deve ter selo INMETRO.',
    produtos: [
      {
        nome: 'Berco Portatil Cercado com Mosquiteiro Kababy',
        desc: 'Berco portatil desmontavel com mosquiteiro Sleep. Seguro e pratico para levar a qualquer lugar.',
        preco: 420.00, precoOriginal: 600.00, desconto: 30, rating: 4.96, likes: 24712,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rat5-mabnrf7gcd6m00',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1009324389%2F23798071706',
        destaque: true, tag: 'Top Avaliacao',
      },
      {
        nome: 'Berco Portatil Cercado Lazy MaxiBaby 0-15kg',
        desc: 'Berco cercado portatil para bebes ate 15kg. Facil de montar e desmontar.',
        preco: 480.00, precoOriginal: 600.00, desconto: 20, rating: 4.96, likes: 22902,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rbkx-ll3qajuocnedb0',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F23392272469',
      },
      {
        nome: 'Berco Co-Leito Snuggle Maxi Baby ate 9kg',
        desc: 'Berco portatil co-leito para ficar junto da cama dos pais. Pratico e aconchegante.',
        preco: 290.00, precoOriginal: 299.00, desconto: 3, rating: 4.77, likes: 23104,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-22100-y6r5etkucviv72',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F18156043829',
      },
      {
        nome: 'Berco Multifuncional 3x1 Ditalia',
        desc: 'Berco que vira mini-cama e sofazinho. 3 em 1 para acompanhar o crescimento do bebe.',
        preco: 348.00, precoOriginal: 360.00, desconto: 3, rating: 4.84, likes: 13645,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rd6b-lu9pr7a5k1fk8d',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F522316174%2F16487846020',
      },
      {
        nome: 'Comoda Infantil 4 Gavetas 100% MDF Carolina Baby',
        desc: 'Comoda com 4 gavetas e porta. 100% MDF de qualidade. Perfeita para o quartinho.',
        preco: 438.00, precoOriginal: 581.00, desconto: 25, rating: 4.80, likes: 24160,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mezmp3lyqbr97a',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F791924197%2F23191320592',
        tag: 'Premium',
      },
      {
        nome: 'Comoda Giratoria 3 Gavetas com Trocador',
        desc: 'Gaveteiro giratorio com 3 gavetas e trocador. Branca, multiuso e organizadora.',
        preco: 353.00, precoOriginal: 459.00, desconto: 23, rating: 4.80, likes: 19083,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-matugdoax2ih8d',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1467752495%2F22894142345',
      },
      {
        nome: 'Cadeira de Descanso Vibratoria Protek Girafa',
        desc: 'Cadeira vibratoria e musical para bebe. Confortavel e divertida com a Girafa Gigi.',
        preco: 166.00, precoOriginal: 190.00, desconto: 13, rating: 4.88, likes: 45612,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7qukw-lg2ddsdvmqfae7',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F12338701517',
        destaque: true, tag: 'Mais Vendido',
      },
      {
        nome: 'Cadeira de Balanco Vibratoria Zippy Toys',
        desc: 'Cadeira de descanso e balanco com vibracao, musica e brinquedos didaticos.',
        preco: 200.00, precoOriginal: 350.00, desconto: 43, rating: 4.91, likes: 22242,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m839ativng1d1d',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F504754787%2F21199673118',
        tag: '-43% OFF',
      },
      {
        nome: 'Cercadinho Bebe + Tapete + Bolsa 180x150',
        desc: 'Cercadinho portatil com tapete, bolsa e argola. Grande (180x150cm) e dobravel.',
        preco: 350.00, precoOriginal: 500.00, desconto: 30, rating: 4.93, likes: 30103,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81ztp-ml3ppw7d9zb5fc',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1095160737%2F23393156386',
      },
    ],
  },
  {
    id: 'higiene-bebe',
    titulo: 'Higiene & Banho do Bebe',
    subtitulo: 'Banheiras, lencos, shampoos, fraldas e produtos hipoalergenicos para a pele sensivel do bebe',
    icone: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    gradient: 'from-cyan-400 to-teal-500',
    dica: 'Nos primeiros 15 dias, use algodao com agua morna em vez de lencos umedecidos. A pele do recem-nascido e extremamente sensivel. Prefira produtos sem fragrancia.',
    produtos: [
      {
        nome: 'Banheira de Bebe 22L com Balde Ofuro 11L e Saboneteira',
        desc: 'Kit banheira anatomica 22 litros + balde ofuro 11 litros + saboneteira. Livre de BPA. Segura e pratica para o banho do recem-nascido.',
        preco: 59.61, precoOriginal: 85.00, desconto: 30, rating: 4.90, likes: 18500,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7qukw-leyvxtmqssgv64',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F393225821%2F20756370156',
        destaque: true, tag: 'Essencial RN',
      },
      {
        nome: 'Kit Cuidado Bebe Recem Nascido Maternidade 7 Itens',
        desc: 'Kit completo pos-parto para mae e bebe: tesoura, termometro, aspirador nasal, pente, escova e mais. Essencial na bolsa maternidade.',
        preco: 39.99, precoOriginal: 60.00, desconto: 33, rating: 4.82, likes: 9200,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-luragfyte5400d',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F335798970%2F23291375348',
        tag: 'Kit Completo',
      },
      {
        nome: 'Lencos Umedecidos Bepantol Hipoalergenico 4x48un',
        desc: 'Kit com 4 pacotes de lencos Bepantol. Hipoalergenico, suave para a pele do bebe.',
        preco: 57.00, precoOriginal: 65.00, desconto: 12, rating: 4.95, likes: 29599,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m9zxeatpaoftb1',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F21145355218',
        destaque: true, tag: 'Mais Vendido',
      },
      {
        nome: 'Toalha Umedecida Meu Bebe Ultra 500 Folhas',
        desc: '500 folhas de toalha umedecida. Rendimento incrivel e preco acessivel.',
        preco: 49.00, precoOriginal: 59.00, desconto: 17, rating: 4.97, likes: 25335,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rdw7-lz575a3eoft2f3',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1045085918%2F23693223002',
        tag: 'Top Avaliacao',
      },
      {
        nome: 'Lencos Umedecidos Pampers Caricia 576un',
        desc: 'Mega pacote Pampers com 576 unidades. Suave e delicado para o bebe.',
        preco: 145.00, precoOriginal: 145.00, desconto: 0, rating: 4.97, likes: 18929,
        imagem: 'https://cf.shopee.com.br/file/5b4a2c4487753a6da0ae4e835b39afed',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1062557396%2F23296759926',
      },
      {
        nome: 'Kit 2 Shampoos Johnson\'s Baby 750ml',
        desc: 'Classico shampoo Johnson\'s Baby. Kit com 2 frascos de 750ml. Suave e sem lagrimas.',
        preco: 116.00, precoOriginal: 116.00, desconto: 0, rating: 4.95, likes: 17270,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-22110-2o6ekj3lrhjv80',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F818390117%2F21760170574',
      },
      {
        nome: 'Kit 3 Lava Roupas Baby Soft 3L',
        desc: 'Sabao liquido especial para roupas de bebe. Kit com 3 galoes de 3L. Hipoalergenico.',
        preco: 69.00, precoOriginal: 90.00, desconto: 23, rating: 4.94, likes: 24296,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m5sq8of7ls3pde',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F534023108%2F22597600131',
        destaque: true, tag: 'Custo-Beneficio',
      },
      {
        nome: 'Kit 3 Sabonete Liquido Dove Baby 200ml',
        desc: 'Sabonete liquido Dove Baby da cabeca aos pes. Hidratacao glicerinada. Kit com 3.',
        preco: 48.00, precoOriginal: 48.00, desconto: 0, rating: 4.94, likes: 12346,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-82253-mhibadpca1vqf8',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F893869193%2F18497120955',
      },
      {
        nome: 'Fralda Cremer Magic Care Pacote Jumbo 30un',
        desc: 'Fraldas descartaveis Cremer tamanho P. Pacote jumbo com 30 unidades. Absorcao garantida.',
        preco: 22.00, precoOriginal: 22.00, desconto: 0, rating: 4.92, likes: 11023,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-8260u-mli5r4xogiyob3',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F893869193%2F20064627520',
        tag: 'Custo-Beneficio',
      },
    ],
  },
  {
    id: 'alimentacao-bebe',
    titulo: 'Alimentacao do Bebe',
    subtitulo: 'Mamadeiras anti-colica, cadeiras de alimentacao e utensilios essenciais',
    icone: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    gradient: 'from-sky-400 to-blue-500',
    dica: 'Amamentacao exclusiva e recomendada ate os 6 meses. Congele leite materno em porcoes de 60-120ml. Validade: 15 dias no freezer, 12h na geladeira apos descongelar.',
    produtos: [
      {
        nome: 'Cadeira de Alimentacao Infantil',
        desc: 'Cadeira pratica e segura para refeicao do bebe. Para meninos e meninas.',
        preco: 65.00, precoOriginal: 105.00, desconto: 38, rating: 4.78, likes: 19623,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m7w9jpkbp9m9bc',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F325008325%2F23196614815',
        destaque: true, tag: 'Mais Vendido',
      },
      {
        nome: 'Cadeira de Alimentacao Portatil Honey Maxi Baby',
        desc: 'Cadeira portatil premium com regulagens. Pratica para levar a qualquer lugar.',
        preco: 459.00, precoOriginal: 459.00, desconto: 0, rating: 4.96, likes: 15016,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7qvfm-ljd8qlu3ie2p99',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F22591811020',
        tag: 'Top Avaliacao',
      },
      {
        nome: 'Cadeira Alimentacao Burigotto Poke Polar',
        desc: 'Cadeira de alimentacao da Burigotto. Marca de confianca, seguranca garantida.',
        preco: 317.00, precoOriginal: 403.00, desconto: 21, rating: 4.96, likes: 6409,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7repu-m8z3oe14clog27',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1479622710%2F20999713015',
        tag: 'Premium',
      },
      {
        nome: 'Cadeira 4 em 1 com Rodas Gourmet KaBaby',
        desc: 'Cadeira multifuncional 4 em 1 com rodas. Super versatil, acompanha o crescimento.',
        preco: 400.00, precoOriginal: 800.00, desconto: 50, rating: 4.93, likes: 5358,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-824jb-me8tacri08avd3',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1009324389%2F28091121555',
        tag: '-50% OFF',
      },
      {
        nome: 'Kit 2 Mamadeiras MAM Easy Start 130/260ml',
        desc: 'Mamadeiras MAM referencia mundial. Kit com 2 tamanhos. Anti-colica e facil de limpar.',
        preco: 120.00, precoOriginal: 120.00, desconto: 0, rating: 4.91, likes: 17864,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81ztc-mka3hl6ox14x8b',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F17725599153',
      },
      {
        nome: 'Kit 3 Mamadeiras MAM Easy Start 130/260/320ml',
        desc: 'Kit completo MAM com 3 mamadeiras de tamanhos diferentes. Do recem-nascido ao bebe maior.',
        preco: 189.00, precoOriginal: 189.00, desconto: 0, rating: 4.97, likes: 10352,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rdvm-lycge8eww6qw73',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F23797673343',
        destaque: true, tag: 'Top Avaliacao',
      },
      {
        nome: 'Copo de Treinamento com Alca 150ml Lillo',
        desc: 'Copo de transicao para bebes. Com alca, facil de segurar. Marca Lillo.',
        preco: 35.00, precoOriginal: 37.00, desconto: 5, rating: 4.90, likes: 7932,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7qukw-lj1evtz1r8og92',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F481992044%2F3295101131',
      },
    ],
  },
  {
    id: 'passeio-bebe',
    titulo: 'Passeio & Transporte',
    subtitulo: 'Carrinhos, bebe conforto, bolsas maternidade e cangurus — seguranca em primeiro lugar',
    icone: 'M8 7h12l2 5H6l2-5zM3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
    gradient: 'from-indigo-500 to-blue-600',
    dica: 'O bebe conforto e OBRIGATORIO por lei no carro. Instale de costas para o movimento ate pelo menos 2 anos. O bebe so deve frequentar lugares publicos apos as primeiras vacinas (2 meses).',
    produtos: [
      {
        nome: 'Mochila Bolsa Maternidade Lequeen Original',
        desc: 'Bolsa maternidade com porta mamadeira e fralda. Original Lequeen, super organizada.',
        preco: 189.00, precoOriginal: 210.00, desconto: 10, rating: 4.94, likes: 18821,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7qukw-lkgqpus6jwa9de',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F345061139%2F8139620593',
        destaque: true, tag: 'Mais Vendido',
      },
      {
        nome: 'Carrinho de Bebe Guarda-Chuva MOVEE Maxi Baby',
        desc: 'Carrinho guarda-chuva leve e compacto. Facil de transportar e guardar.',
        preco: 250.00, precoOriginal: 390.00, desconto: 36, rating: 4.84, likes: 10104,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rbla-loy58vz9qodv8c',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F21899093561',
        tag: '-36% OFF',
      },
      {
        nome: 'Cadeirinha para Carro Styll Baby ate 36kg',
        desc: 'Cadeirinha de bebe para carro infantil ate 10 anos (36kg). Com regulagem de altura.',
        preco: 314.00, precoOriginal: 390.00, desconto: 19, rating: 4.91, likes: 5668,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m2glp26toocm0b',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F504754787%2F22198027272',
      },
      {
        nome: 'Bebe Conforto Cadeirinha Styll Baby ate 36kg',
        desc: 'Cadeirinha 0 a 10 anos com assento de elevacao. Seguranca maxima para seu bebe.',
        preco: 320.00, precoOriginal: 390.00, desconto: 18, rating: 4.94, likes: 5351,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m26nodhjd61ia0',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F504754787%2F22193530656',
      },
      {
        nome: 'Canguru Baby Carrier 3 em 1 Nuk',
        desc: 'Canguru ergonomico 3 posicoes. Marca Nuk, referencia em produtos para bebe.',
        preco: 304.00, precoOriginal: 304.00, desconto: 0, rating: 4.91, likes: 5102,
        imagem: 'https://cf.shopee.com.br/file/bdb267f0d9eaccedda088a000042126c',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F467697231%2F9767275523',
        tag: 'Premium',
      },
      {
        nome: 'Mochila Bolsa Maternidade Ursinho Reforcada',
        desc: 'Bolsa maternidade resistente e reforcada com tema ursinho. Espacosa e organizada.',
        preco: 160.00, precoOriginal: 190.00, desconto: 16, rating: 4.95, likes: 7201,
        imagem: 'https://cf.shopee.com.br/file/br-11134201-22120-zbei5vpaeblv9b',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F441234830%2F19369241619',
      },
      {
        nome: 'Cadeirinha Maximus para Carro Galzerano ate 25kg',
        desc: 'Cadeirinha de seguranca Galzerano. Marca premium brasileira, conforto e protecao.',
        preco: 376.00, precoOriginal: 550.00, desconto: 32, rating: 4.95, likes: 2068,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mehphm202yo3d3',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F601021305%2F22998877617',
      },
      {
        nome: 'Carrinho EasyGo 3 Rodas KaBaby ate 15kg',
        desc: 'Carrinho de bebe 3 rodas com cesto. Leve e compacto. Da marca KaBaby.',
        preco: 340.00, precoOriginal: 800.00, desconto: 58, rating: 4.86, likes: 3484,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7ravr-maoij9kqdfgwba',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1009324389%2F23298540871',
        tag: '-58% OFF',
      },
    ],
  },
]

const totalProdutos = categorias.reduce((acc, cat) => acc + cat.produtos.length, 0)
const totalAlgodao = categorias.reduce((acc, cat) => acc + cat.produtos.filter(p => p.algodao).length, 0)

function formatPrice(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function formatLikes(likes: number) {
  if (likes >= 1000) return `${(likes / 1000).toFixed(0)}k`
  return likes.toString()
}

function getTagColor(tag?: string) {
  if (!tag) return ''
  if (tag.includes('OFF')) return 'bg-red-500 text-white'
  if (tag === 'Mais Vendido') return 'bg-red-500 text-white'
  if (tag === 'Top Avaliacao') return 'bg-emerald-500 text-white'
  if (tag === 'Premium') return 'bg-purple-500 text-white'
  if (tag === 'Custo-Beneficio') return 'bg-blue-500 text-white'
  return 'bg-gray-500 text-white'
}

export default function EnxovalBebePage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Checklist Enxoval de Bebe Completo 2026',
    description: 'Guia completo de enxoval de bebe com checklist, quantidades, dicas de especialistas e produtos selecionados com avaliacao 4.7+ na Shopee.',
    url: `${BASE}/enxoval-de-bebe`,
    numberOfItems: totalProdutos,
    itemListElement: categorias.flatMap((cat, ci) =>
      cat.produtos.map((prod, pi) => ({
        '@type': 'ListItem',
        position: ci * 10 + pi + 1,
        item: {
          '@type': 'Product',
          name: prod.nome,
          description: prod.desc,
          url: prod.link,
          image: prod.imagem,
          offers: {
            '@type': 'Offer',
            price: prod.preco,
            priceCurrency: 'BRL',
            availability: 'https://schema.org/InStock',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: prod.rating,
            bestRating: 5,
            ratingCount: prod.likes,
          },
        },
      }))
    ),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'O que nao pode faltar no enxoval do bebe?',
        acceptedAnswer: { '@type': 'Answer', text: 'O enxoval essencial inclui: 6-8 bodies (manga curta e longa) 100% algodao, 6-8 calcas com pe, 4-6 macacoes, meias, toucas, luvas antiarranhao, fraldas (RN, P e M), lencos umedecidos, pomada contra assaduras, sabonete liquido neutro, berco com certificacao INMETRO, colchao firme, lencois com elastico, mamadeiras anti-colica, bebe conforto para carro e bolsa maternidade.' },
      },
      {
        '@type': 'Question',
        name: 'Quantas roupas comprar para o enxoval do bebe?',
        acceptedAnswer: { '@type': 'Answer', text: 'Para recem-nascido: 6-8 bodies manga curta, 6-8 bodies manga longa, 6-8 calcas com pe, 4-6 macacoes, 4-6 conjuntos, 6-8 pares de meias, 3-4 pares de luvas, 2-3 toucas, 2-3 casaquinhos e 3-4 pijamas. Compre poucas pecas no tamanho RN (o bebe cresce rapido) e invista mais nos tamanhos P e M.' },
      },
      {
        '@type': 'Question',
        name: 'Por que escolher roupas 100% algodao para bebe?',
        acceptedAnswer: { '@type': 'Answer', text: 'A pele do bebe e 5 vezes mais fina que a do adulto. Tecidos sinteticos podem causar alergias, irritacao e dermatite de contato. O algodao puro e hipoalergenico, macio, permite a pele respirar e regula melhor a temperatura corporal do bebe. Sempre verifique a etiqueta antes de comprar.' },
      },
      {
        '@type': 'Question',
        name: 'Quando comecar a montar o enxoval do bebe?',
        acceptedAnswer: { '@type': 'Answer', text: 'O ideal e comecar a montar o enxoval a partir da 20a semana de gestacao (5o mes). Isso da tempo para pesquisar precos, aproveitar promocoes e organizar tudo com calma. A bolsa maternidade deve estar pronta na 36a semana (9o mes). Nao compre tudo de uma vez — monte gradualmente.' },
      },
      {
        '@type': 'Question',
        name: 'Quantas fraldas o recem-nascido usa por dia?',
        acceptedAnswer: { '@type': 'Answer', text: 'O recem-nascido usa em media 8 a 10 fraldas por dia. Para o estoque inicial: 2-4 pacotes tamanho RN (usara por 2-3 semanas), 10-15 pacotes tamanho P (durara cerca de 2 meses) e 10-15 pacotes tamanho M (compre gradualmente). Nao compre tudo de uma marca so, pois cada bebe se adapta melhor a uma marca diferente.' },
      },
      {
        '@type': 'Question',
        name: 'O que levar na bolsa maternidade para o hospital?',
        acceptedAnswer: { '@type': 'Answer', text: 'Para o bebe: 3 bodies manga curta e 3 longa (RN e P), 3 macacoes, 3 pares de meias, 2 pares de luvas, 2 toucas, 2 mantas de algodao, 1 pacote de fraldas RN e 1 de lencos sem fragrancia. Para a mamae: 2-3 camisolas com abertura frontal, 2 sutias de amamentacao, 3-4 calcinhas confortaveis, absorvente pos-parto, chinelo e necessaire de higiene.' },
      },
      {
        '@type': 'Question',
        name: 'Qual o berco mais seguro para recem-nascido?',
        acceptedAnswer: { '@type': 'Answer', text: 'O berco mais seguro deve ter certificacao INMETRO, grades com espacamento maximo de 6,5cm, colchao firme (densidade D18 a D23) e justo ao berco. NUNCA coloque travesseiros, almofadas, bichos de pelucia ou cobertores soltos dentro do berco. Use apenas lencol com elastico. A temperatura ideal do quarto e entre 22-24 graus.' },
      },
      {
        '@type': 'Question',
        name: 'Bebe conforto e obrigatorio?',
        acceptedAnswer: { '@type': 'Answer', text: 'Sim! O bebe conforto (cadeirinha para auto) e obrigatorio por lei no Brasil para transportar criancas em veiculos. Deve ser instalado de costas para o movimento ate pelo menos 2 anos de idade e deve ter selo INMETRO. A multa por transporte irregular de criancas e gravissima.' },
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Como Montar o Enxoval de Bebe Completo em 2026',
    description: 'Passo a passo para montar o enxoval do bebe com economia e qualidade, priorizando itens 100% algodao e seguranca.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Comece na 20a semana', text: 'Inicie o planejamento do enxoval a partir da 20a semana de gestacao. Faca uma lista e pesquise precos.' },
      { '@type': 'HowToStep', position: 2, name: 'Priorize roupas 100% algodao', text: 'Compre bodies, macacoes e conjuntos em algodao puro. Evite tecidos sinteticos que irritam a pele do bebe.' },
      { '@type': 'HowToStep', position: 3, name: 'Monte o quarto com seguranca', text: 'Escolha berco com selo INMETRO, colchao firme e nada solto dentro do berco. Sem travesseiro ate 1 ano.' },
      { '@type': 'HowToStep', position: 4, name: 'Estoque fraldas gradualmente', text: 'Compre poucas fraldas RN, mais P e M. Nao compre tudo de uma marca so — teste diferentes marcas.' },
      { '@type': 'HowToStep', position: 5, name: 'Prepare a alimentacao', text: 'Tenha mamadeiras anti-colica, bomba tira-leite e potes para armazenar leite materno.' },
      { '@type': 'HowToStep', position: 6, name: 'Garanta a seguranca no transporte', text: 'Compre bebe conforto com selo INMETRO. E obrigatorio por lei no carro.' },
      { '@type': 'HowToStep', position: 7, name: 'Monte a bolsa maternidade na 36a semana', text: 'Separe roupas do bebe e da mamae em bolsas diferentes. Lave tudo com sabao neutro antes.' },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Enxoval de Bebe', item: `${BASE}/enxoval-de-bebe` },
    ],
  }

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Enxoval de Bebe Completo 2026: Checklist + Lista PDF Gratis',
    description: 'Checklist completo de enxoval de bebe 2026 com lista em PDF gratis. Roupinhas 100% algodao, berco, fraldas, higiene, carrinho e bebe conforto.',
    url: `${BASE}/enxoval-de-bebe`,
    inLanguage: 'pt-BR',
    isPartOf: { '@type': 'WebSite', name: 'Calazans Lumina', url: BASE },
    about: { '@type': 'Thing', name: 'Enxoval de Bebe' },
    mentions: [
      { '@type': 'Thing', name: 'Roupas 100% Algodao para Bebe' },
      { '@type': 'Thing', name: 'Berco com Certificacao INMETRO' },
      { '@type': 'Thing', name: 'Mamadeira Anti-Colica MAM' },
      { '@type': 'Thing', name: 'Bebe Conforto' },
      { '@type': 'Thing', name: 'Fraldas para Recem-Nascido' },
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.tip-box'],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* === HERO === */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-500 rounded-full blur-[150px]" />
          <div className="absolute top-40 right-40 w-64 h-64 bg-fuchsia-400 rounded-full blur-[100px]" />
        </div>
        <div className="container-main section-padding relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-400/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                <span className="text-pink-300 text-sm font-medium">Guia Completo Enxoval 2026 — Produtos com 4.7+ estrelas</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Checklist Completo<br />
                <span className="text-pink-400">Enxoval de Bebe.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
                O guia definitivo para mamaes de primeira viagem. Tudo que voce precisa para
                montar o enxoval do seu bebe com seguranca, qualidade e economia.
                Roupinhas 100% algodao, berco, higiene, alimentacao e passeio
                — com dicas de especialistas e os melhores precos da Shopee.
              </p>

              {/* PDF Download CTA */}
              <div className="flex flex-wrap gap-4 mb-6">
                <a
                  href="/checklist-enxoval-bebe-2026.pdf"
                  download
                  className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-200 shadow-lg shadow-pink-500/25"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Baixar Checklist PDF Gratis
                </a>
              </div>

              <p className="text-white/40 text-sm">
                * Links de afiliado Shopee. Voce nao paga nada a mais e nos ajuda a manter o conteudo gratuito.
              </p>
            </ScrollReveal>
          </div>

          {/* Category Quick Nav */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-3 mt-12">
              {categorias.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={cat.icone} />
                  </svg>
                  {cat.titulo}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === TRUST BAR === */}
      <section className="bg-pink-500 py-5">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: `${totalProdutos}`, label: 'Produtos selecionados' },
              { num: `${categorias.length}`, label: 'Categorias' },
              { num: '4.7+', label: 'Avaliacao minima' },
              { num: `${totalAlgodao}+`, label: 'Itens 100% algodao' },
            ].map((d, i) => (
              <div key={i}>
                <p className="font-serif text-2xl md:text-3xl font-bold text-white">{d.num}</p>
                <p className="text-white/80 text-xs mt-1">{d.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === EXPERT INTRO === */}
      <section className="section-padding bg-gradient-to-b from-pink-50 to-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Por que este guia e diferente?</h2>
            <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
              Nao e apenas uma lista de produtos. E um guia pensado por quem entende de maternidade,
              com dicas praticas baseadas em pediatras e experiencias reais de maes.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icone: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                titulo: '100% Algodao',
                desc: 'A pele do bebe e 5x mais fina que a do adulto. Priorizamos itens de algodao puro, que sao hipoalergenicos e permitem a pele respirar.',
              },
              {
                icone: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
                titulo: 'Checklist com Quantidades',
                desc: 'Sabemos exatamente quantos bodies, fraldas e mamadeiras voce precisa. Sem desperdicio, sem faltar nada na hora H.',
              },
              {
                icone: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                titulo: 'Dicas de Especialistas',
                desc: 'Cada categoria vem com orientacoes de seguranca e cuidados baseadas em recomendacoes pediatricas e da SBP.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100 text-center">
                  <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icone} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-brand-dark mb-2">{item.titulo}</h3>
                  <p className="text-brand-dark/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === CATEGORY SECTIONS === */}
      {categorias.map((cat, catIndex) => (
        <section
          key={cat.id}
          id={cat.id}
          className={`section-padding ${catIndex % 2 === 0 ? 'bg-white' : 'bg-brand-bg'}`}
        >
          <div className="container-main">
            <ScrollReveal className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${cat.gradient} rounded-2xl mb-6`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={cat.icone} />
                </svg>
              </div>
              <h2 className="heading-2 text-brand-dark mb-3">{cat.titulo}</h2>
              <p className="text-brand-dark/50 max-w-xl mx-auto">{cat.subtitulo}</p>
            </ScrollReveal>

            {/* Expert Tip Box */}
            <ScrollReveal>
              <div className="max-w-3xl mx-auto mb-12 bg-pink-50 border border-pink-200 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-pink-700 text-sm mb-1">Dica da Especialista</p>
                  <p className="text-pink-600/80 text-sm leading-relaxed">{cat.dica}</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {cat.produtos.map((produto, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <a
                    href={produto.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col ${produto.destaque ? 'ring-2 ring-pink-300/50' : ''}`}
                  >
                    {/* Product Image */}
                    <div className={`relative h-56 bg-gradient-to-br ${cat.gradient} overflow-hidden`}>
                      <Image
                        src={produto.imagem}
                        alt={`${produto.nome} — Enxoval de Bebe 2026 | Comprar na Shopee com desconto`}
                        fill
                        className="object-contain p-4 drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Store Badge */}
                      <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                        Shopee
                      </div>

                      {/* Cotton Badge */}
                      {produto.algodao && (
                        <div className="absolute bottom-4 right-4 bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg z-10">
                          100% Algodao
                        </div>
                      )}

                      {/* Tag Badge */}
                      {produto.tag && (
                        <div className={`absolute top-4 right-4 ${getTagColor(produto.tag)} text-xs font-bold px-3 py-1 rounded-full z-10`}>
                          {produto.tag}
                        </div>
                      )}

                      {/* Discount Badge */}
                      {produto.desconto > 0 && !produto.tag?.includes('OFF') && (
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs font-bold px-2.5 py-1 rounded-lg z-10">
                          -{produto.desconto}%
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-serif text-lg font-bold text-brand-dark mb-2 group-hover:text-pink-500 transition-colors">
                        {produto.nome}
                      </h3>
                      <p className="text-brand-dark/50 text-sm leading-relaxed mb-4 flex-1">
                        {produto.desc}
                      </p>

                      {/* Rating & Likes */}
                      <div className="flex items-center gap-3 mb-3 text-sm">
                        <span className="flex items-center gap-1 text-amber-500 font-semibold">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          {produto.rating.toFixed(1)}
                        </span>
                        <span className="text-brand-dark/30">|</span>
                        <span className="text-brand-dark/40 flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                          {formatLikes(produto.likes)}
                        </span>
                      </div>

                      <div className="mt-auto">
                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-4">
                          <p className="font-serif text-2xl font-bold text-brand-dark">
                            {formatPrice(produto.preco)}
                          </p>
                          {produto.desconto > 0 && (
                            <p className="text-sm text-brand-dark/30 line-through">
                              {formatPrice(produto.precoOriginal)}
                            </p>
                          )}
                        </div>

                        {/* CTA Button */}
                        <span className="block w-full text-center bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm">
                          Ver na Shopee
                          <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* === REGRAS DE OURO === */}
      <section className="section-padding bg-gradient-to-b from-pink-50 to-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">8 Regras de Ouro do Enxoval</h2>
            <p className="text-brand-dark/50 max-w-xl mx-auto">
              Dicas essenciais que toda mamae precisa saber antes de montar o enxoval
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titulo: 'Tecido 100% Algodao', desc: 'A pele do bebe e 5x mais fina. Tecidos sinteticos podem causar alergias e dermatite. Sempre verifique a etiqueta.' },
              { titulo: 'Lave Antes de Usar', desc: 'Toda roupa nova deve ser lavada com sabao neutro antes do primeiro uso. Nunca use amaciante convencional.' },
              { titulo: 'Menos e Mais no RN', desc: 'Compre poucas pecas tamanho RN. O bebe cresce rapido e pode nascer grande demais para RN. Invista em P e M.' },
              { titulo: 'Estacao do Nascimento', desc: 'Verao? Roupas leves. Inverno? Macacoes e mantas. Planeje as roupas considerando 3 meses a frente.' },
              { titulo: 'Seguranca no Berco', desc: 'Nada dentro do berco alem do lencol. Sem travesseiro ate 1 ano. Sem cobertor solto. Use saco de dormir.' },
              { titulo: 'Monte Gradualmente', desc: 'Nao compre tudo de uma vez. Muitas coisas voce so descobre que precisa apos o bebe nascer.' },
              { titulo: 'Bebe Conforto e Lei', desc: 'OBRIGATORIO no carro. Instale de costas ate 2 anos. Sempre com selo INMETRO.' },
              { titulo: 'Comece na 20a Semana', desc: 'Ideal comecar a montar o enxoval a partir da 20a semana de gestacao. Bolsa maternidade pronta na 36a.' },
            ].map((regra, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-pink-100">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-500 font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">{regra.titulo}</h3>
                    <p className="text-brand-dark/50 text-sm leading-relaxed">{regra.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === PDF DOWNLOAD CTA === */}
      <section className="section-padding bg-brand-dark text-white text-center">
        <div className="container-main max-w-3xl">
          <ScrollReveal>
            <div className="w-20 h-20 bg-pink-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="heading-2 mb-4">Baixe o Checklist Completo em PDF</h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              9 paginas com checklist completo, quantidades exatas, dicas de especialistas
              e tudo que voce precisa para montar o enxoval perfeito. Gratuito!
            </p>
            <a
              href="/checklist-enxoval-bebe-2026.pdf"
              download
              className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-200 shadow-lg shadow-pink-500/25"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Baixar Checklist PDF Gratis
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* === BLOG MATERNIDADE === */}
      <section className="section-padding bg-white">
        <div className="container-main max-w-5xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Blog de Maternidade</h2>
            <p className="text-brand-dark/50 text-lg">
              Guias completos sobre gestacao, recem-nascido, sono, colica e amamentacao — escritos com honestidade e baseados em evidencias
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { slug: 'gestacao-mes-a-mes-o-que-esperar-em-cada-fase-da-gravidez', titulo: 'Gestacao Mes a Mes', desc: 'O que esperar do 1o ao 9o mes — sintomas, exames e marcos do bebe', icon: '🤰' },
              { slug: 'recem-nascido-primeiros-30-dias-guia-completo-para-maes-de-primeira-viagem', titulo: 'Primeiros 30 Dias', desc: 'Guia completo para maes de primeira viagem — banho, fralda, umbigo e mais', icon: '👶' },
              { slug: 'rotina-de-sono-do-bebe-do-recem-nascido-aos-12-meses', titulo: 'Rotina de Sono', desc: 'Janelas de sono, tabela por idade e como criar rotina saudavel', icon: '🌙' },
              { slug: 'colica-do-bebe-o-que-e-como-aliviar-e-manobras-que-funcionam', titulo: 'Colica do Bebe', desc: '5 manobras que funcionam — bicicleta, aviaozinho, massagem ILU e mais', icon: '💆' },
              { slug: 'amamentacao-guia-completo-pega-correta-posicoes-e-problemas-comuns', titulo: 'Amamentacao Completa', desc: 'Pega correta, posicoes, fissuras, mastite e armazenamento de leite', icon: '🤱' },
              { slug: 'pos-parto-recuperacao-corpo-emocoes-e-o-que-esperar-nos-primeiros-meses', titulo: 'Pos-Parto e Recuperacao', desc: 'Corpo, emocoes, baby blues vs depressao e quando voltar a se exercitar', icon: '💪' },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 hover:border-pink-300 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-3xl mb-3 block">{post.icon}</span>
                <h3 className="font-bold text-brand-dark group-hover:text-pink-600 transition-colors mb-2">{post.titulo}</h3>
                <p className="text-brand-dark/50 text-sm leading-relaxed">{post.desc}</p>
                <span className="inline-flex items-center gap-1 text-pink-500 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                  Ler artigo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === DISCLAIMER === */}
      <section className="py-8 bg-brand-bg border-y border-gray-100">
        <div className="container-main max-w-3xl">
          <div className="flex items-start gap-4 text-sm text-brand-dark/50">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-dark/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-medium text-brand-dark/70 mb-1">Transparencia</p>
              <p className="leading-relaxed">
                Esta pagina contem links de afiliado da Shopee. Quando voce compra atraves desses links,
                recebo uma pequena comissao — sem nenhum custo adicional para voce. Isso me ajuda a manter o site
                e continuar criando conteudo gratuito. Precos e disponibilidade podem variar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="section-padding bg-white text-center">
        <div className="container-main max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-2 text-brand-dark mb-4">Quer mais dicas e conteudo?</h2>
            <p className="text-brand-dark/50 mb-8 text-lg">
              Veja tambem nossas ferramentas recomendadas para empreendedores digitais
              e nossos cursos gratuitos de marketing e IA.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/ferramentas"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-colors"
              >
                Ver Ferramentas Digitais
              </Link>
              <Link
                href="/cursos"
                className="border border-brand-dark/20 text-brand-dark hover:bg-brand-bg px-6 py-4 rounded-full text-base font-medium transition-colors"
              >
                Ver Cursos Gratuitos
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === FAQ VISUAL (SEO + AI) === */}
      <section className="section-padding bg-brand-bg">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 text-brand-dark mb-4">Perguntas Frequentes sobre Enxoval de Bebe</h2>
            <p className="text-brand-dark/50">Tudo que as mamaes mais perguntam — respondido por especialistas</p>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              { q: 'O que nao pode faltar no enxoval do bebe?', a: 'O enxoval essencial inclui: 6-8 bodies (manga curta e longa) 100% algodao, 6-8 calcas com pe, 4-6 macacoes, meias, toucas, luvas antiarranhao, fraldas (RN, P e M), lencos umedecidos, pomada contra assaduras, sabonete liquido neutro, berco com certificacao INMETRO, colchao firme, lencois com elastico, mamadeiras anti-colica, bebe conforto para carro e bolsa maternidade.' },
              { q: 'Quantas roupas comprar para o enxoval do bebe?', a: 'Para recem-nascido: 6-8 bodies manga curta, 6-8 bodies manga longa, 6-8 calcas com pe, 4-6 macacoes, 4-6 conjuntos, 6-8 pares de meias, 3-4 pares de luvas, 2-3 toucas, 2-3 casaquinhos e 3-4 pijamas. Compre poucas pecas no tamanho RN (o bebe cresce rapido) e invista mais nos tamanhos P e M.' },
              { q: 'Por que escolher roupas 100% algodao para bebe?', a: 'A pele do bebe e 5 vezes mais fina que a do adulto. Tecidos sinteticos podem causar alergias, irritacao e dermatite de contato. O algodao puro e hipoalergenico, macio, permite a pele respirar e regula melhor a temperatura corporal do bebe.' },
              { q: 'Quando comecar a montar o enxoval do bebe?', a: 'O ideal e comecar a partir da 20a semana de gestacao (5o mes). Isso da tempo para pesquisar precos, aproveitar promocoes e organizar tudo com calma. A bolsa maternidade deve estar pronta na 36a semana.' },
              { q: 'Quantas fraldas o recem-nascido usa por dia?', a: 'O recem-nascido usa em media 8 a 10 fraldas por dia. Estoque inicial: 2-4 pacotes RN (2-3 semanas de uso), 10-15 pacotes P (2 meses) e 10-15 pacotes M (compre gradualmente).' },
              { q: 'O que levar na bolsa maternidade para o hospital?', a: 'Para o bebe: 3 bodies manga curta e 3 longa, 3 macacoes, 3 pares de meias, 2 luvas, 2 toucas, 2 mantas, fraldas RN e lencos. Para a mamae: camisolas com abertura frontal, sutia de amamentacao, calcinhas confortaveis, absorvente pos-parto e chinelo.' },
              { q: 'Qual o berco mais seguro para recem-nascido?', a: 'Deve ter certificacao INMETRO, grades com espacamento maximo de 6,5cm, colchao firme (D18 a D23) e justo. NUNCA coloque travesseiros, almofadas ou bichos de pelucia dentro do berco.' },
              { q: 'Bebe conforto e obrigatorio?', a: 'Sim! E obrigatorio por lei no Brasil para transportar criancas em veiculos. Deve ser instalado de costas para o movimento ate pelo menos 2 anos e ter selo INMETRO.' },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <details className="group bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-bold text-brand-dark text-left pr-4">{faq.q}</h3>
                    <svg className="w-5 h-5 text-pink-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-brand-dark/60 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTAForm />
    </>
  )
}
