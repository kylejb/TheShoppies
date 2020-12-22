import { useState } from "react";


interface IMovie {
    movie: {
        Title: string;
        Poster: string;
        Year: string;
    };
};


const MovieCard = ( { movie }: IMovie ) => {
    const [ selected, setSelected ] = useState(false);


    return (
        <div className="moviecard">
            <img src={movie.Poster} alt={movie.Title}></img>
            {movie.Title}
            {movie.Year}
            <button
                type="button"
                onClick={()=> setSelected(!selected)}
                disabled={selected}
            >
                Nominate Me
            </button>
        </div>
    );
};

export default MovieCard;
