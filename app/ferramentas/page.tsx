import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumb from '@/components/Breadcrumb'
import CTAForm from '@/components/CTAForm'

export const metadata: Metadata = {
  title: '18 Ferramentas Essenciais para Empreendedores Digitais (2026) | Testadas e Aprovadas',
  description: 'Curadoria com 18 ferramentas testadas para criacao de conteudo, home office e marketing digital. Ring light, microfone, tripe, livros e mais — com precos a partir de R$29. Compre com desconto na Amazon e Shopee →',
  alternates: { canonical: 'https://calazanslumina.com.br/ferramentas' },
  openGraph: {
    title: 'Ferramentas Recomendadas | Calazans Lumina',
    description: 'Curadoria de produtos testados e aprovados para empreendedores digitais. Ring lights, microfones, livros, acessórios e muito mais.',
    url: 'https://calazanslumina.com.br/ferramentas',
    type: 'website',
  },
}

type Produto = {
  nome: string
  desc: string
  preco: string
  loja: 'amazon' | 'shopee'
  link: string
  imagem?: string
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
    id: 'criacao-conteudo',
    titulo: 'Criação de Conteúdo',
    subtitulo: 'Equipamentos essenciais para gravar vídeos, lives e fotos profissionais',
    icone: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    gradient: 'from-purple-600 to-pink-500',
    produtos: [
      {
        nome: 'Ring Light 26cm com Tripé 2.1m',
        desc: 'Iluminação profissional para lives, Reels e reuniões. 3 temperaturas de cor, 10 níveis de brilho. Essencial para qualquer criador de conteúdo.',
        preco: 'R$ 79 – R$ 149',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/B0BYZRQFM2?tag=rhaicalazans-20',
        destaque: true,
        tag: 'Mais Vendido',
      },
      {
        nome: 'Microfone de Lapela Sem Fio Bluetooth AGold Premium (Kit 2)',
        desc: 'Kit com 2 microfones sem fio Bluetooth, abafamento de ruído, até 10h de bateria. Conexão Android USB-C e câmera. Áudio profissional para Reels, lives e gravações.',
        preco: 'R$ 49 – R$ 99',
        loja: 'amazon',
        link: 'https://amzn.to/40jzera',
        imagem: 'https://m.media-amazon.com/images/I/512CTzqVu9L._AC_SL1000_.jpg',
        destaque: true,
        tag: 'Escolha da Rhai',
      },
      {
        nome: 'Tripé Profissional com Suporte para Celular',
        desc: 'Tripé ajustável até 1.7m com suporte giratório para celular e câmera. Perfeito para gravar conteúdo estável em qualquer lugar.',
        preco: 'R$ 59 – R$ 99',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/B0CLSBHYZH?tag=rhaicalazans-20',
      },
      {
        nome: 'Webcam Logitech C920s Full HD 1080p',
        desc: 'A webcam mais popular do mundo. Full HD, foco automático, correção de luz. Ideal para reuniões no Zoom e lives.',
        preco: 'R$ 249 – R$ 349',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/B07K986YLL?tag=rhaicalazans-20',
        tag: 'Premium',
      },
      {
        nome: 'Kit Softbox Iluminação 50x70cm (2 peças)',
        desc: 'Iluminação de estúdio profissional em casa. Luz difusa e uniforme, perfeita para vídeos de alta qualidade e fotos de produto.',
        preco: 'R$ 179 – R$ 279',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/B07WZP8KZH?tag=rhaicalazans-20',
      },
      {
        nome: 'Teleprompter para Smartphone',
        desc: 'Leia seu roteiro enquanto olha direto para a câmera. Funciona com qualquer celular. Game-changer para quem grava vídeos.',
        preco: 'R$ 69 – R$ 129',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/B09TK2SPK8?tag=rhaicalazans-20',
      },
    ],
  },
  {
    id: 'home-office',
    titulo: 'Home Office Produtivo',
    subtitulo: 'Monte um escritório em casa que aumenta sua produtividade',
    icone: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    gradient: 'from-blue-600 to-cyan-500',
    produtos: [
      {
        nome: 'Monitor LG 24" IPS Full HD',
        desc: 'Tela IPS com cores vibrantes, bordas finas e baixa fadiga visual. Ter uma segunda tela é o upgrade #1 de produtividade.',
        preco: 'R$ 549 – R$ 749',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/B0DF2WSGF6?tag=rhaicalazans-20',
        destaque: true,
        tag: 'Escolha da Rhai',
      },
      {
        nome: 'Teclado Mecânico Redragon Kumara K552',
        desc: 'Teclado mecânico compacto com iluminação LED. Switches responsivos, durável e com ótimo custo-benefício.',
        preco: 'R$ 149 – R$ 199',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/B08F2XPY3W?tag=rhaicalazans-20',
        tag: 'Custo-Benefício',
      },
      {
        nome: 'Mouse Logitech Pebble 2 M750',
        desc: 'Multi-dispositivo (conecta em até 3), silencioso, ergonômico. Troca entre notebook e monitor com um clique.',
        preco: 'R$ 199 – R$ 249',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/B0DKBVRBLR?tag=rhaicalazans-20',
      },
      {
        nome: 'Headset Logitech H390 USB',
        desc: 'Áudio claro para reuniões e chamadas. Microfone com cancelamento de ruído, controle de volume no cabo. Plug-and-play.',
        preco: 'R$ 149 – R$ 199',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/B000UXZQ42?tag=rhaicalazans-20',
      },
      {
        nome: 'Suporte Ergonômico para Notebook',
        desc: 'Eleva o notebook na altura dos olhos, melhora postura e ventilação. Alumínio resistente e design clean.',
        preco: 'R$ 79 – R$ 129',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/B086CB6BXW?tag=rhaicalazans-20',
      },
      {
        nome: 'Hub USB-C 7 em 1 (HDMI, USB, SD)',
        desc: 'Conecte monitor, USB, cartão SD e mais em um único hub. Essencial para quem usa notebook com poucas portas.',
        preco: 'R$ 89 – R$ 149',
        loja: 'shopee',
        link: '#',
        tag: 'Custo-Benefício',
      },
    ],
  },
  {
    id: 'livros',
    titulo: 'Livros de Marketing & Negócios',
    subtitulo: 'Os livros que moldaram minha forma de pensar marketing e vendas',
    icone: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    gradient: 'from-amber-600 to-orange-500',
    produtos: [
      {
        nome: 'Gatilhos Mentais — Gustavo Ferreira',
        desc: 'O guia definitivo de persuasão para marketing digital. Aprenda os gatilhos que fazem as pessoas comprarem. Leitura obrigatória.',
        preco: 'R$ 34 – R$ 45',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/8582892101?tag=rhaicalazans-20',
        destaque: true,
        tag: 'Escolha da Rhai',
      },
      {
        nome: 'Expert Secrets — Russell Brunson',
        desc: 'Como criar um movimento e vender para uma audiência fiel. O autor é o criador do ClickFunnels. Transformador.',
        preco: 'R$ 59 – R$ 79',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/6585564073?tag=rhaicalazans-20',
        tag: 'Clássico',
      },
      {
        nome: 'Marketing 5.0 — Philip Kotler',
        desc: 'O pai do marketing moderno explica como tecnologia e humanidade se encontram. Essencial para entender o futuro do marketing.',
        preco: 'R$ 54 – R$ 69',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/6555642408?tag=rhaicalazans-20',
      },
      {
        nome: 'A Bíblia do Marketing Digital — Cláudio Torres',
        desc: 'Referência brasileira em marketing digital. Cobre SEO, redes sociais, email marketing, analytics e mais. Completo e prático.',
        preco: 'R$ 44 – R$ 59',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/8575227165?tag=rhaicalazans-20',
        destaque: true,
        tag: 'Para Iniciantes',
      },
      {
        nome: 'DotCom Secrets — Russell Brunson',
        desc: 'O playbook completo de funis de vendas online. Estratégias testadas que geram milhões. Complemento perfeito do Expert Secrets.',
        preco: 'R$ 59 – R$ 79',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/6585564081?tag=rhaicalazans-20',
      },
      {
        nome: 'Isso É Marketing — Seth Godin',
        desc: 'Para ser visto é preciso aprender a enxergar. Seth Godin ensina a criar marketing que as pessoas realmente querem receber.',
        preco: 'R$ 39 – R$ 54',
        loja: 'amazon',
        link: 'https://www.amazon.com.br/dp/8550807648?tag=rhaicalazans-20',
      },
    ],
  },
  {
    id: 'acessorios-mobile',
    titulo: 'Acessórios para Celular',
    subtitulo: 'Transforme seu celular em uma ferramenta profissional de trabalho',
    icone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    gradient: 'from-emerald-600 to-teal-500',
    produtos: [
      {
        nome: 'Suporte Articulado de Mesa para Celular',
        desc: 'Braço flexível que segura o celular em qualquer posição. Perfeito para gravar hands-free, lives e videochamadas.',
        preco: 'R$ 29 – R$ 59',
        loja: 'shopee',
        link: '#',
        destaque: true,
        tag: 'Mais Vendido',
      },
      {
        nome: 'Kit Lentes Clip-on (Wide + Macro + Fisheye)',
        desc: 'Amplie o ângulo das suas fotos e vídeos com o celular. Encaixa em qualquer modelo. Qualidade surpreendente pelo preço.',
        preco: 'R$ 25 – R$ 49',
        loja: 'shopee',
        link: '#',
        tag: 'Custo-Benefício',
      },
      {
        nome: 'Power Bank 20000mAh Fast Charge',
        desc: 'Carregador portátil de alta capacidade com carga rápida. Carrega o celular 4-5 vezes. Nunca mais fique sem bateria.',
        preco: 'R$ 79 – R$ 139',
        loja: 'shopee',
        link: '#',
        destaque: true,
        tag: 'Escolha da Rhai',
      },
      {
        nome: 'Fone Bluetooth com Cancelamento de Ruído',
        desc: 'Fone TWS com ANC para focar em qualquer ambiente. Ótimo para calls, podcasts e concentração no trabalho.',
        preco: 'R$ 69 – R$ 129',
        loja: 'shopee',
        link: '#',
      },
      {
        nome: 'Estabilizador Gimbal para Celular',
        desc: 'Vídeos profissionais sem tremor. 3 eixos de estabilização, controle por app. Ideal para vídeos de produto e vlogs.',
        preco: 'R$ 139 – R$ 229',
        loja: 'shopee',
        link: '#',
        tag: 'Premium',
      },
      {
        nome: 'Carregador Rápido USB-C 33W',
        desc: 'Carrega seu celular de 0 a 70% em 30 minutos. Compacto, seguro e compatível com a maioria dos smartphones.',
        preco: 'R$ 39 – R$ 69',
        loja: 'shopee',
        link: '#',
      },
    ],
  },
]

const categoryIcons: Record<string, string> = {
  'criacao-conteudo': 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  'home-office': 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  'livros': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  'acessorios-mobile': 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
}

const productIcons: Record<string, string> = {
  'Ring Light': 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  'Microfone': 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z',
  'Tripé': 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  'Webcam': 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
  'Kit Softbox': 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  'Teleprompter': 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  'Monitor': 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  'Teclado': 'M10 21h4M3 7h18M4 3h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z',
  'Mouse': 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122',
  'Headset': 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z',
  'Suporte': 'M4 6h16M4 12h16m-7 6h7',
  'Hub USB': 'M13 10V3L4 14h7v7l9-11h-7z',
  'Gatilhos': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  'Expert': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  'Marketing': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  'Bíblia': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  'DotCom': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  'Conteúdo': 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  'Lente': 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7',
  'Power Bank': 'M13 10V3L4 14h7v7l9-11h-7z',
  'Fone': 'M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z',
  'Estabilizador': 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
  'Carregador': 'M13 10V3L4 14h7v7l9-11h-7z',
  'Kit Lentes': 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7',
  'Gimbal': 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
}

function getProductIcon(nome: string): string {
  for (const [key, icon] of Object.entries(productIcons)) {
    if (nome.includes(key)) return icon
  }
  return 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
}

function getStoreColor(loja: 'amazon' | 'shopee') {
  return loja === 'amazon'
    ? { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200', bgLight: 'bg-amber-50', hover: 'hover:bg-amber-600' }
    : { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200', bgLight: 'bg-orange-50', hover: 'hover:bg-orange-600' }
}

function getTagColor(tag?: string) {
  if (!tag) return ''
  if (tag === 'Escolha da Rhai') return 'bg-brand-mint text-white'
  if (tag === 'Mais Vendido') return 'bg-red-500 text-white'
  if (tag === 'Premium') return 'bg-purple-500 text-white'
  if (tag === 'Custo-Benefício') return 'bg-blue-500 text-white'
  if (tag === 'Clássico') return 'bg-amber-500 text-white'
  if (tag === 'Para Iniciantes') return 'bg-emerald-500 text-white'
  return 'bg-gray-500 text-white'
}

export default function FerramentasPage() {
  const totalProdutos = categorias.reduce((acc, cat) => acc + cat.produtos.length, 0)

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Ferramentas Recomendadas para Empreendedores Digitais',
    description: 'Curadoria de produtos para criação de conteúdo, home office, marketing e produtividade.',
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
          ...(prod.imagem ? { image: prod.imagem } : {}),
          offers: {
            '@type': 'Offer',
            price: prod.preco.replace(/[^\d,.]/g, '').replace(',', '.'),
            priceCurrency: 'BRL',
            availability: 'https://schema.org/InStock',
          },
        },
      }))
    ),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Quais ferramentas sao essenciais para criacao de conteudo?', acceptedAnswer: { '@type': 'Answer', text: 'As ferramentas essenciais incluem: ring light para iluminacao profissional, microfone lapela para audio claro, tripe com suporte para celular, e fundo verde para cenarios. Esses equipamentos basicos transformam a qualidade dos videos e lives.' } },
      { '@type': 'Question', name: 'Como montar um home office produtivo gastando pouco?', acceptedAnswer: { '@type': 'Answer', text: 'Invista em um suporte para notebook (melhora a ergonomia), mouse sem fio, organizador de mesa e iluminacao adequada. Com menos de R$300 voce monta um setup funcional para trabalhar de casa com produtividade.' } },
      { '@type': 'Question', name: 'Esses links de produtos sao de afiliados?', acceptedAnswer: { '@type': 'Answer', text: 'Sim, esta pagina contem links de afiliado da Amazon e Shopee. Ao comprar pelos nossos links, voce nao paga nada a mais e nos ajuda a manter o conteudo gratuito. Todos os produtos foram testados ou criteriosamente selecionados.' } },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://calazanslumina.com.br' },
      { '@type': 'ListItem', position: 2, name: 'Ferramentas', item: 'https://calazanslumina.com.br/ferramentas' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* === HERO === */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-mint rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[150px]" />
        </div>
        <div className="container-main section-padding relative z-10">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Ferramentas' },
          ]} />

          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-brand-mint/20 border border-brand-mint/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-brand-mint rounded-full animate-pulse" />
                <span className="text-brand-mint text-sm font-medium">Curadoria por Rhaideline Calazans</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Ferramentas que eu uso<br />
                <span className="text-brand-mint">e recomendo.</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                Seleção curada dos melhores produtos para empreendedores digitais.
                Equipamentos, livros e acessórios que fazem diferença no dia a dia
                de quem trabalha com marketing digital e criação de conteúdo.
              </p>
              <p className="text-white/40 text-sm">
                * Links de afiliado. Você não paga nada a mais e me ajuda a manter o conteúdo gratuito.
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
                  <svg className="w-4 h-4 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
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
      <section className="bg-brand-mint py-5">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: `${categorias.reduce((a, c) => a + c.produtos.length, 0)}`, label: 'Produtos selecionados' },
              { num: '4', label: 'Categorias' },
              { num: '100%', label: 'Testados e aprovados' },
              { num: '2', label: 'Lojas parceiras' },
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
              {cat.produtos.map((produto, i) => {
                const store = getStoreColor(produto.loja)
                const icon = getProductIcon(produto.nome)
                return (
                  <ScrollReveal key={i} delay={i * 80}>
                    <div className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col ${produto.destaque ? 'ring-2 ring-brand-mint/30' : ''}`}>
                      {/* Product Visual */}
                      <div className={`relative h-48 bg-gradient-to-br ${cat.gradient} p-6 flex items-center justify-center overflow-hidden`}>
                        {produto.imagem ? (
                          <Image
                            src={produto.imagem}
                            alt={produto.nome}
                            fill
                            className="object-contain p-4 drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <svg className="w-16 h-16 text-white/30 group-hover:text-white/50 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                          </svg>
                        )}

                        {/* Store Badge */}
                        <div className={`absolute top-4 left-4 ${store.bg} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}>
                          {produto.loja === 'amazon' ? 'Amazon' : 'Shopee'}
                        </div>

                        {/* Tag Badge */}
                        {produto.tag && (
                          <div className={`absolute top-4 right-4 ${getTagColor(produto.tag)} text-xs font-bold px-3 py-1 rounded-full z-10`}>
                            {produto.tag}
                          </div>
                        )}

                        {/* Decorative circles */}
                        {!produto.imagem && (
                          <>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/5 rounded-full" />
                          </>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="font-serif text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-mint transition-colors">
                          {produto.nome}
                        </h3>
                        <p className="text-brand-dark/50 text-sm leading-relaxed mb-4 flex-1">
                          {produto.desc}
                        </p>

                        <div className="mt-auto">
                          {/* Price */}
                          <p className="font-serif text-xl font-bold text-brand-dark mb-4">
                            {produto.preco}
                          </p>

                          {/* CTA Button */}
                          {/* Substitua o href="#" pelo seu link de afiliado */}
                          <a
                            href={produto.link}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className={`block w-full text-center ${store.bg} ${store.hover} text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-sm`}
                          >
                            {produto.loja === 'amazon' ? 'Ver na Amazon' : 'Ver na Shopee'}
                            <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* === POR QUE CONFIAR === */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-4xl">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 mb-4">Por que confiar nessas recomendações?</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icone: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                titulo: 'Testados na prática',
                desc: 'Só recomendo produtos que usei ou que profissionais de confiança validaram. Nada de lista genérica.',
              },
              {
                icone: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                titulo: 'Mesmo preço para você',
                desc: 'Os links são de afiliado, mas o preço é o mesmo. Você não paga nada a mais — e me ajuda a criar conteúdo.',
              },
              {
                icone: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                titulo: 'Foco em resultado',
                desc: 'Cada produto foi escolhido pensando em empreendedores que querem profissionalizar seu marketing digital.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-brand-mint/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                Esta página contém links de afiliado da Amazon e Shopee. Quando você compra através desses links,
                recebo uma pequena comissão — sem nenhum custo adicional para você. Isso me ajuda a manter o site
                e continuar criando conteúdo gratuito. Só recomendo produtos que realmente acredito serem úteis
                para empreendedores digitais. Preços podem variar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="section-padding bg-white text-center">
        <div className="container-main max-w-3xl">
          <ScrollReveal>
            <h2 className="heading-2 text-brand-dark mb-4">Precisa de ajuda com seu marketing digital?</h2>
            <p className="text-brand-dark/50 mb-8 text-lg">
              Além de ferramentas, ofereço serviços completos de marketing digital
              para empreendedores brasileiros nos EUA e no Brasil.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/servicos"
                className="btn-primary text-lg px-10 py-4"
              >
                Ver Serviços
              </Link>
              <a
                href="https://wa.me/5531982948067?text=Olá, vim da página de ferramentas e quero saber mais sobre os serviços"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-dark/20 text-brand-dark hover:bg-brand-bg px-6 py-4 rounded-full text-base font-medium transition-colors inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Falar pelo WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === INTERNAL LINKS === */}
      <section className="py-12 bg-brand-bg">
        <div className="container-main">
          <h2 className="font-serif text-2xl font-bold text-brand-dark text-center mb-8">Explore Mais</h2>
          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link href="/enxoval-de-bebe" className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow text-center">
              <p className="font-bold text-brand-dark mb-1">Enxoval de Bebe</p>
              <p className="text-brand-dark/50 text-xs">Checklist completo + PDF gratis</p>
            </Link>
            <Link href="/blog" className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow text-center">
              <p className="font-bold text-brand-dark mb-1">Blog</p>
              <p className="text-brand-dark/50 text-xs">60+ artigos de marketing digital</p>
            </Link>
            <Link href="/cursos" className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow text-center">
              <p className="font-bold text-brand-dark mb-1">Cursos Gratuitos</p>
              <p className="text-brand-dark/50 text-xs">Marketing digital e IA</p>
            </Link>
            <Link href="/para-agencias" className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow text-center">
              <p className="font-bold text-brand-dark mb-1">GoHighLevel</p>
              <p className="text-brand-dark/50 text-xs">Sub-contas prontas para empresas</p>
            </Link>
          </div>
        </div>
      </section>

      <CTAForm />
    </>
  )
}
