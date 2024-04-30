import { useEffect, useState } from "react";
import { StorageKey } from "../utils/enums";
import { TMovieInfo, TMovieType } from "../utils/api/types";
import { MAX_STORED_MOVIES } from "../utils/constants";


export function useLocalStorage() {

    const [ moviesViewed, _setMoviesViewed ] = useState<Array<TMovieType>>([])

    function currentMovies() {

        const moviesString = localStorage.getItem(StorageKey.MoviesViewed)

        if (!moviesString) {
            return
        }

        const movies: Array<TMovieType> = JSON.parse(moviesString)

        return movies
    }

    function setMoviesViewed(movieInfo: TMovieInfo) {

        const movies = currentMovies()

        const movie: TMovieType = {
            date: new Date(movieInfo.release_date),
            id: movieInfo.id,
            posterUrl: movieInfo.poster_path,
            title: movieInfo.title,
            backdropPath: movieInfo.backdrop_path
        }

        let newMoviesViewed = movies ?? []
        newMoviesViewed = newMoviesViewed.filter(
            _movie => Number(_movie.id) !== Number(movie.id)
        )
        newMoviesViewed = [ movie, ...newMoviesViewed.slice(0, MAX_STORED_MOVIES) ]

        const stringValue = JSON.stringify(newMoviesViewed)
        localStorage.setItem(StorageKey.MoviesViewed, stringValue)

        _setMoviesViewed(newMoviesViewed)
    }

    useEffect(() => {

        const movies = currentMovies()

        if (!movies) {
            return
        }

        _setMoviesViewed( movies )

    }, [])

    return { moviesViewed, setMoviesViewed }
}