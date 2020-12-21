const MovieCard = (props: any) => {
    return (
        <div className="moviecard">
            <img src={props.movie.Poster} alt={props.movie.Title}></img>
            {props.movie.Title}
            {props.movie.Year}
        </div>
    )
}

export default MovieCard;
