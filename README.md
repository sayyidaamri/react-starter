# react-starter

Production starter for React marketing sites. Use it as a **GitHub template**, then port a reference design into it (see `AGENTS.md` for the Clone and Own version rules).

## Stack

- [Vite](https://vite.dev) + React 19 + React Router 7
- [GSAP](https://gsap.com) (ScrollTrigger) + [Lenis](https://lenis.darkroom.engineering) smooth scroll, both disabled under `prefers-reduced-motion`
- Plain CSS with design tokens (no CSS framework)
- Vercel-ready: `vercel.json` with SPA rewrites and long-cache headers for `/assets`

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run preview
```

## Structure

```
src/
  data/site.js          Brand, contact, nav, SEO and all page copy
  styles/tokens.css     Colours, fonts, spacing (swap first when porting)
  styles/base.css       Layout, header, hero, sections, form, overlay, footer
  components/
    Header.jsx          Sticky header, hides on scroll down, mobile menu
    Footer.jsx
    Section.jsx         Section wrapper with eyebrow/title/lead
    Overlay.jsx         Accessible modal or drawer (focus trap, Esc, scroll lock)
    ContactForm.jsx     Validated form → WhatsApp (swap for a real endpoint)
    Seo.jsx             Title, description, canonical, Open Graph, JSON-LD
  hooks/
    useLenis.js         Lenis + GSAP ticker + ScrollTrigger sync
    useReveal.js        Example scroll animation with automatic cleanup
    useReducedMotion.js
  pages/                Home, About, Contact, NotFound
public/                 favicon, robots.txt, /assets for images, video, audio
```

## Rebrand checklist

1. Edit `src/data/site.js` (name, URL, contact, nav, copy, SEO).
2. Edit `src/styles/tokens.css` (colours, fonts) and the font link in `index.html`.
3. Put images, video and audio in `public/assets/` and add `public/assets/img/og.jpg` (1200×630).
4. Log assets in `ASSETS.md`.
5. Import the repo in Vercel (preset: Vite).

## Tech suggestions for a real production site

- **Content**: move `site.js` to a headless CMS (Sanity, Storyblok, or WordPress REST/GraphQL) when the client needs to edit copy.
- **SEO**: if pages must be indexable without JavaScript, move to a framework with pre-rendering (Next.js, Astro with React islands, or React Router framework mode with prerender).
- **Forms**: Formspree, Resend via a Vercel Function, or a CRM webhook instead of the WhatsApp demo.
- **Analytics**: Vercel Web Analytics or Plausible; add consent handling if tracking cookies are used.
- **Images**: serve WebP/AVIF at fixed widths; for many images use an image CDN.
