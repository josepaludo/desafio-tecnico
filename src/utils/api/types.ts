
export type TMovieType = {
    posterUrl: string;
    title: string;
    date: Date;
    id: number;
}

export type TFeaturedMoviesResponse = Array<TMovieType>

export type TGenre = {
    id: number
    name: string
}

export type TGenreResponse = {
    genres: Array<TGenre>
}

export type QueryParams = {
    query?: string,
    genre?: string|number,
    page?: string|number
}