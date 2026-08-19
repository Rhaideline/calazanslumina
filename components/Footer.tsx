import Image from 'next/image'
import Link from 'next/link'
import { servicos } from '@/data/servicos'
import { capitaisBR } from '@/data/capitais-br'
import { cidadesBrasil } from '@/data/cidades-brasil'

// Derivado dos datasets que geram as rotas /brasil/[capital] — antes era "488"
// hardcoded e ficou defasado quando o dataset cresceu. Nao deixar virar numero
// fixo de novo.
const totalCidadesBR = capitaisBR.length + cidadesBrasil.length

const cidadesDestaque = [
  'Framingham', 'Marlborough', 'Hudson', 'Worcester', 'Cambridge',
  'Newton', 'Brookline', 'Quincy', 'Somerville', 'Waltham',
]

const capitaisDestaque = [
  'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Brasília', 'Curitiba',
  'Salvador', 'Fortaleza', 'Recife', 'Porto Alegre', 'Goiânia',
]

// Top 20 capitais para bloco SEO de atendimento nacional
const top20Capitais = capitaisBR.slice(0, 20)

const cursosDestaque = [
  { slug: 'chatgpt-para-idosos', nome: 'ChatGPT para Idosos', tag: 'Grátis' },
  { slug: 'ia-chatgpt-completo', nome: 'IA & ChatGPT Completo', tag: 'R$ 9,90' },
  { slug: 'marketing-digital-iniciantes', nome: 'Marketing Digital', tag: 'R$ 9,90' },
  { slug: 'google-meu-negocio-do-zero', nome: 'Google Meu Negócio', tag: 'Grátis' },
  { slug: 'redes-sociais-que-vendem', nome: 'Redes Sociais', tag: 'Grátis' },
  { slug: 'funis-de-vendas-simplificado', nome: 'Funis de Vendas', tag: 'R$ 9,90' },
  { slug: 'ferramentas-digitais-secretarias', nome: 'Ferramentas Digitais', tag: 'Grátis' },
]

const paginasUteis = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre Rhaideline Calazans' },
  { href: '/blog', label: 'Blog de Marketing Digital' },
  { href: '/cursos', label: 'Cursos de Marketing Digital' },
  { href: '/portfolio', label: 'Cases de Sucesso' },
  { href: '/para-agencias', label: 'Para Agências GHL' },
  { href: '/contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white" itemScope itemType="https://schema.org/WPFooter">
      <div className="container-main section-padding">
        {/* Main grid - 6 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">

          {/* Brand */}
          <div className="xl:col-span-2">
            <Image
              src="/logo-calazans-lumina.png"
              alt="Calazans Lumina - Agência de Marketing Digital"
              width={220}
              height={70}
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Agência de marketing digital especializada em brasileiros nos EUA e Brasil. Sites profissionais de alta performance, funis GoHighLevel, CRM com IA no WhatsApp, gestão de redes sociais e Google Business Profile.
            </p>
            <div className="flex gap-4 mb-4">
              <a href="https://www.instagram.com/calazanslumina/" target="_blank" rel="me noopener noreferrer" className="text-white/40 hover:text-brand-mint transition-colors" aria-label="Instagram da Calazans Lumina">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://share.google/n2TRtwjKEMy65uSx7" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-mint transition-colors" aria-label="Google Business Profile">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-brand-mint">Serviços</h3>
            <ul className="space-y-2">
              {servicos.map((s) => (
                <li key={s.slug}><Link href={`/servicos/${s.slug}`} className="text-white/60 hover:text-white text-sm transition-colors">{s.nome}</Link></li>
              ))}
              <li><Link href="/servicos" className="text-brand-mint hover:text-white text-sm transition-colors font-medium">Ver todos →</Link></li>
            </ul>
          </div>

          {/* Cursos */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-brand-mint">Cursos</h3>
            <ul className="space-y-2">
              {cursosDestaque.map((c) => (
                <li key={c.slug} className="flex items-center gap-2">
                  <Link href={`/cursos/${c.slug}`} className="text-white/60 hover:text-white text-sm transition-colors">{c.nome}</Link>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${c.tag === 'Grátis' ? 'bg-green-500/20 text-green-400' : 'bg-brand-mint/20 text-brand-mint'}`}>{c.tag}</span>
                </li>
              ))}
              <li><Link href="/cursos" className="text-brand-mint hover:text-white text-sm transition-colors font-medium">Ver todos →</Link></li>
            </ul>
          </div>

          {/* Cidades */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-brand-mint">Cidades</h3>
            <p className="text-white/70 text-[10px] uppercase tracking-wider mb-2">Massachusetts</p>
            <ul className="space-y-1 mb-3">
              {cidadesDestaque.slice(0, 6).map((c) => (
                <li key={c}><Link href={`/cidades/${c.toLowerCase().replace(/ /g, '-')}`} className="text-white/60 hover:text-white text-sm transition-colors">{c}, MA</Link></li>
              ))}
            </ul>
            <p className="text-white/70 text-[10px] uppercase tracking-wider mb-2">Brasil</p>
            <ul className="space-y-1">
              {capitaisDestaque.slice(0, 5).map((c) => (
                <li key={c}><Link href={`/brasil/${c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-')}`} className="text-white/60 hover:text-white text-sm transition-colors">{c}</Link></li>
              ))}
            </ul>
          </div>

          {/* Páginas + Contato */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-brand-mint">Páginas</h3>
            <ul className="space-y-2 mb-6">
              {paginasUteis.map((p) => (
                <li key={p.href}><Link href={p.href} className="text-white/60 hover:text-white text-sm transition-colors">{p.label}</Link></li>
              ))}
            </ul>
            <h3 className="font-serif text-lg font-bold mb-3 text-brand-mint">Contato</h3>
            <ul className="space-y-2">
              <li><a href="https://wa.me/5531982948067?text=Olá, vim pelo site e quero saber mais sobre os serviços da Calazans Lumina" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">+55 31 98294-8067</a></li>
              <li><a href="mailto:contato@lc.calazanslumina.com.br" className="text-white/60 hover:text-white text-sm transition-colors">contato@lc.calazanslumina.com.br</a></li>
              <li><a href="https://maps.app.goo.gl/umLNmLYMyhbVx4HQ6" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">Framingham, MA — EUA</a></li>
            </ul>
          </div>
        </div>

        {/* SEO-rich bottom section with more internal links */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <p className="text-white/40 text-xs leading-relaxed text-center max-w-4xl mx-auto">
            <Link href="/servicos/sites-landing-pages" className="hover:text-white/70 transition-colors">Sites profissionais</Link>{' · '}
            <Link href="/servicos/funis-automacao-ghl" className="hover:text-white/70 transition-colors">Funis de vendas GoHighLevel</Link>{' · '}
            <Link href="/servicos/crm-ia-whatsapp" className="hover:text-white/70 transition-colors">CRM com IA no WhatsApp</Link>{' · '}
            <Link href="/servicos/gestao-redes-sociais" className="hover:text-white/70 transition-colors">Gestão de redes sociais</Link>{' · '}
            <Link href="/servicos/google-meu-negocio" className="hover:text-white/70 transition-colors">Google Meu Negócio</Link>{' · '}
            <Link href="/para-agencias" className="hover:text-white/70 transition-colors">Sub-contas GHL para empresas</Link>{' · '}
            <Link href="/cursos/ia-chatgpt-completo" className="hover:text-white/70 transition-colors">Curso de IA e ChatGPT</Link>{' · '}
            <Link href="/cursos/marketing-digital-iniciantes" className="hover:text-white/70 transition-colors">Curso de marketing digital</Link>{' · '}
            <Link href="/blog" className="hover:text-white/70 transition-colors">Blog de marketing digital</Link>{' · '}
            <Link href="/sobre" className="hover:text-white/70 transition-colors">Sobre a fundadora</Link>{' · '}
            <Link href="/portfolio" className="hover:text-white/70 transition-colors">Cases de Sucesso</Link>{' · '}
            <Link href="/contato" className="hover:text-white/70 transition-colors">Orçamento gratuito</Link>
          </p>
        </div>

        {/* Atendimento nacional \u2014 top 20 capitais para crawl depth */}
        <div className="border-t border-white/10 pt-6 pb-2 mb-2">
          <h3 className="text-white/70 text-xs uppercase tracking-wider mb-3 text-center">
            Atendemos em mais de {totalCidadesBR} cidades do Brasil
          </h3>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 max-w-5xl mx-auto">
            {top20Capitais.map((c) => (
              <Link
                key={c.slug}
                href={`/brasil/${c.slug}`}
                className="text-white/50 hover:text-brand-mint text-xs transition-colors"
              >
                Marketing Digital em {c.nome}
              </Link>
            ))}
          </div>
        </div>

        {/* Additional city links for SEO */}
        <div className="border-t border-white/10 pt-4 mb-6">
          <p className="text-white/30 text-[11px] leading-relaxed text-center max-w-5xl mx-auto">
            Marketing digital em{' '}
            {[...cidadesDestaque, ...capitaisDestaque.slice(5)].map((c, i) => {
              const slug = c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-')
              const isMA = cidadesDestaque.includes(c)
              return (
                <span key={c}>
                  {i > 0 && ' · '}
                  <Link href={isMA ? `/cidades/${slug}` : `/brasil/${slug}`} className="hover:text-white/50 transition-colors">{c}</Link>
                </span>
              )
            })}
          </p>
        </div>

        {/* Identificacao legal + politicas — exigido por LGPD (art. 9, I e 41)
            para o titular saber QUEM trata seus dados e como falar com quem
            trata. Sem CNPJ por ora: identificacao por nome, cidade e e-mail. */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 max-w-5xl mx-auto">
            <div className="text-white/40 text-xs leading-relaxed">
              <p className="text-white/60 font-medium mb-1">Responsável pelo tratamento de dados</p>
              <p>Rhaideline Calazans — Calazans Lumina</p>
              <p>Framingham, Massachusetts, EUA</p>
              <p>
                <a href="mailto:contato@lc.calazanslumina.com.br" className="hover:text-white/70 transition-colors">
                  contato@lc.calazanslumina.com.br
                </a>
              </p>
            </div>
            <nav aria-label="Políticas e termos" className="text-white/40 text-xs">
              <p className="text-white/60 font-medium mb-1">Legal</p>
              <ul className="space-y-1">
                <li><Link href="/privacidade" className="hover:text-white/70 transition-colors">Política de Privacidade</Link></li>
                <li><Link href="/termos" className="hover:text-white/70 transition-colors">Termos de Uso</Link></li>
                <li><Link href="/cookies" className="hover:text-white/70 transition-colors">Política de Cookies</Link></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-white/70 text-sm">&copy; {new Date().getFullYear()} Calazans Lumina. Todos os direitos reservados.</p>
            <p className="text-white/40 text-xs">
              <span className="text-brand-mint/70">●</span> Conteúdo atualizado em {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
            </p>
          </div>
          <p className="text-white/50 text-xs text-center md:text-right max-w-lg">
            Agência de marketing digital para brasileiros nos EUA e Brasil — Operando sob o Framework CRIA (Conteúdo · Relevância · IA · Automação).
          </p>
        </div>
      </div>
    </footer>
  )
}
