import HomePage from "./containers/HomePage/HomePage";
import GlobalStyle from "./globalStyles";


const App = () => {
    return (
        <div className="app">
            <GlobalStyle />
            <HomePage />
        </div>
    );
};

export default App;
