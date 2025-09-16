import Slider from 'react-slick';
import { useRef } from 'react';

import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import { usePreventAriaHiddenFocus } from '../../helpers/usePreventAriaHiddenFocus';
import testimonialData from '../../data/testimonials/testimonialsone.json';
import testimonialBgTwoBg from '/images/testimonial2.jpg';

export default function TestimonialsTwo() {
  const slickRef = useRef(null);
  usePreventAriaHiddenFocus(slickRef);

  if (!testimonialData?.length) {
    return <p className="testimonials_section__empty text-center">No testimonials available.</p>;
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: () => {
      if (document.activeElement) document.activeElement.blur();
    },
    onSwipe: () => {
      if (document.activeElement) document.activeElement.blur();
    },
  };

  return (
    <section
      className="testimonials_sec_v2"
      style={{
        backgroundImage: `url(${testimonialBgTwoBg})`,
      }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-6 col-md-7">
            <SectionHeadingOne
              heading="what client say"
              subheading="Our testimonials"
              align="left"
            />
            <Slider ref={slickRef} {...settings}>
              {testimonialData?.map((item) => (
                <div className="testimonial_box_two" key={item.id}>
                  <div className="testimonial_content_two">
                    <p>{item.quote}</p>
                  </div>
                  <div className="testimonial_info_two">
                    <div className="testimonial_name_two">{item.author}</div>
                    <div className="testimonial_degree_two">{item.designation}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
