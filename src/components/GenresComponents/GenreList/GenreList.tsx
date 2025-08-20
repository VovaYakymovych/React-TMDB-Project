import {useAppSelector} from "../../../hooks/useAppSelector.tsx";
import type {IGenre} from "../../../models/IGenre.ts";
import './GenreList.css'


interface GenreListProps {
    selectedGenres: number[];
    toggleGenre: (genreId: number) => void;
}

const GenreList = ({ selectedGenres, toggleGenre }: GenreListProps) => {
    const genres = useAppSelector((state) => state.movieStoreSlice.genres);

    return (
        <div className={'genre-list'}>
            {genres.map((genre: IGenre) => (
                <label key={genre.id}>
                    <input
                        type="checkbox"
                        checked={selectedGenres.includes(genre.id)}
                        onChange={() => toggleGenre(genre.id)}
                    />
                    <span>{genre.name}</span>
                </label>
            ))}
        </div>
    );
};

export default GenreList;
