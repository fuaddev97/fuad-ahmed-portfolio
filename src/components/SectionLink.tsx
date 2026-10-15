import { Link, useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'

interface Props {
  id: string
  className?: string
  onClick?: () => void
  children: ReactNode
}

/** Jumps to a homepage section: a plain anchor on the homepage, a router link elsewhere. */
export default function SectionLink({ id, className, onClick, children }: Props) {
  const { pathname } = useLocation()
  if (pathname === '/') {
    return <a className={className} href={`#${id}`} onClick={onClick}>{children}</a>
  }
  return <Link className={className} to={{ pathname: '/', hash: `#${id}` }} onClick={onClick}>{children}</Link>
}
