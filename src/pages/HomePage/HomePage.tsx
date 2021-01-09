import { connect } from "react-redux";
import { getMovies, addMovie, removeMovie } from "redux/actionCreators";
import NominationResults from "components/NominationResults";
import SearchContainer from "containers/SearchContainer";
import SearchResults from "components/SearchResults";
import Banner from "components/Banner";
import styled from "styled-components";

const ResultsContainer = styled.div`
    display: flex;
`;

const Wrapper = styled.div`
`;

const Title = styled.h1`
    text-align: center;
`;


const HomePage = ({ fetchMovies, addMovie, removeMovie, search, nominated }: any) => {
    return (
        <Wrapper>
            <Title>The Shoppies</Title>
            { nominated.length >= 5 ? <Banner /> : null }
                <SearchContainer search={search} fetchMovies={fetchMovies} />
                <ResultsContainer>
                        <SearchResults results={search} nominated={nominated} movieHandler={addMovie} />
                        <NominationResults nominated={nominated} movieHandler={removeMovie} />
                </ResultsContainer>
        </Wrapper>
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
