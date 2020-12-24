import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import MovieCard from "./MovieCard";
import NominateButton from "./NominateButton";


const MovieList = (props: any) => {
    const searchctx = useContext(SearchContext),
    { nominated, setNominated } = searchctx;

    const filteredOptions = nominated.map( (m: any) => m.imdbID)

    const options = () => {
        return props.results?.map( (m: any) => {
            if (filteredOptions.includes(m.imdbID)) {
                return (
                    <div className="moviecard">
                        <MovieCard
                            key={"ML_" + m.imdbID}
                            movie={m}
                        />
                        <NominateButton btnDisable={true} btnToggle={setNominated} movie={m} />
                    </div>
                );
            } else {
                return (
                    <div className="moviecard">
                        <MovieCard
                            key={"NR_" + m.imdbID}
                            movie={m}
                        />
                        <NominateButton btnDisable={false} btnToggle={setNominated} movie={m} />
                    </div>
                );
            };
        });
    }; 

    return <>{options()}</>;
};

export default MovieList;
