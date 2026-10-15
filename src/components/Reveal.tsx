import { useRef, type CSSProperties, type ElementType, type ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface Props {
  as?: ElementType
  variant?: 'up' | 'left' | 'right' | 'zoom'
  delay?: number
  className?: string
  id?: string
  style?: CSSProperties
  children: ReactNode
}

/** Fades and slides its content in when it scrolls into view. */
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, style, children, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  return (
    <Tag ref={ref} data-reveal={variant} style={{ '--d': `${delay}s`, ...style } as CSSProperties} {...rest}>
      {children}
    </Tag>
  )
}
