import { connect } from "react-redux";
import Banner from "../components/Banner";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";


const SearchContainer = ( props: any ) => {
    return (
        <div className="wrapper-search">
            <Search results={props.search} />
            { props.nominated.length >= 5 ? <Banner /> : null }
            <SearchResults results={props.search} nominated={props.nominated} />
        </div>
    );
};


const mapStateToProps = (state: any) => {
    return { search: state.search, nominated: state.movies.nominated };
};

export default connect(mapStateToProps)(SearchContainer);