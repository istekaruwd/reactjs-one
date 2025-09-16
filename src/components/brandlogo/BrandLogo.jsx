// File: BrandLogo.jsx
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import { usePreventAriaHiddenFocus } from '../../helpers/usePreventAriaHiddenFocus';
import brandLogoData from '../../data/brandlogo/brandlogo.json';

export default function BrandLogo() {
  const [slidesToShow, setSlidesToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 575) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 769) {
        setSlidesToShow(3);
      } else if (window.innerWidth <= 991) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(6);
      }
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
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    beforeChange: () => {
      if (document.activeElement) document.activeElement.blur();
    },
    onSwipe: () => {
      if (document.activeElement) document.activeElement.blur();
    },
  };

  return (
    <section className="client_section">
      <div className="container">
        <div className="client_area">
          <Slider ref={slickRef} {...settings}>
            {brandLogoData?.map((item) => (
              <div className="client_box" key={item.id}>
                {/* <a href={item?.URL} target="_blank" rel="noopener noreferrer">
                  <img src={item?.logoSrc} alt={item?.brandName ?? 'Brand logo'} loading="lazy" />
                </a> */}

                {item.isExternal ? (
                  <a href={item?.URL} target="_blank" rel="noopener noreferrer">
                    <img src={item?.logoSrc} alt={item?.brandName ?? 'Brand logo'} loading="lazy" />
                  </a>
                ) : (
                  <Link to={item?.URL}>
                    <img src={item?.logoSrc} alt={item?.brandName ?? 'Brand logo'} loading="lazy" />
                  </Link>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
