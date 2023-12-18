import PropType from "prop-types";
import FormEditDataKucing from "./Edit";
import { useEffect, useState } from "react";

const DetailKucing = ({ setOpen, data, updateDataKucing }) => {
    const [editData, setEditData] = useState(false);
    const [selectedData, setSelectedData] = useState({
        id: data.ID_Kucing,
        nama: data.Nama_Kucing,
        jenisKelamin: data.Jenis_Kelamin,
        jenisKucing: data.Jenis_Kucing,
        umur: data.Umur,
        status: data.Status,
        biaya: data.Biaya,
        tanggalMasuk: data.Tanggal_Masuk,
        keterangan: data.Keterangan,
        gambar: data.Foto,
    });

    useEffect(() => {
        const date = new Date(data.Tanggal_Masuk);
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        const formattedDate = date.toLocaleDateString("id-ID", options);
        setSelectedData({
            id: data.ID_Kucing,
            nama: data.Nama_Kucing,
            jenisKelamin: data.Jenis_Kelamin,
            jenisKucing: data.Jenis_Kucing,
            umur: data.Umur,
            status: data.Status,
            biaya: data.Biaya,
            tanggalMasuk: formattedDate,
            keterangan: data.Keterangan,
            gambar: data.Foto,
        });
    }, []);

    return (
        <>
            <div
                className={` ${
                    open ? "translate-x-0" : "translate-x-full"
                } grid grid-cols-2 grid-rows-2 w-[80vw] h-full bg-gray-100 absolute top-0 right-0 p-10`}
            >
                {editData ? (
                    <>
                        <FormEditDataKucing
                            dataKucing={data}
                            setEditData={setEditData}
                            setOpen={setOpen}
                            updateDataKucing={updateDataKucing}
                        />
                    </>
                ) : (
                    <>
                        <div>
                            <img
                                src={selectedData.gambar}
                                alt=""
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="px-4">
                            <table className="w-full">
                                <tbody className="w-full">
                                    <tr className="w-full">
                                        <td className="w-1/3">ID Kucing</td>
                                        <td>:</td>
                                        <td>{selectedData.id}</td>
                                    </tr>
                                    <tr>
                                        <td>Nama</td>
                                        <td>:</td>
                                        <td>{selectedData.nama}</td>
                                    </tr>
                                    <tr>
                                        <td>Jenis Kelamin</td>
                                        <td>:</td>
                                        <td>{selectedData.jenisKelamin}</td>
                                    </tr>
                                    <tr>
                                        <td>Jenis Kucing</td>
                                        <td>:</td>
                                        <td>
                                            {
                                                selectedData.jenisKucing
                                                    .Jenis_Kucing
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Umur</td>
                                        <td>:</td>
                                        <td>{selectedData.umur} Bulan</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>:</td>
                                        <td>{selectedData.status}</td>
                                    </tr>
                                    <tr>
                                        <td>Biaya Adopsi</td>
                                        <td>:</td>
                                        <td>
                                            Rp.{" "}
                                            {selectedData.biaya.toLocaleString(
                                                "id-ID",
                                                {
                                                    styles: "currency",
                                                    currency: "IDR",
                                                }
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Tanggal Masuk</td>
                                        <td>:</td>
                                        <td>{selectedData.tanggalMasuk}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-span-2 flex flex-col">
                            <div className="h-full py-4">
                                <h1>Deskripsi</h1>
                                <p>{selectedData.keterangan}</p>
                            </div>
                            <div className="h-fit">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="px-5 py-2 border border-red-500 rounded-md text-red-500"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={() => setEditData(true)}
                                    className="px-5 py-2 bg-green-500 rounded-md text-white float-right"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

DetailKucing.propTypes = {
    setOpen: PropType.func.isRequired,
    data: PropType.object.isRequired,
    updateDataKucing: PropType.func.isRequired,
};

export default DetailKucing;
