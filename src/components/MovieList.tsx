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
  return (
    <main className="flex flex-col min-h-screen">
      <Loader />

      <section className="px-4 pt-14 pb-6 bg-white">
        <div className="container">
          <h1 className="laptop:mt-7 mb-1.5 text-2xl text-dark font-extrabold">Hello Verycreatives</h1>
          <p className="font-semibold">Check these movies out</p>
        </div>
      </section>

      {movies && movies.length > 0 &&
        <section className="px-2 py-3">
          <div className={`
            grid 
            ${displayType === 'normal' ? 
              `gap-3 tablet:gap-5 laptop:gap-8
              grid-cols-1 tablet:grid-cols-2` : 
              `gap-x-1 tablet:gap-x-3 laptop:gap-x-5 desktop:gap-x-8
              gap-y-2 tablet:gap-y-3 laptop:gap-y-4 desktop:gap-y-5
              grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-6`
            } 
            container 
          `}>
            {displayType === 'normal' && movies.map((movie, index) => 
              <Movie 
                key={movie.id} 
                wide={index == 0}
                movie={movie as IMovie}
              />)
            }

            {displayType === 'poster' && movies.map(movie => 
              <MoviePoster 
                key={movie.id} 
                poster={movie as IMoviePoster}
              />)
            }
          </div>
        </section>
      }

      {movies && movies.length == 0 &&
        <div className="flex justify-center items-center grow container">
          <p className="text-xl text-dark">{noDataText}</p>
        </div>
      }
    </main>
  )
}