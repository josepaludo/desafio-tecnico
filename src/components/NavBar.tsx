import { Link } from "react-router-dom";
import { Path } from "../pages/pagePaths";


export default function NavBar() {

    return <>

        <nav className="p-5 bg-slate-900">

            <Link to={Path.Home} className="text-2xl font-semibold">
                MovieHub
            </Link>
        </nav>
    </>
}

