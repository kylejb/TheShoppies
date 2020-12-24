import NominationResults from "../components/NominationResults";
import "../styles/containers/NominationContainer/style.scss";


const NominationContainer = () => {
    return (
        <div className="wrapper-nomination">
            <h1>Nomination Container</h1>
            <NominationResults />
        </div>
    );
};

export default NominationContainer;
