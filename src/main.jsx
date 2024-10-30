import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Dashboard from "./pages/Dashboard";
import UserLogin from "./pages/UserLogin";
import PendingOrders from "./pages/PendingOrders";
import CompletedOrders from "./pages/CompletedOrders";
import CreateCustomer from "./pages/CreateCustomer";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/createCustomer",
    element: <CreateCustomer />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    path: "/pendingorders",
    element: <PendingOrders />,
  },
  {
    path: "/completedOrders",
    element: <CompletedOrders />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <CreateCustomer />
  // </React.StrictMode>
  <RouterProvider router={router} />
);
