import NominationContainer from "./NominationContainer";
import SearchContainer from "./SearchContainer";
import "../styles/containers/ShoppiesContainer/style.scss";


const ShoppiesContainer = () => {
    return (
        <div className="container">
            <h1>Shoppies Container</h1>
            <SearchContainer />
            <NominationContainer />
        </div>
    );
};

export default ShoppiesContainer;