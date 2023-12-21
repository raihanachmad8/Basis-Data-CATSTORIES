import PropType from "prop-types";
import { useRef } from "react";
import { editJenisKucing } from "../../../../../services/jenisKucing";
import Swal from "sweetalert2";

const FormEditJenisKucing = ({ data, updateDataJenisKucing, setEditMenu }) => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = formRef.current;

        const formData = new FormData(form);
        formData.set("ID_Jenis", data.ID_Jenis);

        editJenisKucing(formData, (status) => {
            if (status) {
                updateDataJenisKucing();
                Swal.fire({
                    title: "Data Jenis Kucing Berhasil Di Update",
                    text: "Data Jenis Kucing Berhasil Di Update",
                    icon: "success",
                });
                setEditMenu(false);
                form.reset();
            } else {
                Swal.fire({
                    title: "Gagal Update Data Jenis Kucing",
                    text: "Gagal Update Data Jenis Kucing",
                    icon: "error",
                });
            }
        });
    };

    const handleCancel = () => {
        const form = formRef.current;
        form.reset();
        setEditMenu(false);
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
                            defaultValue={data.Jenis_Kucing}
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
                        Cancel
                    </button>
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

FormEditJenisKucing.propTypes = {
    data: PropType.object.isRequired,
    updateDataJenisKucing: PropType.func.isRequired,
    setEditMenu: PropType.func.isRequired,
};

export default FormEditJenisKucing;
