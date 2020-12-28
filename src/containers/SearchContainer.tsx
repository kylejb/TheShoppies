import { connect } from "react-redux";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";
import "../styles/containers/SearchContainer/style.scss";


const SearchContainer = ( props: any ) => {
    return (
        <div className="wrapper-search">
            <h1>Search Container</h1>
            <Search results={props.search} />
            <SearchResults results={props.search} nominated={props.nominated} />
        </div>
    );
};


const mapStateToProps = (state: any) => {
    return { search: state.search, nominated: state.movies.nominated };
};

export default connect(mapStateToProps)(SearchContainer);