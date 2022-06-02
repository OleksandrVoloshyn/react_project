import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie, IMovieDetails} from "../../interfaces";
import {MovieService} from "../../services";

interface IState {
    results: IMovie[],
    prevPage: boolean,
    nextPage: boolean,
    chosenMovie: IMovie | null
}

const initialState: IState = {
    results: [],
    prevPage: false,
    nextPage: false,
    chosenMovie: null
}

const getMovies = createAsyncThunk<IMovieDetails, string>(
    'movieSlice/getAll',
    async (page) => {
        const {data} = await MovieService.getMovies(page);
        return data
    }
);

const getById = createAsyncThunk<IMovie, { id: string }>(
    'movieSlice/getById',
    async ({id}) => {
        const {data} = await MovieService.getById(id)
        return data
    }
)

const getByGenresId = createAsyncThunk<IMovieDetails, { ids: number[] }>(
    'movieSlice/getByGenresId',
    async ({ids}) => {
        const {data} = await MovieService.getByGenresId(ids)
        return data
    }
)

const getBySearchName = createAsyncThunk<IMovieDetails, { name: string }>(
    'movieSlice/getBySearchName',
    async ({name}) => {
        const {data} = await MovieService.getByName(name)
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
                const {genres} = action.payload
                const res: string[] = []
                if (genres) {
                    for (const genre of genres) {
                        res.push(genre['name'])
                    }
                }
                action.payload.genres = res
                state.chosenMovie = action.payload
            })
            .addCase(getByGenresId.fulfilled, (state, action) => {
                    state.results = action.payload.results
                    state.prevPage = action.payload.page > 1;
                    state.nextPage = action.payload.page < action.payload.total_pages;
                }
            )
            .addCase(getBySearchName.fulfilled, (state, action) => {
                state.results = action.payload.results
                state.prevPage = action.payload.page > 1;
                state.nextPage = action.payload.page < action.payload.total_pages;
            })
    }
});

const {reducer: movieReducer} = movieSlice;
const movieAction = {getMovies, getById, getByGenresId, getBySearchName}

export {movieReducer, movieAction}