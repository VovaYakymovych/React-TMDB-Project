import {useEffect} from "react";
import {useAppSelector} from "../../../hooks/useAppSelector.tsx";
import {MovieActions} from "../../../redux/slices/movieSlice.ts";
import MoviesListCard from "../MoviesListCard/MoviesListCard.tsx";
import {useAppDispatch} from "../../../hooks/useAppDispatch.tsx";
import './MovieList.css'
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();
    const {movies, current_page} = useAppSelector(state => state.movieStoreSlice);

    useEffect(() => {
        const pageFromUrl = Number(searchParams.get('page')) || 1;
        dispatch(MovieActions.setCurrentPage(pageFromUrl));
    }, []);

    useEffect(() => {
        dispatch(MovieActions.loadMovies(current_page));
    }, [current_page]);

    useEffect(() => {
        dispatch(MovieActions.loadGenres());
    }, []);

    return (
        <div className={'MovieList'}>
            {movies.map(item => (<MoviesListCard key={item.id} item={item}/>))}
        </div>
    );
};

export default MoviesList;
