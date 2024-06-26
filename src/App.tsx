import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import ResultsPage from "./pages/results/ResultsPage"
import MoviePage from "./pages/movie/MoviePage"
import RedirectPage from "./pages/_redirect/RedirectPage"
import { Path } from "./pages/pagePaths"
import LayoutPage from "./pages/_layout/LayoutPage"


const routes: Array<RouteObject> = [
    {
        path: Path.Home,
        element: <HomePage />,
        children: [{
            path: Path.HomeCategory,
            element: <HomePage />
        }]
    },
    {
        path: Path.Results,
        element: <ResultsPage />
    },
    {
        path: Path.Movie,
        element: <MoviePage />
    }
]

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPage />,
        errorElement: <RedirectPage />,
        children: routes,
    }
])


export default function App() {

    return <RouterProvider  router={router} />
}
