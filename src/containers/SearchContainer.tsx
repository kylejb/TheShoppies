import { connect } from "react-redux";
import { getMovies } from "../redux/actionCreators";
import Search from "../components/Search";
import "../styles/containers/SearchContainer/style.scss";


const SearchContainer = ( props: any ) => {

    // const fetchMovies = props.fetchMovies;
    // useEffect(() => {
    //     fetchMovies();
    // }, [fetchMovies]);

    console.log("searchContainer PROPS ", props)
    return (
        <div className="wrapper-search">
            <h1>Search Container</h1>
            <button onClick={() => props.fetchMovies()}>Fetch-Test_REDUX</button>
            <Search />
        </div>
    );
};


const mapStateToProps = (state: any) => {
    console.log("Current Redux State", state);
    return {};
};

const mapDispatchToProps = ( dispatch: any ) => {
    return { fetchMovies: () => dispatch(getMovies())}
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
