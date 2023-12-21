import { Link } from "react-router-dom";

const Sidebar = () => {
    const path = window.location.pathname;

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <div
            className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800  md:!z-50 lg:!z-50 xl:!z-0 `}
        >
            <span className="absolute top-4 right-4 block cursor-pointer xl:hidden"></span>

            <div className={`mx-[56px] mt-[50px] flex items-center`}>
                <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-[#1B254B] ">
                    <img src="../../../public/assets/images/logo.svg" alt="" />
                </div>
            </div>
            <div className="mt-[58px] mb-7 h-px bg-gray-300" />
            {/* Nav item */}

            <ul className="mb-auto pt-1 flex flex-col px-5 gap-y-10">
                <Link
                    to={"/admin/data-kucing"}
                    className={`${
                        path === "/admin/data-kucing" ? "text-[#FAD16F]" : ""
                    }`}
                >
                    <li className="my-[3px] mb-3 flex cursor-pointer items-center px-8">
                        <span className="font-bold text-[#FAD16F]  w-[1.3rem] h-[1.3rem]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Layer_1"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill={`${
                                        path === "/admin/data-kucing"
                                            ? "#FAD16F"
                                            : "gray"
                                    }`}
                                    d="m22.199,10.542c1.145-1.041,1.801-2.524,1.801-4.07V1.285c0-.516-.294-.965-.767-1.172-.473-.207-1.002-.118-1.382.234l-1.163,1.078c-1.373-.595-3.003-.595-4.376,0l-1.163-1.078c-.38-.352-.91-.441-1.382-.234-.473.207-.767.656-.767,1.172v4.972c0,1.169.349,2.27.944,3.188-9.343,3.25-8.944,12.848-8.939,12.919v.453c-1.993-.456-4.005-1.756-4.005-3.817,0-1.708.79-2.981,1.554-4.213.711-1.146,1.446-2.333,1.446-3.787,0-2.43-1.374-4-3.5-4-.276,0-.5.224-.5.5s.224.5.5.5c2.256,0,2.5,2.098,2.5,3,0,1.169-.601,2.139-1.296,3.26-.798,1.288-1.704,2.748-1.704,4.74,0,3.411,3.913,5,6.558,5h16.942c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1.5v-12.286c.067-.056.134-.113.199-.173ZM14,1.285c0-.165.117-.234.167-.256.024-.011.066-.025.117-.025.056,0,.121.017.185.076l1.411,1.308c.154.144.381.173.568.078,1.276-.656,2.827-.656,4.104,0,.187.095.414.065.568-.078l1.411-1.308c.12-.113.251-.074.302-.051.05.022.167.091.167.256v5.187c0,1.265-.537,2.479-1.474,3.331-.949.864-2.182,1.271-3.47,1.148-2.274-.217-4.056-2.279-4.056-4.694V1.285Zm7,21.715h-3v-1.5c0-2.775-2.724-5.5-5.5-5.5-.276,0-.5.224-.5.5s.224.5.5.5c2.229,0,4.5,2.271,4.5,4.5v1.5H6.558c-.18,0-.365-.008-.553-.025v-.638c-.005-.092-.382-9.163,8.597-12.058.878.924,2.052,1.542,3.36,1.667.183.018.365.026.546.026.88,0,1.727-.205,2.493-.598v11.626Zm-1.5-17.029c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Zm-4,0c0-.552.448-1,1-1s1,.448,1,1-.448,1-1,1-1-.448-1-1Z"
                                />
                            </svg>
                        </span>
                        <p
                            className={`leading-1 ml-4 flex font-bold ${
                                path === "/admin/data-kucing"
                                    ? "text-[#FAD16F] text-[18px]"
                                    : "text-gray-500"
                            }`}
                        >
                            Data Kucing
                        </p>
                    </li>
                </Link>
                <Link
                    to={"/admin/data-transaksi"}
                    className={`${
                        path === "/admin/data-transaksi" ? "text-[#FAD16F]" : ""
                    }`}
                >
                    <li className="my-[3px] mb-3 flex cursor-pointer items-center px-8">
                        <span className="font-bold text-[#FAD16F]  w-[1.3rem] h-[1.3rem]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Outline"
                                viewBox="0 0 24 24"
                                width="25"
                                height="25"
                            >
                                <path
                                    fill={`${
                                        path === "/admin/data-transaksi"
                                            ? "#FAD16F"
                                            : "gray"
                                    }`}
                                    d="M16,0H8A5.006,5.006,0,0,0,3,5V23a1,1,0,0,0,1.564.825L6.67,22.386l2.106,1.439a1,1,0,0,0,1.13,0l2.1-1.439,2.1,1.439a1,1,0,0,0,1.131,0l2.1-1.438,2.1,1.437A1,1,0,0,0,21,23V5A5.006,5.006,0,0,0,16,0Zm3,21.1-1.1-.752a1,1,0,0,0-1.132,0l-2.1,1.439-2.1-1.439a1,1,0,0,0-1.131,0l-2.1,1.439-2.1-1.439a1,1,0,0,0-1.129,0L5,21.1V5A3,3,0,0,1,8,2h8a3,3,0,0,1,3,3Z"
                                />
                                <rect
                                    x="7"
                                    y="8"
                                    width="10"
                                    height="2"
                                    rx="1"
                                    fill={`${
                                        path === "/admin/data-transaksi"
                                            ? "#FAD16F"
                                            : "gray"
                                    }`}
                                />
                                <rect
                                    x="7"
                                    y="12"
                                    width="8"
                                    height="2"
                                    rx="1"
                                    fill={`${
                                        path === "/admin/data-transaksi"
                                            ? "#FAD16F"
                                            : "gray"
                                    }`}
                                />
                            </svg>
                        </span>
                        <p
                            className={`leading-1 ml-4 flex font-bold ${
                                path === "/admin/data-transaksi"
                                    ? "text-[#FAD16F] text-[18px]"
                                    : "text-gray-500"
                            }`}
                        >
                            Data Transaksi
                        </p>
                    </li>
                </Link>
                <Link onClick={handleLogout}>
                    <li className="my-[3px] mb-3 flex cursor-pointer items-center px-8">
                        <span className="font-bold text-[#FAD16F]  w-[1.3rem] h-[1.3rem]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Layer_1"
                                data-name="Layer 1"
                                viewBox="0 0 24 24"
                                width="25"
                                height="25"
                            >
                                <path
                                    fill="gray"
                                    d="M11.476,15a1,1,0,0,0-1,1v3a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H7.476a3,3,0,0,1,3,3V8a1,1,0,0,0,2,0V5a5.006,5.006,0,0,0-5-5H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H7.476a5.006,5.006,0,0,0,5-5V16A1,1,0,0,0,11.476,15Z"
                                />
                                <path
                                    fill="gray"
                                    d="M22.867,9.879,18.281,5.293a1,1,0,1,0-1.414,1.414l4.262,4.263L6,11a1,1,0,0,0,0,2H6l15.188-.031-4.323,4.324a1,1,0,1,0,1.414,1.414l4.586-4.586A3,3,0,0,0,22.867,9.879Z"
                                />
                            </svg>
                        </span>
                        <p
                            className={`leading-1 ml-4 flex font-bold text-gray-500 `}
                        >
                            Logout
                        </p>
                    </li>
                </Link>
            </ul>

            {/* Free Horizon Card */}
            <div className="flex justify-center"></div>

            {/* Nav item end */}
        </div>
    );
};

export default Sidebar;
