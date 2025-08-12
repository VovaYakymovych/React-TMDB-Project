import {type FC, useEffect} from "react";
import {MovieActions} from "../../redux/slices/movieSlice";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.tsx";


type TrailerProps = {
    movieId: number;
}

const Trailer:FC<TrailerProps> = ({movieId}) => {
    const dispatch = useAppDispatch();
    const trailerUrl = useAppSelector(state => state.movieStoreSlice.trailerUrl);

    useEffect(() => {
        dispatch(MovieActions.loadTrailer(movieId));
    }, [dispatch, movieId]);

    if (!trailerUrl) {
        return <div style={{fontSize:'1.1rem', fontWeight:'800'}}>Whooops... Trailer is not available</div>;
    }

    return (
        <div className={'movie-trailer'}>
            <iframe
                width="444px"
                height="314px"
                src={trailerUrl}
                title="Movie Trailer"
                allowFullScreen
                style={{border: 'none', borderRadius: '8px'}}
            />
        </div>
    );
};

export default Trailer;
