import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL});

const auth_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGM3ZTc5NzNjZWJkMzIyYjU5NWYwZjY4NWRmYmM3YSIsInN1YiI6IjYyOTI1ZDE5MDllZDhmMTI1NTQ5Yzk3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4mhN4OcUUnKiM-mupY-FXQvIcwx1LqYhk85qGVQk3H0'
axiosService.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers!.Authorization = `Bearer ${auth_token}`
    return config
})

export type Res<T> = Promise<AxiosResponse<T>>
export {axiosService}