import { useState, useEffect, useRef } from 'react';
import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import teamData from '../../data/team/team.json';
import { usePreventAriaHiddenFocus } from '../../helpers/usePreventAriaHiddenFocus';

import TeamTwoMainSlider from './TeamTwoMainSlider';
import TeamTwoNavSlider from './TeamTwoNavSlider';

export default function TeamTwo() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nav1Ref = useRef(null);
  const nav2Ref = useRef(null);

  usePreventAriaHiddenFocus(nav1Ref);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) setSlidesToShow(4);
      else setSlidesToShow(7);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!teamData?.length) {
    return <p className="team_section_empty text-center">No team members available.</p>;
  }

  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    fade: true,
    beforeChange: (_, next) => {
      setCurrentSlide(next);
      if (document.activeElement?.blur) document.activeElement.blur();
    },
    onSwipe: () => {
      if (document.activeElement?.blur) document.activeElement.blur();
    },
  };

  const navSliderSettings = {
    slidesToShow,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    focusOnSelect: false,
    swipeToSlide: true,
  };

  const handlePrev = () => nav2Ref.current?.slickPrev();
  const handleNext = () => nav2Ref.current?.slickNext();

  return (
    <section className="team_section_v2" id="teamTwo">
      <div className="container">
        <SectionHeadingOne heading="Meet the team" />

        <div className="team_section_inr_v2">
          <TeamTwoMainSlider
            mainSliderSettings={mainSliderSettings}
            nav2Ref={nav2Ref}
            nav1Ref={nav1Ref}
            teamData={teamData}
            currentSlide={currentSlide}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />

          <TeamTwoNavSlider
            navSliderSettings={navSliderSettings}
            nav1Ref={nav1Ref}
            nav2Ref={nav2Ref}
            teamData={teamData}
          />
        </div>
      </div>
    </section>
  );
}
