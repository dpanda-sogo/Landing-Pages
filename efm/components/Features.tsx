"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Every feedback channel in one place",
    desc: "Customer surveys, employee pulse checks, NPS programs, and research studies — all feeding one dashboard. No more stitching data from five different tools.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={22} height={22}>
        <rect x={2} y={3} width={20} height={5} rx={1} />
        <rect x={2} y={10} width={20} height={5} rx={1} />
        <rect x={2} y={17} width={20} height={5} rx={1} />
      </svg>
    ),
  },
  {
    title: "Security your IT team won't push back on",
    desc: "HIPAA compliant, GDPR certified, SOC 2 Type II audited. Role-based access controls, SSO/SAML, and enterprise-grade encryption. Security review ready.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={22} height={22}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Insights that don't require a data team",
    desc: "AI-powered sentiment analysis, real-time trend alerts, and executive-ready dashboards. Your leadership team gets answers in seconds, not after a three-day analysis cycle.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={22} height={22}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "50+ integrations out of the box",
    desc: "Salesforce, Zendesk, HubSpot, ServiceNow, MS Dynamics, Slack, Teams, Power BI — plus REST API for custom connections to your proprietary systems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={22} height={22}>
        <circle cx={12} cy={12} r={3} />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 19.07a10 10 0 010-14.14" />
        <path d="M15.54 8.46a5 5 0 010 7.07M8.46 15.54a5 5 0 010-7.07" />
      </svg>
    ),
  },
  {
    title: "White-label and full brand control",
    desc: "Surveys, emails, and dashboards fully branded with your logo, colors, and domain. Your customers and employees never see Sogolytics unless you want them to.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={22} height={22}>
        <rect x={3} y={3} width={7} height={7} />
        <rect x={14} y={3} width={7} height={7} />
        <rect x={3} y={14} width={7} height={7} />
        <rect x={14} y={14} width={7} height={7} />
      </svg>
    ),
  },
  {
    title: "Dedicated success team, not a ticket queue",
    desc: "Named Customer Success Manager, priority support, quarterly business reviews, and direct access to the product team. We treat your launch like our own.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={22} height={22}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx={9} cy={7} r={4} />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section style={{ padding: "72px 0", background: "var(--bg-soft)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Platform overview
          </p>
          <h2 style={{ fontSize: "clamp(26px,3vw,36px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14 }}>
            Built for the complexity of enterprise feedback
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.65, maxWidth: 580, margin: "0 auto" }}>
            Most feedback tools handle one thing. Sogolytics handles all of them — unified, secure, and actionable from day one.
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}
          className="feature-grid"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "28px 24px",
                transition: "box-shadow 0.2s",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "var(--green-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  color: "var(--green)",
                }}
              >
                {f.icon}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.feature-grid{grid-template-columns:1fr 1fr !important;}} @media(max-width:600px){.feature-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
