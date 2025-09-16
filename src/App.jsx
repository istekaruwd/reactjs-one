import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import routes from './routes/routes';
import ErrorBoundary from './components/common/ErrorBoundary';
import Preloader from './components/common/Preloader';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<Preloader />}>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}>
                  {route.children &&
                    route.children.map((child, cIndex) => (
                      <Route
                        key={cIndex}
                        index={child.index}
                        path={child.path}
                        element={child.element}
                      />
                    ))}
                </Route>
              ))}
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}
