import Admin from "../../layouts/admin";

const Table = ({ title, header, data, filter, sort, pivot }) => {
    return (
        <>
            <Admin>
                <div className="w-full min-h-screen p-10 ">
                    <div className="w-full h-full bg-white rounded-3xl p-5 flex flex-col gap-y-5">
                        <div className="w-full">
                            <header className="flex justify-between">
                                <h1 className="text-xl font-bold text-slate-800">
                                    Tabel {title}
                                </h1>
                                <div className="flex justify-center items-center gap-x-7">
                                    <div className="order-3 w-[2rem] h-[2rem] bg-gray-100 rounded-md text-center">
                                        <button className="text-xl font-bold">
                                            ...
                                        </button>
                                    </div>
                                    {filter && (
                                        <div className=" bg-gray-100 px-3 py-2 rounded-md text-center">
                                            <button className="text-base">
                                                Filter By
                                            </button>
                                        </div>
                                    )}
                                    {sort && (
                                        <div className="px-3 py-2 bg-gray-100 rounded-md text-center">
                                            <button className="text-base">
                                                Sort By
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </header>
                        </div>
                        <div className="w-full">
                            <table className="w-full text-center">
                                <thead>
                                    <tr>
                                        {header.map((h, i) => (
                                            <th
                                                key={i}
                                                className="text-gray-600 text-xs border-b border-gray-200 text-uppercase "
                                            >
                                                {h.header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {pivot && (
                                        <tr>
                                            {data.map((d, i) => (
                                                <td
                                                    key={i}
                                                    className="text-gray-600 text-sm border-b border-gray-200 text-uppercase"
                                                >
                                                    {d}
                                                </td>
                                            ))}
                                        </tr>
                                    )}
                                    {header.map((h, idx) => {
                                        return (
                                            <tr key={idx}>
                                                {data.map((d, i) => (
                                                    <td
                                                        key={i}
                                                        className="text-gray-600 text-sm border-b border-gray-200 text-uppercase"
                                                    >
                                                        {d[h.accessor]}
                                                    </td>
                                                ))}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Admin>
        </>
    );
};

export default Table;
