import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {MovieActions} from "../../redux/slices/movieSlice";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.tsx";
import MoviesListCard from "../../components/MoviesComponents/MoviesListCard/MoviesListCard.tsx";
import Pagination from "../../components/Pagination/Pagination.tsx";

const GenresPage = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector((state) => state.movieStoreSlice.genreFilteredMovies);
    const [searchParams] = useSearchParams();

    const genreIds = searchParams.get('genres')
    const page = Number(searchParams.get('page')) || 1

    useEffect(() => {
        if (genreIds) {
            const parsedGenres = genreIds.split(",").map(Number);
            dispatch(MovieActions.loadMoviesByGenres({ genres: parsedGenres, page }));
        }
    }, [genreIds, page, dispatch]);


    return (
        <div className={'MoviesPage'}>
            <Pagination/>
            <div className={'MovieList'}>
                {movies.map((movie) => (
                    <MoviesListCard key={movie.id} item={movie}/>
                ))}
            </div>
            <Pagination/>
        </div>
    );
};

export default GenresPage;
