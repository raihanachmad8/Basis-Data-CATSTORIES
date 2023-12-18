import PropTypes from "prop-types";
import { deleteKucing } from "../../../../../services/kucing";
import { useEffect, useState } from "react";

const TableDataKucing = ({ dataSource, setData, setOpenDetail, filter }) => {
    const [filteredData, setFilteredData] = useState(dataSource);
    const handleDetail = (data) => {
        setData(data);
        setOpenDetail(true);
    };

    const handleDelete = (data) => {
        deleteKucing(data, (status, res) => {
            if (status) {
                console.log(res);
                alert("Data Kucing Berhasil Di Hapus");
            } else {
                alert("Gagal Menghapus Data Kucing");
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
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            ID Kucing
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase flex justify-center items-center">
                            <button className="relative flex justify-center items-center gap-x-2">
                                Nama
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
                            <button className="relative flex justify-center items-center gap-x-2">
                                Umur
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
};

export default TableDataKucing;
