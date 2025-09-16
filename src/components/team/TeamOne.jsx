import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import teamData from '../../data/team/team.json';

export default function TeamOne({ limit = 4 }) {
  if (!teamData?.length) {
    return <p className="team_section_empty text-center">No team members available.</p>;
  }

  return (
    <section className="team_section" id="team">
      <div className="container">
        <SectionHeadingOne heading="Meet the team" />
        <div className="row">
          {teamData?.slice(0, limit).map((item) => (
            <div className="col-lg-3 col-sm-6" key={item.id}>
              <div className="member_warp">
                <div className="member_img">
                  <img src={item.img} alt={item.name} loading="lazy" />
                  <div className="team_social">
                    {item.socialLinks?.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                      >
                        <i className={social.icon} aria-hidden="true"></i>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="member_info">
                  <h6>
                    <small>{item.designation}</small>
                    {item.name}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
