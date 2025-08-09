import './Header.css'
import SearchMovies from "../SearchMovies/SearchMovies.tsx";


const Header = () => {
    return (
        <div className={'Header'}>

            <div className={'logo'}>
                Cinema++
            </div>

            <div className={"search-theme-genres-wrapper"}>
                <SearchMovies/>
            </div>

        </div>
    );
};

export default Header;