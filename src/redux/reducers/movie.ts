import { ADD_MOVIE, REMOVE_MOVIE } from "../actionTypes";


const movieReducer = (currentState: any = {nominated: []}, action: any) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...currentState, 
                nominated: [...currentState.nominated, action.payload]
            };
        case REMOVE_MOVIE:
            return {
                ...currentState,
                nominated: currentState.nominated.filter( (movieObj: any) => movieObj.imdbID !== action.payload.imdbID)
            };
        default:
            return currentState;
    };
};

export default movieReducer;