import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://calazanslumina.com.br${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap" aria-label="Breadcrumb">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-white/30">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="text-white/50 hover:text-brand-mint transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-mint font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
