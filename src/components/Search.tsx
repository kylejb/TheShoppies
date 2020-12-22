import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../SearchContext";
import SearchResults from "./SearchResults";


interface IResults {
    Search: Array<String>;  
};


const BASE_API_EP = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;


const Search = () => {
    const [query, setQuery] = useState(""),
        [totalResults, setTotalResults] = useState(""),
        [results, setResults] = useState<IResults[]>([]);
          
    const searchctx = useContext(SearchContext),
        { setSearchState, setNominated } = searchctx;

    const inputChangeHandler = (e: React.BaseSyntheticEvent) => {
        setQuery(e.target.value);
    };


    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`${BASE_API_EP}&type=movie&s=${query}`);
            const json = await response.json();

            switch (json.Response) {
                case "True":
                    setResults(json.Search);
                    setTotalResults(json.totalResults);
                    break; 
                default:
                    setTotalResults("0");
                    //* DEFAULT SWITCH >> Render Msg for user on page
                    break;
            };
        };
        if (query.length >= 3) {
            setSearchState({ isSearching: true });
            fetchMovies();
        };
    }, [query, setResults, setSearchState, setNominated]);

    
    return (
        <>
        <div className="search-form">
            <input
                type="search"
                name="s"
                placeholder="Search by movie title..."
                value={query}
                onChange={inputChangeHandler}
                aria-label="Search OMDB API for movies by title"
            />
            {totalResults} results
        </div>
            <SearchResults results={results} />
        </>
    );
};

export default Search;
