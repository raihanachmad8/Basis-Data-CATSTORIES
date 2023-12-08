import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./pages/auth";
import Home from "./pages/user/home/landing";
import Dashboard from "./pages/admin/default";
import TableReports from "./pages/admin/tablereport";
import DataTransaksi from "./pages/admin/datatransaksi";
import DataPembeli from "./pages/admin/datapembeli";
import DataKucing from "./pages/admin/datakucing";
import DetailKucing from "./pages/user/detailkucing";

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
        path: "/admin/table-reports",
        element: <TableReports />,
    },
    {
        path: "/admin/data-transaksi",
        element: <DataTransaksi />,
    },
    {
        path: "/admin/data-pembeli",
        element: <DataPembeli />,
    },
    {
        path: "/admin/data-kucing",
        element: <DataKucing />,
    },
    {
        path: "/detail-kucing",
        element: <DetailKucing />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
