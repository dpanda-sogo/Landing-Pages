"use client";
import { motion } from "framer-motion";
import { CheckList } from "./ui";

const steps = [
  {
    n: 1,
    title: "Design your framework",
    desc: "Define the competencies you measure and who measures them.",
    items: ["Custom competencies & rating scales", "Rater groups: self, manager, peers, direct reports", "Question logic and weighting"],
  },
  {
    n: 2,
    title: "Launch and manage",
    desc: "Run the study without chasing participants by hand.",
    items: ["Automated invites and reminder sequences", "Configurable anonymity settings", "Real-time completion tracking"],
  },
  {
    n: 3,
    title: "Report and act",
    desc: "Turn ratings into development your managers can run with.",
    items: ["Individual scorecards & team rollups", "Competency gap heat maps", "Development plan triggers"],
  },
];

export default function Walkthrough() {
  return (
    <section style={{ padding: "72px 0", background: "var(--bg-soft)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            How it works
          </p>
          <h2 style={{ fontSize: "clamp(26px,3vw,36px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14 }}>
            What a 360 program looks like in Sogolytics
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.65, maxWidth: 580, margin: "0 auto" }}>
            From framework design to development planning — three stages, one platform.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="step-grid">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: 28,
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: "var(--green)",
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                {s.n}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 18 }}>{s.desc}</p>
              <CheckList items={s.items} />
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.step-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
