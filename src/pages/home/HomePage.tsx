import { Link, useParams } from "react-router-dom"
import { BasePath, Path, RouteParam } from "../pagePaths"
import HomeCategorySubPage from "./HomeCategorySubPage"
import HomeSubPage from "./HomeSubPage"


const categories = [ "one", "two", "three" ]


export default function HomePage() {

    const params = useParams<{[RouteParam.CategoryName]?: string}>()


    const getCategoryPath = (category: string): string => (
        category === params[RouteParam.CategoryName] ?
        Path.Home :
        `${BasePath.HomeCategory}/${category}`
    )

    return <>
        <h1>
            Home Page
        </h1>
    
        <div className="flex gap-2">
            { categories.map(category => (
                <Link to={getCategoryPath(category)} key={category}>
                    { category }
                </Link>
            ))}
        </div>

        { 
            !params[RouteParam.CategoryName] ?
            <HomeSubPage /> :
            <HomeCategorySubPage categoryName={params[RouteParam.CategoryName]} />
        }

    </>
}