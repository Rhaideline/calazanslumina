import { capitaisBR } from './capitais-br'
import { cidadesBrasil } from './cidades-brasil'
import { cidadesMA } from './cidades-ma'

export interface CidadeUnificada {
  slug: string
  nome: string
  estado: string
  siglaEstado: string
  pais: 'BR' | 'US'
  comunidade: string
  doresEspecificas: string
}

const normalizeBR = (c: typeof capitaisBR[number] | typeof cidadesBrasil[number]): CidadeUnificada => ({
  slug: c.slug,
  nome: c.nome,
  estado: c.estado,
  siglaEstado: c.siglaEstado,
  pais: 'BR',
  comunidade: c.descricao,
  doresEspecificas: c.doresEspecificas,
})

const normalizeMA = (c: typeof cidadesMA[number]): CidadeUnificada => ({
  slug: c.slug,
  nome: c.nome,
  estado: 'Massachusetts',
  siglaEstado: 'MA',
  pais: 'US',
  comunidade: c.comunidade,
  doresEspecificas: c.doresEspecificas,
})

export const todasCidades: CidadeUnificada[] = [
  ...capitaisBR.map(normalizeBR),
  ...cidadesBrasil.map(normalizeBR),
  ...cidadesMA.map(normalizeMA),
]

export function getCidadeBySlug(slug: string) {
  return todasCidades.find((c) => c.slug === slug)
}
