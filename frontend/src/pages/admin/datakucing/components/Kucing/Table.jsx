import PropTypes from "prop-types";
import { deleteKucing } from "../../../../../services/kucing";

const TableDataKucing = ({ dataSource, setData, setOpenDetail }) => {
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Outline"
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Outline"
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                    >
                                        <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                    </svg>
                                </button>
                            </div>
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase flex justify-center items-center">
                            <button className="relative flex justify-center items-center gap-x-2">
                                Umur
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Outline"
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
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
                    {dataSource && dataSource.length > 0 ? (
                        dataSource.map((data, index) => (
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
                                    {data.Jenis_Kucing.Jenis_Kucing}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {data.Umur >= 12
                                        ? `${Math.round(data.Umur / 12)} Tahun`
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
};

export default TableDataKucing;
