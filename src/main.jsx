import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./pages/Navbar";
import CreateCustomerForm from "./pages/CreateCustomer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/test",
    element: <CreateCustomerForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <CreateCustomer />
  // </React.StrictMode>
  <RouterProvider router={router} />
);
