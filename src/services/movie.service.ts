import {axiosService, Res} from "./axios.service";

import {IMovieDetails, IMovieResponse} from "../interfaces";
import {urls} from "../constants";

const MovieService = {
    // @ts-ignore
    getAllOrByGenre: (obj): Res<any> => axiosService.get(urls.movies, {params: {...obj}}),
    // getMovies: (page: string): Res<IMovieResponse> => axiosService.get(urls.movies, {params: {page}}),
    getById: (id: string): Res<IMovieDetails> => axiosService.get(urls.movie + '/' + id),
    // getByGenresId: (with_genres: string, page: string = '1'): Res<IMovieResponse> => axiosService.get(urls.movies,
    //     {
    //         params: {
    //             with_genres,
    //             page
    //         }
    //     }),
    getByName: (name: string, page: string): Res<any[]> => axiosService.get(urls.search, {params: {query: name, page}}),

}

export {MovieService}