import MetaHandler from '../common/MetaHandler';
import HeaderTwo from './header/HeaderTwo';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

export default function LayoutTwo() {
  return (
    <>
      <MetaHandler />
      <HeaderTwo />
      <main className="main-Area">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
