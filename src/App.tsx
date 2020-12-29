import ShoppiesContainer from "./containers/ShoppiesContainer";
import GlobalStyle from "./globalStyles";


const App = () => {
    return (
        <div className="app">
            <h1>App</h1>
            <GlobalStyle />
            <ShoppiesContainer />
        </div>
    );
};

export default App;
