import { Botao } from '@/components/botao'
import { image, whatsapp } from '@/data'

export function Atendimento() {
  return (
    <section id="atendimento" className="bg-coffee text-page">
      <div className="wrap grid lg:grid-cols-2">
        <div className="flex flex-col justify-center py-20 lg:py-32 lg:pr-16">
          <h2 className="titulo">Terapia online, sigilosa e pensada para caber na sua realidade.</h2>
          <p className="text-page/85 mt-7 max-w-[52ch] text-[17px]">
            As sessões acontecem pelo Google Meet, com horário combinado e cuidado com a privacidade. O processo
            terapêutico respeita o tempo de cada pessoa e é um espaço seguro para você.
          </p>
          <div className="mt-9">
            <Botao claro href={whatsapp('Olá, Thaise! Gostaria de tirar uma dúvida sobre o atendimento online.')}>
              Tirar uma dúvida
            </Botao>
          </div>
        </div>
        <img
          src={image('cafe.webp')}
          width={1200}
          height={1800}
          loading="lazy"
          alt="Thaise Cristinne segurando uma xícara em um espaço claro"
          className="max-lg:mb-16 max-lg:rounded-2xl aspect-[4/5] h-full w-full object-cover object-[50%_70%] lg:min-h-[720px]"
        />
      </div>
    </section>
  )
}
