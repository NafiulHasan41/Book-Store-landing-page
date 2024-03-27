import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Root from "./Pages/Root/Root";
import ErrorPage from "./Pages/Error/error";
import Home from "./Pages/Home/Home";
import BookList from "./Pages/BookList/BookList";
import PageRead from "./Pages/PageRead/PageRead";
import BigCard from "./Pages/Cards/BigCard";


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
      {
        path: "/bookList",
        element: <BookList/>,
        loader: () => fetch('/fakeBook.json')
      },
      {
        path: "/pageRead",
        element: <PageRead/>,
        loader: () => fetch('/fakeBook.json')
      },
      {
        path: "BigCard/:bookId",
        element: <BigCard/>,
        loader: () => fetch('/fakeBook.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
