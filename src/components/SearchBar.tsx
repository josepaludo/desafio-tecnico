import { FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Path, SearchParam } from "../pages/pagePaths"


export default function SearchBar() {

    const navigate = useNavigate()

    function onSearch(e: FormEvent<HTMLFormElement>) {

        e.preventDefault()

        //@ts-expect-error No error
        const title = e.target[SearchParam.Title].value

        navigate({
            pathname: Path.Results,
            search: `?${SearchParam.Title}=${title}`

        })
    }

    return <>
        <form
            onSubmit={onSearch}
            className="
                flex
                rounded-full
                bg-stone-100
                py-2 pr-3 pl-6
                overflow-hidden
            "
        >
            <input
                name={SearchParam.Title}
                type="text"
                placeholder="Search for Movie Titles"
                className="
                    h-full
                    outline-none 
                    bg-inherit text-stone-900 
                    xsm:border-r xsm:border-stone-500
                    pr-2
                    grow
                "
            />

            <button
                className="
                    text-stone-900
                    my-auto ml-5 mr-3
                    hover:opacity-50 transition-opacity duration-500
                    hidden xsm:block
                "
                type="submit"
            >
                <SearchIcon />
            </button>

        </form>
    </>
}

function SearchIcon() {

    return <>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
    </>
}