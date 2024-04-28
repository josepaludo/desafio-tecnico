import { useParams } from "react-router-dom"
import { RouteParam } from "../pagePaths"


type MoviePageParams = {
    [RouteParam.MovieName]: string,
    [RouteParam.Id]: string
}

export default function MoviePage() {

    const params = useParams<MoviePageParams>()

    return <>
        <h1>
            Movie Name: { params[RouteParam.MovieName] }
        </h1>
        <h1>
            Movie Id: { params[RouteParam.Id] }
        </h1>
    </>
}