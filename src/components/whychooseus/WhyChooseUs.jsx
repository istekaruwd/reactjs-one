import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import whychooseusData from '../../data/whychooseus/whychooseus.json';

import wcsBackgroud from '/images/why_choos.jpg';

export default function WhyChooseUs() {
  if (!whychooseusData?.length) {
    return (
      <section className="why-why_choos_section-section">
        <div className="container">
          <p className="wcu_empty text-center">No reasons available.</p>
        </div>
      </section>
    );
  }
  return (
    <section
      className="why_choos_section"
      style={{
        backgroundImage: `url(${wcsBackgroud})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <SectionHeadingOne heading="Why Choose Us?" align="left" />
            <div className="row">
              {whychooseusData?.map((item) => (
                <div className="col-sm-6" key={item.id}>
                  <div className="why_chs_box">
                    <div className="why_chs_icon">
                      <i className={item.icon} aria-hidden="true"></i>
                    </div>
                    <div className="why_chs_text">
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
