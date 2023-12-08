import { useState } from "react";

const FormInputData = ({ open }) => {
    const [data, setData] = useState({
        idPembeli: "",
        namaPembeli: "",
        emailPembeli: "",
        alamatPembeli: "",
        noTelpPembeli: "",
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);

        setData({
            idPembeli: "",
            namaPembeli: "",
            emailPembeli: "",
            alamatPembeli: "",
            noTelpPembeli: "",
        });
    };

    return (
        <>
            <form
                action=""
                className={`w-[25rem] h-full bg-gray-100 p-5 overflow-y-scroll flex flex-col gap-y-5 fixed top-0 right-0 z-50 ${
                    open ? "translate-x-0" : "translate-x-full"
                } transition-all`}
            >
                <div className="flex justify-between items-center mb-5">
                    <h1 className="font-bold text-lg ">Tambah Pembeli</h1>
                    <button>
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
                            required
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Nama Pembeli"
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
                            type="email"
                            id="emailPembeli"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Email Pembeli"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="noTelpPembeli"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Nomor Telepon
                        </label>
                        <input
                            type="email"
                            id="noTelpPembeli"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Nomor Telepon Pembeli"
                            required
                        />
                    </div>
                </div>
                <div className="flex justify-between">
                    <button className="text-red-500 border border-red-500 px-3 py-2 rounded-md">
                        Batalkan
                    </button>
                    <button className="text-white bg-green-500 px-3 py-2 rounded-md">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default FormInputData;
