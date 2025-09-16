import Slider from 'react-slick';
import { useRef, useState } from 'react';

import { usePreventAriaHiddenFocus } from '../../helpers/usePreventAriaHiddenFocus';
import sliderData from '../../data/slider/sliderThree.json';

export default function SliderThree() {
  const slickRef = useRef(null);
  usePreventAriaHiddenFocus(slickRef);

  const [activeSlide, setActiveSlide] = useState(0);

  if (!sliderData?.length) {
    return <p className="hero_slider_empty text-center">No slides available.</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    beforeChange: () => {
      if (document.activeElement) document.activeElement.blur();
    },
    onSwipe: () => {
      if (document.activeElement) document.activeElement.blur();
    },
    afterChange: (current) => {
      setActiveSlide(current);
    },
  };

  return (
    <section className="hero-slider">
      <Slider ref={slickRef} {...settings}>
        {sliderData?.map((slide, index) => {
          const isActive = index === activeSlide;

          return (
            <div key={slide.id} className="slider-1">
              <div
                className="single_slider_img"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
                role="img"
                aria-label={slide.title}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-md-7">
                      <div className="single_slider_text">
                        <h2
                          className={`${isActive ? 'animate__animated animate__fadeInDown' : ''}`}
                          dangerouslySetInnerHTML={{ __html: slide.title }}
                        />
                        <p
                          className={`${
                            isActive ? 'animate__animated animate__fadeInUp animate__delay-1s' : ''
                          }`}
                        >
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
