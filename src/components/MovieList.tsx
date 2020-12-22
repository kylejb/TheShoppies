import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import MovieCard from "./MovieCard";


const MovieList = (props: any) => {
    const searchctx = useContext(SearchContext),
    { nominated, setNominated } = searchctx;

    const filteredOptions = nominated.map( (m: any) => m.imdbID)

    const options = () => {
        return props.results?.map( (m: any) => {
            if (filteredOptions.includes(m.imdbID)) {
                /*
                TODO - refactor the below, and optimize state & context hooks.
                */
                return (
                    <div className="moviecard">
                        <img src={m.Poster} alt={m.Title}></img>
                        {m.Title}
                        {m.Year}
                        <button
                            type="button"
                            disabled={true}
                        >
                            Nominate Me
                        </button>
                    </div>
                );
            } else {
                return (
                    <MovieCard
                        key={"ML_" + m.imdbID}
                        movie={m}
                        button={setNominated}
                    />
                );
            };
        });
    }; 

    return <>{options()}</>;
};

export default MovieList;
