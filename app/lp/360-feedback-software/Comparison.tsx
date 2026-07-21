"use client";
import { motion } from "framer-motion";
import { SectionHead } from "./ui";

const formItems = [
  "One generic questionnaire for everyone",
  "Manual invites — and chasing people for responses",
  "Average scores dumped into a spreadsheet",
  "Anonymity you just hope is working",
  "A static PDF nobody opens twice",
];

const studyItems = [
  "Custom competencies, scales & branching logic per program",
  "Automated routing, reminder sequences & live completion tracking",
  "Gap analysis, group benchmarks & NLP on every open-text answer",
  "Configurable anonymity with automatic suppression thresholds",
  "Individual scorecards & development plans managers actually use",
];

function Item({ children, ok, dark = false }: { children: React.ReactNode; ok: boolean; dark?: boolean }) {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        fontSize: 14.5,
        lineHeight: 1.5,
        color: dark ? "rgba(255,255,255,0.92)" : ok ? "var(--text)" : "var(--text-muted)",
      }}
    >
      <span
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          flexShrink: 0,
          marginTop: 1,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: dark ? "#F5E100" : ok ? "var(--green)" : "#f0d4d4",
          color: dark ? "#0a1a18" : ok ? "#fff" : "#c0504e",
        }}
      >
        {ok ? (
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        )}
      </span>
      {children}
    </li>
  );
}

export default function Comparison() {
  return (
    <section style={{ padding: "84px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <SectionHead
          eyebrow="A form vs. a study"
          title="The difference between collecting ratings and running a program"
          sub="Anyone can send a survey. Running a 360 that changes how people lead takes a platform built for it."
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="cmp-grid">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: "var(--bg-soft)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "32px 30px",
            }}
          >
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: 6 }}>
              Most 360 tools
            </p>
            <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 22, color: "var(--text-muted)", letterSpacing: "-0.01em" }}>
              You get a form
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
              {formItems.map((t) => (
                <Item key={t} ok={false}>{t}</Item>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            style={{
              background: "linear-gradient(160deg,#063b35 0%,#0D6E65 100%)",
              borderRadius: 16,
              padding: "32px 30px",
              color: "#fff",
              boxShadow: "0 20px 50px rgba(13,110,101,0.28)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: 22,
                right: 24,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                background: "#F5E100",
                color: "#0a1a18",
                padding: "4px 10px",
                borderRadius: 20,
              }}
            >
              Sogolytics
            </span>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--teal)", marginBottom: 6 }}>
              The Sogolytics way
            </p>
            <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 22, letterSpacing: "-0.01em" }}>
              You run a complete study
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
              {studyItems.map((t) => (
                <Item key={t} ok dark>{t}</Item>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:820px){.cmp-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
