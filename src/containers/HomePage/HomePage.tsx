import { connect } from "react-redux";
import { getMovies, addMovie, removeMovie } from "redux/actionCreators";
import NominationResults from "components/NominationResults";
import SearchContainer from "../SearchContainer";
import SearchResults from "components/SearchResults";
import Banner from "components/Banner";

const HomePage = ({ fetchMovies, addMovie, removeMovie, search, nominated }: any) => {
    return (
        <>
            <h1 style={{textAlign: "center"}}>The Shoppies</h1>
            { nominated.length >= 5 ? <Banner /> : null }
            <div className="wrapper-shoppies">
                <SearchContainer search={search} fetchMovies={fetchMovies} />
                <div style={{display: "flex"}}>
                    <div style={{flex: "50%"}}>
                        <SearchResults results={search} nominated={nominated} movieHandler={addMovie} />
                    </div>
                    <div style={{flex: "50%"}}>
                        <NominationResults nominated={nominated} movieHandler={removeMovie} />
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state: any) => {
    return { search: state.search, nominated: state.movies.nominated };
};

const mapDispatchToProps = ( dispatch: any ) => ({
    fetchMovies: (userQuery: any) => dispatch(getMovies(userQuery)),
    removeMovie: (movieObj: any) => dispatch(removeMovie(movieObj)),
    addMovie: (movieObj: any) => dispatch(addMovie(movieObj))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
