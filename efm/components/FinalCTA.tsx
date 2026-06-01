"use client";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section style={{ padding: "80px 0", textAlign: "center", background: "var(--bg-soft)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            style={{
              fontSize: "clamp(26px,3vw,38px)",
              fontWeight: 700,
              marginBottom: 14,
              letterSpacing: "-0.02em",
            }}
          >
            See the platform built for enterprise feedback
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--text-muted)",
              maxWidth: 520,
              margin: "0 auto 36px",
              lineHeight: 1.65,
            }}
          >
            30-minute demo. We&apos;ll show you exactly how it works for your team size, industry, and existing tech stack.
          </p>

          <div style={{ maxWidth: 520, margin: "0 auto" }}>
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}
              className="cta-form-row"
            >
              <input type="text" placeholder="Full name" className="form-input" style={{ background: "#fff" }} />
              <input type="email" placeholder="Work email" className="form-input" style={{ background: "#fff" }} />
            </div>
            <div style={{ marginBottom: 10 }}>
              <select className="form-input form-select" style={{ background: "#fff" }}>
                <option value="" disabled>Company size</option>
                {["1–50 employees","51–200 employees","201–500 employees","501–1,000 employees","1,001–5,000 employees","5,000+ employees"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: 13,
                background: "var(--green)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.background = "var(--green-dark)")}
              onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.background = "var(--green)")}
            >
              Request a Demo →
            </button>
            <p
              style={{
                fontSize: 13,
                color: "var(--text-light)",
                marginTop: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
              }}
            >
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
