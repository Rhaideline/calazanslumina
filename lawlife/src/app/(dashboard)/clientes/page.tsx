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
import { Loader2, Mail, Phone, RefreshCw, Search, UserPlus } from 'lucide-react'
import type { Client, ClientStatus } from '@/types/database'

const STATUS_LABELS: Record<ClientStatus, string> = {
  lead: 'Lead',
  active: 'Ativo',
  inactive: 'Inativo',
  archived: 'Arquivado',
}

export default function ClientesPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [syncing, setSyncing] = useState<string | null>(null)
  const supabase = createClient()

  // A consulta vive fora do componente e nao toca em state. Assim o efeito
  // nao chama setState de forma sincrona (render em cascata) e a resposta
  // que chega depois de sair da tela e descartada.
  useEffect(() => {
    let alive = true
    void (async () => {
      const rows = await fetchClients(supabase)
      if (!alive) return
      setClients(rows)
      setLoading(false)
    })()
    return () => { alive = false }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function refresh() {
    setLoading(true)
    setClients(await fetchClients(supabase))
    setLoading(false)
  }

  /** Reenvio manual para o GHL — usado quando o sync automatico falhou. */
  async function syncToGhl(clientId: string) {
    setSyncing(clientId)
    try {
      const res = await fetch('/api/ghl/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ entity: 'client', id: clientId }),
      })
      const json = await res.json()

      if (!res.ok) {
        toast.error(json.error || 'Nao consegui enviar ao GHL.')
      } else if (json.skipped) {
        toast.info(`Nao enviado: ${json.reason}`)
      } else {
        toast.success('Contato atualizado no GHL.')
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
    ? clients.filter((c) =>
        c.full_name.toLowerCase().includes(term) ||
        c.email?.toLowerCase().includes(term) ||
        c.phone?.includes(search)
      )
    : clients

  const leads = clients.filter((c) => c.status === 'lead').length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Clientes</h1>
          <p className="text-muted-foreground">
            {clients.length} cadastrados · {leads} em captacao
          </p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Novo Cliente
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome, e-mail ou telefone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-12 text-muted-foreground">Carregando clientes...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {search ? 'Nenhum cliente encontrado.' : 'Nenhum cliente cadastrado ainda.'}
              </p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Contato</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Origem</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>GHL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium">{client.full_name}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1 text-sm">
                        {client.phone && (
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Phone className="h-3 w-3" />
                            {client.phone}
                          </span>
                        )}
                        {client.email && (
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Mail className="h-3 w-3" />
                            {client.email}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{client.person_type}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {client.origin || '—'}
                    </TableCell>
                    <TableCell>
                      <Badge variant={client.status === 'active' ? 'default' : 'secondary'}>
                        {STATUS_LABELS[client.status]}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {client.ghl_contact_id ? (
                        <Badge variant="outline" className="text-xs">Sincronizado</Badge>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => syncToGhl(client.id)}
                          disabled={syncing === client.id}
                        >
                          {syncing === client.id ? (
                            <Loader2 className="h-3 w-3 animate-spin" />
                          ) : (
                            <RefreshCw className="h-3 w-3" />
                          )}
                          <span className="ml-1 text-xs">Enviar</span>
                        </Button>
                      )}
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

type SupabaseBrowserClient = ReturnType<typeof createClient>

async function fetchClients(supabase: SupabaseBrowserClient): Promise<Client[]> {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(100)

  if (error || !data) return []
  return data as Client[]
}
