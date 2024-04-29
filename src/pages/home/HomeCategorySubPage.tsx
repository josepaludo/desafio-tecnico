import { ApiRoute } from "../../utils/api/apiRoutes"
import Movies from "../../components/Movies"



type Params = {
    categoryName: string,
    genreId: string
}

export default function HomeCategorySubPage({ categoryName, genreId }: Params) {

    const params = {
        genre: genreId
    }

    const title = categoryName
        .split("_")
        .map(term =>
            term.slice(0, 1).toUpperCase() + term.slice(1)
        )
        .join(" ")

    return <>
        <h1 className="text-3xl my-5">
            Gênero:
            <span className="ml-2 font-semibold">
                {title}
            </span>
        </h1>
        <Movies url={ApiRoute.MoviesByGenre} params={params} />
    </>
}