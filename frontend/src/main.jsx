import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Inventaris from "./pages/Inventaris";
import Transaksi from "./pages/Transaksi";
import Pemasok from "./pages/Pemasok";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/inventaris",
        element: <Inventaris />,
    },
    {
        path: "/transaksi",
        element: <Transaksi />,
    },
    {
        path: "/pemasok",
        element: <Pemasok />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
