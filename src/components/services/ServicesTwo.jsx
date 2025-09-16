import { Link } from 'react-router-dom';

import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import servicesData from '../../data/services/services.json';

export default function ServicesTwo({ limit = 6 }) {
  if (!servicesData?.length) {
    return <p className="services_section_empty text-center">No services information provided.</p>;
  }

  return (
    <section className="service_section_two" id="servicesTwo">
      <div className="container">
        <SectionHeadingOne heading="Our Services" subheading="What We Do" />
        <div className="home_services_two">
          <div className="row">
            {servicesData?.slice(0, limit).map((item) => (
              <div className="col-lg-4 col-sm-6" key={item.id}>
                <div className="service_list_two">
                  <div className="service_list_two_hdr">
                    <i className={item.icon} aria-hidden="true"></i>
                    <h5>
                      <Link to={`/service/${item.id}`}>{item.title}</Link>
                    </h5>
                  </div>
                  <p>{item.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
