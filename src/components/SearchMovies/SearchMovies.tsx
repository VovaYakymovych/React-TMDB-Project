import { useSearchParams, useNavigate } from "react-router-dom";
import './SearchMovies.css';
import {type ChangeEvent, useState} from "react";
import {SearchInputValidator} from "../../services/helpers/SearchInputValidator.ts";

const SearchMovies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        const { error } = SearchInputValidator.validate(value);
        if (error) {
            setError(error.message);
            return;
        }

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
            {error && <p className="searchMoviesError">{error}</p>}
        </form>
    );
};

export default SearchMovies;