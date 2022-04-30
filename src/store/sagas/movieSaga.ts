import { call, put, SagaReturnType } from '@redux-saga/core/effects'
import { requestGetTopRatedMovies } from '../../models/movieModel'
import { setPosters } from '../slices/movieSlice'

type TRequestGetTopRatedMovies = SagaReturnType<typeof requestGetTopRatedMovies>;

export function* handleGetTopRatedMovies() {
  try {
    const posters: TRequestGetTopRatedMovies = yield call(requestGetTopRatedMovies);

    yield put(setPosters(posters));
  } catch(err) {
    console.log(err);
  }
}