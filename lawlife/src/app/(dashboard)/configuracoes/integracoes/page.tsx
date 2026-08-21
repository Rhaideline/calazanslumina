'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card'
import { toast } from 'sonner'
import { AlertCircle, Check, Copy, Loader2, Plug } from 'lucide-react'
import {
  CASE_STAGE_LABELS, type CaseStage, type GhlIntegration, type GhlSyncLogEntry,
} from '@/types/database'

const STAGES = Object.keys(CASE_STAGE_LABELS) as CaseStage[]

/** Campos do Law Life que podem virar custom field no GHL. */
const CUSTOM_FIELDS = [
  { key: 'area_direito', label: 'Area do direito' },
  { key: 'fase_processo', label: 'Fase do processo' },
  { key: 'tipo_pessoa', label: 'Tipo de pessoa (PF/PJ)' },
]

export default function IntegracoesPage() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [tokenHint, setTokenHint] = useState<string | null>(null)
  const [leadFormKey, setLeadFormKey] = useState<string | null>(null)
  const [integration, setIntegration] = useState<Partial<GhlIntegration>>({
    location_id: '',
    pipeline_id: '',
    calendar_id: '',
    stage_map: {},
    custom_field_map: {},
    default_tags: ['lawlife'],
    is_active: true,
    sync_clients: true,
    sync_cases: true,
    sync_deadlines: false,
  })
  const [token, setToken] = useState('')
  const [webhookSecret, setWebhookSecret] = useState('')
  const [logs, setLogs] = useState<GhlSyncLogEntry[]>([])
  const supabase = createClient()

  // Os fetchs ficam fora do componente e devolvem dado puro: o efeito so
  // encosta em state depois de um await, o que evita render em cascata.
  function applyConfig(config: ConfigResponse | null) {
    if (!config) return
    if (config.integration) setIntegration(config.integration)
    setTokenHint(config.tokenHint)
    setLeadFormKey(config.leadFormKey)
  }

  async function reloadConfig() {
    applyConfig(await fetchConfig())
  }

  useEffect(() => {
    let alive = true
    void (async () => {
      const [config, entries] = await Promise.all([
        fetchConfig(),
        fetchLogs(supabase),
      ])
      if (!alive) return
      applyConfig(config)
      setLogs(entries)
      setLoading(false)
    })()
    return () => { alive = false }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function save() {
    if (!integration.location_id?.trim()) {
      toast.error('O Location ID e obrigatorio.')
      return
    }
    setSaving(true)
    try {
      const res = await fetch('/api/ghl/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          locationId: integration.location_id,
          token: token || undefined,
          webhookSecret: webhookSecret || undefined,
          pipelineId: integration.pipeline_id,
          calendarId: integration.calendar_id,
          stageMap: integration.stage_map,
          customFieldMap: integration.custom_field_map,
          defaultTags: integration.default_tags,
          isActive: integration.is_active,
          syncClients: integration.sync_clients,
          syncCases: integration.sync_cases,
          syncDeadlines: integration.sync_deadlines,
        }),
      })
      const json = await res.json()
      if (!res.ok) {
        toast.error(json.error || 'Nao consegui salvar.')
        return
      }
      toast.success('Integracao salva.')
      // o token some do formulario depois de salvo: ele nunca volta do servidor
      setToken('')
      setWebhookSecret('')
      void reloadConfig()
    } catch {
      toast.error('Falha de rede ao salvar.')
    } finally {
      setSaving(false)
    }
  }

  function copy(text: string, what: string) {
    navigator.clipboard.writeText(text)
    toast.success(`${what} copiado.`)
  }

  const origin = typeof window !== 'undefined' ? window.location.origin : ''

  if (loading) {
    return <div className="text-muted-foreground py-12 text-center">Carregando integracao...</div>
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/10">
          <Plug className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">GoHighLevel</h1>
          <p className="text-muted-foreground">
            Conecte a sub-conta do escritorio ao Law Life
          </p>
        </div>
        {integration.last_sync_at && (
          <Badge variant={integration.last_error ? 'destructive' : 'outline'} className="ml-auto">
            {integration.last_error ? 'Ultimo sync falhou' : 'Sincronizando'}
          </Badge>
        )}
      </div>

      {integration.last_error && (
        <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm">
          <AlertCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
          <div>
            <p className="font-medium text-destructive">Ultimo erro do GHL</p>
            <p className="text-muted-foreground">{integration.last_error}</p>
          </div>
        </div>
      )}

      {/* ─── Credenciais ─── */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Credenciais</CardTitle>
          <CardDescription>
            O token e gravado cifrado e nunca mais aparece na tela. Deixe em
            branco para manter o atual.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="locationId">Location ID (sub-conta)</Label>
            <Input
              id="locationId"
              placeholder="MR3yMqtdBa4732pi4ZCw"
              value={integration.location_id ?? ''}
              onChange={(e) => setIntegration({ ...integration, location_id: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="token">
              Private Integration Token
              {tokenHint && (
                <span className="ml-2 text-xs text-muted-foreground font-normal">
                  atual: •••{tokenHint}
                </span>
              )}
            </Label>
            <Input
              id="token"
              type="password"
              autoComplete="off"
              placeholder={tokenHint ? 'Deixe em branco para manter' : 'pit-...'}
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              GHL &rarr; Settings &rarr; Private Integrations. Escopos necessarios:
              contacts.write, opportunities.write e calendars/events.write.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="webhookSecret">Segredo do webhook</Label>
            <Input
              id="webhookSecret"
              type="password"
              autoComplete="off"
              placeholder="Uma frase longa e aleatoria"
              value={webhookSecret}
              onChange={(e) => setWebhookSecret(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Sem este segredo o Law Life recusa todo webhook do GHL. No workflow
              do GHL, mande-o no header <code>x-lawlife-token</code>.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* ─── Funil ─── */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Funil e calendario</CardTitle>
          <CardDescription>
            De/para entre a fase do processo e o estagio do pipeline no GHL.
            Fase sem estagio mapeado gera oportunidade no estagio padrao do funil.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="pipelineId">Pipeline ID</Label>
              <Input
                id="pipelineId"
                value={integration.pipeline_id ?? ''}
                onChange={(e) => setIntegration({ ...integration, pipeline_id: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="calendarId">Calendar ID</Label>
              <Input
                id="calendarId"
                value={integration.calendar_id ?? ''}
                onChange={(e) => setIntegration({ ...integration, calendar_id: e.target.value })}
              />
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            {STAGES.map((stage) => (
              <div key={stage} className="grid grid-cols-[1fr_2fr] items-center gap-3">
                <Label className="text-sm font-normal">{CASE_STAGE_LABELS[stage]}</Label>
                <Input
                  placeholder="id do estagio no GHL"
                  value={integration.stage_map?.[stage] ?? ''}
                  onChange={(e) =>
                    setIntegration({
                      ...integration,
                      stage_map: { ...integration.stage_map, [stage]: e.target.value },
                    })
                  }
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ─── Custom fields ─── */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Campos personalizados</CardTitle>
          <CardDescription>
            Cole o id do custom field do GHL. Campo em branco simplesmente nao e enviado.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {CUSTOM_FIELDS.map((field) => (
            <div key={field.key} className="grid grid-cols-[1fr_2fr] items-center gap-3">
              <Label className="text-sm font-normal">{field.label}</Label>
              <Input
                placeholder="id do custom field"
                value={integration.custom_field_map?.[field.key] ?? ''}
                onChange={(e) =>
                  setIntegration({
                    ...integration,
                    custom_field_map: {
                      ...integration.custom_field_map,
                      [field.key]: e.target.value,
                    },
                  })
                }
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* ─── O que sincroniza ─── */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">O que sincronizar</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ToggleRow
            label="Integracao ativa"
            hint="Desligado, nada sai daqui para o GHL — a configuracao fica guardada."
            checked={integration.is_active ?? true}
            onChange={(v) => setIntegration({ ...integration, is_active: v })}
          />
          <ToggleRow
            label="Clientes e leads -> contatos"
            checked={integration.sync_clients ?? true}
            onChange={(v) => setIntegration({ ...integration, sync_clients: v })}
          />
          <ToggleRow
            label="Processos -> oportunidades"
            checked={integration.sync_cases ?? true}
            onChange={(v) => setIntegration({ ...integration, sync_cases: v })}
          />
          <ToggleRow
            label="Audiencias e reunioes -> calendario"
            hint="Prazo interno do escritorio nunca sobe: o cliente receberia lembrete de algo que nao e dele."
            checked={integration.sync_deadlines ?? false}
            onChange={(v) => setIntegration({ ...integration, sync_deadlines: v })}
          />
        </CardContent>
      </Card>

      {/* ─── Endpoints ─── */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Endpoints</CardTitle>
          <CardDescription>
            Cole no formulario do site e no workflow do GHL.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <EndpointRow
            label="Captacao de leads (POST)"
            value={`${origin}/api/ghl/lead`}
            onCopy={copy}
          />
          <EndpointRow
            label="Webhook do GHL (POST)"
            value={`${origin}/api/ghl/webhook`}
            onCopy={copy}
          />
          {leadFormKey && (
            <EndpointRow
              label="Chave do formulario (campo formKey)"
              value={leadFormKey}
              onCopy={copy}
            />
          )}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={save} disabled={saving}>
          {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Check className="mr-2 h-4 w-4" />}
          Salvar integracao
        </Button>
      </div>

      {/* ─── Log ─── */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Ultimas sincronizacoes</CardTitle>
        </CardHeader>
        <CardContent>
          {logs.length === 0 ? (
            <p className="text-sm text-muted-foreground py-6 text-center">
              Nada sincronizado ainda.
            </p>
          ) : (
            <ul className="divide-y text-sm">
              {logs.map((log) => (
                <li key={log.id} className="flex items-center justify-between py-2 gap-4">
                  <div className="min-w-0">
                    <p className="font-medium">
                      {log.event}{' '}
                      <span className="text-muted-foreground font-normal">
                        ({log.direction === 'outbound' ? 'enviado' : 'recebido'})
                      </span>
                    </p>
                    {log.error && (
                      <p className="text-xs text-destructive truncate">{log.error}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-muted-foreground">
                      {new Date(log.created_at).toLocaleString('pt-BR')}
                    </span>
                    <Badge
                      variant={
                        log.status === 'success' ? 'outline'
                        : log.status === 'skipped' ? 'secondary'
                        : 'destructive'
                      }
                    >
                      {log.status}
                    </Badge>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function ToggleRow({
  label, hint, checked, onChange,
}: {
  label: string
  hint?: string
  checked: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium">{label}</p>
        {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  )
}

function EndpointRow({
  label, value, onCopy,
}: {
  label: string
  value: string
  onCopy: (text: string, what: string) => void
}) {
  return (
    <div className="space-y-1">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      <div className="flex gap-2">
        <Input readOnly value={value} className="font-mono text-xs" />
        <Button variant="outline" size="icon" onClick={() => onCopy(value, label)}>
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

type SupabaseBrowserClient = ReturnType<typeof createClient>

interface ConfigResponse {
  integration: GhlIntegration | null
  tokenHint: string | null
  tokenRotatedAt: string | null
  leadFormKey: string | null
}

async function fetchConfig(): Promise<ConfigResponse | null> {
  try {
    const res = await fetch('/api/ghl/config')
    if (!res.ok) return null
    return (await res.json()) as ConfigResponse
  } catch {
    return null
  }
}

async function fetchLogs(supabase: SupabaseBrowserClient): Promise<GhlSyncLogEntry[]> {
  const { data } = await supabase
    .from('ghl_sync_log')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(15)
  return (data ?? []) as GhlSyncLogEntry[]
}
