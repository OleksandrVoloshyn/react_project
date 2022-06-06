import {axiosService, Res} from "./axios.service";

import {IMovieDetails, IMovieQueryParams, IMovieResponse} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getMovies: (obj: Partial<IMovieQueryParams>): Res<IMovieResponse> => axiosService.get(urls.movies, {params: {...obj}}),
    getById: (id: string): Res<IMovieDetails> => axiosService.get(urls.movie + '/' + id),
    getByName: (obj: Partial<IMovieQueryParams>): Res<IMovieResponse> => axiosService.get(urls.search, {params: {...obj}}),
}

export {movieService}