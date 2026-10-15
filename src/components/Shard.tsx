import type { CSSProperties } from 'react'

type Kind = 'white' | 'blue' | 'ice' | 'cyan'

const SHAPES: Record<Kind, { viewBox: string; d: string; fill: string; sw: number }> = {
  white: { viewBox: '0 0 120 110', d: 'M8 8 112 62 8 100Z', fill: '#f2f7ff', sw: 12 },
  blue: { viewBox: '0 0 100 130', d: 'M12 10 88 112 8 122Z', fill: '#5b8def', sw: 12 },
  ice: { viewBox: '0 0 130 110', d: 'M60 6 122 98 6 100Z', fill: '#a9c6ff', sw: 12 },
  cyan: { viewBox: '0 0 60 56', d: 'M30 6 54 50H6Z', fill: '#38bdf8', sw: 8 },
}

interface Props {
  kind: Kind
  depth: number
  style: CSSProperties
  className?: string
}

/** A floating decorative triangle taken from the logo. */
export default function Shard({ kind, depth, style, className = '' }: Props) {
  const s = SHAPES[kind]
  return (
    <div className={`shard ${className}`.trim()} data-depth={depth} style={style} aria-hidden="true">
      <svg viewBox={s.viewBox}>
        <path d={s.d} fill={s.fill} stroke={s.fill} strokeWidth={s.sw} strokeLinejoin="round" />
      </svg>
    </div>
  )
}
