import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import throttle from "lodash/throttle";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { saveState } from "../utils/localStorage"


const shoppiesLocalStorage = localStorage.getItem("shoppiesNominatedState");
const persistedState = ((shoppiesLocalStorage !== null 
    && shoppiesLocalStorage !== undefined 
    && shoppiesLocalStorage !== "")
    ? JSON.parse(shoppiesLocalStorage) 
    : {movies: {nominated: []}});

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const Store = createStore(rootReducer, persistedState, composeEnhancers(
    applyMiddleware(thunk),
));

Store.subscribe( throttle(() => {
    saveState({
        movies: Store.getState().movies
    });
}, 1000));

export default Store;