import { useParams, Link } from 'react-router-dom';

import PageHeader from '../components/pageheader/PageHeader';
import SingleServicesNav from '../components/services/SingleServicesNav';
import ServicesThree from '../components/services/ServicesThree';

import serviceData from '../data/services/services.json';
import pageHeaderBg from '/images/page_bg.jpg';

export default function SingleServicePage() {
  const { id } = useParams();

  const item = serviceData.find((p) => p.id === parseInt(id));

  // FallBack
  if (!item) {
    return (
      <div>
        <h2>Item not found!</h2>
        <Link to="/gallery">Back to Service Page</Link>
      </div>
    );
  }

  return (
    <div className="single_service_page">
      <PageHeader
        title="Our Service"
        bgImgUrl={pageHeaderBg}
        items={[
          { label: 'home', href: '/' },
          { label: 'service', href: '/service' },
          { label: 'single service' },
        ]}
      />
      <div className="ser_page_content_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="ser_page_content">
                <div className="ser_page_content_thumb">
                  <img src={item.singleThumb} alt={item.title} />
                </div>
                <h1 className="ser_page_content_heading">{item.title}</h1>
                <div className="ser_page_content_text">
                  {Array.isArray(item.contentParts) &&
                    item.contentParts.map((para, idx) => <p key={idx}>{para}</p>)}
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="ser_page_nav">
                <SingleServicesNav />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesThree />
    </div>
  );
}
