
import Search from "components/Search";
import { useEffect, useState } from "react";
import styled from "styled-components";

const DivSearch = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: hsla(0,0%,100%,.85);
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    border: 1px solid black;
    margin-bottom: 20px;
`;


const SearchContainer = ({search, fetchMovies}: any) => {
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
        return `${search?.metaData?.totalResults} results for "${query}"`;
    }

    return (
        <DivSearch>
            <h3>Search Movie Title:</h3>
            <Search query={query} setQuery={setQuery} />
            {renderConditionalQueryAttributes()}
        </DivSearch>
    );
};

export default SearchContainer;
