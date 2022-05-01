import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

type GoBackNavProps = {
  /** The title that appears on mobile and tablet devices */
  title: string,
  /** Children element that appear in the navbar */
  children: React.ReactNode | React.ReactNode[]
}

export default function GoBackNav({ title, children }: GoBackNavProps) {
  
  const navigate = useNavigate();

  // -----------------------------------------

  return (
    <div className="absolute top-0 laptop:top-20 inset-x-0 px-4 text-base text-dark">
      <nav className="flex container py-2">
        <button className="flex items-center mr-2.5" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span className="hidden laptop:inline ml-1 font-bold leading-none">Go back</span>
        </button>

        <span className="laptop:hidden font-bold">{title}</span>

        {children}
      </nav>
    </div>
  )
}