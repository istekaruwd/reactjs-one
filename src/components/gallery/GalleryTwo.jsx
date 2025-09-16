import { Link } from 'react-router-dom';

import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import GalleryFilter from './GalleryFilter';

export default function GalleryTwo() {
  return (
    <section className="works_section_two" id="workTwo">
      <div className="container-fluid works_inr_two">
        <SectionHeadingOne heading="Latest project" />
        <GalleryFilter />
        <div className="works_section_two_btn">
          <Link to="/gallery" className="tem_btn tem_btn_border_three">
            More Work
          </Link>
        </div>
      </div>
    </section>
  );
}
