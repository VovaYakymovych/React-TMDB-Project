import {useAppSelector} from "../../../hooks/useAppSelector.tsx";
import './GenreBadge.css'

type GenreProps = {
    genreIds?: number[]; // Make optional
};

export const GenreBadge = ({ genreIds }: GenreProps) => {
    const genres = useAppSelector(state => state.movieStoreSlice.genres) || [];
    const safeGenreIds = Array.isArray(genreIds) ? genreIds : [];
    const matchedGenres = Array.isArray(genres)
        ? genres.filter(genre => safeGenreIds.includes(genre.id))
        : [];

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
