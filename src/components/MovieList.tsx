import MovieCard from "./MovieCard";


const MovieList = (props: any) => {
    return props.results?.movies.map( (m: any) => {
        return (
            <MovieCard
                key={"ML_" + m.imdbID}
                id={"ML_" + m.imdbID}
                movie={m}
            />
        );   
    });
};
    
export default MovieList;