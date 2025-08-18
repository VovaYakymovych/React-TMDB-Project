import {axiosInstance} from "./axiosInstance.ts";
import type {ITmdbMoviesResponse} from "../models/ITmdbMoviesResponse.ts";
import type {ITmdbGenresResponse} from "../models/ITmdbGenresResponse.ts";
import type {ITmdbTrailerResponse} from "../models/ITmdbTrailerResponse.ts";
import type {IMovie} from "../models/IMovie.ts";

export const moviesServices = {
    getMovies: async (page: number): Promise<ITmdbMoviesResponse | null> => {
        try {
            const {data} = await axiosInstance.get<ITmdbMoviesResponse>('/discover/movie', {
                params: {
                    include_video: 'true',
                    include_adult: 'false',
                    page: page.toString()
                }
            });
            return data
        } catch (error) {
            console.error('Error fetching movies:', error);
            return null;
        }
    },

    getGenres: async (): Promise<ITmdbGenresResponse | null> => {
        try {
            const {data} = await axiosInstance.get<ITmdbGenresResponse>('/genre/movie/list');
            return data;
        } catch (error) {
            console.error('Error fetching genres:', error);
            return null;
        }
    },

    getSearchedMovies: async (query: string, page: number): Promise<ITmdbMoviesResponse | null> => {
        try {
            const {data} = await axiosInstance.get<ITmdbMoviesResponse>('/search/movie', {
                params: {
                    query: query,
                    page: page.toString()
                }
            });
            return data
        } catch (error) {
            console.error('Error fetching searched movies:', error)
            return null
        }
    },
    getTrailer: async (movieId: number): Promise<string | null> => {
        try {
            const {data} = await axiosInstance.get<ITmdbTrailerResponse>(`/movie/${movieId}/videos`);
            const trailer = data.results.find(
                (video) => video.type === "Trailer" && video.site === "YouTube"
            );
            return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
        } catch (error) {
            console.error("Error fetching trailer:", error);
            return null;
        }
    },
    getMoviesById: async (id: number): Promise<IMovie | null> => {
        try {
            const {data} = await axiosInstance.get<IMovie>(`/movie/${id}`);
            return data;
        } catch (error) {
            console.error('Error fetching movie by id:', error);
            return null;
        }
    },
    getMoviesByGenres: async (genres: number[], page: number): Promise<ITmdbMoviesResponse | null> => {
        try {
            const {data} = await axiosInstance.get(`/discover/movie`, {
                params: {
                    with_genres: genres.join(','),
                    page: page.toString()
                }
            });
            console.log(data);
            return data;

        } catch (error) {
            console.error('Error fetching movie by genres:', error);
            return null;
        }
    }
}