import Link from 'next/link'

interface RelatedLink {
  href: string
  label: string
  description?: string
}

interface RelatedLinksProps {
  title?: string
  links: RelatedLink[]
  variant?: 'card' | 'inline' | 'sidebar'
}

export default function RelatedLinks({ title = 'Conteúdo Relacionado', links, variant = 'card' }: RelatedLinksProps) {
  if (variant === 'inline') {
    return (
      <nav aria-label={title} className="my-8">
        <p className="text-sm text-white/50 mb-2 uppercase tracking-wider">{title}</p>
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-brand-mint hover:text-white text-sm border border-brand-mint/20 rounded-full px-4 py-1.5 transition-colors hover:bg-brand-mint/10">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    )
  }

  if (variant === 'sidebar') {
    return (
      <aside aria-label={title} className="bg-white/5 rounded-xl p-6 border border-white/10">
        <h3 className="font-serif text-lg font-bold text-white mb-4">{title}</h3>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="group block">
                <span className="text-brand-mint group-hover:text-white text-sm font-medium transition-colors">{link.label}</span>
                {link.description && <p className="text-white/40 text-xs mt-0.5">{link.description}</p>}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    )
  }

  return (
    <section aria-label={title} className="my-12">
      <h2 className="font-serif text-2xl font-bold text-white mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-mint/30 rounded-xl p-5 transition-all">
            <span className="text-brand-mint group-hover:text-white font-medium transition-colors">{link.label}</span>
            {link.description && <p className="text-white/50 text-sm mt-1.5">{link.description}</p>}
            <span className="text-brand-mint/60 text-xs mt-2 block group-hover:text-brand-mint transition-colors">Saiba mais →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
