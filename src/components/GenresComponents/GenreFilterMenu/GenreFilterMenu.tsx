import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GenreList from "../GenreList/GenreList.tsx";
import './GenreFilterMenu.css'

const GenreFilterMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
    const navigate = useNavigate();

    const toggleGenre = (genreId: number) => {
        setSelectedGenres((prev) =>
            prev.includes(genreId) ? prev.filter((id) => id !== genreId) : [...prev, genreId]
        );
    };

    const applyFilter = () => {
        if (selectedGenres.length > 0) {
            navigate(`/genres?genres=${selectedGenres.join(",")}`);
        } else {
            navigate(`/genres`);
        }
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={() => setIsOpen((prev) => !prev)}>
                Filter by Genre
            </button>

            {isOpen && (
                <div className={`genre-filter-menu ${isOpen ? "open" : ""}`}>
                    <GenreList selectedGenres={selectedGenres} toggleGenre={toggleGenre} />
                    <div>
                        <button onClick={applyFilter}>Submit</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GenreFilterMenu;
