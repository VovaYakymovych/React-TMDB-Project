import {useAppSelector} from "../../../hooks/useAppSelector.ts";
import MoviesListCard from "../MoviesListCard/MoviesListCard.tsx";


const MoviesList = () => {

    const {movies} = useAppSelector(state => state.movieStoreSlice);

    return (
        <div>
            {movies.map(item => (<MoviesListCard key={item.id} item={item}/>))}
        </div>
    );
};

export default MoviesList;