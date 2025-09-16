import PropTypes from 'prop-types';

export default function TestimonialsRating({ rating, maxRating = 5 }) {
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    if (rating >= i) {
      // Full Star
      stars.push(<i key={i} className="fa-solid fa-star" aria-hidden="true"></i>);
    } else if (rating >= i - 0.5) {
      // Half Star
      stars.push(<i key={i} className="fa-solid fa-star-half-stroke" aria-hidden="true"></i>);
    } else {
      // Empty Star
      stars.push(<i key={i} className="fa-regular fa-star" aria-hidden="true"></i>);
    }
  }

  return <div className="testimonial_rating">{stars}</div>;
}

TestimonialsRating.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
};
