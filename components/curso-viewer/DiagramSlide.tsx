'use client'

import type { DiagramSlide as DiagramSlideType } from './types'

interface Props {
  slide: DiagramSlideType
}

function FlowchartDiagram({ data }: { data: Record<string, unknown> }) {
  const steps = (data.steps || []) as string[]
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center">
          <div className={`rounded-xl px-4 py-3 text-center min-w-[100px] ${
            i === 0 ? 'bg-red-500 text-white' :
            i === steps.length - 1 ? 'bg-green-500 text-white' :
            'bg-blue-500 text-white'
          }`}>
            <div className="text-xs font-bold opacity-70 mb-1">Passo {i + 1}</div>
            <div className="text-sm font-semibold">{step}</div>
          </div>
          {i < steps.length - 1 && (
            <svg className="w-6 h-6 text-gray-300 flex-shrink-0 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          )}
        </div>
      ))}
    </div>
  )
}

function MindmapDiagram({ data }: { data: Record<string, unknown> }) {
  const center = (data.center || '') as string
  const branches = (data.branches || []) as string[]
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-purple-500', 'bg-cyan-500']

  return (
    <div className="relative flex flex-col items-center py-4">
      {/* Top branches */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {branches.slice(0, Math.ceil(branches.length / 2)).map((b, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className={`${colors[i]} text-white text-xs font-bold px-4 py-2 rounded-full`}>{b}</div>
            <div className="w-px h-4 bg-gray-300" />
          </div>
        ))}
      </div>

      {/* Center */}
      <div className="bg-brand-dark text-white font-bold px-8 py-4 rounded-2xl text-center text-lg shadow-lg z-10">
        {center}
      </div>

      {/* Bottom branches */}
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {branches.slice(Math.ceil(branches.length / 2)).map((b, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-px h-4 bg-gray-300" />
            <div className={`${colors[(i + Math.ceil(branches.length / 2)) % colors.length]} text-white text-xs font-bold px-4 py-2 rounded-full`}>{b}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FunnelDiagram({ data }: { data: Record<string, unknown> }) {
  const stages = (data.stages || []) as { label: string; desc?: string }[]
  const colors = ['bg-blue-500', 'bg-cyan-500', 'bg-orange-500', 'bg-red-500', 'bg-green-500']

  return (
    <div className="flex flex-col items-center gap-1">
      {stages.map((stage, i) => {
        const widthPct = 100 - (i * (60 / Math.max(stages.length - 1, 1)))
        return (
          <div
            key={i}
            className={`${colors[i % colors.length]} text-white rounded-lg py-3 px-4 text-center transition-all`}
            style={{ width: `${widthPct}%` }}
          >
            <div className="font-bold text-sm">{stage.label}</div>
            {stage.desc && <div className="text-xs opacity-80">{stage.desc}</div>}
          </div>
        )
      })}
      <svg className="w-6 h-6 text-green-500 mt-1" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 16l-6-6h12l-6 6z" />
      </svg>
      <span className="text-xs font-bold text-green-600">RESULTADO</span>
    </div>
  )
}

function ComparisonDiagram({ data }: { data: Record<string, unknown> }) {
  const leftLabel = (data.leftLabel || '') as string
  const rightLabel = (data.rightLabel || '') as string
  const leftItems = (data.leftItems || []) as string[]
  const rightItems = (data.rightItems || []) as string[]

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <div className="bg-red-500 text-white font-bold text-sm py-2 px-4 rounded-lg text-center mb-3">{leftLabel}</div>
        <ul className="space-y-2">
          {leftItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-red-700">
              <span className="text-red-400 mt-0.5">&#x2716;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <div className="bg-green-500 text-white font-bold text-sm py-2 px-4 rounded-lg text-center mb-3">{rightLabel}</div>
        <ul className="space-y-2">
          {rightItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-green-700">
              <span className="text-green-500 mt-0.5">&#x2714;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function StepsDiagram({ data }: { data: Record<string, unknown> }) {
  const steps = (data.steps || []) as string[]

  return (
    <div className="space-y-0">
      {steps.map((step, i) => (
        <div key={i} className="flex items-start gap-4">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
              {i + 1}
            </div>
            {i < steps.length - 1 && <div className="w-0.5 h-8 bg-gray-200" />}
          </div>
          <div className="pt-2 pb-4">
            <p className="text-sm text-brand-dark/80 font-medium">{step}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function MockupDiagram({ data }: { data: Record<string, unknown> }) {
  const url = (data.url || 'https://example.com') as string
  const title = (data.title || 'Pagina') as string
  const elements = (data.elements || []) as { type: string; text: string }[]

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-lg max-w-lg mx-auto">
      {/* Browser bar */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 truncate">{url}</div>
      </div>
      {/* Screen */}
      <div className="bg-white p-4 space-y-3">
        <div className="text-sm font-bold text-gray-800">{title}</div>
        {elements.map((el, i) => {
          if (el.type === 'header') return <div key={i} className="text-lg font-bold text-gray-900">{el.text}</div>
          if (el.type === 'button') return <button key={i} className="bg-brand-dark text-white text-xs font-bold px-4 py-2 rounded-full">{el.text}</button>
          if (el.type === 'input') return <div key={i} className="border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-400 bg-gray-50">{el.text}</div>
          if (el.type === 'chat_user') return <div key={i} className="ml-auto bg-blue-100 text-blue-800 text-xs px-3 py-2 rounded-xl max-w-[70%] w-fit">{el.text}</div>
          if (el.type === 'chat_ai') return <div key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-2 rounded-xl max-w-[70%] w-fit">{el.text}</div>
          return <div key={i} className="text-xs text-gray-600">{el.text}</div>
        })}
      </div>
    </div>
  )
}

function StatsDiagram({ data }: { data: Record<string, unknown> }) {
  const stats = (data.stats || []) as { value: string; label: string }[]
  const colors = ['border-t-red-500', 'border-t-blue-500', 'border-t-green-500', 'border-t-orange-500']
  const textColors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-orange-500']

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((s, i) => (
        <div key={i} className={`bg-white border border-gray-100 ${colors[i % 4]} border-t-4 rounded-xl p-4 text-center shadow-sm`}>
          <div className={`text-2xl font-bold ${textColors[i % 4]}`}>{s.value}</div>
          <div className="text-xs text-gray-500 mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

function BarchartDiagram({ data }: { data: Record<string, unknown> }) {
  const items = (data.items || []) as { label: string; value: number }[]
  const maxVal = Math.max(...items.map(i => i.value), 1)
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-purple-500', 'bg-cyan-500']

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-24 text-xs text-gray-600 text-right flex-shrink-0">{item.label}</div>
          <div className="flex-1 bg-gray-100 rounded-full h-6 overflow-hidden">
            <div
              className={`${colors[i % colors.length]} h-full rounded-full flex items-center justify-end pr-2 transition-all duration-500`}
              style={{ width: `${(item.value / maxVal) * 100}%` }}
            >
              <span className="text-white text-xs font-bold">{item.value}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function IconsDiagram({ data }: { data: Record<string, unknown> }) {
  const items = (data.items || []) as { icon: string; label: string }[]
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-orange-500', 'bg-purple-500', 'bg-cyan-500', 'bg-pink-500', 'bg-teal-500']
  const iconMap: Record<string, string> = {
    instagram: 'IG', facebook: 'FB', tiktok: 'TT', youtube: 'YT',
    linkedin: 'IN', whatsapp: 'WA', email: '@', google: 'G',
    canva: 'Ca', excel: 'Ex', word: 'Wo', zoom: 'Zm',
    chatgpt: 'AI', seo: 'SE', ads: 'Ad', crm: 'CR',
    calendar: 'Ca', drive: 'Dr', meet: 'Mt', teams: 'Te',
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-2">
          <div className={`w-12 h-12 ${colors[i % colors.length]} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
            {iconMap[item.icon] || item.icon?.slice(0, 2).toUpperCase() || (i + 1)}
          </div>
          <span className="text-xs text-gray-600 text-center">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

function PhoneDiagram({ data }: { data: Record<string, unknown> }) {
  const appName = (data.appName || 'App') as string
  const elements = (data.elements || []) as { type: string; text: string }[]

  return (
    <div className="flex justify-center">
      <div className="w-56 border-4 border-gray-800 rounded-[2rem] overflow-hidden shadow-xl bg-white">
        {/* Status bar */}
        <div className="bg-gray-100 px-4 py-1 flex justify-between text-[10px] text-gray-500">
          <span>9:41</span>
          <span>100%</span>
        </div>
        {/* App header */}
        <div className="bg-brand-dark text-white text-center py-2 text-sm font-bold">{appName}</div>
        {/* Content */}
        <div className="p-3 space-y-2 min-h-[200px]">
          {elements.map((el, i) => {
            if (el.type === 'title') return <div key={i} className="text-xs font-bold text-gray-800">{el.text}</div>
            if (el.type === 'bubble_right') return <div key={i} className="ml-auto bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-lg max-w-[80%] w-fit">{el.text}</div>
            if (el.type === 'bubble_left') return <div key={i} className="bg-gray-100 text-gray-700 text-[10px] px-2 py-1 rounded-lg max-w-[80%] w-fit">{el.text}</div>
            if (el.type === 'button') return <button key={i} className="w-full bg-brand-dark text-white text-[10px] font-bold py-1.5 rounded-full">{el.text}</button>
            if (el.type === 'divider') return <div key={i} className="border-t border-gray-200" />
            return <div key={i} className="text-[10px] text-gray-600">{el.text}</div>
          })}
        </div>
        {/* Home bar */}
        <div className="flex justify-center py-2">
          <div className="w-16 h-1 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  )
}

function CalendarDiagram({ data }: { data: Record<string, unknown> }) {
  const days = (data.days || []) as string[]
  const dayNames = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']
  const colors = ['bg-red-50', 'bg-blue-50', 'bg-green-50', 'bg-orange-50', 'bg-purple-50', 'bg-cyan-50', 'bg-gray-50']

  return (
    <div className="grid grid-cols-7 gap-1">
      {dayNames.map((d, i) => (
        <div key={`h-${i}`} className="bg-brand-dark text-white text-center text-[10px] font-bold py-1.5 rounded-t-lg">{d}</div>
      ))}
      {dayNames.map((_, i) => (
        <div key={`c-${i}`} className={`${colors[i]} border border-gray-100 rounded-b-lg p-1.5 min-h-[60px]`}>
          <p className="text-[9px] text-gray-600 leading-tight">{days[i] || ''}</p>
        </div>
      ))}
    </div>
  )
}

export default function DiagramSlide({ slide }: Props) {
  const renderers: Record<string, React.FC<{ data: Record<string, unknown> }>> = {
    flowchart: FlowchartDiagram,
    mindmap: MindmapDiagram,
    funnel: FunnelDiagram,
    comparison: ComparisonDiagram,
    steps: StepsDiagram,
    mockup: MockupDiagram,
    stats: StatsDiagram,
    barchart: BarchartDiagram,
    icons: IconsDiagram,
    phone: PhoneDiagram,
    calendar: CalendarDiagram,
  }

  const Renderer = renderers[slide.diagramType]

  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <span className="text-xs font-medium text-blue-500 uppercase tracking-wide">Diagrama Visual</span>
      </div>

      <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark mb-6 leading-tight">
        {slide.title}
      </h2>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        {Renderer ? <Renderer data={slide.data} /> : <p className="text-gray-500 text-sm">Diagrama nao encontrado</p>}
      </div>

      {slide.caption && (
        <p className="text-xs text-gray-400 text-center mt-3 italic">{slide.caption}</p>
      )}
    </div>
  )
}
