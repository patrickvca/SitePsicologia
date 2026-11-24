export const CRP = 'CRP 03/34669'

const WHATSAPP = 'https://wa.me/5577981521311'

export const whatsapp = (message?: string) => (message ? `${WHATSAPP}?text=${encodeURIComponent(message)}` : WHATSAPP)

export const INSTAGRAM = 'https://www.instagram.com/psi.thaisecristinne/'
export const EMAIL = 'mailto:thaisecristinne.psi@gmail.com'
export const EMAIL_SESSION = `${EMAIL}?subject=${encodeURIComponent('Atendimento online - Thaise Cristinne')}`

// Arquivos de public/imagens, com o caminho certo mesmo se o site for publicado em uma subpasta
export const image = (file: string) => `${import.meta.env.BASE_URL}imagens/${file}`
