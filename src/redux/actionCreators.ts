import { ADD_MOVIE } from "./actionTypes";


export const addMovie = ( content: IMovie ) => ({
    type: ADD_MOVIE,
    payload: content
});
