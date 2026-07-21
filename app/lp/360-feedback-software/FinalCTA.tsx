"use client";
import { motion } from "framer-motion";
import { YellowButton } from "./ui";

const companySizes = [
  "1–50 employees",
  "51–200 employees",
  "201–500 employees",
  "501–1,000 employees",
  "1,001–5,000 employees",
  "5,000+ employees",
];

export default function FinalCTA() {
  return (
    <section
      id="finalCTA"
      style={{
        padding: "90px 0",
        background: "radial-gradient(900px 460px at 18% 0%, #115049 0%, transparent 60%), linear-gradient(135deg,#04130f 0%,#0a2e29 60%,#0d3d37 100%)",
        color: "#fff",
        scrollMarginTop: 70,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage: "radial-gradient(700px 400px at 80% 100%, #000, transparent 75%)",
          WebkitMaskImage: "radial-gradient(700px 400px at 80% 100%, #000, transparent 75%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <div className="cta-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--teal)", marginBottom: 14 }}>
              Book your walkthrough
            </p>
            <h2 style={{ fontSize: "clamp(28px,3.4vw,42px)", fontWeight: 800, marginBottom: 16, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              See how Sogolytics runs a complete 360 program
            </h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.82)", lineHeight: 1.65, marginBottom: 28, maxWidth: 440 }}>
              We&apos;ll walk you through design, launch, and reporting in 15 minutes. No commitment.
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {["A live look at competency gap analysis", "How anonymity thresholds are configured", "A scoping conversation for your rollout"].map((t) => (
                <li key={t} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "rgba(255,255,255,0.9)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#02BECC" strokeWidth={2.5} width={16} height={16}>
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: 30,
              boxShadow: "0 30px 70px rgba(0,0,0,0.35)",
            }}
          >
            <h3 style={{ color: "var(--text)", fontSize: 19, fontWeight: 800, marginBottom: 4 }}>Request your demo</h3>
            <p style={{ color: "var(--text-muted)", fontSize: 13.5, marginBottom: 20 }}>We respond within 1 business day.</p>

            <form onSubmit={(e) => e.preventDefault()}>
              {["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].map((id) => (
                <input key={id} type="hidden" id={id} name={id} />
              ))}

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }} className="cta-form-row">
                <input type="text" name="first_name" placeholder="First name" className="form-input" required />
                <input type="text" name="last_name" placeholder="Last name" className="form-input" required />
              </div>
              <div style={{ marginBottom: 10 }}>
                <input type="email" name="work_email" placeholder="Work email" className="form-input" required />
              </div>
              <div style={{ marginBottom: 10 }}>
                <input type="text" name="company" placeholder="Company" className="form-input" required />
              </div>
              <div style={{ marginBottom: 18 }}>
                <select name="company_size" className="form-input form-select" defaultValue="" required>
                  <option value="" disabled>
                    Company size
                  </option>
                  {companySizes.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>

              <YellowButton type="submit" full>
                Request Your Demo
              </YellowButton>

              <p style={{ fontSize: 12.5, color: "var(--text-light)", marginTop: 14, textAlign: "center" }}>
                No commitment · 15-minute walkthrough
              </p>
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media(max-width:820px){.cta-grid{grid-template-columns:1fr !important;gap:36px !important;}}
        @media(max-width:480px){.cta-form-row{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
}
