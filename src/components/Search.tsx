import styled from "styled-components";


const DivSearch = styled.div`
    display: flex;
    justify-content: center;
    background-color: hsla(0,0%,100%,.85);
    border-radius: 4px;
    text-align: center;
`;


const Search = ( { query, setQuery }: any ) => {
    return (
        <DivSearch>
            <input
                type="search"
                name="s"
                placeholder="Search by movie title..."
                value={query}
                onChange={(e: React.BaseSyntheticEvent) => setQuery(e.target.value)}
                aria-label="Search OMDB API for movies by title"
                />
        </DivSearch>
    );
};

export default Search;