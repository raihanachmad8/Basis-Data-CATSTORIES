import { useRef } from "react";
import { updateMetodePembayaran } from "../../../../../services/metodePembayaran";
import PropTypes from "prop-types";

const FormEditDataMetodePembayaran = ({ data }) => {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        formData.append("ID_Metode_Pembayaran", data.ID_Metode_Pembayaran);

        updateMetodePembayaran(formData, (res) => {
            console.log(res);
        });
    };

    return (
        <>
            <form ref={formRef} id="form" action="" onSubmit={handleSubmit}>
                <div className="w-full grid grid-cols-2 gap-5">
                    <div className="col-span-2">
                        <label
                            htmlFor="metodePembayaran"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Metode Pembayaran
                        </label>
                        <input
                            type="text"
                            id="metodePembayaran"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Metode Pembayaran"
                            defaultValue={data.Metode_Pembayaran}
                            name="Metode_Pembayaran"
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

FormEditDataMetodePembayaran.propTypes = {
    data: PropTypes.object.isRequired,
};

export default FormEditDataMetodePembayaran;
