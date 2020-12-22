import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../SearchContext";


interface IMovie {
    movie: {
        Title: string;
        Poster: string;
        Year: string;
    };
};


const MovieCard = ( { movie }: IMovie ) => {
    const [ selected, setSelected ] = useState(false);

    const searchctx = useContext(SearchContext),
        { setNominated } = searchctx;

    return (
        <div className="moviecard">
            <img src={movie.Poster} alt={movie.Title}></img>
            {movie.Title}
            {movie.Year}
            <button
                type="button"
                onClick={()=> {
                    setSelected(!selected)
                    setNominated( (prevState: any) => [...prevState, movie] )
                }}
                disabled={selected}
            >
                Nominate Me
            </button>
        </div>
    );
};

export default MovieCard;
