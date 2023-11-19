import { GlobalStyle } from "./global-style";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import Home from "~/pages/Home";
import SampleComponents from "./pages/SampleComponents";
import SampleTest from "./pages/SampleTest";
import SampleSWR from "./pages/SampleSWR";
import SampleForm from "./pages/Form";

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
  {
    path: "/sample-swr",
    element: <SampleSWR />,
  },
  {
    path: "/sample-form",
    element: <SampleForm />,
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
