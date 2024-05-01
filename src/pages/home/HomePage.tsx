import { useParams } from "react-router-dom"
import { RouteParam } from "../pagePaths"
import HomeCategorySubPage from "./HomeCategorySubPage"
import HomeSubPage from "./HomeSubPage"
import CategoryLinks from "./components/CategoryLinks"
import SearchBar from "../../components/SearchBar"


type HomePageParams = {
    [RouteParam.CategoryName]?: string
    [RouteParam.Id]?: string
}

export default function HomePage() {

    const params = useParams<HomePageParams>()

    const category = params[RouteParam.CategoryName]
    const id = params[RouteParam.Id]

    return <>

        <SearchBar />

        <CategoryLinks currentCategory={category} />

        { 
            !( category && id ) ?
            <HomeSubPage /> :
            <HomeCategorySubPage
                categoryName={category}
                genreId={id}
            />
        }

    </>
}
