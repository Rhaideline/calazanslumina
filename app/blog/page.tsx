'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts, categoriasBlog } from '@/data/blog'
import ScrollReveal from '@/components/ScrollReveal'

export default function BlogPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>(null)

  const postsFiltrados = categoriaAtiva
    ? blogPosts.filter((p) => p.categoria === categoriaAtiva)
    : blogPosts

  return (
    <>
      <section className="section-padding bg-brand-bg">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <p className="text-brand-mint font-medium mb-2 text-sm uppercase tracking-wider">
              Blog
            </p>
            <h1 className="heading-1 mb-4">
              Conteúdo que <span className="gradient-text">educa e converte</span>
            </h1>
            <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto">
              Dicas práticas, estratégias e insights para empreendedores brasileiros
              que querem dominar o marketing digital nos EUA e no Brasil.
            </p>
          </ScrollReveal>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setCategoriaAtiva(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !categoriaAtiva
                  ? 'bg-brand-mint text-brand-dark'
                  : 'bg-white text-brand-dark/60 hover:bg-gray-100'
              }`}
            >
              Todos
            </button>
            {categoriasBlog.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  categoriaAtiva === cat
                    ? 'bg-brand-mint text-brand-dark'
                    : 'bg-white text-brand-dark/60 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {postsFiltrados.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 100}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="card-premium overflow-hidden p-0 h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.imagem}
                        alt={post.titulo}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-mint/90 text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                          {post.categoria}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-brand-dark/40 text-xs mb-3">
                        <span>{post.dataPublicacao}</span>
                        <span>•</span>
                        <span>{post.tempoLeitura}</span>
                      </div>
                      <h2 className="font-serif text-lg font-bold group-hover:text-brand-mint transition-colors leading-snug mb-3">
                        {post.titulo}
                      </h2>
                      <p className="text-brand-dark/50 text-sm line-clamp-2">
                        {post.resumo}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
