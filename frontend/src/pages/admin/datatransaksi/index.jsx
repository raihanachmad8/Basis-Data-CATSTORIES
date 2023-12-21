import { useEffect, useState } from "react";
import Admin from "../../../layouts/admin";
import TableDataTransaksi from "./components/Transaksi/Table";
import TabelDataPembeli from "./components/Pembeli/Table";
import TabelJenisPengiriman from "./components/JenisPengiriman/Table";
import TabelMetodePembayaran from "./components/MetodePembayaran/Table";
import FormTambahDataPembeli from "./components/Pembeli/Form";
import FormTambahDataJenisPengiriman from "./components/JenisPengiriman/Form";
import FormTambahDataMetodePembayaran from "./components/MetodePembayaran/Form";
import DetailPembeli from "./components/Pembeli/Detail";
import { getAllTransaksi } from "../../../services/transaksi";
import FormTambahDataTransaksi from "./components/Transaksi/Form";
import { getKucingOption } from "../../../services/kucing";
import { getAllJenisPengiriman } from "../../../services/jenisPengiriman";
import { getAllMetodePembayaran } from "../../../services/metodePembayaran";
import { getAllPembeli } from "../../../services/pembeli";
import FormEditDataPembeli from "./components/Pembeli/Edit";
import FormEditDataJenisPengiriman from "./components/JenisPengiriman/Edit";
import FormEditDataMetodePembayaran from "./components/MetodePembayaran/Edit";
import DetailTransaksi from "./components/Transaksi/Detail";

const DataTransaksi = () => {
    const [menu, setMenu] = useState("Tabel Data Transaksi");
    const [tambahData, setTambahData] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);
    const [editMenu, setEditMenu] = useState(false);
    const [idDetail, setIdDetail] = useState("");
    const [dataEdit, setDataEdit] = useState({});
    const [dataDetail, setDataDetail] = useState({});
    const [dataPembeli, setDataPembeli] = useState([]);
    const [dataTransaksi, setDataTransaksi] = useState([]);
    const [dataKucing, setDataKucing] = useState([]);
    const [jenisPengiriman, setJenisPengiriman] = useState([]);
    const [metodePembayaran, setMetodePembayaran] = useState([]);
    const [searchPembeli, setSearchPembeli] = useState("");
    const [searchTransaksi, setSearchTransaksi] = useState("");
    const [searchJenisPengiriman, setSearchJenisPengiriman] = useState("");
    const [searchMetodePembayaran, setSearchMetodePembayaran] = useState("");
    const [sort, setSort] = useState("");
    const [order, setOrder] = useState("asc");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            window.location.href = "/admin/";
        }
    }, []);

    useEffect(() => {
        getAllTransaksi(searchTransaksi, sort, order, (data) => {
            setDataTransaksi(data);
        });
    }, [searchTransaksi, sort, order]);

    useEffect(() => {
        getKucingOption((data) => {
            setDataKucing(data);
        });
    }, []);

    useEffect(() => {
        getAllJenisPengiriman(searchJenisPengiriman, (data) => {
            setJenisPengiriman(data);
        });
    }, [searchJenisPengiriman]);

    useEffect(() => {
        getAllMetodePembayaran(searchMetodePembayaran, (data) => {
            setMetodePembayaran(data);
        });
    }, [searchMetodePembayaran]);

    useEffect(() => {
        getAllPembeli(searchPembeli, sort, order, (data) => {
            setDataPembeli(data);
        });
    }, [searchPembeli, sort, order]);

    const updatePembeli = () => {
        getAllPembeli(searchPembeli, sort, order, (data) => {
            setDataPembeli(data);
        });
    };

    const updateJenisPengiriman = () => {
        getAllJenisPengiriman(searchJenisPengiriman, (data) => {
            setJenisPengiriman(data);
        });
    };

    const updatePembayaran = () => {
        getAllMetodePembayaran(searchMetodePembayaran, (data) => {
            setMetodePembayaran(data);
        });
    };

    const handleTambahData = () => {
        setTambahData(true);
    };

    const handleChangeMenu = (menu) => {
        setMenu(menu);
    };

    const handleCloseForm = () => {
        setTambahData(false);
    };

    const handleCloseDetail = () => {
        setOpenDetail(false);
    };

    const handleCloseEdit = () => {
        setEditMenu(false);
    };

    const updateDataTransaksi = () => {
        getAllTransaksi(searchTransaksi, sort, order, (data) => {
            setDataTransaksi(data);
        });
    };

    return (
        <>
            <Admin title="Data Transaksi">
                <div className="w-full min-h-screen py-10">
                    <div className="w-full h-full bg-white rounded-3xl p-5 flex flex-col gap-y-5">
                        <div className="w-full">
                            <header>
                                <div className="flex justify-between">
                                    <h1 className="text-xl font-bold text-slate-800">
                                        {menu}
                                    </h1>
                                    <div className="flex justify-center items-center gap-x-7">
                                        {menu !== "Tabel Data Pembeli" && (
                                            <div className="order-3 px-3 py-2 bg-green-500 rounded-md text-center ">
                                                <button
                                                    onClick={handleTambahData}
                                                    className="text-base text-white"
                                                >
                                                    Tambah Data
                                                </button>
                                            </div>
                                        )}
                                        <div className="relative mx-auto text-gray-600 w-[10rem]">
                                            {menu === "Tabel Data Pembeli" && (
                                                <>
                                                    <input
                                                        className="border-2 border-gray-300 bg-white h-10 w-full px-3 pr-7 rounded-lg text-sm focus:outline-none flex justify-center items-center overflow-hidden"
                                                        type="search"
                                                        name="search"
                                                        placeholder="Search"
                                                        onChange={(e) =>
                                                            setSearchPembeli(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="absolute right-0 top-0 h-full w-[2rem] flex justify-center items-center"
                                                    >
                                                        <svg
                                                            className="text-gray-600 h-4 w-4 fill-current"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            version="1.1"
                                                            id="Capa_1"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 56.966 56.966"
                                                            width="512px"
                                                            height="512px"
                                                        >
                                                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}
                                            {menu ===
                                                "Tabel Data Transaksi" && (
                                                <>
                                                    <input
                                                        className="border-2 border-gray-300 bg-white h-10 w-full px-3 pr-7 rounded-lg text-sm focus:outline-none flex justify-center items-center overflow-hidden"
                                                        type="search"
                                                        name="search"
                                                        placeholder="Search"
                                                        onChange={(e) =>
                                                            setSearchTransaksi(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="absolute right-0 top-0 h-full w-[2rem] flex justify-center items-center"
                                                    >
                                                        <svg
                                                            className="text-gray-600 h-4 w-4 fill-current"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            version="1.1"
                                                            id="Capa_1"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 56.966 56.966"
                                                            width="512px"
                                                            height="512px"
                                                        >
                                                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}
                                            {menu ===
                                                "Tabel Jenis Pengiriman" && (
                                                <>
                                                    <input
                                                        className="border-2 border-gray-300 bg-white h-10 w-full px-3 pr-7 rounded-lg text-sm focus:outline-none flex justify-center items-center overflow-hidden"
                                                        type="search"
                                                        name="search"
                                                        placeholder="Search"
                                                        onChange={(e) =>
                                                            setSearchJenisPengiriman(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="absolute right-0 top-0 h-full w-[2rem] flex justify-center items-center"
                                                    >
                                                        <svg
                                                            className="text-gray-600 h-4 w-4 fill-current"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            version="1.1"
                                                            id="Capa_1"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 56.966 56.966"
                                                            width="512px"
                                                            height="512px"
                                                        >
                                                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}
                                            {menu ===
                                                "Tabel Metode Pembayaran" && (
                                                <>
                                                    <input
                                                        className="border-2 border-gray-300 bg-white h-10 w-full px-3 pr-7 rounded-lg text-sm focus:outline-none flex justify-center items-center overflow-hidden"
                                                        type="search"
                                                        name="search"
                                                        placeholder="Search"
                                                        onChange={(e) =>
                                                            setSearchMetodePembayaran(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="absolute right-0 top-0 h-full w-[2rem] flex justify-center items-center"
                                                    >
                                                        <svg
                                                            className="text-gray-600 h-4 w-4 fill-current"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            version="1.1"
                                                            id="Capa_1"
                                                            x="0px"
                                                            y="0px"
                                                            viewBox="0 0 56.966 56.966"
                                                            width="512px"
                                                            height="512px"
                                                        >
                                                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                                        </svg>
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <nav className="flex gap-x-5">
                                    <button
                                        onClick={() => {
                                            handleChangeMenu(
                                                "Tabel Data Transaksi"
                                            );
                                            setSearchJenisPengiriman("");
                                            setSearchMetodePembayaran("");
                                            setSearchTransaksi("");
                                            setSearchPembeli("");
                                        }}
                                        className={`text-xs border-b border-black border-opacity-0 py-4 duration-500 hover:border-opacity-50 ${
                                            menu === "Tabel Data Transaksi"
                                                ? "border-opacity-100"
                                                : ""
                                        }`}
                                    >
                                        Tabel Data Transaksi
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleChangeMenu(
                                                "Tabel Data Pembeli"
                                            );
                                            setSearchJenisPengiriman("");
                                            setSearchMetodePembayaran("");
                                            setSearchTransaksi("");
                                            setSearchPembeli("");
                                        }}
                                        className={`text-xs border-b border-black border-opacity-0 py-4 duration-500 hover:border-opacity-50 ${
                                            menu === "Tabel Data Pembeli"
                                                ? "border-opacity-100"
                                                : ""
                                        }`}
                                    >
                                        Tabel Data Pembeli
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleChangeMenu(
                                                "Tabel Jenis Pengiriman"
                                            );
                                            setSearchJenisPengiriman("");
                                            setSearchMetodePembayaran("");
                                            setSearchTransaksi("");
                                            setSearchPembeli("");
                                        }}
                                        className={`text-xs border-b border-black border-opacity-0 py-4 duration-500 hover:border-opacity-50 ${
                                            menu === "Tabel Jenis Pengiriman"
                                                ? "border-opacity-100"
                                                : ""
                                        }`}
                                    >
                                        Tabel Jenis Pengiriman
                                    </button>
                                    <button
                                        onClick={() => {
                                            handleChangeMenu(
                                                "Tabel Metode Pembayaran"
                                            );
                                            setSearchJenisPengiriman("");
                                            setSearchMetodePembayaran("");
                                            setSearchTransaksi("");
                                            setSearchPembeli("");
                                        }}
                                        className={`text-xs border-b border-black border-opacity-0 py-4 duration-500 hover:border-opacity-50 ${
                                            menu === "Tabel Metode Pembayaran"
                                                ? "border-opacity-100"
                                                : ""
                                        }`}
                                    >
                                        Tabel Metode Pembayaran
                                    </button>
                                </nav>
                            </header>
                        </div>
                        <div className="w-full">
                            {menu === "Tabel Data Transaksi" && (
                                <TableDataTransaksi
                                    data={dataTransaksi}
                                    setOpenDetail={setOpenDetail}
                                    setIdDetail={setIdDetail}
                                    setSort={setSort}
                                    setOrder={setOrder}
                                    sort={sort}
                                    order={order}
                                />
                            )}
                            {menu === "Tabel Data Pembeli" && (
                                <TabelDataPembeli
                                    data={dataPembeli}
                                    setOpenDetail={setOpenDetail}
                                    setDataDetail={setDataDetail}
                                    setSort={setSort}
                                    setOrder={setOrder}
                                    sort={sort}
                                    order={order}
                                    updatePembeli={updatePembeli}
                                />
                            )}
                            {menu === "Tabel Jenis Pengiriman" && (
                                <TabelJenisPengiriman
                                    data={jenisPengiriman}
                                    setEditMenu={setEditMenu}
                                    setDataEdit={setDataEdit}
                                    updateJenisPengiriman={
                                        updateJenisPengiriman
                                    }
                                />
                            )}
                            {menu === "Tabel Metode Pembayaran" && (
                                <TabelMetodePembayaran
                                    data={metodePembayaran}
                                    setEditMenu={setEditMenu}
                                    setDataEdit={setDataEdit}
                                    updatePembayaran={updatePembayaran}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </Admin>
            <div
                className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-50 overflow-y-scroll ${
                    tambahData ? "translate-x-0" : "translate-x-full"
                } duration-500`}
            >
                <div
                    className={`w-[30rem] h-full bg-gray-100 p-5 overflow-y-scroll flex flex-col gap-y-5 fixed top-0 right-0 z-50`}
                >
                    <div className="flex justify-between">
                        <h1 className="font-bold text-lg ">
                            Tambah {menu.substring(5)}
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
                    {menu === "Tabel Data Transaksi" && (
                        <FormTambahDataTransaksi
                            dataTransaksi={dataTransaksi}
                            dataKucing={dataKucing}
                            dataMetodePembayaran={metodePembayaran}
                            dataJenisPengiriman={jenisPengiriman}
                            updateDataTransaksi={updateDataTransaksi}
                            closeForm={handleCloseForm}
                        />
                    )}
                    {menu === "Tabel Data Pembeli" && <FormTambahDataPembeli />}
                    {menu === "Tabel Jenis Pengiriman" && (
                        <FormTambahDataJenisPengiriman
                            updateJenisPengiriman={updateJenisPengiriman}
                        />
                    )}
                    {menu === "Tabel Metode Pembayaran" && (
                        <FormTambahDataMetodePembayaran
                            updatePembayaran={updatePembayaran}
                            closeForm={handleCloseForm}
                        />
                    )}
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-50 duration-500 ${
                    openDetail ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div
                    className={`w-[80vw] h-full bg-gray-100 p-5 overflow-y-scroll flex flex-col gap-y-5 fixed top-0 right-0 z-50 `}
                >
                    <div className="flex justify-between">
                        <h1 className="font-bold text-lg ">
                            Detail {menu.substring(10)}
                        </h1>
                        <button onClick={handleCloseDetail}>
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
                    {menu === "Tabel Data Transaksi" && (
                        <DetailTransaksi id={idDetail} />
                    )}
                    {menu === "Tabel Data Pembeli" && (
                        <DetailPembeli
                            data={dataDetail}
                            updatePembeli={updatePembeli}
                            setOpenDetail={setOpenDetail}
                        />
                    )}
                </div>
            </div>
            <div
                className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-50 overflow-y-scroll ${
                    editMenu ? "translate-x-0" : "translate-x-full"
                } duration-500`}
            >
                <div
                    className={`w-[30rem] h-full bg-gray-100 p-5 overflow-y-scroll flex flex-col gap-y-5 fixed top-0 right-0 z-50`}
                >
                    <div className="flex justify-between">
                        <h1 className="font-bold text-lg ">
                            Edit {menu.substring(5)}
                        </h1>
                        <button onClick={handleCloseEdit}>
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
                    {menu === "Tabel Data Pembeli" && <FormEditDataPembeli />}
                    {menu === "Tabel Jenis Pengiriman" && (
                        <FormEditDataJenisPengiriman
                            data={dataEdit}
                            updatePengiriman={updateJenisPengiriman}
                            closeForm={handleCloseEdit}
                        />
                    )}
                    {menu === "Tabel Metode Pembayaran" && (
                        <FormEditDataMetodePembayaran
                            data={dataEdit}
                            closeForm={handleCloseEdit}
                            updatePembayaran={updatePembayaran}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default DataTransaksi;
