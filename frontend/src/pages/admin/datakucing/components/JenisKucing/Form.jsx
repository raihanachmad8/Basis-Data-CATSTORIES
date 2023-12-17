import PropType from "prop-types";
import { useRef } from "react";
import { createJenisKucing } from "../../../../../services/jenisKucing";

const FormTambahDataJenisKucing = ({
    updateDataJenisKucing,
    setTambahData,
}) => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = formRef.current;
        const formData = new FormData(form);

        createJenisKucing(formData, (status) => {
            if (status) {
                updateDataJenisKucing();
                setTambahData(false);
                form.reset();
                alert("Data Jenis Kucing Berhasil Di Tambahkan");
            } else {
                alert("Gagal Tambah Data Jenis Kucing");
            }
        });
    };

    return (
        <>
            <form ref={formRef} id="form" action="" onSubmit={handleSubmit}>
                <div className="w-full grid grid-cols-2 gap-5">
                    <div className="col-span-2">
                        <label
                            htmlFor="jenisKucing"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Jenis Kucing
                        </label>
                        <input
                            type="text"
                            id="jenisKucing"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Jenis Kucing"
                            name="Jenis_Kucing"
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

FormTambahDataJenisKucing.propTypes = {
    updateDataJenisKucing: PropType.func.isRequired,
    setTambahData: PropType.func.isRequired,
};

export default FormTambahDataJenisKucing;
