import Slider from 'react-slick';

export default function TeamTwoNavSlider({ navSliderSettings, nav1Ref, nav2Ref, teamData }) {
  return (
    <div className="team_nav_slider_area_v2">
      <div className="row g-xl-5">
        <div className="col-lg-7 m-0">
          <Slider
            {...navSliderSettings}
            asNavFor={nav1Ref.current}
            ref={nav2Ref}
            className="team_nav_slider_v2"
          >
            {teamData.map((member, idx) => (
              <div
                key={member.id}
                className="nav_item"
                tabIndex={-1}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  nav1Ref.current?.slickGoTo(idx);
                  document.activeElement.blur();
                }}
                role="button"
                aria-label={`Go to ${member.name}`}
              >
                <img src={member.img} alt={member.name} loading="lazy" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
