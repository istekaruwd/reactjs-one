import Slider from 'react-slick';

export default function TeamTwoMainSlider({
  mainSliderSettings,
  nav2Ref,
  nav1Ref,
  teamData,
  currentSlide,
  handleNext,
  handlePrev,
}) {
  return (
    <Slider
      {...mainSliderSettings}
      asNavFor={nav2Ref.current}
      ref={nav1Ref}
      className="team_details_slider"
    >
      {teamData?.map((member, idx) => (
        <div key={member.id} className="single_team_v2">
          <div className="row g-xl-5">
            <div className="col-md-7">
              <div className="single_team_content_v2">
                <div className="single_team_hdr_v2">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single_team_info_v2">
                        <h4>{member.name}</h4>
                        <h5>{member.designation}</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="bio">{member.text}</p>
                <div className="single_team_social_v2">
                  {member.socialLinks?.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={member.name}
                    >
                      <i className={social.icon} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="single_team_img_v2">
                <img src={member.img} alt={member.name} loading="lazy" />

                {idx === currentSlide && (
                  <div className="team_custom_btn_controls">
                    <button
                      className="team_custom_btn_next"
                      type="button"
                      aria-label="Next team member"
                      onClick={(e) => {
                        e.preventDefault();
                        e.currentTarget.blur();
                        handleNext();
                      }}
                    >
                      <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
                    </button>
                    <button
                      className="team_custom_btn_prev"
                      type="button"
                      aria-label="Previous team member"
                      onClick={(e) => {
                        e.preventDefault();
                        e.currentTarget.blur();
                        handlePrev();
                      }}
                    >
                      <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
