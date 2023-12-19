import { useRef } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/auth";

const Auth = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        };

        login(data, (status, response) => {
            if (status) {
                localStorage.setItem("token", response.data.token);
                window.location.href = "/admin/data-kucing";
            } else {
                console.log(response);
            }
        });
    };

    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
                <div className="w-3/5 h-3/4 flex justify-center items-center bg-white rounded-3xl overflow-hidden">
                    <form
                        action=""
                        onSubmit={handleLogin}
                        className="w-full h-full flex flex-col justify-center items-center gap-y-10"
                    >
                        <div className="flex flex-col justify-center items-center gap-y-5">
                            <h1 className="font-bold text-4xl">Welcome Back</h1>
                            <h1 className="font-bold text-2xl text-gray-400">
                                Continue Login
                            </h1>
                        </div>
                        <div className="flex flex-col w-[70%]">
                            <label
                                htmlFor="username"
                                className="font-bold text-xl"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="Username"
                                name="username"
                                ref={usernameRef}
                                className="p-[1rem] border rounded-lg w-full"
                            />
                        </div>
                        <div className="flex flex-col w-[70%]">
                            <label
                                htmlFor="password"
                                className="font-bold text-xl"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                ref={passwordRef}
                                className="p-[1rem] border rounded-lg w-full"
                            />
                            <div className="p-2 w-full">
                                <Link
                                    to={"/"}
                                    className="text-blue-500 hover:underline float-right"
                                >
                                    Forgot Password
                                </Link>
                            </div>
                        </div>
                        <div className="w-[70%]">
                            <button
                                onClick={handleLogin}
                                className="w-full bg-blue-500 text-center px-3 py-3 text-xl text-white rounded-md hover:bg-blue-900 duration-300"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="w-full h-full">
                        <img
                            src="../../../public/assets/images/cat.svg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Auth;
