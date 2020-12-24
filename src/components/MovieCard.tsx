interface IMovie {
    movie: {
        Title: string;
        Poster: string;
        Year: string;
    };
};


const MovieCard = ( props: IMovie ) => {
    return (
        <>
            <img src={props.movie.Poster} alt={props.movie.Title}></img>
            {props.movie.Title}
            {props.movie.Year}
        </>
    );
};

export default MovieCard;
