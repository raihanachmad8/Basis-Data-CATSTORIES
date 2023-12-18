import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./pages/auth";
import Home from "./pages/user/home/landing";
import Dashboard from "./pages/admin/default";
import DataTransaksi from "./pages/admin/datatransaksi";
import DataKucing from "./pages/admin/datakucing";

const router = createBrowserRouter([
    {
        path: "/admin",
        element: <Auth />,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/admin/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/admin/data-transaksi",
        element: <DataTransaksi />,
    },
    {
        path: "/admin/data-kucing",
        element: <DataKucing />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
