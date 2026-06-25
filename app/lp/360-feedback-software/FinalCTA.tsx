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
    <section id="finalCTA" style={{ padding: "80px 0", textAlign: "center", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 700, marginBottom: 14, letterSpacing: "-0.02em" }}>
            See how Sogolytics runs a complete 360 program
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 540, margin: "0 auto 36px", lineHeight: 1.65 }}>
            We&apos;ll walk you through design, launch, and reporting in 15 minutes. No commitment.
          </p>

          <form
            style={{ maxWidth: 520, margin: "0 auto" }}
            onSubmit={(e) => e.preventDefault()}
          >
            {/* UTM passthrough — populated from the URL by the hero */}
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
            <div style={{ marginBottom: 16 }}>
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

            <p
              style={{
                fontSize: 13,
                color: "var(--text-light)",
                marginTop: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              No commitment
              <span style={{ opacity: 0.4 }}>·</span>
              15-minute walkthrough
              <span style={{ opacity: 0.4 }}>·</span>
              We respond within 1 business day
            </p>
          </form>
        </motion.div>
      </div>
      <style>{`@media(max-width:600px){.cta-form-row{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
