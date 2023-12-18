import { useState } from "react";
import FormEditDataPembeli from "./Edit";
import PropTypes from "prop-types";

const DetailPembeli = ({ data }) => {
    const [editMenu, setEditMenu] = useState(false);
    const [dataEdit, setDataEdit] = useState({
        ID_Pembeli: data.ID_Pembeli,
        Nama_Pembeli: data.Nama_Pembeli,
        Email: data.Email,
        No_Telp: data.No_Telp,
        Alamat: data.Alamat,
    });

    return (
        <>
            <div className="w-full grid grid-rows-2">
                <div className="mb-5 relative">
                    {editMenu && (
                        <>
                            <FormEditDataPembeli
                                dataEdit={dataEdit}
                                setEditMenu={setEditMenu}
                            />
                        </>
                    )}
                    {!editMenu && (
                        <>
                            <button
                                onClick={() => {
                                    setEditMenu(true);
                                    setDataEdit({
                                        ID_Pembeli: data.ID_Pembeli,
                                        Nama_Pembeli: data.Nama_Pembeli,
                                        Email: data.Email,
                                        No_Telp: data.No_Telp,
                                        Alamat: data.Alamat,
                                    });
                                }}
                                className="absolute right-0 bg-green-500 px-3 py-1 rounded-md text-white"
                            >
                                Edit
                            </button>
                            <table className="w-3/6">
                                <tr>
                                    <td>Nama</td>
                                    <td>:</td>
                                    <td>{data.Nama_Pembeli}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>:</td>
                                    <td>{data.Email}</td>
                                </tr>
                                <tr>
                                    <td>Nomor Telepon</td>
                                    <td>:</td>
                                    <td>{data.No_Telp}</td>
                                </tr>
                                <tr>
                                    <td>Alamat</td>
                                    <td>:</td>
                                    <td>{data.Alamat}</td>
                                </tr>
                            </table>
                        </>
                    )}
                </div>
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
            </div>
        </>
    );
};

DetailPembeli.propTypes = {
    data: PropTypes.object.isRequired,
};

export default DetailPembeli;
