import Card from "../card";
import newCat from "./Data/newCat.json";

const NewCatSection = () => {
    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <div className="w-full text-center flex flex-col justify-center items-center">
                    <h1 className="font-bold text-5xl">Our New Cute Cats</h1>
                    <p className="text-xl">
                        You can view or adopt our new cute cats
                    </p>
                </div>
                <div className="w-full h-full flex justify-center items-center gap-x-10">
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

export default NewCatSection;
