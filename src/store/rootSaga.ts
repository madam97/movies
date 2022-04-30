import { takeLatest } from 'redux-saga/effects'
import { handleGetTopRatedMovies } from './sagas/movieSaga'
import { getTopRatedMovies } from './slices/movieSlice'

export function* watcherSaga() {
  yield takeLatest(getTopRatedMovies.type, handleGetTopRatedMovies);
}