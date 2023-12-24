import PropTypes from "prop-types";
import { deleteKucing } from "../../../../../services/kucing";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const TableDataKucing = ({
    dataSource,
    setData,
    setOpenDetail,
    filter,
    setSort,
    setOrder,
    updateDataKucing,
    order,
}) => {
    const [filteredData, setFilteredData] = useState(dataSource);
    const [sortUmur, setSortUmur] = useState(false);
    const [sortNama, setSortNama] = useState(false);
    const handleDetail = (data) => {
        setData(data);
        setOpenDetail(true);
    };

    const handleDelete = (data) => {
        deleteKucing(data, (status, res) => {
            if (status) {
                updateDataKucing();
                Swal.fire({
                    title: "Data Kucing Berhasil Di Hapus",
                    text: res.message,
                    icon: "success",
                });
            } else {
                Swal.fire({
                    title: "Gagal Menghapus Data Kucing",
                    text: res.message,
                    icon: "error",
                });
            }
        });
    };

    useEffect(() => {
        let filtered = dataSource;
        filter === "All"
            ? setFilteredData(dataSource)
            : (filtered = dataSource.filter((data) => data.Status === filter));

        setFilteredData(filtered);
    }, [dataSource, filter]);

    return (
        <>
            <table className="w-full text-center">
                <thead>
                    <tr>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                            ID_Kucing
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase flex justify-center items-center">
                            <button
                                onClick={() => {
                                    setSort("Nama_Kucing");
                                    setSortNama(!sortNama);
                                    setSortUmur(false);
                                    setOrder(order === "asc" ? "desc" : "asc");
                                }}
                                className="relative flex justify-center items-center gap-x-2"
                            >
                                Nama
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Outline"
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    className={`duration-500 ${
                                        !sortNama ? "" : "rotate-180"
                                    }`}
                                >
                                    <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                </svg>
                            </button>
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Jenis Kelamin
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                            <div className="flex justify-center">
                                <button className="relative flex justify-center items-center gap-x-2">
                                    Jenis Kucing
                                </button>
                            </div>
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase flex justify-center items-center">
                            <button
                                onClick={() => {
                                    setSort("Umur");
                                    setSortNama(false);
                                    setSortUmur(!sortUmur);
                                    setOrder(order === "asc" ? "desc" : "asc");
                                }}
                                className="relative flex justify-center items-center gap-x-2"
                            >
                                Umur
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Outline"
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    className={`duration-500 ${
                                        !sortUmur ? "" : "rotate-180"
                                    }`}
                                >
                                    <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                </svg>
                            </button>
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Status
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData && filteredData.length > 0 ? (
                        filteredData.map((data, index) => (
                            <tr key={index}>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {data.ID_Kucing}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {data.Nama_Kucing}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {data.Jenis_Kelamin}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {data.Jenis_Kucing?.Jenis_Kucing}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {data.Umur >= 12
                                        ? data.Umur % 12 === 0
                                            ? `${data.Umur / 12} Tahun`
                                            : `${(data.Umur / 12).toFixed(
                                                  1
                                              )} Tahun`
                                        : `${data.Umur} Bulan`}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {data.Status}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5 flex gap-x-5 justify-center ">
                                    <button
                                        onClick={() => handleDetail(data)}
                                        className="px-3 py-2 bg-blue-500 text-white rounded-md text-center "
                                    >
                                        Detail
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDelete(data.ID_Kucing)
                                        }
                                        className="px-3 py-2 bg-red-500 text-white rounded-md text-center "
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="8"
                                className="text-gray-600 text-xs border-b border-gray-200 py-5"
                            >
                                Tidak ada data
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

TableDataKucing.propTypes = {
    dataSource: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired,
    setOpenDetail: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    setOrder: PropTypes.func.isRequired,
    setSort: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    updateDataKucing: PropTypes.func.isRequired,
};

export default TableDataKucing;
