import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie, IMovieDetails, IMovieQueryParams, IMovieResponse} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    results: IMovie[],
    prevPage: boolean,
    nextPage: boolean,
    chosenMovie?: IMovieDetails,
}

const initialState: IState = {
    results: [],
    prevPage: false,
    nextPage: false,
    chosenMovie: undefined,
}

const getMovies = createAsyncThunk<IMovieResponse, Partial<IMovieQueryParams>>(
    'movieSlice/getMovies',
    async (QueryParamsObj) => {
        if (QueryParamsObj.query) {
            const {data} = await movieService.getByName(QueryParamsObj)
            return data
        }
        const {data} = await movieService.getMovies(QueryParamsObj)
        return data
    }
)

const getById = createAsyncThunk<IMovieDetails, { id: string }>(
    'movieSlice/getById',
    async ({id}) => {
        const {data} = await movieService.getById(id)
        return data
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload

                state.results = results
                state.prevPage = page > 1;
                state.nextPage = page < total_pages;
            })
            .addCase(getById.fulfilled, (state, action) => {
                let genre_names: string[] = []
                const {genres} = action.payload

                genres.forEach(genre => genre_names.push(genre['name']))
                action.payload.genres_name = genre_names.toString()
                state.chosenMovie = action.payload
            })

    }
});

const {reducer: movieReducer} = movieSlice;
const movieAction = {getById, getMovies}

export {movieReducer, movieAction}