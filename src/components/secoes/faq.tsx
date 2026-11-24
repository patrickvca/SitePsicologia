import { PlusIcon } from 'lucide-react'

const PERGUNTAS = [
  [
    'Como funciona a terapia online?',
    'O atendimento acontece por videochamada, em um horário combinado. Você só precisa de um local onde se sinta confortável e internet estável.'
  ],
  [
    'A terapia online é sigilosa?',
    'Sim. O atendimento psicológico segue princípios éticos de sigilo e cuidado com as informações compartilhadas durante as sessões.'
  ],
  [
    'Quanto tempo dura uma sessão?',
    'Em geral, a sessão dura cerca de 50 minutos. A frequência costuma ser semanal, mas isso pode ser ajustado conforme a necessidade do processo.'
  ],
  [
    'Preciso ter um diagnóstico para fazer terapia?',
    'Não. A terapia também é indicada para quem deseja se conhecer melhor, organizar pensamentos, lidar com emoções ou atravessar momentos difíceis.'
  ],
  [
    'O que é TCC?',
    'TCC significa Terapia Cognitivo-Comportamental. É uma abordagem que observa a relação entre pensamentos, emoções e comportamentos para construir novas formas de enfrentar situações do dia a dia.'
  ],
  [
    'Como agendar a primeira conversa?',
    'Você pode me chamar pelo WhatsApp, Instagram ou e-mail. Eu vou te orientar sobre horários disponíveis, valores e próximos passos.'
  ]
]

export function Faq() {
  return (
    <section id="faq" className="border-coffee/15 wrap grid gap-10 border-t py-20 lg:grid-cols-12 lg:py-32">
      <h2 className="titulo lg:col-span-5 lg:pr-8">Dúvidas comuns antes de começar a terapia.</h2>

      <div className="lg:col-span-7">
        {PERGUNTAS.map(([pergunta, resposta], i) => (
          <details key={pergunta} className="faq border-coffee/15 border-b first:border-t" open={i === 0}>
            <summary className="font-display flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 text-xl leading-snug">
              <h3>{pergunta}</h3>
              <PlusIcon aria-hidden className="text-moss size-6 shrink-0" strokeWidth={1.75} />
            </summary>
            <p className="text-muted max-w-[60ch] pb-7 text-[17px]">{resposta}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
