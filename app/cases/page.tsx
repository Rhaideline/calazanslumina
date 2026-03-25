'use client'

import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTAForm from '@/components/CTAForm'
import PortfolioSites from '@/components/PortfolioSites'
import LazyVideo from '@/components/LazyVideo'

const metrics = [
  { valor: '+24.500%', label: 'Impressões', sub: 'RS Development' },
  { valor: '+706%', label: 'Cliques', sub: "Wolf's Siding" },
  { valor: '18', label: 'Leads Orgânicos', sub: "Wolf's (28 dias)" },
  { valor: 'Página 1', label: 'Google', sub: '10+ keywords' },
  { valor: '24/7', label: 'Chatbot IA', sub: 'JH Painting' },
  { valor: '100%', label: 'Orgânico', sub: 'Zero ads' },
]

export default function CasesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Cases de Sucesso' }]} />

      {/* ===== HERO ===== */}
      <section className="relative py-20 md:py-28 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da2a02097df7b.png"
            alt="Cases de Sucesso Calazans Lumina"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark" />
        </div>
        <div className="container-main section-padding relative z-10">
          <ScrollReveal className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Dados reais do Google Search Console</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Cases de <span className="text-brand-mint">Sucesso</span>
            </h1>
            <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-12">
              Sem prints editados. Sem promessas vazias. Cada número aqui veio direto do Google Search Console e do GoHighLevel dos clientes.
            </p>
          </ScrollReveal>

          {/* Metrics bar */}
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {metrics.map((m) => (
                <div key={m.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                  <p className="font-serif text-2xl md:text-3xl font-bold text-brand-mint">{m.valor}</p>
                  <p className="text-white text-xs font-bold uppercase tracking-wider mt-1">{m.label}</p>
                  <p className="text-white/30 text-xs mt-0.5">{m.sub}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CASE 1: WOLF'S SIDING                                        */}
      {/* ============================================================ */}
      <section id="wolfs-siding" className="section-padding bg-white scroll-mt-20">
        <div className="container-main">
          {/* Header */}
          <ScrollReveal className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Siding Contractor</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">SEO</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">GHL</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">Chatbot IA</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark">Wolf&apos;s Siding Inc.</h2>
                <p className="text-brand-dark/40 mt-1">Northborough, MA — wolfs-siding.com</p>
              </div>
              <a href="https://wolfs-siding.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-3">Visitar site →</a>
            </div>
          </ScrollReveal>

          {/* Before/After Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <ScrollReveal>
              <div className="bg-red-50/50 border border-red-100 rounded-2xl p-8">
                <p className="text-red-500 text-xs font-bold uppercase tracking-wider mb-4">❌ Dezembro 2025</p>
                <div className="space-y-4">
                  <div><p className="text-brand-dark/40 text-xs">Impressões</p><p className="font-serif text-3xl font-bold text-brand-dark">14.500</p></div>
                  <div><p className="text-brand-dark/40 text-xs">Cliques</p><p className="font-serif text-3xl font-bold text-brand-dark">16</p></div>
                  <div><p className="text-brand-dark/40 text-xs">Posição média</p><p className="font-serif text-3xl font-bold text-brand-dark">26.8</p></div>
                  <div><p className="text-brand-dark/40 text-xs">Leads via formulário</p><p className="font-serif text-3xl font-bold text-brand-dark">0</p></div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                <p className="text-green-600 text-xs font-bold uppercase tracking-wider mb-4">✅ Março 2026 (28 dias)</p>
                <div className="space-y-4">
                  <div><p className="text-green-600/60 text-xs">Impressões</p><p className="font-serif text-3xl font-bold text-green-700">47.900 <span className="text-sm text-green-500">+230%</span></p></div>
                  <div><p className="text-green-600/60 text-xs">Cliques</p><p className="font-serif text-3xl font-bold text-green-700">129 <span className="text-sm text-green-500">+706%</span></p></div>
                  <div><p className="text-green-600/60 text-xs">Posição média</p><p className="font-serif text-3xl font-bold text-green-700">15.5 <span className="text-sm text-green-500">↑11 posições</span></p></div>
                  <div><p className="text-green-600/60 text-xs">Leads via formulário</p><p className="font-serif text-3xl font-bold text-green-700">18 <span className="text-sm text-green-500">100% orgânico</span></p></div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Keywords no Top 10 */}
          <ScrollReveal className="mb-10">
            <div className="bg-brand-dark rounded-2xl p-8 text-white">
              <h3 className="font-serif text-xl font-bold mb-6 text-center">Keywords na Página 1 do Google</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { kw: 'vinyl siding contractor', pos: '6.5' },
                  { kw: 'vinyl siding installers', pos: '6.7' },
                  { kw: 'vinyl siding company', pos: '7.2' },
                  { kw: 'siding contractors in my area', pos: '7.8' },
                  { kw: 'siding contractors near me', pos: '8.8' },
                  { kw: 'siding repairs', pos: '8.6' },
                  { kw: 'siding companies near me', pos: '9.2' },
                  { kw: 'siding contractors', pos: '9.0' },
                  { kw: 'siding company near me', pos: '9.3' },
                  { kw: 'siding contractor near me', pos: '9.4' },
                ].map((item) => (
                  <div key={item.kw} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <span className="text-white/80 text-sm">&quot;{item.kw}&quot;</span>
                    <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full">#{item.pos}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Screenshots Grid */}
          <ScrollReveal className="mb-10">
            <h3 className="font-serif text-xl font-bold text-brand-dark mb-6">Prints Reais — Site + Search Console</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc22d845716a.png', label: 'Homepage — 800+ páginas' },
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc503d457168.png', label: 'Blog SEO — Guias completos' },
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f13f714ee618fd93ca5.png', label: 'PageSpeed 99/100' },
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035efa006b443.png', label: 'Search Console — 11.8K impressões' },
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc676d463b27.png', label: 'Search Console — 41.1K (3 meses)' },
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1320c035699706b444.png', label: 'PageSpeed 100/100' },
              ].map((img, i) => (
                <div key={i} className="group relative rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/10] relative">
                    <Image src={img.src} alt={img.label} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{img.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* GHL Section */}
          <ScrollReveal>
            <div className="bg-brand-bg border border-gray-100 rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-brand-dark mb-6">GoHighLevel — Automações Implementadas</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: '🤖', title: 'Chatbot IA (GPT 4.1)', desc: 'Qualifica leads 24/7, coleta dados em 6 passos automáticos' },
                  { icon: '📞', title: 'IVR Inteligente', desc: 'Roteamento de chamadas: Connect Call / Voicemail / Calendar' },
                  { icon: '📋', title: 'Pipeline CRM', desc: 'Novo Orçamento → Em Contato → Interessado → Fechou' },
                  { icon: '📱', title: 'Workflow Formulário', desc: 'Form → Create Opportunity → SMS + Email → Follow-up' },
                  { icon: '🎙️', title: 'Voicemail Automático', desc: 'Transcrição → routing por tags → SMS equipe' },
                  { icon: '⭐', title: 'Reputação 5.0', desc: '20+ reviews Google, templates WhatsApp de avaliação' },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-100">
                    <span className="text-2xl">{item.icon}</span>
                    <h4 className="font-bold text-brand-dark mt-2 mb-1 text-sm">{item.title}</h4>
                    <p className="text-brand-dark/50 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CASE 2: RS DEVELOPMENT GROUP                                  */}
      {/* ============================================================ */}
      <section id="rs-development" className="section-padding bg-brand-bg scroll-mt-20">
        <div className="container-main">
          <ScrollReveal className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">General Contractor</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">SEO</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">AEO</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">GEO</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark">RS Development Group</h2>
                <p className="text-brand-dark/40 mt-1">Massachusetts — rs-developmentgroup.com</p>
              </div>
              <a href="https://rs-developmentgroup.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-3">Visitar site →</a>
            </div>
          </ScrollReveal>

          {/* Giant metric */}
          <ScrollReveal className="mb-10">
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-10 text-white text-center">
              <p className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-2">Crescimento de Impressões</p>
              <p className="font-serif text-6xl md:text-8xl font-bold text-white">+24.500%</p>
              <p className="text-blue-200/60 mt-2">De 358 para 88.103 impressões em 4 meses</p>
            </div>
          </ScrollReveal>

          {/* Before/After */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <ScrollReveal>
              <div className="bg-white border border-red-100 rounded-2xl p-8">
                <p className="text-red-500 text-xs font-bold uppercase tracking-wider mb-4">❌ Novembro 2025</p>
                <div className="space-y-4">
                  <div><p className="text-brand-dark/40 text-xs">Impressões/mês</p><p className="font-serif text-3xl font-bold text-brand-dark">358</p></div>
                  <div><p className="text-brand-dark/40 text-xs">Cliques/mês</p><p className="font-serif text-3xl font-bold text-brand-dark">13</p></div>
                  <div><p className="text-brand-dark/40 text-xs">Páginas indexadas</p><p className="font-serif text-3xl font-bold text-brand-dark">1</p></div>
                  <div><p className="text-brand-dark/40 text-xs">Queries com cliques</p><p className="font-serif text-3xl font-bold text-brand-dark">3</p><p className="text-brand-dark/30 text-xs">Todas branded</p></div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-white border-2 border-green-200 rounded-2xl p-8">
                <p className="text-green-600 text-xs font-bold uppercase tracking-wider mb-4">✅ Março 2026 (28 dias)</p>
                <div className="space-y-4">
                  <div><p className="text-green-600/60 text-xs">Impressões/mês</p><p className="font-serif text-3xl font-bold text-green-700">88.103 <span className="text-sm text-green-500">+24.500%</span></p></div>
                  <div><p className="text-green-600/60 text-xs">Cliques/mês</p><p className="font-serif text-3xl font-bold text-green-700">155 <span className="text-sm text-green-500">+1.092%</span></p></div>
                  <div><p className="text-green-600/60 text-xs">Páginas indexadas</p><p className="font-serif text-3xl font-bold text-green-700">100+</p></div>
                  <div><p className="text-green-600/60 text-xs">Leads orgânicos (fev-mar)</p><p className="font-serif text-3xl font-bold text-green-700">8</p><p className="text-green-500 text-xs">100% orgânico</p></div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Top Keywords */}
          <ScrollReveal className="mb-10">
            <div className="bg-brand-dark rounded-2xl p-8 text-white">
              <h3 className="font-serif text-xl font-bold mb-6 text-center">Keywords no Top 10 do Google</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { kw: 'somerville deck contractor', pos: '6.6', imp: '912' },
                  { kw: 'lynn porch builder', pos: '6.1', imp: '421' },
                  { kw: 'somerville deck builder', pos: '6.6', imp: '909' },
                  { kw: 'somerville porch builder', pos: '7.9', imp: '726' },
                  { kw: 'framing contractors', pos: '7.5', imp: '338' },
                  { kw: 'roofing services stoneham', pos: '9.4', imp: '708' },
                  { kw: 'newton porch builder', pos: '8.6', imp: '692' },
                  { kw: 'kitchen remodeling medford', pos: '9.3', imp: '513' },
                ].map((item) => (
                  <div key={item.kw} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <div>
                      <span className="text-white/80 text-sm">&quot;{item.kw}&quot;</span>
                      <span className="text-white/30 text-xs ml-2">{item.imp} imp.</span>
                    </div>
                    <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full">#{item.pos}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Screenshots */}
          <ScrollReveal>
            <h3 className="font-serif text-xl font-bold text-brand-dark mb-6">Prints Reais — Site + Search Console</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da2a02097df7b.png', label: 'Homepage — 600+ páginas' },
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6220c035435705e8cd.png', label: 'Páginas de Serviços' },
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc503d457168.png', label: 'Blog SEO' },
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d624c8da285cc97df7c.png', label: 'Search Console — 25 cliques/semana' },
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc19b9463b26.png', label: 'Crescimento orgânico' },
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3f1355d8bc676d463b27.png', label: 'Performance 3 meses' },
              ].map((img, i) => (
                <div key={i} className="group relative rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/10] relative">
                    <Image src={img.src} alt={img.label} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{img.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CASE 3: JH PAINTING SERVICES                                  */}
      {/* ============================================================ */}
      <section id="jh-painting" className="section-padding bg-white scroll-mt-20">
        <div className="container-main">
          <ScrollReveal className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🇺🇸</span>
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full">Painting Contractor</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">GoHighLevel</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">Chatbot IA</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">IVR</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark">JH Painting Services</h2>
                <p className="text-brand-dark/40 mt-1">Marlborough, MA — jhpaintingservices.com</p>
              </div>
              <a href="https://jhpaintingservices.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-3">Visitar site →</a>
            </div>
          </ScrollReveal>

          {/* Automations grid */}
          <ScrollReveal className="mb-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🤖', title: 'Chatbot IA — GPT 4.1', desc: 'Secretária virtual "Jafet" qualifica leads em 6 passos: tipo de serviço → nome → endereço → telefone → agenda. Modo Auto Pilot 24/7.', badge: 'Auto Pilot' },
                { icon: '📞', title: 'IVR Inteligente', desc: 'Welcome Message → Collect Input → 4 branches: Connect Call (Roger/Ezequias), Voicemail com transcrição, Calendar, ou Loop.', badge: 'Ativo' },
                { icon: '📋', title: 'Pipeline CRM', desc: 'Oportunidades organizadas: Novo Orçamento → Em Contato → Interessado → Orçamento Marcado → Enviado. Movimentação automática.', badge: 'Leads ativos' },
                { icon: '📱', title: 'Workflow Formulário', desc: 'Form Submitted → Create Opportunity → SMS pro cliente + SMS pro dono → Email → Wait → Contact Reply / Time Out.', badge: 'Published' },
                { icon: '🎙️', title: 'Voicemail + Transcrição', desc: 'Transcript Generated → Condition (tags: marketing/voicemail) → Enable DND ou SMS Equipe. Roteamento inteligente.', badge: 'Published' },
                { icon: '⭐', title: 'Reputação 5.0 Google', desc: '20+ reviews reais. Widget de avaliações integrado. Templates WhatsApp: coleta, feedback, pedido de review Google.', badge: '5.0 ⭐' },
              ].map((item, i) => (
                <div key={i} className="bg-brand-bg rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">{item.badge}</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-dark mb-2">{item.title}</h4>
                  <p className="text-brand-dark/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Bot conversation demo */}
          <ScrollReveal className="mb-10">
            <div className="bg-brand-dark rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="font-serif text-xl font-bold mb-6 text-center">Conversa Real do Bot IA</h3>
              <div className="space-y-4">
                <div className="flex justify-end"><div className="bg-blue-600 rounded-2xl rounded-br-sm px-4 py-2 max-w-xs"><p className="text-white text-sm">Hi, I need painting for my house</p></div></div>
                <div className="flex"><div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-2 max-w-xs"><p className="text-white/90 text-sm">Thanks for reaching out! Just to make sure we send the right specialist — would this be for interior painting, exterior painting, or something else?</p></div></div>
                <div className="flex justify-end"><div className="bg-blue-600 rounded-2xl rounded-br-sm px-4 py-2 max-w-xs"><p className="text-white text-sm">INTERIOR</p></div></div>
                <div className="flex"><div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-2 max-w-xs"><p className="text-white/90 text-sm">Great, we&apos;d love to help with your interior painting project! Can I get your full name, please?</p></div></div>
              </div>
              <p className="text-white/30 text-xs text-center mt-6">Bot treinado com FAQ + base de conhecimento do negócio</p>
            </div>
          </ScrollReveal>

          {/* Screenshots */}
          <ScrollReveal>
            <h3 className="font-serif text-xl font-bold text-brand-dark mb-6">Prints Reais — Site + GHL</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d62df9bdfed7506e133.png', label: 'Site — 600+ páginas' },
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b406720c0355e60076365.png', label: 'Bot IA — Qualificação automática' },
                { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b406720c035d914076364.png', label: 'Workflow WhatsApp' },
              ].map((img, i) => (
                <div key={i} className="group relative rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/10] relative">
                    <Image src={img.src} alt={img.label} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{img.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CASE 4: HBM SOLAR + FISIO                                     */}
      {/* ============================================================ */}
      <section className="section-padding bg-brand-bg scroll-mt-20">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4">Mais Cases — Brasil 🇧🇷</h2>
            <p className="text-brand-dark/50 max-w-2xl mx-auto">Automações GoHighLevel para empresas brasileiras</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* HBM Solar */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">☀️</span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-dark">HBM Solar</h3>
                    <p className="text-brand-dark/40 text-sm">Energia Solar — Brasil</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    'Workflow WhatsApp com 3 branches inteligentes',
                    '"Já sou cliente" → Assign to user',
                    '"Quero orçamento" → Conversation AI qualifica',
                    '"Outros assuntos" → Atendente humano',
                    'Chatbot IA treinado para coleta de dados solar',
                    'Follow-up automático + transferência humano',
                    'Tags automáticas + notificação interna',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <p className="text-brand-dark/70 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="relative rounded-xl overflow-hidden border border-gray-200 aspect-[16/10]">
                    <Image src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b406720c035d914076364.png" alt="HBM Solar Workflow" fill className="object-cover" sizes="50vw" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Fisio & Movimento */}
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">💆</span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-dark">Fisio & Movimento</h3>
                    <p className="text-brand-dark/40 text-sm">Clínica de Fisioterapia — Brasil</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    'Assistente virtual IA — secretária profissional 24h',
                    'Personalidade: educada, objetiva, acolhedora',
                    'Template: coleta de avaliação pós-atendimento',
                    'Template: feedback médio (melhoria contínua)',
                    'Template: feedback ruim (recuperação)',
                    'Template: pedido de avaliação Google ⭐',
                    'Automação completa de reputação online',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <p className="text-brand-dark/70 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="relative rounded-xl overflow-hidden border border-gray-200 aspect-[16/10]">
                    <Image src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b410c4c8da2445e99c973.png" alt="Fisio Bot IA" fill className="object-cover" sizes="50vw" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== MORE SITES ===== */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4">Mais Sites Desenvolvidos</h2>
            <p className="text-brand-dark/50 max-w-2xl mx-auto">Todos com SEO otimizado e design de alta performance</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d62df9bdf1a8f06e132.png', nome: 'AM Painter Inc', tipo: 'Painting · MA' },
              { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc3b6f457169.png', nome: 'Mass Painter Pro', tipo: 'Painting · MA' },
              { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6255d8bc756045716b.png', nome: 'Mass HVAC', tipo: 'HVAC · MA' },
              { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699b3d6220c0352e5305e8cc.png', nome: 'Sinmevaço', tipo: 'Sindicato · Brasil' },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group relative rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] relative">
                    <Image src={img.src} alt={img.nome} fill className="object-cover" sizes="25vw" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-bold text-sm">{img.nome}</p>
                    <p className="text-white/60 text-xs">{img.tipo}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VIDEOS ===== */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="heading-2 mb-4">Conteúdo em <span className="text-brand-mint">Vídeo</span></h2>
            <p className="text-white/50">Dicas práticas de marketing digital</p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699c9f81590acb2f32c57fde.mp4', label: 'Marketing Digital na Prática' },
              { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699c9f811001a525e2e45e93.mp4', label: 'Como Atrair Clientes Online' },
              { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699c9f813eba04ab9649d652.mp4', label: 'Avaliações no Google' },
              { src: 'https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699c9f8110bc9c7c8a6841ea.mp4', label: 'Dicas de IA para Negócios' },
            ].map((video, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                  <LazyVideo src={video.src} label={video.label} />
                  <div className="p-4">
                    <p className="text-white font-serif text-lg font-bold">{video.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUOTE ===== */}
      <section className="py-20 bg-white">
        <div className="container-main text-center max-w-4xl">
          <ScrollReveal>
            <div className="w-16 h-[2px] bg-brand-mint mx-auto mb-8" />
            <blockquote className="font-serif text-2xl md:text-4xl font-bold text-brand-dark leading-snug mb-6">
              &ldquo;Cada projeto que entrego é uma parceria. Eu não descanso até o número provar que funcionou.&rdquo;
            </blockquote>
            <p className="text-brand-mint font-medium">Rhaideline Calazans</p>
            <p className="text-brand-dark/30 text-sm">Fundadora, Calazans Lumina</p>
          </ScrollReveal>
        </div>
      </section>

      <PortfolioSites />

      {/* CTA */}
      <section className="section-padding bg-brand-dark text-white">
        <div className="container-main max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="heading-2 mb-4">Quer resultados assim para sua empresa?</h2>
            <p className="text-white/60 text-lg mb-8">
              SEO, AEO, GEO, GoHighLevel, Chatbot IA — tudo configurado e funcionando. 100% orgânico.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/5531982948067?text=Olá! Vi os cases no site e quero resultados assim para minha empresa" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-8 py-4">
                Quero resultados assim
              </a>
              <Link href="/para-agencias" className="border border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-full text-base font-medium transition-colors">
                Sou agência / freelancer
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTAForm />
    </>
  )
}
