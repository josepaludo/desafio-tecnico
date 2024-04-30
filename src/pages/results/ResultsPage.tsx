import { Link, useSearchParams } from "react-router-dom"
import { Path, SearchParam } from "../pagePaths"
import SearchBar from "../../components/SearchBar"
import Movies from "../../components/Movies"
import { ApiRoute } from "../../utils/api/apiRoutes"
import { TQueryParams } from "../../utils/api/types"
import RedirectPage from "../_redirect/RedirectPage"


export default function ResultsPage() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchParams, _setSearchParam] = useSearchParams()

    const title =  searchParams.get(SearchParam.Title)

    if (!title) {
        return <RedirectPage />
    }

    const params: TQueryParams = {
        query: title
    }
    console.log(title)


    return <>

        <SearchBar />

        <Link to={Path.Home} className="flex my-3 hover:opacity-80 transition-opacity duration-100">
            <ReturnIcon />
            <span className="ml-3">
                Voltar
            </span>
        </Link>

        <h1 className="text-2xl my-5">
            Exibindo resultados para: 
            <span className="ml-2 font-semibold">
                { title }
            </span>
        </h1>

        <Movies url={ApiRoute.FindMovie} params={params} />
    </>
}


function ReturnIcon() {

    return (
        <div className="flex items-center justify-center">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
        </div>
    )
}