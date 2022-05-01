import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import IMovie from '../interfaces/IMovie'
import IMoviePoster from '../interfaces/IMoviePoster'

type MovieCardProps = {
  /** The movie data that will be displayed */
  movie: IMovie | IMoviePoster
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="flex flex-col justify-between grow p-3 border border-light rounded-b-lg">
      <p className="mb-5 text-dark font-semibold">{movie.title}</p>

      <div className="flex justify-between font-medium">
        <span>
          <FontAwesomeIcon className="mr-1" icon={faStar} />
          {movie.voteAverage}
        </span>

        <Link to={`/movies/${movie.id}`}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
    </div>
  )
}