import type {FC} from "react";
import type {IMovie} from "../../../models/IMovie.ts";

type MovieListPropsType ={
    item: IMovie
}

const MoviesListCard:FC<MovieListPropsType> = ({item}) => {
    return (
        <div>
            {item.id}
        </div>
    );
};

export default MoviesListCard;