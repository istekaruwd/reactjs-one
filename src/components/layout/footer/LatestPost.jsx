import { Link } from 'react-router-dom';
import blogData from '../../../data/blog/blog.json';

export default function LatestPost({ limit = 3 }) {
  if (blogData.length === 0) {
    return <p className="latest_posts_empty">No recent posts available.</p>;
  }

  return (
    <ul className="latest_posts" aria-label="Latest blog posts">
      {blogData.slice(0, limit).map((post) => (
        <li key={post.id}>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
