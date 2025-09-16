import Contact from '../components/contact/Contact';
import PageHeader from '../components/pageheader/PageHeader';

import pageHeaderBg from '/images/page_bg.jpg';

export default function ContactPage() {
  return (
    <div className="gallery_page">
      <PageHeader
        title="Contact Us"
        bgImgUrl={pageHeaderBg}
        items={[{ label: 'home', href: '/' }, { label: 'contact' }]}
      />
      <Contact />
    </div>
  );
}
