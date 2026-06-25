"use client";
import { motion } from "framer-motion";

// PLACEHOLDERS — replace with real 360 / performance / EX quotes from Salesforce or G2.
const quotes = [
  {
    quote:
      "[TESTIMONIAL — 2–3 sentences from an HR or People leader on running a 360 program in Sogolytics: framework flexibility, lift on admin, or quality of the reports.]",
    name: "[Name]",
    title: "[Title], [Company]",
    initials: "[I]",
  },
  {
    quote:
      "[TESTIMONIAL — 2–3 sentences from an L&D leader or consulting partner on multi-rater setup, anonymity handling, or development outcomes.]",
    name: "[Name]",
    title: "[Title], [Company]",
    initials: "[I]",
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: "var(--green)", color: "#fff", padding: "72px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)", fontWeight: 700, letterSpacing: "-0.02em" }}>
            What customers say
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="quote-grid">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 12,
                padding: 28,
              }}
            >
              <div style={{ fontSize: 44, lineHeight: 1, opacity: 0.3, marginBottom: 8, fontFamily: "Georgia, serif" }}>
                &ldquo;
              </div>
              <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.6, marginBottom: 22, opacity: 0.95 }}>
                {q.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    border: "2px solid rgba(255,255,255,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {q.initials}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{q.name}</div>
                  <div style={{ fontSize: 13, opacity: 0.75 }}>{q.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.quote-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
