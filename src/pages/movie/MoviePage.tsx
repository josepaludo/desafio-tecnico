import { useParams } from "react-router-dom"
import { RouteParam } from "../pagePaths"


export default function MoviePage() {

    const params = useParams<{[RouteParam.MovieName]: string}>()

    return <>
        <h1>
            Movie Page { params[RouteParam.MovieName] }
        </h1>
    </>
}