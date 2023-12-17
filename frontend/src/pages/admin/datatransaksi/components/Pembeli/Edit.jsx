import { useRef } from "react";

const FormEditDataPembeli = () => {
    const formRef = useRef(null);

    return (
        <>
            <form ref={formRef} id="form" action="">
                <div className="w-full grid grid-cols-2 gap-5">
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
                            placeholder="Nama"
                            name="namaPembeli"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="nomorTeleponPembeli"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Nomor Telepon
                        </label>
                        <input
                            type="text"
                            id="nomorTeleponPembeli"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Nomor Telepon"
                            name="nomorTeleponPembeli"
                            required
                        />
                    </div>
                    <div className="col-span-2">
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
                            placeholder="Email"
                            name="emailPembeli"
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <label
                            htmlFor="alamat"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Alamat
                        </label>
                        <textarea
                            id="alamat"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
                            placeholder="Alamat"
                            name="alamat"
                            required
                        ></textarea>
                    </div>
                </div>
                <div className="flex justify-end mt-5">
                    <button
                        type="submit"
                        className="text-white bg-green-500 px-3 py-2 rounded-md"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default FormEditDataPembeli;
