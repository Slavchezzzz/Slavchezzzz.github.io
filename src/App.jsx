import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import TestPage from "./pages/testPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage></IndexPage>,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
