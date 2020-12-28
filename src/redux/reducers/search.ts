import { FETCH_MOVIES } from "../actionTypes";


const searchReducer = (currentState: any = {movies: []}, action: any) => {
    switch (action.type) {
        case FETCH_MOVIES:
            const { Search: movies, ...metaData } = action.payload
            if (metaData.Response === "False") {
                return currentState;
            } else {
                return {...currentState, movies: movies, metaData}
            }
        default:
            return currentState;
    };
};

export default searchReducer;