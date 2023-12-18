import { Link } from "react-router-dom";

const Card = ({ name, price, image, type }) => {
    return (
        <div className="w-[20rem] h-[30rem] bg-white  overflow-hidden flex flex-col">
            <div className="flex-1 w-full h-[60%]">
                <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover rounded-3xl"
                />
            </div>
            <div className="flex-1 w-full h-full p-2 flex flex-col gap-y-10">
                <div>
                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl">{name}</h1>
                        <h1 className="font-bold text-xl">
                            $
                            {price.toLocaleString("id-ID", {
                                styles: "currency",
                                currency: "USD",
                            })}
                        </h1>
                    </div>
                    <h1 className="text-sm text-gray-500">{type}</h1>
                </div>
                <div>
                    <button className="w-full bg-blue-500 text-center px-3 py-3 text-xl text-white rounded-md hover:bg-blue-900 duration-300">
                        <Link to={"/detail-kucing"}>Adopt</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
