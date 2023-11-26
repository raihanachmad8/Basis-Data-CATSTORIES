import { ShoppingCart } from "react-basicons";

const Header = () => {
    return (
        <>
            <header className="w-full sticky top-0 p-3 z-50 bg-white shadow-[9px_2px_10px_0px_rgba(0,0,0,0.2)]">
                <div className="bg-white flex justify-between backdrop-blur-2xl bg-opacity-20 py-6 px-10 items-center rounded-3xl">
                    <div>
                        <h1 className="text-3xl">Admin</h1>
                    </div>
                    <div className="flex gap-5 justify-center items-center">
                        <button className="px-4 py-2 bg-orange-400 rounded-lg text-xl text-white">
                            Logout
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
