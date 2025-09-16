import { useState } from 'react';
import { Link } from 'react-router-dom';
import galleryData from '../../data/gallery/gallery.json';

export default function GalleryFilter({ limit = 8 }) {
  const [items, setItems] = useState(galleryData);
  const [activeFilter, setActiveFilter] = useState('all');

  const uniqueTags = ['all', ...new Set(galleryData.map((item) => item.tag))];

  const handleFilter = (tag) => {
    setActiveFilter(tag);
    if (tag === 'all') {
      setItems(galleryData); // 'all'
    } else {
      const filteredItems = galleryData.filter((item) => item.tag === tag);
      setItems(filteredItems);
    }
  };

  return (
    <div className="projects_area">
      {/* Filter Button */}
      <div className="projects_buttons">
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleFilter(tag)}
            className={activeFilter === tag ? 'active' : ''}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Filter Gallery */}
      <div className="row projects_lists">
        {items?.slice(0, limit).map((item) => (
          <div key={item.id} className="col-lg-3 col-md-6 single_projects_item">
            <div
              className="projects_item"
              style={{
                backgroundImage: `url(${item.thumb})`,
              }}
            >
              <div className="project_hover">
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
  );
}
