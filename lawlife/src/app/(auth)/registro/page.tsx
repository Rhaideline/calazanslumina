'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Scale, Loader2 } from 'lucide-react'

export default function RegistroPage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Step 1: User data
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // Passo 2: dados do escritorio
  const [firmName, setFirmName] = useState('')
  const [firmPhone, setFirmPhone] = useState('')
  const [firmCity, setFirmCity] = useState('')
  const [firmState, setFirmState] = useState('')
  const [oabNumber, setOabNumber] = useState('')

  const router = useRouter()
  const supabase = createClient()

  async function handleStep1(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('As senhas nao coincidem.')
      return
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.')
      return
    }

    setStep(2)
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // 1. Create user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (authError) throw authError
      if (!authData.user) throw new Error('Erro ao criar conta.')

      // 2. Cria o escritorio
      const { data: firm, error: firmError } = await supabase
        .from('firms')
        .insert({
          name: firmName,
          phone: firmPhone || null,
          city: firmCity || null,
          state: firmState || null,
          email: email,
        })
        .select()
        .single()

      if (firmError) throw firmError

      // 3. Vincula quem criou como administrador do escritorio
      const { error: memberError } = await supabase
        .from('firm_members')
        .insert({
          firm_id: firm.id,
          user_id: authData.user.id,
          role: 'firm_admin',
          oab_number: oabNumber || null,
          oab_state: firmState || null,
        })

      if (memberError) throw memberError

      router.push('/dashboard')
      router.refresh()
    } catch (err: unknown) {
      let message = 'Erro ao criar conta.'
      if (err && typeof err === 'object' && 'message' in err) {
        message = String((err as { message: string }).message)
      }
      if (err && typeof err === 'object' && 'code' in err) {
        message += ` (${(err as { code: string }).code})`
      }
      console.error('Registration error:', err)
      setError(message)
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex items-center gap-2 mb-8 lg:hidden">
        <Scale className="h-8 w-8 text-primary" />
        <span className="text-2xl font-bold">Law Life</span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {step === 1 ? 'Criar Conta' : 'Dados do Escritorio'}
          </CardTitle>
          <CardDescription>
            {step === 1
              ? 'Preencha seus dados para comecar.'
              : 'Configure seu escritorio para comecar a usar.'}
          </CardDescription>
          <div className="flex gap-2 mt-2">
            <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
          </div>
        </CardHeader>

        {step === 1 ? (
          <form onSubmit={handleStep1}>
            <CardContent className="space-y-4">
              {error && (
                <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="fullName">Nome Completo</Label>
                <Input
                  id="fullName"
                  placeholder="Dra. Ana Souza"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ana@escritorio.adv.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Minimo 6 caracteres"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Repita a senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full">
                Proximo
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Ja tem conta?{' '}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Fazer login
                </Link>
              </p>
            </CardFooter>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <CardContent className="space-y-4">
              {error && (
                <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="firmName">Nome do Escritorio</Label>
                <Input
                  id="firmName"
                  placeholder="Souza & Advogados Associados"
                  value={firmName}
                  onChange={(e) => setFirmName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="oabNumber">OAB (opcional)</Label>
                <Input
                  id="oabNumber"
                  placeholder="12345"
                  value={oabNumber}
                  onChange={(e) => setOabNumber(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="firmPhone">Telefone</Label>
                <Input
                  id="firmPhone"
                  placeholder="(31) 99999-9999"
                  value={firmPhone}
                  onChange={(e) => setFirmPhone(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firmCity">Cidade</Label>
                  <Input
                    id="firmCity"
                    placeholder="Belo Horizonte"
                    value={firmCity}
                    onChange={(e) => setFirmCity(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firmState">UF</Label>
                  <Input
                    id="firmState"
                    placeholder="MG"
                    maxLength={2}
                    value={firmState}
                    onChange={(e) => setFirmState(e.target.value.toUpperCase())}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <div className="flex gap-3 w-full">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={() => setStep(1)}
                >
                  Voltar
                </Button>
                <Button type="submit" className="flex-1" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Criar Conta
                </Button>
              </div>
            </CardFooter>
          </form>
        )}
      </Card>
    </>
  )
}
