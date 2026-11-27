/* All brand, navigation and page content lives here.
   Swap this file (and /public/assets) to rebrand the site; components stay untouched. */

export const site = {
  name: "Starter Studio",
  tagline: "A short line about what the brand does",
  url: "https://example.vercel.app",
  lang: "en",
  locale: "en_US",
  contact: {
    email: "hello@example.com",
    phone: "+62 812 0000 0000",
    whatsapp: "6281200000000",
    address: "Street 1, City",
  },
  cta: { label: "Get in touch", href: "/contact" },
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
  nav: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ],
  seo: {
    title: "Starter Studio — tagline",
    description: "One or two sentences that describe the site for search results.",
    image: "/assets/img/og.jpg",
  },
};

export const pages = {
  home: {
    seo: { title: "Starter Studio — tagline" },
    hero: {
      eyebrow: "Eyebrow text",
      title: "A clear headline that says what you do",
      lead: "Supporting copy in one or two sentences.",
      image: { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=70", alt: "Bright modern office" },
      cta: { label: "Get in touch", href: "/contact" },
    },
    features: [
      { title: "Feature one", text: "Short explanation of the benefit." },
      { title: "Feature two", text: "Short explanation of the benefit." },
      { title: "Feature three", text: "Short explanation of the benefit." },
    ],
    faq: [
      { q: "A common question?", a: "A short, honest answer." },
      { q: "Another question?", a: "Another short answer." },
    ],
  },
  about: {
    seo: { title: "About — Starter Studio", description: "About the team." },
    title: "About us",
    body: ["Paragraph one about the brand.", "Paragraph two about the brand."],
  },
  contact: {
    seo: { title: "Contact — Starter Studio", description: "Get in touch." },
    title: "Let's talk",
    lead: "Tell us about your project. We reply within one working day.",
  },
};
