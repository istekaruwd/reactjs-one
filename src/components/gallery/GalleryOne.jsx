import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import GalleryFilter from './GalleryFilter';

export default function GalleryOne() {
  return (
    <section className="works_section" id="work">
      <div className="container">
        <SectionHeadingOne heading="Latest project" />
        <GalleryFilter />
      </div>
    </section>
  );
}
