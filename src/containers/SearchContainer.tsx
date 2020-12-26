import { connect } from "react-redux";
import { getMovies } from "../redux/actionCreators";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";
import "../styles/containers/SearchContainer/style.scss";


const SearchContainer = ( props: any ) => {
    console.log("searchContainer PROPS ", props)
    return (
        <div className="wrapper-search">
            <h1>Search Container</h1>
            <Search results={props.search} />
            <SearchResults results={props.search} />

        </div>
    );
};


const mapStateToProps = (state: any) => {
    return { search: state.search };
};

const mapDispatchToProps = ( dispatch: any ) => {
    return { fetchMovies: () => dispatch(getMovies("Lion"))}
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);