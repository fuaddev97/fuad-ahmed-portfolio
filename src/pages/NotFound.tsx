import Button from '../components/Button'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('Page not found')

  return (
    <section className="on-dark page-hero not-found">
      <div className="wrap">
        <p className="soft">404 · Page not found</p>
        <h1>This page couldn’t be found.</h1>
        <p className="soft" style={{ marginTop: '1.4rem', fontSize: '1.2rem' }}>
          The link may be incorrect, or the page may have moved.
        </p>
        <div className="cs-links">
          <Button to="/">Back to home</Button>
          <Button to="/work" variant="ghost">Explore projects</Button>
        </div>
      </div>
    </section>
  )
}
