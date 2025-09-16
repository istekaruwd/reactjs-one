import PropTypes from 'prop-types';

import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import skillsData from '../../data/skill/skill.json';

export default function Skill({ data = skillsData }) {
  if (!data) {
    return (
      <section className="skill_section-section">
        <div className="container">
          <p className="skill_section_empty">No skills data provided.</p>
        </div>
      </section>
    );
  }

  const { skillHeading, description, bulletPoints, skills } = data;

  return (
    <section className="skill_section">
      <div className="container">
        <SectionHeadingOne heading="Our Skill" />
        <div className="row">
          <div className="col-lg-6">
            <div className="skill_text">
              <h2>{skillHeading}</h2>
              <p>{description}</p>
              <ul>
                {Array.isArray(bulletPoints) &&
                  bulletPoints.map((list) => (
                    <li key={list}>
                      <i className="fa-solid fa-check" aria-hidden="true"></i> {list}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="skills_list">
              {Array.isArray(skills) &&
                skills.map((s) => (
                  <div key={s.name} className="skill_card" aria-roledescription="skill card">
                    <h4 className="skill_header">{s.name}</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${s.percent}%` }}
                        aria-valuenow={s.percent}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span>{s.percent}%</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Default props
Skill.defaultProps = {
  data: skillsData,
};

// Prop validation
Skill.propTypes = {
  data: PropTypes.shape({
    skillHeading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bulletPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        percent: PropTypes.number.isRequired,
      })
    ).isRequired,
  }),
};
