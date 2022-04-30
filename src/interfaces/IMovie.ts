import IMoviePoster from './IMoviePoster'

interface IMovie extends IMoviePoster {
  originalTitle: string,
  tagline: string,
  backdropPath: string | null,
  overview: number
}

export default IMovie;