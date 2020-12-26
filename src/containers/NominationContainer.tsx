import { connect } from "react-redux";
import NominationResults from "../components/NominationResults";
import "../styles/containers/NominationContainer/style.scss";


const NominationContainer = ( props: any ) => {

    return (
        <div className="wrapper-nomination">
            <h1>Nomination Container</h1>
            <NominationResults movie={props.movie}/>
        </div>
    );
};


const mapStateToProps = (state: any) => {
    console.log("Current Redux State", state);
    return {movie: state.nominated};
};

export default connect(mapStateToProps)(NominationContainer);