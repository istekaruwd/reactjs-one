import funfactsData from '../../data/funfact/funfact.json';
import FunFactCount from './FunFactCount';
import funfactTwoBg from '/images/confacts.jpg';

export default function FunFactTwo() {
  return (
    <section
      className="funfacts_section_two"
      style={{
        backgroundImage: `url(${funfactTwoBg})`,
      }}
      aria-label="Company fun facts and achievements"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-sm-6">
            <div className="funfact_heading_two">
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
    </section>
  );
}
