import Seo from "../components/Seo.jsx";
import Section from "../components/Section.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { pages, site } from "../data/site.js";

const p = pages.contact;

export default function Contact() {
  return (
    <div className="page">
      <Seo title={p.seo.title} description={p.seo.description} path="/contact" />
      <Section title={p.title} lead={p.lead}>
        <div className="grid grid--2">
          <ContactForm />
          <address className="card">
            <p><strong>Email</strong><br /><a href={`mailto:${site.contact.email}`}>{site.contact.email}</a></p>
            <p><strong>Phone</strong><br />{site.contact.phone}</p>
            <p><strong>Address</strong><br />{site.contact.address}</p>
          </address>
        </div>
      </Section>
    </div>
  );
}
