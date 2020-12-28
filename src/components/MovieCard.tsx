const MovieCard = ( { movie, movieHandler, btnDisabled, btnLabel }: IMovieComProp ) => {
    return (
        <div className="moviecard">
            <img src={movie.Poster} alt={movie.Title}></img>
            {movie.Title}
            {movie.Year}
            <button
                type="button"
                disabled={btnDisabled}
                onClick={(e) => movieHandler(movie)}
            >
                { btnLabel }
            </button>
        </div>
    );
};

export default MovieCard;