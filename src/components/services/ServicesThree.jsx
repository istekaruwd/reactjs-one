import { Link } from 'react-router-dom';

import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import servicesData from '../../data/services/services.json';

export default function ServicesThree({ limit = 3 }) {
  if (!servicesData?.length) {
    return <p className="services_section_empty text-center">No services information provided.</p>;
  }

  return (
    <section className="service_section">
      <div className="container">
        <SectionHeadingOne heading="what we do for you" />
        <div className="row">
          {servicesData?.slice(0, limit).map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="service_list service_list_v3">
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
                    {item.btnText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
