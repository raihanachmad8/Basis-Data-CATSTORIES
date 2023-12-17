import Card from "./components/Card";
import PropTypes from "prop-types";

const SelectCat = ({ dataKucing }) => {
    return (
        <div className="grid grid-cols-2 gap-5 overflow-y-scroll pb-24">
            {dataKucing.map((item, index) => (
                <Card item={item} key={index} />
            ))}
        </div>
    );
};

SelectCat.propTypes = {
    dataKucing: PropTypes.array.isRequired,
};

export default SelectCat;
