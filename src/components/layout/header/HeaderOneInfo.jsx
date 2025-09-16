import contactData from '../../../data/header/headerinfo.json';

export default function HeaderInfo() {
  const contacts = contactData?.contacts || [];

  return (
    <ul className="header_info" aria-label="Contact Information">
      {contacts.length > 0 ? (
        contacts.map((item) => (
          <li key={item.id}>
            <i className={item.icon} aria-hidden="true"></i>
            <span>{item.text}</span>
          </li>
        ))
      ) : (
        <li>No contact information provided</li>
      )}
    </ul>
  );
}
