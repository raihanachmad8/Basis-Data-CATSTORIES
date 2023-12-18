import PropTypes from "prop-types";

const TableDataTransaksi = ({ data, setIdDetail, setOpenDetail }) => {
    return (
        <>
            <table className="w-full text-center">
                <thead>
                    <tr>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            ID Transaksi
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            <div className="flex justify-center items-center">
                                <button className="relative flex justify-center items-center gap-x-2">
                                    Pembeli
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Outline"
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                    >
                                        <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                    </svg> */}
                                </button>
                            </div>
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase flex justify-center items-center">
                            <button className="relative flex justify-center items-center gap-x-2">
                                Total Biaya
                               {/*  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Outline"
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                >
                                    <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                </svg> */}
                            </button>
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Nomor Resi
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase flex justify-center items-center">
                            <button className="relative flex justify-center items-center gap-x-2">
                                Tanggal Transaksi
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Outline"
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                >
                                    <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                </svg> */}
                            </button>
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.ID_Transaksi}>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {item.ID_Transaksi}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {item.Pembeli[0].Nama_Pembeli}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {item.Total_Biaya}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {item.Nomor_Resi}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    {item.Tanggal_Transaksi.slice(0, 10)}
                                </td>
                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                    <button
                                        onClick={() => {
                                            setIdDetail(item.ID_Transaksi);
                                            setOpenDetail(true);
                                        }}
                                        className="text-white bg-blue-500 px-3 py-2 rounded"
                                    >
                                        Detail
                                    </button>
                                    <button className="ml-2 text-white bg-red-500 px-3 py-2 rounded">
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

TableDataTransaksi.propTypes = {
    data: PropTypes.array.isRequired,
    setIdDetail: PropTypes.func.isRequired,
    setOpenDetail: PropTypes.func.isRequired,
};

export default TableDataTransaksi;
