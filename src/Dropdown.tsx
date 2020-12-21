import { useContext } from 'react'
import { SearchContext } from './SearchContext';
import SearchSuggestions from './SearchSuggestions';


const Dropdown = (props: any) => {
    const searchctx = useContext(SearchContext);

    const { searchState } = searchctx

    return (
        <div className='search-dropdown'>
            { searchState.isSearching ? <SearchSuggestions results={props.results} /> : null }
        </div>
    )
}

export default Dropdown;
