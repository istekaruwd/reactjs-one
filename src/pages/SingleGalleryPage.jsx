import { useState, useId } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/pageheader/PageHeader';
import SectionHeadingOne from '../components/sectionheading/SectionHeadingOne';
import RelatedWork from '../components/gallery/RelatedWork';

import galleryData from '../data/gallery/gallery.json';
import pageHeaderBg from '/images/page_bg.jpg';
import SimpleLocationShare from '../components/share/SimpleLocationShare';

export default function SingleGalleryPage() {
  const uniqueId = useId();
  const [activeIndex, setActiveIndex] = useState(0);

  const { id } = useParams();

  const item = galleryData.find((p) => p.id === parseInt(id));

  if (!item) {
    return (
      <div className="container">
        <div className="py-5">
          <h2>Item not found!</h2>
          <Link to="/gallery">Back to Gallery</Link>
        </div>
      </div>
    );
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? item.previewImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === item.previewImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="single_gallery_page">
      <PageHeader
        title="Our Gallery"
        bgImgUrl={pageHeaderBg}
        items={[
          { label: 'home', href: '/' },
          { label: 'gallery', href: '/gallery' },
          { label: 'single gallery' },
        ]}
      />
      <div className="gallery_page_content_area">
        <div className="container">
          <SectionHeadingOne heading="Work with kc company" />
          <div className="row">
            <div className="col-lg-8">
              <div className="gallery_page_content">
                {/* Carousel */}
                <div className="gallery_page_carousel">
                  <div
                    id={`carousel-${uniqueId}`}
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                  >
                    {/* Carousel Items */}
                    <div className="carousel-inner">
                      {item.previewImages?.map((img, index) => (
                        <div
                          key={index}
                          className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                        >
                          <img
                            src={img}
                            className="d-block w-100"
                            alt={`${item.title} preview ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Controls */}
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target={`#carousel-${uniqueId}`}
                      data-bs-slide="prev"
                      onClick={handlePrev}
                    >
                      <span className="fa-solid fa-angle-left" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>

                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target={`#carousel-${uniqueId}`}
                      data-bs-slide="next"
                      onClick={handleNext}
                    >
                      <span className="fa-solid fa-angle-right" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <h4 className="gallery_page_heading">Project overview</h4>
                <div className="gallery_page_content_text">
                  {Array.isArray(item.contentParts) ? (
                    item.contentParts.map((para, idx) => <p key={idx}>{para}</p>)
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="gallery_project_details">
                <h4 className="gallery_project_details_heading">Project Details</h4>
                <ul>
                  <li>
                    <span>Client Name</span> <span>{item.clientName}</span>
                  </li>
                  <li>
                    <span>Company Name</span> <span>{item.companyName}</span>
                  </li>
                  <li>
                    <span>Work Type</span> <span>{item.workType}</span>
                  </li>
                  <li>
                    <span>Project Date</span> <span>{item.projectDate}</span>
                  </li>
                  <li>
                    <span>Budget</span> <span>{item.Budget}</span>
                  </li>
                  <li>
                    <span>Location</span> <span>{item.Location}</span>
                  </li>
                </ul>
              </div>
              {/* Share Icon */}
              <SimpleLocationShare title={item.title} />
            </div>
          </div>
        </div>
      </div>
      <RelatedWork />
    </div>
  );
}
