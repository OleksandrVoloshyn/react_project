import {IMovie} from "./movie.interface";

export interface IMovieDetails {
    //todo change name
    page: number,
    results: IMovie[]
    total_pages: number,
    total_results: number
}