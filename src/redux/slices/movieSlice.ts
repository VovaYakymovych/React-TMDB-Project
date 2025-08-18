import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesServices} from "../../services/service.api.ts";
import type {IMovie} from "../../models/IMovie.ts";
import type {IGenre} from "../../models/IGenre.ts";

type movieSliceType = {
    movies: IMovie[],
    total_pages: number,
    current_page: number,
    genres: IGenre[],
    searchedMovies: IMovie[],
    searchedTotalPages: number,
    trailerUrl: string,
    genreFilteredMovies: IMovie[],
    genreFilteredTotalPages: number
}
const initMovieState: movieSliceType = {
    movies: [],
    total_pages: 500,
    current_page: 1,
    genres: [],
    searchedMovies: [],
    searchedTotalPages: 0,
    trailerUrl: '',
    genreFilteredMovies: [],
    genreFilteredTotalPages: 0
}

const loadMovies = createAsyncThunk(
    'loadMovies', async (currentPage: number, thunkAPI) => {
    const movies = await moviesServices.getMovies(currentPage)
    return thunkAPI.fulfillWithValue(movies)
})

const loadGenres = createAsyncThunk(
    'loadGenres', async (_, thunkAPI) => {
    const genres = await moviesServices.getGenres()
    return thunkAPI.fulfillWithValue(genres)
})

const loadSearchedMovies = createAsyncThunk(
    'loadSearchedMovies', async ({query, page}: { query: string, page: number }, thunkAPI) => {
    const searchedMovies = await moviesServices.getSearchedMovies(query, page)
    return thunkAPI.fulfillWithValue(searchedMovies)
})

const loadTrailer = createAsyncThunk(
    'loadTrailer', async (movieId: number, thunkAPI) => {
        const trailer = await moviesServices.getTrailer(movieId);
        return thunkAPI.fulfillWithValue(trailer);
    }
);

const loadMoviesByGenres = createAsyncThunk(
    'loadMoviesByGenres', async ({genres, page}: { genres: number[], page: number }, thunkAPI) => {
        const response = await moviesServices.getMoviesByGenres(genres, page);
        return thunkAPI.fulfillWithValue(response);
    }
)

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: initMovieState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.current_page = action.payload;
        }
    },
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
        .addCase(loadGenres.fulfilled, (state, action) => {
            state.genres = action.payload?.genres || []
        })
        .addCase(loadGenres.rejected, (state, action) => {
            console.error('Failed to load genres:', action.error.message);
            console.log(state);
            console.log(action);
        })
        .addCase(loadSearchedMovies.fulfilled, (state, action) => {
            state.searchedMovies = action.payload?.results || [];
            state.searchedTotalPages = action.payload?.total_pages || 0;
        })
        .addCase(loadSearchedMovies.rejected, (state, action) => {
            console.error('Failed to load searched movies:', action.error.message);
            console.log(state);
            console.log(action);
        })
        .addCase(loadTrailer.fulfilled, (state, action) => {
            state.trailerUrl = action.payload || '';
        })
        .addCase(loadTrailer.rejected, (state, action) => {
            console.error('Failed to load trailer:', action.error.message);
            console.log(state);
            console.log(action);
        })
        .addCase(loadMoviesByGenres.fulfilled, (state, action) => {
            state.genreFilteredMovies = action.payload?.results || [];
            state.genreFilteredTotalPages = action.payload?.total_pages || 0;
        })
        .addCase(loadMoviesByGenres.rejected, (state, action) => {
            console.error('Failed to load movies by genres:', action.error.message);
            console.log(state);
            console.log(action);
        })
})

export const MovieActions = {
    ...movieSlice.actions,
    loadMovies,
    loadGenres,
    loadSearchedMovies,
    loadTrailer,
    loadMoviesByGenres
}