import infoData from '../../data/contactinfo/contactinfo.json';

export default function ContactInfo() {
  if (infoData.length === 0) {
    return <p className="contact_info_empty">No recent posts available.</p>;
  }

  return (
    <div className="row">
      {infoData?.map((item) => (
        <div className="col-md-4" key={item.id}>
          <div className="contact_info_item">
            <div className="contact_info_icon_box">
              <i className={item?.icon} aria-hidden="true"></i>
            </div>
            <div className="contact_info_content">
              <span className="contact_info_heading">{item?.heading}</span>
              <span className="contact_info_text">{item?.info}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
