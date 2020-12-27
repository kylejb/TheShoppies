import { connect } from "react-redux";
import { addMovie } from "../redux/actionCreators";
import MovieCard from "./MovieCard";


const MovieList = (props: any) => {
    return props.results?.movies.map( (m: any) => {
        return (
            <MovieCard
                key={m.imdbID}
                id={m.imdbID}
                movie={m}
                movieHandler={props.movieHandler}
            />
        );   
    });
};

const mapDispatchToProps = ( dispatch: any ) => {
    return { movieHandler: ( movieObj: any ) => dispatch(addMovie(movieObj))}
};
    
export default connect(null, mapDispatchToProps)(MovieList);