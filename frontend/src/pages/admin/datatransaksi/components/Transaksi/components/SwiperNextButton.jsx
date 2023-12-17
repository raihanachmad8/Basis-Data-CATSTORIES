import { useSwiper } from "swiper/react";
import PropTypes from "prop-types";

export const ButtonNext = ({ className, children }) => {
    ButtonNext.propTypes = {
        className: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
    };

    const swiper = useSwiper();
    return (
        <button
            type="button"
            onClick={() => swiper.slideNext()}
            className={className}
        >
            {children}
        </button>
    );
};
