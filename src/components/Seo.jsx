import { useEffect } from "react";
import { site } from "../data/site.js";

/* Sets title, description, canonical, Open Graph and optional JSON-LD per page.
   React 19 hoists <title>/<meta> rendered in components, but this keeps one predictable place. */
export default function Seo({ title, description, image, path = "", schema }) {
  const t = title || site.seo.title;
  const d = description || site.seo.description;
  const img = new URL(image || site.seo.image, site.url).href;
  const url = new URL(path, site.url).href;

  useEffect(() => {
    document.title = t;
    const set = (sel, attr, key, val) => {
      let el = document.head.querySelector(sel);
      if (!el) { el = document.createElement(sel.startsWith("link") ? "link" : "meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute(sel.startsWith("link") ? "href" : "content", val);
    };
    set('meta[name="description"]', "name", "description", d);
    set('meta[property="og:title"]', "property", "og:title", t);
    set('meta[property="og:description"]', "property", "og:description", d);
    set('meta[property="og:image"]', "property", "og:image", img);
    set('meta[property="og:url"]', "property", "og:url", url);
    set('link[rel="canonical"]', "rel", "canonical", url);

    let ld = document.getElementById("ld-json");
    if (schema) {
      if (!ld) { ld = document.createElement("script"); ld.type = "application/ld+json"; ld.id = "ld-json"; document.head.appendChild(ld); }
      ld.textContent = JSON.stringify(schema);
    } else if (ld) ld.remove();
  }, [t, d, img, url, schema]);

  return null;
}
