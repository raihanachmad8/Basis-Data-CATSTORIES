import Admin from "../../../layouts/admin";

const Dashboard = () => {
    return (
        <Admin title="Dashboard">
            <div className="w-full grid  pt-10 gap-x-5 grid-cols-4 gap-y-5 2xl:grid-cols-5">
                <div className="bg-white w-[15rem] h-[7rem] rounded-3xl flex items-center pl-5 ">
                    <div className="w-[3rem] h-[3rem] bg-gray-500 rounded-full p-3">
                        <img
                            src="../../../../public/assets/images/dollar.svg"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className="p-3">
                        <h1 className="font-bold text-gray-400">Pendapatan</h1>
                        <p className="font-bold text-xl">$500</p>
                    </div>
                </div>
                <div className="bg-white w-[15rem] h-[7rem] rounded-3xl flex items-center pl-5">
                    <div className="w-[3rem] h-[3rem] bg-gray-500 rounded-full p-3">
                        <img
                            src="../../../../public/assets/images/dollar.svg"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className="p-3">
                        <h1 className="font-bold text-gray-400">Pengeluaran</h1>
                        <p className="font-bold text-xl">$500</p>
                    </div>
                </div>
                <div className="bg-white w-[15rem] h-[7rem] rounded-3xl flex items-center pl-5">
                    <div className="w-[3rem] h-[3rem] bg-gray-500 rounded-full p-3">
                        <img
                            src="../../../../public/assets/images/dollar.svg"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className="p-3">
                        <h1 className="font-bold text-gray-400">
                            Kucing Tersedia
                        </h1>
                        <p className="font-bold text-xl">$500</p>
                    </div>
                </div>
                <div className="bg-white w-[15rem] h-[7rem] rounded-3xl flex items-center pl-5">
                    <div className="w-[3rem] h-[3rem] bg-gray-500 rounded-full p-3">
                        <img
                            src="../../../../public/assets/images/dollar.svg"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className="p-3">
                        <h1 className="font-bold text-gray-400">
                            Kucing Terjual
                        </h1>
                        <p className="font-bold text-xl">$500</p>
                    </div>
                </div>
                <div className="bg-white w-[15rem] h-[7rem] rounded-3xl flex items-center pl-5">
                    <div className="w-[3rem] h-[3rem] bg-gray-500 rounded-full p-3">
                        <img
                            src="../../../../public/assets/images/dollar.svg"
                            alt=""
                            className="w-full h-full"
                        />
                    </div>
                    <div className="p-3">
                        <h1 className="font-bold text-gray-400">Keuntungan</h1>
                        <p className="font-bold text-xl">$500</p>
                    </div>
                </div>
            </div>
        </Admin>
    );
};

export default Dashboard;
