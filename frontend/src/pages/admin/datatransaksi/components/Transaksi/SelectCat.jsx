import Card from "./components/Card";
import PropTypes from "prop-types";

const SelectCat = ({ dataKucing, setFormKucing, formKucing, setTotal }) => {
    return (
        <div className="grid grid-cols-2 gap-5 overflow-y-scroll pb-24">
            {dataKucing.map((item, index) => (
                <Card
                    item={item}
                    key={index}
                    setFormKucing={setFormKucing}
                    formKucing={formKucing}
                    setTotal={setTotal}
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
