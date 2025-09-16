import funfactsData from '../../data/funfact/funfact.json';
import FunFactCount from './FunFactCount';

export default function FunFactOne() {
  return (
    <section className="funfacts_section">
      <div className="funfacts_section_inr">
        <div className="container">
          <div className="funfacts_content">
            <div className="row align-items-center">
              <div className="col-lg-3 col-sm-6">
                <div className="funfact_heading">
                  <h3>
                    What Makes <br /> us Special ?
                  </h3>
                </div>
              </div>

              {funfactsData?.map((item) => (
                <FunFactCount
                  key={item.id}
                  number={item.counterNumber}
                  title={item.counterText}
                  icon={item.counterIcon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
