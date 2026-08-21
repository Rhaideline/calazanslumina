'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'
import { createClient } from '@/lib/supabase/client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, CalendarClock, Gavel, Users } from 'lucide-react'
import type { Deadline } from '@/types/database'

interface Counters {
  clientes: number
  leads: number
  processos: number
  prazosSemana: number
  prazosFatais: number
}

export default function DashboardPage() {
  const { profile, loading: authLoading } = useAuth()
  const [counters, setCounters] = useState<Counters | null>(null)
  const [proximos, setProximos] = useState<Deadline[]>([])
  const supabase = createClient()

  useEffect(() => {
    async function load() {
      const agora = new Date()
      const em7dias = new Date(agora.getTime() + 7 * 24 * 60 * 60 * 1000)

      // head: true + count: 'exact' traz só o número, sem baixar as linhas
      const [clientes, leads, processos, prazosSemana, fatais, proximosPrazos] =
        await Promise.all([
          supabase.from('clients').select('id', { count: 'exact', head: true })
            .eq('status', 'active'),
          supabase.from('clients').select('id', { count: 'exact', head: true })
            .eq('status', 'lead'),
          supabase.from('cases').select('id', { count: 'exact', head: true })
            .eq('is_active', true).not('stage', 'in', '(encerrado,perdido)'),
          supabase.from('deadlines').select('id', { count: 'exact', head: true })
            .eq('status', 'pendente')
            .gte('due_at', agora.toISOString())
            .lte('due_at', em7dias.toISOString()),
          supabase.from('deadlines').select('id', { count: 'exact', head: true })
            .eq('status', 'pendente').eq('is_fatal', true)
            .gte('due_at', agora.toISOString()),
          supabase.from('deadlines').select('*')
            .eq('status', 'pendente')
            .gte('due_at', agora.toISOString())
            .order('due_at').limit(8),
        ])

      setCounters({
        clientes: clientes.count ?? 0,
        leads: leads.count ?? 0,
        processos: processos.count ?? 0,
        prazosSemana: prazosSemana.count ?? 0,
        prazosFatais: fatais.count ?? 0,
      })
      setProximos((proximosPrazos.data ?? []) as Deadline[])
    }

    load()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (authLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-pulse text-muted-foreground">Carregando...</div>
      </div>
    )
  }

  const stats = [
    {
      title: 'Prazos em 7 dias', value: counters?.prazosSemana ?? '—',
      description: 'Pendentes na semana', icon: CalendarClock,
      color: 'text-primary', bgColor: 'bg-primary/10', href: '/prazos',
    },
    {
      title: 'Prazos fatais', value: counters?.prazosFatais ?? '—',
      description: 'Perder = preclusao', icon: AlertTriangle,
      color: 'text-destructive', bgColor: 'bg-destructive/10', href: '/prazos',
    },
    {
      title: 'Processos ativos', value: counters?.processos ?? '—',
      description: 'Fora encerrados e perdidos', icon: Gavel,
      color: 'text-chart-2', bgColor: 'bg-chart-2/10', href: '/processos',
    },
    {
      title: 'Clientes / Leads', value: `${counters?.clientes ?? '—'} / ${counters?.leads ?? '—'}`,
      description: 'Ativos e em captacao', icon: Users,
      color: 'text-accent', bgColor: 'bg-accent/10', href: '/clientes',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">
          Bem-vindo(a), {profile?.full_name?.split(' ')[0] || 'Doutor(a)'}!
        </h1>
        <p className="text-muted-foreground">O que o escritorio tem pela frente.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="h-full hover:border-primary/50 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Proximos compromissos</CardTitle>
        </CardHeader>
        <CardContent>
          {proximos.length === 0 ? (
            <p className="text-sm text-muted-foreground py-6 text-center">
              Nenhum prazo pendente cadastrado.
            </p>
          ) : (
            <ul className="divide-y">
              {proximos.map((d) => (
                <li key={d.id} className="flex items-center justify-between py-3">
                  <div className="min-w-0">
                    <p className="font-medium truncate">{d.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(d.due_at).toLocaleString('pt-BR', {
                        day: '2-digit', month: '2-digit', year: 'numeric',
                        hour: '2-digit', minute: '2-digit',
                      })}
                      {d.location ? ` · ${d.location}` : ''}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {d.is_fatal && <Badge variant="destructive">Fatal</Badge>}
                    <Badge variant="secondary">{d.kind}</Badge>
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
