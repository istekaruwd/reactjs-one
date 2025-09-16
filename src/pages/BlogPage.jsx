import PageBlogList from '../components/blog/PageBlogList';
import Sidebar from '../components/blog/sidebar/Sidebar';
import PageHeader from '../components/pageheader/PageHeader';

import pageHeaderBg from '/images/page_bg.jpg';

export default function BlogPage() {
  return (
    <div className="tem_page blog_page">
      <PageHeader
        title="Latest News"
        bgImgUrl={pageHeaderBg}
        items={[{ label: 'home', href: '/' }, { label: 'blog' }]}
      />
      <div className="blog_page_content_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <PageBlogList />
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
