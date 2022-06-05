import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie, IMovieDetails, IMovieResponse} from "../../interfaces";
import {MovieService} from "../../services";

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

//todo TS
const getAllOrByGenre = createAsyncThunk<IMovieResponse, any>(
    'movieSlice/getAllOrByGenre',
    async (arr) => {
        if (arr.search) {
            const {data} = await MovieService.getByName(arr.search, arr.page)
            return data
        }
        const {data} = await MovieService.getAllOrByGenre(arr)
        return data
    }
)

const getById = createAsyncThunk<IMovieDetails, { id: string }>(
    'movieSlice/getById',
    async ({id}) => {
        const {data} = await MovieService.getById(id)
        return data
    }
)


const getBySearchName = createAsyncThunk<IMovie[], { name: string, page: string }>(
    'movieSlice/getBySearchName',
    async ({name, page}) => {
        const {data} = await MovieService.getByName(name, page)
        return data
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllOrByGenre.fulfilled, (state, action) => {
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
const movieAction = {getById, getBySearchName, getAllOrByGenre}

export {movieReducer, movieAction}