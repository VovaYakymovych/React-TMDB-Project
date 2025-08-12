import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout.tsx";
import MovieInfo from "../components/MoviesComponents/MovieInfo/MovieInfo.tsx";
import MoviesPage from "../pages/MoviesPage/MoviesPage.tsx";
import SearchedMoviesPage from "../pages/SearchedMoviesPage/SearchedMoviesPage.tsx";

export const router = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children: [
            {index: true, element: <Navigate to="movies"/>},
            {path: 'movie/:id', element: <MovieInfo/>},
            {path: 'movies', element: <MoviesPage/>},
            {path: 'search', element: <SearchedMoviesPage/>}
        ]}
])