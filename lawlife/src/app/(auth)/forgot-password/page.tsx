'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Scale, Loader2, CheckCircle2 } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const supabase = createClient()

  async function handleReset(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/api/auth/callback?next=/configuracoes`,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setSent(true)
    setLoading(false)
  }

  if (sent) {
    return (
      <>
        <div className="flex items-center gap-2 mb-8 lg:hidden">
          <Scale className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">Law Life</span>
        </div>
        <Card>
          <CardContent className="pt-6 text-center space-y-4">
            <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
            <h2 className="text-xl font-semibold">Email enviado!</h2>
            <p className="text-muted-foreground">
              Verifique sua caixa de entrada para redefinir sua senha.
            </p>
            <Link href="/login">
              <Button variant="outline" className="mt-4">
                Voltar ao login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </>
    )
  }

  return (
    <>
      <div className="flex items-center gap-2 mb-8 lg:hidden">
        <Scale className="h-8 w-8 text-primary" />
        <span className="text-2xl font-bold">Law Life</span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Esqueceu a senha?</CardTitle>
          <CardDescription>
            Informe seu email para receber um link de recuperacao.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleReset}>
          <CardContent className="space-y-4">
            {error && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Enviar link de recuperacao
            </Button>
            <Link href="/login" className="text-sm text-primary hover:underline">
              Voltar ao login
            </Link>
          </CardFooter>
        </form>
      </Card>
    </>
  )
}
