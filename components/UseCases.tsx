"use client";
import { motion } from "framer-motion";

const cases = [
  {
    title: "Multi-brand organizations",
    desc: "Manage feedback across multiple brands with isolated workspaces, separate branding, and consolidated C-suite reporting. Roll up insights at the corporate level while maintaining brand independence.",
  },
  {
    title: "Global operations",
    desc: "Deploy surveys in 50+ languages with regional compliance (GDPR, CCPA, HIPAA). Route feedback to regional teams automatically while maintaining global visibility and benchmarking.",
  },
  {
    title: "Large customer success teams",
    desc: "Equip 100+ CS reps with individual dashboards, automated workflows, and real-time alerts. Track team performance, resolution rates, and customer health scores at scale.",
  },
  {
    title: "Regulated industries",
    desc: "Meet HIPAA, SOC 2, and GDPR requirements with compliant data storage, encrypted transmission, audit trails, and data retention policies. Annual compliance certifications provided.",
  },
];

export default function UseCases() {
  return (
    <section style={{ padding: "72px 0", background: "var(--bg-soft)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Who uses Sogolytics
          </p>
          <h2 style={{ fontSize: "clamp(26px,3vw,36px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14 }}>
            Built for enterprise complexity
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.65, maxWidth: 580, margin: "0 auto" }}>
            From global rollouts to regulated industries, here&apos;s how enterprise teams deploy the platform.
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          className="usecase-grid"
        >
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: 24,
              }}
            >
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "var(--green)",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </span>
                {c.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:900px){.usecase-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
