import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IMoviePoster from '../../interfaces/IMoviePoster'
import { TRootState } from '../configureStore'

interface IMovieState {
  posters: IMoviePoster[]
}

const initialState: IMovieState = {
  posters: []
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getTopRatedMovies() {},

    setPosters(state: IMovieState, action: PayloadAction<IMoviePoster[]>) {
      const posters = action.payload;
      return { 
        ...state, 
        posters
      };
    }
  }
});

export const { getTopRatedMovies, setPosters } = movieSlice.actions;

export const selectPosters = (state: TRootState) => state.movie.posters;

export default movieSlice.reducer;