import AboutOne from '../components/about/AboutOne';
import BlogGrid from '../components/blog/BlogGrid';
import BrandLogo from '../components/brandlogo/BrandLogo';
import Contact from '../components/contact/Contact';
import FunFactOne from '../components/funfact/FunFactOne';
import GalleryOne from '../components/gallery/GalleryOne';
import PricingTableOne from '../components/pricingtable/PricingTableOne';
import ServicesOne from '../components/services/ServicesOne';
import SliderFour from '../components/slider/SliderFour';
import TeamOne from '../components/team/TeamOne';
import TestimonialsOne from '../components/testimonials/TestimonialsOne';
import VideoPopup from '../components/videopopup/VideoPopup';
import WhyChooseUs from '../components/whychooseus/WhyChooseUs';

export default function HomeOnePage() {
  return (
    <div className="homepage_onepage">
      <SliderFour />
      <AboutOne />
      <ServicesOne />
      <WhyChooseUs />
      <VideoPopup />
      <FunFactOne />
      <GalleryOne />
      <TeamOne />
      <PricingTableOne />
      <BlogGrid />
      <TestimonialsOne />
      <BrandLogo />
      <Contact />
    </div>
  );
}
