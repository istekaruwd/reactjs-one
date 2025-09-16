import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import { usePreventAriaHiddenFocus } from '../../helpers/usePreventAriaHiddenFocus';
import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import servicesData from '../../data/services/services.json';

export default function ServicesSlider() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else setSlidesToShow(3);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slickRef = useRef(null);
  usePreventAriaHiddenFocus(slickRef);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    beforeChange: () => {
      if (document.activeElement) document.activeElement.blur();
    },
    onSwipe: () => {
      if (document.activeElement) document.activeElement.blur();
    },
  };

  if (!servicesData?.length) {
    return <p className="services_section_empty text-center">No services information provided.</p>;
  }

  return (
    <section className="service_section" id="services">
      <div className="container">
        <SectionHeadingOne heading="Our Services" />
        <div className="home_services">
          <Slider ref={slickRef} {...settings}>
            {servicesData?.map((item) => (
              <div className="service_list" key={item.id}>
                <div className="service_img">
                  <img src={item.thumb} alt={item.title} loading="lazy" />
                </div>
                <div className="service_para">
                  <div className="service_para_top">
                    <div className="service_icon_box">
                      <i className={item.icon} aria-hidden="true"></i>
                    </div>
                    <h5>
                      <Link to={`/service/${item.id}`}>{item.title}</Link>
                    </h5>
                  </div>
                  <p className="mb-3">{item.shortDesc}</p>
                  <Link to={`/service/${item.id}`} className="service_btn">
                    {item.btnText} <i className="fa-solid fa-angles-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
