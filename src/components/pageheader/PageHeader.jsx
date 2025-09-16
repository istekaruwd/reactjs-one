import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function prettifyLabel(label = '') {
  return String(label)
    .replace(/[-_]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export default function PageHeader({ title, bgImgUrl, items = [], separator = '/' }) {
  return (
    <section
      className="page_header"
      style={{
        backgroundImage: `url(${bgImgUrl})`,
      }}
    >
      <div className="container">
        <div className="page_header_content animate__animated animate__fadeInUp">
          <nav aria-label="breadcrumb" className="page_breadcrumb">
            <ul>
              {items.map((item, index) => {
                const isLast = index === items.length - 1;
                const label = prettifyLabel(item.label);

                return (
                  <li key={index}>
                    {item.href && !isLast ? (
                      <Link to={item.href}>{label}</Link>
                    ) : (
                      <span aria-current="page">{label}</span>
                    )}
                    {!isLast && <span className="separator">{separator}</span>}
                  </li>
                );
              })}
            </ul>
          </nav>
          <h3>{title}</h3>
        </div>
      </div>
    </section>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  bgImgUrl: PropTypes.string.isRequired,
};
