import { Link } from "react-router-dom";
import { site } from "../data/site.js";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <p className="footer__logo">{site.name}</p>
          <p className="muted">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          {site.nav.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        </nav>
        <div>
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          <a href={`https://wa.me/${site.contact.whatsapp}`} target="_blank" rel="noopener">WhatsApp</a>
          {site.social.map((s) => <a key={s.href} href={s.href} target="_blank" rel="noopener">{s.label}</a>)}
        </div>
      </div>
      <div className="container footer__base muted">© {YEAR} {site.name}</div>
    </footer>
  );
}
