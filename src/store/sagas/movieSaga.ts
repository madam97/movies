import { call, put, SagaReturnType } from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit';
import { requestGetMovieDetailed, requestGetPopularMovies, requestGetTopRatedMovies } from '../../models/movieModel'
import { setMovieDetailed, setPosters } from '../slices/movieSlice'

type TRequestGetTopRatedMovies = SagaReturnType<typeof requestGetTopRatedMovies>;
type TRequestGetPopularMovies = SagaReturnType<typeof requestGetPopularMovies>;
type TRequestGetMovieDetailed = SagaReturnType<typeof requestGetMovieDetailed>;

/**
 * Fetches and stores the top rated movies
 */
export function* handleGetTopRatedMovies() {
  try {
    const posters: TRequestGetTopRatedMovies = yield call(requestGetTopRatedMovies);

    yield put(setPosters(posters));
  } catch(err) {
    console.log(err);
  }
}

/**
 * Fetches and stores the popular movies
 */
export function* handleGetPopularMovies() {
  try {
    const posters: TRequestGetPopularMovies = yield call(requestGetPopularMovies);

    yield put(setPosters(posters));
  } catch(err) {
    console.log(err);
  }
}

/**
 * Fetches and stores the data of the movie with the given id
 * @param {PayloadAction<number>} action payload = id of the movie
 */
export function* handleGetMovieDetailed(action: PayloadAction<number>) {
  try {
    const movie: TRequestGetMovieDetailed = yield call(requestGetMovieDetailed, action.payload);

    yield put(setMovieDetailed(movie));
  } catch(err) {
    console.log(err);
  }
}