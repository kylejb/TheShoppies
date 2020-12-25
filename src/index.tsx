import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
// import { SearchProvider } from "./SearchContext";
import "./styles/base.scss";


const rootReducer = () => { return { nominated: [] }}

const store = createStore(rootReducer);

console.log("STORE", store.getState())

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <SearchProvider> */}
            <App />
            {/* </SearchProvider> */}
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
