import MetaHandler from '../common/MetaHandler';
import HeaderOne from './header/HeaderOne';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

export default function Layout() {
  return (
    <>
      <MetaHandler />
      <HeaderOne />
      <main className="main-Area">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
