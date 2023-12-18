import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getCountJenisKucing } from "../../../../../services/kucing";

const TableJumlahKucing = () => {
    const [jumlahKucing, setJumlahKucing] = useState([]);

    useEffect(() => {
        getCountJenisKucing((data) => {
            setJumlahKucing(data);
        });
    }, []);

    return (
        <>
            <table className="w-full text-center">
                <thead>
                    <tr>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                            No
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                            <div className="flex justify-center">
                                <button className="relative flex justify-center items-center gap-x-2">
                                    Jenis Kucing
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Outline"
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                    >
                                        <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                    </svg> */}
                                </button>
                            </div>
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                            <div className="flex justify-center">
                                <button className="relative flex justify-center items-center gap-x-2">
                                    Total Tersedia
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Outline"
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                    >
                                        <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                    </svg> */}
                                </button>
                            </div>
                        </th>
                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                            <div className="flex justify-center">
                                <button className="relative flex justify-center items-center gap-x-2">
                                    Total Tidak Tersedia
                                    {/* <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Outline"
                                        viewBox="0 0 24 24"
                                        width="18"
                                        height="18"
                                    >
                                        <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
                                    </svg> */}
                                </button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {jumlahKucing.map((data, index) => (
                        <tr key={index}>
                            <td className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                                {index + 1}
                            </td>
                            <td className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                                {data.Jenis_Kucing}
                            </td>
                            <td className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                                {data.Tersedia}
                            </td>
                            <td className="text-gray-600 text-xs border-b border-gray-200 text-uppercase">
                                {data.TidakTersedia}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

TableJumlahKucing.propTypes = {
    dataSource: PropTypes.array.isRequired,
};

export default TableJumlahKucing;
