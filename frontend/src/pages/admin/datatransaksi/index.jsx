import { useRef, useState } from "react";
import Admin from "../../../layouts/admin";
import DatePicker from "tailwind-datepicker-react";
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

const pembeli = [
    { value: "Anang", label: "Anang" },
    { value: "Budi", label: "Budi" },
];

const pengiriman = [
    { value: "COD", label: "COD" },
    { value: "Ambil ditoko", label: "Ambil ditoko" },
    { value: "JNE", label: "JNE" },
    { value: "JNT", label: "JNT" },
    { value: "TIKI", label: "TIKI" },
];

const pembayaran = [
    { value: "Cash", label: "Cash" },
    { value: "BCA", label: "BCA" },
    { value: "BRI", label: "BRI" },
    { value: "Mandiri", label: "Mandiri" },
    { value: "Bank Jago", label: "Bank Jago" },
];

const DataTransaksi = () => {
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [formData, setFormData] = useState({
        idTransaksi: "",
        idPembeli: "",
        idJenisPengiriman: "",
        idMetodePembayaran: "",
        totalBiaya: "",
        nomorResi: "",
        tanggalTransaksi: "",
        pesan: "",
    });
    const [openForm, setOpenForm] = useState(false);
    const [data, setData] = useState([]);
    const formRef = useRef(null);

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

    const handleOpenForm = () => {
        setOpenForm(true);
    };

    const handleCloseForm = () => {
        setOpenForm(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = formRef.current;
        const formData = new FormData(form);
        setFormData({
            idTransaksi: formData.get("idTransaksi"),
            idPembeli: formData.get("idPembeli"),
            idJenisPengiriman: formData.get("idJenisPengiriman"),
            idMetodePembayaran: formData.get("idMetodePembayaran"),
            totalBiaya: formData.get("totalBiaya"),
            nomorResi: formData.get("nomorResi"),
            tanggalTransaksi: formData.get("tanggalTransaksi"),
            pesan: formData.get("pesan"),
        });

        setData([...data, formData]);
        console.log(data);
    };
    return (
        <>
            <Admin title="Data Transaksi">
                <div className="w-full min-h-screen py-10 ">
                    <div className="w-full h-full bg-white rounded-3xl p-5 flex flex-col gap-y-5">
                        <div className="w-full">
                            <header className="flex justify-between">
                                <h1 className="text-xl font-bold text-slate-800">
                                    Tabel Data Transaksi
                                </h1>
                                <div className="flex justify-center items-center gap-x-7">
                                    <div className="order-3 px-3 py-2 bg-green-500 rounded-md text-center ">
                                        <button
                                            onClick={handleOpenForm}
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
                                            ID_Transaksi
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Resi
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Pembeli
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Jenis Pengiriman
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Metode Pembayaran
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Total Biaya
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Tanggal Transaksi
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Pesan
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.length > 0 ? (
                                        data.map((item, index) => (
                                            <tr key={index}>
                                                <td className="border-b border-gray-200 py-5">
                                                    {item.get("idTransaksi")}
                                                </td>
                                                <td className="border-b border-gray-200 py-5">
                                                    {item.get("nomorResi")}
                                                </td>
                                                <td className="border-b border-gray-200 py-5">
                                                    {item.get("idPembeli")}
                                                </td>
                                                <td className="border-b border-gray-200 py-5">
                                                    {item.get(
                                                        "idJenisPengiriman"
                                                    )}
                                                </td>
                                                <td className="border-b border-gray-200 py-5">
                                                    {item.get(
                                                        "idMetodePembayaran"
                                                    )}
                                                </td>
                                                <td className="border-b border-gray-200 py-5">
                                                    {item.get("totalBiaya")}
                                                </td>
                                                <td className="border-b border-gray-200 py-5">
                                                    {item.get(
                                                        "tanggalTransaksi"
                                                    )}
                                                </td>
                                                <td className="border-b border-gray-200 py-5">
                                                    {item.get("pesan")}
                                                </td>
                                                <td className="border-b border-gray-200 py-5">
                                                    <button>Detail</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="9"
                                                className="text-center py-5"
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
                    openForm ? "translate-x-0" : "translate-x-full"
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
                                    htmlFor="idTransaksi"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Id Transaksi
                                </label>
                                <input
                                    type="text"
                                    id="idTransaksi"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Id Transaksi"
                                    name="idTransaksi"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="idPembeli"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Pembeli
                                </label>
                                <Select options={pembeli} name="idPembeli" />
                            </div>
                            <div>
                                <label
                                    htmlFor="idJenisPengiriman"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Jenis Pengiriman
                                </label>
                                <Select
                                    options={pengiriman}
                                    name="idJenisPengiriman"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="idMetodePembayaran"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Metode Pembayaran
                                </label>
                                <Select
                                    options={pembayaran}
                                    name="idMetodePembayaran"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="totalBiaya"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Total Biaya
                                </label>
                                <input
                                    type="text"
                                    id="totalBiaya"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Id Transaksi"
                                    name="totalBiaya"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="nomorResi"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Resi
                                </label>
                                <input
                                    type="text"
                                    id="nomorResi"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Id Transaksi"
                                    name="nomorResi"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Tanggal Transaksi
                                </label>
                                <DatePicker
                                    options={options}
                                    onChange={handleChange}
                                    show={show}
                                    setShow={handleClose}
                                >
                                    <input
                                        type="text"
                                        id="date"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Select Date"
                                        name="tanggalTransaksi"
                                        value={selectedDate}
                                        onFocus={() => setShow(true)}
                                        required
                                        readOnly
                                    />
                                </DatePicker>
                            </div>
                            <div>
                                <label
                                    htmlFor="pesan"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Pesan
                                </label>
                                <input
                                    type="text"
                                    id="pesan"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Id Transaksi"
                                    name="pesan"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex justify-between mt-5">
                            <button
                                type="reset"
                                onClick={handleCloseForm}
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

export default DataTransaksi;
