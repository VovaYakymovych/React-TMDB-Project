import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../hooks/useAppSelector";
import {MovieActions} from "../../redux/slices/movieSlice";
import MoviesListCard from "../../components/MoviesComponents/MoviesListCard/MoviesListCard";
import Pagination from "../../components/Pagination/Pagination.tsx";

const SearchedMoviesPage = () => {

    const dispatch = useAppDispatch();
    const {searchedMovies} = useAppSelector(state => state.movieStoreSlice);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || "";
    const page = Number(searchParams.get("page")) || 1;

    useEffect(() => {
        if (query) {
            dispatch(MovieActions.setCurrentPage(1));
            if (page !== 1) {
                searchParams.set("page", "1");
                setSearchParams(searchParams);
            }
            dispatch(MovieActions.loadSearchedMovies({ query, page: 1 }));
        }
    }, [dispatch, query]);

    useEffect(() => {
        if (query) {
            dispatch(MovieActions.loadSearchedMovies({query, page}));
        }
    }, [dispatch, query, page]);

    return (
        <div className={'MoviesPage'}>
            <Pagination/>
            <div className={'MovieList'}>
                {searchedMovies.map(movie => (
                    <MoviesListCard key={movie.id} item={movie}/>
                ))}
            </div>
            <Pagination/>
        </div>
    );
};

export default SearchedMoviesPage;