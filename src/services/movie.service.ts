import {axiosService, Res} from "./axios.service";

import {IGenre, IMovieResponse} from "../interfaces";
import {urls} from "../constants";
import {IMovieDetails} from "../interfaces/movie-details.interface";

const MovieService = {
    getMovies: (page: string): Res<IMovieResponse> => axiosService.get(urls.movies, {params: {page}}),
    getById: (id: string): Res<IMovieDetails> => axiosService.get(urls.movie + '/' + id),

    getByGenresId: (ids: number[]): Res<IMovieResponse> => axiosService.get(urls.movies + `?with_genres=${ids}`),
    getByName: (name: string): Res<IGenre[]> => axiosService.get(urls.search + `?query=${name}`)
}

export {MovieService}