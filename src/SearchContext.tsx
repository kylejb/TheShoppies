import { createContext, useState } from "react";


const searchCtxDefaultValue = {
    searchState: { isSearching: false },
    nominated: [],
    setSearchState: (searchState: { isSearching: boolean }) => {},
    setNominated: (nominated: any) => {},
    removeNominated: (nominated: any) => {}
};

export const SearchContext = createContext(searchCtxDefaultValue);


export const SearchProvider = (props: any) => {
    const [searchState, setSearchState] = useState(searchCtxDefaultValue.searchState);
    const [nominated, setNominated] = useState(searchCtxDefaultValue.nominated);

    const removeNominated = (z: any) => {
        const newNominatedState = nominated.filter(m=> m!==z([1])[1]);
        setNominated(newNominatedState);
    };


    return (
        <SearchContext.Provider value={{
            searchState,
            nominated,
            setNominated,
            setSearchState,
            removeNominated
        }}>
            {props.children}
        </SearchContext.Provider>
    );
};