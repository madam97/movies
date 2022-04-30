import { takeLatest } from 'redux-saga/effects'
import { handleGetMovieDetailed, handleGetPopularMovies, handleGetTopRatedMovies } from './sagas/movieSaga'
import { getMovieDetailed, getPopularMovies, getTopRatedMovies } from './slices/movieSlice'

export function* watcherSaga() {
  yield takeLatest(getTopRatedMovies.type, handleGetTopRatedMovies);
  yield takeLatest(getPopularMovies.type, handleGetPopularMovies);
  yield takeLatest(getMovieDetailed.type, handleGetMovieDetailed);
}