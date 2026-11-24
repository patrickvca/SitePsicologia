// Escreve o conteúdo do site dentro do HTML final, para buscadores lerem o texto sem executar JavaScript
import { readFile, rm, writeFile } from 'node:fs/promises'

const { render } = await import('../dist-ssr/entry-server.js')
const file = new URL('../dist/index.html', import.meta.url)
const html = await readFile(file, 'utf8')

if (!html.includes('<!--app-->')) throw new Error('index.html sem o marcador <!--app-->')

await writeFile(file, html.replace('<!--app-->', () => render()))
await rm(new URL('../dist-ssr', import.meta.url), { recursive: true, force: true })
console.log('Pré-renderização concluída: dist/index.html')
