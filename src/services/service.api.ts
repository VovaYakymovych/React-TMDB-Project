import {axiosInstance} from "./axiosInstance.ts";
import type {ITmdbMoviesResponse} from "../models/ITmdbMoviesResponse.ts";
import type {ITmdbGenresResponse} from "../models/ITmdbGenresResponse.ts";

export const moviesServices = {
    getMovies: async (page: number): Promise<ITmdbMoviesResponse | null> => {
        try {
            const {data} = await axiosInstance.get<ITmdbMoviesResponse>('/discover/movie', {params: {
                    // include_adult: 'true',
                    // include_video: 'true',
                    // sort_by: 'primary_release_date.desc',
                    page: page.toString()}});
            return data
        } catch (error) {
            console.error('Error fetching movies:', error);
            return null;
        }
    },

    getGenres: async ():Promise<ITmdbGenresResponse | null> => {
        try {
            const {data} = await axiosInstance.get<ITmdbGenresResponse>('/genre/movie/list');
            return data;
        } catch (error) {
            console.error('Error fetching genres:', error);
            return null;
        }
    }
}