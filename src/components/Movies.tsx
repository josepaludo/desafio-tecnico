import { useEffect, useState } from "react"
import { TQueryParams, TFeaturedMoviesResponse } from "../utils/api/types"
import { axiosClient } from "../utils/api/axiosClient"
import MoviePostersPlaceholder from "../pages/home/components/MoviePlaceholder"
import MoviePoster from "../pages/home/components/MoviePoster"


type Params = { url: string, params: TQueryParams }

export default function Movies({ url, params }: Params) {

    const [movies, setMovies] = useState<TFeaturedMoviesResponse|null>(null)
    const [page] = useState<number|string>(params.page ?? 1)

    useEffect(() => {

        params.page = page

        axiosClient
            .get( url, { params } )
            .then(res => {
                const data = res.data as TFeaturedMoviesResponse
                setMovies(data)
            })
    }, [page, params, url])


    return <>
        <div className="flex flex-wrap gap-5 justify-around md:justify-between">
            {
                !movies ? 
                <MoviePostersPlaceholder /> :
                movies.slice(0, 5).map(movie => (
                    <MoviePoster
                        key={movie.id}
                        id={movie.id}
                        date={movie.date}
                        posterUrl={movie.posterUrl}
                        title={movie.title}
                    />
                ))
            }
        </div>
    </>
}