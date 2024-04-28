import { Link, useParams } from "react-router-dom"
import { BasePath, Path, RouteParam } from "../pagePaths"
import HomeCategorySubPage from "./HomeCategorySubPage"
import HomeSubPage from "./HomeSubPage"
import CategoryLinks from "./components/CategoryLinks"
import SearchBar from "./components/SearchBar"



export default function HomePage() {

    const params = useParams<{[RouteParam.CategoryName]?: string}>()

    return <>

        <SearchBar />

        <CategoryLinks currentCategory={params[RouteParam.CategoryName]} />

        { 
            !params[RouteParam.CategoryName] ?
            <HomeSubPage /> :
            <HomeCategorySubPage categoryName={params[RouteParam.CategoryName]} />
        }

    </>
}