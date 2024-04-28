import { useParams } from "react-router-dom"
import { RouteParam } from "../pagePaths"
import HomeCategorySubPage from "./HomeCategorySubPage"
import HomeSubPage from "./HomeSubPage"
import CategoryLinks from "./components/CategoryLinks"
import SearchBar from "./components/SearchBar"


type HomePageParams = {
    [RouteParam.CategoryName]?: string
    [RouteParam.Id]?: string
}

export default function HomePage() {

    const params = useParams<HomePageParams>()

    return <>

        <SearchBar />

        <CategoryLinks currentCategory={params[RouteParam.CategoryName]} />

        { 
            !(params[RouteParam.CategoryName] && params[RouteParam.Id] ) ?
            <HomeSubPage /> :
            <HomeCategorySubPage
                categoryName={params[RouteParam.CategoryName]}
                genreId={params[RouteParam.Id]}
            />
        }

    </>
}