import { Link } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import SocialLinks from '../../ui/sociallinks/SocialLinks';
import HeaderInfo from './HeaderOneInfo';

export default function HeaderOne() {
  return (
    <header className="header_area">
      <div className="header_top_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <HeaderInfo />
            </div>
            <div className="col-xl-4 col-md-3">
              <div className="header_social">
                <SocialLinks />
              </div>
            </div>
            <div className="col-xl-2 col-md-3">
              <div className="header_button">
                <Link to="/" className="tem_btn tem_btn_three">
                  Get a quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <Navbar />
    </header>
  );
}
