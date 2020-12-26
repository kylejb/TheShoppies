import { combineReducers } from "redux";
import searchReducer from "./search";
import movieReducer from "./movie";


export default combineReducers({
  movies: movieReducer,
  search: searchReducer
})