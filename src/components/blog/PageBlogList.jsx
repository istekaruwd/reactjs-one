import { useState } from 'react';
import { Link } from 'react-router-dom';

import blogData from '../../data/blog/blog.json';

export default function PageBlogList() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(blogData.length / postsPerPage);

  return (
    <div className="page_blog_list">
      {currentPosts?.map((post) => (
        <div key={post.id} className="page_blog_Card">
          <div className="page_blog_img">
            <img src={post?.thumb} alt={post?.title ?? 'Blog image'} loading="lazy" />
          </div>
          <div className="page_blog_content_warp">
            <div className="page_blog_content_meta">
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
            <div className="page_blog_content">
              <h5>
                <Link to={`/blog/${post.id}`}>{post?.title}</Link>
              </h5>
              {post?.excerpt && <p>{post.excerpt}</p>}
            </div>
            <div className="page_blog_content_btn">
              <Link to={`/blog/${post.id}`} className="tem_btn tem_btn_border_three">
                {post?.btnText ?? 'Read More'}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="page_blog_pagination">
        {/* Prev Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="pag_btn prev"
          aria-label="Previous page"
        >
          <i className="fa-solid fa-angle-left" aria-hidden="true"></i>
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`pag_btn ${currentPage === i + 1 ? 'active' : ''}`}
            aria-label={`Go to page ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="pag_btn next"
          aria-label="Next page"
        >
          <i className="fa-solid fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
