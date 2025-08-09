import './SearchMovies.css'
const SearchMovies = () => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form className={"searchMovies"} onSubmit={handleSubmit}>
            <input className={"searchMoviesInput"} type={'text'} placeholder={'Search...'}/>
        </form>
    );
};

export default SearchMovies;