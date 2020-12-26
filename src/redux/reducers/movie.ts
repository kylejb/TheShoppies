const movieReducer = (currentState: any = {nominated: []}, action: any) => {
    console.log("reducercurrentState ", currentState);
    console.log("reducerAction ", action);
    switch (action.type) {
        case "ADD_MOVIE":
            console.log("rootRed:::ADD Mov");
            return {...currentState, nominated: [...currentState.nominated, action.payload]};
        case "REMOVE_MOVIE":
            console.log("rootRed:::REMOVE Mov");
            return currentState.filter((movieObj: any) => movieObj.imdbID !== action.payload.id);
        default:
            return currentState;
    };
};

export default movieReducer;
