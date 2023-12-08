import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
    return (
        <>
            <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
                <div className="ml-[6px]">
                    <div className="h-6 w-[224px] pt-1">
                        <a
                            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                            href=" "
                        >
                            Pages
                            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
                                {" "}
                                /{" "}
                            </span>
                        </a>
                        <Link
                            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
                            to="#"
                        >
                            {title}
                        </Link>
                    </div>
                    <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
                        <Link
                            to="#"
                            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
                        >
                            {title}
                        </Link>
                    </p>
                </div>

                <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[200px] xl:gap-2">
                    <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
                        <p className="pl-3 pr-2 text-xl">
                            <img
                                src="../../../public/assets/images/search.svg"
                                alt=""
                                className="w-[18px] h-[18px]"
                            />
                        </p>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
                        />
                    </div>
                    <span className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden">
                        <p className="pl-3 pr-2 text-xl">
                            <img
                                src="../../../public/assets/images/search.svg"
                                alt=""
                                className="w-[18px] h-[18px]"
                            />
                        </p>
                    </span>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
