import { connect } from "react-redux";
import Search from "../components/Search";
import "../styles/containers/SearchContainer/style.scss";


const SearchContainer = ( props: any ) => {
    console.log("searchContainer PROPS ", props)
    return (
        <div className="wrapper-search">
            <h1>Search Container</h1>
            <button onClick={() => props.nominateHandler({title: "<3"})}>TEST REDUX</button>
            <Search />
        </div>
    );
};


const mapStateToProps = (state: any) => {
    console.log("Current Redux State", state);
    return {};
};

const mapDispatchToProps = ( dispatch: any ) => {
    return { nominateHandler: ( movieObj: any ) => dispatch( { type: "ADD MOVIE", payload: movieObj })}
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
