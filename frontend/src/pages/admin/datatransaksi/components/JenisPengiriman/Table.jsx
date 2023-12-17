import PropTypes from "prop-types";
import { deleteJenisPengiriman } from "../../../../../services/jenisPengiriman";

const TabelJenisPengiriman = ({ data, setEditMenu, setDataEdit }) => {
    const hanldeDelete = (id) => {
        deleteJenisPengiriman(id, (res) => {
            console.log(res);
        });
    };

    return (
        <>
            <table className="w-full text-center">
                <thead>
                    <tr>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            ID Pengiriman
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Jenis Pengiriman
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((item) => (
                            <tr key={item.ID_Jenis_Pengiriman}>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {item.ID_Jenis_Pengiriman}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {item.Jenis_Pengiriman}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    <button
                                        onClick={() => {
                                            setDataEdit(item);
                                            setEditMenu(true);
                                        }}
                                        className="px-3 py-2 bg-green-500 text-white rounded-md"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            hanldeDelete(
                                                item.ID_Jenis_Pengiriman
                                            )
                                        }
                                        className="px-3 py-2 bg-red-500 text-white ml-2 rounded-md"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
};

TabelJenisPengiriman.propTypes = {
    data: PropTypes.array.isRequired,
};

export default TabelJenisPengiriman;
