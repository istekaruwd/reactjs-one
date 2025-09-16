import { Link } from 'react-router-dom';
import helpfullLinksData from '../../../data/navbar/helpfulllinks.json';

export default function LatestPost() {
  if (helpfullLinksData.length === 0) {
    return <p className="footer_links_empty">No recent posts available.</p>;
  }

  return (
    <ul className="footer_links" aria-label="Helpful links">
      {helpfullLinksData.map((item) => (
        <li key={item.id}>
          <Link to={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
