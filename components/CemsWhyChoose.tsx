"use client";
import { motion } from "framer-motion";

const items = [
  { title: "Purpose-Built for Enterprise CX", desc: "Not a generic survey tool retrofitted for feedback — built around closed-loop action." },
  { title: "SOC 2, HIPAA & GDPR Compliant", desc: "Enterprise-grade security and compliance from day one, not bolted on later." },
  { title: "AI-Powered Sentiment Analysis", desc: "Understand what every open-ended response really means, at enterprise scale." },
  { title: "Closed-Loop Workflow Automation", desc: "Every flagged response gets an owner, a deadline, and a tracked resolution." },
  { title: "Dedicated Customer Success Team", desc: "Real people who know CX programs — not a generic support queue." },
  { title: "Executive-Ready Reporting", desc: "Insights formatted for your next leadership review, not a raw data export." },
];

export default function CemsWhyChoose() {
  return (
    <section style={{ padding: "84px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Built for CX Teams
          </p>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14 }}>
            Why Teams Choose Sogolytics
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
            Enterprise-grade security and support, purpose-built for closed-loop customer experience management.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "20px 40px", maxWidth: 920, margin: "0 auto" }} className="why-grid">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
            >
              <div style={{ flexShrink: 0, width: 30, height: 30, borderRadius: "50%", background: "var(--green-light)", color: "var(--green)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14 }}>
                ✓
              </div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{it.title}</h4>
                <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.55 }}>{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.why-grid{grid-template-columns:1fr !important;max-width:560px !important;}}`}</style>
    </section>
  );
}
