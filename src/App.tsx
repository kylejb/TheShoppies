import HomePage from "pages/HomePage";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";

const AppWrapper = styled.div`
    margin: 25px;
`;

const App = () => {
    return (
        <AppWrapper>
            <GlobalStyle />
            <HomePage />
        </AppWrapper>
    );
};

export default App;
