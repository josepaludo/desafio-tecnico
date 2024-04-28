import { useEffect, useState } from "react"
import { QueryParams, TFeaturedMoviesResponse } from "../utils/api/types"
import { ApiRoute } from "../utils/api/apiRoutes"
import { axiosClient } from "../utils/api/axiosClient"
import MoviePostersPlaceholder from "../pages/home/components/MoviePlaceholder"
import MoviePoster from "../pages/home/components/MoviePoster"


type Params = { url: string, params: QueryParams }

export default function Movies({ url, params }: Params) {

    const [movies, setMovies] = useState<TFeaturedMoviesResponse|null>(null)
    const [page, setPage] = useState<number|string>(params.page ?? 1)

    useEffect(() => {

        console.log("USE EFFECT HERE")

        params.page = page

        axiosClient
            .get( url, { params } )
            .then(res => {
                const data = res.data as TFeaturedMoviesResponse
                setMovies(data)
            })
            .catch(err => console.log(ApiRoute.FeaturedMovies, " | ERROR : ", err) )
    }, [page, params])

    return <>
        <div className="flex flex-wrap gap-5 justify-around md:justify-between">
            {
                !movies ? 
                <MoviePostersPlaceholder /> :
                [movies[0]].map(movie => (
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
        <MoviePostersPlaceholder />
    </>
}