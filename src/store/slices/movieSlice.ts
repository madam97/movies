import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IMovie from '../../interfaces/IMovie'
import IMoviePoster from '../../interfaces/IMoviePoster'
import { TRootState } from '../configureStore'

interface IMovieState {
  posters: IMoviePoster[],
  movieDetailed: IMovie | null,
  favMovies: IMovie[]
}

const initialState: IMovieState = {
  posters: [],
  movieDetailed: null,
  favMovies: []
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
    },

    addFavMovie(state: IMovieState, action: PayloadAction<IMovie>) {
      const movie = action.payload;

      if (!state.favMovies.find(favMovie => favMovie.id === movie.id)) {
        return { 
          ...state, 
          favMovies: [
            ...state.favMovies,
            movie
          ]
        };
      } else {
        return state;
      }
    },

    removeFavMovie(state: IMovieState, action: PayloadAction<number>) {
      const id = action.payload;

      const index = state.favMovies.findIndex(favMovie => favMovie.id === id);

      if (index > -1) {
        const favMovies = state.favMovies.slice();
        favMovies.splice(index, 1);

        return { 
          ...state, 
          favMovies: [
            ...favMovies
          ]
        };
      } else {
        return state;
      }
    }
  }
});

export const { getTopRatedMovies, getPopularMovies, getMovieDetailed, setPosters, setMovieDetailed, addFavMovie, removeFavMovie } = movieSlice.actions;

export const selectPosters = (state: TRootState) => state.movie.posters;
export const selectMovieDetailed = (state: TRootState) => state.movie.movieDetailed;
export const selectFavMovies = (state: TRootState) => state.movie.favMovies;
export const isFavMovie = (id: number) => (state: TRootState) => state.movie.favMovies.findIndex(favMovie => favMovie.id === id) > -1;

export default movieSlice.reducer;