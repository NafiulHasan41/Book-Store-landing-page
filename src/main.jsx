import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./Pages/Root/Root";
import ErrorPage from "./Pages/Error/error";
import Home from "./Pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/> ,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
