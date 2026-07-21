"use client";
import { motion } from "framer-motion";
import { MockScreen, MockChartArea, MockBar, MockTag } from "@/components/MockScreen";
import { Eyebrow, CheckList } from "./ui";

const points = [
  {
    title: "Role-based access",
    desc: "Managers see their team's results, executives see rollups, HR sees everything — controlled down to the field.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20}>
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "HRIS integration",
    desc: "Pre-populate participant lists from Workday, BambooHR, or Salesforce and push results back automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20}>
        <path d="M4 17V7a2 2 0 012-2h4l2 3h6a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "White-label options",
    desc: "For consulting firms and enterprise L&D teams running branded programs across many business units.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={20} height={20}>
        <rect x={3} y={3} width={7} height={7} rx={1} />
        <rect x={14} y={3} width={7} height={7} rx={1} />
        <rect x={3} y={14} width={7} height={7} rx={1} />
        <rect x={14} y={14} width={7} height={7} rx={1} />
      </svg>
    ),
  },
];

export default function Enterprise() {
  return (
    <section style={{ padding: "84px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <div className="ent-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <Eyebrow>Built for enterprise, not just HR</Eyebrow>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,34px)", fontWeight: 800, lineHeight: 1.18, marginBottom: 24, letterSpacing: "-0.02em" }}>
              Scales across business units, security reviews, and client engagements
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {points.map((p) => (
                <div key={p.title} style={{ display: "flex", gap: 16 }}>
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 11,
                      background: "var(--green-light)",
                      color: "var(--green)",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {p.icon}
                  </span>
                  <div>
                    <h3 style={{ fontSize: 16.5, fontWeight: 700, marginBottom: 4 }}>{p.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <MockScreen title="Program Administration">
              <MockChartArea label="Access by role — active users">
                <MockBar label="HR Admin" pct={20} val="4" />
                <MockBar label="Executive" pct={35} val="9" />
                <MockBar label="Manager" pct={75} val="38" color="var(--teal)" />
                <MockBar label="Participant" pct={95} val="412" />
              </MockChartArea>
              <MockChartArea label="Integrations & status">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <MockTag label="Workday synced ✓" variant="green" />
                  <MockTag label="BambooHR ✓" variant="green" />
                  <MockTag label="Salesforce ✓" variant="green" />
                  <MockTag label="White-label: ON" variant="blue" />
                </div>
              </MockChartArea>
              <CheckList items={["Anonymity thresholds enforced platform-wide", "Full audit trail for procurement review"]} />
            </MockScreen>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.ent-grid{grid-template-columns:1fr !important;gap:36px !important;}}`}</style>
    </section>
  );
}
