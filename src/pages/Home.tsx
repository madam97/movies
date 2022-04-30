import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviePoster from '../components/MoviePoster';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { getPopularMovies, getTopRatedMovies, selectPosters } from '../store/slices/movieSlice'

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
    <main>
      <section className="px-4 pt-14 pb-6 bg-white">
        <h1 className="mb-1.5 text-2xl text-dark font-extrabold">Hello Verycreatives</h1>
        <p className="pl-4 font-semibold">Check these movies out</p>
      </section>

      <section className="grid gap-x-1 gap-y-2 grid-cols-2 px-2 py-3">
        {posters.map(poster => <MoviePoster key={poster.id} poster={poster} />)}
      </section>
    </main>
  )
}