import { Link } from 'react-router-dom';

import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import aboutListTwoData from '../../data/about/abouttwo.json';

export default function AboutTwo() {
  return (
    <>
      <section className="about_section_v2" id="aboutTwo">
        <div className="container">
          <SectionHeadingOne heading="About Company" subheading="Our Intro" />
          <div className="row">
            {aboutListTwoData?.map((item) => (
              <div key={item.id} className="col-md-4 col-sm-6">
                <div className="about_v2_list">
                  <div className="about_v2_img">
                    <img src={item?.thumb} alt={item?.title ?? 'About item'} loading="lazy" />
                  </div>
                  <div className="about_v2_para">
                    <h5>{item?.title}</h5>
                    {item?.text && <p>{item.text}</p>}
                    <Link to="/about">
                      Read more <i className="fa-solid fa-angles-right" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
