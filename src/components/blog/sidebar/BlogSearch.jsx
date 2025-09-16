import { useState } from 'react';

export default function BlogSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search implementation
    if (onSearch && typeof onSearch === 'function') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="blog_search_widget">
      <form className="blog_search_form" onSubmit={handleSearch}>
        <label htmlFor="blog-search" className="visually-hidden">
          Search blog posts
        </label>
        <input
          type="text"
          id="blog-search"
          name="blog-search"
          aria-label="Search blog posts"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="blog_search_input"
          autoComplete="off"
        />
        <button type="submit" className="blog_search_button" aria-label="Search">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  );
}
