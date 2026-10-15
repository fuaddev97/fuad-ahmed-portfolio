import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to the hash target after navigation, or to the top for a new page. */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const t = window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 50)
      return () => window.clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash, key])
  return null
}
