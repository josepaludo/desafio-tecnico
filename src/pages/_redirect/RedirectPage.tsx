import { Link } from "react-router-dom";
import { Path } from "../pagePaths";


export default function RedirectPage() {

    return <>
        <h1 className="m-3 text-2xl font-semibold">
            404 Not Found
        </h1>

        <Link
            to={Path.Home}
            className="block text-xl rounded m-3 py-2 px-3 font-semibold bg-slate-950 w-fit hover:bg-opacity-50"
        >
            Go to the Home Page
        </Link>
    </>
}