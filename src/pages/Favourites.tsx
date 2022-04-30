import { useAppSelector } from '../hooks/useRedux'
import { selectFavMovies } from '../store/slices/movieSlice'
import MovieList from '../components/MovieList'

/**
 * The component of the Favourite movies page
 * @returns {JSX.Element}
 */
export default function Favourites() {

  /** @const {IMovie[]} movies The favourite movies that will be displayed */
  const movies = useAppSelector(selectFavMovies);

  // -----------------------------------------

  return (
    <MovieList 
      displayType="normal" 
      movies={movies}
      noDataText="You have no favourite movies yet..."
    />
  )
}