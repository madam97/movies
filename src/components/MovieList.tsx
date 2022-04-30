import { useEffect, useState } from 'react'
import IMovie from '../interfaces/IMovie'
import IMoviePoster from '../interfaces/IMoviePoster'
import Loader from './Loader'
import Movie from './Movie'
import MoviePoster from './MoviePoster'

type MovieListProps = {
  /** The display type of the movie list */
  displayType: 'normal' | 'poster', 
  /** The movies that will be displayed */
  movies: IMovie[] | IMoviePoster[] | null,
  /** The default text that appears if the movies array is empty */
  noDataText: string
}

export default function MovieList({ displayType, movies, noDataText }: MovieListProps) {

  /** @const {show} show If true, the loader will shown */
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    if (movies !== null) {
      setTimeout(() => {
        setShow(false);
      }, 1000);
    }
  }, [movies]);

  // --------------------------------------------

  return (
    <main className="flex flex-col min-h-screen">
      <Loader show={show} />

      <section className="px-4 pt-14 pb-6 bg-white">
        <h1 className="mb-1.5 text-2xl text-dark font-extrabold">Hello Verycreatives</h1>
        <p className="font-semibold">Check these movies out</p>
      </section>

      {movies && movies.length > 0 &&
        <section className={`
          grid gap-x-1 gap-y-2 ${displayType === 'normal' ? 'grid-cols-1' : 'grid-cols-2'} 
          px-2 py-3
        `}>
          {displayType === 'normal' && movies.map(movie => <Movie key={movie.id} movie={movie as IMovie} />)}
          {displayType === 'poster' && movies.map(movie => <MoviePoster key={movie.id} poster={movie as IMoviePoster} />)}
        </section>
      }

      {movies && movies.length == 0 &&
        <div className="flex justify-center items-center grow">
          <p className="text-xl text-dark">{noDataText}</p>
        </div>
      }
    </main>
  )
}