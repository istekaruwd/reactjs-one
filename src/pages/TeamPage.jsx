import PageHeader from '../components/pageheader/PageHeader';
import TeamAll from '../components/team/TeamAll';

import pageHeaderBg from '/images/page_bg.jpg';

export default function TeamPage() {
  return (
    <div className="gallery_page">
      <PageHeader
        title="Our Team"
        bgImgUrl={pageHeaderBg}
        items={[{ label: 'home', href: '/' }, { label: 'team' }]}
      />
      <TeamAll />
    </div>
  );
}
