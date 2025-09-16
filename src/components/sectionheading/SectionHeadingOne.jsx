import PropTypes from 'prop-types';

export default function SectionHeadingOne({ heading, subheading, headingtext, align }) {
  return (
    <div className={`section_heading_one ${align ? `heading_${align}` : 'heading_center'}`}>
      {heading && (
        <h3>
          {subheading && <span>{subheading}</span>} {heading}
        </h3>
      )}
      {headingtext && <p>{headingtext}</p>}
    </div>
  );
}

SectionHeadingOne.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  headingtext: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

SectionHeadingOne.defaultProps = {
  subheading: '',
  headingtext: '',
  align: 'center', // ✅ default center
};
