import MovieList from "./MovieList";
import styled from "styled-components";


const StyledDiv = styled.div`
`;


const SearchResults = (props: any) => {
    return (
        <StyledDiv>
            <h2 style={{textAlign: "center"}}>Search Results</h2>
            { props.results.movies.length 
                ? <MovieList results={props.results} nominated={props.nominated} movieHandler={props.movieHandler} /> 
                : <p style={{textAlign: "center"}}><em>No Results...</em></p>
            }
        </StyledDiv>
    );
};

export default SearchResults;