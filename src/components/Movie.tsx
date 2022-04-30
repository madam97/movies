import { Link } from 'react-router-dom'
import IMovie from '../interfaces/IMovie'
import Image from './Image'
import MovieCard from './MovieCard'

type MovieProps = {
  /** The movie data that will be displayed */
  movie: IMovie
}

export default function Movie({ movie }: MovieProps) {
  return (
    <article className="overflow-hidden rounded-lg">
      <Link to={`/movies/${movie.id}`}>
        <Image src={movie.backdropPath} alt={movie.title} />
      </Link>

      <MovieCard movie={movie} />
    </article>
  )
}