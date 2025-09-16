import FunFactOne from '../components/funfact/FunFactOne';
import PageHeader from '../components/pageheader/PageHeader';
import ServicesOne from '../components/services/ServicesOne';
import TestimonialsOne from '../components/testimonials/TestimonialsOne';
import BrandLogo from '../components/brandlogo/BrandLogo';

import pageHeaderBg from '/images/page_bg.jpg';

export default function ServicePage() {
  return (
    <div className="tem_page service_page">
      <PageHeader
        title="Our Service"
        bgImgUrl={pageHeaderBg}
        items={[{ label: 'home', href: '/' }, { label: 'service' }]}
      />
      <ServicesOne />
      <FunFactOne />
      <TestimonialsOne />
      <BrandLogo />
    </div>
  );
}
