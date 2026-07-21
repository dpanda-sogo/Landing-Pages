"use client";
import { motion } from "framer-motion";
import { MockBar, MockChartArea, MockScreen, MockStatRow, MockTag } from "./MockScreen";

const checkList = (items: string[]) => (
  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
    {items.map((item) => (
      <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--text-muted)" }}>
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
        <MockScreen title="AI Analytics & Journey Mapping">
          <MockChartArea label="Customer journey — friction points">
            <MockBar label="Onboarding" pct={22} val="Low" color="#0D6E65" />
            <MockBar label="Support" pct={78} val="High" color="#E24B4A" labelColor="#A32D2D" />
            <MockBar label="Renewal" pct={40} val="Med" color="var(--teal)" />
          </MockChartArea>
          <MockChartArea label="AI-detected themes this week">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              <MockTag label="Response time ↑" variant="amber" />
              <MockTag label="Onboarding praised" variant="green" />
              <MockTag label="Feature request: API" variant="blue" />
            </div>
          </MockChartArea>
        </MockScreen>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>
          AI Analytics &amp; Customer Journey Analytics
        </p>
        <h2 style={{ fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 700, lineHeight: 1.25, marginBottom: 14, letterSpacing: "-0.01em" }}>
          See exactly where the experience breaks down.
        </h2>
        <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 18 }}>
          Sentiment analysis and predictive analytics process every open-ended response automatically, while journey mapping shows which stage — onboarding, support, renewal — is driving detractor scores. No manual coding of verbatims required.
        </p>
        {checkList([
          "AI sentiment analysis across every open-ended response",
          "Predictive analytics flags at-risk accounts before renewal",
          "Journey mapping across the full customer lifecycle",
          "Automated theme clustering and emerging-issue detection",
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
          Survey Automation &amp; Omnichannel Feedback
        </p>
        <h2 style={{ fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 700, lineHeight: 1.25, marginBottom: 14, letterSpacing: "-0.01em" }}>
          Capture feedback everywhere your customers already are.
        </h2>
        <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 18 }}>
          Trigger NPS, CSAT, and CES surveys automatically on the events that matter — a support ticket closes, a renewal window opens, a product milestone is hit. Deploy across email, SMS, web, in-app, and QR code from one platform.
        </p>
        {checkList([
          "Automated survey triggers tied to lifecycle events",
          "Omnichannel deployment: email, SMS, web, in-app, QR",
          "NPS, CSAT, and CES templates built in",
          "50+ languages with regional compliance support",
        ])}
      </motion.div>
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="alt-row-mock">
        <MockScreen title="Survey Automation">
          <MockStatRow stats={[{ num: "5", label: "Active Channels" }, { num: "82%", label: "Response Rate" }, { num: "24/7", label: "Automated" }]} />
          <MockChartArea label="Feedback volume by channel">
            <MockBar label="Email" pct={64} val="64%" />
            <MockBar label="In-app" pct={48} val="48%" color="var(--teal)" />
            <MockBar label="SMS" pct={31} val="31%" />
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
        <MockScreen title="Alerts, Case Management & Security">
          <MockChartArea label="Case management — this week">
            <MockBar label="Assigned" pct={100} val="38" color="#0D6E65" />
            <MockBar label="Resolved" pct={82} val="31" color="var(--teal)" />
            <MockBar label="Escalated" pct={13} val="5" color="#E24B4A" labelColor="#A32D2D" />
          </MockChartArea>
          <MockChartArea label="Compliance & integrations">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              <MockTag label="SOC 2 ✓" variant="green" />
              <MockTag label="HIPAA ✓" variant="green" />
              <MockTag label="Salesforce connected" variant="blue" />
            </div>
          </MockChartArea>
        </MockScreen>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>
          Alerts, Case Management &amp; Integrations
        </p>
        <h2 style={{ fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 700, lineHeight: 1.25, marginBottom: 14, letterSpacing: "-0.01em" }}>
          Real-time alerts and reporting your leadership team will actually use.
        </h2>
        <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 18 }}>
          Real-time alerts trigger the moment a detractor response comes in, case management assigns and tracks resolution, and executive dashboards roll everything up — all built on enterprise-grade security your IT team will sign off on.
        </p>
        {checkList([
          "Real-time alerts and automated case assignment",
          "Executive dashboards with drill-down reporting",
          "50+ integrations: Salesforce, Zendesk, HubSpot, Power BI",
          "SOC 2 Type II, HIPAA, and GDPR compliant",
        ])}
      </motion.div>
    </div>
  );
}

export default function CemsProduct() {
  return (
    <section style={{ padding: "76px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Inside the platform
          </p>
          <h2 style={{ fontSize: "clamp(26px,3vw,36px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14 }}>
            One Platform. Every Capability Your CX Program Needs.
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.65, maxWidth: 620, margin: "0 auto" }}>
            Dashboards, AI analytics, journey mapping, survey automation, alerts, and integrations — built to work together, not as five separate purchases.
          </p>
        </div>
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
