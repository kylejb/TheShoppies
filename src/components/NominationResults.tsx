import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import MovieCard from './MovieCard';


const NominationResults = () => {
    const searchctx = useContext(SearchContext),
    { nominated, removeNominated } = searchctx;

    const renderNominated = nominated.map((movie: any) => {

        return (
            <MovieCard key={"NR_" + movie.imdbID} movie={movie} button={removeNominated} />
        );
    });

    return (
        <div className="container-results">
            <h1>Nomination Results</h1>
            { nominated.length > 0 ? renderNominated : null }
        </div>
    );
};

export default NominationResults;
