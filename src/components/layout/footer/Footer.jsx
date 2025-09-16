import { Link } from 'react-router-dom';

import Widget from '../../ui/widget/Widget';
import LatestPost from './LatestPost';
import HelpfullLinks from './HelpfullLinks';
import SocialLinks from '../../ui/sociallinks/SocialLinks';
import Newsletter from '../../ui/newsletter/Newsletter';
import ScrollToTop from '../../../helpers/ScrollToTop';

export default function Footer() {
  return (
    <footer className="footer_section">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* About  */}
              <Widget heading="About us">
                <p>
                  Loren ipsum dolor cons ectetur adipi as scing elit sed do eiusmod tema atp aor
                  incididunt know you labore et dolo rate always ready to welcome you have to know
                  about
                </p>
              </Widget>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Helpful Link  */}
              <Widget heading="Helpful Link">
                <HelpfullLinks />
              </Widget>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Latest Articles  */}
              <Widget heading="Latest Articles">
                <LatestPost />
              </Widget>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Newsletter  */}
              <Widget heading="Subcribe now">
                <p>
                  Loren ipsum dolor cons ectetur adipi as scing elit sed do eiusmod tema atp aor
                </p>
                <Newsletter />
              </Widget>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="footer_bottom_bdr"></div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="copy_right_text">
                @{new Date().getFullYear()} Elizah - Business HTML Template From
                <Link to={'/'}>Zcompany</Link>
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="footer_social">
                <SocialLinks />
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <ScrollToTop />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
