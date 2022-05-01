import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import Modal from '../components/Modal'
import HeaderModalNavItem from '../components/HeaderModalNavItem'

type HeaderProps = {
  /** If true, the header will be shown on mobile and tablet devices  */
  showOnMobileAndTablet: boolean
}

/**
 * The component of the header
 * @returns {JSX.Element}
 */
export default function Header({ showOnMobileAndTablet }: HeaderProps) {

  /** @const {boolean} stucked If true, the header will have white background */
  const [stucked, setStucked] = useState<boolean>(window.scrollY !== 0);

  /**
   * Sets the stucked state to true if csrolled on website, otherwise it will be false
   */
  const toggleStuck = (): void => {
    setStucked(window.scrollY !== 0);
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleStuck);

    return () => {
      window.removeEventListener('scroll', toggleStuck);
    }
  }, []);

  /** @const {boolean} showModal If true, the list chooser modal will appear */
  const [showModal, setShowModal] = useState<boolean>(false);

  /**
   * Opens/closes the modal
   * @param {React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>} e 
   */
  const toggleModal = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    if (e.currentTarget instanceof HTMLButtonElement) {
      e.preventDefault();
    }
    setShowModal(!showModal);
  }

  // --------------------------------------------

  return (
    <header className={`${!showOnMobileAndTablet ? 'hidden laptop:block' : ''} z-30 fixed top-0 inset-x-0 px-4 ${stucked ? 'bg-white' : ''} text-base text-dark`}>
      <nav className="flex container py-2 laptop:py-7">
        <Link className="mr-auto font-semibold" to="/">
          MovieDB
        </Link>

        <Link className="flex items-center mr-4" to="/favourites">
          <FontAwesomeIcon icon={faStar} />
        </Link>

        <button className="flex items-center" onClick={toggleModal}>
          <FontAwesomeIcon icon={faSliders} />
        </button>

        <Modal title="In which order would you like me to list the movies?" show={showModal} setShow={setShowModal}>
          <HeaderModalNavItem 
            className="mt-12" 
            title="The Hot stuff" 
            subtitle="Show me the most popular movies" 
            to="/?list=popular" 
            handleClick={toggleModal}
          />
          <HeaderModalNavItem 
            className="mt-3" 
            title="Only the Best" 
            subtitle="Show me the top rated movies" 
            to="/?list=topRated" 
            handleClick={toggleModal}
          />
          <HeaderModalNavItem 
            className="mt-3" 
            title="My Faves" 
            subtitle="Show me my favourite movies" 
            to="/favourites"
            handleClick={toggleModal}
          />
        </Modal>
      </nav>
    </header>
  )
}