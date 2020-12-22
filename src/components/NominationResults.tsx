import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import MovieCard from './MovieCard';


const NominationResults = () => {
    const searchctx = useContext(SearchContext),
    { nominated } = searchctx;

    const renderNominated = nominated.map((movie: any) => {
        return (
            <MovieCard key={movie.imdbID} movie={movie} />
        )
    })

    return (
        <div className="container-results">
            <h1>Nomination Results</h1>
            { nominated.length > 1 ? renderNominated : null }
        </div>
    );
};

export default NominationResults;
