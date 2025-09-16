import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="blog_warp">
        <div className="blog_img">
          <img src={post?.thumb} alt={post?.title ?? 'Blog image'} loading="lazy" />
          <div className="blog_img_icon">
            <Link to={`/blog/${post.id}`}>
              <i className="ei ei-arrow_right" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
        <div className="blog_content_warp">
          <div className="blog_content_meta">
            <span>
              <i className="fa-regular fa-calendar-days" aria-hidden="true"></i>
              {post?.publishDate}
            </span>

            <span>
              <i className="fa-solid fa-tag" aria-hidden="true"></i>
              {post?.tag}
            </span>
            <span>
              <i className="fa-regular fa-comment" aria-hidden="true"></i>
              {post?.commentCount}
            </span>
          </div>
          <div className="blog_content">
            <h5>
              <Link to={`/blog/${post.id}`}>{post?.title}</Link>
            </h5>
            {post?.excerpt && <p>{post.excerpt}</p>}
          </div>

          <Link to={`/blog/${post.id}`} className="blog_btn">
            {post?.btnText ?? 'Read More'}
            <i className="fa-solid fa-angles-right" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
