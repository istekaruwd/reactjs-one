import BrandLogo from '../components/brandlogo/BrandLogo';
import GalleryThree from '../components/gallery/GalleryThree';
import SliderThree from '../components/slider/SliderThree';

export default function HomeOne() {
  return (
    <div className="homepage_three">
      <SliderThree />
      <GalleryThree />
      <BrandLogo />
    </div>
  );
}
