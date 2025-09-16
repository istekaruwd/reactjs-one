import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

import { usePreventAriaHiddenFocus } from '../../helpers/usePreventAriaHiddenFocus';
import { NextArrow, PrevArrow } from './CustomArrows';
import sliderData from '../../data/slider/sliderfive.json';

export default function SliderFive() {
  const slickRef = useRef(null);
  usePreventAriaHiddenFocus(slickRef);

  if (!sliderData?.length) {
    return <p className="hero_slider_empty text-center">No slides available.</p>;
  }

  const settings = {
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    beforeChange: () => {
      if (document.activeElement) document.activeElement.blur();
    },
    onSwipe: () => {
      if (document.activeElement) document.activeElement.blur();
    },
  };

  return (
    <section className="hero_slider_two" id="homeTwo">
      <Slider ref={slickRef} {...settings}>
        {sliderData?.map((slide, index) => (
          <div key={slide.id} className="slider_v2">
            <div
              className="single_slidertwo_img"
              style={{
                backgroundImage: `url(${slide.bg})`,
              }}
              role="img"
              aria-label={slide.title}
            >
              <div className="container">
                <div className={index % 2 === 0 ? 'row justify-content-center text-center' : 'row'}>
                  <div className="col-xxl-6 col-lg-8">
                    <div
                      className={
                        index % 2 === 0
                          ? 'single_slidertwo_text'
                          : 'single_slidertwo_text single_slidertwo_text_two'
                      }
                    >
                      <h2 dangerouslySetInnerHTML={{ __html: slide.title }} />
                      <p>{slide.description}</p>
                      <Link to={slide.btnLink} className="tem_btn tem_btn_border_two">
                        {slide.btnText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
