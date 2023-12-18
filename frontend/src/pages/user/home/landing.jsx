import OurCatsSection from "../../../components/cats";
import FinalSection from "../../../components/final";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import Hero from "../../../components/hero";
import Location from "../../../components/location";
import NewCatSection from "../../../components/newcat";

const Home = () => {
    return (
        <>
            <main>
                <Header></Header>
                <Hero />
                <NewCatSection />
                <OurCatsSection />
                <Location />
                <FinalSection />
                <Footer />
            </main>
        </>
    );
};

export default Home;
