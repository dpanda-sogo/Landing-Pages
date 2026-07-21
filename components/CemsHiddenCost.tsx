"use client";
import { motion } from "framer-motion";

const leaks = [
  {
    stat: "96%",
    label: "of unhappy customers never complain",
    detail: "They just leave. The first sign is a churn number, not a ticket.",
  },
  {
    stat: "1 in 26",
    label: "detractors are ever contacted",
    detail: "The rest sit in a report nobody opens in time.",
  },
  {
    stat: "6–7x",
    label: "costlier to win a customer than keep one",
    detail: "Every unresolved complaint is a cost you pay later — at a markup.",
  },
];

export default function CemsHiddenCost() {
  return (
    <section style={{ padding: "76px 0", background: "#0a1614", color: "#fff" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: 720, marginBottom: 48 }}
        >
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--teal)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
            The hidden cost of customer churn
          </p>
          <h2 style={{ fontSize: "clamp(26px,3vw,36px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
            The Real Cost of Feedback Nobody Acts On
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.75)" }}>
            You&apos;re not short on data. You&apos;re short on action — and that&apos;s revenue leakage happening in plain sight.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="leak-grid">
          {leaks.map((l, i) => (
            <motion.div
              key={l.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "28px 24px" }}
            >
              <div style={{ fontSize: "clamp(30px,3.4vw,40px)", fontWeight: 700, color: "var(--teal)", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 12 }}>
                {l.stat}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, lineHeight: 1.4 }}>{l.label}</div>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.65 }}>{l.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 20 }}
        >
          Industry benchmarks, cited for illustration.
        </motion.p>
      </div>
      <style>{`@media(max-width:900px){.leak-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
