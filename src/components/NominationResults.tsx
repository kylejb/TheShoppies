import MovieCard from './MovieCard';
import styled from "styled-components";


const NominationContainer = styled.div`
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;`;

const NominationResults = (props: any) => {
    const renderNominated = props?.nominated?.map((movie: Movie) => {
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
        <NominationContainer>
            <h1>Nomination Results</h1>
            { renderNominated }
        </NominationContainer>
    );
};

export default NominationResults;