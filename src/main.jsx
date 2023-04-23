import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  createHashRouter,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import BlogPage from "./pages/BlogPage";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog/:blogId",
    element: <BlogPage />,
  },
]);

// const home = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
