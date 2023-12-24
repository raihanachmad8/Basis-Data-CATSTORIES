import PropTypes from "prop-types";
import { deleteMetodePembayaran } from "../../../../../services/metodePembayaran";
import Swal from "sweetalert2";
const TabelMetodePembayaran = ({
    data,
    setEditMenu,
    setDataEdit,
    updatePembayaran,
}) => {
    const handleDelete = (id) => {
        deleteMetodePembayaran(id, (status, res) => {
            if (status) {
                updatePembayaran();
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
                            ID Metode Pembayaran
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Metode Pembayaran
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.ID_Metode_Pembayaran}>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {item.ID_Metode_Pembayaran}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {item.Metode_Pembayaran}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    <button
                                        onClick={() => {
                                            setEditMenu(true);
                                            setDataEdit(item);
                                        }}
                                        className="px-3 py-2 bg-green-500 text-white rounded-md"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDelete(
                                                item.ID_Metode_Pembayaran
                                            )
                                        }
                                        className="px-3 py-2 bg-red-500 ml-3 text-white rounded-md"
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

TabelMetodePembayaran.propTypes = {
    data: PropTypes.array.isRequired,
    setEditMenu: PropTypes.func.isRequired,
    setDataEdit: PropTypes.func.isRequired,
    updatePembayaran: PropTypes.func.isRequired,
};

export default TabelMetodePembayaran;
