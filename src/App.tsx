import "./App.css";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";
import CustomizedArrowNumberInput from "~/components/CustomizedArrowNumberInput";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const Layout = styled.div`
  display: grid;
  place-items: center;
  gap: 8px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <CustomizedArrowNumberInput
          onChange={(e) => {
            console.log(e.target.value);
          }}
          suffix="%"
        />
      </Layout>
    </>
  );
}

export default App;
