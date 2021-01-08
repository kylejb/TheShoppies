import MovieCard from "./MovieCard";
import styled from "styled-components";

const MovieListContainer = styled.div`
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
`;


const MovieList = (props: any) => {
    const nominatedMap = new Map();
    props.nominated.forEach( (m: Movie ) => nominatedMap.set(m.imdbID, m.Title));

    const renderParsedMoviesAfterQuery = () => {
        return props.results.movies.map( (m: Movie) => {
            if (props.nominated.length >= 5 || nominatedMap.get(m.imdbID)) {
                return (
                    <MovieCard
                        key={m.imdbID}
                        movie={m}
                        movieHandler={props.movieHandler}
                        btnDisabled={true}
                        btnLabel="🔒"
                    /> 
                );
            } else {
                return (
                    <MovieCard
                        key={m.imdbID}
                        movie={m}
                        movieHandler={props.movieHandler}
                        btnDisabled={false}
                        btnLabel="➕"
                    />
                );
            };
        });
    };
    return (
        <MovieListContainer>
            { renderParsedMoviesAfterQuery() }
        </MovieListContainer>
    );
};
    
export default MovieList;