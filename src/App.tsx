import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { User } from "./pages/User";
import { Navbar } from "./navigation/Navbar";
import { Pics } from "./pages/Pics";
import Parse from "parse";

const PARSE_APPLICATION_ID = process.env.REACT_APP_PARSE_APPLICATION_ID!!;
const PARSE_HOST_URL = process.env.REACT_APP_PARSE_HOST_URL!!;
const PARSE_JAVASCRIPT_KEY = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;
const PARSE_MASTERKEY = process.env.REACT_APP_PARSE_MASTERKEY;
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;
Parse.masterKey = PARSE_MASTERKEY;

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
      element: <User />,
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
