import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/about.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "./Components/Contact/Contact.jsx";
import User from "./Components/User/User.jsx";
import Github, { githubInfoLoader } from "./Components/Github/Github.jsx";

// const router = createBrowserRouter([

//   {
//     path: "/",
//     element: <Root />,
//     children: [
//       { path: "",
//        element: <Home /> },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       }
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />,
      <Route path="about" element={<About />} />,
      <Route path="contact" element={<Contact />} />,
      <Route path="user/:userId" element={<User />} />,
      <Route path="github" element={<Github />} loader={githubInfoLoader} />,
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
