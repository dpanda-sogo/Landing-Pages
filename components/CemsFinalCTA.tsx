"use client";
import { motion } from "framer-motion";

export default function CemsFinalCTA() {
  return (
    <div style={{ background: "#092224" }}>
      <section id="finalCTA" style={{ padding: "84px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="final-cta-wrap">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--teal)", marginBottom: 12 }}>Request a Demo</p>
            <h2 style={{ fontSize: "clamp(28px,3.6vw,42px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 18, color: "#fff", lineHeight: 1.2 }}>
              Somewhere in your feedback right now, a customer is telling you how to keep them.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", lineHeight: 1.7, maxWidth: 460 }}>
              The only question is whether anyone acts on it before they leave.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 16, padding: 30, backdropFilter: "blur(8px)" }}>
              <form
                id="finalCtaForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const btn = form.querySelector("button[type=submit]") as HTMLButtonElement;
                  btn.disabled = true;
                  (btn.querySelector("span") as HTMLSpanElement).textContent = "Submitting…";
                  setTimeout(() => {
                    form.innerHTML =
                      '<div style="text-align:center;padding:24px 0"><div style="font-size:40px;margin-bottom:12px">✓</div><h3 style="color:#fff;margin-bottom:8px">You\'re on the calendar!</h3><p style="color:rgba(255,255,255,0.6);font-size:14px">A Sogolytics specialist will reach out within 1 business day.</p></div>';
                  }, 700);
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="cta-form-row">
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.65)" }}>First name *</label>
                    <input type="text" name="first_name" placeholder="Jane" required className="form-input" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.65)" }}>Last name *</label>
                    <input type="text" name="last_name" placeholder="Smith" required className="form-input" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff" }} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }} className="cta-form-row">
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.65)" }}>Work email *</label>
                    <input type="email" name="email" placeholder="jane@company.com" required className="form-input" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.65)" }}>Company *</label>
                    <input type="text" name="company" placeholder="Acme Corp" required className="form-input" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff" }} />
                  </div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.65)", display: "block", marginBottom: 6 }}>Company size</label>
                  <select name="company_size" className="form-input form-select" defaultValue="" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff" }}>
                    <option value="" disabled>Select…</option>
                    {["1–50 employees", "51–200 employees", "201–500 employees", "501–1,000 employees", "1,001–5,000 employees", "5,000+ employees"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    marginTop: 16,
                    background: "#F5E100",
                    color: "#0a1a18",
                    fontSize: 15,
                    fontWeight: 700,
                    padding: "14px 24px",
                    border: "none",
                    borderRadius: 50,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#e6d400")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#F5E100")}
                >
                  <span>Request a Demo</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textAlign: "center", marginTop: 10 }}>By submitting you agree to our Privacy Policy. We never sell your data.</p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)", padding: "32px 24px", textAlign: "center", fontSize: 12, lineHeight: 1.8 }}>
        <div style={{ marginBottom: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://cdn.sogolytics.com/wp-content/uploads/2022/07/sogolytics-wbg.png" alt="Sogolytics" style={{ height: 20, opacity: 0.5, margin: "0 auto" }} />
        </div>
        © 2026 Sogolytics, Inc. All rights reserved.
        <br />
        <a href="https://www.sogolytics.com/privacy-policy/" style={{ color: "rgba(255,255,255,0.4)", marginRight: 10 }}>Privacy Policy</a>
        ·
        <a href="https://www.sogolytics.com/terms-of-service/" style={{ color: "rgba(255,255,255,0.4)", marginLeft: 10 }}>Terms of Service</a>
      </footer>

      <style>{`@media(max-width:980px){.final-cta-wrap{grid-template-columns:1fr !important;gap:36px !important;text-align:center;}} @media(max-width:600px){.cta-form-row{grid-template-columns:1fr !important;}}`}</style>
    </div>
  );
}
