import { useLocation } from 'react-router-dom';
import routes from '../../routes/routes';
import PageMeta from './PageMeta';

export default function MetaHandler() {
  const location = useLocation();

  // Flatten all routes into a single array with full paths
  const flattenRoutes = (routesArr, parentPath = '') => {
    let flatRoutes = [];

    for (const r of routesArr) {
      const fullPath = r.path === '/' ? '/' : `${parentPath}/${r.path}`.replace('//', '/');

      if (r.meta) {
        flatRoutes.push({
          path: r.index ? '/' : fullPath,
          meta: r.meta,
        });
      }

      if (r.children) {
        flatRoutes = [...flatRoutes, ...flattenRoutes(r.children, fullPath)];
      }
    }

    return flatRoutes;
  };

  // Get all flattened routes
  const allRoutes = flattenRoutes(routes);

  // Find the matching route
  const findMatchingRoute = (path) => {
    // First try exact match
    const exactMatch = allRoutes.find((route) => route.path === path);
    if (exactMatch) return exactMatch.meta;

    // Then try dynamic routes (like /service/:id)
    const dynamicMatch = allRoutes.find((route) => {
      if (route.path.includes(':')) {
        const pattern = new RegExp('^' + route.path.replace(/:[^/]+/g, '[^/]+') + '$');
        return pattern.test(path);
      }
      return false;
    });
    if (dynamicMatch) return dynamicMatch.meta;

    // Finally, try wildcard
    const wildcardMatch = allRoutes.find((route) => route.path === '/*' || route.path === '*');
    if (wildcardMatch) return wildcardMatch.meta;

    return null;
  };

  const meta = findMatchingRoute(location.pathname);

  return (
    <PageMeta
      title={meta?.title || 'Elizah - React Theme'}
      description={meta?.description || 'Welcome to Elizah - Modern React Theme.'}
    />
  );
}
