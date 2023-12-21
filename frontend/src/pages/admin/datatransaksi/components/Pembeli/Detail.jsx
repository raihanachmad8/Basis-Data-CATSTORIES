import { useState } from "react";
import FormEditDataPembeli from "./Edit";
import PropTypes from "prop-types";

const DetailPembeli = ({ data, updatePembeli, setOpenDetail }) => {
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
                                updateDataPembeli={updatePembeli}
                                setOpenDetail={setOpenDetail}
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
            </div>
        </>
    );
};

DetailPembeli.propTypes = {
    data: PropTypes.object.isRequired,
    updatePembeli: PropTypes.func.isRequired,
    setOpenDetail: PropTypes.func.isRequired,
};

export default DetailPembeli;
