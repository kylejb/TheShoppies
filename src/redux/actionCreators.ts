import { ADD_MOVIE, REMOVE_MOVIE, FETCH_MOVIES } from "./actionTypes";


export const addMovie = ( content: IMovie ) => ({
    type: ADD_MOVIE,
    payload: content
});

export const removeMovie = ( content: IMovie ) => ({
    type: REMOVE_MOVIE,
    payload: content
});

const BASE_API_EP = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
export const getMovies = (userQuery: any) => {
    const url = `${BASE_API_EP}&s=${userQuery}`
    return async function ( dispatch: any ) {
        let response = await fetch(url);
        let json = await response.json();
        dispatch({ type: FETCH_MOVIES, payload: json });            
    };
};


/*
? Error Handling from useContext Provider Version
switch (json.Response) {
    case "True":
        setResults(json.Search);
        setTotalResults(json.totalResults);
        break; 
    default:
        setTotalResults("0");
        ? Render Msg for user on page
        break;
}; 
*/