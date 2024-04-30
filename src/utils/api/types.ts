
export type TMovieType = {
    posterUrl: string;
    title: string;
    date: Date;
    id: number;
    backdropPath?: string
}

export type TFeaturedMoviesResponse = Array<TMovieType>

export type TGenre = {
    id: number
    name: string
}

export type TGenreResponse = {
    genres: Array<TGenre>
}

export type TQueryParams = {
    query?: string,
    genre?: string|number,
    page?: string|number
}


export type TMoviePageResponse = {
    credits: TCredits,
    movieInfo: TMovieInfo
}

export type TCredits = {
    crew: Array<TCrew>,
    cast: Array<TCast>
}

export type TCast = {
    id: number;
    character: string;
    name: string;
    profile_path: string;
}

export type TCrew = {
    id: number;
    job: string;
    name: string;
    profile_path: string | null;
}

export type TMovieInfo = {
    backdrop_path: string;
    budget: number;
    revenue: number;
    genres: { id: number; name: string }[];
    id: number;
    overview: string;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    release_date: string;
    runtime: number;
    title: string;
    vote_average: number;

    // homepage: string;
    // status: string;
}

export enum Jobs {
    Director = "Director",
    Screenplay = "Screenplay",
    Producer = "Producer"
}

export const JobsList = [
    Jobs.Director,
    Jobs.Producer,
    Jobs.Screenplay,
]
