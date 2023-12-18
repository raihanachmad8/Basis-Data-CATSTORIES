import Admin from "../../../layouts/admin";
import { useEffect, useRef, useState } from "react";
import { getAllJenisKucing } from "../../../services/jenisKucing";
import TableDataKucing from "./components/Kucing/Table";
import TableDataJenisKucing from "./components/JenisKucing/Table";
import TableJumlahKucing from "./components/JumlahKucing/Table";
import FormTambahDataKucing from "./components/Kucing/Form";
import FormTambahDataJenisKucing from "./components/JenisKucing/Form";
import DetailKucing from "./components/Kucing/Detail";
import { getAllKucing } from "../../../services/kucing";
import FormEditJenisKucing from "./components/JenisKucing/Edit";

const DataKucing = () => {
    const [tambahData, setTambahData] = useState(false);
    const [dataKucing, setDataKucing] = useState([]);
    const [dataJenisKucing, setDataJenisKucing] = useState([]);
    const [dataEditJenisKucing, setDataEditJenisKucing] = useState({});
    const [openDetail, setOpenDetail] = useState(false);
    const [menu, setMenu] = useState("Tabel Data Kucing");
    const [detailKucing, setDetailKucing] = useState({});
    const [editMenu, setEditMenu] = useState(false);
    const ref = useRef(null);
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
            window.location.href = "/admin/";
        }
    }, []);

    const handleChangeMenu = (menu) => {
        setMenu(menu);
    };

    const handleTambahData = () => {
        setTambahData(!tambahData);
    };

    const handleCloseForm = () => {
        if (tambahData) {
            setTambahData(false);
        } else if (editMenu) {
            setEditMenu(false);
        }
    };

    useEffect(() => {
        getAllJenisKucing((data) => {
            setDataJenisKucing(data);
        });
    }, []);

    useEffect(() => {
        getAllKucing(ref, search, (data) => {
            setDataKucing(data);
        });
    },[search]);

    const updateDataKucing = () => {
        getAllKucing(ref, (data) => {
            setDataKucing(data);
        });
    };

    const updateDataJenisKucing = () => {
        getAllJenisKucing((data) => {
            setDataJenisKucing(data);
        });
    };

    return (
        <>
            <div
                ref={ref}
                className="w-full flex justify-center items-center h-screen absolute top-0 left-0 backdrop-blur-sm bg-transparent z-50"
            >
                <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-2 border-t-blue-600" />
            </div>
            <Admin title="Data Kucing">
                <div className="w-full min-h-screen py-10">
                    <div className="w-full h-full bg-white rounded-3xl p-5 flex flex-col gap-y-5">
                        <div className="w-full">
                            <header>
                                <div className="flex justify-between">
                                    <h1 className="text-xl font-bold text-slate-800">
                                        {menu}
                                    </h1>
                                    <div className="flex justify-center items-center gap-x-7">
                                        {(menu === "Tabel Data Kucing" ||
                                            menu === "Tabel Jenis Kucing") && (
                                            <>
                                                <div className="order-3 px-3 py-2 bg-green-500 rounded-md text-center ">
                                                    <button
                                                        onClick={
                                                            handleTambahData
                                                        }
                                                        className="text-base text-white"
                                                    >
                                                        Tambah Data
                                                    </button>
                                                </div>
                                                <div className="relative mx-auto text-gray-600 w-[10rem]">
                                                    <input
                                                        className="border-2 border-gray-300 bg-white h-10 w-full px-3 pr-7 rounded-lg text-sm focus:outline-none flex justify-center items-center overflow-hidden"
                                                        type="search"
                                                        name="search"
                                                        placeholder="Search"
                                                        onChange={(e) =>
                                                            setSearch(e.target.value)
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
                                                </div>
                                            </>
                                        )}
                                        {menu === "Tabel Data Kucing" && (
                                            <div className="inline-block relative w-[7rem]">
                                                <select
                                                    id="filterBy"
                                                    name="filterBy"
                                                    onChange={(e) =>
                                                        setFilter(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="block appearance-none w-full bg-gray-50 border border-gray-300 hover:border-gray-500 p-2.5 pr-8 rounded-lg text-sm leading-tight focus:ring-blue-500 focus:border-blue-500"
                                                >
                                                    <option value="All">
                                                        Filter By
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
                                        )}
                                    </div>
                                </div>
                                <nav className="flex gap-x-5">
                                    <button
                                        onClick={() =>
                                            handleChangeMenu(
                                                "Tabel Data Kucing"
                                            )
                                        }
                                        className={`text-xs border-b border-black border-opacity-0 py-4 duration-500 hover:border-opacity-50 ${
                                            menu === "Tabel Data Kucing"
                                                ? "border-opacity-100"
                                                : ""
                                        }`}
                                    >
                                        Tabel Data Kucing
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleChangeMenu(
                                                "Tabel Jenis Kucing"
                                            )
                                        }
                                        className={`text-xs border-b border-black border-opacity-0 py-4 duration-500 hover:border-opacity-50 ${
                                            menu === "Tabel Jenis Kucing"
                                                ? "border-opacity-100"
                                                : ""
                                        }`}
                                    >
                                        Tabel Jenis Kucing
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleChangeMenu(
                                                "Tabel Jumlah Kucing"
                                            )
                                        }
                                        className={`text-xs border-b border-black border-opacity-0 py-4 duration-500 hover:border-opacity-50 ${
                                            menu === "Tabel Jumlah Kucing"
                                                ? "border-opacity-100"
                                                : ""
                                        }`}
                                    >
                                        Tabel Jumlah
                                    </button>
                                </nav>
                            </header>
                        </div>
                        <div className="w-full">
                            {menu === "Tabel Data Kucing" && (
                                <TableDataKucing
                                    dataSource={dataKucing}
                                    setOpenDetail={setOpenDetail}
                                    setData={setDetailKucing}
                                    filter={filter}
                                />
                            )}
                            {menu === "Tabel Jenis Kucing" && (
                                <TableDataJenisKucing
                                    dataSource={dataJenisKucing}
                                    setEditMenu={setEditMenu}
                                    setDataEditJenisKucing={
                                        setDataEditJenisKucing
                                    }
                                    updateDataJenisKucing={
                                        updateDataJenisKucing
                                    }
                                />
                            )}
                            {menu === "Tabel Jumlah Kucing" && (
                                <TableJumlahKucing />
                            )}
                        </div>
                    </div>
                </div>
            </Admin>
            {(menu === "Tabel Data Kucing" ||
                menu === "Tabel Jenis Kucing") && (
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
                        {menu === "Tabel Data Kucing" && (
                            <FormTambahDataKucing
                                updateDataKucing={updateDataKucing}
                                setTambahData={setTambahData}
                            />
                        )}
                        {menu === "Tabel Jenis Kucing" && (
                            <FormTambahDataJenisKucing
                                updateDataJenisKucing={updateDataJenisKucing}
                                setTambahData={setTambahData}
                            />
                        )}
                    </div>
                </div>
            )}
            {openDetail && (
                <>
                    <div className="fixed top-0 left-0 w-full h-screen z-50 overflow-y-hidden">
                        <DetailKucing
                            data={detailKucing}
                            setOpen={setOpenDetail}
                            updateDataKucing={updateDataKucing}
                        />
                    </div>
                </>
            )}
            {editMenu && (
                <>
                    <div
                        className={`fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-50  ${
                            editMenu ? "translate-x-0" : "translate-x-full"
                        } duration-500`}
                    >
                        <div
                            className={`w-[25rem] h-full bg-gray-100 p-5 overflow-y-scroll flex flex-col gap-y-5 fixed top-0 right-0 z-50`}
                        >
                            <div className="flex justify-between">
                                <h1 className="font-bold text-lg ">
                                    Edit Jenis Kucing
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
                            {menu === "Tabel Jenis Kucing" && (
                                <FormEditJenisKucing
                                    data={dataEditJenisKucing}
                                    updateDataJenisKucing={
                                        updateDataJenisKucing
                                    }
                                    setEditMenu={setEditMenu}
                                />
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default DataKucing;
