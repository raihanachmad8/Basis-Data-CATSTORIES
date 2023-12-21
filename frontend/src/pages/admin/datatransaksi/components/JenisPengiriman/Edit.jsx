import { useRef } from "react";
import { updateJenisPengiriman } from "../../../../../services/jenisPengiriman";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const FormEditDataJenisPengiriman = ({ data, updatePengiriman, closeForm }) => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        formData.append("ID_Jenis_Pengiriman", data.ID_Jenis_Pengiriman);

        updateJenisPengiriman(formData, (status, res) => {
            if (status) {
                updatePengiriman();
                Swal.fire("Success", res.message, "success");
                form.reset();
                closeForm();
            } else {
                Swal.fire("Error", res.message, "error");
            }
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
                            defaultValue={data.Jenis_Pengiriman}
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

FormEditDataJenisPengiriman.propTypes = {
    data: PropTypes.object.isRequired,
    updatePengiriman: PropTypes.func.isRequired,
    closeForm: PropTypes.func.isRequired,
};

export default FormEditDataJenisPengiriman;
