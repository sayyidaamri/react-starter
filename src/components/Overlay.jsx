import { useEffect, useRef } from "react";

/* One accessible overlay for both modals and side drawers.
   <Overlay open={open} onClose={close} variant="modal" | "drawer" title="…">…</Overlay> */
export default function Overlay({ open, onClose, title, variant = "modal", children }) {
  const panel = useRef(null);
  const last = useRef(null);

  useEffect(() => {
    if (!open) return;
    last.current = document.activeElement;
    document.documentElement.style.overflow = "hidden";
    const focusables = () => panel.current?.querySelectorAll('a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])') || [];
    setTimeout(() => (focusables()[0] || panel.current)?.focus(), 50);
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const f = [...focusables()]; if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      last.current?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div className={`overlay overlay--${variant}${open ? " is-open" : ""}`} aria-hidden={!open}>
      <div className="overlay__scrim" onClick={onClose} />
      <div className="overlay__panel" role="dialog" aria-modal="true" aria-label={title} ref={panel} tabIndex={-1}>
        <div className="overlay__bar">
          <span className="overlay__title">{title}</span>
          <button className="overlay__close" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="overlay__body">{children}</div>
      </div>
    </div>
  );
}
