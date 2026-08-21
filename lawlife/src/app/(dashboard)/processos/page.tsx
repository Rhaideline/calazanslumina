'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { FilePlus2, Loader2, RefreshCw, Search } from 'lucide-react'
import { CASE_STAGE_LABELS, type Case, type CaseStage } from '@/types/database'

interface CaseRow extends Case {
  clients: { full_name: string } | null
}

export default function ProcessosPage() {
  const [cases, setCases] = useState<CaseRow[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [syncing, setSyncing] = useState<string | null>(null)
  const supabase = createClient()

  useEffect(() => {
    let alive = true
    void (async () => {
      const rows = await fetchCases(supabase)
      if (!alive) return
      setCases(rows)
      setLoading(false)
    })()
    return () => { alive = false }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function refresh() {
    setLoading(true)
    setCases(await fetchCases(supabase))
    setLoading(false)
  }

  async function syncToGhl(caseId: string) {
    setSyncing(caseId)
    try {
      const res = await fetch('/api/ghl/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entity: 'case', id: caseId }),
      })
      const json = await res.json()

      if (!res.ok) {
        toast.error(json.error || 'Nao consegui enviar ao GHL.')
      } else if (json.skipped) {
        toast.info(`Nao enviado: ${json.reason}`)
      } else {
        toast.success('Oportunidade atualizada no funil do GHL.')
        refresh()
      }
    } catch {
      toast.error('Falha de rede ao falar com o GHL.')
    } finally {
      setSyncing(null)
    }
  }

  const term = search.toLowerCase()
  const filtered = term
    ? cases.filter((c) =>
        c.title.toLowerCase().includes(term) ||
        c.case_number?.includes(search) ||
        c.practice_area.toLowerCase().includes(term) ||
        c.clients?.full_name.toLowerCase().includes(term)
      )
    : cases

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Processos</h1>
          <p className="text-muted-foreground">{cases.length} em acompanhamento</p>
        </div>
        <Button>
          <FilePlus2 className="mr-2 h-4 w-4" />
          Novo Processo
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por titulo, numero CNJ, area ou cliente..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-12 text-muted-foreground">Carregando processos...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {search ? 'Nenhum processo encontrado.' : 'Nenhum processo cadastrado ainda.'}
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Processo</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Area</TableHead>
                  <TableHead>Fase</TableHead>
                  <TableHead>Valor da causa</TableHead>
                  <TableHead>GHL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <p className="font-medium">{item.title}</p>
                      {item.case_number && (
                        <p className="text-xs text-muted-foreground font-mono">
                          {item.case_number}
                        </p>
                      )}
                    </TableCell>
                    <TableCell>{item.clients?.full_name ?? '—'}</TableCell>
                    <TableCell className="capitalize">{item.practice_area}</TableCell>
                    <TableCell>
                      <Badge variant={badgeForStage(item.stage)}>
                        {CASE_STAGE_LABELS[item.stage]}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {item.claim_value
                        ? Number(item.claim_value).toLocaleString('pt-BR', {
                            style: 'currency', currency: 'BRL',
                          })
                        : '—'}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => syncToGhl(item.id)}
                        disabled={syncing === item.id}
                      >
                        {syncing === item.id ? (
                          <Loader2 className="h-3 w-3 animate-spin" />
                        ) : (
                          <RefreshCw className="h-3 w-3" />
                        )}
                        <span className="ml-1 text-xs">
                          {item.ghl_opportunity_id ? 'Atualizar' : 'Enviar'}
                        </span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function badgeForStage(stage: CaseStage): 'default' | 'secondary' | 'destructive' | 'outline' {
  if (stage === 'perdido') return 'destructive'
  if (stage === 'encerrado') return 'outline'
  if (stage === 'prospeccao' || stage === 'consulta') return 'secondary'
  return 'default'
}

type SupabaseBrowserClient = ReturnType<typeof createClient>

async function fetchCases(supabase: SupabaseBrowserClient): Promise<CaseRow[]> {
  // o join traz o nome do cliente: sem ele a tabela mostraria um UUID
  const { data, error } = await supabase
    .from('cases')
    .select('*, clients(full_name)')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(100)

  if (error || !data) return []
  return data as CaseRow[]
}
