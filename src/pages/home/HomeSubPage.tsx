import { ApiRoute } from "../../utils/api/apiRoutes"
import Movies from "../../components/Movies"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import MoviePoster from "./components/MoviePoster"


export default function HomeSubPage() {

    const { moviesViewed } = useLocalStorage()

    const showMoviesViewed = moviesViewed.length > 0

    const index = Math.floor(Math.random()*100)%( showMoviesViewed ? moviesViewed.length : 1)
    const backdropUrl = showMoviesViewed ? moviesViewed[index].backdropPath : undefined


    return <>

        <div className="flex flex-col lg:flex-row gap-10">
            {
                showMoviesViewed && <>
                    <div className="w-full lg:w-1/2">

                        <h1 className="text-3xl mb-3">
                            Últimos Acessados
                        </h1>

                        <div className="flex flex-wrap gap-3">

                            {
                                moviesViewed.map(movie => (
                                    <MoviePoster
                                        key={movie.id}
                                        id={movie.id}
                                        date={movie.date}
                                        posterUrl={movie.posterUrl}
                                        title={movie.title}
                                        small
                                    />
                                ))
                            }
                        </div>

                    </div>


                    <div className={ "w-full lg:w-1/2" }>

                        <img
                            src={backdropUrl}
                        />
                        {/* <div className="h-full w-full min-h-96 bg-red-400"></div> */}
                    </div>
                </>
            }
        </div>

        <h1 className="text-4xl my-10">
            Filmes em destaque
        </h1>

        <Movies url={ApiRoute.FeaturedMovies} params={{}} />
    </>
}
