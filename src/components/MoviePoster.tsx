import { Link } from 'react-router-dom'
import IMoviePoster from '../interfaces/IMoviePoster'
import Image from './Image'
import MovieCard from './MovieCard'

type MoviePosterProps = {
  /** The movie's poster data that will be displayed */
  poster: IMoviePoster
}

export default function MoviePoster({ poster }: MoviePosterProps) {
  return (
    <article className="overflow-hidden flex flex-col rounded-lg">
      <Link to={`/movies/${poster.id}`}>
        <Image src={poster.posterPath} alt={poster.title} size="w500" />
      </Link>

      <MovieCard movie={poster} />
    </article>
  )
}