import PageHeader from '../components/pageheader/PageHeader';
import GalleryOne from '../components/gallery/GalleryOne';

import pageHeaderBg from '/images/page_bg.jpg';

export default function GalleryPage() {
  return (
    <div className="gallery_page">
      <PageHeader
        title="Our Gallery"
        bgImgUrl={pageHeaderBg}
        items={[{ label: 'home', href: '/' }, { label: 'gallery' }]}
      />
      <GalleryOne />
    </div>
  );
}
