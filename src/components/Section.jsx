/* Generic section wrapper: consistent spacing, optional eyebrow + title, reveal-ready children. */
export default function Section({ id, eyebrow, title, lead, tone, children, className = "" }) {
  return (
    <section id={id} className={`section${tone ? ` section--${tone}` : ""} ${className}`.trim()}>
      <div className="container">
        {(eyebrow || title || lead) && (
          <header className="section__head" data-reveal>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {lead && <p className="lead">{lead}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
