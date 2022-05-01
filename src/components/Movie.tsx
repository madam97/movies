import { Link } from 'react-router-dom'
import IMovie from '../interfaces/IMovie'
import MovieCard from './MovieCard'
import Picture from './Picture'

type MovieProps = {
  /** More classes for the root element */
  wide: boolean,
  /** The movie data that will be displayed */
  movie: IMovie
}

export default function Movie({ wide, movie }: MovieProps) {
  return (
    <article className={`overflow-hidden rounded-lg ${wide ? 'tablet:col-span-2' : ''}`}>
      <Link to={`/movies/${movie.id}`}>
        <Picture 
          className="max-h-92"
          src={movie.backdropPath}
          alt={movie.title}
          sizes={wide ? 
            {
              desktop: 'original',
              laptop: 'w1280',
              tablet: 'w780'
            } :
            {
              desktop: 'w1280',
              laptop: 'w1280',
              tablet: 'w780'
            }
          }
          defSize="w500"
        />
      </Link>

      <MovieCard movie={movie} />
    </article>
  )
}