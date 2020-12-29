import { connect } from "react-redux";
import { addMovie } from "../redux/actionCreators";
import MovieCard from "./MovieCard";
import styled from "styled-components";

const MovieListContainer = styled.div`
    display: flex;
    position: relative;
    max-width: auto;
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
                        btnLabel="Nominate Me!"
                    /> 
                );
            } else {
                return (
                    <MovieCard
                        key={m.imdbID}
                        movie={m}
                        movieHandler={props.movieHandler}
                        btnDisabled={false}
                        btnLabel="Nominate Me!"
                    />
                );
            };
        });
    };
    return <MovieListContainer>{renderParsedMoviesAfterQuery()}</MovieListContainer>;
};


const mapDispatchToProps = ( dispatch: any ) => {
    return { movieHandler: ( movieObj: any ) => dispatch(addMovie(movieObj))}
};
    
export default connect(null, mapDispatchToProps)(MovieList);