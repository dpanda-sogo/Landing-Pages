"use client";
import { motion } from "framer-motion";

const rows = [
  { label: "Time to first live survey", old: "6–12 months", new: "3–4 weeks" },
  { label: "Onboarding model", old: "Self-serve documentation", new: "Named CSM, white-glove setup" },
  { label: "Platform depth", old: "Core plan + paid module add-ons", new: "Full platform included" },
  { label: "Mid-market usability", old: "Built for dedicated analyst teams", new: "Adopted by teams in week one" },
  { label: "Pricing model", old: "Per-module, usage-tiered licensing", new: "Transparent, predictable pricing" },
  { label: "Support model", old: "Ticket queue, tiered SLAs", new: "Direct access to your success team" },
];

export default function CemsSwitch() {
  return (
    <section style={{ padding: "76px 0", background: "var(--bg-soft)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Why teams switch to Sogolytics
          </p>
          <h2 style={{ fontSize: "clamp(26px,3vw,36px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14 }}>
            Enterprise Depth. Mid-Market Speed.
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
            Enterprise depth shouldn&apos;t cost you time-to-value.
          </p>
        </div>

        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 0, marginBottom: 4 }} className="switch-header">
            <div />
            <div style={{ textAlign: "center", fontSize: 12, fontWeight: 700, color: "var(--text-light)", letterSpacing: "0.06em", textTransform: "uppercase", paddingBottom: 12 }}>
              Legacy platforms
            </div>
            <div style={{ textAlign: "center", fontSize: 12, fontWeight: 700, color: "var(--green)", letterSpacing: "0.06em", textTransform: "uppercase", paddingBottom: 12 }}>
              Sogolytics
            </div>
          </div>

          {rows.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1fr 1fr",
                alignItems: "center",
                gap: 0,
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: 10,
                marginBottom: 10,
                padding: "16px 18px",
              }}
              className="switch-row"
            >
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{r.label}</div>
              <div style={{ textAlign: "center", fontSize: 13.5, color: "var(--text-light)" }}>{r.old}</div>
              <div style={{ textAlign: "center", fontSize: 13.5, fontWeight: 700, color: "var(--green)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <svg width={14} height={11} viewBox="0 0 10 8" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M1 4l3 3 5-6" stroke="#0D6E65" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {r.new}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:700px){
          .switch-header{display:none !important;}
          .switch-row{grid-template-columns:1fr !important;text-align:left !important;gap:6px !important;}
          .switch-row > div{text-align:left !important;justify-content:flex-start !important;}
        }
      `}</style>
    </section>
  );
}
