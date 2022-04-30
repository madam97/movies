import { takeLatest } from 'redux-saga/effects'
import { handleGetPopularMovies, handleGetTopRatedMovies } from './sagas/movieSaga'
import { getPopularMovies, getTopRatedMovies } from './slices/movieSlice'

export function* watcherSaga() {
  yield takeLatest(getTopRatedMovies.type, handleGetTopRatedMovies);
  yield takeLatest(getPopularMovies.type, handleGetPopularMovies);
}