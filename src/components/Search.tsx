import { connect } from "react-redux";
import { getMovies } from "../redux/actionCreators";
import { useEffect, useState } from "react";
import styled from "styled-components";


const DivSearch = styled.div``;
const SpanResults = styled.span``;


const Search = ( { results, fetchMovies }: any ) => {
    const [query, setQuery] = useState("");


    useEffect(() => {
        if (query.length >= 3){
            fetchMovies(query);
        }
    }, [query, fetchMovies]);


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
            <SpanResults>
                { results?.metaData?.totalResults 
                    ? results?.metaData?.totalResults + " Results" 
                    : null 
                }
            </SpanResults>
        </DivSearch>
    );
};

const mapDispatchToProps = ( dispatch: any ) => {
    return { fetchMovies: (userQuery: any) => dispatch(getMovies(userQuery))}
};

export default connect(null, mapDispatchToProps)(Search);