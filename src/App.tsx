import ShoppiesContainer from "./containers/ShoppiesContainer";
import GlobalStyle from "./globalStyles";


const App = () => {
    return (
        <div className="app">
            <GlobalStyle />
            <ShoppiesContainer />
        </div>
    );
};

export default App;
