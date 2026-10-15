import { useEffect, useRef } from 'react'

/** Thin bar at the top of the page showing how far the visitor has scrolled. */
export default function ScrollProgress() {
  const bar = useRef<HTMLElement>(null)
  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return (
    <div className="progress" aria-hidden="true">
      <i ref={bar} />
    </div>
  )
}
