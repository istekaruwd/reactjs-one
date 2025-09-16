import MetaHandler from '../common/MetaHandler';
import HeaderOnePage from './header/HeaderOnePage';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

export default function LayoutTwo() {
  return (
    <>
      <MetaHandler />
      <HeaderOnePage />
      <main className="main-Area">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
