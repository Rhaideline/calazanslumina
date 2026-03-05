import Image from 'next/image'
import Link from 'next/link'
import { servicos } from '@/data/servicos'

const cidadesDestaque = [
  'Framingham', 'Marlborough', 'Hudson', 'Worcester', 'Cambridge',
  'Newton', 'Brookline', 'Quincy', 'Somerville', 'Waltham',
]

const capitaisDestaque = [
  'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Brasília', 'Curitiba',
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Image
              src="https://assets.cdn.filesafe.space/MR3yMqtdBa4732pi4ZCw/media/699cdc6d8ea4c91ee3015cbc.png"
              alt="Calazans Lumina"
              width={220}
              height={70}
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              A melhor versão da sua marca — revelada. Agência de marketing digital para brasileiros nos EUA e Brasil.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/calazanslumina/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-mint transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://share.google/n2TRtwjKEMy65uSx7" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-brand-mint transition-colors" aria-label="Google">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-brand-mint">Serviços</h3>
            <ul className="space-y-2">
              {servicos.map((s) => (
                <li key={s.slug}><Link href={`/servicos/${s.slug}`} className="text-white/60 hover:text-white text-sm transition-colors">{s.nome}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-brand-mint">Cidades</h3>
            <p className="text-white/70 text-xs uppercase tracking-wider mb-2">Massachusetts</p>
            <ul className="space-y-1 mb-4">
              {cidadesDestaque.slice(0, 6).map((c) => (
                <li key={c}><Link href={`/cidades/${c.toLowerCase().replace(/ /g, '-')}`} className="text-white/60 hover:text-white text-sm transition-colors">{c}, MA</Link></li>
              ))}
            </ul>
            <p className="text-white/70 text-xs uppercase tracking-wider mb-2">Brasil</p>
            <ul className="space-y-1">
              {capitaisDestaque.map((c) => (
                <li key={c}><Link href={`/brasil/${c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g, '-')}`} className="text-white/60 hover:text-white text-sm transition-colors">{c}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-brand-mint">Contato</h3>
            <ul className="space-y-3">
              <li><a href="https://wa.me/5531982948067?text=Olá, vim pelo site e quero saber mais sobre os serviços da Calazans Lumina" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>+55 31 98294-8067</a></li>
              <li><a href="https://www.instagram.com/calazanslumina/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"><svg className="w-4 h-4 text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>@calazanslumina</a></li>
              <li><a href="mailto:trafegocalazans@gmail.com" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"><svg className="w-4 h-4 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>trafegocalazans@gmail.com</a></li>
              <li><a href="https://maps.app.goo.gl/umLNmLYMyhbVx4HQ6" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2"><svg className="w-4 h-4 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>Massachusetts, EUA</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">&copy; {new Date().getFullYear()} Calazans Lumina. Todos os direitos reservados.</p>
          <p className="text-white/60 text-xs text-center md:text-right max-w-lg">Agência de marketing digital para brasileiros nos EUA e Brasil — Sites, Funis GHL, CRM com IA, Redes Sociais e Google Business Profile.</p>
        </div>
      </div>
    </footer>
  )
}
