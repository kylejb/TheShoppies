import { connect } from "react-redux";
import { removeMovie } from "redux/actionCreators";
import NominationResults from "components/NominationResults";


const NominationContainer = ( props: any ) => {
    return (
        <div className="wrapper-nomination">
            <h2 style={{textAlign: "center"}}>Nominations</h2>
            { props.nominated.length 
                ? (<NominationResults 
                    nominated={props.nominated} 
                    movieHandler={props.movieHandler} 
                />)
                : (<p style={{textAlign: "center"}}>
                        <em>No Results...</em>
                    </p>)
            }
        </div>
    );
};


const mapStateToProps = (state: any) => {
    return {nominated: state.movies.nominated};
};

const mapDispatchToProps = ( dispatch: any ) => {
    return { movieHandler: ( movieObj: any ) => dispatch(removeMovie(movieObj))};
};

export default connect(mapStateToProps, mapDispatchToProps)(NominationContainer);