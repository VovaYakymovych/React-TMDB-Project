import { useSearchParams, useNavigate } from "react-router-dom";
import './SearchMovies.css';
import type {ChangeEvent} from "react";

const SearchMovies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        searchParams.set("query", value);
        searchParams.set("page", "1");
        setSearchParams(searchParams);
        navigate(`/search?${searchParams.toString()}`);
    };

    return (
        <form className={"searchMovies"} onSubmit={e => e.preventDefault()}>
            <input
                className={"searchMoviesInput"}
                type={'text'}
                placeholder={'Search...'}
                value={searchParams.get("query") || ""}
                onChange={handleChange}
            />
        </form>
    );
};

export default SearchMovies;