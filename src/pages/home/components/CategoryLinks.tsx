import { Link } from "react-router-dom"
import { BasePath, Path } from "../../pagePaths"
import { useEffect, useState } from "react"
import { axiosClient } from "../../../utils/api/axiosClient"
import { TGenre, TGenreResponse } from "../../../utils/api/types"
import { camelCase } from "../../../utils/helperFunctions"
import { ApiRoute } from "../../../utils/api/apiRoutes"
import { shuffleArray } from "../../../utils/functions"


type Params = {
    currentCategory?: string
}

const MAX_GENRES = 6

export default function CategoryLinks({currentCategory}: Params) {

    const [genres, setGenres] = useState<Array<TGenre>|null>(null)
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {

        axiosClient
            .get(ApiRoute.Genres)
            .then(res => {
                const data = res.data as TGenreResponse
                setGenres(data.genres)
            })
    }, [])

    const isCurrent: { [categoryId: number]: boolean } = {}

    console.log("")
    for (const category of (genres ?? []).sort((a, b) => a.id - b.id)) {
        isCurrent[category.id] = camelCase(category.name) === currentCategory
    }

    const getCategoryPath = (category: TGenre): string => (
        isCurrent[category.id] ?
        Path.Home :
        `${BasePath.HomeCategory}/${category.id}/${camelCase(category.name)}`
    )

    const visibleGenres = (
        (!genres || showAll) ? genres :
        shuffleArray(genres.slice(0, MAX_GENRES))
    )

    for (const category of genres ?? []) {
        console.log(category.id)
    }

    return <>
        <div className="flex flex-wrap gap-2 my-10">
            { visibleGenres && visibleGenres.map(category => (

                <Link
                    to={getCategoryPath(category)}
                    key={category.id}
                    className={`
                        rounded-full px-12 py-2 shadow-md
                        transition-all duration-200 block
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

            { !showAll &&
                <button
                    onClick={() => setShowAll(true)} 
                    type="button"
                    className="
                        rounded-full px-12 py-2 shadow-md
                        border 
                        block
                    "
                >
                    Show All
                </button>
            }
        </div>
    </>
}
