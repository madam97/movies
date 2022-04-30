import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IMovie from '../../interfaces/IMovie'
import IMoviePoster from '../../interfaces/IMoviePoster'
import { TRootState } from '../configureStore'

interface IMovieState {
  posters: IMoviePoster[],
  movieDetailed: IMovie | null
}

const initialState: IMovieState = {
  posters: [],
  movieDetailed: null
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getTopRatedMovies() {},
    getPopularMovies() {},
    getMovieDetailed(state: IMovieState, action: PayloadAction<number>) {},

    setPosters(state: IMovieState, action: PayloadAction<IMoviePoster[]>) {
      const posters = action.payload;
      return { 
        ...state, 
        posters
      };
    },

    setMovieDetailed(state: IMovieState, action: PayloadAction<IMovie | null>) {
      const movieDetailed = action.payload;
      return { 
        ...state, 
        movieDetailed
      };
    }
  }
});

export const { getTopRatedMovies, getPopularMovies, getMovieDetailed, setPosters, setMovieDetailed } = movieSlice.actions;

export const selectPosters = (state: TRootState) => state.movie.posters;
export const selectMovieDetailed = (state: TRootState) => state.movie.movieDetailed;

export default movieSlice.reducer;