import { connect } from "react-redux";
import { getMovies } from "../redux/actionCreators";
import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";


const Search = (props: any) => {
    const [query, setQuery] = useState("");


    const fetchMovies = props.fetchMovies;
    useEffect(() => {
        if (query.length >= 3){
            fetchMovies(query);
        }
    }, [query, fetchMovies]);


    return (
        <>
            <div className="search-form">
                <input
                    type="search"
                    name="s"
                    placeholder="Search by movie title..."
                    value={query}
                    onChange={(e: React.BaseSyntheticEvent) => setQuery(e.target.value)}
                    aria-label="Search OMDB API for movies by title"
                />
            </div>
                {props?.results?.metaData?.totalResults} results
                <SearchResults results={props.results.movies} />
        </>
    );
};

const mapDispatchToProps = ( dispatch: any ) => {
    return { fetchMovies: (userQuery: any) => dispatch(getMovies(userQuery))}
};

export default connect(null, mapDispatchToProps)(Search);
