import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex px-4 py-2 bg-white text-base text-dark">
      <Link className="mr-auto font-semibold" to="/">
        MovieDB
      </Link>

      <Link className="mr-4" to="/favorites">
        <FontAwesomeIcon icon={faStar} />
      </Link>
      <button>
        <FontAwesomeIcon icon={faSliders} />
      </button>
    </header>
  )
}