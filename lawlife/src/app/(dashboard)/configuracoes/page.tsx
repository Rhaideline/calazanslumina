'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card'
import { toast } from 'sonner'
import { Check, Loader2, Plug } from 'lucide-react'
import { FIRM_ROLE_LABELS, type Firm } from '@/types/database'

export default function ConfiguracoesPage() {
  const { profile, firm, membership, loading } = useAuth()
  const isAdmin = membership?.role === 'firm_admin' || membership?.role === 'super_admin'

  if (loading) {
    return <div className="text-muted-foreground py-12 text-center">Carregando...</div>
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold">Configuracoes</h1>
        <p className="text-muted-foreground">Dados do escritorio e da sua conta</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Sua conta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p><span className="text-muted-foreground">Nome:</span> {profile?.full_name ?? '—'}</p>
          <p><span className="text-muted-foreground">E-mail:</span> {profile?.email ?? '—'}</p>
          <p className="flex items-center gap-2">
            <span className="text-muted-foreground">Papel:</span>
            {membership && (
              <Badge variant="secondary">{FIRM_ROLE_LABELS[membership.role]}</Badge>
            )}
          </p>
          {membership?.oab_number && (
            <p>
              <span className="text-muted-foreground">OAB:</span>{' '}
              {membership.oab_number}{membership.oab_state ? `/${membership.oab_state}` : ''}
            </p>
          )}
        </CardContent>
      </Card>

      {firm && <FirmCard key={firm.id} firm={firm} isAdmin={isAdmin} />}

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Integracoes</CardTitle>
          <CardDescription>Conecte a sub-conta do GoHighLevel</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/configuracoes/integracoes">
            <Button variant="outline">
              <Plug className="mr-2 h-4 w-4" />
              Configurar GoHighLevel
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

/**
 * Card dos dados do escritorio.
 *
 * Componente separado e com `key={firm.id}`: o estado do formulario nasce
 * do proprio `firm` na primeira renderizacao, entao nao existe efeito
 * copiando prop para state (nem o render extra que isso custa). Trocou o
 * escritorio, a key troca e o formulario remonta preenchido.
 */
function FirmCard({ firm, isAdmin }: { firm: Firm; isAdmin: boolean }) {
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    name: firm.name ?? '',
    cnpj: firm.cnpj ?? '',
    oab_registration: firm.oab_registration ?? '',
    phone: firm.phone ?? '',
    email: firm.email ?? '',
    city: firm.city ?? '',
    state: firm.state ?? '',
    lgpd_dpo_contact: firm.lgpd_dpo_contact ?? '',
  })
  const supabase = createClient()

  async function save() {
    setSaving(true)
    // campo vazio vira null: string vazia quebraria o UNIQUE do cnpj no
    // segundo escritorio que salvasse sem preencher
    const { error } = await supabase
      .from('firms')
      .update({
        name: form.name,
        cnpj: form.cnpj || null,
        oab_registration: form.oab_registration || null,
        phone: form.phone || null,
        email: form.email || null,
        city: form.city || null,
        state: form.state ? form.state.toUpperCase().slice(0, 2) : null,
        lgpd_dpo_contact: form.lgpd_dpo_contact || null,
      })
      .eq('id', firm.id)

    setSaving(false)
    if (error) {
      toast.error('Nao consegui salvar os dados do escritorio.')
      return
    }
    toast.success('Dados atualizados.')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Escritorio</CardTitle>
        <CardDescription>
          {isAdmin
            ? 'Somente administradores podem alterar estes dados.'
            : 'Apenas leitura — peca a um administrador para alterar.'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field id="name" label="Nome" value={form.name} disabled={!isAdmin}
            onChange={(v) => setForm({ ...form, name: v })} />
          <Field id="cnpj" label="CNPJ" value={form.cnpj} disabled={!isAdmin}
            onChange={(v) => setForm({ ...form, cnpj: v })} />
          <Field id="oab" label="Registro OAB da sociedade" value={form.oab_registration}
            disabled={!isAdmin} onChange={(v) => setForm({ ...form, oab_registration: v })} />
          <Field id="phone" label="Telefone" value={form.phone} disabled={!isAdmin}
            onChange={(v) => setForm({ ...form, phone: v })} />
          <Field id="email" label="E-mail" value={form.email} disabled={!isAdmin}
            onChange={(v) => setForm({ ...form, email: v })} />
          <Field id="city" label="Cidade" value={form.city} disabled={!isAdmin}
            onChange={(v) => setForm({ ...form, city: v })} />
          <Field id="state" label="UF" value={form.state} disabled={!isAdmin}
            onChange={(v) => setForm({ ...form, state: v.toUpperCase().slice(0, 2) })} />
          <Field id="dpo" label="Contato do DPO (LGPD)" value={form.lgpd_dpo_contact}
            disabled={!isAdmin} onChange={(v) => setForm({ ...form, lgpd_dpo_contact: v })} />
        </div>

        {isAdmin && (
          <div className="flex justify-end">
            <Button onClick={save} disabled={saving}>
              {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Check className="mr-2 h-4 w-4" />}
              Salvar
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function Field({
  id, label, value, onChange, disabled,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} value={value} disabled={disabled}
        onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}
