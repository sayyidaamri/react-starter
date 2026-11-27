# Rules for AI agents building on react-starter

This repo is a template. A build prompt will name a **mode** (Clone or Own version) and one or more **reference repos** (static HTML/CSS/JS sites under github.com/sayyidaamri). Follow these rules.

## Always
1. Create a new repo from this template (do not push to `react-starter` itself).
2. Clone every reference repo and read its real markup, CSS and JS before writing code.
3. Keep the structure of this starter:
   - Content and copy → `src/data/site.js` (add keys as needed; no hard-coded copy in components)
   - Design tokens → `src/styles/tokens.css` (copy the reference `:root` variables here first)
   - Global/base styles → `src/styles/base.css`; component styles may live in new CSS files imported by the component
   - Each reference section → one component in `src/components/` or a page in `src/pages/`
   - Animations → hooks in `src/hooks/` using `gsap.context()` / cleanup (see `useReveal.js`); smooth scroll via `useLenis`
   - Modals and drawers → `Overlay.jsx` (`variant="modal" | "drawer"`)
   - SEO per page → `<Seo title description path schema />`
4. Add every route to `App.jsx` and the nav to `site.nav`.
5. Respect `prefers-reduced-motion`. Keep the skip link and focus styles.
6. Log every asset in `ASSETS.md` (file/URL, source, author, licence).
7. Run `npm run build` and fix all errors before pushing. Deploy on Vercel (preset: Vite) if you have access; otherwise push and explain how to import the repo in Vercel.

## Mode: Clone
- Rebuild the reference site 1:1 in React: **same layout, sections, motion, copy, images, video, audio and pages**.
- Copy the reference assets into `public/assets/` with the same file names and keep the same text content.
- Change only the technical structure (components, routes, data file). Do not redesign, rename or rewrite anything.

## Mode: Own version
- Build an original site from the brief. Reuse each reference repo's structure and engine for its role (layout, motion, features, mood), then patch what does not fit.
- Replace everything tied to the reference identity: brand name, copy, logo, images, locations, prices.
- Assets: photos from Unsplash, video from Pexels or Mixkit, sound from Mixkit, Freesound (CC0) or Pixabay. Sound never autoplays and always has a visible toggle.
- Note in the README which files or patterns came from which reference repo.
