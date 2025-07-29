import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_TMDB_BASEURL,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
})