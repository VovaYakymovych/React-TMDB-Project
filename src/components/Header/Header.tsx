import './Header.css'
import SearchMovies from "../SearchMovies/SearchMovies.tsx";
import {Link} from "react-router-dom";


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
            </div>

        </div>
    );
};

export default Header;