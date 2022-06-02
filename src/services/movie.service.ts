import {axiosService, Res} from "./axios.service";

import {IMovie, IMovieDetails} from "../interfaces";
import {urls} from "../constants";

const MovieService = {
    getAll: (page: string): Res<IMovieDetails> => axiosService.get(urls.allMovies, {params: {page}}),
    getById: (id: number): Res<IMovie> => axiosService.get(urls.movie + '/' + id),
    // getByGenresId: (ids: number[]): Res<IMovieDetails> => axiosService.get(urls.allMovies + `?with_genres=${ids}`),
    getByGenresId: (ids: number[]): Res<IMovieDetails> => {
        console.log(ids)
        return axiosService.get(urls.allMovies + `?with_genres=${ids}`)
    },
getByName: (name: string): Res<any> => axiosService.get(urls.search + `?query=${name}`)
}

export {MovieService}