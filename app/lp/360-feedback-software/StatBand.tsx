"use client";
import { motion } from "framer-motion";

const stats = [
  { num: "4", sub: "rater groups", note: "self · manager · peers · reports" },
  { num: "50+", sub: "languages", note: "for global rollouts" },
  { num: "∞", sub: "competencies", note: "fully customizable frameworks" },
  { num: "4", sub: "compliance certs", note: "SOC 2 · HIPAA · GDPR · ISO" },
];

export default function StatBand() {
  return (
    <section
      style={{
        padding: "48px 0",
        background: "linear-gradient(120deg,#0a5a52 0%,#0D6E65 55%,#0f7a6f 100%)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 0%, rgba(2,190,204,0.25), transparent 45%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }} className="statband-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.sub}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              style={{ textAlign: "center" }}
            >
              <div style={{ fontSize: "clamp(34px,4vw,48px)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em" }}>
                {s.num}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, marginTop: 8 }}>{s.sub}</div>
              <div style={{ fontSize: 12, opacity: 0.78, marginTop: 4 }}>{s.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:760px){.statband-grid{grid-template-columns:1fr 1fr !important;gap:32px 16px !important;}}`}</style>
    </section>
  );
}
