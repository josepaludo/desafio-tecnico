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

    return <>
        <h1>
            Category Name { categoryName }
        </h1>
        <h1>
            Category Id { genreId }
        </h1>

        <Movies url={ApiRoute.MoviesByGenre} params={params} />
    </>
}