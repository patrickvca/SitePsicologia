import { Hero } from '@/components/hero'
import { Atendimento } from '@/components/secoes/atendimento'
import { Bilhetes } from '@/components/secoes/bilhetes'
import { Contato, Rodape } from '@/components/secoes/contato'
import { Faq } from '@/components/secoes/faq'
import { Sobre } from '@/components/secoes/sobre'
import { Tcc } from '@/components/secoes/tcc'
import { WhatsappFlutuante } from '@/components/whatsapp-flutuante'

export function App() {
  return (
    <>
      <main>
        <Hero />
        <WhatsappFlutuante />
        <Sobre />
        <Tcc />
        <Atendimento />
        <Bilhetes />
        <Faq />
        <Contato />
      </main>
      <Rodape />
    </>
  )
}
