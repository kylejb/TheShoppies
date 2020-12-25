import { ADD_MOVIE, FETCH_MOVIES } from "./actionTypes";


export const addMovie = ( content: IMovie ) => ({
    type: ADD_MOVIE,
    payload: content
});


const BASE_API_EP = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

export const getMovies = () => {
    return async function ( dispatch: any ) {
        let response = await fetch(`${BASE_API_EP}&type=movie&s=${"star"}`);
        let json = await response.json();
        dispatch({ type: FETCH_MOVIES, payload: json });            
    };
};


// switch (json.Response) {
//     case "True":
//         setResults(json.Search);
//         setTotalResults(json.totalResults);
//         break; 
//     default:
//         setTotalResults("0");
//         //* DEFAULT SWITCH >> Render Msg for user on page
//         break;
// };