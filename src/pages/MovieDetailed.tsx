import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faHeart as faHeartSolid, faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { getMovieDetailed, selectMovieDetailed } from '../store/slices/movieSlice';
import Image from '../components/Image';
import HeaderContainer from '../components/HeaderContainer';

export default function MovieDetailed() {

  const navigate = useNavigate();

  const { id } = useParams();

  const dispatch = useAppDispatch();

  /** Loads the movie */
  useEffect(() => {
    if (id) {
      dispatch(getMovieDetailed(parseInt(id)));
    }
  }, [id]);

  /** @const {IMovie} movie The movie, its data will appears */
  const movie = useAppSelector(selectMovieDetailed);

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

        <button className="flex items-center">
          <FontAwesomeIcon icon={faHeartRegular} />
        </button>
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