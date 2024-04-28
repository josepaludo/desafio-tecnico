import { Link } from "react-router-dom"
import { BasePath, Path } from "../../pagePaths"


type Params = {
    currentCategory?: string
}

const categoryNames = [ "one", "two", "three", "four", "five", "six", "seven", "eight" ]


export default function CategoryLinks({currentCategory}: Params) {

    const isCurrent: { [category: string]: boolean } = {}

    for (const category of categoryNames) {
        isCurrent[category] = category === currentCategory
    }

    const getCategoryPath = (category: string): string => (
        isCurrent[category] ? Path.Home : `${BasePath.HomeCategory}/${category}`
    )

    return <>
        <div className="flex flex-wrap gap-2 my-10">
            { categoryNames.map(category => (
                <Link
                    to={getCategoryPath(category)}
                    key={category}
                    className={`
                        rounded-full px-12 py-2 shadow-md
                        transition-all duration-200
                        ${
                            isCurrent[category] ?
                            "bg-slate-600 text-stone-50 hover:bg-slate-700" :
                            "bg-slate-50 text-stone-900 hover:bg-slate-200"
                        }
                    `}
                >
                    { category }
                </Link>
            ))}
        </div>
    </>
}
