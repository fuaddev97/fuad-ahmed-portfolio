import { useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useMagnetic } from '../hooks/useMagnetic'

interface Props {
  variant?: 'primary' | 'blue' | 'ghost' | 'ghost-dark'
  href?: string
  to?: string
  download?: boolean
  external?: boolean
  className?: string
  children: ReactNode
}

/** A pill button that renders as an anchor or a router link and follows the pointer. */
export default function Button({ variant = 'primary', href, to, download, external, className = '', children }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  useMagnetic(ref)
  const cls = `btn btn-${variant} ${className}`.trim()
  if (to) {
    return <Link ref={ref} to={to} className={cls}>{children}</Link>
  }
  return (
    <a
      ref={ref}
      href={href}
      className={cls}
      download={download}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
