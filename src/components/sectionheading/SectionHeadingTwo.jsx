import PropTypes from 'prop-types';

export default function SectionHeadingTwo({ heading, subheading, headingtext }) {
  return (
    <div className="section_heading_two">
      {heading && (
        <h3>
          {heading} {subheading && <span>{subheading}</span>}
        </h3>
      )}
      {headingtext && <p>{headingtext}</p>}
    </div>
  );
}

SectionHeadingTwo.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  headingtext: PropTypes.string,
};

SectionHeadingTwo.defaultProps = {
  subheading: '',
  headingtext: '',
};
