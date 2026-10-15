import { useEffect, useLayoutEffect, type RefObject } from 'react'
import { clamp, lerp, reducedMotion } from './motion'

/** Where each card starts in the pile: [rotation in degrees, sideways wiggle in px]. */
const SEEDS: [number, number][] = [[-8, -14], [7, 12], [-5, 10], [9, -10]]

const DURATION = 1000 // ms each card takes to reach its place
const STAGGER = 110 // ms between cards that appear at the same time
const MAX_OFFSET = 280 // px, limits how far a card travels from the pile

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

interface Run {
  card: HTMLElement
  slot: HTMLElement
  index: number
  dx: number
  dy: number
  start: number
}

/**
 * Cards are dealt from a pile in the middle of the grid into their places.
 *
 * Each card starts moving the moment any part of its place (1%) enters the
 * viewport, and then keeps moving on its own clock until it arrives. Scrolling
 * does not drive or interrupt the animation. Each card plays once.
 */
export function useDeck(deck: RefObject<HTMLElement | null>) {
  // Hide the cards before the first paint so they never flash in their final place.
  useLayoutEffect(() => {
    const root = deck.current
    if (!root || reducedMotion()) return
    const cards = root.querySelectorAll<HTMLElement>('.card')
    cards.forEach((c) => (c.style.opacity = '0'))
    return () => cards.forEach((c) => (c.style.opacity = ''))
  }, [deck])

  useEffect(() => {
    const root = deck.current
    if (!root || reducedMotion() || !('IntersectionObserver' in window)) return

    const slots = [...root.querySelectorAll<HTMLElement>('.card-slot')].filter((s) => s.querySelector('.card'))
    const runs: Run[] = []
    let raf = 0
    let batch = 0

    const draw = (now: number) => {
      raf = 0
      for (let i = runs.length - 1; i >= 0; i--) {
        const r = runs[i]
        const t = clamp((now - r.start) / DURATION)
        if (t <= 0) continue // still waiting for its turn in the stagger

        const e = easeOutQuart(t)
        const [rot, wig] = SEEDS[r.index % SEEDS.length]
        // a small riffle that fades out as the card settles
        const riffle = Math.sin(t * 9 + r.index) * (1 - e) * 8
        const x = r.dx * (1 - e) + wig * (1 - e) + riffle
        const y = r.dy * (1 - e)
        const rotate = rot * (1 - e)
        const scale = lerp(0.88, 1, e)

        r.card.style.opacity = String(clamp(t * 4, 0, 1))
        r.card.style.transform = `translate3d(${x}px,${y}px,0) rotate(${rotate}deg) scale(${scale})`
        r.slot.style.zIndex = '10'

        if (t >= 1) {
          // arrived: hand control back to CSS so hover styles work normally
          r.card.style.transform = ''
          r.card.style.opacity = '1'
          r.slot.style.zIndex = ''
          runs.splice(i, 1)
        }
      }
      if (runs.length) raf = requestAnimationFrame(draw)
    }

    const launch = (slot: HTMLElement, index: number, delay: number) => {
      const card = slot.querySelector<HTMLElement>('.card')
      if (!card) return
      const dr = root.getBoundingClientRect()
      const sr = slot.getBoundingClientRect()
      const dx = clamp(dr.left + dr.width / 2 - (sr.left + sr.width / 2), -MAX_OFFSET, MAX_OFFSET)
      const dy = clamp(dr.top + dr.height / 2 - (sr.top + sr.height / 2), -MAX_OFFSET, MAX_OFFSET)
      // put the card in its starting pose straight away, then let the clock run
      card.style.transform = `translate3d(${dx}px,${dy}px,0) rotate(${SEEDS[index % SEEDS.length][0]}deg) scale(0.88)`
      runs.push({ card, slot, index, dx, dy, start: performance.now() + delay })
      if (!raf) raf = requestAnimationFrame(draw)
    }

    // threshold 0: fires as soon as a single pixel of the card's place is on screen
    const io = new IntersectionObserver(
      (entries) => {
        const entering = entries.filter((e) => e.isIntersecting)
        if (!entering.length) return
        batch = 0
        // cards that appear together are dealt one after another, left to right
        entering
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
          .forEach((e) => {
            const slot = e.target as HTMLElement
            launch(slot, slots.indexOf(slot), batch++ * STAGGER)
            io.unobserve(slot)
          })
      },
      { threshold: 0 },
    )
    slots.forEach((s) => io.observe(s))

    // light that follows the pointer across a card
    const onMove = (e: PointerEvent) => {
      const c = e.currentTarget as HTMLElement
      const r = c.getBoundingClientRect()
      c.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%')
      c.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%')
    }
    const cards = slots.map((s) => s.querySelector<HTMLElement>('.card')!)
    cards.forEach((c) => c.addEventListener('pointermove', onMove))

    return () => {
      io.disconnect()
      if (raf) cancelAnimationFrame(raf)
      cards.forEach((c) => {
        c.removeEventListener('pointermove', onMove)
        c.style.transform = ''
        c.style.opacity = ''
      })
      slots.forEach((s) => (s.style.zIndex = ''))
    }
  }, [deck])
}
