import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovie, IMovieDetails, IMovieResponse, INameId} from "../../interfaces";
import {MovieService} from "../../services";

interface IState {
    results: IMovie[],
    prevPage: boolean,
    nextPage: boolean,
    chosenMovie: IMovieDetails | null,
    searchResult: INameId[] | null
}

const initialState: IState = {
    results: [],
    prevPage: false,
    nextPage: false,
    chosenMovie: null,
    searchResult: null
}

const getMovies = createAsyncThunk<IMovieResponse, string>(
    'movieSlice/getAll',
    async (page) => {
        const {data} = await MovieService.getMovies(page);
        return data
    }
);

const getById = createAsyncThunk<IMovieDetails, { id: string }>(
    'movieSlice/getById',
    async ({id}) => {
        const {data} = await MovieService.getById(id)
        return data
    }
)

const getByGenresId = createAsyncThunk<IMovieResponse, { ids: string, page: string }>(
    'movieSlice/getByGenresId',
    async ({ids, page}) => {
        const {data} = await MovieService.getByGenresId(ids, page)
        return data
    }
)

const getBySearchName = createAsyncThunk<any, { name: string, page: string }>(
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
            .addCase(getByGenresId.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload

                state.results = results
                state.prevPage = page > 1;
                state.nextPage = page < total_pages;
            })
            .addCase(getBySearchName.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload

                state.searchResult = results
                state.prevPage = page > 1;
                state.nextPage = page < total_pages;
            })
    }
});

const {reducer: movieReducer} = movieSlice;
const movieAction = {getMovies, getById, getByGenresId, getBySearchName}

export {movieReducer, movieAction}