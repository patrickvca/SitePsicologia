import { cn } from '@/lib/utils'

// Frases do dia a dia, escritas como bilhetes. O rodapé de cada um diz o tema com as palavras que as pessoas buscam.
const BILHETES = [
  { frase: 'Minha cabeça não desliga nem na hora de dormir.', tema: 'Terapia para ansiedade', estilo: 'bg-[#e2daf0] -rotate-2' },
  { frase: 'Sinto que nunca faço o suficiente.', tema: 'Autoestima e autocrítica', estilo: 'bg-[#f8dccb] rotate-1 lg:translate-y-8' },
  { frase: 'Digo sim quando queria dizer não.', tema: 'Relacionamentos e limites', estilo: 'bg-[#dbe3d1] -rotate-1' },
  { frase: 'Vivo no automático, sempre devendo algo.', tema: 'Estresse e rotina', estilo: 'bg-[#d3e6f1] rotate-2' },
  { frase: 'Ou eu engulo tudo, ou eu explodo.', tema: 'Controle emocional', estilo: 'bg-[#fbf9f5] -rotate-1 lg:translate-y-8' },
  { frase: 'Só queria me entender melhor.', tema: 'Autoconhecimento', estilo: 'bg-[#efe4d0] rotate-1' }
]

export function Bilhetes() {
  return (
    <section aria-labelledby="bilhetes" className="wrap py-20 lg:py-32">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
        <h2 id="bilhetes" className="titulo lg:col-span-6">
          Talvez algo aqui soe familiar.
        </h2>
        <p className="text-muted max-w-[56ch] text-[17px] lg:col-span-5 lg:col-start-8">
          A terapia online pode ser um espaço para olhar para isso com calma. Sou psicóloga em Vitória da Conquista, BA, e
          atendo por videochamada pela Terapia Cognitivo-Comportamental.
        </p>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-7 lg:mt-16 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-10 lg:pb-8">
        {BILHETES.map(({ frase, tema, estilo }) => (
          <li
            key={frase}
            className={cn(
              'flex min-h-48 flex-col justify-between gap-8 rounded-[4px] p-6 shadow-[0_18px_36px_-20px_rgb(53_38_29/0.4)] transition-[rotate] duration-500 ease-out hover:rotate-0 sm:min-h-56 lg:p-8',
              estilo
            )}
          >
            <p className="font-mono text-[clamp(1.125rem,0.95rem+0.7vw,1.5rem)] leading-snug text-pretty">{frase}</p>
            <p className="text-coffee/80 text-[15px] font-medium">{tema}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
