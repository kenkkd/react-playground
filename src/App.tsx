import { GlobalStyle } from "./global-style";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import Home from "~/pages/Home";
import SampleComponents from "./pages/SampleComponents";
import SampleTest from "./pages/SampleTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sample-components",
    element: <SampleComponents />,
  },
  {
    path: "/sample-test",
    element: <SampleTest />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
}

export default App;
