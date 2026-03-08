import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import CTAForm from '@/components/CTAForm'

export const metadata: Metadata = {
  title: 'Melhores Itens para Casa e Enxoval de Bebê 2026 — Ofertas Shopee 4.7+ | Calazans Lumina',
  description: 'Curadoria dos melhores produtos para casa e enxoval de bebê na Shopee. Cozinha, decoração, eletrodomésticos, berços, carrinhos, roupas de bebê e muito mais com avaliação 4.7+ estrelas.',
  alternates: { canonical: 'https://calazanslumina.com.br/itens-para-casa' },
  openGraph: {
    title: 'Melhores Itens para Casa e Enxoval de Bebê 2026 — Ofertas 4.7+',
    description: 'Curadoria de produtos para casa e bebê mais bem avaliados da Shopee. Panelas, air fryer, berços, carrinhos, roupinhas e mais.',
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
  // ═══════════════════════════════════════
  // CASA
  // ═══════════════════════════════════════
  {
    id: 'cozinha',
    titulo: 'Cozinha & Utilidades',
    subtitulo: 'Panelas, utensílios e organizadores que transformam sua cozinha',
    icone: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
    gradient: 'from-rose-500 to-orange-500',
    produtos: [
      {
        nome: 'Jogo de Frigideiras Francesas 3 Peças',
        desc: 'Kit com 3 frigideiras (14, 18 e 24cm) de alumínio nacional. Antiaderente, leve e resistente.',
        preco: 46.55, precoOriginal: 69.90, desconto: 33, rating: 4.82, likes: 185441,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81ztc-mjy9mdfrflz7cf',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F359066629%2F10747178878',
        destaque: true, tag: 'Mais Vendido',
      },
      {
        nome: 'Jogo de Panelas Antiaderente 10 Peças',
        desc: 'Kit completo com panelas, frigideiras e utensílios. Tudo que você precisa em um só kit.',
        preco: 239.90, precoOriginal: 329.90, desconto: 27, rating: 4.76, likes: 132862,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mer6mltt1y4ga1',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F637480448%2F23197773766',
      },
      {
        nome: 'Kit 11 Potes de Vidro com Tampa de Bambu',
        desc: 'Potes herméticos redondos com tampa de bambu. Perfeitos para organizar mantimentos e temperos.',
        preco: 229.99, precoOriginal: 299.90, desconto: 23, rating: 4.93, likes: 113930,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-8261r-mlg5xx4bedqg53',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F752849300%2F22292953138',
        tag: 'Premium',
      },
      {
        nome: 'Conjunto de 24 Potes Herméticos com Tampa e Trava',
        desc: '24 potes herméticos Croix para organizar toda a cozinha. Empilháveis e fáceis de limpar.',
        preco: 137.99, precoOriginal: 177.99, desconto: 22, rating: 4.85, likes: 99020,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-mci5ecdv44s2e5',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F359168917%2F23697136539',
      },
      {
        nome: 'Pano de Prato Kit com 10 Peças',
        desc: 'Kit atacado com 10 panos de prato barrados. Absorventes, bonitos e duráveis.',
        preco: 47.97, precoOriginal: 79.99, desconto: 40, rating: 4.76, likes: 86932,
        imagem: 'https://cf.shopee.com.br/file/28383dbfb048b52ed6a933bd2f528704',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F388739239%2F7979470120',
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
        desc: 'Fritadeira elétrica Dura Mais com 4,2 litros e 1500W. Timer e controle de temperatura.',
        preco: 219.90, precoOriginal: 249.90, desconto: 12, rating: 4.95, likes: 136235,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-825zs-mligmy6niebk10',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F811879342%2F20199206047',
        destaque: true, tag: 'Top Avaliacao',
      },
      {
        nome: 'Forno Elétrico Suggar 42L',
        desc: 'Forno elétrico de 42 litros. Ideal para assar, grelhar e aquecer. Prático e espaçoso.',
        preco: 314.74, precoOriginal: 379.00, desconto: 17, rating: 4.84, likes: 105288,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7qvde-libr7qjmlyay25',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1009975506%2F22796086777',
      },
      {
        nome: 'Processador Britânia 300W 5 em 1',
        desc: 'Processador compacto Turbo 5 em 1. Pica, rala, fatia, tritura e mistura.',
        preco: 119.90, precoOriginal: 129.90, desconto: 8, rating: 4.88, likes: 100604,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-825zy-mlgm70efgn43cc',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F811879342%2F21997092513',
        tag: 'Custo-Beneficio',
      },
      {
        nome: 'Multiprocessador Philco 1700W 9 em 1',
        desc: 'Potência de 1700W com 9 funções. Liquidifica, mói, processa, espreme e muito mais.',
        preco: 329.90, precoOriginal: 349.90, desconto: 6, rating: 4.91, likes: 80854,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-82616-mlijd073znd451',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F811034337%2F23130472127',
        tag: 'Premium',
      },
      {
        nome: 'Aspirador Vertical 2 em 1 Gaabor 16.000Pa',
        desc: 'Aspirador vertical e portátil com sucção de 16.000Pa. Leve, potente e prático.',
        preco: 159.00, precoOriginal: 239.00, desconto: 33, rating: 4.91, likes: 64638,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-81zwh-mieot42jvbpi51',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F853344905%2F20541183898',
        destaque: true, tag: 'Mais Vendido',
      },
      {
        nome: 'Aspirador Kärcher VCL 2 Filtro HEPA',
        desc: 'Aspirador vertical 2 em 1 da Kärcher com filtro HEPA. Marca premium, qualidade garantida.',
        preco: 309.00, precoOriginal: 399.00, desconto: 23, rating: 4.91, likes: 47066,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7ra2c-mbgtt077xkik64',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F848951954%2F16784477949',
      },
      {
        nome: 'Aspirador Pó e Água 1400W Wap 5,5L',
        desc: 'Aspirador potente de pó e água com função soprador. 5,5 litros de capacidade.',
        preco: 279.90, precoOriginal: 299.98, desconto: 7, rating: 4.82, likes: 38664,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rbkh-lq9j44dr7nlmf8',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F334741920%2F23496981562',
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
        desc: 'Espelho estilo Adnet com alça de couro + suporte. Ideal para sala, banheiro ou quarto.',
        preco: 33.99, precoOriginal: 39.97, desconto: 15, rating: 4.78, likes: 269917,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-mbcay7k7rwy785',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F408999524%2F23897550674',
        destaque: true, tag: 'Mais Vendido',
      },
      {
        nome: 'Espelho Orgânico Corpo Inteiro 110x50cm',
        desc: 'Espelho orgânico com moldura de couro sintético. Elegância para qualquer cômodo.',
        preco: 199.00, precoOriginal: 299.00, desconto: 33, rating: 4.84, likes: 150997,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m1ogo9cc8qtt2f',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1146529360%2F23693483686',
        tag: 'Premium',
      },
      {
        nome: 'Kit Painel Ripado MDF 45x11cm',
        desc: 'Placas de revestimento ripado decorativo em MDF. Visual moderno e sofisticado.',
        preco: 175.00, precoOriginal: 175.00, desconto: 0, rating: 4.83, likes: 140271,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-mbf79xrbssjcd9',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F303439692%2F20697612430',
      },
      {
        nome: 'Painel Ripado Laminado Autocolante',
        desc: 'Painel ripado autocolante cor Cinamomo. Instalação fácil sem obra.',
        preco: 172.64, precoOriginal: 208.00, desconto: 17, rating: 4.82, likes: 101120,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mgfko47a2sqv91',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F401374403%2F20497653715',
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
        desc: 'Cesto organizador de bambu com tampa e alças. 50 litros. Bonito, prático e resistente.',
        preco: 64.90, precoOriginal: 189.90, desconto: 66, rating: 4.90, likes: 108331,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m76wmmm35ufg19',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F325008325%2F20097082290',
        destaque: true, tag: '-66% OFF',
      },
      {
        nome: 'Lava Roupas Omo Lavanderia Pro 7L',
        desc: 'Sabão líquido Omo 7 litros. Rende muito, limpa profundamente e cheiro incrível.',
        preco: 83.90, precoOriginal: 99.00, desconto: 15, rating: 4.97, likes: 140749,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rau5-mau62igmy63506',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F946161700%2F22736011414',
        destaque: true, tag: 'Top Avaliacao',
      },
      {
        nome: 'Kit 30 Cabides de Veludo para Roupas',
        desc: '30 cabides de veludo fino e resistente. Antideslizante, economiza espaço.',
        preco: 54.90, precoOriginal: 87.90, desconto: 38, rating: 4.94, likes: 87364,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m6qu5cyullio31',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F325008325%2F18071105004',
        tag: 'Custo-Beneficio',
      },
      {
        nome: 'Rodo de Pia Dobrável com Cabo de Bambu',
        desc: 'Rodinho elegante com cabo de bambu. Dobrável para guardar fácil.',
        preco: 23.80, precoOriginal: 29.99, desconto: 21, rating: 4.95, likes: 77787,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-lwzuxsm3qquu63',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F775496126%2F23293105900',
        tag: 'Top Avaliacao',
      },
      {
        nome: 'Mancebo Cabideiro de Chão 12 Ganchos',
        desc: 'Cabideiro organizador de chão com 12 ganchos. Ideal para casacos, bolsas e chapéus.',
        preco: 37.97, precoOriginal: 49.90, desconto: 20, rating: 4.80, likes: 66458,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m728cmxjrhbbc0',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F325008325%2F19771589018',
      },
      {
        nome: 'Cesto de Roupa Bambu Grid 49L',
        desc: 'Cesto premium de bambu com tampa grid. Design moderno. Da marca Ou.',
        preco: 123.90, precoOriginal: 198.90, desconto: 38, rating: 4.88, likes: 52876,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-ma8nhsrjxe9lf6',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1314243679%2F22198239751',
      },
    ],
  },
  {
    id: 'quarto-cama',
    titulo: 'Quarto & Cama',
    subtitulo: 'Lençóis, colchas e móveis para um quarto aconchegante',
    icone: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    gradient: 'from-violet-500 to-purple-600',
    produtos: [
      {
        nome: 'Jogo de Lençol Plush com Elástico',
        desc: 'Lençol de pelúcia para inverno. Super macio e quentinho. Solteiro, casal, queen e king.',
        preco: 59.99, precoOriginal: 100.00, desconto: 40, rating: 4.89, likes: 75790,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81z1k-me021w43a9z49d',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F443294432%2F21272058780',
        destaque: true, tag: '-40% OFF',
      },
      {
        nome: 'Kit Colcha Cobre Leito Queen 400 Fios',
        desc: 'Colcha queen com toque macio. Kit com 3 peças incluindo porta travesseiros.',
        preco: 76.90, precoOriginal: 96.90, desconto: 21, rating: 4.86, likes: 61082,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mgnktq2g3xfpa9',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F740101023%2F23792886693',
        tag: 'Custo-Beneficio',
      },
      {
        nome: 'Armário de Cozinha com Mesa/Bancada',
        desc: 'Armário compacto com porta e mesa retrátil. Perfeito para cozinhas pequenas. Multimóveis.',
        preco: 349.99, precoOriginal: 419.99, desconto: 17, rating: 4.88, likes: 111093,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-22100-depsffb5t4iv83',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F308628919%2F18657590225',
        tag: 'Premium',
      },
      {
        nome: 'Penteadeira Magnifique com Espelho',
        desc: 'Penteadeira com gaveta, divisória e espelho. Design moderno em branco.',
        preco: 347.90, precoOriginal: 395.90, desconto: 12, rating: 4.86, likes: 89677,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7reo6-m211s5hgt57k0f',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F580791382%2F19097978459',
      },
      {
        nome: 'Mesa para Computador com Prateleira',
        desc: 'Mesa multiuso com gaveta e prateleira. Ideal para home office e estudos.',
        preco: 88.99, precoOriginal: 119.99, desconto: 26, rating: 4.78, likes: 86831,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-lx2tqvz219z3b2',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1242718651%2F20297675692',
        tag: 'Custo-Beneficio',
      },
      {
        nome: 'Escrivaninha de Canto com Espelho',
        desc: 'Escrivaninha multifuncional com espelho. Serve como penteadeira e mesa de trabalho.',
        preco: 381.97, precoOriginal: 469.90, desconto: 19, rating: 4.82, likes: 78602,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m8m06gcf1z81d4',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1243712796%2F20199322690',
      },
      {
        nome: 'Chuveiro Lorenzetti Acqua Duo 7800W',
        desc: 'Chuveiro eletrônico com 2 temperaturas. Design moderno, jato potente. 220V.',
        preco: 482.73, precoOriginal: 641.90, desconto: 25, rating: 4.88, likes: 43639,
        imagem: 'https://cf.shopee.com.br/file/84cfdb932eba39239d1729bc73041466',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F805449066%2F20622366478',
      },
    ],
  },

  // ═══════════════════════════════════════
  // ENXOVAL DE BEBÊ
  // ═══════════════════════════════════════
  {
    id: 'berco-quarto-bebe',
    titulo: 'Berço & Quarto do Bebê',
    subtitulo: 'Berços, cômodas, cadeiras de descanso e tudo para o quartinho',
    icone: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
    gradient: 'from-pink-400 to-rose-500',
    produtos: [
      {
        nome: 'Berço Portátil Cercado com Mosquiteiro Kababy',
        desc: 'Berço portátil desmontável com mosquiteiro Sleep. Seguro e prático para levar a qualquer lugar.',
        preco: 420.00, precoOriginal: 600.00, desconto: 30, rating: 4.96, likes: 24712,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rat5-mabnrf7gcd6m00',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1009324389%2F23798071706',
        destaque: true, tag: 'Top Avaliacao',
      },
      {
        nome: 'Berço Portátil Cercado Lazy MaxiBaby 0-15kg',
        desc: 'Berço cercado portátil para bebês até 15kg. Fácil de montar e desmontar. Seguro e confortável.',
        preco: 480.00, precoOriginal: 600.00, desconto: 20, rating: 4.96, likes: 22902,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rbkx-ll3qajuocnedb0',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F23392272469',
      },
      {
        nome: 'Berço Co-Leito Snuggle Maxi Baby até 9kg',
        desc: 'Berço portátil co-leito para ficar junto da cama dos pais. Prático e aconchegante.',
        preco: 290.00, precoOriginal: 299.00, desconto: 3, rating: 4.77, likes: 23104,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-22100-y6r5etkucviv72',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F18156043829',
      },
      {
        nome: 'Berço Multifuncional 3x1 Ditália',
        desc: 'Berço que vira mini-cama e sofazinho. 3 em 1 para acompanhar o crescimento do bebê.',
        preco: 348.00, precoOriginal: 360.00, desconto: 3, rating: 4.84, likes: 13645,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rd6b-lu9pr7a5k1fk8d',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F522316174%2F16487846020',
      },
      {
        nome: 'Cômoda Infantil 4 Gavetas 100% MDF Carolina Baby',
        desc: 'Cômoda com 4 gavetas e porta. 100% MDF de qualidade. Perfeita para o quartinho.',
        preco: 438.00, precoOriginal: 581.00, desconto: 25, rating: 4.80, likes: 24160,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mezmp3lyqbr97a',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F791924197%2F23191320592',
        tag: 'Premium',
      },
      {
        nome: 'Cômoda Giratória 3 Gavetas com Trocador',
        desc: 'Gaveteiro giratório com 3 gavetas e trocador. Branca, multiuso e organizadora.',
        preco: 353.00, precoOriginal: 459.00, desconto: 23, rating: 4.80, likes: 19083,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-matugdoax2ih8d',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1467752495%2F22894142345',
      },
      {
        nome: 'Cadeira de Descanso Vibratória Protek Girafa',
        desc: 'Cadeira vibratória e musical para bebê. Confortável e divertida com a Girafa Gigi.',
        preco: 166.00, precoOriginal: 190.00, desconto: 13, rating: 4.88, likes: 45612,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7qukw-lg2ddsdvmqfae7',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F12338701517',
        destaque: true, tag: 'Mais Vendido',
      },
      {
        nome: 'Cadeira de Balanço Vibratória Zippy Toys',
        desc: 'Cadeira de descanso e balanço com vibração, música e brinquedos didáticos.',
        preco: 200.00, precoOriginal: 350.00, desconto: 43, rating: 4.91, likes: 22242,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m839ativng1d1d',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F504754787%2F21199673118',
        tag: '-43% OFF',
      },
      {
        nome: 'Cama Infantil Encanto com Colchão e Grades',
        desc: 'Cama infantil em MDF com design moderno, colchão incluído e grades de segurança.',
        preco: 400.00, precoOriginal: 519.00, desconto: 23, rating: 4.73, likes: 53048,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81ztc-mjzlxgt3bnr7e6',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F402598512%2F21499572722',
      },
      {
        nome: 'Cercadinho Bebê + Tapete + Bolsa 180x150',
        desc: 'Cercadinho portátil com tapete, bolsa e argola. Grande (180x150cm) e dobrável.',
        preco: 350.00, precoOriginal: 500.00, desconto: 30, rating: 4.93, likes: 30103,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81ztp-ml3ppw7d9zb5fc',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1095160737%2F23393156386',
      },
    ],
  },
  {
    id: 'alimentacao-bebe',
    titulo: 'Alimentação do Bebê',
    subtitulo: 'Mamadeiras, cadeiras de alimentação e utensílios essenciais',
    icone: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    gradient: 'from-sky-400 to-blue-500',
    produtos: [
      {
        nome: 'Cadeira de Alimentação Infantil',
        desc: 'Cadeira prática e segura para refeição do bebê. Para meninos e meninas.',
        preco: 65.00, precoOriginal: 105.00, desconto: 38, rating: 4.78, likes: 19623,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m7w9jpkbp9m9bc',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F325008325%2F23196614815',
        destaque: true, tag: 'Mais Vendido',
      },
      {
        nome: 'Cadeira de Alimentação Portátil Honey Maxi Baby',
        desc: 'Cadeira portátil premium com regulagens. Prática para levar a qualquer lugar.',
        preco: 459.00, precoOriginal: 459.00, desconto: 0, rating: 4.96, likes: 15016,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7qvfm-ljd8qlu3ie2p99',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F22591811020',
        tag: 'Top Avaliacao',
      },
      {
        nome: 'Cadeira Alimentação Burigotto Poke Polar',
        desc: 'Cadeira de alimentação da Burigotto. Marca de confiança, segurança garantida.',
        preco: 317.00, precoOriginal: 403.00, desconto: 21, rating: 4.96, likes: 6409,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7repu-m8z3oe14clog27',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1479622710%2F20999713015',
        tag: 'Premium',
      },
      {
        nome: 'Cadeira 4 em 1 com Rodas Gourmet KaBaby',
        desc: 'Cadeira multifuncional 4 em 1 com rodas. Super versátil, acompanha o crescimento.',
        preco: 400.00, precoOriginal: 800.00, desconto: 50, rating: 4.93, likes: 5358,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-824jb-me8tacri08avd3',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1009324389%2F28091121555',
        tag: '-50% OFF',
      },
      {
        nome: 'Kit 2 Mamadeiras MAM Easy Start 130/260ml',
        desc: 'Mamadeiras MAM referência mundial. Kit com 2 tamanhos. Anti-cólica e fácil de limpar.',
        preco: 120.00, precoOriginal: 120.00, desconto: 0, rating: 4.91, likes: 17864,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81ztc-mka3hl6ox14x8b',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F17725599153',
      },
      {
        nome: 'Kit 3 Mamadeiras MAM Easy Start 130/260/320ml',
        desc: 'Kit completo MAM com 3 mamadeiras de tamanhos diferentes. Do recém-nascido ao bebê maior.',
        preco: 189.00, precoOriginal: 189.00, desconto: 0, rating: 4.97, likes: 10352,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rdvm-lycge8eww6qw73',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F23797673343',
        destaque: true, tag: 'Top Avaliacao',
      },
      {
        nome: 'Garrafa Térmica Infantil Ursinho 320ml Inox',
        desc: 'Garrafa térmica em inox com canudo. Mantém temperatura 5h. Antiderrapante. Buba.',
        preco: 93.00, precoOriginal: 115.00, desconto: 19, rating: 4.93, likes: 9797,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m5x4f3ma56ytaa',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F572649927%2F22092940609',
      },
      {
        nome: 'Copo de Treinamento com Alça 150ml Lillo',
        desc: 'Copo de transição para bebês. Com alça, fácil de segurar. Marca Lillo.',
        preco: 35.00, precoOriginal: 37.00, desconto: 5, rating: 4.90, likes: 7932,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7qukw-lj1evtz1r8og92',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F481992044%2F3295101131',
      },
    ],
  },
  {
    id: 'higiene-bebe',
    titulo: 'Higiene & Banho do Bebê',
    subtitulo: 'Lenços, shampoos, fraldas e tudo para o banho e cuidados do bebê',
    icone: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    gradient: 'from-cyan-400 to-teal-500',
    produtos: [
      {
        nome: 'Lenços Umedecidos Bepantol Hipoalergênico 4x48un',
        desc: 'Kit com 4 pacotes de lenços Bepantol. Hipoalergênico, suave para a pele do bebê.',
        preco: 57.00, precoOriginal: 65.00, desconto: 12, rating: 4.95, likes: 29599,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m9zxeatpaoftb1',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F21145355218',
        destaque: true, tag: 'Mais Vendido',
      },
      {
        nome: 'Toalha Umedecida Meu Bebê Ultra 500 Folhas',
        desc: '500 folhas de toalha umedecida. Rendimento incrível e preço acessível.',
        preco: 49.00, precoOriginal: 59.00, desconto: 17, rating: 4.97, likes: 25335,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rdw7-lz575a3eoft2f3',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1045085918%2F23693223002',
        tag: 'Top Avaliacao',
      },
      {
        nome: 'Lenços Umedecidos Pampers Carícia 576un',
        desc: 'Mega pacote Pampers com 576 unidades. Suave e com cheirinho de bebê.',
        preco: 145.00, precoOriginal: 145.00, desconto: 0, rating: 4.97, likes: 18929,
        imagem: 'https://cf.shopee.com.br/file/5b4a2c4487753a6da0ae4e835b39afed',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1062557396%2F23296759926',
      },
      {
        nome: 'Kit 2 Shampoos Johnson\'s Baby 750ml',
        desc: 'Clássico shampoo Johnson\'s Baby. Kit com 2 frascos de 750ml. Suave e sem lágrimas.',
        preco: 116.00, precoOriginal: 116.00, desconto: 0, rating: 4.95, likes: 17270,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-22110-2o6ekj3lrhjv80',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F818390117%2F21760170574',
      },
      {
        nome: 'Kit 3 Lava Roupas Baby Soft 3L',
        desc: 'Sabão líquido especial para roupas de bebê. Kit com 3 galões de 3L. Hipoalergênico.',
        preco: 69.00, precoOriginal: 90.00, desconto: 23, rating: 4.94, likes: 24296,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m5sq8of7ls3pde',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F534023108%2F22597600131',
        destaque: true, tag: 'Custo-Beneficio',
      },
      {
        nome: 'Kit 3 Sabonete Líquido Dove Baby 200ml',
        desc: 'Sabonete líquido Dove Baby da cabeça aos pés. Hidratação glicerinada. Kit com 3.',
        preco: 48.00, precoOriginal: 48.00, desconto: 0, rating: 4.94, likes: 12346,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-82253-mhibadpca1vqf8',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F893869193%2F18497120955',
      },
      {
        nome: 'Fralda Cremer Magic Care Pacote Jumbo 30un',
        desc: 'Fraldas descartáveis Cremer tamanho P. Pacote jumbo com 30 unidades. Absorção garantida.',
        preco: 22.00, precoOriginal: 22.00, desconto: 0, rating: 4.92, likes: 11023,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-8260u-mli5r4xogiyob3',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F893869193%2F20064627520',
        tag: 'Custo-Beneficio',
      },
    ],
  },
  {
    id: 'roupas-bebe',
    titulo: 'Roupas de Bebê',
    subtitulo: 'Kits de roupinhas, conjuntos, bodies e macacões para todas as estações',
    icone: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    gradient: 'from-fuchsia-400 to-pink-500',
    produtos: [
      {
        nome: 'Kit 10 Peças Roupas Bebê Menina (5 Camisetas + 5 Shorts)',
        desc: 'Kit sortido com 5 conjuntos para bebê menina. 100% algodão, estampas variadas.',
        preco: 80.00, precoOriginal: 140.00, desconto: 43, rating: 4.83, likes: 53229,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m0ey24xcj2qofc',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F22197391400',
        destaque: true, tag: '-43% OFF',
      },
      {
        nome: 'Kit 4 Peças Moletom Bebê Menina Inverno',
        desc: '2 casacos + 2 calças de moletom peluciado. Quentinho e confortável para o inverno.',
        preco: 60.00, precoOriginal: 100.00, desconto: 40, rating: 4.78, likes: 39526,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m1gxe6gf4utk9e',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F23997496332',
        tag: 'Custo-Beneficio',
      },
      {
        nome: 'Kit Moletom Bebê Menina Inverno (2 a 12 peças)',
        desc: 'Conjunto moletom peluciado em vários tamanhos. Opções de 2, 6 ou 12 peças.',
        preco: 38.00, precoOriginal: 60.00, desconto: 37, rating: 4.81, likes: 33700,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m6fiaadyfq0768',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F23393719665',
      },
      {
        nome: 'Kit Bebê Menino Casual Verão (2 a 10 peças)',
        desc: 'Conjuntos estilo casual minimalista para bebê menino. Algodão leve para o verão.',
        preco: 28.00, precoOriginal: 40.00, desconto: 30, rating: 4.87, likes: 26825,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mibw22ugxv5ycc',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F48001919674',
      },
      {
        nome: 'Kit 6 Camisetas Manga Longa Bebê Menino',
        desc: '6 camisetas básicas lisas de manga longa. 100% algodão, cores sortidas.',
        preco: 68.00, precoOriginal: 127.00, desconto: 46, rating: 4.83, likes: 20454,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m6ieskkhimo798',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F22998224718',
        tag: '-46% OFF',
      },
      {
        nome: 'Kit 4 Vestidos Bebê Menina Verão Algodão',
        desc: '4 vestidos estampados com mangas franzidas. 100% algodão, fresquinhos para o verão.',
        preco: 55.00, precoOriginal: 130.00, desconto: 58, rating: 4.89, likes: 15968,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m34ysn1utlhve3',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F22693564299',
        destaque: true, tag: '-58% OFF',
      },
      {
        nome: 'Macacão Elegante Bebê com Estampa de Frutas',
        desc: 'Macacão fofo com botões frontais e estampa de frutas/vegetais. Lovito.',
        preco: 38.00, precoOriginal: 54.00, desconto: 30, rating: 4.93, likes: 15300,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rdvu-mc7g31995bxq06',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F426378412%2F28122818119',
      },
      {
        nome: 'Conjunto Moletom Bebê Menino Estampas Divertidas',
        desc: 'Moletom para bebê menino com estampas fofas. Conforto e estilo no dia a dia.',
        preco: 40.00, precoOriginal: 51.00, desconto: 22, rating: 4.90, likes: 11277,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-mcv0bo3vlkoxf5',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F20698276094',
      },
      {
        nome: 'Kit 12 Peças Roupas Menino (6 Camisetas + 6 Bermudas)',
        desc: '6 conjuntos completos para menino. Sortido com estampas variadas.',
        preco: 100.00, precoOriginal: 180.00, desconto: 44, rating: 4.81, likes: 34860,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mify3n5z6hae12',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F15094283721',
        tag: 'Custo-Beneficio',
      },
      {
        nome: 'Kit 4 Body + Calça Mijão Bebê Menina',
        desc: '2 bodies de manga curta + 2 calças mijão. Kit essencial para recém-nascido.',
        preco: 40.00, precoOriginal: 58.00, desconto: 31, rating: 4.80, likes: 2799,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81ztc-mjjwigwgs0zqf8',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F341167297%2F23797641493',
      },
    ],
  },
  {
    id: 'passeio-bebe',
    titulo: 'Passeio & Transporte do Bebê',
    subtitulo: 'Carrinhos, bebê conforto, bolsas maternidade e cangurus',
    icone: 'M8 7h12l2 5H6l2-5zM3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z',
    gradient: 'from-indigo-500 to-blue-600',
    produtos: [
      {
        nome: 'Triciclo 4 em 1 com Empurrador e Capota Solar',
        desc: 'Triciclo multifuncional que vira carrinho de bebê. Com empurrador e proteção solar. KaBaby.',
        preco: 500.00, precoOriginal: 1199.00, desconto: 58, rating: 4.79, likes: 23151,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-81zwi-mivpxyahj1mq6b',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1009324389%2F18499258338',
        destaque: true, tag: '-58% OFF',
      },
      {
        nome: 'Mochila Bolsa Maternidade Lequeen Original',
        desc: 'Bolsa maternidade com porta mamadeira e fralda. Original Lequeen, super organizada.',
        preco: 189.00, precoOriginal: 210.00, desconto: 10, rating: 4.94, likes: 18821,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7qukw-lkgqpus6jwa9de',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F345061139%2F8139620593',
        destaque: true, tag: 'Mais Vendido',
      },
      {
        nome: 'Jipe Infantil Maral Carrinho de Passeio',
        desc: 'Carrinho de passeio estilo jipe com empurrador. Vários modelos disponíveis.',
        preco: 255.00, precoOriginal: 320.00, desconto: 20, rating: 4.95, likes: 17505,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m8g60ajxg45tc6',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F504754787%2F23498386191',
        tag: 'Top Avaliacao',
      },
      {
        nome: 'Carrinho de Bebê Guarda-Chuva MOVEE Maxi Baby',
        desc: 'Carrinho guarda-chuva leve e compacto. Fácil de transportar e guardar.',
        preco: 250.00, precoOriginal: 390.00, desconto: 36, rating: 4.84, likes: 10104,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7rbla-loy58vz9qodv8c',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F340054154%2F21899093561',
        tag: '-36% OFF',
      },
      {
        nome: 'Cadeirinha para Carro Styll Baby até 36kg',
        desc: 'Cadeirinha de bebê para carro infantil até 10 anos (36kg). Com regulagem de altura.',
        preco: 314.00, precoOriginal: 390.00, desconto: 19, rating: 4.91, likes: 5668,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m2glp26toocm0b',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F504754787%2F22198027272',
      },
      {
        nome: 'Bebê Conforto Cadeirinha Styll Baby até 36kg',
        desc: 'Cadeirinha 0 a 10 anos com assento de elevação. Segurança máxima para seu bebê.',
        preco: 320.00, precoOriginal: 390.00, desconto: 18, rating: 4.94, likes: 5351,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-7r98o-m26nodhjd61ia0',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F504754787%2F22193530656',
      },
      {
        nome: 'Canguru Baby Carrier 3 em 1 Nuk',
        desc: 'Canguru ergonômico 3 posições. Marca Nuk, referência em produtos para bebê.',
        preco: 304.00, precoOriginal: 304.00, desconto: 0, rating: 4.91, likes: 5102,
        imagem: 'https://cf.shopee.com.br/file/bdb267f0d9eaccedda088a000042126c',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F467697231%2F9767275523',
        tag: 'Premium',
      },
      {
        nome: 'Mochila Bolsa Maternidade Ursinho Reforçada',
        desc: 'Bolsa maternidade resistente e reforçada com tema ursinho. Espaçosa e organizada.',
        preco: 160.00, precoOriginal: 190.00, desconto: 16, rating: 4.95, likes: 7201,
        imagem: 'https://cf.shopee.com.br/file/br-11134201-22120-zbei5vpaeblv9b',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F441234830%2F19369241619',
      },
      {
        nome: 'Cadeirinha Maximus para Carro Galzerano até 25kg',
        desc: 'Cadeirinha de segurança Galzerano. Marca premium brasileira, conforto e proteção.',
        preco: 376.00, precoOriginal: 550.00, desconto: 32, rating: 4.95, likes: 2068,
        imagem: 'https://cf.shopee.com.br/file/br-11134207-81z1k-mehphm202yo3d3',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F601021305%2F22998877617',
      },
      {
        nome: 'Carrinho EasyGo 3 Rodas KaBaby até 15kg',
        desc: 'Carrinho de bebê 3 rodas com cesto. Leve e compacto. Da marca KaBaby.',
        preco: 340.00, precoOriginal: 800.00, desconto: 58, rating: 4.86, likes: 3484,
        imagem: 'https://cf.shopee.com.br/file/sg-11134201-7ravr-maoij9kqdfgwba',
        link: 'https://shope.ee/an_redir?origin_link=https%3A%2F%2Fshopee.com.br%2Fproduct%2F1009324389%2F23298540871',
        tag: '-58% OFF',
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
    name: 'Melhores Itens para Casa e Enxoval de Bebê 2026 — Ofertas Shopee',
    description: 'Curadoria dos melhores produtos para casa e enxoval de bebê com avaliação acima de 4.7 estrelas na Shopee.',
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
          <div className="absolute top-40 right-40 w-64 h-64 bg-pink-400 rounded-full blur-[100px]" />
        </div>
        <div className="container-main section-padding relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                <span className="text-orange-300 text-sm font-medium">Curadoria Shopee — Produtos com 4.7+ estrelas</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Itens para Casa &<br />
                <span className="text-orange-400">Enxoval de Bebê.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Seleção curada dos produtos mais bem avaliados da Shopee para sua casa e para o bebê.
                Cozinha, decoração, eletrodomésticos, berços, carrinhos, roupinhas e muito mais
                — tudo com avaliação acima de 4.7 estrelas e milhares de vendas comprovadas.
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
              { num: '2k+', label: 'Curtidas mínimas' },
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
                <ScrollReveal key={i} delay={i * 60}>
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
                      {produto.desconto > 0 && !produto.tag?.includes('OFF') && (
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
                titulo: 'Avaliação 4.7+ estrelas',
                desc: 'Todos os produtos têm nota acima de 4.7 na Shopee. Só entram os melhores avaliados pelos compradores reais.',
              },
              {
                icone: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                titulo: 'Milhares de vendas',
                desc: 'Filtramos apenas produtos populares com milhares de curtidas e vendas comprovadas na plataforma.',
              },
              {
                icone: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                titulo: 'Lojas verificadas',
                desc: 'Produtos de lojas oficiais e com alta reputação na Shopee. Compra segura e entrega garantida.',
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
              <p className="font-medium text-brand-dark/70 mb-1">Transparência</p>
              <p className="leading-relaxed">
                Esta página contém links de afiliado da Shopee. Quando você compra através desses links,
                recebo uma pequena comissão — sem nenhum custo adicional para você. Isso me ajuda a manter o site
                e continuar criando conteúdo gratuito. Preços e disponibilidade podem variar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="section-padding bg-white text-center">
        <div className="container-main max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-2 text-brand-dark mb-4">Quer mais dicas e ofertas?</h2>
            <p className="text-brand-dark/50 mb-8 text-lg">
              Veja também nossas ferramentas recomendadas para empreendedores digitais
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
