import {axiosService, Res} from "./axios.service";

import {IGenreResponse,} from "../interfaces";
import {urls} from "../constants";

const genreService = {
    getAll: (): Res<IGenreResponse> => axiosService.get(urls.genres)
}

export {genreService}