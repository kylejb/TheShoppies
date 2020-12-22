import { createContext, useState } from "react";


const searchCtxDefaultValue = {
    searchState: { isSearching: false },
    nominated: ["defaultValue"],
    setSearchState: (searchState: { isSearching: boolean }) => {},
    setNominated: (nominated: any) => {}
};

export const SearchContext = createContext(searchCtxDefaultValue);


export const SearchProvider = (props: any) => {
    const [searchState, setSearchState] = useState(searchCtxDefaultValue.searchState);
    const [nominated, setNominated] = useState(searchCtxDefaultValue.nominated);

    return (
        <SearchContext.Provider value={{
            searchState,
            nominated,
            setNominated,
            setSearchState
        }}>
            {props.children}
        </SearchContext.Provider>
    );
};