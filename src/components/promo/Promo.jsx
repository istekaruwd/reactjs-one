import promoData from '../../data/promo/promo.json';

export default function Promo() {
  if (!promoData || promoData.length === 0) {
    return (
      <section className="promo_area">
        <div className="container">
          <p className="promo_section_empty">No promo items available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="promo_area">
      <div className="promo_area_inr">
        <div className="container">
          <div className="row g-3 g-md-0 align-items-center">
            {promoData.map((item) => (
              <div key={item.id} className="col-md-4">
                <div
                  className="single_promo_box text-center"
                  style={{
                    backgroundImage: `url(${item.bgImg})`,
                  }}
                >
                  <i className={item.icon} aria-hidden="true"></i>
                  <h4>{item.title}</h4>
                  {item.text && <p>{item.text}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
