const Hero = () => {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center pt-36">
                <div className="w-full h-full">
                    <img src="../../../public/assets/images/hero.svg" alt="" />
                </div>
                <div className="w-full h-full text-center flex flex-col justify-center items-center">
                    <h1 className="font-bold text-5xl">Welcome to Cat Stories</h1>
                    <p className="text-xl px-16 pt-10">
                        Welcome to Cat Adopt, where love and purrs are in
                        abundance! Our feline friends are eagerly waiting for
                        their forever homes. Each cat has a unique personality
                        and story to share. Browse through our adorable lineup
                        and find your perfect feline companion
                    </p>
                </div>
            </div>
        </>
    );
};

export default Hero;
