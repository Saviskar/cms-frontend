import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserLogin from "./pages/UserLogin";
import PendingOrders from "./pages/PendingOrders";
import CompletedOrders from "./pages/CompletedOrders";
import CreateCustomer from "./pages/CreateCustomer";
import Settings from "./pages/Settings";
import ViewAllCustomers from "./pages/ViewAllCustomers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLogin />,
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
  {
    path: "/viewAllCustomers",
    element: <ViewAllCustomers />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <CreateCustomer />
  // </React.StrictMode>
  <RouterProvider router={router} />
);
