import {axiosInstance} from "./axiosInstance.ts";
import type {ITmdbMoviesResponse} from "../models/ITmdbMoviesResponse.ts";

export const moviesServices = {
    getMovies: async (page: number): Promise<ITmdbMoviesResponse | null> => {
        try {
            const {data} = await axiosInstance.get<ITmdbMoviesResponse>('/discover/movie', {params: {page: page.toString()}});
            return data
        } catch (error) {
            console.error('Error fetching movies:', error);
            return null;
        }
    },

}