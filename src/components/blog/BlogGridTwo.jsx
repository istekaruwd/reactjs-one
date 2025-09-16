import blogData from '../../data/blog/blog.json';
import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import BlogCard from './BlogCard';

export default function BlogGridTwo() {
  const recentPosts = blogData.slice(0, 3); // Show 3 latest blogs

  return (
    <div className="blog_section" id="blogTwo">
      <SectionHeadingOne heading="Latest News" subheading="Our blogs" />
      <div className="container">
        <div className="row">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
