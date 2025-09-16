import { Link } from 'react-router-dom';
import blogData from '../../../data/blog/blog.json';

export default function RecentPost({ limit = 4 }) {
  if (blogData.length === 0) {
    return <p className="recent_post_empty">No recent posts available.</p>;
  }

  return (
    <div className="recent_post">
      {blogData?.slice(0, limit).map((post) => (
        <div key={post.id} className="single_rp">
          <div className="rp_img">
            <img src={post?.thumb} alt={post.title ?? 'Blog image'} loading="lazy" />
          </div>
          <div className="rp_text">
            <Link to={`/blog/${post.id}`}>{post?.title}</Link>
            <span>{post?.publishDate}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
