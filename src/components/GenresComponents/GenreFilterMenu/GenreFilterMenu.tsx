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
            navigate(`/`);
        }
        setIsOpen(false);
    };

    return (
        <div className={'GenresFilter'}>
            <button
                className={`menu-button ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(prev => !prev)}
            >
                <svg width="50" height="42" viewBox="0 0 24 24">
                    <line className="line top" x1="3" y1="6" x2="21" y2="6"/>
                    <line className="line middle" x1="3" y1="12" x2="21" y2="12"/>
                    <line className="line bottom" x1="3" y1="18" x2="21" y2="18"/>
                </svg>
            </button>


            <div className={`genre-filter-menu${isOpen ? " open" : ""}`}>
                {/*{isOpen && (*/}
                    <>
                        <h3>Select Genres</h3>

                        <GenreList selectedGenres={selectedGenres} toggleGenre={toggleGenre} />

                        <div>
                            <button onClick={applyFilter}>Submit</button>
                        </div>
                    </>
                {/*)}*/}
            </div>
        </div>
    );
};

export default GenreFilterMenu;