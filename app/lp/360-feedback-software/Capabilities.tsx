"use client";
import React from "react";
import { motion } from "framer-motion";
import { MockScreen, MockChartArea, MockBar, MockTag } from "@/components/MockScreen";
import { GapHeatmap, InsightChip } from "./mocks";
import { Eyebrow, CheckList } from "./ui";

function Row({
  reverse = false,
  eyebrow,
  title,
  body,
  bullets,
  visual,
}: {
  reverse?: boolean;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  visual: React.ReactNode;
}) {
  return (
    <div
      className={`cap-row${reverse ? " cap-row-rev" : ""}`}
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 72 }}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="cap-copy"
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h3 style={{ fontSize: "clamp(23px,2.6vw,31px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 14, letterSpacing: "-0.02em" }}>
          {title}
        </h3>
        <p style={{ fontSize: 15.5, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>{body}</p>
        <CheckList items={bullets} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: reverse ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="cap-visual"
      >
        {visual}
      </motion.div>
    </div>
  );
}

export default function Capabilities() {
  return (
    <section style={{ padding: "84px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <Row
          eyebrow="Competency Gap Analysis"
          title="See exactly where perception and reality diverge"
          body="Go past a single average. Sogolytics compares self-ratings against every rater group, surfaces blind spots and hidden strengths, and benchmarks each person against their team or the whole org."
          bullets={[
            "Self vs. manager, peer, and direct-report scoring side by side",
            "Automatic blind-spot and hidden-strength detection",
            "Group and org-level benchmarks for every competency",
          ]}
          visual={
            <MockScreen title="Competency Gap Heatmap">
              <div style={{ background: "#fff", borderRadius: 8, padding: 14, border: "1px solid var(--border)" }}>
                <GapHeatmap />
              </div>
              <div style={{ marginTop: 12 }}>
                <InsightChip>
                  <strong>Largest gap:</strong> Delegation rated −0.9 below peers — flagged for a development goal.
                </InsightChip>
              </div>
            </MockScreen>
          }
        />

        <Row
          reverse
          eyebrow="AI on Open-Text"
          title="Read every comment — even when there are thousands"
          body="Open-ended answers hold the real story, but nobody has time to read them all. Sogolytics AI scores sentiment, clusters themes, and turns raw comments into a prioritized, ready-to-share action plan."
          bullets={[
            "Sentiment, theme, and emotion detection on every response",
            "AI Reports that surface prioritized actions automatically",
            "Filter comments by competency, rater group, or score",
          ]}
          visual={
            <MockScreen title="AI Comment Analysis">
              <MockChartArea label="Sentiment — open-ended feedback">
                <MockBar label="Positive" pct={61} val="61%" color="#0D6E65" />
                <MockBar label="Neutral" pct={26} val="26%" color="#b4b2a9" labelColor="#5a6472" />
                <MockBar label="Negative" pct={13} val="13%" color="#E24B4A" labelColor="#A32D2D" />
              </MockChartArea>
              <MockChartArea label="Top themes in comments">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <MockTag label="Clear communicator ↑" variant="green" />
                  <MockTag label="Over-involved in details" variant="amber" />
                  <MockTag label="Trusted by peers ↑" variant="green" />
                  <MockTag label="Needs to delegate" variant="amber" />
                </div>
              </MockChartArea>
            </MockScreen>
          }
        />

        <Row
          eyebrow="Anonymity & Rater Management"
          title="Honest feedback, protected by design"
          body="People only tell the truth when they trust the process. Configurable anonymity thresholds suppress results below a minimum count, while automated routing and reminders keep the study moving without manual chasing."
          bullets={[
            "Minimum-respondent thresholds with automatic suppression",
            "Automated invites, reminder cadences, and deadline nudges",
            "Real-time completion tracking by rater group",
          ]}
          visual={
            <MockScreen title="Rater Management & Anonymity">
              <MockChartArea label="Completion by rater group">
                <MockBar label="Self" pct={100} val="1/1" />
                <MockBar label="Manager" pct={100} val="1/1" />
                <MockBar label="Peers" pct={83} val="5/6" color="var(--teal)" />
                <MockBar label="Reports" pct={75} val="3/4" />
              </MockChartArea>
              <MockChartArea label="Anonymity status">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <MockTag label="Peers: anonymous ✓" variant="green" />
                  <MockTag label="Reports: 1 more to unlock" variant="amber" />
                  <MockTag label="Threshold: 3" variant="blue" />
                </div>
              </MockChartArea>
            </MockScreen>
          }
        />
      </div>
      <style>{`
        @media(max-width:900px){
          .cap-row{grid-template-columns:1fr !important;gap:32px !important;}
          .cap-row-rev .cap-copy{order:1;}
          .cap-row-rev .cap-visual{order:2;}
        }
      `}</style>
    </section>
  );
}
