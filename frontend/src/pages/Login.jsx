const Login = () => {
    return (
        <>
            <section className="w-full h-screen flex justify-center items-center">
                <div className="w-1/3 h-[30rem] rounded-2xl shadow-md bg-gray-100 p-10">
                    <div>
                        <h1 className="text-5xl font-bold text-green-500">
                            Login
                        </h1>
                    </div>
                    <form
                        action=""
                        className="py-5 flex flex-col gap-5 h-full justify-between"
                    >
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor=""
                                    className="text-2xl font-bold"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="h-[3rem] inline-block rounded-xl px-4"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor=""
                                    className="text-2xl font-bold"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="h-[3rem] inline-block rounded-xl px-4"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <button
                                type="submit"
                                className="bg-green-500 w-full py-3 rounded-xl"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Login;
