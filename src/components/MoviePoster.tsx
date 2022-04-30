import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import IMoviePoster from '../interfaces/IMoviePoster'
import Image from './Image'
import { Link } from 'react-router-dom'

type MoviePosterProps = {
  poster: IMoviePoster
}

export default function MoviePoster({ poster }: MoviePosterProps) {
  return (
    <article className="overflow-hidden rounded-lg">
      <Link to={`/movies/${poster.id}`}>
        <Image src={poster.posterPath} alt={poster.title} />
      </Link>

      <div className="p-3 border border-light rounded-b-lg">
        <p className="mb-5 text-dark font-semibold">{poster.title}</p>

        <div className="flex justify-between font-medium">
          <span>
            <FontAwesomeIcon className="mr-1" icon={faStar} />
            {poster.voteAverage}
          </span>

          <Link to={`/movies/${poster.id}`}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>
    </article>
  )
}