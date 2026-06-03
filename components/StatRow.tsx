"use client";
import { motion } from "framer-motion";

const stats = [
  { num: "500+", label: "Organizations worldwide" },
  { num: "96", label: "Countries served" },
  { num: "10M+", label: "Survey responses processed" },
];

export default function StatRow() {
  return (
    <section style={{ padding: "40px 0", background: "var(--green)", color: "#fff" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24,
            textAlign: "center",
          }}
          className="stat-grid"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div
                style={{
                  fontSize: "clamp(32px,4vw,44px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: 14, opacity: 0.8, marginTop: 6 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.stat-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
