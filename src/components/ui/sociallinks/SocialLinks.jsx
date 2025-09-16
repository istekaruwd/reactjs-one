import socialData from '../../../data/sociallinks/sociallinks.json';

export default function SocialLinks() {
  if (!socialData?.length) {
    return <p className="social_links_empty">No social links available.</p>;
  }

  return (
    <div className="social_icon">
      {socialData.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${item.name} page`}
        >
          <i className={item.icon} aria-hidden="true"></i>
        </a>
      ))}
    </div>
  );
}
