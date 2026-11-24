import type { ReactNode } from 'react'
import { ArrowUpRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type BotaoProps = {
  href: string
  children: ReactNode
  /** Preenchido: a ação principal da seção */
  cheio?: boolean
  /** Para fundos escuros */
  claro?: boolean
}

export function Botao({ href, children, cheio = false, claro = false }: BotaoProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex min-h-12 items-center gap-2.5 rounded-full border px-6 font-medium transition-colors duration-300',
        'border-coffee/40 hover:border-coffee hover:bg-coffee hover:text-page',
        cheio && 'border-moss bg-moss text-page',
        claro && 'border-page/50 hover:border-page hover:bg-page hover:text-coffee focus-visible:outline-page'
      )}
      {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
      <ArrowUpRightIcon aria-hidden className="size-4.5" strokeWidth={1.75} />
    </a>
  )
}
