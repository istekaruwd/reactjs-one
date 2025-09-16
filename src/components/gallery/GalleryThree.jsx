import SectionHeadingTwo from '../sectionheading/SectionHeadingTwo';
import GalleryFilterMasonry from './GalleryFilterMasonry';

export default function GalleryThree() {
  return (
    <section className="works_section_three">
      <div className="container">
        <SectionHeadingTwo
          heading="Enjoy the versatility of"
          subheading="Elizah’s portfolios"
          headingtext="TheGem is a versatile wp theme with modern creative design. Made as an ultimate toolbox of design elements, styles & features, it helps people to build impressive beautiful high-performant websites of any scope in minutes. Without touching a line of code. Creative agencies, businesses of any kind, online stores, freelancers, bloggers etc. – TheGem delivers everything to cover needs of any website. You will never miss anything in this theme. Don’t waste time on coding, enjoy your creativity!"
        />
        <GalleryFilterMasonry />
      </div>
    </section>
  );
}
