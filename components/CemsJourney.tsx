"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MockBar, MockChartArea, MockScreen, MockStatRow, MockTag } from "./MockScreen";

const steps = [
  {
    label: "Feedback left",
    icon: "💬",
    title: "A customer leaves feedback",
    body: "A customer rates support 2/5 and flags slow response time.",
    screen: {
      title: "Customer Feedback Management",
      content: (
        <>
          <MockStatRow stats={[{ num: "2/5", label: "CSAT Score" }, { num: "94%", label: "Response Rate" }, { num: "1", label: "New Response" }]} />
          <MockChartArea label="Open-ended comment">
            <p style={{ fontSize: 12, color: "var(--text-muted)", fontStyle: "italic" }}>&quot;Support took three days to reply. Really disappointing for a paid plan.&quot;</p>
          </MockChartArea>
        </>
      ),
    },
  },
  {
    label: "AI detects issue",
    icon: "🧠",
    title: "AI detects the issue",
    body: "AI scores the comment negative and tags the theme — no analyst required.",
    screen: {
      title: "AI Sentiment Analysis",
      content: (
        <MockChartArea label="Sentiment breakdown — this response">
          <MockBar label="Negative" pct={88} val="88%" color="#E24B4A" labelColor="#A32D2D" />
          <MockBar label="Theme" pct={100} val="↳" color="var(--teal)" />
          <div style={{ marginTop: 8 }}>
            <MockTag label="Support responsiveness" variant="amber" />
          </div>
        </MockChartArea>
      ),
    },
  },
  {
    label: "Alert triggered",
    icon: "🚨",
    title: "An alert triggers instantly",
    body: "No one waits for a weekly report — the alert fires the moment it's scored.",
    screen: {
      title: "Real-Time Alerts",
      content: (
        <MockChartArea label="Live alert feed">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            <MockTag label="Detractor alert ⚠" variant="amber" />
            <MockTag label="Priority: High" variant="blue" />
            <MockTag label="SLA: 4 hours" variant="green" />
          </div>
        </MockChartArea>
      ),
    },
  },
  {
    label: "Owner assigned",
    icon: "👤",
    title: "A manager is assigned",
    body: "Workflow automation routes the case to the right owner, automatically.",
    screen: {
      title: "Workflow Automation",
      content: (
        <MockChartArea label="Case routing">
          <MockBar label="Assigned" pct={100} val="✓" color="#0D6E65" />
          <div style={{ marginTop: 8 }}>
            <MockTag label="Owner: J. Alvarez, CSM" variant="blue" />
          </div>
        </MockChartArea>
      ),
    },
  },
  {
    label: "Action taken",
    icon: "✅",
    title: "The manager takes action",
    body: "The CSM resolves it within the SLA window and logs the outcome.",
    screen: {
      title: "Closed-Loop Case",
      content: (
        <MockChartArea label="Case status">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            <MockTag label="Contacted ✓" variant="green" />
            <MockTag label="Resolved ✓" variant="green" />
            <MockTag label="Resolution time: 3h 12m" variant="blue" />
          </div>
        </MockChartArea>
      ),
    },
  },
  {
    label: "Customer retained",
    icon: "🤝",
    title: "The customer is retained",
    body: "The account renews. Silent churn just became proof the loop works.",
    screen: {
      title: "Retention Outcome",
      content: (
        <MockStatRow stats={[{ num: "✓", label: "Renewed" }, { num: "+41", label: "Follow-up NPS" }, { num: "0", label: "Churn Risk" }]} />
      ),
    },
  },
];

export default function CemsJourney() {
  const [active, setActive] = useState(0);

  return (
    <section id="customer-journey" style={{ padding: "76px 0", background: "var(--bg-soft)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Closed-loop feedback in action
          </p>
          <h2 style={{ fontSize: "clamp(26px,3vw,36px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14 }}>
            From Feedback to Fixed — Follow One Customer&apos;s Journey
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
            Click each step to see it work.
          </p>
        </div>

        {/* Stepper */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, flexWrap: "wrap", marginBottom: 40 }} className="journey-steps">
          {steps.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                borderRadius: 50,
                border: active === i ? "1.5px solid var(--green)" : "1.5px solid var(--border)",
                background: active === i ? "var(--green)" : "#fff",
                color: active === i ? "#fff" : "var(--text)",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: 13,
                fontWeight: 600,
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              <span aria-hidden style={{ fontSize: 15 }}>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}
            className="journey-detail"
          >
            <div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--green)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Step {active + 1} of {steps.length}
              </span>
              <h3 style={{ fontSize: "clamp(20px,2.2vw,26px)", fontWeight: 700, marginBottom: 14, letterSpacing: "-0.01em" }}>
                {steps[active].title}
              </h3>
              <p style={{ fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.7 }}>{steps[active].body}</p>
            </div>
            <MockScreen title={steps[active].screen.title}>{steps[active].screen.content}</MockScreen>
          </motion.div>
        </AnimatePresence>
      </div>
      <style>{`
        @media(max-width:900px){
          .journey-detail{grid-template-columns:1fr !important;gap:28px !important;}
        }
      `}</style>
    </section>
  );
}
