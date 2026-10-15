import { useEffect, useState } from 'react'

/** Tracks whether the header should show its background and whether it should slide away. */
export function useHeaderState(menuOpen: boolean) {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 30)
      setHidden(y > last && y > 500 && !menuOpen)
      last = y
    }
    // Defer the initial sync so state updates don't happen synchronously inside the effect.
    const initialFrame = window.requestAnimationFrame(onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.cancelAnimationFrame(initialFrame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [menuOpen])

  return { scrolled, hidden }
}
