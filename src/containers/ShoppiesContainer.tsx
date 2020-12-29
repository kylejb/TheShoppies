import NominationContainer from "./NominationContainer";
import SearchContainer from "./SearchContainer";


const ShoppiesContainer = () => {
    return (
        <div className="wrapper-shoppies">
            <h1 style={{textAlign: "center"}}>The Shoppies</h1>
            <SearchContainer />
            <NominationContainer />
        </div>
    );
};

export default ShoppiesContainer;