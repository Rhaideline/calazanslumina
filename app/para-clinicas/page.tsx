'use client'

import { useState } from 'react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { CTAForm } from '@/components/cta-form'
import { Check, X, ArrowRight, Zap, Users, Calendar, BarChart3, Lock, Cloud, Smartphone } from 'lucide-react'

export default function ParaClinicasPage() {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'premium'>('free')

  const features = {
    free: [
      { name: 'Até 50 pacientes', included: true },
      { name: 'Agendamento básico', included: true },
      { name: 'Prontuário digital', included: true },
      { name: 'Relatórios simples', included: true },
      { name: 'Suporte por email', included: true },
      { name: 'Múltiplos médicos', included: false },
      { name: 'Telemedicina', included: false },
      { name: 'Integração com WhatsApp', included: false },
      { name: 'Relatórios avançados', included: false },
      { name: 'Suporte prioritário', included: false },
    ],
    premium: [
      { name: 'Pacientes ilimitados', included: true },
      { name: 'Agendamento avançado', included: true },
      { name: 'Prontuário digital completo', included: true },
      { name: 'Relatórios avançados', included: true },
      { name: 'Suporte prioritário 24/7', included: true },
      { name: 'Múltiplos médicos', included: true },
      { name: 'Telemedicina integrada', included: true },
      { name: 'Integração com WhatsApp', included: true },
      { name: 'Análise de dados em tempo real', included: true },
      { name: 'Customização da marca', included: true },
    ],
  }

  const benefits = [
    {
      icon: Calendar,
      title: 'Agendamento Inteligente',
      description: 'Seus pacientes agendam 24/7. Você controla a disponibilidade.',
    },
    {
      icon: Users,
      title: 'Gestão de Pacientes',
      description: 'Prontuário digital, histórico completo e comunicação centralizada.',
    },
    {
      icon: Zap,
      title: 'Automação de Fluxos',
      description: 'Lembretes automáticos, confirmações e follow-ups via WhatsApp.',
    },
    {
      icon: BarChart3,
      title: 'Relatórios em Tempo Real',
      description: 'Veja receita, pacientes, consultas e tendências em um dashboard.',
    },
    {
      icon: Lock,
      title: 'Segurança LGPD',
      description: 'Seus dados e dos pacientes protegidos com criptografia de ponta a ponta.',
    },
    {
      icon: Cloud,
      title: 'Backup Automático',
      description: 'Seus dados sempre seguros na nuvem, sem perda de informações.',
    },
  ]

  const testimonials = [
    {
      name: 'Dr. Carlos Silva',
      clinic: 'Clínica Silva Cardiologia',
      text: 'Aumentamos 40% de agendamentos usando o sistema. Nossos pacientes adoram a facilidade.',
      image: '👨‍⚕️',
    },
    {
      name: 'Dra. Ana Costa',
      clinic: 'Centro Médico Costa',
      text: 'Economizamos 10 horas por semana com automação. Agora focamos no que importa: cuidar dos pacientes.',
      image: '👩‍⚕️',
    },
    {
      name: 'Dr. Roberto Mendes',
      clinic: 'Clínica Geral Mendes',
      text: 'O prontuário digital nos permitiu oferecer melhor atendimento. Recomendo muito!',
      image: '👨‍⚕️',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-surface">
      {/* Hero */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                ✨ Solução Completa para Clínicas
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 leading-tight">
                Sua Clínica no <span className="text-primary">Século XXI</span>
              </h1>
              <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
                Agendamento online, prontuário digital, telemedicina e automação. Tudo em uma plataforma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
                  Começar Grátis <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 border border-border rounded-lg font-semibold hover:bg-surface transition">
                  Ver Demo
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-3 gap-4 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-muted text-sm">Clínicas ativas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">50k+</p>
                <p className="text-muted text-sm">Pacientes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">4.9★</p>
                <p className="text-muted text-sm">Avaliação média</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-surface/50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              Por que escolher o MedSaaS?
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition">
                  <benefit.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center text-foreground mb-4">
              Planos Simples e Transparentes
            </h2>
            <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
              Escolha o plano que melhor se adequa ao seu consultório. Sem contratos, cancele quando quiser.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <ScrollReveal delay={0.1}>
              <div
                className={`rounded-xl border-2 p-8 transition cursor-pointer ${
                  selectedPlan === 'free'
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-background hover:border-primary/50'
                }`}
                onClick={() => setSelectedPlan('free')}
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">Plano Free</h3>
                <p className="text-muted mb-6">Perfeito para começar</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">R$ 0</span>
                  <span className="text-muted">/mês</span>
                </div>
                <button className="w-full py-3 rounded-lg bg-background border border-border text-foreground font-semibold hover:bg-surface transition mb-8">
                  Começar Grátis
                </button>

                <div className="space-y-3">
                  {features.free.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-success flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted line-through'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Premium Plan */}
            <ScrollReveal delay={0.2}>
              <div
                className={`rounded-xl border-2 p-8 transition cursor-pointer relative ${
                  selectedPlan === 'premium'
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-background hover:border-primary/50'
                }`}
                onClick={() => setSelectedPlan('premium')}
              >
                <div className="absolute -top-4 left-6 bg-primary text-background px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Plano Premium</h3>
                <p className="text-muted mb-6">Para clínicas em crescimento</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">R$ 199</span>
                  <span className="text-muted">/mês</span>
                </div>
                <button className="w-full py-3 rounded-lg bg-primary text-background font-semibold hover:bg-primary/90 transition mb-8">
                  Começar Teste Grátis
                </button>

                <div className="space-y-3">
                  {features.premium.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-surface/50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              Confiem em nós
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div className="p-6 rounded-xl bg-background border border-border">
                  <p className="text-muted mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{testimonial.image}</span>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted">{testimonial.clinic}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-12 text-center text-background">
              <h2 className="text-4xl font-bold mb-4">Pronto para transformar sua clínica?</h2>
              <p className="text-lg mb-8 opacity-90">
                Comece grátis. Sem cartão de crédito. Sem compromisso.
              </p>
              <button className="px-8 py-4 bg-background text-primary rounded-lg font-semibold hover:bg-background/90 transition">
                Começar Agora
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-surface/50">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center text-foreground mb-16">
              Perguntas Frequentes
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                q: 'Como funciona o período de teste?',
                a: 'Você tem 30 dias grátis para testar todas as funcionalidades do plano Premium. Sem necessidade de cartão de crédito.',
              },
              {
                q: 'Posso migrar do plano Free para Premium?',
                a: 'Sim! Você pode fazer upgrade a qualquer momento. Seus dados são preservados e você paga apenas a diferença.',
              },
              {
                q: 'Meus dados estão seguros?',
                a: 'Sim. Utilizamos criptografia de ponta a ponta, backup automático e estamos em conformidade com a LGPD.',
              },
              {
                q: 'Qual é o suporte oferecido?',
                a: 'Plano Free: suporte por email. Premium: suporte prioritário 24/7 via chat, email e telefone.',
              },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={0.1 * i}>
                <div className="p-6 rounded-xl bg-background border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
