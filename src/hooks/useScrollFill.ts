import { useEffect, type RefObject } from 'react'
import { clamp } from './motion'

/** Sets a `--p` custom property (0 to 1) as the element scrolls through the viewport. */
export function useScrollFill(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--p', clamp((window.innerHeight * 0.7 - r.top) / r.height).toFixed(3))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [ref])
}
