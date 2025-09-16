import { Link } from 'react-router-dom';
import SectionHeadingOne from '../sectionheading/SectionHeadingOne';

import pricingData from '../../data/pricingtable/pricingtable.json';
import pricingHeadingBackgroud from '/images/pricing_back.jpg';

export default function PricingTableOne() {
  if (!pricingData || pricingData.length === 0) {
    return (
      <section className="pricing-section">
        <div className="container">
          <p className="pricing_section_empty">No pricing plans available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pricing_section">
      <div className="container">
        <SectionHeadingOne heading="Our Special Plan" />
        <div className="row">
          {pricingData?.map((item) => (
            <div className="col-md-4 col-sm-6" key={item.id}>
              <div className="pricing_box">
                <div
                  className="pricing_heading"
                  style={{
                    backgroundImage: `url(${pricingHeadingBackgroud})`,
                  }}
                >
                  <h4>{item.planName}</h4>
                  <h2>
                    <small>{item.currencyType}</small>
                    {item.planPrice}
                    <span> {item.subscribePlan}</span>
                  </h2>
                </div>
                <ul>
                  {item.planFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="pricing_btn">
                  <Link to={item.buttonLink} className="tem_btn tem_btn_border">
                    {item.buttonText}
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
