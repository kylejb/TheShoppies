import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import MovieCard from './MovieCard';


const NominationResults = () => {
    const searchctx = useContext(SearchContext),
    { nominated } = searchctx;

    const renderNominated = nominated.map((movie: any) => {
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
                { nominated.length > 0 ? renderNominated : null }
            </div>
        </div>
    );
};

export default NominationResults;
