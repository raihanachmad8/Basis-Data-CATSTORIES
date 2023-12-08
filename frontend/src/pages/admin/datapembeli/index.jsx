import { useRef, useState } from "react";
import Admin from "../../../layouts/admin";

const DataPembeli = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        idPembeli: "",
        namaPembeli: "",
        emailPembeli: "",
        alamatPembeli: "",
        noTelpPembeli: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        setFormData({
            idPembeli: formData.get("idPembeli"),
            namaPembeli: formData.get("namaPembeli"),
            emailPembeli: formData.get("emailPembeli"),
            alamatPembeli: formData.get("alamatPembeli"),
            noTelpPembeli: formData.get("noTelpPembeli"),
        });
        setData([...data, formData]);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Admin title="Data Pembeli">
                <div className="w-full min-h-screen py-10 ">
                    <div className="w-full h-full bg-white rounded-3xl p-5 flex flex-col gap-y-5">
                        <div className="w-full">
                            <header className="flex justify-between">
                                <h1 className="text-xl font-bold text-slate-800">
                                    Tabel Data Pembeli
                                </h1>
                                <div className="flex justify-center items-center gap-x-7">
                                    <div className="order-3 px-3 py-2 bg-green-500 rounded-md text-center ">
                                        <button
                                            onClick={handleOpen}
                                            className="text-base text-white"
                                        >
                                            Tambah Data
                                        </button>
                                    </div>
                                    <div className=" bg-gray-100 px-3 py-2 rounded-md text-center">
                                        <button className="text-base">
                                            Filter By
                                        </button>
                                    </div>
                                    <div className="px-3 py-2 bg-gray-100 rounded-md text-center">
                                        <button className="text-base">
                                            Sort By
                                        </button>
                                    </div>
                                </div>
                            </header>
                        </div>
                        <div className="w-full">
                            <table className="w-full text-center">
                                <thead>
                                    <tr>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            ID_Pembeli
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Nama
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            No Telp
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Alamat
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-5">1</td>
                                        <td className="py-5">
                                            Putra Zakaria Muzaki
                                        </td>
                                        <td className="py-5">1847192374</td>
                                        <td className="py-5">
                                            Jl. Sukabirus No. 1
                                        </td>
                                        <td className="py-5">
                                            <div className="flex justify-center items-center gap-x-3">
                                                <button className="px-3 py-2 bg-green-500 rounded-md text-white">
                                                    Edit
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Admin>
            <div
                className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-50  ${
                    open ? "translate-x-0" : "translate-x-full"
                } duration-500`}
            >
                <div
                    className={`w-[25rem] h-full bg-gray-100 p-5 overflow-y-scroll flex flex-col gap-y-5 fixed top-0 right-0 z-50`}
                >
                    <div className="flex justify-between">
                        <h1 className="font-bold text-lg ">
                            Tambah Data Pembeli
                        </h1>
                        <button onClick={handleClose}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Bold"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path d="M14.121,12,18,8.117A1.5,1.5,0,0,0,15.883,6L12,9.879,8.11,5.988A1.5,1.5,0,1,0,5.988,8.11L9.879,12,6,15.882A1.5,1.5,0,1,0,8.118,18L12,14.121,15.878,18A1.5,1.5,0,0,0,18,15.878Z" />
                            </svg>
                        </button>
                    </div>
                    <form
                        ref={formRef}
                        id="form"
                        action=""
                        onSubmit={handleSubmit}
                    >
                        <div className="w-full grid grid-cols-2 gap-5">
                            <div>
                                <label
                                    htmlFor="idPembeli"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Id
                                </label>
                                <input
                                    type="text"
                                    id="idPembeli"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Id Pembeli"
                                    name="idPembeli"
                                    readOnly
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="namaPembeli"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    id="namaPembeli"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-gray-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Nama Pembeli"
                                    name="namaPembeli"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="emailPembeli"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="emailPembeli"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-gray-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Email Pembeli"
                                    name="emailPembeli"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="noTelpPembeli"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Nomor Telpon
                                </label>
                                <input
                                    type="text"
                                    id="noTelpPembeli"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-gray-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Nomor Telepon"
                                    name="noTelpPembeli"
                                    required
                                />
                            </div>
                            <div className="col-span-2">
                                <label
                                    htmlFor="alamatPembeli"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Alamat
                                </label>
                                <input
                                    type="text"
                                    id="alamatPembeli"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-gray-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Alamat Pembeli"
                                    name="alamatPembeli"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-between mt-5">
                            <button
                                type="reset"
                                onClick={handleCancel}
                                className="text-red-500 border border-red-500 px-3 py-2 rounded-md"
                            >
                                Batalkan
                            </button>
                            <button
                                type="submit"
                                className="text-white bg-green-500 px-3 py-2 rounded-md"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default DataPembeli;
