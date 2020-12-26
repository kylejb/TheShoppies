import { connect } from "react-redux";
import { addMovie } from "../redux/actionCreators";
import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";


const Search = () => {
    const [query, setQuery] = useState("");


    const inputChangeHandler = (e: React.BaseSyntheticEvent) => {
        setQuery(e.target.value);
    };

    useEffect(() => {

    }, [])
    
    return (
        <>
        <div className="search-form">
            <input
                type="search"
                name="s"
                placeholder="Search by movie title..."
                value={query}
                onChange={inputChangeHandler}
                aria-label="Search OMDB API for movies by title"
            />
            {"NUM"} results
        </div>
            <SearchResults results={""} />
        </>
    );
};

const mapDispatchToProps = ( dispatch: any ) => {
    return { nominateHandler: ( movieObj: any ) => dispatch(addMovie(movieObj))}
};

export default connect(null, mapDispatchToProps)(Search);
