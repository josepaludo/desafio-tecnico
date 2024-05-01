import { useParams } from "react-router-dom"
import { RouteParam } from "../pagePaths"
import { useEffect, useState } from "react"
import { axiosClient } from "../../utils/api/axiosClient"
import { ApiRoute } from "../../utils/api/apiRoutes"
import { TCast, TCrew, TMoviePageResponse, TTrack } from "../../utils/api/types"
import { toDollars } from "../../utils/helperFunctions"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import MusicPlayer from "./components/MusicPlayer"


type MoviePageParams = {
    [RouteParam.MovieName]: string,
    [RouteParam.Id]: string
}

export default function MoviePage() {

    const [ musics, setMusics ] = useState<Array<TTrack>|null>(null)


    const [data, setData] = useState<TMoviePageResponse|null>(null)
    const moviePageParams = useParams<MoviePageParams>()
    const { setMoviesViewed } = useLocalStorage()

    const params = {
        movie_id: moviePageParams[RouteParam.Id]
    }

    useEffect(() => {

        axiosClient
            .get(ApiRoute.MovieDetails, { params })
            .then(res => {
                const data: TMoviePageResponse = res.data

                setData(data)
                setMoviesViewed(data.movieInfo)
            })

        axiosClient
            .get(ApiRoute.Songs)
            .then(res => {
                const data = res.data as Array<TTrack>
                setMusics(data)
            })
            .catch(err => console.log(err))
    }, [])


    if (!data) {
        return <>
            <div className="flex gap-10 mb-10">
                <div className="w-1/2 h-[600px] bg-slate-800"/>
                <div className="w-1/2">
                    <h1 className="text-5xl">
                        {
                            //@ts-expect-error No error
                            moviePageParams[RouteParam.MovieName].replaceAll("_", " ")
                        }
                    </h1>
                </div>
            </div>
            <div className="flex gap-10">
                <div className="w-1/2 text-2xl">
                    Elenco
                </div>
                <div className="w-1/2 text-2xl">
                    Trilha Sonora
                </div>
            </div>
        </>
    }

    const movie = data.movieInfo
    const { crew, cast } = data.credits

    return <>

        <div className="flex flex-col-reverse md:flex-row gap-10 pt-5">

            <img
                src={movie.poster_path}
                alt={"Poster do filme "+movie.title}
            />

            <div>
                <h1 className="text-4xl font-semibold mb-5">
                    { movie.title }
                </h1>

                <p className="flex flex-wrap gap-1 mb-3">
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
                </p>

                <p className="mb-3">
                    Média de avaliações: 
                    <span className="font-semibold ml-1">
                        { parseFloat(movie.vote_average.toFixed(1)) }
                    </span>
                </p>

                { movie.revenue > 0 &&
                    <p className="text-base">
                        Receita: { toDollars(movie.revenue) }
                    </p>
                }
                <p className="text-base">
                    Orçamento: { toDollars(movie.budget) }
                </p>

                <h2 className="text-2xl mb-3 mt-5 font-semibold">
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
                    Elenco
                </h2>

                <div className="flex flex-wrap gap-3 my-5">
                    { cast.map(_cast =>
                        <ProfileImage profile={_cast} key={_cast.id} />
                    )}
                </div>
            </div>

            <div className="w-full md:w-1/2 py-5">

                { musics && musics.length > 0 && <>
                    <div>
                        <h2 className="text-2xl">
                            Trilha Sonora
                        </h2>

                        <div className="py-3">
                            { 
                                musics?.map(music => (
                                    <MusicPlayer key={music.name} music={music} />
                                ))
                            }
                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-2xl">
                            Produtores
                        </h2>

                        <div className="flex flex-wrap gap-3 my-5">
                            { crew.map(_cast =>
                                <ProfileImage profile={_cast} key={_cast.id} />
                            )}
                        </div>
                    </div>
                </>}
            </div>
        </div>
    </>
}

function ProfileImage({ profile }: { profile: TCrew|TCast }) {

    return (
        <div className="text-center w-[200px]">
            {
                !profile.profile_path ?
                <div className="h-[300px] bg-slate-200" /> :
                <img
                    src={profile.profile_path}
                    alt={"Foto de perfil de "+profile.name}
                />
            }
            <p className="font-semibold mt-2">
                {profile.name}
            </p>
            { (profile as TCrew).job &&
                <p>
                    { (profile as TCrew).job }
                </p>
            }
            {
                (profile as TCast).profile_path &&
                <p>
                    { (profile as TCast).character }
                </p>
            }
        </div>
    )
}