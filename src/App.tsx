import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import WorkIndex from './pages/WorkIndex'
import CaseStudy from './pages/CaseStudy'
import NotFound from './pages/NotFound'
import { useDocumentTitle } from './hooks/useDocumentTitle'

function HomePage() {
  useDocumentTitle()
  return <Home />
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollProgress />
      <ScrollManager />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkIndex />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
