import { useEffect, useState } from "react";
import Card from "./components/Card";
import PropTypes from "prop-types";

const SelectCat = ({ dataKucing, setFormKucing, formKucing, setTotal }) => {
    const [dataKucing_filtered, setDataKucing_filtered] = useState(dataKucing);

    useEffect(() => {
        setDataKucing_filtered(dataKucing);
    }, [dataKucing]);

    const handleClick = (id) => {
        if (id) {
            setDataKucing_filtered(
                dataKucing_filtered.filter((item) => item.ID_Kucing !== id)
            );
        } else {
            setDataKucing_filtered(dataKucing);
        }
    };

    return (
        <div className="grid grid-cols-2 gap-5 overflow-y-scroll pb-24">
            {dataKucing_filtered.map((item, index) => (
                <Card
                    item={item}
                    key={index}
                    setFormKucing={setFormKucing}
                    formKucing={formKucing}
                    setTotal={setTotal}
                    click={handleClick}
                />
            ))}
        </div>
    );
};

SelectCat.propTypes = {
    dataKucing: PropTypes.array.isRequired,
    setFormKucing: PropTypes.func.isRequired,
    formKucing: PropTypes.array.isRequired,
    setTotal: PropTypes.func.isRequired,
};

export default SelectCat;
