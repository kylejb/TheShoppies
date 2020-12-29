import MovieList from "./MovieList";
import styled from "styled-components";


const SearchContainer = styled.div`
    margin: 0 auto;
    padding: 5px;
`;

const SearchResults = (props: any) => {
    return (
        <SearchContainer>
            <MovieList results={props.results} nominated={props.nominated} />
        </SearchContainer>
    );
};

export default SearchResults;