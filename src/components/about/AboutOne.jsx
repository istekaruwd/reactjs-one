import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import aboutListData from '../../data/about/aboutone.json';

import aboutThumb from '/images/about.png';

export default function AboutOne() {
  return (
    <>
      <section className="about_section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <SectionHeadingOne
                heading="Welcome to Elizah"
                headingtext="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed dapibus enim sit amet pellentesque imperdiet nibh tortor fringilla tortor eu sodales leo augue eget justo. Phasellus id lectus id metus ornare sempereget vulputate urnorbi venenatis, ex a sollicitudin semper sed dapibus enim sit amet pellen tesque imperdiet nibh tortor fringilla tortor "
                align="left"
              />
              <div className="row">
                {aboutListData?.map((item) => (
                  <div key={item.id ?? item.title} className="col-sm-6">
                    {item?.title && (
                      <div className="about_list">
                        <div className="about_list_top">
                          {item?.icon && (
                            <div className="about_icon_box">
                              <i className={item.icon} aria-hidden="true"></i>
                            </div>
                          )}
                          <h5>{item.title}</h5>
                        </div>
                        {item?.text && <p>{item.text}</p>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about_thumb">
                <img src={aboutThumb} alt="About section thumbnail" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
