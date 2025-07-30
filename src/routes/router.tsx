import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import MovieInfo from "../components/Movie/MovieInfo.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";

export const router = createBrowserRouter([
    {path:'/', element:<MainLayout/>, children: [
            {index: true, element: <MoviesPage/>},
            {path: 'movie/:id', element: <MovieInfo/>},
            {path: 'movies', element: <MoviesPage/>}
        ]}
])