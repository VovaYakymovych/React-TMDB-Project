import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage/MoviesPage.tsx";
import MoviePage from "../pages/MoviePage/MoviePage.tsx";

export const router = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children: [
            {index: true, element: <MoviesPage/>},
            {path: 'movie/:id', element: <MoviePage/>},
            {path: 'movies', element: <MoviesPage/>}
        ]}
])