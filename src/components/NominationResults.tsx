import MovieCard from './MovieCard';


const NominationResults = (props: any) => {
    const renderNominated = props?.nominated?.map((movie: any) => {
        return (
            <MovieCard 
                key={movie.imdbID} 
                id={movie.imdbID} 
                movie={movie} 
                movieHandler={props.movieHandler}
            />
        );
    });

    
    return (
        <div className="container-results">
            <h1>Nomination Results</h1>
            { props.nominated ? renderNominated : null }
        </div>
    );
};

export default NominationResults;
