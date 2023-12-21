import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="w-full bg-[#FAD16F] text-center text-white py-3 z-50 relative">
                <h1>Copyright © 2023 || CATSTORIES</h1>
                <div className="flex justify-center items-center gap-x-1">
                    <p>Powered By:</p>
                    <Link to={"https://vitejs.dev"} className="font-semibold">
                        ReactJS,
                    </Link>
                    <Link
                        to={"https://tailwindcss.com"}
                        className="font-semibold"
                    >
                        TailwindCSS,
                    </Link>
                    <Link
                        to={"https://expressjs.com"}
                        className="font-semibold"
                    >
                        ExpressJS
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Footer;
