import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'

export const metadata: Metadata = {
  title: 'Melhores Itens para Casa 2026 — Ofertas Shopee com Avaliação 4.7+ | Calazans Lumina',
  description: 'Seleção curada dos melhores produtos para casa com avaliação acima de 4.7 estrelas na Shopee. Cozinha, decoração, organização, eletrodomésticos e muito mais com desconto.',
  alternates: { canonical: 'https://calazanslumina.com.br/itens-para-casa' },
  openGraph: {
    title: 'Melhores Itens para Casa 2026 — Ofertas com Avaliação 4.7+',
    description: 'Curadoria de produtos para casa mais bem avaliados da Shopee. Panelas, air fryer, aspirador, decoração, organização e mais.',
    url: 'https://calazanslumina.com.br/itens-para-casa',
    type: 'website',
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
  loja: string
  destaque?: boolean
  tag?: string
}

type Categoria = {
  id: string
  titulo: string
  subtitulo: string
  icone: string
  gradient: string
  produtos: Produto[]
}

const categorias: Categoria[] = [
  {
    id: 'cozinha',
    titulo: 'Cozinha & Utilidades',
    subtitulo: 'Panelas, utensílios e eletrodomésticos que transformam sua cozinha',
    icone: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
    gradient: 'from-rose-500 to-orange-500',
    produtos: [
      {
        nome: 'Jogo de Frigideiras Francesas 3 Peças',
        desc: 'Kit com 3 frigideiras (14, 18 e 24cm) de alumínio nacional. Antiaderente, leve e resistente. Essencial para qualquer cozinha.',
        preco: 46.55,
        precoOriginal: 69.90,
        desconto: 33,
        rating: 4.82,
        likes: 185441,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81ztc-mjy9mdfrflz7cf',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F359066629%2F10747178878',
        loja: 'shopee',
        destaque: true,
        tag: 'Mais Vendido',
      },
      {
        nome: 'Jogo de Panelas Antiaderente 10 Peças',
        desc: 'Kit completo com panelas, frigideiras e utensílios. Antiaderente de qualidade para sua cozinha. Tudo que você precisa em um só kit.',
        preco: 239.90,
        precoOriginal: 329.90,
        desconto: 27,
        rating: 4.76,
        likes: 132862,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mer6mltt1y4ga1',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F637480448%2F23197773766',
        loja: 'shopee',
      },
      {
        nome: 'Kit 11 Potes de Vidro com Tampa de Bambu',
        desc: 'Potes herméticos redondos com tampa de bambu. Perfeitos para organizar mantimentos, temperos e grãos. Design elegante.',
        preco: 229.99,
        precoOriginal: 299.90,
        desconto: 23,
        rating: 4.93,
        likes: 113930,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-8261r-mlg5xx4bedqg53',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F752849300%2F22292953138',
        loja: 'shopee',
        tag: 'Premium',
      },
      {
        nome: 'Conjunto de 24 Potes Herméticos com Tampa e Trava',
        desc: '24 potes herméticos Croix para organizar toda a cozinha. Empilháveis, fáceis de limpar e super práticos.',
        preco: 137.99,
        precoOriginal: 177.99,
        desconto: 22,
        rating: 4.85,
        likes: 99020,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-mci5ecdv44s2e5',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F359168917%2F23697136539',
        loja: 'shopee',
      },
      {
        nome: 'Pano de Prato Kit com 10 Peças',
        desc: 'Kit atacado com 10 panos de prato barrados. Absorventes, bonitos e duráveis. Ótimo custo-benefício.',
        preco: 47.97,
        precoOriginal: 79.99,
        desconto: 40,
        rating: 4.76,
        likes: 86932,
        imagem: 'https://cf.shopee.com.br/file/28383dbfb048b52ed6a933bd2f528704',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F388739239%2F7979470120',
        loja: 'shopee',
        tag: 'Custo-Beneficio',
      },
    ],
  },
  {
    id: 'eletrodomesticos',
    titulo: 'Eletrodomésticos',
    subtitulo: 'Air fryer, processadores e aparelhos que facilitam o dia a dia',
    icone: 'M13 10V3L4 14h7v7l9-11h-7z',
    gradient: 'from-blue-600 to-indigo-600',
    produtos: [
      {
        nome: 'Air Fryer Britânia 4,2L 1500W',
        desc: 'Air Fryer Dura Mais com 4,2 litros, 1500W de potência. Fritadeira elétrica da marca Britânia com timer e controle de temperatura.',
        preco: 219.90,
        precoOriginal: 249.90,
        desconto: 12,
        rating: 4.95,
        likes: 136235,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-825zs-mligmy6niebk10',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F811879342%2F20199206047',
        loja: 'shopee',
        destaque: true,
        tag: 'Top Avaliacao',
      },
      {
        nome: 'Forno Elétrico Suggar 42L',
        desc: 'Forno elétrico de 42 litros, ideal para assar, grelhar e aquecer. Prático e espaçoso para famílias.',
        preco: 314.74,
        precoOriginal: 379.00,
        desconto: 17,
        rating: 4.84,
        likes: 105288,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7qvde-libr7qjmlyay25',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1009975506%2F22796086777',
        loja: 'shopee',
      },
      {
        nome: 'Processador Britânia 300W 5 em 1',
        desc: 'Processador compacto Turbo 5 em 1 com 300W. Pica, rala, fatia, tritura e mistura. Prático para o dia a dia.',
        preco: 119.90,
        precoOriginal: 129.90,
        desconto: 8,
        rating: 4.88,
        likes: 100604,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-825zy-mlgm70efgn43cc',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F811879342%2F21997092513',
        loja: 'shopee',
        tag: 'Custo-Beneficio',
      },
      {
        nome: 'Multiprocessador Philco 1700W 9 em 1',
        desc: 'Potência de 1700W com 9 funções. Liquidifica, mói, processa, espreme e muito mais. Para quem quer o melhor.',
        preco: 329.90,
        precoOriginal: 349.90,
        desconto: 6,
        rating: 4.91,
        likes: 80854,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-82616-mlijd073znd451',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F811034337%2F23130472127',
        loja: 'shopee',
        tag: 'Premium',
      },
      {
        nome: 'Aspirador de Pó Vertical 2 em 1 Gaabor',
        desc: 'Aspirador vertical e portátil com sucção de 16.000Pa. Leve, potente e prático para limpeza diária.',
        preco: 159.00,
        precoOriginal: 239.00,
        desconto: 33,
        rating: 4.91,
        likes: 64638,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-81zwh-mieot42jvbpi51',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F853344905%2F20541183898',
        loja: 'shopee',
        destaque: true,
        tag: 'Mais Vendido',
      },
      {
        nome: 'Aspirador Kärcher VCL 2 Filtro HEPA',
        desc: 'Aspirador vertical 2 em 1 da Kärcher com filtro HEPA. Marca premium, qualidade garantida e ótima sucção.',
        preco: 309.00,
        precoOriginal: 399.00,
        desconto: 23,
        rating: 4.91,
        likes: 47066,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7ra2c-mbgtt077xkik64',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F848951954%2F16784477949',
        loja: 'shopee',
      },
    ],
  },
  {
    id: 'decoracao',
    titulo: 'Decoração & Acabamento',
    subtitulo: 'Espelhos, painéis ripados e itens que transformam qualquer ambiente',
    icone: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    gradient: 'from-amber-500 to-yellow-500',
    produtos: [
      {
        nome: 'Espelho Redondo Adnet 30cm com Alça',
        desc: 'Espelho redondo estilo Adnet com alça de couro + suporte. Ideal para sala, banheiro ou quarto. Design atemporal.',
        preco: 33.99,
        precoOriginal: 39.97,
        desconto: 15,
        rating: 4.78,
        likes: 269917,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-mbcay7k7rwy785',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F408999524%2F23897550674',
        loja: 'shopee',
        destaque: true,
        tag: 'Mais Vendido',
      },
      {
        nome: 'Espelho Orgânico Corpo Inteiro 110x50cm',
        desc: 'Espelho orgânico com moldura de couro sintético. Disponível em vários tamanhos. Elegância para qualquer cômodo.',
        preco: 199.00,
        precoOriginal: 299.00,
        desconto: 33,
        rating: 4.84,
        likes: 150997,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m1ogo9cc8qtt2f',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1146529360%2F23693483686',
        loja: 'shopee',
        tag: 'Premium',
      },
      {
        nome: 'Kit Painel Ripado MDF 45x11cm',
        desc: 'Placas de revestimento ripado decorativo em MDF. Transforme paredes com visual moderno e sofisticado.',
        preco: 175.00,
        precoOriginal: 175.00,
        desconto: 0,
        rating: 4.83,
        likes: 140271,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-mbf79xrbssjcd9',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F303439692%2F20697612430',
        loja: 'shopee',
      },
      {
        nome: 'Painel Ripado Laminado Autocolante',
        desc: 'Painel ripado autocolante cor Cinamomo. Instalação fácil sem obra. Acabamento profissional para sua casa.',
        preco: 172.64,
        precoOriginal: 208.00,
        desconto: 17,
        rating: 4.82,
        likes: 101120,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mgfko47a2sqv91',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F401374403%2F20497653715',
        loja: 'shopee',
      },
    ],
  },
  {
    id: 'organizacao',
    titulo: 'Organização & Limpeza',
    subtitulo: 'Cestos, cabides e itens para manter tudo no lugar',
    icone: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    gradient: 'from-emerald-500 to-teal-500',
    produtos: [
      {
        nome: 'Cesto de Roupa Suja Bambu com Tampa 50L',
        desc: 'Cesto organizador de bambu com tampa e alças. 50 litros de capacidade. Bonito, prático e resistente.',
        preco: 64.90,
        precoOriginal: 189.90,
        desconto: 66,
        rating: 4.90,
        likes: 108331,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m76wmmm35ufg19',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F325008325%2F20097082290',
        loja: 'shopee',
        destaque: true,
        tag: '-66% OFF',
      },
      {
        nome: 'Kit 30 Cabides de Veludo para Roupas',
        desc: '30 cabides de veludo fino e resistente. Antideslizante, economiza espaço no guarda-roupa. Acabamento premium.',
        preco: 54.90,
        precoOriginal: 87.90,
        desconto: 38,
        rating: 4.94,
        likes: 87364,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m6qu5cyullio31',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F325008325%2F18071105004',
        loja: 'shopee',
        tag: 'Custo-Beneficio',
      },
      {
        nome: 'Mancebo Cabideiro de Chão 12 Ganchos',
        desc: 'Cabideiro organizador de chão com 12 ganchos. Ideal para casacos, bolsas e chapéus. Montagem fácil.',
        preco: 37.97,
        precoOriginal: 49.90,
        desconto: 20,
        rating: 4.80,
        likes: 66458,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m728cmxjrhbbc0',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F325008325%2F19771589018',
        loja: 'shopee',
      },
      {
        nome: 'Rodo de Pia Dobrável com Cabo de Bambu',
        desc: 'Rodinho elegante com cabo de bambu. Dobrável para guardar fácil. Deixa sua pia sempre seca e organizada.',
        preco: 23.80,
        precoOriginal: 29.99,
        desconto: 21,
        rating: 4.95,
        likes: 77787,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-lwzuxsm3qquu63',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F775496126%2F23293105900',
        loja: 'shopee',
        tag: 'Top Avaliacao',
      },
      {
        nome: 'Cesto de Roupa Bambu Grid 49L',
        desc: 'Cesto premium de bambu com tampa grid. 49 litros, design moderno. Da marca Ou, referência em organização.',
        preco: 123.90,
        precoOriginal: 198.90,
        desconto: 38,
        rating: 4.88,
        likes: 52876,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-ma8nhsrjxe9lf6',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1314243679%2F22198239751',
        loja: 'shopee',
      },
      {
        nome: 'Lava Roupas Omo Lavanderia Pro 7L',
        desc: 'Sabão líquido Omo Lavanderia Pro 7 litros. Rende muito, limpa profundamente e deixa as roupas com cheiro incrível.',
        preco: 83.90,
        precoOriginal: 99.00,
        desconto: 15,
        rating: 4.97,
        likes: 140749,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rau5-mau62igmy63506',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F946161700%2F22736011414',
        loja: 'shopee',
        destaque: true,
        tag: 'Mais Vendido',
      },
    ],
  },
  {
    id: 'quarto-cama',
    titulo: 'Quarto & Cama',
    subtitulo: 'Lençóis, colchas e itens para um quarto aconchegante',
    icone: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    gradient: 'from-violet-500 to-purple-600',
    produtos: [
      {
        nome: 'Jogo de Lençol Plush com Elástico',
        desc: 'Lençol de pelúcia para inverno. Super macio e quentinho. Disponível para solteiro, casal, queen e king.',
        preco: 59.99,
        precoOriginal: 100.00,
        desconto: 40,
        rating: 4.89,
        likes: 75790,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81z1k-me021w43a9z49d',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F443294432%2F21272058780',
        loja: 'shopee',
        destaque: true,
        tag: '-40% OFF',
      },
      {
        nome: 'Kit Colcha Cobre Leito Queen 400 Fios',
        desc: 'Colcha queen de 400 fios com toque macio. Kit com 3 peças incluindo porta travesseiros. Elegância para seu quarto.',
        preco: 76.90,
        precoOriginal: 96.90,
        desconto: 21,
        rating: 4.86,
        likes: 61082,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mgnktq2g3xfpa9',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F740101023%2F23792886693',
        loja: 'shopee',
        tag: 'Custo-Beneficio',
      },
    ],
  },
  {
    id: 'moveis',
    titulo: 'Móveis & Escritório',
    subtitulo: 'Mesas, armários e penteadeiras para montar seu espaço ideal',
    icone: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    gradient: 'from-slate-600 to-gray-700',
    produtos: [
      {
        nome: 'Armário de Cozinha com Mesa/Bancada',
        desc: 'Armário compacto com porta e mesa retrátil. Perfeito para cozinhas pequenas. Da marca Multimóveis.',
        preco: 349.99,
        precoOriginal: 419.99,
        desconto: 17,
        rating: 4.88,
        likes: 111093,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-22100-depsffb5t4iv83',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F308628919%2F18657590225',
        loja: 'shopee',
        tag: 'Premium',
      },
      {
        nome: 'Penteadeira Magnifique com Espelho',
        desc: 'Penteadeira com gaveta, divisória e espelho. Design moderno em branco. Da Panorama Móveis.',
        preco: 347.90,
        precoOriginal: 395.90,
        desconto: 12,
        rating: 4.86,
        likes: 89677,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7reo6-m211s5hgt57k0f',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F580791382%2F19097978459',
        loja: 'shopee',
      },
      {
        nome: 'Mesa para Computador com Prateleira',
        desc: 'Mesa multiuso com gaveta e prateleira. Ideal para home office e estudos. Compacta e funcional.',
        preco: 88.99,
        precoOriginal: 119.99,
        desconto: 26,
        rating: 4.78,
        likes: 86831,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-lx2tqvz219z3b2',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1242718651%2F20297675692',
        loja: 'shopee',
        tag: 'Custo-Beneficio',
      },
      {
        nome: 'Escrivaninha de Canto com Espelho',
        desc: 'Escrivaninha de canto multifuncional com espelho. Serve como penteadeira e mesa de trabalho. Otimiza espaço.',
        preco: 381.97,
        precoOriginal: 469.90,
        desconto: 19,
        rating: 4.82,
        likes: 78602,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m8m06gcf1z81d4',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1243712796%2F20199322690',
        loja: 'shopee',
      },
    ],
  },
]

const totalProdutos = categorias.reduce((acc, cat) => acc + cat.produtos.length, 0)

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

export default function ItensParaCasaPage() {
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Melhores Itens para Casa 2026 — Ofertas Shopee',
    description: 'Curadoria dos melhores produtos para casa com avaliação acima de 4.7 estrelas na Shopee.',
    numberOfItems: totalProdutos,
    itemListElement: categorias.flatMap((cat, ci) =>
      cat.produtos.map((prod, pi) => ({
        '@type': 'ListItem',
        position: ci * 10 + pi + 1,
        name: prod.nome,
        url: prod.link,
      }))
    ),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* === HERO === */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-[150px]" />
        </div>
        <div className="container-main section-padding relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                <span className="text-orange-300 text-sm font-medium">Curadoria Shopee — Produtos com 4.7+ estrelas</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Melhores Itens<br />
                <span className="text-orange-400">para sua Casa.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Seleção curada dos produtos mais bem avaliados da Shopee para transformar sua casa.
                Cozinha, decoração, organização, eletrodomésticos e móveis — tudo com avaliação
                acima de 4.7 estrelas e milhares de vendas comprovadas.
              </p>
              <p className="text-white/40 text-sm">
                * Links de afiliado Shopee. Você não paga nada a mais e me ajuda a manter o conteúdo gratuito.
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
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
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
      <section className="bg-orange-500 py-5">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: `${totalProdutos}`, label: 'Produtos selecionados' },
              { num: `${categorias.length}`, label: 'Categorias' },
              { num: '4.7+', label: 'Avaliação mínima' },
              { num: '50k+', label: 'Curtidas mínimas' },
            ].map((d, i) => (
              <div key={i}>
                <p className="font-serif text-2xl md:text-3xl font-bold text-white">{d.num}</p>
                <p className="text-white/80 text-xs mt-1">{d.label}</p>
              </div>
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
            <ScrollReveal className="text-center mb-16">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${cat.gradient} rounded-2xl mb-6`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={cat.icone} />
                </svg>
              </div>
              <h2 className="heading-2 text-brand-dark mb-3">{cat.titulo}</h2>
              <p className="text-brand-dark/50 max-w-xl mx-auto">{cat.subtitulo}</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {cat.produtos.map((produto, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <a
                    href={produto.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col ${produto.destaque ? 'ring-2 ring-orange-300/50' : ''}`}
                  >
                    {/* Product Image */}
                    <div className={`relative h-56 bg-gradient-to-br ${cat.gradient} overflow-hidden`}>
                      <Image
                        src={produto.imagem}
                        alt={produto.nome}
                        fill
                        className="object-contain p-4 drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Store Badge */}
                      <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                        Shopee
                      </div>

                      {/* Tag Badge */}
                      {produto.tag && (
                        <div className={`absolute top-4 right-4 ${getTagColor(produto.tag)} text-xs font-bold px-3 py-1 rounded-full z-10`}>
                          {produto.tag}
                        </div>
                      )}

                      {/* Discount Badge */}
                      {produto.desconto > 0 && (
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs font-bold px-2.5 py-1 rounded-lg z-10">
                          -{produto.desconto}%
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-serif text-lg font-bold text-brand-dark mb-2 group-hover:text-orange-500 transition-colors">
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
                        <span className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm">
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

      {/* === POR QUE CONFIAR === */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 mb-4">Como selecionamos esses produtos?</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icone: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
                titulo: 'Avaliacao 4.7+ estrelas',
                desc: 'Todos os produtos tem nota acima de 4.7 na Shopee. So entram os melhores avaliados pelos compradores reais.',
              },
              {
                icone: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                titulo: '50.000+ curtidas',
                desc: 'Filtramos apenas produtos com mais de 50 mil curtidas. Popularidade e vendas comprovadas.',
              },
              {
                icone: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                titulo: 'Lojas verificadas',
                desc: 'Produtos de lojas oficiais e com alta reputacao na Shopee. Compra segura e entrega garantida.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icone} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.titulo}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
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
            <h2 className="heading-2 text-brand-dark mb-4">Quer mais dicas para seu negocio digital?</h2>
            <p className="text-brand-dark/50 mb-8 text-lg">
              Veja tambem nossas ferramentas recomendadas para empreendedores digitais
              e nossos cursos gratuitos de marketing e IA.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/ferramentas"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-colors"
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

      <CTAForm />
    </>
  )
}
