import { useRef } from "react";
import PropTypes from "prop-types";
import { updatePembeli } from "../../../../../services/pembeli";
import Swal from "sweetalert2";

const FormEditDataPembeli = ({
    setEditMenu,
    dataEdit,
    updateDataPembeli,
    setOpenDetail,
}) => {
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        formData.append("ID_Pembeli", dataEdit && dataEdit.ID_Pembeli);

        updatePembeli(formData, (status, res) => {
            if (status) {
                Swal.fire("Success", res.message, "success");
                setEditMenu(false);
                setOpenDetail(false);
                updateDataPembeli();
                form.reset();
            } else {
                Swal.fire("Error", res.message, "error");
            }
        });
    };

    return (
        <>
            <form ref={formRef} id="form" action="" onSubmit={handleSubmit}>
                <table className="w-3/6">
                    <tr>
                        <td>
                            <label htmlFor="Nama_Pembeli">Nama</label>
                        </td>
                        <td>:</td>
                        <td>
                            <input
                                type="text"
                                id="Nama_Pembeli"
                                name="Nama_Pembeli"
                                defaultValue={dataEdit && dataEdit.Nama_Pembeli}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="Email">Email</label>
                        </td>
                        <td>:</td>
                        <td>
                            <input
                                type="text"
                                id="Email"
                                name="Email"
                                defaultValue={dataEdit && dataEdit.Email}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="No_Telp">Nomor Telepon</label>
                        </td>
                        <td>:</td>
                        <td>
                            <input
                                type="text"
                                id="No_Telp"
                                name="No_Telp"
                                defaultValue={dataEdit && dataEdit.No_Telp}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="Alamat">Alamat</label>
                        </td>
                        <td>:</td>
                        <td>
                            <input
                                type="text"
                                id="Alamat"
                                name="Alamat"
                                defaultValue={dataEdit && dataEdit.Alamat}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                            />
                        </td>
                    </tr>
                </table>
                <div className="absolute top-0 right-0 flex flex-col gap-y-5">
                    <button className="bg-green-500 px-3 py-1 rounded-md text-white">
                        Submit
                    </button>
                    <button
                        onClick={() => setEditMenu(false)}
                        className="bg-red-500 px-3 py-1 rounded-md text-white"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
};

FormEditDataPembeli.propTypes = {
    dataEdit: PropTypes.object.isRequired,
    setEditMenu: PropTypes.func.isRequired,
    updateDataPembeli: PropTypes.func.isRequired,
    setOpenDetail: PropTypes.func.isRequired,
};

export default FormEditDataPembeli;
