import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Em produção o HTML já vem pronto (scripts/prerender.mjs); no dev a raiz está vazia
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
