import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./pages/Navbar";
import CreateCustomer from "./pages/CreateCustomer";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/test",
    element: <CreateCustomer />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <CreateCustomer />
  // </React.StrictMode>
  <RouterProvider router={router} />
);
