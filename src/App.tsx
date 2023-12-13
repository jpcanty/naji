import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CurrentUser } from "./features/currentUser/CurrentUser";
import { Navbar } from "./navigation/Navbar";
import { Pics } from "./pages/Pics";
import Parse from "parse";

const PARSE_APPLICATION_ID = process.env.REACT_APP_PARSE_APPLICATION_ID!!;
const PARSE_HOST_URL = process.env.REACT_APP_PARSE_HOST_URL!!;
const PARSE_JAVASCRIPT_KEY = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;
console.log(PARSE_APPLICATION_ID, PARSE_HOST_URL, PARSE_JAVASCRIPT_KEY)
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/user",
      element: <CurrentUser />,
    },
    {
      path: "/pics",
      element: <Pics />,
    },
  ])

  return (
    <div className="App">
      <Navbar/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
