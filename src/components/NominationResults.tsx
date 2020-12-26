import MovieCard from './MovieCard';


const NominationResults = (props: any) => {
    const renderNominated = props?.nominated?.map((movie: any) => {
        return (
            <MovieCard 
                key={"NR_" + movie.imdbID} 
                id={"NR_" + movie.imdbID} 
                movie={movie} 
            />
        );
    });

    
    return (
        <div className="container-results">
            <h1>Nomination Results</h1>
            <div className="moviecard">
                {/* { props?.nominated?.length > 0 ? renderNominated : null } */}
            </div>
        </div>
    );
};

export default NominationResults;
