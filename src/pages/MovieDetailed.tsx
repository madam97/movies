import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid, faStar, faClock, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { addFavMovie, getMovieDetailed, isFavMovie, removeFavMovie, selectMovieDetailed, selectStatus, setMovieDetailed } from '../store/slices/movieSlice'
import GoBackNav from '../components/GoBackNav';
import Picture from '../components/Picture';
import ErrorSection from '../components/ErrorSection';
import Loader from '../components/Loader';

export default function MovieDetailed() {

  const { id } = useParams();
  const movieId = id ? parseInt(id) : -1;

  const dispatch = useAppDispatch();

  /** Removes the movie after unmount */
  useEffect(() => {
    return () => {
      dispatch(setMovieDetailed(null));
    }
  }, []);

  /** Loads the movie */
  useEffect(() => {
    if (movieId !== -1) {
      dispatch(getMovieDetailed(movieId));
    }
  }, [id]);
  
  /** @const {TLoadingStatus} movieLoadingStatus The status of movie slice's loading */
  const movieLoadingStatus = useAppSelector(selectStatus);

  /** @const {IMovie} movie The movie, its data will appears */
  const movie = useAppSelector(selectMovieDetailed);

  /** @const {boolean} favorite Its value is true if the movie is the user's favorite */
  const favorite = useAppSelector(isFavMovie(movieId));

  /**
   * Adds/removes the movie to/from the user's favorite movies
   * @param {React.MouseEvent<HTMLButtonElement>} e 
   * @param {boolean} add 
   */
  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>, add: boolean): void => {
    e.preventDefault();

    if (movie) {
      if (add) {
        dispatch(addFavMovie(movie));
      } else {
        dispatch(removeFavMovie(movie.id));
      }
    }
  }

  // -----------------------------------------

  return (
    <main className="min-h-screen bg-white">
      <Loader />

      <span className="absolute top-0 inset-x-0 block h-20 laptop:h-40 bg-gradient-to-b from-white/75 to-transparent"></span>

      <GoBackNav title="Movie Details">
        {favorite && 
          <button className="flex items-center ml-auto" onClick={e => toggleFavorite(e, false)}>
            <FontAwesomeIcon icon={faHeartSolid} />
          </button>
        }
        {!favorite && 
          <button className="flex items-center ml-auto" onClick={e => toggleFavorite(e, true)}>
            <FontAwesomeIcon icon={faHeartRegular} />
          </button>
        }
      </GoBackNav>

      {(movieLoadingStatus == 'error' || movieLoadingStatus == 'success' && !movie) && <ErrorSection title="Movie was not found" />}

      {movieLoadingStatus != 'error' && movie && 
        <section>
          <Picture
            className="max-h-140"
            src={movie.backdropPath} 
            alt={movie.title} 
            sizes={{
              desktop: 'original',
              laptop: 'w1280',
              tablet: 'w780',
            }}
            defSize={'w500'}
          />

          <div className="relative 
            -mt-3 tablet:-mt-12 laptop:-mt-20 desktop:-mt-28 mx-auto 
            px-4 pt-6 pb-4.5 
            tablet:max-w-lg laptop:max-w-2xl desktop:max-w-3xl 
            bg-white rounded-t-xl
          ">
            <h1 className="text-2xl text-dark font-extrabold">
              {movie.title}
              {movie.originalTitle && movie.title !== movie.originalTitle ? ' ('+movie.originalTitle+')' : ''}
            </h1>
            {movie.tagline && <h2 className="text-md text-dark font-semibold">{movie.tagline}</h2>}

            <div className="mt-3 mb-8 text-xs font-medium">
              <span className="mr-4">
                <FontAwesomeIcon className="mr-1" icon={faCheck} />
                {movie.status}
              </span>

              <span className="mr-4">
                <FontAwesomeIcon className="mr-1" icon={faStar} />
                {movie.voteAverage}
              </span>

              {movie.runtime && 
                <span className="mr-4">
                  <FontAwesomeIcon className="mr-1" icon={faClock} />
                  {movie.runtime} min
                </span>
              }
            </div>

            <p className="text-sm text-dark">{movie.overview}</p>
          </div>
        </section>
      }
    </main>
  )
}