import MoviesList from "../../components/MoviesComponents/MoviesList/MoviesList.tsx";
import Pagination from "../../components/Pagination/Pagination.tsx";
import './MoviesPage.css'

const MoviesPage = () => {


    return (
        <div className={'MoviesPage'}>
            <Pagination/>
            <MoviesList/>
            <Pagination/>
        </div>
    );
};

export default MoviesPage;