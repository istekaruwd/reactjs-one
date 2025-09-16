import MetaHandler from '../common/MetaHandler';
import HeaderOnePageTwo from './header/HeaderOnePageTwo';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

export default function LayoutTwo() {
  return (
    <>
      <MetaHandler />
      <HeaderOnePageTwo />
      <main className="main-Area">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
