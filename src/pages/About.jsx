import Seo from "../components/Seo.jsx";
import Section from "../components/Section.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { pages } from "../data/site.js";

const p = pages.about;

export default function About() {
  const scope = useReveal();
  return (
    <div ref={scope} className="page">
      <Seo title={p.seo.title} description={p.seo.description} path="/about" />
      <Section title={p.title}>
        <div className="prose">
          {p.body.map((t, i) => <p key={i} data-reveal>{t}</p>)}
        </div>
      </Section>
    </div>
  );
}
