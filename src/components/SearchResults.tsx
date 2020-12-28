import MovieList from "./MovieList";


const SearchResults = (props: any) => {
    return (
        <div className="container-results">
            { props.results?.metaData?.totalResults 
                ? props.results?.metaData?.totalResults + " Results" 
                : null 
            }
            <MovieList results={props.results} nominated={props.nominated} />
        </div>
    );
};

export default SearchResults;