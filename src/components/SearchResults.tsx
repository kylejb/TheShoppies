import MovieList from "./MovieList";


const SearchResults = (props: any) => {
    return (
        <div className="container-results">
            <MovieList results={props.results} />
        </div>
    );
};

export default SearchResults;
