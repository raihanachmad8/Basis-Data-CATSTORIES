import { useEffect, useState } from "react";
import { getDetailTransaksi } from "../../../../../services/detailTransaksi";
import PropTypes from "prop-types";

const DetailTransaksi = ({ id }) => {
    const [detail, setDetail] = useState({});
    const [dataKucing, setDataKucing] = useState([]);

    useEffect(() => {
        getDetailTransaksi(id, (data) => {
            setDetail(data);
            setDataKucing(data.Detail_Transaksi);
        });
    }, [id]);

    return (
        <>
            <table className="w-full text-center">
                <thead>
                    <tr>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            No
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Pembeli
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Kucing
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Jenis Pengiriman
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Metode Pembayaran
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            Pesan
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dataKucing.map((item, index) => (
                        <tr key={index}>
                            <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                {index + 1}
                            </td>
                            <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                {detail.Pembeli[0].Nama_Pembeli}
                            </td>
                            <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                {item.Kucing.Nama_Kucing}
                            </td>
                            <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                {detail.Jenis_Pengiriman?.Jenis_Pengiriman ||
                                    "-"}
                            </td>
                            <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                {detail.Metode_Pembayaran?.Metode_Pembayaran ??
                                    "-"}
                            </td>
                            <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                {detail.Pesan}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

DetailTransaksi.propTypes = {
    id: PropTypes.string.isRequired,
};

export default DetailTransaksi;
