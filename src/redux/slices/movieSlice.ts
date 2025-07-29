import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesServices} from "../../services/service.api.ts";
import type {IMovie} from "../../models/IMovie.ts";


const initMovieState : movieSliceType = {
    movies: [],
    total_pages: 500,
    current_page: 1
}
type movieSliceType = {
    movies: IMovie[],
    total_pages: number,
    current_page: number
}


const loadMovies = createAsyncThunk('loadMovies', async (currentPage: number,thunkAPI) => {
    const movies= await moviesServices.getMovies(currentPage)
    return thunkAPI.fulfillWithValue(movies)
})

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: initMovieState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadMovies.fulfilled, (state, action) => {
            state.movies = action.payload?.results || []
            state.total_pages = action.payload?.total_pages || 500
        })
        .addCase(loadMovies.rejected, (state, action) => {
            console.error('Failed to load movies:', action.error.message);
            console.log(state);
            console.log(action);
        })
})