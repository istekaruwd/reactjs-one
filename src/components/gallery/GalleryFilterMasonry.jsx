import { useState } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import galleryData from '../../data/gallery/gallery.json';

export default function GalleryFilterMasonry() {
  const [items, setItems] = useState(galleryData);
  const [activeFilter, setActiveFilter] = useState('all');

  const uniqueTags = ['all', ...new Set(galleryData.map((item) => item.tag))];

  const handleFilter = (tag) => {
    setActiveFilter(tag);
    if (tag === 'all') {
      setItems(galleryData);
    } else {
      const filteredItems = galleryData.filter((item) => item.tag === tag);
      setItems(filteredItems);
    }
  };

  // Masonry Breckpoint
  const breakpointColumnsObj = {
    default: 3,
    991: 2,
    575: 1,
  };

  return (
    <div className="projects_area_v2">
      {/* Filter Button */}
      <div className="projects_buttons_v2">
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

      {/* Filter Gallery with Masonry */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry_grid"
        columnClassName="masonry_grid_column"
      >
        {items?.map((item) => (
          <div key={item.id} className="single_projects_item_v2">
            <div
              className={`projects_item_v2 projects_item_${item.id}`}
              style={{
                backgroundImage: `url(${item.thumb})`,
              }}
            >
              <div className="project_hover_v2">
                <h4>
                  <Link to={`/gallery/${item.id}`}>{item?.title}</Link>
                  <span>{item?.tag}</span>
                </h4>
                <i
                  className="fa-solid fa-up-right-and-down-left-from-center"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
