import { useEffect } from 'react';
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
    <main>Home</main>
  )
}