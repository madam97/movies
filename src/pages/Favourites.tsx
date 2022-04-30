import { useAppSelector } from '../hooks/useRedux'
import { selectFavMovies } from '../store/slices/movieSlice'
import MovieList from '../components/MovieList'
import IMovie from '../interfaces/IMovie';

/**
 * The component of the Favourite movies page
 * @returns {JSX.Element}
 */
export default function Favourites() {

  /** @const {IMovie[] | null} movies The favourite movies that will be displayed */
  let movies: IMovie[] | null = null;

  movies = useAppSelector(selectFavMovies);

  // -----------------------------------------

  return (
    <MovieList 
      displayType="normal" 
      movies={movies}
      noDataText="You have no favourite movies yet..."
    />
  )
}