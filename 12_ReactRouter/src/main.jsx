import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/about.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "",
       element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
