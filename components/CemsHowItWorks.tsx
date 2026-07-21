"use client";
import { motion } from "framer-motion";

const steps = [
  { label: "Capture Feedback", desc: "NPS, CSAT, and CES surveys across every channel — email, SMS, web, in-app." },
  { label: "Detect Signal", desc: "AI surfaces sentiment and flags detractors the moment a response comes in." },
  { label: "Assign Ownership", desc: "Workflow automation routes the case to the right owner — automatically." },
  { label: "Close the Loop", desc: "Every case tracked to resolution, not just reported.", done: true },
];

const chips = ["Voice of Customer", "Closed-Loop Feedback", "Customer Journey Analytics", "Workflow Automation", "Real-Time Dashboards"];

export default function CemsHowItWorks() {
  return (
    <section style={{ padding: "84px 0", background: "var(--green-light)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            How It Works
          </p>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14 }}>
            From Feedback to Fixed
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
            Sogolytics turns feedback collection into a continuous action cycle, not a once-a-quarter report.
          </p>
        </div>

        <div style={{ display: "flex", gap: 12, position: "relative", maxWidth: 1040, margin: "0 auto 40px" }} className="flow-row">
          <div style={{ position: "absolute", top: 25, left: "12%", right: "12%", height: 2, background: "var(--border)", zIndex: 0 }} className="flow-line" />
          {steps.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{ flex: 1, textAlign: "center", padding: "0 10px", position: "relative", zIndex: 1 }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: s.done ? "var(--teal)" : "var(--green)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 17,
                  fontWeight: 800,
                  margin: "0 auto 16px",
                }}
              >
                {s.done ? "✓" : i + 1}
              </div>
              <h4 style={{ fontSize: 15.5, fontWeight: 700, marginBottom: 6 }}>{s.label}</h4>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.55, maxWidth: 210, margin: "0 auto" }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12 }}>
          {chips.map((c) => (
            <span key={c} style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid var(--border)", borderRadius: 30, padding: "9px 16px", fontSize: 12.5, fontWeight: 600, color: "var(--text-muted)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth={2.5}>
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {c}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .flow-row{flex-direction:column !important;gap:28px !important;max-width:360px !important;}
          .flow-line{display:none !important;}
        }
      `}</style>
    </section>
  );
}
