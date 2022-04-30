import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faHeart as faHeartSolid, faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { addFavMovie, getMovieDetailed, isFavMovie, removeFavMovie, selectMovieDetailed } from '../store/slices/movieSlice';
import Image from '../components/Image';
import HeaderContainer from '../components/HeaderContainer';

export default function MovieDetailed() {

  const navigate = useNavigate();

  const { id } = useParams();
  const movieId = id ? parseInt(id) : -1;

  const dispatch = useAppDispatch();

  /** Loads the movie */
  useEffect(() => {
    if (movieId !== -1) {
      dispatch(getMovieDetailed(movieId));
    }
  }, [id]);

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
    <>
      <HeaderContainer>
        <button className="flex items-center mr-2.5" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <span className="mr-auto font-bold">
          Movie Details
        </span>

        {favorite && 
          <button className="flex items-center" onClick={e => toggleFavorite(e, false)}>
            <FontAwesomeIcon icon={faHeartSolid} />
          </button>
        }
        {!favorite && 
          <button className="flex items-center" onClick={e => toggleFavorite(e, true)}>
            <FontAwesomeIcon icon={faHeartRegular} />
          </button>
        }
      </HeaderContainer>

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
    </>
  )
}