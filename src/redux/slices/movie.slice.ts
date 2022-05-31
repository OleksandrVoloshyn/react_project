import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IMovieDetails, IMovie, IGenre, IGenreRequest} from "../../interfaces";
import {MovieService} from "../../services";

interface IState {
    page: number,
    results: IMovie[],
    genres: string[],
    ids: number[]
}

const initialState: IState = {
    page: 1,
    results: [],
    genres: [],
    ids: []
}

const getAll = createAsyncThunk<IMovieDetails, void>(
    'movieSlice/getAll',
    async () => {
        const {data} = await MovieService.getAll();
        return data
    }
);

const getGenres = createAsyncThunk<IGenreRequest, void>(
    'movieSlice/getGenres',
// @ts-ignore
    async () => {
        const {data} = await MovieService.getGenres()
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
                state.page = action.payload.page
                state.results = action.payload.results
            })
            .addCase(getGenres.fulfilled, (state, action) => {
                // @ts-ignore
                const {genres} = action.payload
                // const chossen_genre = state.ids.map(id => {
                //     genres.filter(value => value.id = id)
                // })
                for (const id of state.ids) {
                    const corect = genres.filter(genId =>genId.id === id);
                    if (corect){
                        // this.state.
                    }
                }
                state.genres = chossen_genre
            })
    }
});

const {reducer: movieReducer} = movieSlice;
const movieAction = {getAll, getGenres}

export {movieReducer, movieAction}