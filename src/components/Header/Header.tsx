import './Header.css'
import SearchMovies from "../SearchMovies/SearchMovies.tsx";
import {Link} from "react-router-dom";
import GenreFilterMenu from "../GenresComponents/GenreFilterMenu/GenreFilterMenu.tsx";
import ThemeSwitchButton from "../ThemeSwitchButton/ThemeSwitchButton.tsx";



const Header = () => {

    return (
        <div className={'Header'}>

            <Link to={'/'}>
            <div className={'logo'}>
                Cinema++
            </div>
            </Link>

            <div className={"search-theme-genres-wrapper"}>
                <SearchMovies/>
                <ThemeSwitchButton/>
                <GenreFilterMenu/>
            </div>


        </div>
    );
};

export default Header;