import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons'
import FooterNavItem from '../components/FooterNavItem'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

/**
 * The component of the footer
 * @returns {JSX.Element}
 */
export default function Footer() {

  /** @const {string} activeUrl The active url */
  const [activeUrl, setActiveUrl] = useState<string>('/'); 

  /** Update active url after url change */
  const location = useLocation();

  useEffect(() => {
    setActiveUrl(location.pathname);
  }, [location]);

  // -----------------------------------------

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white text-dark">
      <nav>
        <ul className="flex justify-around">
          <li>
            <FooterNavItem title="Movies" to="/" icon={faFilm} notification={2} active={activeUrl === '/'} />
          </li>
          <li>
            <FooterNavItem title="Favourites" to="/favourites" icon={faStar} active={activeUrl === '/favourites'} />
          </li>
          <li>
            <FooterNavItem title="Profile" to="/profile" icon={faUser} active={activeUrl === '/profile'} />
          </li>
        </ul>
      </nav>
    </footer>
  )
}