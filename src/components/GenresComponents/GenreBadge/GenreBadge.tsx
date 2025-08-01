import {useAppSelector} from "../../../hooks/useAppSelector.ts";
import './GenreBadge.css'

type GenreProps = {
    genreIds: number[];
};

export const GenreBadge = ({ genreIds }: GenreProps) => {

    const genres = useAppSelector(state => state.movieStoreSlice.genres)
    const matchedGenres = genres.filter(genre => genreIds.includes(genre.id))

    return (
        <div className="genreBadges">
            {matchedGenres.map(genre => (
                <div key={genre.id} className="Badge">
                    {genre.name}
                </div>
            ))}
        </div>
    );
};
