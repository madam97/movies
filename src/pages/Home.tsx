import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { getPopularMovies, getTopRatedMovies, selectPosters } from '../store/slices/movieSlice'
import MovieList from '../components/MovieList'

/**
 * The component of the Home page
 * @returns {JSX.Element}
 */
export default function Home() {

  /** Fetches the top rated or popular movies */
  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const listType = searchParams.get('list');

    if (!listType || listType === 'popular') {
      dispatch(getPopularMovies());
    } else if (listType === 'topRated') {
      dispatch(getTopRatedMovies());
    }
  }, [searchParams]);

  /** @const {IMoviePoster[]} posters The movie posters that will be displayed */
  const posters = useAppSelector(selectPosters);

  // -----------------------------------------

  return (
    <MovieList 
      displayType="poster" 
      movies={posters}
      noDataText="There are no movies to display..."
    />
  )
}