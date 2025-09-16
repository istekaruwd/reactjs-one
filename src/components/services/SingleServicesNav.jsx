import servicesNavData from '../../data/services/services.json';

import { Link } from 'react-router-dom';

export default function SingleServicesNav() {
  if (!servicesNavData?.length) {
    return <p className="services_nav_empty">No services information provided.</p>;
  }

  return (
    <nav className="sin_services_nav">
      {servicesNavData?.map((item) => (
        <Link key={item.id} to={`/service/${item.id}`}>
          <i className="fa-solid fa-angle-right" aria-hidden="true"></i> {item.title}
        </Link>
      ))}
    </nav>
  );
}
