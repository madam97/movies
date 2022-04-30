import { useEffect } from 'react';
import MoviePoster from '../components/MoviePoster';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { getTopRatedMovies, selectPosters } from '../store/slices/movieSlice'

export default function Home() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);

  const posters = useAppSelector(selectPosters);

  console.log(posters);

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