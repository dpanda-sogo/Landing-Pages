"use client";
import { motion } from "framer-motion";

const outcomes = [
  { stat: "↓ Churn", label: "Reduce customer churn", desc: "Resolve detractor feedback within hours instead of letting it go unanswered for weeks." },
  { stat: "↑ NPS", label: "Improve Net Promoter Score", desc: "Closed-loop follow-up with detractors consistently lifts NPS faster than survey changes alone." },
  { stat: "↑ CSAT", label: "Increase satisfaction scores", desc: "Customers rate the experience higher when they see their feedback lead to a real response." },
  { stat: "↓ Effort", label: "Reduce manual reporting", desc: "Always-on executive dashboards replace hours of manual spreadsheet building every month." },
  { stat: "↑ Visibility", label: "Improve leadership visibility", desc: "Every team, region, and program rolls up into one view — no more waiting on a quarterly deck." },
  { stat: "↑ CLV", label: "Increase customer lifetime value", desc: "Accounts enrolled in a proactive, closed-loop program renew longer and expand more." },
];

export default function CemsOutcomes() {
  return (
    <section style={{ padding: "76px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Business outcomes, not just dashboards
          </p>
          <h2 style={{ fontSize: "clamp(26px,3vw,36px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14 }}>
            Measurable Impact, Not Just Metrics
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.65, maxWidth: 620, margin: "0 auto" }}>
            Every capability in Sogolytics exists to move one of these numbers. Here&apos;s what customer experience management software should actually deliver.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="outcome-grid">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              style={{ background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: 12, padding: "26px 22px" }}
            >
              <div style={{ fontSize: 22, fontWeight: 700, color: "var(--green)", marginBottom: 12 }}>{o.stat}</div>
              <h3 style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 8 }}>{o.label}</h3>
              <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.6 }}>{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.outcome-grid{grid-template-columns:1fr 1fr !important;}}
        @media(max-width:600px){.outcome-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
}
