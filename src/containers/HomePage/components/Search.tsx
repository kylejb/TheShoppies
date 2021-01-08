import { connect } from "react-redux";
import { getMovies } from "../../../redux/actionCreators";
import { useEffect, useState } from "react";
import { DivSearch, DivResults } from "./styled";


const Search = ( { results, fetchMovies }: any ) => {
    const [query, setQuery] = useState("");


    useEffect(() => {
        if (query.length >= 3){
            fetchMovies(query);
        }
    }, [query, fetchMovies]);
    

    const renderConditionalQueryAttributes = () => {
        if (query.length < 3) {
            return `${3 - query.length} more characters required to start your query...`;
        }
        return `${results?.metaData?.totalResults} results for "${query}":`;
    }


    return (
        <DivSearch>
            <input
                type="search"
                name="s"
                placeholder="Search by movie title..."
                value={query}
                onChange={(e: React.BaseSyntheticEvent) => setQuery(e.target.value)}
                aria-label="Search OMDB API for movies by title"
            />
            <DivResults>
                { renderConditionalQueryAttributes() }
            </DivResults>
        </DivSearch>
    );
};

const mapDispatchToProps = ( dispatch: any ) => {
    return { fetchMovies: (userQuery: any) => dispatch(getMovies(userQuery))}
};

export default connect(null, mapDispatchToProps)(Search);