/**
 * De/para entre o domínio do Law Life e os campos do GHL.
 *
 * A regra que orienta tudo aqui: para o GHL vai o MÍNIMO necessário para
 * o funil funcionar — nome, contato, área do direito, estágio, valor.
 * Conteúdo de processo (fatos, documentos, estratégia) não sai do Law Life:
 * é sigilo profissional (Art. 34, VII do Estatuto da OAB) e o GHL é uma
 * ferramenta de marketing, não um cofre de dados de cliente.
 */

import type { Case, Client, GhlIntegration } from '@/types/database'
import type { GhlContactPayload, GhlCustomField } from '@/lib/ghl/client'

/**
 * Normaliza telefone para E.164. O GHL aceita telefone sem "+", mas aí ele
 * chuta o país pela location — e um celular brasileiro de 11 dígitos vira
 * número americano inválido. Melhor mandar explícito.
 */
export function toE164(raw: string | null | undefined, country: 'BR' | 'US' = 'BR'): string | null {
  if (!raw) return null
  const digits = raw.replace(/\D/g, '')
  if (!digits) return null

  if (country === 'US') {
    // 11 digitos comecando em 1 = ja tem DDI
    return digits.length >= 11 && digits.startsWith('1') ? `+${digits}` : `+1${digits}`
  }

  // BR sem DDI tem 10 (fixo) ou 11 (celular) digitos. Com DDI, 12 ou 13.
  // O teste do tamanho e o que separa "5511987654321" (ja tem DDI) de
  // "5598765432" (DDD 55, do RS, sem DDI) — os dois comecam com 55.
  if (digits.startsWith('55') && digits.length >= 12) return `+${digits}`
  return `+55${digits}`
}

export function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/)
  return {
    firstName: parts[0] ?? '',
    lastName: parts.slice(1).join(' '),
  }
}

/**
 * Monta os customFields do GHL a partir do de/para configurado pelo
 * escritório. Campo sem id mapeado é ignorado em silêncio: mandar um id
 * inventado faz o GHL rejeitar o contato inteiro.
 */
export function buildCustomFields(
  map: Record<string, string>,
  values: Record<string, string | number | null | undefined>
): GhlCustomField[] {
  const fields: GhlCustomField[] = []
  for (const [key, value] of Object.entries(values)) {
    const fieldId = map[key]
    if (!fieldId || value === null || value === undefined || value === '') continue
    fields.push({ id: fieldId, field_value: value })
  }
  return fields
}

export interface ClientContactInput {
  client: Pick<Client,
    'full_name' | 'email' | 'phone' | 'city' | 'state' | 'address' | 'zip_code' |
    'person_type' | 'status' | 'origin'>
  integration: Pick<GhlIntegration, 'default_tags' | 'custom_field_map'>
  practiceArea?: string | null
  caseStage?: string | null
}

/** Cliente/lead do Law Life -> contato do GHL. */
export function clientToContact({
  client,
  integration,
  practiceArea,
  caseStage,
}: ClientContactInput): GhlContactPayload {
  const { firstName, lastName } = splitName(client.full_name)

  const tags = [
    ...integration.default_tags,
    `status-${client.status}`,
    `tipo-${client.person_type.toLowerCase()}`,
  ]
  if (practiceArea) tags.push(`area-${slug(practiceArea)}`)
  if (caseStage) tags.push(`fase-${slug(caseStage)}`)
  if (client.origin) tags.push(`origem-${slug(client.origin)}`)

  const payload: GhlContactPayload = {
    firstName,
    lastName,
    ...(client.email ? { email: client.email } : {}),
    ...(toE164(client.phone) ? { phone: toE164(client.phone)! } : {}),
    ...(client.address ? { address1: client.address } : {}),
    ...(client.city ? { city: client.city } : {}),
    ...(client.state ? { state: client.state } : {}),
    ...(client.zip_code ? { postalCode: client.zip_code } : {}),
    country: 'BR',
    source: client.origin || 'lawlife',
    // dedup de tag: o GHL guarda tag repetida como entrada nova
    tags: [...new Set(tags)],
  }

  const custom = buildCustomFields(integration.custom_field_map, {
    area_direito: practiceArea ?? null,
    fase_processo: caseStage ?? null,
    tipo_pessoa: client.person_type,
  })
  if (custom.length) payload.customFields = custom

  return payload
}

/** Processo -> oportunidade no pipeline do GHL. */
export function caseToOpportunity(
  legalCase: Pick<Case, 'title' | 'stage' | 'claim_value' | 'case_number' | 'practice_area'>,
  contactId: string,
  integration: Pick<GhlIntegration, 'pipeline_id' | 'stage_map'>
) {
  if (!integration.pipeline_id) return null

  return {
    pipelineId: integration.pipeline_id,
    ...(integration.stage_map[legalCase.stage]
      ? { pipelineStageId: integration.stage_map[legalCase.stage] }
      : {}),
    // o número do CNJ no nome deixa o card do funil rastreável
    name: legalCase.case_number
      ? `${legalCase.title} (${legalCase.case_number})`
      : legalCase.title,
    contactId,
    status: opportunityStatus(legalCase.stage),
    ...(legalCase.claim_value ? { monetaryValue: Number(legalCase.claim_value) } : {}),
    source: `lawlife-${slug(legalCase.practice_area)}`,
  } as const
}

/** Estágio do processo -> status da oportunidade (o GHL só tem 4). */
export function opportunityStatus(stage: string): 'open' | 'won' | 'lost' | 'abandoned' {
  if (stage === 'perdido') return 'lost'
  // "encerrado" fecha ganho: o processo chegou ao fim com o escritório atuando.
  if (stage === 'encerrado') return 'won'
  if (stage === 'prospeccao') return 'open'
  return 'open'
}

export function slug(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
