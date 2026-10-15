import { MARQUEE_ITEMS } from '../data/content'

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {items.map((m, i) => <span key={i}>{m}</span>)}
      </div>
    </div>
  )
}
