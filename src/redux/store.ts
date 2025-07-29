import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./slices/movieSlice.ts";

export const store = configureStore({
    reducer:{
        movieStoreSlice: movieSlice.reducer,
    }
})


