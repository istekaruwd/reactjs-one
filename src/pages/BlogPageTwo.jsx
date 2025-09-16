import PageBlogListTwo from '../components/blog/PageBlogListTwo';
import PageHeader from '../components/pageheader/PageHeader';

import pageHeaderBg from '/images/page_bg.jpg';

export default function BlogPageTwo() {
  return (
    <div className="tem_page blog_page">
      <PageHeader
        title="Latest News"
        bgImgUrl={pageHeaderBg}
        items={[{ label: 'home', href: '/' }, { label: 'blog two' }]}
      />
      <div className="blog_page_content_area">
        <div className="container">
          <PageBlogListTwo />
        </div>
      </div>
    </div>
  );
}
