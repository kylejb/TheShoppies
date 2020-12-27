const MovieCard = ( { movie, movieHandler }: IMovie ) => {
    return (
        <div className="moviecard">
            <img src={movie.Poster} alt={movie.Title}></img>
            {movie.Title}
            {movie.Year}
            <button type="button" onClick={(e) => movieHandler(movie)}>Nominate Me!</button>
        </div>
    );
};

export default MovieCard;