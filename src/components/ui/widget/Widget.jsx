import PropTypes from 'prop-types';

export default function Widget({ heading, children }) {
  return (
    <div className="widget">
      <h5 className="widget_heading">{heading}</h5>
      {children}
    </div>
  );
}

Widget.propTypes = {
  heading: PropTypes.string.isRequired,
};
