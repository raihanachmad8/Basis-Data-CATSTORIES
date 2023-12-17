const DetailPembeli = () => {
    return (
        <>
            <table className="w-full text-center">
                <thead>
                    <tr>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            No
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Nama Kucing
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Jenis Kucing
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Tanggal Transaksi
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Total Biaya
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td
                            colSpan="7"
                            className="text-gray-600 text-xs border-b border-gray-200 py-5"
                        >
                            Tidak ada data
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default DetailPembeli;
