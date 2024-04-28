
export enum RouteParam {
    MovieName = "movieName",
    CategoryName = "categoryName",
    Id = "id"
}

export enum BasePath {
    HomeCategory = "/category",
    Movie = "/movie"
}

export enum Path {
    Home = "/",
    HomeCategory = `${BasePath.HomeCategory}/:${RouteParam.Id}/:${RouteParam.CategoryName}`,
    Results = "/results",
    Movie = `${BasePath.Movie}/:${RouteParam.Id}/:${RouteParam.MovieName}`
}
