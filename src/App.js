import "./App.css";
import Accordion from "./components/Accordion";
import Flex1 from "./components/Flex1";
import Home from "./components/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/accordion",
      element: <Accordion />,
    },
    {
      path: "/flex",
      element: <Flex1 />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
