import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/base.css'
import './styles/buttons.css'
import './styles/header.css'
import './styles/hero.css'
import './styles/marquee.css'
import './styles/snapshot.css'
import './styles/projects.css'
import './styles/capabilities.css'
import './styles/stack.css'
import './styles/process.css'
import './styles/journey.css'
import './styles/about.css'
import './styles/contact.css'
import './styles/footer.css'
import './styles/reveal.css'
import './styles/pages.css'
import './styles/responsive.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
