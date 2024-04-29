import { useParams } from "react-router-dom"
import { RouteParam } from "../pagePaths"
import { useEffect, useState } from "react"
import { axiosClient } from "../../utils/api/axiosClient"
import { ApiRoute } from "../../utils/api/apiRoutes"
import { TMovieInfo } from "../../utils/api/types"


type MoviePageParams = {
    [RouteParam.MovieName]: string,
    [RouteParam.Id]: string
}

export default function MoviePage() {

    const [movie, setMovie] = useState<TMovieInfo|null>(null)
    const moviePageParams = useParams<MoviePageParams>()

    const params = {
        movie_id: moviePageParams[RouteParam.Id]
    }

    useEffect(() => {
        axiosClient
            .get(ApiRoute.MovieDetails, { params })
            .then(res => {
                const data = res.data as {
                    movieInfo: TMovieInfo,
                    credits: unknown
                }
                console.log(data.credits)
                setMovie(data.movieInfo)
            })
    }, [])

    if (!movie) {
        return <>
            Loading
        </>
    }

    return <>
        <div className="flex flex-col md:flex-row gap-10 pt-5">

            <div className="
                w-80 min-w-80
                h-96
                bg-slate-300
            ">
            </div>

            <div>
                <h1 className="text-4xl font-semibold mb-5">
                    { movie.title }
                </h1>

                <div className="flex flex-wrap gap-1 mb-3">
                    <span className="font-semibold">
                        { new Date(movie.release_date).getFullYear() }
                    </span>
                    |
                    <span className="font-semibold ">
                        { movie.genres.map(genre => genre.name).join(", ") }
                    </span>
                    |
                    <span className="font-semibold">
                        { movie.runtime }min
                    </span>
                    |
                    <span className="font-semibold ">
                        { movie.production_companies
                            .map(production_company => production_company.name)
                            .join(", ") }
                    </span>
                </div>

                <div className="mb-3">
                    Média de avaliações: 
                    <span className="font-semibold ml-1">
                        { parseFloat(movie.vote_average.toFixed(1)) }
                    </span>
                </div>

                <h2 className="text-2xl mb-3">
                    Sinopse
                </h2>
                <p>
                    { movie.overview }
                </p>
            </div>
        </div>

        <div className="flex flex-col gap-5 md:flex-row">

            <div className="w-full md:w-1/2 py-5">
                <h2 className="text-2xl">
                    Atores
                </h2>

                <div className="flex flex-wrap gap-3 my-5">
                    {
                        ["João", "Maria", "Lucas", "Carlos", "Renato", "Josefina"]
                        .map(nome => (
                            <div key={nome} >
                                <div className="h-60 w-40 bg-slate-300"></div>
                                <p className="text-center">
                                    {nome}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="w-full md:w-1/2 py-5">
                <h2 className="text-2xl">
                    Trilha Sonora
                </h2>

                <div className="bg-slate-300 min-h-96 my-5">
                </div>
            </div>
        </div>
    </>
}