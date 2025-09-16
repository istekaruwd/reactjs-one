import AboutTwo from '../components/about/AboutTwo';
import BlogGridTwo from '../components/blog/BlogGridTwo';
import BrandLogo from '../components/brandlogo/BrandLogo';
import FunFactTwo from '../components/funfact/FunFactTwo';
import GalleryTwo from '../components/gallery/GalleryTwo';
import PricingTableTwo from '../components/pricingtable/PricingTableTwo';
import Promo from '../components/promo/Promo';
import ServicesTwo from '../components/services/ServicesTwo';
import SliderTwo from '../components/slider/SliderTwo';
import TeamTwo from '../components/team/TeamTwo';
import TestimonialsTwo from '../components/testimonials/TestimonialsTwo';
import VideoPopupTwo from '../components/videopopup/VideoPopupTwo';

export default function HomeTwo() {
  return (
    <div className="homepage_two">
      <SliderTwo />
      <Promo />
      <AboutTwo />
      <ServicesTwo />
      <VideoPopupTwo />
      <GalleryTwo />
      <TeamTwo />
      <FunFactTwo />
      <PricingTableTwo />
      <TestimonialsTwo />
      <BlogGridTwo />
      <BrandLogo />
    </div>
  );
}
