const searchReducer = (currentState: any = {movies: []}, action: any) => {
    console.log("searchReducer STATE:", currentState);
    console.log("searchReducer ACTION:", action);
    switch (action.type) {
        case "QUERY_MOVIE":
            console.log("searchReducer:::Query Mov");
            return {};
        case "FETCH_MOVIES":
            const { Search: movies, ...metaData } = action.payload
            return {...currentState, movies: movies, metaData}
        default:
            return currentState;
    };
};

export default searchReducer;
