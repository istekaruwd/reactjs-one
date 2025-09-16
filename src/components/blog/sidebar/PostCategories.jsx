import { Link } from 'react-router-dom';
import blogData from '../../../data/blog/blog.json';

export default function PostCategories() {
  const uniqueCategories = [...new Set(blogData.map((post) => post.category))];

  return (
    <ul className="blog_post_categories" aria-label="Blog post categories">
      {uniqueCategories.length === 0 ? (
        <li className="single_bpc">No categories available</li>
      ) : (
        uniqueCategories.map((category) => (
          <li key={category} className="single_bpc">
            <Link to="/blog">{category}</Link>
          </li>
        ))
      )}
    </ul>
  );
}
