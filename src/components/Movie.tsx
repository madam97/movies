import { Link } from 'react-router-dom'
import IMovie from '../interfaces/IMovie'
import Image from './Image'
import MovieCard from './MovieCard'

type MovieProps = {
  /** More classes for the root element */
  className?: string,
  /** The movie data that will be displayed */
  movie: IMovie
}

export default function Movie({ className = '', movie }: MovieProps) {
  return (
    <article className={`overflow-hidden rounded-lg ${className}`}>
      <Link to={`/movies/${movie.id}`}>
        <Image src={movie.backdropPath} alt={movie.title} size="w500" />
      </Link>

      <MovieCard movie={movie} />
    </article>
  )
}