import axios from 'axios'
import IMovie from '../interfaces/IMovie';
import IMoviePoster from '../interfaces/IMoviePoster'
import IObject from '../interfaces/IObject'

const BASE_URL = import.meta.env.VITE_MOVIEDB_API_BASE_URL;
const KEY = import.meta.env.VITE_MOVIEDB_API_KEY;
const IMG_BASE_PATH = import.meta.env.VITE_MOVIEDB_IMG_BASE_PATH;

/**
 * Returns the poster data from the given movie
 * @param {IObject} movie 
 * @returns {IMoviePoster | null}
 */
const getPosterFromMovie = (movie: IObject): IMoviePoster | null => {
  if (movie.id && movie.title) {
    return {
      id: movie.id,
      title: movie.title,
      posterPath: movie.poster_path ? IMG_BASE_PATH+movie.poster_path : null,
      voteAverage: movie.vote_average ?? 0
    } as IMoviePoster;
  } else {
    return null;
  }
}

/**
 * Returns only the needed data of the given movie
 * @param {IObject} movie 
 * @returns {IMovie | null}
 */
const getMovieData = (movie: IObject): IMovie | null => {
  const poster = getPosterFromMovie(movie);

  if (poster) {
    return {
      ...poster,
      originalTitle: movie.original_title ?? '',
      tagline: movie.tagline ?? '',
      backdropPath: movie.backdrop_path ? IMG_BASE_PATH+movie.backdrop_path : null,
      overview: movie.overview ?? ''
    }
  } else {
    return null;
  }
}

/**
 * Fetches the movies on the given endpoint and returns their poster data
 * @param {'top_rated' | 'popular'} endpoint 
 * @returns {Promise<IMoviePoster[]>}
 */
const requestGetMovies = async (endpoint: 'top_rated' | 'popular'): Promise<IMoviePoster[]> => {
  const posters: IMoviePoster[] = [];

  try {
    const resp = await axios.request({
      method: 'get',
      url: BASE_URL+'/movie/'+endpoint,
      params: {
        api_key: KEY,
        language: 'en-US'
      }
    });
  
    const { data } = resp;

    if (data.results) {
      for (let i = 0; i < data.results.length; ++i) {
        const movie = getPosterFromMovie(data.results[i]);
    
        if (movie) {
          posters.push(movie);
        }
      }
    }

  } catch (err) {
    console.log(err);
  } finally {
    return posters;
  }
}

/**
 * Returns the top rated movies' poster data
 * @returns {Promise<IMoviePoster[]>}
 */
export const requestGetTopRatedMovies = (): Promise<IMoviePoster[]> => {
  return requestGetMovies('top_rated');
}

/**
 * Returns the popular movies' poster data
 * @returns {Promise<IMoviePoster[]>}
 */
export const requestGetPopularMovies = (): Promise<IMoviePoster[]> => {
  return requestGetMovies('popular');
}

/**
 * Returns the given movie's data
 * @param {number} id
 * @return {Promise<IMovie | null>}
 */
export const requestGetMovieDetailed = async (id: number): Promise<IMovie | null> => {
  let movie: IMovie | null = null;

  try {
    const resp = await axios.request({
      method: 'get',
      url: BASE_URL + '/movie/' + id,
      params: {
        api_key: KEY,
        language: 'en-US'
      }
    });

    const { data } = resp;

    movie = getMovieData(data);
  } catch(err) {
    console.log(err);
  } finally {
    return movie;
  }
}