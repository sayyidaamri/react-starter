import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Section from "../components/Section.jsx";
import Overlay from "../components/Overlay.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { site, pages } from "../data/site.js";

const p = pages.home;

export default function Home() {
  const scope = useReveal();
  const [faqOpen, setFaqOpen] = useState(false);
  const schema = {
    "@context": "https://schema.org", "@type": "Organization",
    name: site.name, url: site.url, email: site.contact.email, telephone: site.contact.phone,
  };

  return (
    <div ref={scope}>
      <Seo title={p.seo.title} path="/" schema={schema} />

      <section className="hero">
        <img className="hero__img" src={p.hero.image.src} alt={p.hero.image.alt} width="1600" height="1000" fetchPriority="high" />
        <div className="container hero__inner">
          <p className="eyebrow" data-reveal>{p.hero.eyebrow}</p>
          <h1 data-reveal>{p.hero.title}</h1>
          <p className="lead" data-reveal>{p.hero.lead}</p>
          <div className="row" data-reveal>
            <Link className="btn" to={p.hero.cta.href}>{p.hero.cta.label}</Link>
            <button className="btn btn--ghost" onClick={() => setFaqOpen(true)}>Read the FAQ</button>
          </div>
        </div>
      </section>

      <Section eyebrow="What we do" title="Three reasons to choose us">
        <div className="grid grid--3">
          {p.features.map((f) => (
            <article key={f.title} className="card" data-reveal>
              <h3>{f.title}</h3>
              <p className="muted">{f.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="dark" title="Ready to start?" lead="One clear call to action per section.">
        <Link className="btn" to={site.cta.href}>{site.cta.label}</Link>
      </Section>

      <Overlay open={faqOpen} onClose={() => setFaqOpen(false)} title="FAQ" variant="drawer">
        {p.faq.map((f) => (
          <details key={f.q} className="faq">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </Overlay>
    </div>
  );
}
