import { useState } from "react";
import { site } from "../data/site.js";

/* Demo form: validates, then opens WhatsApp with the message (no backend).
   Replace handleSubmit with Formspree, a Vercel Function or a CRM webhook for production. */
export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const next = {};
    if (!data.name?.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email || "")) next.email = "Please enter a valid email.";
    if (!data.message?.trim()) next.message = "Please write a short message.";
    setErrors(next);
    if (Object.keys(next).length) return;
    const text = encodeURIComponent(`Hi ${site.name}, I'm ${data.name} (${data.email}).\n\n${data.message}`);
    window.open(`https://wa.me/${site.contact.whatsapp}?text=${text}`, "_blank", "noopener");
    setSent(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {[["name", "Name", "text"], ["email", "Email", "email"]].map(([n, l, t]) => (
        <label key={n} className={`field${errors[n] ? " is-bad" : ""}`}>
          <span>{l}</span>
          <input name={n} type={t} autoComplete={n} aria-invalid={!!errors[n]} />
          {errors[n] && <small>{errors[n]}</small>}
        </label>
      ))}
      <label className={`field${errors.message ? " is-bad" : ""}`}>
        <span>Message</span>
        <textarea name="message" rows="5" aria-invalid={!!errors.message} />
        {errors.message && <small>{errors.message}</small>}
      </label>
      <button className="btn" type="submit">Send message</button>
      {sent && <p className="muted" role="status">Thanks — WhatsApp opened in a new tab.</p>}
    </form>
  );
}
