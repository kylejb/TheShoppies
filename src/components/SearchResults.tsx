import MovieList from "./MovieList";
import styled from "styled-components";


const SearchContainer = styled.div`
    margin: 0 auto;
    padding: 5px;
`;

const SearchResults = (props: any) => {
    return (
        <SearchContainer>
            <h2 style={{textAlign: "center"}}>Search Results</h2>
            { props.results.movies.length 
                ? <MovieList results={props.results} nominated={props.nominated} /> 
                : <p style={{textAlign: "center"}}><em>No Results...</em></p>
            }
        </SearchContainer>
    );
};

export default SearchResults;