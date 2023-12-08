import Admin from "../../../layouts/admin";
import { useRef, useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import Select from "react-select";

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
        // () => ReactElement | JSX.Element
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
    datepickerClassNames: "top-12",
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

const jenisKucing = [
    { value: "Anggora", label: "Anggora" },
    { value: "Persia", label: "Persia" },
];

const DataKucing = () => {
    const [tambahData, setTambahData] = useState(false);
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [dataKucing, setDataKucing] = useState([]);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        gender: "",
        jenisKucing: "",
        age: "",
        status: "",
        qty: "",
        date: "",
        description: "",
        image: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = formRef.current;
        const formData = new FormData(form);
        setFormData({
            id: formData.get("id"),
            name: formData.get("name"),
            gender: formData.get("gender"),
            jenisKucing: formData.get("jenisKucing"),
            age: formData.get("age"),
            status: formData.get("status"),
            qty: formData.get("qty"),
            date: formData.get("date"),
            description: formData.get("description"),
            image: formData.get("image"),
        });
        console.log(formData);
        setDataKucing([...dataKucing, formData]);
        console.log(dataKucing);
    };

    const handleTambahData = () => {
        setTambahData(!tambahData);
    };

    const handleChange = (selectedDate) => {
        const day = selectedDate.getDate();
        const month = selectedDate.getMonth() + 1;
        const year = selectedDate.getFullYear();
        const formattedDate = `${year}-${month}-${day}`;
        setSelectedDate(formattedDate);
    };

    const handleClose = (state) => {
        setShow(state);
    };

    const handleCloseForm = () => {
        setTambahData(false);
    };

    const handleCancel = () => {
        setTambahData(false);
    };

    return (
        <>
            <Admin title="Data Kucing">
                <div className="w-full min-h-screen py-10">
                    <div className="w-full h-full bg-white rounded-3xl p-5 flex flex-col gap-y-5">
                        <div className="w-full">
                            <header className="flex justify-between">
                                <h1 className="text-xl font-bold text-slate-800">
                                    Tabel Data Kucing
                                </h1>
                                <div className="flex justify-center items-center gap-x-7">
                                    <div className="order-3 px-3 py-2 bg-green-500 rounded-md text-center ">
                                        <button
                                            onClick={handleTambahData}
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
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                                            No
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                                            Name
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                                            Gender
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                                            Jenis Kucing
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                                            Age
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                                            Status
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataKucing && dataKucing.length > 0 ? (
                                        dataKucing.map((data, index) => (
                                            <tr key={index}>
                                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                                    {index + 1}
                                                </td>
                                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                                    {data.get("name")}
                                                </td>
                                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                                    {data.get("gender")}
                                                </td>
                                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                                    {data.get("jeniskucing")}
                                                </td>
                                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                                    {data.get("age")}
                                                </td>
                                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5">
                                                    {data.get("status")}
                                                </td>
                                                <td className="text-gray-600 text-xs border-b border-gray-200 py-5 flex gap-x-5 justify-center ">
                                                    <button className="px-3 py-2 bg-blue-500 text-white rounded-md text-center ">
                                                        Detail
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="7"
                                                className="text-gray-600 text-xs border-b border-gray-200 py-5"
                                            >
                                                Tidak ada data
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Admin>
            <div
                className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-50  ${
                    tambahData ? "translate-x-0" : "translate-x-full"
                } duration-500`}
            >
                <div
                    className={`w-[25rem] h-full bg-gray-100 p-5 overflow-y-scroll flex flex-col gap-y-5 fixed top-0 right-0 z-50`}
                >
                    <div className="flex justify-between">
                        <h1 className="font-bold text-lg ">
                            Tambah Data Kucing
                        </h1>
                        <button onClick={handleCloseForm}>
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
                                    htmlFor="idKucing"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Id
                                </label>
                                <input
                                    type="text"
                                    id="idKucing"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Id Kucing"
                                    name="id"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="namaKucing"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    id="namaKucing"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg hover:border-gray-500 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Nama Kucing"
                                    name="name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Jenis Kelamin
                                </label>
                                <div className="inline-block relative w-full">
                                    <select
                                        id="genderKucing"
                                        name="gender"
                                        className="block appearance-none w-full bg-gray-50 border border-gray-300 hover:border-gray-500 p-2.5 pr-8 rounded-lg text-sm leading-tight focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="Jantan">Jantan</option>
                                        <option value="Betina">Betina</option>
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
                            <div>
                                <label
                                    htmlFor="umurKucing"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Umur
                                </label>
                                <input
                                    type="text"
                                    id="umurKucing"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Umur Kucing"
                                    name="age"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Status
                                </label>
                                <div className="inline-block relative w-full">
                                    <select
                                        id="statusKucing"
                                        name="status"
                                        className="block appearance-none w-full bg-gray-50 border border-gray-300 hover:border-gray-500 p-2.5 pr-8 rounded-lg text-sm leading-tight focus:ring-blue-500 focus:border-blue-500"
                                    >
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
                            <div>
                                <label
                                    htmlFor="biayaAdopsi"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Biaya
                                </label>
                                <input
                                    type="text"
                                    id="biayaAdopsi"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Biaya Adopsi"
                                    name="price"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Tanggal Masuk
                                </label>
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
                                        required
                                        readOnly
                                    />
                                </Datepicker>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Jenis
                                </label>
                                <Select
                                    options={jenisKucing}
                                    name="jeniskucing"
                                    required
                                />
                            </div>
                            <div className=" w-full col-span-2">
                                <p>Gambar</p>
                                <label
                                    htmlFor="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 "
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-8 h-8 mb-4 text-gray-500"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500">
                                            <span className="font-semibold">
                                                Click to upload
                                            </span>{" "}
                                            or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            SVG, PNG, JPG or GIF (MAX.
                                            800x400px)
                                        </p>
                                    </div>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden"
                                        name="image"
                                        required
                                    />
                                </label>
                            </div>
                            <div className="col-span-2">
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
                                    name="description"
                                    required
                                ></textarea>
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

export default DataKucing;
