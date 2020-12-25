import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import "./styles/base.scss";


const rootReducer = (currentState: any = {nominated: []}, action: any) => {
    console.log("reducercurrentState ", currentState);
    console.log("reducerAction ", action);
    switch (action.type) {
        case "ADD MOVIE":
            console.log("rootRed:::ADD Mov");
            return {...currentState, nominated: [...currentState.nominated, action.payload]};
        case "REMOVE MOVIE":
            console.log("rootRed:::REMOVE Mov");
            return currentState.filter((movieObj: any) => movieObj.imdbID !== action.payload.id);
        default:
            return currentState;
    };
};

const store = createStore(rootReducer);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
