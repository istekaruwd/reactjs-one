import { useParams, Link } from 'react-router-dom';
import PageHeader from '../components/pageheader/PageHeader';

import blogData from '../data/blog/blog.json';
import pageHeaderBg from '/images/page_bg.jpg';
import Sidebar from '../components/blog/sidebar/Sidebar';
import CommentForm from '../components/blog/CommentForm';
import CommentList from '../components/blog/CommentList';

export default function SingleBlogPage() {
  const { id } = useParams();
  const post = blogData.find((p) => p.id === parseInt(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div className="tem_page blog_page">
      <PageHeader
        title="Single Blog"
        bgImgUrl={pageHeaderBg}
        items={[
          { label: 'home', href: '/' },
          { label: 'blog', href: '/blog' },
          { label: 'single blog' },
        ]}
      />
      <div className="blog_page_content_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="page_blog_list">
                {/* Single Blog Content */}
                <div className="page_blog_Card">
                  <div className="page_blog_img">
                    <img src={post.thumb} alt={post.title} />
                  </div>
                  <div className="page_blog_content_warp">
                    <div className="page_blog_content_meta">
                      <span>
                        <i className="fa-regular fa-calendar-days" aria-hidden="true"></i>
                        {post.publishDate}
                      </span>
                      <span>
                        <i className="fa-solid fa-tag" aria-hidden="true"></i>
                        {post.tag}
                      </span>
                      <span>
                        <i className="fa-regular fa-comment" aria-hidden="true"></i>
                        {post.commentCount}
                      </span>
                    </div>
                    <div className="page_blog_content">
                      <h5>
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h5>
                      <p>{post.content}</p>
                      <p>{post.contentSecondPart}</p>
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <img src={post.blockQuoteImg} alt={post.title} />
                        </div>
                        <div className="col-lg-6">
                          <div className="single_blog_quote">
                            <i className="fa-solid fa-quote-left" aria-hidden="true"></i>
                            <p>{post.blockQuote}</p>
                            <h4>{post.blockQuoteWriter}</h4>
                            <h5>{post.blockQuoteWriterPosition}</h5>
                          </div>
                        </div>
                      </div>
                      <p>{post.contentSecondPart}</p>
                    </div>
                  </div>
                </div>
                {/* Single Blog Comment Area */}
                <div className="comments_list">
                  <h4 className="comments_list_heading">
                    Comments <span>{post.comments?.length || 0}</span>
                  </h4>
                  <ul className="all_comments">
                    {Array.isArray(post.comments) &&
                      post.comments.map((comment) => (
                        <CommentList key={comment.id} comment={comment} />
                      ))}
                  </ul>
                </div>
                {/* Single Blog Comment From */}
                <CommentForm />
              </div>
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
