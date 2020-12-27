import MovieCard from './MovieCard';


const NominationResults = (props: any) => {
    const renderNominated = props?.nominated?.map((movie: Movie) => {
        return (
            <MovieCard 
                key={movie.imdbID} 
                movie={movie} 
                movieHandler={props.movieHandler}
            />
        );
    });

    
    return (
        <div className="container-results">
            <h1>Nomination Results</h1>
            { renderNominated }
        </div>
    );
};

export default NominationResults;
