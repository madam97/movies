import axios from "axios"
import IMoviePoster from "../interfaces/IMoviePoster"

const BASE_URL = import.meta.env.VITE_MOVIEDB_API_BASE_URL;
const KEY = import.meta.env.VITE_MOVIEDB_API_KEY;
const IMG_BASE_PATH = import.meta.env.VITE_MOVIEDB_IMG_BASE_PATH;

/**
 * Returns the top rated movies
 * @returns {Promise<IMoviePoster[]>}
 */
export const requestGetTopRatedMovies = async (): Promise<IMoviePoster[]> => {
  const posters: IMoviePoster[] = [];

  try {
    const resp = await axios.request({
      method: 'get',
      url: BASE_URL+'/movie/top_rated',
      params: {
        api_key: KEY,
        language: 'en-US'
      }
    });
  
    const { data } = resp;

    if (data.results) {
      for (let i = 0; i < data.results.length; ++i) {
        const movie = data.results[i];

        if (movie.id && movie.title && movie.vote_average) {
          posters.push({
            id: movie.id,
            title: movie.title,
            posterPath: movie.poster_path ? IMG_BASE_PATH+movie.poster_path : null,
            voteAverage: movie.vote_average
          } as IMoviePoster);
        }
      }
    }

  } catch (err) {
    console.log(err);
  } finally {
    return posters;
  }
}


import.meta.env.VITE_MOVIEDB_API_BASE_URL