import WidgetTwo from '../../ui/widget/WidgetTwo';
import BlogSearch from './BlogSearch';
import InstagramWidget from './InstagramWidget';
import PostCategories from './PostCategories';
import PostTags from './PostTags';
import RecentPost from './RecentPost';

export default function Sidebar() {
  return (
    <aside className="blog_page_sidebar">
      {/* Blog Search */}
      <BlogSearch />

      {/* Recent Post */}
      <WidgetTwo heading="Recent Post">
        <RecentPost limit={4} />
      </WidgetTwo>

      {/* Post Categories */}
      <WidgetTwo heading="Post Categories">
        <PostCategories />
      </WidgetTwo>

      {/* Instragran Feed */}

      <WidgetTwo heading="Instagram">
        <InstagramWidget limit={6} />
      </WidgetTwo>

      {/* Post Tags */}
      <WidgetTwo heading="Top Tags">
        <PostTags />
      </WidgetTwo>
    </aside>
  );
}
