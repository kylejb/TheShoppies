import { useContext, useEffect, useState } from 'react';
import { SearchContext } from './SearchContext';
import Dropdown from './Dropdown';


interface IResults {
    Search: Array<String>;  
};


const BASE_API_EP = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;


const Search = () => {
    const [query, setQuery] = useState(""),
        [results, setResults] = useState<IResults[]>([]);
          
    const searchctx = useContext(SearchContext),
        { setSearchState } = searchctx;

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
                    break; 
                default:
                    //* DEFAULT SWITCH >> Render Msg for user on page
                    break;
            };
        };
        if (query.length >= 3) {
            setSearchState({isSearching: true});
            fetchMovies();
        };
    }, [query, setResults, setSearchState]);

    
    return (
        <form>
            <input value={query} onChange={inputChangeHandler} />
            <Dropdown results={results} />
        </form>
    );
};

export default Search;
