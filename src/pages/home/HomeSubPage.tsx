import { ApiRoute } from "../../utils/api/apiRoutes"
import Movies from "../../components/Movies"


export default function HomeSubPage() {


    return <>

        <div className="flex flex-col lg:flex-row gap-10">

            <div className="w-full lg:w-1/2">

                <h1 className="text-3xl">
                    Últimos Acessados
                </h1>
            </div>

            <div className="w-full lg:w-1/2">

                <div className="h-full w-full min-h-96 bg-red-400"></div>
            </div>
        </div>

        <h1 className="text-4xl my-10">
            Filmes em destaque
        </h1>

        <Movies url={ApiRoute.FeaturedMovies} params={{}} />
    </>
}
