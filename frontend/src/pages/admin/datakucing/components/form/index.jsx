import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";

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
const FormInputData = ({ open }) => {
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
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

    return (
        <>
            <form
                action=""
                className={`w-[25rem] h-full bg-gray-100 p-5 overflow-y-scroll flex flex-col gap-y-5 fixed top-0 right-0 z-50 ${
                    open ? "translate-x-0" : "translate-x-full"
                } transition-all`}
            >
                <div className="flex justify-between items-center mb-5">
                    <h1 className="font-bold text-lg ">Tambah Data Kucing</h1>
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
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Jenis Kelamin
                        </label>
                        <div className="inline-block relative w-full">
                            <select className="block appearance-none w-full bg-gray-50 border border-gray-300 hover:border-gray-500 p-2.5 pr-8 rounded-lg text-sm leading-tight focus:ring-blue-500 focus:border-blue-500">
                                <option>Jantan</option>
                                <option>Betina</option>
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
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Status
                        </label>
                        <div className="inline-block relative w-full">
                            <select className="block appearance-none w-full bg-gray-50 border border-gray-300 hover:border-gray-500 p-2.5 pr-8 rounded-lg text-sm leading-tight focus:ring-blue-500 focus:border-blue-500">
                                <option>Tersedia</option>
                                <option>Tidak Tersedia</option>
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
                            htmlFor="jumlahKucing"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Biaya
                        </label>
                        <input
                            type="text"
                            id="jumlahKucing"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Biaya Adopsi"
                            required
                        />
                    </div>
                    <div className="col-span-2">
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
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
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
                            required
                        ></textarea>
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
