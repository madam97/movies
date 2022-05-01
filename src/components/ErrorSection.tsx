import { useNavigate } from 'react-router-dom'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type ErrorSectionProps = {
  /** The error code */
  code?: number,
  /** The error message */
  title: string
}

export default function ErrorSection({ code = 404, title }: ErrorSectionProps) {
  const navigate = useNavigate();

  // -----------------------------------------

  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="mb-4 text-6xl text-dark font-extrabold">{code}</h1>
      <p className="mb-12 text-base">{title}</p>
      <button className="flex items-center p-3 bg-dark rounded-xl text-white font-semibold leading-none" onClick={e => navigate(-1)}>
        <FontAwesomeIcon className="mr-2.5" icon={faChevronLeft} /> 
        <span>Go back</span>
      </button>
    </section>
  )
}