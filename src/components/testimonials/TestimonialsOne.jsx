import Slider from 'react-slick';
import { useRef } from 'react';

import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import { usePreventAriaHiddenFocus } from '../../helpers/usePreventAriaHiddenFocus';
import testimonialData from '../../data/testimonials/testimonialsone.json';
import testimonialBg from '/images/testimonial.jpg';
import TestimonialsRating from './TestimonialsRating';

export default function TestimonialsOne() {
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
      className="testimonials_section"
      style={{
        backgroundImage: `url(${testimonialBg})`,
      }}
    >
      <div className="container">
        <SectionHeadingOne heading="what client say" />
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Slider ref={slickRef} {...settings}>
              {testimonialData?.map((item) => (
                <div key={item.id} className="testimonial_box">
                  <div className="testi_images">
                    <img src={item.authorThumb} alt={item.author} loading="lazy" />
                  </div>
                  <div className="testimonial_content">
                    <p>
                      <i className="fa-solid fa-quote-left" aria-hidden="true"></i> {item.quote}
                    </p>
                  </div>
                  <div className="testimonial_info">
                    <div className="testimonial_name">{item.author}</div>
                    <div className="testimonial_degree">{item.designation}</div>
                    <TestimonialsRating rating={item.rating} />
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
