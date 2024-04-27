
export enum RouteParam {
    MovieName = "movieName",
    CategoryName = "categoryName"
}

export enum BasePath {
    HomeCategory = "/category",
    Movie = "/movie"
}

export enum Path {
    Home = "/",
    HomeCategory = `${BasePath.HomeCategory}/:${RouteParam.CategoryName}`,
    Results = "/results",
    Movie = `${BasePath.Movie}/:${RouteParam.MovieName}`
}
