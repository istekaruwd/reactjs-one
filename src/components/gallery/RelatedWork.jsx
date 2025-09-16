import { Link } from 'react-router-dom';
import SectionHeadingOne from '../sectionheading/SectionHeadingOne';

import galleryData from '../../data/gallery/gallery.json';

export default function RelatedWork({ limit = 4 }) {
  if (galleryData.length === 0) {
    return <p className="gallery_related_empty">No recent posts available.</p>;
  }

  return (
    <section className="gallery_rel_work">
      <div className="container">
        <SectionHeadingOne heading="Related work" />
        <div className="row">
          {galleryData?.slice(0, limit).map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div
                className="rel_projects_item"
                style={{
                  backgroundImage: `url(${item.thumb})`,
                }}
              >
                <div className="rel_project_hover">
                  <h4>
                    <Link to={`/gallery/${item.id}`}>{item?.title}</Link>
                    <span>{item?.tag}</span>
                  </h4>
                  <i className="ei ei-icon_image" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
