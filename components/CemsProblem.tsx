"use client";
import { motion } from "framer-motion";

const problems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.6 21.6 0 0 1 5.06-6.06M9.9 4.24A10.94 10.94 0 0 1 12 4c7 0 11 8 11 8a21.6 21.6 0 0 1-2.61 3.87M14.12 14.12a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
    title: "Hidden Churn Signals",
    desc: "96% of unhappy customers never complain — they just leave, and the first sign is a churn number, not a support ticket.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="12" r="3" />
        <path d="M8.5 7.5 15.5 10.5M8.5 16.5 15.5 13.5" strokeDasharray="3 3" />
      </svg>
    ),
    title: "Disconnected Feedback",
    desc: "NPS, CSAT, reviews, and support tickets sitting in separate tools that never talk to each other.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Delayed Action",
    desc: "Insight arrives in a quarterly report — long after the customer already decided to leave.",
  },
];

export default function CemsProblem() {
  return (
    <section id="problem" style={{ padding: "84px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            The Reality In Most CX Programs
          </p>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14 }}>
            You Can&apos;t Fix What You Can&apos;t Act On
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
            Feedback goes out every quarter. Too often, it sits in a dashboard instead of driving a decision.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="problem-grid">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
              style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 14, padding: "32px 28px" }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "var(--green-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, color: "var(--green)" }}>
                {p.icon}
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 10 }}>{p.title}</h3>
              <p style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.65 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.problem-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
