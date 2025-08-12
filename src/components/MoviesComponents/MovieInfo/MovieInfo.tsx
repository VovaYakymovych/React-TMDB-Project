import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../hooks/useAppSelector";
import StarRating from "../../StarRating/StarRating.tsx";
import './MovieInfo.css'
import Trailer from "../../Trailer/Trailer.tsx";
import {useEffect, useState} from "react";
import {moviesServices} from "../../../services/service.api.ts";
import type {IMovie} from "../../../models/IMovie.ts";


const MovieInfo = () => {

    const {id} = useParams();
    const movies = useAppSelector(state => state.movieStoreSlice.movies);
    const [movie, setMovie] = useState<IMovie | null>(() => movies.find(m => m.id === Number(id)) || null);

    useEffect(() => {
        if (!movie && id) {
            moviesServices.getMoviesById(Number(id)).then(setMovie);
        }
    }, [id, movie]);

    if (!movie) return <div>Error finding movie info</div>;

    const moviePoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const movieBackdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`

    return (
        <div className="movie-detail" style={{backgroundImage: `url(${movieBackdrop})`}}>
            <div className="movie-gradient">
                <div className="movie-content">

                    <div className="movie-left">
                        <img className="poster" src={moviePoster} alt={movie.title}/>
                        <h1 className="movie-title-info">{movie.title}</h1>

                        <div className="movie-meta">

                            <div className="imdb-rating">
                                <span className="imdb-logo">IMDb</span>
                                <span>{movie.vote_average}</span>
                            </div>
                            <span className={'separator'}>|</span>
                            <span className="age-rating">{movie.adult ? "18+" : "PG-13"}</span>
                            <span className={'separator'}>|</span>
                            <span className="release-year">{movie.release_date}</span>
                        </div>
                        <StarRating rating={movie.vote_average}/>
                        <p className="overview">{movie.overview}</p>
                    </div>

                    <div className="movie-right">
                        <p className="trailer-text">WATCH THE TRAILER ______________________</p>
                        <Trailer movieId={movie.id} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;