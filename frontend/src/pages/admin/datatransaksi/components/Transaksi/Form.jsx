import Datepicker from "tailwind-datepicker-react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import FormTambahDataPembeli from "../Pembeli/Form";
import { Navigation } from "swiper/modules";
import SelectCat from "./SelectCat";
import { ButtonNext } from "./components/SwiperNextButton";
import { ButtonPrev } from "./components/SwiperPrevButton";
import PropTypes from "prop-types";
import { createTransaksi } from "../../../../../services/transaksi";
import Swal from "sweetalert2";

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

const FormTambahDataTransaksi = ({
    dataKucing,
    dataMetodePembayaran,
    dataJenisPengiriman,
    updateDataTransaksi,
    closeForm,
}) => {
    const formRef = useRef(null);
    const swiperRef = useRef(null);
    const swiper = useSwiper(swiperRef.current);
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(
        new Date().toISOString().split("T")[0]
    );
    const [formKucing, setFormKucing] = useState([]);
    const [total, setTotal] = useState(0);
    const [selectJenisPengiriman, setSelectJenisPengiriman] = useState(null);

    const optionMetodePembayaran = dataMetodePembayaran.map((item) => ({
        value: item.ID_Metode_Pembayaran,
        label: item.Metode_Pembayaran,
    }));

    const optionJenisPengiriman = dataJenisPengiriman.map((item) => ({
        value: item.ID_Jenis_Pengiriman,
        label: item.Jenis_Pengiriman,
    }));

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const detailTransaksi = formKucing.map((item) => ({
            ID_Kucing: item.ID_Kucing,
        }));

        const formData = new FormData(form);
        formData.append("Detail_Transaksi", JSON.stringify(detailTransaksi));

        createTransaksi(formData, (status, res) => {
            if (status) {
                updateDataTransaksi();
                Swal.fire("Success", res.message, "success");
                form.reset();
                setFormKucing([]);
                setTotal(0);
                closeForm();

                if (swiper) {
                    swiper.slideTo(0);
                }
            } else {
                Swal.fire("Error", res.message, "error");
            }
        });
    };

    return (
        <>
            <form ref={formRef} id="form" action="" onSubmit={handleSubmit}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    allowTouchMove={false}
                    navigation
                    modules={[Navigation]}
                    ref={swiperRef}
                >
                    <SwiperSlide>
                        <FormTambahDataPembeli />
                        <div className="flex justify-end mt-5">
                            <ButtonNext
                                className={
                                    " bg-green-500 text-white px-3 py-2 rounded-lg"
                                }
                            >
                                Next
                            </ButtonNext>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[36rem] w-full overflow-y-scroll">
                            <SelectCat
                                dataKucing={dataKucing}
                                setFormKucing={setFormKucing}
                                formKucing={formKucing}
                                setTotal={setTotal}
                            />
                            <div className="fixed bg-gray-100 w-full bottom-0 p-5 flex justify-between z-50">
                                <ButtonPrev
                                    className={
                                        " border border-red-500 text-red-500 px-3 py-2 rounded-lg"
                                    }
                                >
                                    Back
                                </ButtonPrev>
                                <ButtonNext
                                    className={
                                        " bg-green-500 text-white px-3 py-2 rounded-lg"
                                    }
                                >
                                    Next
                                </ButtonNext>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Metode Pembayaran
                                </label>
                                <select
                                    name="ID_Metode_Pembayaran"
                                    id=""
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                >
                                    {optionMetodePembayaran.map((item) => (
                                        <option
                                            key={item.value}
                                            value={item.value}
                                        >
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
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
                                    placeholder="Total Biaya"
                                    name="Biaya"
                                    value={total}
                                    required
                                    readOnly
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="nomorResi"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Nomor Resi
                                </label>
                                {selectJenisPengiriman !== "JP1" ? (
                                    <input
                                        type="text"
                                        id="nomorResi"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Nomor Resi"
                                        name="Nomor_Resi"
                                        required
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        id="nomorResi"
                                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Nomor Resi"
                                        name="Nomor_Resi"
                                        disabled
                                    />
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Jenis Pengiriman
                                </label>
                                <select
                                    name="ID_Jenis_Pengiriman"
                                    id=""
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    onChange={(e) =>
                                        setSelectJenisPengiriman(e.target.value)
                                    }
                                >
                                    <option value="">
                                        Pilih Jenis Pengiriman
                                    </option>
                                    {optionJenisPengiriman.map((item) => (
                                        <option
                                            key={item.value}
                                            value={item.value}
                                        >
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                                {/* <Select
                                    options={optionJenisPengiriman}
                                    name="ID_Jenis_Pengiriman"
                                    required
                                /> */}
                            </div>
                            <div className="col-span-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Tanggal Transaksi
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
                                        name="Tanggal_Transaksi"
                                        required
                                        readOnly
                                    />
                                </Datepicker>
                            </div>
                            <div className="col-span-2">
                                <label
                                    htmlFor="pesan"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Pesan
                                </label>
                                <textarea
                                    id="pesan"
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
                                    placeholder="Pesan"
                                    name="Pesan"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="py-3 flex justify-between">
                            <ButtonPrev
                                className={
                                    " border border-red-500 text-red-500 px-3 py-2 rounded-lg"
                                }
                            >
                                Back
                            </ButtonPrev>
                            <button
                                type="submit"
                                className="px-3 py-2 rounded-md bg-green-500 text-white"
                            >
                                Submit
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </form>
        </>
    );
};

FormTambahDataTransaksi.propTypes = {
    dataKucing: PropTypes.array.isRequired,
    dataJenisPengiriman: PropTypes.array.isRequired,
    dataMetodePembayaran: PropTypes.array.isRequired,
    closeForm: PropTypes.func.isRequired,
    updateDataTransaksi: PropTypes.func.isRequired,
};

export default FormTambahDataTransaksi;
