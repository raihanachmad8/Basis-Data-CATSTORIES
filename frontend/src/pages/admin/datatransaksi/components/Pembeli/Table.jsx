import PropTypes from "prop-types";
import { deletePembeli } from "../../../../../services/pembeli";
import Swal from "sweetalert2";
const TabelDataPembeli = ({
    data,
    setOpenDetail,
    setDataDetail,
    setSort,
    setOrder,
    order,
    updatePembeli,
}) => {
    const handleDelete = (id) => {
        deletePembeli(id, (status, res) => {
            if (status) {
                updatePembeli();
                Swal.fire("Success", res.message, "success");
            } else {
                Swal.fire("Error", res.message, "error");
            }
        });
    };

    return (
        <>
            <table className="w-full text-center">
                <thead>
                    <tr>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            ID Pembeli
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase flex justify-center items-center">
                            <button
                                onClick={() => {
                                    setSort("Nama_Pembeli");
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
                                        order === "asc"
                                            ? "rotate-0"
                                            : "rotate-180"
                                    }`}
                                >
                                    <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                </svg>
                            </button>
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Email
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Nomor Telepon
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Alamat
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.ID_Pembeli}>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {item.ID_Pembeli}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {item.Nama_Pembeli}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {item.Email}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {item.No_Telp}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {item.Alamat}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    <button
                                        onClick={() => {
                                            setOpenDetail(true);
                                            setDataDetail(item);
                                        }}
                                        className="px-3 py-2 bg-blue-500 text-white rounded-md"
                                    >
                                        Detail
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleDelete(item.ID_Pembeli);
                                        }}
                                        className="px-3 py-2 bg-red-500 text-white rounded-md ml-2"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="7"
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

TabelDataPembeli.propTypes = {
    data: PropTypes.array.isRequired,
    setOpenDetail: PropTypes.func.isRequired,
    setDataDetail: PropTypes.func.isRequired,
    setSort: PropTypes.func.isRequired,
    setOrder: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    updatePembeli: PropTypes.func.isRequired,
};

export default TabelDataPembeli;
