import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IGenre, IMovie, IMovieResponse} from "../../interfaces";
import {MovieService} from "../../services";
import {IMovieDetails} from "../../interfaces/movie-details.interface";

interface IState {
    results: IMovie[],
    prevPage: boolean,
    nextPage: boolean,
    chosenMovie: IMovieDetails | null,
}

const initialState: IState = {
    results: [],
    prevPage: false,
    nextPage: false,
    chosenMovie: null,
}

const getMovies = createAsyncThunk<IMovieResponse, string>(
    'movieSlice/getAll',
    async (page) => {
        // @ts-ignore
        const {data} = await MovieService.getMovies(page);
        return data
    }
);

const getById = createAsyncThunk<IMovieDetails, any>(
    'movieSlice/getById',
    async ({id}) => {
        const {data} = await MovieService.getById(id)
        return data
    }
)

const getByGenresId = createAsyncThunk<IMovieResponse, { ids: number[] }>(
    'movieSlice/getByGenresId',
    async ({ids}) => {
        const {data} = await MovieService.getByGenresId(ids)
        return data
    }
)

const getBySearchName = createAsyncThunk<any, any>(
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
                let genre_names: string[] = []
                const {genres} = action.payload

                genres.forEach(genre => genre_names.push(genre['name']))
                action.payload.genres_name = genre_names.toString()

                state.chosenMovie = action.payload
            })
            .addCase(getByGenresId.fulfilled, (state, action) => {
                    state.results = action.payload.results
                    state.prevPage = action.payload.page > 1;
                    state.nextPage = action.payload.page < action.payload.total_pages;
                }
            )
            .addCase(getBySearchName.fulfilled, (state, action) => {
                const {results, page, total_pages} = action.payload

                state.results = results
                state.prevPage = page > 1;
                state.nextPage = page < total_pages;
            })
    }
});

const {reducer: movieReducer} = movieSlice;
const movieAction = {getMovies, getById, getByGenresId, getBySearchName}

export {movieReducer, movieAction}