import PropTypes from 'prop-types';

export default function WidgetTwo({ heading, children }) {
  return (
    <div className="widget_two">
      <h3 className="widget_two_heading">{heading}</h3>
      {children}
    </div>
  );
}

WidgetTwo.propTypes = {
  heading: PropTypes.string.isRequired,
};
