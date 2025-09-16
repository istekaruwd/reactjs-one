import { Link } from 'react-router-dom';
import SectionHeadingOne from '../sectionheading/SectionHeadingOne';

import pricingData from '../../data/pricingtable/pricingtable.json';

export default function PricingTableTwo() {
  if (!pricingData || pricingData.length === 0) {
    return (
      <section className="pricing_section_two" id="pricingTwo">
        <div className="container">
          <p className="pricing_section_empty">No pricing plans available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pricing_section_two" id="pricingTwo">
      <div className="container">
        <SectionHeadingOne heading="Our Special Plan" subheading="Our pricing" />
        <div className="row">
          {pricingData?.map((item) => (
            <div className="col-md-4 col-sm-6" key={item.id}>
              <div className="pricing_box_two">
                <div className="pricing_heading_two">
                  <h4>{item.planName}</h4>
                  <p>{item.text}</p>
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
                <div className="pricing_btn_two">
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
