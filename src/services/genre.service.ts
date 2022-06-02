import {axiosService, Res} from "./axios.service";

import {IGenreResponse,} from "../interfaces";
import {urls} from "../constants";

const genreService = {
    getAllGenres: (): Res<IGenreResponse> => axiosService.get(urls.genres)
}

export {genreService}