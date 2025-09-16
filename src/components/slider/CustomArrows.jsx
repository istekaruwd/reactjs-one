import PropTypes from 'prop-types';

export const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={`${className} slider_v2_next`} onClick={onClick} aria-label="Next Slide">
      <i className="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
    </button>
  );
};

export const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button className={`${className} slider_v2_prev`} onClick={onClick} aria-label="Previous Slide">
      <i className="fa-solid fa-arrow-left-long" aria-hidden="true"></i>
    </button>
  );
};

NextArrow.propTypes = PrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
