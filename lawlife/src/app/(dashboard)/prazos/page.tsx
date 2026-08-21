'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarPlus } from 'lucide-react'
import {
  DEADLINE_KIND_LABELS, type Deadline, type DeadlineStatus,
} from '@/types/database'

interface DeadlineRow extends Deadline {
  cases: { title: string; case_number: string | null } | null
}

export default function PrazosPage() {
  const [deadlines, setDeadlines] = useState<DeadlineRow[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<DeadlineStatus | 'todos'>('pendente')
  const supabase = createClient()

  useEffect(() => {
    let alive = true
    void (async () => {
      const rows = await fetchDeadlines(supabase, filter)
      if (!alive) return
      setDeadlines(rows)
      setLoading(false)
    })()
    return () => { alive = false }
  }, [filter]) // eslint-disable-line react-hooks/exhaustive-deps

  async function refresh() {
    setLoading(true)
    setDeadlines(await fetchDeadlines(supabase, filter))
    setLoading(false)
  }

  async function marcarCumprido(id: string) {
    await supabase
      .from('deadlines')
      .update({ status: 'cumprido', completed_at: new Date().toISOString() })
      .eq('id', id)
    refresh()
  }

  const filtros: Array<{ value: DeadlineStatus | 'todos'; label: string }> = [
    { value: 'pendente', label: 'Pendentes' },
    { value: 'cumprido', label: 'Cumpridos' },
    { value: 'adiado', label: 'Adiados' },
    { value: 'todos', label: 'Todos' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Prazos e Agenda</h1>
          <p className="text-muted-foreground">
            Audiencias, prazos processuais e compromissos do escritorio
          </p>
        </div>
        <Button>
          <CalendarPlus className="mr-2 h-4 w-4" />
          Novo Prazo
        </Button>
      </div>

      <div className="flex gap-2">
        {filtros.map((f) => (
          <Button
            key={f.value}
            variant={filter === f.value ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </Button>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{deadlines.length} compromissos</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-12 text-muted-foreground">Carregando...</div>
          ) : deadlines.length === 0 ? (
            <p className="text-center py-12 text-muted-foreground">
              Nenhum compromisso neste filtro.
            </p>
          ) : (
            <ul className="divide-y">
              {deadlines.map((d) => {
                const vencido = d.status === 'pendente' && new Date(d.due_at) < new Date()
                return (
                  <li key={d.id} className="flex items-center justify-between gap-4 py-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-medium truncate">{d.title}</p>
                        {d.is_fatal && <Badge variant="destructive">Fatal</Badge>}
                        {vencido && <Badge variant="destructive">Vencido</Badge>}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {new Date(d.due_at).toLocaleString('pt-BR', {
                          day: '2-digit', month: '2-digit', year: 'numeric',
                          hour: '2-digit', minute: '2-digit',
                        })}
                        {d.cases?.title ? ` · ${d.cases.title}` : ''}
                        {d.location ? ` · ${d.location}` : ''}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge variant="secondary">{DEADLINE_KIND_LABELS[d.kind]}</Badge>
                      {d.status === 'pendente' && (
                        <Button size="sm" variant="outline" onClick={() => marcarCumprido(d.id)}>
                          Cumprir
                        </Button>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

type SupabaseBrowserClient = ReturnType<typeof createClient>

async function fetchDeadlines(
  supabase: SupabaseBrowserClient,
  filter: DeadlineStatus | 'todos'
): Promise<DeadlineRow[]> {
  let query = supabase
    .from('deadlines')
    .select('*, cases(title, case_number)')
    .order('due_at')
    .limit(200)

  if (filter !== 'todos') query = query.eq('status', filter)

  const { data, error } = await query
  if (error || !data) return []
  return data as DeadlineRow[]
}
