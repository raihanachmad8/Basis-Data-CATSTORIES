import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="w-full fixed top-0 p-5 z-50">
                <div className="w-full backdrop-blur-2xl bg-transparent flex justify-center items-center p-5 px-10 rounded-3xl ">
                    <div className="w-[10rem] h-full">
                        <img
                            src="../../../public/assets/images/logo.svg"
                            alt=""
                        />
                    </div>
                    <div className="w-full flex justify-center items-center gap-x-11 text-2xl text-black">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/pets"}>Pets</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
