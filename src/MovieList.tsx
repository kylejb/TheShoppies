import MovieCard from "./MovieCard";


const MovieList = (props: any) => {
    const options = props.results?.map( (m: any) => (
        <MovieCard 
            key={m.imdbID} 
            movie={m} 
        />)
    );


    return <>{options}</>;
};

export default MovieList;
