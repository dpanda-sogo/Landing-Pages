"use client";
import { motion } from "framer-motion";

// PLACEHOLDERS — replace with real 360 / performance / EX quotes from Salesforce or G2.
const quotes = [
  {
    quote:
      "[TESTIMONIAL — 2–3 sentences from an HR or People leader on running a 360 program in Sogolytics: framework flexibility, the lift on admin, or the quality of the reports.]",
    name: "[Name]",
    title: "[Title], [Company]",
    initials: "[I]",
    metric: "[e.g. 92% completion]",
  },
  {
    quote:
      "[TESTIMONIAL — 2–3 sentences from an L&D leader or consulting partner on multi-rater setup, anonymity handling, or development outcomes.]",
    name: "[Name]",
    title: "[Title], [Company]",
    initials: "[I]",
    metric: "[e.g. rolled out in 9 days]",
  },
];

function Stars() {
  return (
    <span style={{ display: "inline-flex", gap: 2 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={15} height={15} viewBox="0 0 24 24" fill="#F5E100">
          <path d="M12 2l3 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.9 21l1.2-6.9-5-4.9 6.9-1L12 2z" />
        </svg>
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section style={{ background: "linear-gradient(160deg,#063b35 0%,#0D6E65 100%)", color: "#fff", padding: "84px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--teal)", marginBottom: 12 }}>
            What customers say
          </p>
          <h2 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, letterSpacing: "-0.025em" }}>
            Trusted by people leaders and L&amp;D teams
          </h2>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 44, flexWrap: "wrap" }}>
          <Stars />
          <span style={{ fontSize: 14, fontWeight: 600, opacity: 0.9 }}>
            4.5/5 average across 1,000+ reviews on G2 &amp; Capterra
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="quote-grid">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: 16,
                padding: 30,
                backdropFilter: "blur(4px)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                <Stars />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    background: "rgba(2,190,204,0.18)",
                    color: "#7df0fb",
                    padding: "5px 12px",
                    borderRadius: 20,
                  }}
                >
                  {q.metric}
                </span>
              </div>
              <p style={{ fontSize: 16.5, fontWeight: 500, lineHeight: 1.6, marginBottom: 24, opacity: 0.96 }}>{q.quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 46,
                    height: 46,
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
      <style>{`@media(max-width:820px){.quote-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
