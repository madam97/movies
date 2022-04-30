import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { getMovieDetailed, selectMovieDetailed } from '../store/slices/movieSlice';
import Image from '../components/Image';

export default function MovieDetailed() {

  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getMovieDetailed(parseInt(id)));
    }
  }, [id]);

  const movie = useAppSelector(selectMovieDetailed);

  // -----------------------------------------

  return (
    <main className="min-h-screen bg-white">
      {movie && 
        <section>
          <Image src={movie.backdropPath} alt={movie.title} />

          <div className="relative -mt-3 px-4 pt-6 pb-4.5 bg-white rounded-t-xl">
            <h1 className="text-2xl text-dark font-extrabold">
              {movie.title}
              {movie.originalTitle && movie.title !== movie.originalTitle ? ' ('+movie.originalTitle+')' : ''}
            </h1>
            {movie.tagline && <h2 className="text-md text-dark font-semibold">{movie.tagline}</h2>}

            <div className="mt-3 mb-8 text-xs font-medium">
              <span>
                <FontAwesomeIcon className="mr-1" icon={faStar} />
                {movie.voteAverage}
              </span>
            </div>

            <p className="text-sm text-dark">{movie.overview}</p>
          </div>
        </section>
      }
    </main>
  )
}