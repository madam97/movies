import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import Modal from '../components/Modal'
import HeaderModalNavItem from '../components/HeaderModalNavItem'
import HeaderContainer from '../components/HeaderContainer'

/**
 * The component of the header
 * @returns {JSX.Element}
 */
export default function Header() {

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
    <HeaderContainer>
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
    </HeaderContainer>
  )
}