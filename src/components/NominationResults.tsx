import MovieCard from './MovieCard';
import styled from "styled-components";


const StyledDiv = styled.div`
`;

const NominationResults = (props: any) => {
    const renderNominated = props.nominated.map((movie: Movie) => {
        return (
            <MovieCard
                key={movie.imdbID} 
                movie={movie} 
                movieHandler={props.movieHandler}
                btnDisabled={false}
                btnLabel="❌"
            />
        );
    });

    
    return (
        <StyledDiv>
            <h2 style={{textAlign: "center"}}>Nominated</h2>
            { props.nominated.length 
                ? renderNominated
                : <p style={{textAlign: "center"}}><em>No Results...</em></p>
            }
        </StyledDiv>
    );
};

export default NominationResults;