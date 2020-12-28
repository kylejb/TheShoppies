import { ADD_MOVIE, REMOVE_MOVIE, FETCH_MOVIES } from "./actionTypes";


export const addMovie = ( content: Movie ) => ({
    type: ADD_MOVIE,
    payload: content
});

export const removeMovie = ( content: Movie ) => ({
    type: REMOVE_MOVIE,
    payload: content
});

const BASE_API_EP = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
export const getMovies = (userQuery: string) => {
    const cleanedUserQuery = userQuery.trim();
    const url = `${BASE_API_EP}&s=${cleanedUserQuery}`;
    return async function ( dispatch: any ) {
        let response = await fetch(url);
        let json = await response.json();
        dispatch({ type: FETCH_MOVIES, payload: json });            
    };
};