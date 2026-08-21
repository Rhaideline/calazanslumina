// Tipos do dominio Law Life — espelham supabase/migrations/*.sql.
// Mudou o schema? Muda aqui junto, senao o TS mente sobre o banco.

export type PlanTier = 'free' | 'starter' | 'professional' | 'enterprise'

export type FirmRole =
  | 'super_admin'
  | 'firm_admin'
  | 'lawyer'
  | 'paralegal'
  | 'secretary'
  | 'client'

export type PersonType = 'PF' | 'PJ'

export type ClientStatus = 'lead' | 'active' | 'inactive' | 'archived'

export type CaseStage =
  | 'prospeccao'
  | 'consulta'
  | 'contrato'
  | 'distribuido'
  | 'instrucao'
  | 'recurso'
  | 'execucao'
  | 'encerrado'
  | 'perdido'

export type DeadlineKind = 'prazo' | 'audiencia' | 'reuniao' | 'diligencia' | 'tarefa'
export type DeadlineStatus = 'pendente' | 'cumprido' | 'adiado' | 'cancelado'

export interface Firm {
  id: string
  name: string
  cnpj: string | null
  oab_registration: string | null
  oab_state: string | null
  phone: string | null
  email: string | null
  address: string | null
  city: string | null
  state: string | null
  zip_code: string | null
  logo_url: string | null
  plan_tier: PlanTier
  settings: Record<string, unknown>
  lgpd_dpo_contact: string | null
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Profile {
  id: string
  full_name: string | null
  email: string
  avatar_url: string | null
  phone: string | null
  created_at: string
  updated_at: string
}

export interface FirmMember {
  id: string
  firm_id: string
  user_id: string
  role: FirmRole
  practice_areas: string[]
  oab_number: string | null
  oab_state: string | null
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Client {
  id: string
  firm_id: string
  full_name: string
  person_type: PersonType
  birth_date: string | null
  phone: string | null
  email: string | null
  address: string | null
  city: string | null
  state: string | null
  zip_code: string | null
  status: ClientStatus
  origin: string | null
  notes: string | null
  is_active: boolean
  ghl_contact_id: string | null
  ghl_synced_at: string | null
  created_at: string
  updated_at: string
}

export interface Case {
  id: string
  firm_id: string
  client_id: string
  responsible_id: string | null
  case_number: string | null
  title: string
  practice_area: string
  court: string | null
  jurisdiction: string | null
  stage: CaseStage
  claim_value: number | null
  fee_agreement: Record<string, unknown>
  opened_at: string | null
  closed_at: string | null
  notes: string | null
  is_active: boolean
  ghl_opportunity_id: string | null
  ghl_synced_at: string | null
  created_at: string
  updated_at: string
}

export interface Deadline {
  id: string
  firm_id: string
  case_id: string | null
  client_id: string | null
  responsible_id: string | null
  title: string
  kind: DeadlineKind
  is_fatal: boolean
  due_at: string
  location: string | null
  status: DeadlineStatus
  completed_at: string | null
  notes: string | null
  ghl_event_id: string | null
  ghl_synced_at: string | null
  created_at: string
  updated_at: string
}

export interface GhlIntegration {
  id: string
  firm_id: string
  location_id: string
  pipeline_id: string | null
  calendar_id: string | null
  stage_map: Record<string, string>
  custom_field_map: Record<string, string>
  default_tags: string[]
  is_active: boolean
  sync_clients: boolean
  sync_cases: boolean
  sync_deadlines: boolean
  last_sync_at: string | null
  last_error: string | null
  created_at: string
  updated_at: string
}

export interface GhlSyncLogEntry {
  id: string
  firm_id: string | null
  direction: 'outbound' | 'inbound'
  entity_type: 'client' | 'case' | 'deadline' | 'lead'
  entity_id: string | null
  ghl_id: string | null
  event: string
  status: 'success' | 'error' | 'skipped'
  http_status: number | null
  error: string | null
  payload: Record<string, unknown> | null
  created_at: string
}

/** Rotulos em pt-BR — usados na sidebar, tabelas e no de/para do GHL. */
export const CASE_STAGE_LABELS: Record<CaseStage, string> = {
  prospeccao: 'Prospeccao',
  consulta: 'Consulta',
  contrato: 'Contrato assinado',
  distribuido: 'Distribuido',
  instrucao: 'Instrucao',
  recurso: 'Recurso',
  execucao: 'Execucao',
  encerrado: 'Encerrado',
  perdido: 'Perdido',
}

export const DEADLINE_KIND_LABELS: Record<DeadlineKind, string> = {
  prazo: 'Prazo',
  audiencia: 'Audiencia',
  reuniao: 'Reuniao',
  diligencia: 'Diligencia',
  tarefa: 'Tarefa',
}

export const FIRM_ROLE_LABELS: Record<FirmRole, string> = {
  super_admin: 'Super Admin',
  firm_admin: 'Administrador',
  lawyer: 'Advogado(a)',
  paralegal: 'Paralegal',
  secretary: 'Secretaria',
  client: 'Cliente',
}

/** Areas de atuacao mais comuns — vira tag no GHL e filtro no funil. */
export const PRACTICE_AREAS = [
  'trabalhista',
  'previdenciario',
  'civel',
  'familia',
  'criminal',
  'consumidor',
  'tributario',
  'empresarial',
  'imobiliario',
  'administrativo',
] as const

export type PracticeArea = (typeof PRACTICE_AREAS)[number]
