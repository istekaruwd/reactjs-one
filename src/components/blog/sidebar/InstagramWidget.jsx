import { useState, useEffect } from 'react';

// Import your Instagram data (adjust the path as needed)
import instagramData from '../../../data/instagram/instagram.json';

export default function InstagramWidget({ limit = 6 }) {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="instagram_widget">
      <div className="row g-2 instagram_grid">
        {isLoading
          ? // Loading state
            Array.from({ length: limit }).map((_, index) => (
              <div key={index} className="instagram_item loading">
                <div className="image_placeholder"></div>
              </div>
            ))
          : // Loaded state
            instagramData.slice(0, limit).map((post) => (
              <div key={post.id} className="col-4 instagram_item">
                <a
                  href={post?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram post: ${post.alt}`}
                >
                  <img src={post?.image} alt={post.alt ?? 'Instagram image'} loading="lazy" />
                </a>
              </div>
            ))}
      </div>
    </div>
  );
}
