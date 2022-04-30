import React from 'react'
import { Link } from 'react-router-dom'

type HeaderModalNavItemProps = {
  /** More classes for the root element */
  className?: string,
  /** The title */
  title: string,
  /** The subtitle */
  subtitle: string,
  /** The link's url */
  to: string
}

export default function HeaderModalNavItem({ className, title, subtitle, to }: HeaderModalNavItemProps) {
  return (
    <Link 
      className={`flex flex-col p-4 bg-dark rounded-xl text-white ${className}`} 
      to={to}
    >
      <span className="text-base font-bold">{title}</span>
      <span className="font-medium">{subtitle}</span>
    </Link>
  )
}