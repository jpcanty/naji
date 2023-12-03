import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { User } from "./pages/User";
import { Navbar } from "./navigation/Navbar";
import { Pics } from "./pages/Pics";

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
