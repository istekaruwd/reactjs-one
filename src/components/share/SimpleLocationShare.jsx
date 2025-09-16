import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SimpleLocationShare({ title = 'Check out this location' }) {
  const [isCopied, setIsCopied] = useState(false);

  // Get current page URL
  const currentUrl = window.location.href;

  // Copy URL to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  // Share on Facebook
  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`;
    window.open(facebookUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  // Share on Twitter/X
  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  // Share on LinkedIn
  const shareToLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      currentUrl
    )}`;
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  // Share on Pinterest
  const shareToPinterest = () => {
    const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      currentUrl
    )}&description=${encodeURIComponent(title)}`;
    window.open(pinterestUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  // Share on Tumblr
  const shareToTumblr = () => {
    const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodeURIComponent(
      currentUrl
    )}&title=${encodeURIComponent(title)}`;
    window.open(tumblrUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
  };

  return (
    <div className="simple_location_share">
      <h4 className="simple_location_title">Share this project</h4>

      <div className="simple_location_buttons">
        <button
          onClick={shareToFacebook}
          className="simple_location_btn"
          aria-label="Share on Facebook"
        >
          <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
        </button>

        <button onClick={shareToTwitter} className="simple_location_btn" aria-label="Share on X">
          <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
        </button>

        <button
          onClick={shareToLinkedIn}
          className="simple_location_btn"
          aria-label="Share on LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
        </button>

        <button
          onClick={shareToPinterest}
          className="simple_location_btn"
          aria-label="Share on Pinterest"
        >
          <i className="fa-brands fa-pinterest-p" aria-hidden="true"></i>
        </button>

        <button
          onClick={shareToTumblr}
          className="simple_location_btn"
          aria-label="Share on Tumblr"
        >
          <i className="fa-brands fa-tumblr" aria-hidden="true"></i>
        </button>

        <button
          onClick={copyToClipboard}
          className={`simple_location_btn ${isCopied ? 'copied' : ''}`}
          aria-label="Copy link"
        >
          <i className={isCopied ? 'fa-solid fa-check' : 'fa-solid fa-link'} aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

// PropTypes
SimpleLocationShare.propTypes = {
  title: PropTypes.string,
};

// Default props
SimpleLocationShare.defaultProps = {
  title: 'Check out this location',
};
