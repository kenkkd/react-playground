import { GlobalStyle } from "./global-style";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "~/pages/Home";
import SampleComponents from "./pages/Sample";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sample-components",
    element: <SampleComponents />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
}

export default App;
