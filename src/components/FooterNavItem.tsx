import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

type FooterNavItemProps = {
  /** The link's text */
  title: string,
  /** The link's url */
  to: string,
  /** The icon above the link's text */
  icon: IconDefinition,
  /** Notification count, if it is greater then 0, it appears in a circle next to the icon */
  notification?: number,
  /** If true the link is active, a line appears under the link's text */
  active?: boolean
}

export default function FooterNavItem({ title, to, icon, notification = 0, active = false }: FooterNavItemProps) {
  return (
    <Link className="relative flex flex-col items-center py-3" to={to}>
      <FontAwesomeIcon className="mb-0.5" icon={icon} />
      <span className="text-2xs font-semibold">{title}</span>

      {notification > 0 && 
        <span 
          className="absolute top-1.5 -right-1.5 flex justify-center items-center box-content w-4 h-4
            bg-dark border-2 border-white rounded-full
            text-2xs text-white font-medium"
        >{notification}</span>}

      {active && <span className="absolute -left-2 -bottom-1.5 -right-2 block h-2 bg-mid rounded"></span>}
    </Link>
  )
}