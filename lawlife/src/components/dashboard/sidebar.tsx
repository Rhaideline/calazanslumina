'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import {
  Scale,
  LayoutDashboard,
  CalendarClock,
  Users,
  Gavel,
  Settings,
  ChevronLeft,
  ChevronRight,
  FileText,
  DollarSign,
  Plug,
  BarChart3,
} from 'lucide-react'

const navigation = [
  {
    label: 'Principal',
    items: [
      { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
      { name: 'Prazos e Agenda', href: '/prazos', icon: CalendarClock },
      { name: 'Clientes', href: '/clientes', icon: Users },
      { name: 'Processos', href: '/processos', icon: Gavel },
    ],
  },
  {
    label: 'Juridico',
    items: [
      { name: 'Documentos', href: '/documentos', icon: FileText },
      { name: 'Financeiro', href: '/financeiro', icon: DollarSign },
    ],
  },
  {
    label: 'Gestao',
    items: [
      { name: 'Relatorios', href: '/relatorios', icon: BarChart3 },
      { name: 'Integracoes', href: '/configuracoes/integracoes', icon: Plug },
      { name: 'Configuracoes', href: '/configuracoes', icon: Settings },
    ],
  },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        'h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border flex flex-col transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="h-16 flex items-center gap-3 px-4 border-b border-sidebar-border">
        <Scale className="h-8 w-8 text-sidebar-primary shrink-0" />
        {!collapsed && (
          <span className="text-lg font-bold text-sidebar-foreground">Law Life</span>
        )}
      </div>

      <ScrollArea className="flex-1 py-4">
        {navigation.map((section) => (
          <div key={section.label} className="mb-4">
            {!collapsed && (
              <p className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50">
                {section.label}
              </p>
            )}
            {collapsed && <Separator className="mx-3 mb-2 bg-sidebar-border" />}
            {section.items.map((item) => {
              // /configuracoes casaria com /configuracoes/integracoes e as duas
              // ficariam ativas ao mesmo tempo — daí o teste exato para ela
              const isActive =
                item.href === '/configuracoes'
                  ? pathname === '/configuracoes'
                  : pathname === item.href || pathname.startsWith(item.href + '/')

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg text-sm transition-colors',
                    isActive
                      ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                      : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground',
                    collapsed && 'justify-center px-0'
                  )}
                  title={collapsed ? item.name : undefined}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              )
            })}
          </div>
        ))}
      </ScrollArea>

      <div className="p-3 border-t border-sidebar-border">
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-sidebar-foreground/70 hover:text-sidebar-foreground"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          {!collapsed && <span className="ml-2">Recolher</span>}
        </Button>
      </div>
    </aside>
  )
}
