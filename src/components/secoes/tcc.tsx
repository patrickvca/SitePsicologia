import { ClockIcon, MessageCircleHeartIcon, SunriseIcon, WindIcon } from 'lucide-react'

const FOCOS = [
  {
    icone: WindIcon,
    titulo: 'Ansiedade e preocupação excessiva',
    texto: 'Compreensão dos gatilhos, manejo de pensamentos e práticas para atravessar momentos de tensão.'
  },
  {
    icone: SunriseIcon,
    titulo: 'Autoestima e autocrítica',
    texto: 'Trabalho sobre crenças, comparação, culpa e formas mais gentis de se relacionar consigo.'
  },
  {
    icone: MessageCircleHeartIcon,
    titulo: 'Relacionamentos e limites',
    texto: 'Espaço para olhar padrões afetivos, comunicação, dependência emocional e tomada de decisão.'
  },
  {
    icone: ClockIcon,
    titulo: 'Rotina, estresse e procrastinação',
    texto: 'Organização de prioridades, redução da sobrecarga e construção de passos viáveis.'
  }
]

// O triângulo da TCC: pensamentos, emoções e comportamentos se influenciam entre si
function Triade() {
  return (
    <svg
      viewBox="0 0 440 400"
      role="img"
      aria-label="Pensamentos, emoções e comportamentos: três círculos que se encontram"
      className="mx-auto w-full max-w-[440px]"
    >
      <g style={{ mixBlendMode: 'multiply' }}>
        <circle cx="220" cy="130" r="118" fill="#b3c5a6" />
      </g>
      <g style={{ mixBlendMode: 'multiply' }}>
        <circle cx="136" cy="266" r="118" fill="#f0cdb8" />
      </g>
      <g style={{ mixBlendMode: 'multiply' }}>
        <circle cx="304" cy="266" r="118" fill="#e7dcc6" />
      </g>
      <g fill="#35261d" textAnchor="middle" fontFamily="var(--font-display)" fontSize="21">
        <text x="220" y="98">
          Pensamentos
        </text>
        <text x="106" y="300">
          Emoções
        </text>
        <text x="332" y="300" fontSize="18">
          Comportamentos
        </text>
      </g>
    </svg>
  )
}

export function Tcc() {
  return (
    <section id="tcc" className="bg-sage">
      <div className="wrap py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 className="titulo">Um processo para entender padrões e construir novas respostas.</h2>
            <p className="mt-7 max-w-[60ch] text-[17px]">
              Na Terapia Cognitivo-Comportamental, terapeuta e paciente investigam pensamentos, emoções e comportamentos
              que aparecem em situações importantes. A partir disso, o processo busca criar recursos mais saudáveis e
              realistas para lidar com a vida.
            </p>
          </div>
          <div className="lg:col-span-5">
            <Triade />
          </div>
        </div>

        <ul className="mt-16 grid gap-x-10 sm:grid-cols-2 lg:mt-24">
          {FOCOS.map(({ icone: Icone, titulo, texto }) => (
            <li key={titulo} className="border-coffee/20 flex gap-5 border-t py-8">
              <span className="bg-page text-moss grid size-12 shrink-0 place-items-center rounded-full">
                <Icone aria-hidden className="size-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display text-xl leading-snug lg:text-2xl">{titulo}</h3>
                <p className="mt-2 max-w-[46ch]">{texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
