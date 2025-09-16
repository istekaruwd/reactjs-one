import SectionHeadingOne from '../sectionheading/SectionHeadingOne';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <section className="contact_section" id="contact">
      <div className="container">
        <SectionHeadingOne heading="contact us" />
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
