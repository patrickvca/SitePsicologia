import { useEffect, useRef, useState } from 'react'
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon'
import { whatsapp } from '@/data'
import { cn } from '@/lib/utils'

// Aparece depois do hero, que já tem o próprio botão de agendamento
export function WhatsappFlutuante() {
  const [visivel, setVisivel] = useState(false)
  const marcoRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const marco = marcoRef.current

    if (!marco) return

    // A margem de cima cobre a página toda: o marco conta como visto mesmo em um salto direto para outra seção
    const observer = new IntersectionObserver(([entry]) => setVisivel(entry.isIntersecting), {
      rootMargin: '100000px 0px -40% 0px'
    })

    observer.observe(marco)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <span ref={marcoRef} aria-hidden className="block h-px" />
      <a
        href={whatsapp('Olá, Thaise! Vim pelo site e gostaria de agendar um atendimento.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar Thaise Cristinne no WhatsApp"
        className={cn(
          'bg-moss text-page ring-page/70 hover:bg-coffee fixed right-4 bottom-4 z-40 inline-flex min-h-12 items-center gap-2.5 rounded-full px-5 font-medium ring-2 transition-[opacity,translate,background-color,visibility] duration-500 lg:right-8 lg:bottom-8',
          visivel ? 'visible opacity-100' : 'invisible translate-y-4 opacity-0'
        )}
      >
        <WhatsAppIcon className="size-5.5" />
        WhatsApp
      </a>
    </>
  )
}
