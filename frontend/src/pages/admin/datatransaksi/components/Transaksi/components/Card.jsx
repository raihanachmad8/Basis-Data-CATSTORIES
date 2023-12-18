import PropTypes from "prop-types";

const Card = ({ item, setFormKucing, formKucing, setTotal }) => {
    const handleClick = (id, biaya) => {
        setTotal((prev) => prev + biaya);
        setFormKucing([...formKucing, { ID_Kucing: id }]);
    };

    return (
        <>
            <div
                key={item.ID_Kucing}
                className={`bg-white p-3 w-full h-fit grid grid-cols-1 grid-rows-2 rounded-xl`}
            >
                <div className="w-full h-[8rem]">
                    <img
                        src={item.Foto}
                        alt=""
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="w-full h-fit">
                    <h1>{item.Nama_Kucing}</h1>
                    <h1 className="text-xs text-gray-400">
                        {item.Jenis_Kucing.Jenis_Kucing}
                    </h1>
                    <h1 className="mt-3 font-bold">{item.Biaya}</h1>
                    <div className="py-3">
                        <button
                            onClick={() => {
                                handleClick(item.ID_Kucing, item.Biaya);
                            }}
                            type="button"
                            className="px-3 py-2 bg-blue-500 text-white w-full rounded-md"
                        >
                            Tambah
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

Card.propTypes = {
    item: PropTypes.object.isRequired,
    setFormKucing: PropTypes.func.isRequired,
    formKucing: PropTypes.array.isRequired,
    setTotal: PropTypes.func.isRequired,
};

export default Card;
