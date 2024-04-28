import { Link } from "react-router-dom"
import { BasePath, Path } from "../../pagePaths"
import { useEffect, useState } from "react"
import { axiosClient } from "../../../utils/api/axiosClient"
import { TGenre, TGenreResponse } from "../../../utils/api/types"
import { camelCase } from "../../../utils/helperFunctions"
import { ApiRoute } from "../../../utils/api/apiRoutes"


type Params = {
    currentCategory?: string
}


export default function CategoryLinks({currentCategory}: Params) {

    const [genres, setGenres] = useState<Array<TGenre>|null>(null)

    useEffect(() => {
        axiosClient
            .get(ApiRoute.Genres)
            .then(res => {
                const data = res.data as TGenreResponse
                setGenres(data.genres)
            })
    }, [])

    const isCurrent: { [categoryId: number]: boolean } = {}

    for (const category of (genres ?? [])) {
        isCurrent[category.id] = camelCase(category.name) === currentCategory
    }

    const getCategoryPath = (category: TGenre): string => (
        isCurrent[category.id] ?
        Path.Home :
        `${BasePath.HomeCategory}/${category.id}/${camelCase(category.name)}`
    )

    return <>
        <div className="flex flex-wrap gap-2 my-10">
            { genres && genres.map(category => (
                <Link
                    to={getCategoryPath(category)}
                    key={category.id}
                    className={`
                        rounded-full px-12 py-2 shadow-md
                        transition-all duration-200
                        ${
                            isCurrent[category.id] ?
                            "bg-slate-600 text-stone-50 hover:bg-slate-700" :
                            "bg-slate-50 text-stone-900 hover:bg-slate-200"
                        }
                    `}
                >
                    { category.name }
                </Link>
            ))}
        </div>
    </>
}
