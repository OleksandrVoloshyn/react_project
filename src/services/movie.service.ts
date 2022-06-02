import {axiosService, Res} from "./axios.service";

import {IMovie, IMovieDetails} from "../interfaces";
import {urls} from "../constants";

const MovieService = {
    getMovies: (page: string): Res<IMovieDetails> => axiosService.get(urls.movies, {params: {page}}),
    getById: (id: string): Res<IMovie> => axiosService.get(urls.movie + '/' + id),

    getByGenresId: (ids: number[]): Res<IMovieDetails> => axiosService.get(urls.movies + `?with_genres=${ids}`),
    getByName: (name: string): Res<any> => axiosService.get(urls.search + `?query=${name}`)
}

export {MovieService}