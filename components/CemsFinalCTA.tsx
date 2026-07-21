"use client";
import { motion } from "framer-motion";

export default function CemsFinalCTA() {
  return (
    <section id="finalCTA" style={{ padding: "84px 0", textAlign: "center", background: "linear-gradient(135deg, #061a17 0%, #0a2e29 60%, #0d3d37 100%)", color: "#fff" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 style={{ fontSize: "clamp(26px,3.2vw,40px)", fontWeight: 700, marginBottom: 16, letterSpacing: "-0.02em", lineHeight: 1.25, maxWidth: 680, margin: "0 auto 16px" }}>
            Somewhere in your feedback right now, a customer is telling you exactly how to keep them.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", maxWidth: 460, margin: "0 auto 36px", lineHeight: 1.6 }}>
            The only question is whether anyone acts on it before they leave.
          </p>

          <div style={{ maxWidth: 520, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }} className="cta-form-row">
              <input type="text" placeholder="Full name" className="form-input" style={{ background: "rgba(255,255,255,0.95)" }} />
              <input type="email" placeholder="Work email" className="form-input" style={{ background: "rgba(255,255,255,0.95)" }} />
            </div>
            <div style={{ marginBottom: 10 }}>
              <select className="form-input form-select" style={{ background: "rgba(255,255,255,0.95)" }} defaultValue="">
                <option value="" disabled>Company size</option>
                {["1–50 employees", "51–200 employees", "201–500 employees", "501–1,000 employees", "1,001–5,000 employees", "5,000+ employees"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                background: "#F5E100",
                color: "#0a1a18",
                fontWeight: 700,
                borderRadius: 50,
                padding: "14px 28px 14px 8px",
                border: "none",
                cursor: "pointer",
                fontSize: 15,
                fontFamily: "inherit",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#e6d400")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#F5E100")}
            >
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "#0a1a18",
                  color: "#F5E100",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                →
              </span>
              Request a Demo
            </button>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
              No credit card required
              <span style={{ opacity: 0.4 }}>·</span>
              No commitment
              <span style={{ opacity: 0.4 }}>·</span>
              We respond within 1 business day
            </p>
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:600px){.cta-form-row{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
