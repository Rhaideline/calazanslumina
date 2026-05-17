import type { Curso } from '@/data/cursos'
import { formatPreco } from '@/lib/formatters'

const SITE = 'https://calazanslumina.com.br'
const ORG_ID = `${SITE}/#organization`

interface CursoCidadeInput {
  curso: Curso
  cidadeNome: string
  siglaEstado: string
  estadoNome: string
  pais: 'BR' | 'US'
  url: string
  totalAulas: number
}

export function buildCursoCidadeFAQ({ curso, cidadeNome, siglaEstado, totalAulas }: CursoCidadeInput) {
  const cursoBase = curso.nome.split(' — ')[0]
  const preco = curso.gratuito ? 'gratuito' : `R$ ${formatPreco(curso.preco)}`
  const precoTexto = curso.gratuito ? 'Totalmente gratuito, sem cartão de crédito.' : `Apenas R$ ${formatPreco(curso.preco)}, pagamento único, sem mensalidade.`
  const localLabel = `${cidadeNome}, ${siglaEstado}`

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `O curso ${cursoBase} funciona em ${localLabel}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Sim. O curso ${curso.nome} é 100% online, com acesso vitalício e sem horário fixo. Brasileiros em ${localLabel} podem acessar do celular, tablet ou computador, com qualquer conexão de internet. ${curso.modulos.length} módulos, ${totalAulas} aulas. ${precoTexto}`,
        },
      },
      {
        '@type': 'Question',
        name: `Quanto custa o curso ${cursoBase} para quem está em ${cidadeNome}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `O curso ${curso.nome} custa ${preco} para qualquer cidade, incluindo ${cidadeNome}. ${curso.gratuito ? 'Não há cobrança, taxa de matrícula ou mensalidade.' : `Pagamento único, sem mensalidade. Acesso vitalício após a compra. Pix, cartão de crédito em até 12x e boleto disponíveis.`}`,
        },
      },
      {
        '@type': 'Question',
        name: `Preciso ter conhecimento prévio para fazer o curso ${cursoBase}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Não. ${curso.descricaoCurta} O curso começa do zero e é ideal para quem nunca usou IA, marketing digital ou ferramentas tecnológicas avançadas. Linguagem simples, exemplos práticos, ${totalAulas} aulas curtas e objetivas.`,
        },
      },
      {
        '@type': 'Question',
        name: `Em quanto tempo termino o curso ${cursoBase}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `O curso tem ${curso.modulos.length} módulos e ${totalAulas} aulas. A maioria dos alunos termina em 7 a 14 dias estudando 30 minutos por dia. Mas como o acesso é vitalício, você pode estudar no seu ritmo, sem prazo.`,
        },
      },
      {
        '@type': 'Question',
        name: `Recebo certificado fazendo o curso em ${cidadeNome}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `O curso ${curso.nome} é focado em aplicação prática. Ao final, você terá habilidade real para ${curso.oQueVaiAprender.slice(0, 2).join(' e ')}. Para empreendedores e autônomos em ${localLabel}, vale mais o resultado prático do que o certificado.`,
        },
      },
      ...curso.vsl.objecoes.map((o) => ({
        '@type': 'Question' as const,
        name: o.pergunta,
        acceptedAnswer: { '@type': 'Answer' as const, text: o.resposta },
      })),
    ],
  }
}

export function buildLocalBusinessSchema(cidadeNome: string, siglaEstado: string, pais: 'BR' | 'US') {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE}/#calazanslumina-${cidadeNome.toLowerCase().replace(/\s+/g, '-')}`,
    name: `Calazans Lumina — ${cidadeNome}`,
    parentOrganization: { '@id': ORG_ID },
    url: SITE,
    telephone: '+55-31-98294-8067',
    priceRange: 'R$ 0 - R$ 297',
    areaServed: {
      '@type': 'City',
      name: cidadeNome,
      ...(pais === 'BR'
        ? { containedInPlace: { '@type': 'State', name: siglaEstado, '@id': `${SITE}/#estado-${siglaEstado}` } }
        : {
            containedInPlace: {
              '@type': 'State',
              name: 'Massachusetts',
              containedInPlace: { '@type': 'Country', name: 'United States' },
            },
          }),
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: pais === 'BR' ? cidadeNome : 'Framingham',
      addressRegion: pais === 'BR' ? siglaEstado : 'MA',
      addressCountry: pais === 'BR' ? 'BR' : 'US',
    },
    serviceType: ['Curso Online', 'Marketing Digital', 'Inteligência Artificial', 'SEO Local'],
    availableLanguage: ['Portuguese', 'English'],
  }
}

export function buildCursoCidadeMetaDescription({ curso, cidadeNome, siglaEstado, totalAulas }: CursoCidadeInput) {
  const cursoCurto = curso.nome.split(' — ')[0]
  const local = `${cidadeNome}, ${siglaEstado}`
  const cta = curso.gratuito ? 'Acesse grátis agora →' : `R$ ${formatPreco(curso.preco)} · Pagamento único →`
  return `${cursoCurto} 100% online em ${local}. ${totalAulas} aulas, ${curso.modulos.length} módulos. Acesso vitalício, sem horário fixo, em português. ${cta}`
}

export function buildAlternates(canonical: string) {
  return {
    canonical,
    languages: {
      'pt-BR': canonical,
      'x-default': canonical,
    },
  }
}

export function buildQuotableIntro({ curso, cidadeNome, siglaEstado, totalAulas, pais }: CursoCidadeInput) {
  const cursoCurto = curso.nome.split(' — ')[0]
  const local = pais === 'BR' ? `${cidadeNome}, ${siglaEstado}` : `${cidadeNome}, Massachusetts`
  const publico = pais === 'BR' ? `brasileiros em ${cidadeNome}` : `comunidade brasileira em ${cidadeNome}`
  const preco = curso.gratuito ? 'gratuitamente' : `por R$ ${formatPreco(curso.preco)}, com pagamento único`
  return `${cursoCurto} é um curso online oferecido pela Calazans Lumina ${preco}, com ${curso.modulos.length} módulos e ${totalAulas} aulas em português, criado para ${publico} que querem aprender ${curso.oQueVaiAprender[0]?.toLowerCase() || 'IA e marketing digital'} sem precisar sair de casa. Acesso 100% online, vitalício, no celular ou computador, sem horário fixo. Disponível em ${local} e em todo território ${pais === 'BR' ? 'brasileiro' : 'americano'}.`
}
