import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="w-[20%] h-screen bg-white flex justify-center items-center shadow-xl">
                <ul className="flex flex-col gap-7">
                    <li className="text-3xl font-semibold rounded-xl">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="text-3xl font-semibold">
                        <Link to={"/inventaris"}>Inventaris</Link>
                    </li>
                    <li className="text-3xl font-semibold">
                        <Link to={"/transaksi"}>Transaksi</Link>
                    </li>
                    <li className="text-3xl font-semibold">
                        <Link to={"/pemasok"}>Pemasok</Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
