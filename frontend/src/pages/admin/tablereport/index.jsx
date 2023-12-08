import Admin from "../../../layouts/admin";

const TableReports = () => {
    return (
        <>
            <Admin title="Tabel Penjualan">
                <div className="w-full min-h-screen py-10 ">
                    <div className="w-full h-full bg-white rounded-3xl p-5 flex flex-col gap-y-5">
                        <div className="w-full">
                            <header className="flex justify-between">
                                <h1 className="text-xl font-bold text-slate-800">
                                    Tabel Penjualan Perbulan
                                </h1>
                                <div className="w-[2rem] h-[2rem] bg-gray-100 rounded-md text-center">
                                    <button className="text-xl font-bold">
                                        ...
                                    </button>
                                </div>
                            </header>
                        </div>
                        <div className="w-full">
                            <table className="w-full text-center">
                                <thead>
                                    <tr>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Tahun
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Januari
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Februari
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Maret
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            April
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Mei
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Juni
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Juli
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Agustus
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            September
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Oktober
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            November
                                        </th>
                                        <th className="text-gray-600 text-xs border-b border-gray-200 text-uppercase ">
                                            Desember
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-5">2021</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                    </tr>
                                    <tr>
                                        <td className="py-5">2022</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                    </tr>
                                    <tr>
                                        <td className="py-5">2023</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                    </tr>
                                    <tr>
                                        <td className="py-5">2024</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                        <td className="py-5">...</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Admin>
        </>
    );
};

export default TableReports;
