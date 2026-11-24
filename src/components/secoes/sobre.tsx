import { CRP, image } from '@/data'

const CREDENCIAIS = [
  ['CRP', CRP.replace('CRP ', '')],
  ['Formação', 'Unex - Vitória da Conquista'],
  ['Modalidade', 'Atendimento online'],
  ['Abordagem', 'Terapia Cognitivo-Comportamental']
]

export function Sobre() {
  return (
    <section id="sobre" className="wrap grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-10 lg:py-32">
      <figure className="mx-auto w-full max-w-[460px] lg:col-span-5 lg:mx-0">
        <img
          src={image('consultorio.webp')}
          width={1200}
          height={1672}
          loading="lazy"
          alt="Thaise Cristinne sorrindo à mesa de seu consultório"
          className="aspect-[4/5] w-full rounded-t-full rounded-b-2xl object-cover object-[50%_60%]"
        />
      </figure>

      <div className="lg:col-span-6 lg:col-start-7">
        <h2 className="titulo">Atendimento humano, ético e com direção.</h2>
        <div className="text-muted mt-7 max-w-[60ch] space-y-4 text-[17px]">
          <p>
            Me chamo Thaise Cristinne, sou psicóloga formada pelo Centro Universitário de Excelência, em Vitória da
            Conquista, BA. Realizo atendimento online de acordo com os princípios da Terapia Cognitivo-Comportamental
            (TCC).
          </p>
          <p>
            Eu quero te acolher, escutar e construir estratégias para o dia a dia, com cuidado e sigilo. E claro,
            respeitando o tempo de cada pessoa e a direção que o processo tomar.
          </p>
        </div>

        <dl className="border-coffee/15 mt-10 border-t">
          {CREDENCIAIS.map(([nome, valor]) => (
            <div key={nome} className="border-coffee/15 grid grid-cols-[110px_1fr] gap-4 border-b py-3.5 sm:grid-cols-[160px_1fr]">
              <dt className="text-muted">{nome}</dt>
              <dd className="font-medium">{valor}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
