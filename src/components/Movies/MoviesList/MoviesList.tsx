import {useEffect} from "react";
import {useAppSelector} from "../../../hooks/useAppSelector.ts";
import {MovieActions} from "../../../redux/slices/movieSlice.ts";
import MoviesListCard from "../MoviesListCard/MoviesListCard.tsx";
import {useAppDispatch} from "../../../hooks/useAppDispatch.tsx";

const MoviesList = () => {
    const dispatch = useAppDispatch();
    const {movies, current_page} = useAppSelector(state => state.movieStoreSlice);

    useEffect(() => {
        dispatch(MovieActions.loadMovies(current_page));
    }, [dispatch, current_page]);

    return (
        <div>
            {movies.map(item => (<MoviesListCard key={item.id} item={item}/>))}
        </div>
    );
};

export default MoviesList;