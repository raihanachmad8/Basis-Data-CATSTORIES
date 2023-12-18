import Card from "../card";
import newCat from "./Data/newCat.json";

const OurCatsSection = () => {
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-center font-bold text-5xl">
                    <span className="text-[#007FDB]">Meet</span>{" "}
                    <span className="text-[#E16C40]">Our Cat</span>
                </h1>
                <div className="grid grid-cols-4 grid-rows-2 p-20 gap-10">
                    {newCat.map((cat) => (
                        <Card
                            key={cat.id}
                            name={cat.name}
                            price={cat.price}
                            image={cat.image}
                            type={cat.type}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default OurCatsSection;
