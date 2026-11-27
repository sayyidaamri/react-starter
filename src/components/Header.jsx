import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { site } from "../data/site.js";

/* Sticky header that hides on scroll down and returns on scroll up. */
export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 160 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${hidden && !open ? " is-hidden" : ""}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo" onClick={() => setOpen(false)}>{site.name}</Link>
        <button className="header__toggle" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          <span className="sr-only">Menu</span><span aria-hidden="true">{open ? "Close" : "Menu"}</span>
        </button>
        <nav id="nav" className={`header__nav${open ? " is-open" : ""}`} aria-label="Main">
          {site.nav.map((n) => (
            <NavLink key={n.to} to={n.to} end onClick={() => setOpen(false)}>{n.label}</NavLink>
          ))}
          <Link className="btn btn--small" to={site.cta.href} onClick={() => setOpen(false)}>{site.cta.label}</Link>
        </nav>
      </div>
    </header>
  );
}
