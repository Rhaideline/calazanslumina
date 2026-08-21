/**
 * Cliente HTTP da API v2 do GoHighLevel.
 *
 * Só roda no servidor: recebe o token do escritório já decifrado e nunca
 * deve ser importado por Client Component.
 *
 * Três coisas que a API do GHL faz e que este wrapper trata:
 *  1. exige o header `Version` — sem ele responde 401 sem explicar;
 *  2. devolve 429 com frequência em conta nova (limite por location);
 *  3. às vezes responde 200 com corpo vazio (DELETE, alguns PUT).
 */

const GHL_API = 'https://services.leadconnectorhq.com'
const GHL_API_VERSION = '2021-07-28'
const DEFAULT_TIMEOUT_MS = 10_000
const MAX_RETRIES = 2

export interface GhlResult<T> {
  ok: boolean
  status: number
  data: T | null
  error: string | null
}

export class GhlClient {
  private token: string
  readonly locationId: string

  constructor(token: string, locationId: string) {
    this.token = token
    this.locationId = locationId
  }

  private async request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: string,
    body?: unknown,
    attempt = 0
  ): Promise<GhlResult<T>> {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), DEFAULT_TIMEOUT_MS)

    try {
      const res = await fetch(`${GHL_API}${path}`, {
        method,
        headers: {
          Authorization: `Bearer ${this.token}`,
          Version: GHL_API_VERSION,
          Accept: 'application/json',
          ...(body ? { 'Content-Type': 'application/json' } : {}),
        },
        ...(body ? { body: JSON.stringify(body) } : {}),
        signal: controller.signal,
        cache: 'no-store',
      })

      // 429/5xx: o GHL costuma normalizar em segundos. Uma espera curta
      // resolve mais que devolver erro pro advogado na hora do cadastro.
      if ((res.status === 429 || res.status >= 500) && attempt < MAX_RETRIES) {
        clearTimeout(timer)
        const retryAfter = Number(res.headers.get('retry-after'))
        const waitMs = Number.isFinite(retryAfter) && retryAfter > 0
          ? Math.min(retryAfter * 1000, 5_000)
          : 500 * 2 ** attempt
        await new Promise((r) => setTimeout(r, waitMs))
        return this.request<T>(method, path, body, attempt + 1)
      }

      const text = await res.text()
      const data = text ? (JSON.parse(text) as T) : null

      if (!res.ok) {
        return {
          ok: false,
          status: res.status,
          data,
          error: extractError(data) || `GHL respondeu ${res.status}`,
        }
      }

      return { ok: true, status: res.status, data, error: null }
    } catch (err) {
      const isAbort = err instanceof Error && err.name === 'AbortError'
      return {
        ok: false,
        status: isAbort ? 504 : 0,
        data: null,
        error: isAbort
          ? `GHL nao respondeu em ${DEFAULT_TIMEOUT_MS / 1000}s`
          : err instanceof Error ? err.message : 'erro desconhecido',
      }
    } finally {
      clearTimeout(timer)
    }
  }

  /**
   * Cria ou atualiza o contato. O upsert do GHL casa por email/telefone
   * dentro da location — é o que evita duplicar o contato quando o mesmo
   * cliente preenche o formulário duas vezes.
   */
  upsertContact(payload: GhlContactPayload) {
    return this.request<{ contact: GhlContact; new?: boolean }>(
      'POST',
      '/contacts/upsert',
      { ...payload, locationId: this.locationId }
    )
  }

  getContact(contactId: string) {
    return this.request<{ contact: GhlContact }>('GET', `/contacts/${contactId}`)
  }

  addTags(contactId: string, tags: string[]) {
    return this.request<{ tags: string[] }>('POST', `/contacts/${contactId}/tags`, { tags })
  }

  createOpportunity(payload: GhlOpportunityPayload) {
    return this.request<{ opportunity: GhlOpportunity }>(
      'POST',
      '/opportunities/',
      { ...payload, locationId: this.locationId }
    )
  }

  updateOpportunity(opportunityId: string, payload: Partial<GhlOpportunityPayload>) {
    return this.request<{ opportunity: GhlOpportunity }>(
      'PUT',
      `/opportunities/${opportunityId}`,
      payload
    )
  }

  createAppointment(payload: GhlAppointmentPayload) {
    return this.request<{ id: string }>(
      'POST',
      '/calendars/events/appointments',
      { ...payload, locationId: this.locationId }
    )
  }
}

function extractError(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null
  const obj = data as Record<string, unknown>
  if (typeof obj.message === 'string') return obj.message
  // o GHL às vezes manda message como array de strings de validação
  if (Array.isArray(obj.message)) return obj.message.join('; ')
  if (typeof obj.error === 'string') return obj.error
  return null
}

// ─── Tipos do payload GHL ──────────────────────────────────────────

export interface GhlCustomField {
  id?: string
  key?: string
  field_value?: string | number | string[]
  value?: string | number | string[]
}

export interface GhlContactPayload {
  firstName?: string
  lastName?: string
  name?: string
  email?: string
  phone?: string
  address1?: string
  city?: string
  state?: string
  postalCode?: string
  country?: string
  source?: string
  tags?: string[]
  customFields?: GhlCustomField[]
}

export interface GhlContact {
  id: string
  locationId?: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  tags?: string[]
}

export interface GhlOpportunityPayload {
  pipelineId: string
  pipelineStageId?: string
  name: string
  contactId: string
  status?: 'open' | 'won' | 'lost' | 'abandoned'
  monetaryValue?: number
  source?: string
}

export interface GhlOpportunity {
  id: string
  name?: string
  pipelineId?: string
  pipelineStageId?: string
  status?: string
  monetaryValue?: number
}

export interface GhlAppointmentPayload {
  calendarId: string
  contactId: string
  startTime: string   // ISO 8601 com offset
  endTime: string
  title?: string
  appointmentStatus?: 'new' | 'confirmed' | 'cancelled' | 'showed' | 'noshow'
  address?: string
  ignoreFreeSlotValidation?: boolean
}
