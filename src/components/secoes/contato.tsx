import { Botao } from '@/components/botao'
import { CRP, EMAIL, EMAIL_SESSION, image, INSTAGRAM, whatsapp } from '@/data'

export function Contato() {
  return (
    <section id="contato" className="bg-paper">
      <div className="wrap grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <div className="lg:col-span-5">
          <h2 className="titulo">Começar pode ser mais leve do que parece.</h2>
          <p className="mt-7 max-w-[50ch] text-[17px]">
            Envie uma mensagem para tirar dúvidas ou verificar horários de atendimento online. A primeira iniciativa já é
            um gesto de cuidado com você.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Botao cheio href={whatsapp('Olá, Thaise! Quero agendar uma sessão online.')}>
              WhatsApp
            </Botao>
            <Botao href={INSTAGRAM}>Instagram</Botao>
            <Botao href={EMAIL_SESSION}>E-mail</Botao>
          </div>
        </div>
        <img
          src={image('lendo.webp')}
          width={1800}
          height={1200}
          loading="lazy"
          alt="Thaise Cristinne lendo em um ambiente acolhedor"
          className="w-full rounded-2xl lg:col-span-7"
        />
      </div>
    </section>
  )
}

export function Rodape() {
  return (
    <footer className="bg-coffee text-page/80">
      <div className="wrap flex flex-col gap-6 py-12 pb-28 text-[15px] lg:flex-row lg:items-end lg:justify-between lg:pb-14">
        <div>
          <p className="font-display text-page text-2xl">Thaise Cristinne</p>
          <p className="mt-1">Psicóloga | {CRP}</p>
        </div>
        <p>Atendimento psicológico online</p>
        <ul className="text-page flex gap-6">
          {[
            ['WhatsApp', whatsapp()],
            ['Instagram', INSTAGRAM],
            ['E-mail', EMAIL]
          ].map(([nome, href]) => (
            <li key={nome}>
              <a
                href={href}
                className="inline-flex min-h-11 items-center underline-offset-4 hover:underline lg:min-h-0"
                {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {nome}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
