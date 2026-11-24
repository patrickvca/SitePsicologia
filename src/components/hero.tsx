import Elias from '@/components/ui/elias-author-hero'
import type { EliasProps } from '@/components/ui/elias-author-hero'
import { CRP, EMAIL_SESSION, image, INSTAGRAM, whatsapp } from '@/data'

// Os cadernos da capa: cada um abre em um tema que pode ser trabalhado em terapia
const TEMAS: NonNullable<EliasProps['books']> = [
  {
    label: 'Temas da terapia',
    title: 'Ansiedade e preocupação',
    coverLines: ['Ansiedade', 'e preocu-', 'pação'],
    topics: ['Gatilhos', 'Manejo'],
    art: 'path',
    colors: { cover: '#e2daf0', type: '#35261d', spine: '#b4a6d8' },
    chapter: 'Ansiedade',
    chapterTitle: 'Um passo de cada vez',
    text: 'Compreensão dos gatilhos, manejo de pensamentos e práticas para atravessar momentos de tensão.'
  },
  {
    label: 'Temas da terapia',
    title: 'Autoestima e autocrítica',
    coverLines: ['Autoestima', 'e auto-', 'crítica'],
    topics: ['Crenças', 'Gentileza'],
    art: 'sunrise',
    colors: { cover: '#f8dccb', type: '#35261d', spine: '#dc9c7b' },
    chapter: 'Autoestima',
    chapterTitle: 'Um olhar mais gentil',
    text: 'Trabalho sobre crenças, comparação, culpa e formas mais gentis de se relacionar consigo.'
  },
  {
    label: 'Temas da terapia',
    title: 'Relacionamentos e limites',
    coverLines: ['Relações', 'e limites'],
    topics: ['Vínculos', 'Comunicação'],
    art: 'bonds',
    colors: { cover: '#d5e0cf', type: '#35261d', spine: '#8fa986' },
    chapter: 'Relacionamentos',
    chapterTitle: 'Perto, sem se perder',
    text: 'Espaço para olhar padrões afetivos, comunicação, dependência emocional e tomada de decisão.'
  },
  {
    label: 'Temas da terapia',
    title: 'Rotina, estresse e procrastinação',
    coverLines: ['Rotina', 'e estresse'],
    topics: ['Prioridades', 'Pausas'],
    art: 'days',
    colors: { cover: '#d3e6f1', type: '#35261d', spine: '#a3c8de' },
    chapter: 'Rotina',
    chapterTitle: 'O possível de hoje',
    text: 'Organização de prioridades, redução da sobrecarga e construção de passos viáveis.'
  }
]

export function Hero() {
  return (
    <Elias
      brand={{ name: 'Thaise Cristinne', href: '#inicio' }}
      navLinks={{
        left: [
          { label: 'Início', href: '#inicio', active: true },
          { label: 'Sobre', href: '#sobre' }
        ],
        right: [
          { label: 'TCC', href: '#tcc' },
          { label: 'Dúvidas', href: '#faq' }
        ]
      }}
      navCta={{
        label: 'Contato',
        href: whatsapp('Olá, Thaise! Vim pelo site e gostaria de saber mais sobre a terapia online.'),
        icon: 'whatsapp'
      }}
      navStatus={{ label: 'Online', detail: CRP }}
      name={{ first: 'Thaise', last: 'Cristinne' }}
      intro={{
        roles: ['Psicóloga', 'TCC', 'Online'],
        headline: ['Um espaço de', 'escuta, acolhimento', 'e clareza.'],
        description: 'Para lidar com ansiedade, autoestima, relacionamentos, estresse, rotina e emoções.',
        action: {
          label: 'Agendar sessão',
          href: whatsapp('Olá, Thaise! Vim pelo site e gostaria de saber mais sobre a terapia online.')
        }
      }}
      portrait={{
        src: image('thaise-retrato.webp'),
        width: 1000,
        height: 1615,
        alt: 'Thaise Cristinne, psicóloga, sorrindo, de blazer claro e blusa marrom'
      }}
      books={TEMAS}
      bookCard={{
        href: '#tcc',
        open: 'Abrir',
        close: 'Fechar e mostrar o próximo tema, depois de',
        folio: 'TCC',
        more: 'Saiba mais sobre',
        byline: 'Terapia · TCC'
      }}
      letter={{
        eyebrow: 'Uma carta para amanhã',
        greeting: 'Querido amanhã,',
        stamp: 'Com cuidado',
        postmark: 'Amanhã',
        seal: 'Ψ',
        sealing: 'Guardada para amanhã',
        messages: [
          'vou respirar antes de responder e escutar o que eu sinto.',
          'vou trocar a cobrança por um passo possível de cada vez.',
          'vou dizer não sem culpa e guardar um tempo só meu.',
          'vou pedir ajuda. Cuidar de mim também é coragem.'
        ],
        counter: 'Carta'
      }}
      socialLinks={[
        { label: 'WhatsApp', href: whatsapp() },
        { label: 'Instagram', href: INSTAGRAM },
        { label: 'E-mail', href: EMAIL_SESSION }
      ]}
    />
  )
}
