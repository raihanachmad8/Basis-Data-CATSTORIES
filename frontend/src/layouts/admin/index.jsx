import Sidebar from "../../components/sidebar/index";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";

const Admin = (props) => {
    const { children, title } = props;
    return (
        <>
            <div className="w-full h-full flex">
                <Sidebar />
                <div className="w-full min-h-screen max-h-full F4F7FEF4F7FEF4F7FE">
                    <main className="h-full mx-[12px] flex-none ml-[320px]">
                        <Navbar title={title} />
                        {children}
                        <Footer />
                    </main>
                </div>
            </div>
        </>
    );
};

export default Admin;
