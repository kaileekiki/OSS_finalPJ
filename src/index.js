import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyle";
import "@fortawesome/fontawesome-free/css/all.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <React.StrictMode> */}
    <GlobalStyle />
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
    {/* </React.StrictMode> */}
  </>
);
