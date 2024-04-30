import { Link } from "react-router-dom";
import { TMovieType } from "../../../utils/api/types";
import { camelCase, formatDate } from "../../../utils/helperFunctions";
import { BasePath } from "../../pagePaths";


export default function MoviePoster({id, title, date, posterUrl, small}: TMovieType& {small?: boolean}) {

    return <>
        <div className={ small ? "max-w-[150px]" : "max-w-[250px]" }>
            <img
                className="w-full max-w-sm"
                src={posterUrl}
                alt={`Poster do filme '${title}'.`}
            />

            <Link
                to={`${BasePath.Movie}/${id}/${camelCase(title)}`}
                className="font-bold text-xl mt-2 mb-1 block text-center"
            >
                { title }
            </Link>
            <p className="mb-2 text-center">
                { formatDate(date) }
            </p>
        </div>
    </>
}