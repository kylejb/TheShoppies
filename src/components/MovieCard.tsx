import { useState } from "react";
// import { SearchContext } from "../SearchContext";


interface IMovie {
    movie: {
        Title: string;
        Poster: string;
        Year: string;
    };
    button: any;
};


const MovieCard = ( props: IMovie ) => {
    const [ selected, setSelected ] = useState(false);


    return (
        <div className="moviecard">
            <img src={props.movie.Poster} alt={props.movie.Title}></img>
            {props.movie.Title}
            {props.movie.Year}
            <button
                type="button"
                onClick={()=> {
                    setSelected(!selected)
                    props.button( (prevState: any) => [...prevState, props.movie] )
                }}
                disabled={selected}
            >
                Nominate Me
            </button>
        </div>
    );
};

export default MovieCard;
