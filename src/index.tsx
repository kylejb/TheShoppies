import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SearchProvider } from "./SearchContext";
import "./styles/base.scss";


ReactDOM.render(
    <React.StrictMode>
        <SearchProvider>
            <App />
        </SearchProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
