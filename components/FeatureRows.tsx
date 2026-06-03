"use client";
import { motion } from "framer-motion";
import {
  MockBar,
  MockChartArea,
  MockScreen,
  MockStatRow,
  MockTag,
} from "./MockScreen";

const checkList = (items: string[]) => (
  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
    {items.map((item) => (
      <li
        key={item}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          fontSize: 14,
          color: "var(--text-muted)",
        }}
      >
        <span
          style={{
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "var(--green-light)",
            flexShrink: 0,
            marginTop: 1,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width={10} height={8} viewBox="0 0 10 8" fill="none">
            <path d="M1 4l3 3 5-6" stroke="#0D6E65" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        {item}
      </li>
    ))}
  </ul>
);

function Row1() {
  return (
    <div className="alt-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 72 }}>
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
        <MockScreen title="Unified Feedback Dashboard">
          <MockStatRow
            stats={[
              { num: "+47", label: "NPS Score" },
              { num: "82%", label: "Response Rate" },
              { num: "4.6", label: "Satisfaction" },
            ]}
          />
          <MockChartArea label="Feedback by channel — last 30 days">
            <MockBar label="Customer NPS" pct={82} val="82%" />
            <MockBar label="Employee EX" pct={74} val="74%" color="var(--teal)" />
            <MockBar label="VoC Survey" pct={61} val="61%" />
            <MockBar label="Exit Survey" pct={45} val="45%" color="var(--teal)" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
              <MockTag label="CX Improving ↑" variant="green" />
              <MockTag label="EX Alert: Mgr scores" variant="amber" />
              <MockTag label="Q3 Report Ready" variant="blue" />
            </div>
          </MockChartArea>
        </MockScreen>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>
          Unified Feedback Intelligence
        </p>
        <h2 style={{ fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 700, lineHeight: 1.25, marginBottom: 14, letterSpacing: "-0.01em" }}>
          Stop managing five dashboards. Start managing one.
        </h2>
        <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 18 }}>
          When CX and EX data live in separate tools, you miss the connections. A spike in customer churn that correlates with a drop in employee engagement. A regional NPS dip tied to a specific team&apos;s feedback scores. Sogolytics surfaces these patterns automatically.
        </p>
        {checkList([
          "CX, EX, NPS, VoC and research all in one platform",
          "Cross-program correlation and trend analysis",
          "Executive dashboards with drill-down to team or region level",
          "Automated alerts when scores cross threshold",
        ])}
      </motion.div>
    </div>
  );
}

function Row2() {
  return (
    <div className="alt-row alt-row-reverse" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 72 }}>
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="alt-row-content">
        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>
          AI-Powered Sentiment &amp; VoC
        </p>
        <h2 style={{ fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 700, lineHeight: 1.25, marginBottom: 14, letterSpacing: "-0.01em" }}>
          Know what your customers mean, not just what they said.
        </h2>
        <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 18 }}>
          Open-ended responses contain your richest insight — but reading thousands of them manually doesn&apos;t scale. Sogolytics AI processes every response, identifies sentiment, surfaces themes, and flags urgent issues in real time.
        </p>
        {checkList([
          "Sentiment analysis across every open-ended question",
          "Automated theme clustering and trend detection",
          "Real-time alerts on emerging negative signals",
          "Segment sentiment by department, region, or customer segment",
        ])}
      </motion.div>
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="alt-row-mock">
        <MockScreen title="AI Sentiment Analysis">
          <MockChartArea label="Sentiment breakdown — open responses">
            <MockBar label="Positive" pct={64} val="64%" color="#0D6E65" labelColor="#3B6D11" />
            <MockBar label="Neutral" pct={22} val="22%" color="#b4b2a9" labelColor="#5a6472" />
            <MockBar label="Negative" pct={14} val="14%" color="#E24B4A" labelColor="#A32D2D" />
          </MockChartArea>
          <MockChartArea label="Top emerging themes">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              <MockTag label="Response time ↑" variant="green" />
              <MockTag label="Onboarding friction" variant="amber" />
              <MockTag label="Support quality ↑" variant="green" />
              <MockTag label="Feature request: API" variant="blue" />
            </div>
          </MockChartArea>
        </MockScreen>
      </motion.div>
    </div>
  );
}

function Row3() {
  return (
    <div className="alt-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>
          Enterprise Security &amp; Compliance
        </p>
        <h2 style={{ fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 700, lineHeight: 1.25, marginBottom: 14, letterSpacing: "-0.01em" }}>
          Pass your IT security review. The first time.
        </h2>
        <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 18 }}>
          Enterprise procurement means security reviews, compliance checklists, and CISO sign-off. Sogolytics ships with everything pre-built — so your IT team checks the boxes instead of raising the red flags.
        </p>
        {checkList([
          "SOC 2 Type II certified — full audit report available on request",
          "HIPAA compliant for healthcare and regulated industries",
          "GDPR and CCPA ready with data residency options",
          "SSO/SAML, role-based access, and full audit logs",
        ])}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", marginTop: 20 }}>
          {[
            { src: "https://cdn.sogolytics.com/wp-content/uploads/2024/08/Badge_Aicpa_Soc.png", alt: "SOC 2 Type II" },
            { src: "https://cdn.sogolytics.com/wp-content/uploads/2024/08/Badge_Hipaa_Compliant.png", alt: "HIPAA Compliant" },
            { src: "https://cdn.sogolytics.com/wp-content/uploads/2024/08/Badge_GDPR.png", alt: "GDPR" },
            { src: "https://cdn.sogolytics.com/wp-content/uploads/2024/08/Badge_ISO_Seal.png", alt: "ISO" },
          ].map((b) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={b.alt} src={b.src} alt={b.alt} style={{ height: 52, width: "auto", objectFit: "contain" }} />
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
        <MockScreen title="Security &amp; Access Control">
          <MockChartArea label="Role-based access — active users">
            <MockBar label="Admin" pct={15} val="3" />
            <MockBar label="Manager" pct={45} val="18" />
            <MockBar label="Analyst" pct={70} val="42" />
            <MockBar label="Viewer" pct={90} val="97" color="var(--teal)" />
          </MockChartArea>
          <MockChartArea label="Compliance status">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              <MockTag label="SOC 2 ✓" variant="green" />
              <MockTag label="HIPAA ✓" variant="green" />
              <MockTag label="GDPR ✓" variant="green" />
              <MockTag label="SSO Active ✓" variant="green" />
              <MockTag label="Audit log: 30 days" variant="blue" />
            </div>
          </MockChartArea>
        </MockScreen>
      </motion.div>
    </div>
  );
}

export default function FeatureRows() {
  return (
    <section style={{ padding: "72px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <Row1 />
        <Row2 />
        <Row3 />
      </div>
      <style>{`
        @media(max-width:900px){
          .alt-row{grid-template-columns:1fr !important;gap:32px !important;}
          .alt-row-reverse .alt-row-content{order:1;}
          .alt-row-reverse .alt-row-mock{order:2;}
        }
      `}</style>
    </section>
  );
}
