import MoviesList from "../components/Movies/MoviesList/MoviesList.tsx";
import Pagination from "../components/Pagination/Pagination.tsx";


const MoviesPage = () => {


    return (
        <div className={'MoviesPage'}>
            <Pagination/>
            <MoviesList/>
        </div>
    );
};

export default MoviesPage;