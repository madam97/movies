import IMoviePoster from './IMoviePoster'

interface IMovie extends IMoviePoster {
  originalTitle: string,
  tagline: string,
  backdropPath: string | null,
  overview: number,
  status: string,
  runtime: number
}

export default IMovie;