import { ShoppingCart } from "react-basicons";

const Header = () => {
    return (
        <>
            <header className="w-full sticky top-0 p-3 z-50">
                <div className="bg-white flex justify-between backdrop-blur-2xl bg-opacity-20 py-6 px-10 items-center rounded-3xl">
                    <div>
                        <h1 className="text-3xl">Logo</h1>
                    </div>
                    <nav className="flex gap-10">
                        <a href="">Home</a>
                        <a href="">Products</a>
                        <a href="">Outlet</a>
                        <a href="">Contact</a>
                    </nav>
                    <div className="flex gap-5 justify-center items-center">
                        <ShoppingCart />
                        <button className="px-4 py-2 bg-orange-400 rounded-lg text-xl text-white">
                            Login
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
