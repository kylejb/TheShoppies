interface IMovie {
    movie: {
        Title: string;
        Poster: string;
        Year: string;
    };
};


const MovieCard = ( { movie }: IMovie ) => {
    return (
        <div className="moviecard">
            <img src={movie.Poster} alt={movie.Title}></img>
            {movie.Title}
            {movie.Year}
            <button 
                type="button" 
                onClick={()=> console.log("Nominated")}
            >
                Nominate Me
            </button>
        </div>
    );
};

export default MovieCard;
