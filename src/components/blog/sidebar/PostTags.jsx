import { Link } from 'react-router-dom';
import blogData from '../../../data/blog/blog.json';

export default function PostTags() {
  const uniqueTags = [...new Set(blogData.map((post) => post.tag))];

  return (
    <div className="blog_post_tags" aria-label="Blog post tags">
      {uniqueTags.length === 0 ? (
        <div>No tags available</div>
      ) : (
        uniqueTags.map((tag) => (
          <Link key={tag} to="/blog">
            {tag}
          </Link>
        ))
      )}
    </div>
  );
}
