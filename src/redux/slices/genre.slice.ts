import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IGenre, IGenreResponse} from "../../interfaces";
import {genreService} from "../../services";

interface IState {
    allGenres: IGenre[],
}

const initialState: IState = {
    allGenres: [],
}

const getAll = createAsyncThunk<IGenreResponse, void>(
    'genreSlice/getAll',
    async () => {
        const {data} = await genreService.getAll()
        return data
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.allGenres = action.payload.genres
            })
    }
});

const {reducer: genreReducer} = genreSlice;
const genreAction = {getAll}

export {genreReducer, genreAction}