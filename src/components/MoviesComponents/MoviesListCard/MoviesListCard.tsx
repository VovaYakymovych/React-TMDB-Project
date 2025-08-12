import type {FC} from "react";
import type {IMovie} from "../../../models/IMovie.ts";
import {GenreBadge} from "../../GenresComponents/GenreBadge/GenreBadge.tsx";
import './MovieListCard.css'
import {Link} from "react-router-dom";

type MovieListPropsType ={
    item: IMovie
}

const MoviesListCard:FC<MovieListPropsType> = ({item}) => {
    return (
        <Link to={`/movie/${item.id}`}>
        <div className={'MovieListCard'}>
            <div className="genre-badge-container">
                <GenreBadge genreIds={item.genre_ids} />
            </div>

            <div
                className="movie-bg"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w300${item.poster_path})`,
                }}
            >
                <div className="overlay">
                    <h3 className="movie-title">{item.title}</h3>
                    <p className="movie-overview">{item.overview}
                    </p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default MoviesListCard;