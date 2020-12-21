import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import MovieList from "./MovieList";


const SearchResults = (props: any) => {
    const searchctx = useContext(SearchContext);
    const { searchState } = searchctx;


    return (
        <div className="container-results">
            { searchState.isSearching ? <MovieList results={props.results} /> : null }
        </div>
    );
};

export default SearchResults;
