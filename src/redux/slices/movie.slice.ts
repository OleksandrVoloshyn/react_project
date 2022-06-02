import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie, IMovieDetails} from "../../interfaces";
import {MovieService} from "../../services";

interface IState {
    results: IMovie[],
    prevPage: boolean,
    nextPage: boolean,
    filter_ids: number[]
}

const initialState: IState = {
    results: [],
    prevPage: false,
    nextPage: false,
    filter_ids: []
}

const getAll = createAsyncThunk<IMovieDetails, string>(
    'movieSlice/getAll',
// @ts-ignore
    async ({page}) => {
        const {data} = await MovieService.getAll(page);
        return data
    }
);

const getById = createAsyncThunk<IMovie, number>(
    'movieSlice/getById',
// @ts-ignore
    async (id) => {
        const {data} = await MovieService.getById(id)
        return data
    }
)

const getByGenresId = createAsyncThunk<IMovieDetails, any>(
    'movieSlice/getByGenresId',
// @ts-ignore
    async ({ids}) => {
        const {data} = await MovieService.getByGenresId(ids)
        return data
    }
)

const getBySearchName = createAsyncThunk<IMovieDetails, any>(
    'movieSlice/getBySearchName',
// @ts-ignore
    async (name) => {
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
            .addCase(getAll.fulfilled, (state, action) => {
                state.results = action.payload.results
                state.prevPage = action.payload.page > 1;
                state.nextPage = action.payload.page < action.payload.total_pages;
            })
            .addCase(getById.fulfilled, (state, action) => {
            })
            .addCase(getByGenresId.fulfilled, (state, action) => {
                    state.results = action.payload.results
                    console.log(action.payload.results);
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
const movieAction = {getAll, getById, getByGenresId, getBySearchName}

export {movieReducer, movieAction}