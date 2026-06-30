"use client";
import { motion } from "framer-motion";
import { CheckList, SectionHead } from "./ui";

const steps = [
  {
    n: 1,
    label: "Design",
    title: "Build your framework",
    desc: "Define what you measure and who measures it.",
    items: ["Custom competencies & rating scales", "Rater groups: self, manager, peers, reports", "Question logic and weighting"],
  },
  {
    n: 2,
    label: "Launch",
    title: "Run it on autopilot",
    desc: "Invite, remind, and track without manual work.",
    items: ["Automated invites & reminder sequences", "Configurable anonymity settings", "Real-time completion tracking"],
  },
  {
    n: 3,
    label: "Act",
    title: "Turn results into growth",
    desc: "Move from ratings to development plans.",
    items: ["Individual scorecards & team rollups", "Competency gap heat maps", "Development plan triggers"],
  },
];

export default function Walkthrough() {
  return (
    <section id="how" style={{ padding: "84px 0", background: "var(--bg-soft)", scrollMarginTop: 70 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <SectionHead
          eyebrow="How it works"
          title="What a 360 program looks like in Sogolytics"
          sub="Three stages, one platform — from framework design to development planning."
        />

        <div style={{ position: "relative" }}>
          {/* connecting line */}
          <div
            aria-hidden
            className="wt-line"
            style={{
              position: "absolute",
              top: 28,
              left: "16%",
              right: "16%",
              height: 2,
              background: "linear-gradient(90deg,var(--green),var(--teal))",
              opacity: 0.4,
            }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, position: "relative" }} className="wt-grid">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.45 }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,var(--green),#0f7a6f)",
                    color: "#fff",
                    fontSize: 22,
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 18px",
                    boxShadow: "0 8px 24px rgba(13,110,101,0.3)",
                    border: "4px solid var(--bg-soft)",
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    padding: 26,
                    textAlign: "left",
                    height: "100%",
                  }}
                >
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--teal)", marginBottom: 6 }}>
                    {s.label}
                  </p>
                  <h3 style={{ fontSize: 19, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.01em" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 18 }}>{s.desc}</p>
                  <CheckList items={s.items} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:820px){
          .wt-grid{grid-template-columns:1fr !important;gap:28px !important;}
          .wt-line{display:none !important;}
        }
      `}</style>
    </section>
  );
}
