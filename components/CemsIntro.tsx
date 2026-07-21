"use client";
import { motion } from "framer-motion";

const pillars = [
  { label: "Voice of Customer", desc: "Every channel — survey, review, support, social — unified into one signal." },
  { label: "AI Analytics", desc: "Sentiment, theme, and intent detection across every open-ended response." },
  { label: "Journey Analytics", desc: "See where experience breaks down across the full customer lifecycle." },
  { label: "Closed-Loop Feedback", desc: "Every flagged response gets an owner, a deadline, and a resolution." },
  { label: "Workflow Automation", desc: "Alerts and case assignment happen automatically — no manual triage." },
];

export default function CemsIntro() {
  return (
    <section style={{ padding: "76px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="intro-grid">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
              Introducing the Sogolytics approach
            </p>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,34px)", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.02em", marginBottom: 18 }}>
              Most Customer Experience Platforms Tell You What Happened.
              <br />
              Sogolytics Helps You Decide What Happens Next.
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 24 }}>
              A dashboard that reports a dropping NPS score isn&apos;t a solution — it&apos;s a symptom. Sogolytics was built as a <strong>Voice of Customer platform</strong> with action at the center: AI reads every response, journey analytics show where friction lives, and closed-loop workflows make sure the right person acts before the customer decides to leave.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {pillars.map((p) => (
                <div key={p.label} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "var(--green-light)",
                      color: "var(--green)",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 1,
                    }}
                  >
                    <svg width={11} height={9} viewBox="0 0 10 8" fill="none">
                      <path d="M1 4l3 3 5-6" stroke="#0D6E65" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: 14.5 }}>{p.label}</span>
                    <span style={{ fontSize: 14.5, color: "var(--text-muted)" }}> — {p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{
              background: "linear-gradient(160deg, #061a17 0%, #0d3d37 100%)",
              borderRadius: 16,
              padding: "36px 32px",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 18 }}>
              Reports vs. resolutions
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "16px 18px" }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>Legacy CX reporting</span>
                <span style={{ fontSize: 22, fontWeight: 700 }}>&quot;NPS dropped 6 pts&quot;</span>
              </div>
              <div style={{ textAlign: "center", color: "var(--teal)", fontSize: 20 }}>↓</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(2,190,204,0.14)", border: "1px solid rgba(2,190,204,0.3)", borderRadius: 10, padding: "16px 18px" }}>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.85)" }}>Sogolytics</span>
                <span style={{ fontSize: 18, fontWeight: 700, color: "var(--teal)", textAlign: "right" }}>&quot;18 detractors flagged, owners assigned, 14 resolved today&quot;</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.intro-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
