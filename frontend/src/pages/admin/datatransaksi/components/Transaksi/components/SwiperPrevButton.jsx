import { useSwiper } from "swiper/react";
import PropTypes from "prop-types";

export const ButtonPrev = ({ className, children }) => {
    ButtonPrev.propTypes = {
        className: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
    };

    const swiper = useSwiper();
    return (
        <button
            type="button"
            onClick={() => swiper.slidePrev()}
            className={className}
        >
            {children}
        </button>
    );
};
