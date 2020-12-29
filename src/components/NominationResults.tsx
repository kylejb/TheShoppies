import MovieCard from './MovieCard';
import styled from "styled-components";


const Div = styled.div`
    position: relative;
`;

const NominationResults = (props: any) => {
    const renderNominated = props?.nominated?.map((movie: Movie) => {
        return (
            <MovieCard 
                key={movie.imdbID} 
                movie={movie} 
                movieHandler={props.movieHandler}
                btnDisabled={false}
                btnLabel="Remove"
            />
        );
    });

    
    return (
        <Div className="container-results">
            <h1>Nomination Results</h1>
            { renderNominated }
        </Div>
    );
};

export default NominationResults;