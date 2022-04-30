import { call, put, SagaReturnType } from '@redux-saga/core/effects'
import { requestGetPopularMovies, requestGetTopRatedMovies } from '../../models/movieModel'
import { setPosters } from '../slices/movieSlice'

type TRequestGetTopRatedMovies = SagaReturnType<typeof requestGetTopRatedMovies>;
type TRequestGetPopularMovies = SagaReturnType<typeof requestGetPopularMovies>;

export function* handleGetTopRatedMovies() {
  try {
    const posters: TRequestGetTopRatedMovies = yield call(requestGetTopRatedMovies);

    yield put(setPosters(posters));
  } catch(err) {
    console.log(err);
  }
}

export function* handleGetPopularMovies() {
  try {
    const posters: TRequestGetPopularMovies = yield call(requestGetPopularMovies);

    yield put(setPosters(posters));
  } catch(err) {
    console.log(err);
  }
}