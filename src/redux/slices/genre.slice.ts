import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IGenre, IGenreResponse} from "../../interfaces";
import {genreService} from "../../services";

interface IState {
    allGenres: IGenre[],
    currentMovieGenres: string[]
}

const initialState: IState = {
    allGenres: [],
    currentMovieGenres: []
}

const getAll = createAsyncThunk<IGenreResponse, void>(
    'genreSlice/getAll',
    async () => {
        const {data} = await genreService.getAllGenres()
        return data
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        getCurrentMovieGenres: (state, action): void => {
            state.currentMovieGenres = []
            const {genre_ids} = action.payload;

            for (const id of genre_ids) {
                for (const genre of state.allGenres) {
                    if (genre.id === id) {
                        state.currentMovieGenres.push(genre.name)
                    }
                }
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.allGenres = action.payload.genres
            })
    }
});

const {reducer: genreReducer, actions: {getCurrentMovieGenres}} = genreSlice;
const genreAction = {getAll, getCurrentMovieGenres}

export {genreReducer, genreAction}