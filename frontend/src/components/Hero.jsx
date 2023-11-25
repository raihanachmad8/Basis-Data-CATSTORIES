const Hero = () => {
    return (
        <>
            <div className="w-full h-screen relative">
                <div className="absolute z-30 w-3/6 h-full flex flex-col justify-center p-10 gap-8">
                    <h1 className="text-7xl text-white">
                        Tingkatkan Gaya dan Waktu Anda dengan Koleksi Jam Tangan
                        Terbaru Kami
                    </h1>
                    <p className="text-white text-3xl">
                        Gaya yang Elegan, Presisi yang Tak Tertandingi!
                    </p>
                    <div>
                        <button className="border border-orange-500 text-white px-5 py-3 hover:bg-orange-500 duration-500 hover:rounded-lg">Get Started</button>
                    </div>
                </div>
                <div className="w-full h-full absolute">
                    <img
                        src="../../public/assets/images/age-barros-rBPOfVqROzY-unsplash.jpg"
                        alt=""
                        className="w-full h-full object-cover aspect-video"
                    />
                </div>
            </div>
        </>
    );
};

export default Hero;
