interface IMovie {
  id: number,
  title: string,
  originalTitle: string,
  tagline: string,
  backdropPath: string | null,
  voteAverage: number,
  overview: number
}

export default IMovie;