import { useRef } from "react";
import { createJenisPengiriman } from "../../../../../services/jenisPengiriman";

const FormTambahDataJenisPengiriman = () => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        
        createJenisPengiriman(formData, (res) => {
            console.log(res);
        });
    };

    return (
        <>
            <form ref={formRef} id="form" action="" onSubmit={handleSubmit}>
                <div className="w-full grid grid-cols-2 gap-5">
                    <div className="col-span-2">
                        <label
                            htmlFor="jenisPengiriman"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Jenis Pengiriman
                        </label>
                        <input
                            type="text"
                            id="jenisPengiriman"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Jenis Pengiriman"
                            name="Jenis_Pengiriman"
                            required
                        />
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

export default FormTambahDataJenisPengiriman;
