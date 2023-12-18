import PropTypes from "prop-types";
import Datepicker from "tailwind-datepicker-react";
import Select from "react-select";
import { useEffect, useRef, useState } from "react";
import { updateKucing } from "../../../../../services/kucing";
import { getOptionKucing } from "../../../../../services/jenisKucing";

const options = {
    title: "Kalender",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date(),
    theme: {
        background: "bg-gray-300",
        todayBtn: "",
        clearBtn: "",
        icons: "",
        text: "text-black",
        disabledText: "",
        input: "",
        inputIcon: "",
        selected: "",
    },
    icons: {
        prev: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="20"
                height="20"
            >
                <path d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z" />
            </svg>
        ),
        next: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="20"
                height="20"
            >
                <path d="M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z" />
            </svg>
        ),
    },
    datepickerClassNames: "top-12 right-0",
    defaultDate: new Date(),
    language: "id",
    disabledDates: [],
    weekDays: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sat", "Min"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
        day: "numeric",
        month: "long",
        year: "numeric",
    },
};

const FormEditDataKucing = ({
    dataKucing,
    setEditData,
    setOpen,
    updateDataKucing,
}) => {
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(
        new Date(dataKucing.Tanggal_Masuk).toISOString().split("T")[0]
    );
    const formRef = useRef(null);
    const [optionJenisKucing, setOptionJenisKucing] = useState([]);
    const [defaultValue, setDefaultValue] = useState([
        {
            value: dataKucing.Jenis_Kucing.ID_Jenis,
            label: dataKucing.Jenis_Kucing.Jenis_Kucing,
        },
    ]);

    const [form, setForm] = useState({
        ID_Kucing: dataKucing.ID_Kucing,
        Nama_Kucing: dataKucing.Nama_Kucing,
        Jenis_Kelamin: dataKucing.Jenis_Kelamin,
        ID_Jenis: dataKucing.Jenis_Kucing.ID_Jenis,
        Umur: dataKucing.Umur,
        Status: dataKucing.Status,
        Biaya: dataKucing.Biaya,
        Tanggal_Masuk: selectedDate,
        Keterangan: dataKucing.Keterangan,
        Foto: dataKucing.Foto,
    });

    useEffect(() => {
        getOptionKucing((data) => {
            setOptionJenisKucing(data);
        });
    }, []);

    const [foto, setFoto] = useState(dataKucing.Foto);

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        if (name === "Foto") {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setFoto(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }

        if (name === "Jenis_Kucing") {
            setDefaultValue([
                {
                    value: {
                        ID_Jenis: value.ID_Jenis,
                        Jenis_Kucing: value.Jenis_Kucing,
                    },
                    label: value.Jenis_Kucing,
                },
            ]);
        }
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const forms = formRef.current;

        const formData = new FormData(forms);

        updateKucing(formData, (status) => {
            if (status) {
                setEditData(false);
                setOpen(false);
                alert("Data Kucing Berhasil Di Update");
                updateDataKucing();
            } else {
                alert("Gagal Update Data Kucing");
            }
        });
    };

    const handleClose = (state) => {
        setShow(state);
    };

    const handleChange = (selectedDate) => {
        const day = selectedDate.getDate();
        const month = selectedDate.getMonth() + 1;
        const year = selectedDate.getFullYear();
        const formattedDate = `${year}-${month}-${day}`;
        setSelectedDate(formattedDate);
    };

    const onChangeSelect = (selectedOption) => {
        setDefaultValue(selectedOption);

        setForm({
            ...form,
            ID_Jenis: selectedOption.value.ID_Jenis,
        });
    };

    return (
        <>
            <form
                ref={formRef}
                id="formEdit"
                action=""
                onSubmit={handleSubmit}
                className="grid grid-cols-2 grid-rows-2 w-[80vw] h-full bg-gray-100 absolute top-0 right-0 p-10"
            >
                <div>
                    <label htmlFor="image">
                        <img
                            src={foto}
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="Foto"
                        className="hidden"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="px-4">
                    <table className="w-full">
                        <tbody className="w-full">
                            <tr className="w-full hidden">
                                <td>
                                    <label
                                        htmlFor="id"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        ID Kucing
                                    </label>
                                </td>
                                <td>:</td>
                                <td>
                                    <input
                                        type="text"
                                        id="id"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        name="ID_Kucing"
                                        value={form.ID_Kucing}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="nama"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Nama
                                    </label>
                                </td>
                                <td>:</td>
                                <td>
                                    <input
                                        type="text"
                                        id="nama"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Nama Kucing"
                                        name="Nama_Kucing"
                                        value={form.Nama_Kucing}
                                        onChange={handleOnChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label
                                        htmlFor="umur"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Umur
                                    </label>
                                </td>
                                <td>:</td>
                                <td>
                                    <input
                                        type="text"
                                        id="umur"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Umur Kucing"
                                        name="Umur"
                                        value={form.Umur}
                                        onChange={handleOnChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Jenis Kelamin
                                    </label>
                                </td>
                                <td>:</td>
                                <td>
                                    <div>
                                        <div className="inline-block relative w-full">
                                            <select
                                                id="genderKucing"
                                                name="Jenis_Kelamin"
                                                onChange={handleOnChange}
                                                className="block appearance-none w-full bg-gray-50 border border-gray-300 hover:border-gray-500 p-2.5 pr-8 rounded-lg text-sm leading-tight focus:ring-blue-500 focus:border-blue-500"
                                            >
                                                <option
                                                    value={form.Jenis_Kelamin}
                                                    defaultValue={
                                                        form.Jenis_Kelamin
                                                    }
                                                >
                                                    {form.Jenis_Kelamin}
                                                </option>
                                                <option value="Jantan">
                                                    Jantan
                                                </option>
                                                <option value="Betina">
                                                    Betina
                                                </option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg
                                                    className="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Jenis
                                    </label>
                                </td>
                                <td>:</td>
                                <td>
                                    <div>
                                        <Select
                                            options={optionJenisKucing}
                                            defaultValue={defaultValue}
                                            name="ID_Jenis"
                                            onChange={(selected) => {
                                                onChangeSelect(selected);
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Status
                                    </label>
                                </td>
                                <td>:</td>
                                <td>
                                    <div>
                                        <div className="inline-block relative w-full">
                                            <select
                                                id="genderKucing"
                                                name="Status"
                                                onChange={handleOnChange}
                                                className="block appearance-none w-full bg-gray-50 border border-gray-300 hover:border-gray-500 p-2.5 pr-8 rounded-lg text-sm leading-tight focus:ring-blue-500 focus:border-blue-500"
                                            >
                                                <option value={form.Status}>
                                                    {form.Status}
                                                </option>
                                                <option value="Tersedia">
                                                    Tersedia
                                                </option>
                                                <option value="Tidak Tersedia">
                                                    Tidak Tersedia
                                                </option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg
                                                    className="fill-current h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Total Biaya
                                    </label>
                                </td>
                                <td>:</td>
                                <td>
                                    <input
                                        type="text"
                                        id="nama"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Nama Kucing"
                                        name="Biaya"
                                        onChange={handleOnChange}
                                        value={form.Biaya}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Tanggal Masuk</label>
                                </td>
                                <td>:</td>
                                <td>
                                    <Datepicker
                                        options={options}
                                        onChange={handleChange}
                                        show={show}
                                        setShow={handleClose}
                                    >
                                        <input
                                            type="text"
                                            id="jumlahKucing"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="Select Date"
                                            value={selectedDate}
                                            onFocus={() => setShow(true)}
                                            name="Tanggal_Masuk"
                                            onChange={handleOnChange}
                                            required
                                            readOnly
                                        />
                                    </Datepicker>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-span-2 flex flex-col">
                    <div className="h-full py-4">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Keterangan
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
                            placeholder="Tentang Kucing"
                            name="Keterangan"
                            value={form.Keterangan}
                            onChange={handleOnChange}
                            required
                        ></textarea>
                    </div>
                    <div className="h-fit">
                        <button
                            type="reset"
                            className="px-5 py-2 border border-red-500 rounded-md text-red-500"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            Batalkan
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2 bg-green-500 rounded-md text-white float-right"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

FormEditDataKucing.propTypes = {
    dataKucing: PropTypes.object.isRequired,
    setEditData: PropTypes.func.isRequired,
    setOpen: PropTypes.func.isRequired,
    updateDataKucing: PropTypes.func.isRequired,
};

export default FormEditDataKucing;
