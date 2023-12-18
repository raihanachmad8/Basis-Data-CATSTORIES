import PropTypes from "prop-types";
import { deleteJenisKucing } from "../../../../../services/jenisKucing";

const TableDataJenisKucing = ({
    dataSource,
    setEditMenu,
    setDataEditJenisKucing,
    updateDataJenisKucing,
}) => {
    const handleEdit = (data) => {
        setDataEditJenisKucing(data);
        setEditMenu(true);
    };

    const handleDelete = (data) => {
        deleteJenisKucing(data, (status, res) => {
            if (status) {
                alert(`Data Jenis Kucing Berhasil Di Hapus : ${res.message}`);
                updateDataJenisKucing();
            } else {
                alert("Gagal Menghapus Data Jenis Kucing");
            }
        });
    };

    return (
        <>
            <table className="w-full text-center">
                <thead>
                    <tr>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Id Jenis Kucing
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Jenis Kucing
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
                                    {data.ID_Jenis}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {data.Jenis_Kucing}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5 flex justify-center items-center gap-x-4">
                                    <button
                                        onClick={() => handleEdit(data)}
                                        type="button"
                                        className="py-2 px-3 bg-green-500 text-white rounded-lg"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDelete(data.ID_Jenis)
                                        }
                                        type="button"
                                        className="py-2 px-3 bg-red-500 text-white rounded-lg"
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

TableDataJenisKucing.propTypes = {
    dataSource: PropTypes.array.isRequired,
    setEditMenu: PropTypes.func.isRequired,
    setDataEditJenisKucing: PropTypes.func.isRequired,
    updateDataJenisKucing: PropTypes.func.isRequired,
};

export default TableDataJenisKucing;
