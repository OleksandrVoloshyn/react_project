import {axiosService, Res} from "./axios.service";
import {IGenre, IMovieDetails} from "../interfaces";
import {urls} from "../constants";

const MovieService = {
    getAll: (): Res<IMovieDetails> => axiosService.get(urls.movies),
    getGenres: (): Res<IGenre[]> => axiosService.get(urls.genres)
}

export {MovieService}