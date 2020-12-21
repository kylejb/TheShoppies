import { createContext, useState } from "react";


type SearchContextState = { isSearching: boolean };

const appCtxDefaultValue = {
    searchState: { isSearching: false },
    setSearchState: (searchState: SearchContextState ) => {}
};


export const SearchContext = createContext(appCtxDefaultValue);


export const SearchProvider = (props: any) => {
    const [searchState, setSearchState] = useState(appCtxDefaultValue.searchState);

    return (
        <SearchContext.Provider value={{
            searchState,
            setSearchState
        }}>
            {props.children}
        </SearchContext.Provider>
    );
};