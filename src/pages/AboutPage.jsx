import AboutOne from '../components/about/AboutOne';
import PageHeader from '../components/pageheader/PageHeader';
import Skill from '../components/skill/Skill';
import TeamOne from '../components/team/TeamOne';

import pageHeaderBg from '/images/page_bg.jpg';

export default function AboutPage() {
  return (
    <div className="about_page">
      <PageHeader
        title="About Us"
        bgImgUrl={pageHeaderBg}
        items={[{ label: 'home', href: '/' }, { label: 'about' }]}
      />
      <AboutOne />
      <Skill />
      <TeamOne />
    </div>
  );
}
