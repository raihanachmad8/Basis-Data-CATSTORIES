import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getCountJenisKucing } from "../../../../../services/kucing";

const TableJumlahKucing = () => {
    const [jumlahKucing, setJumlahKucing] = useState([]);
    const [data_copy, setData_copy] = useState([...jumlahKucing]);
    const [orderTersedia, setOrderTersedia] = useState("asc");
    const [order, setOrder] = useState("asc");

    useEffect(() => {
        getCountJenisKucing((data) => {
            setJumlahKucing(data);
            setData_copy(data);
        });
    }, []);

    const sortTersedia = () => {
        if (orderTersedia === "asc") {
            setOrderTersedia("desc");
            setData_copy(data_copy.sort((a, b) => b.Tersedia - a.Tersedia));
        } else {
            setOrderTersedia("asc");
            setData_copy(data_copy.sort((a, b) => a.Tersedia - b.Tersedia));
        }
    };

    const sortTidakTersedia = () => {
        if (order === "asc") {
            setOrder("desc");
            setData_copy(
                data_copy.sort((a, b) => b.TidakTersedia - a.TidakTersedia)
            );
        } else {
            setOrder("asc");
            setData_copy(
                data_copy.sort((a, b) => a.TidakTersedia - b.TidakTersedia)
            );
        }
    };

    return (
        <>
            <table className="w-full text-center">
                <thead>
                    <tr>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            No
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                            <div className="flex justify-center">
                                <button className="relative flex justify-center items-center gap-x-2">
                                    Jenis Kucing
                                </button>
                            </div>
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                            <div className="flex justify-center">
                                <button
                                    onClick={sortTersedia}
                                    className="relative flex justify-center items-center gap-x-2"
                                >
                                    Total Tersedia
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Outline"
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                        className={`duration-500 ${
                                            orderTersedia === "asc"
                                                ? "rotate-0"
                                                : "rotate-180"
                                        }`}
                                    >
                                        <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                    </svg>
                                </button>
                            </div>
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                            <div className="flex justify-center">
                                <button
                                    onClick={sortTidakTersedia}
                                    className="relative flex justify-center items-center gap-x-2"
                                >
                                    Total Tidak Tersedia
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Outline"
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                        className={`duration-500 ${
                                            order === "asc"
                                                ? "rotate-0"
                                                : "rotate-180"
                                        }`}
                                    >
                                        <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                    </svg>
                                </button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data_copy.map((data, index) => (
                        <tr key={index}>
                            <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                {index + 1}
                            </td>
                            <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                {data.Jenis_Kucing}
                            </td>
                            <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                {data.Tersedia}
                            </td>
                            <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                {data.TidakTersedia}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

TableJumlahKucing.propTypes = {
    dataSource: PropTypes.array.isRequired,
};

export default TableJumlahKucing;
