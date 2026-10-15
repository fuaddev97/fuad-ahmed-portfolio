import { useEffect, type RefObject } from 'react'
import { lerp, reducedMotion } from './motion'

/** Floating shards and the portrait follow the pointer with eased motion. */
export function useHeroParallax(hero: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = hero.current
    if (!root || reducedMotion()) return
    const shards = [...root.querySelectorAll<HTMLElement>('.shard')]
    const me = root.querySelector<HTMLElement>('.me')
    const halo = root.querySelector<HTMLElement>('.halo')
    const wide = window.matchMedia('(min-width:901px)')
    let tx = 0, ty = 0, cx = 0, cy = 0, raf = 0

    const move = (e: PointerEvent) => {
      const r = root.getBoundingClientRect()
      tx = (e.clientX - r.left) / r.width - 0.5
      ty = (e.clientY - r.top) / r.height - 0.5
      scheduleTick()
    }
    const leave = () => {
      tx = ty = 0
      scheduleTick()
    }
    const tick = () => {
      raf = 0
      cx = lerp(cx, tx, 0.06)
      cy = lerp(cy, ty, 0.06)
      for (const s of shards) {
        const d = Number(s.dataset.depth ?? 20)
        s.style.transform = `translate(${cx * d * 2}px,${cy * d * 2}px)`
      }
      if (me && halo && wide.matches) {
        me.style.translate = `${cx * -14}px ${cy * -8}px`
        halo.style.translate = `${cx * 24}px ${cy * 14}px`
      }
      if (Math.abs(cx - tx) >= 0.001 || Math.abs(cy - ty) >= 0.001) {
        raf = requestAnimationFrame(tick)
      }
    }
    const scheduleTick = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }
    root.addEventListener('pointermove', move)
    root.addEventListener('pointerleave', leave)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      root.removeEventListener('pointermove', move)
      root.removeEventListener('pointerleave', leave)
    }
  }, [hero])
}
