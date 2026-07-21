"use client";
import { motion } from "framer-motion";

export default function CemsResource() {
  return (
    <section style={{ padding: "84px 0", background: "var(--green-light)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 64, alignItems: "center" }} className="resource-wrap">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
              Free CX Resource
            </p>
            <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Turn Feedback Into a Retention Plan
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, maxWidth: 520, marginBottom: 28 }}>
              The <strong>Closed-Loop CX Playbook</strong> walks CX leaders through turning Voice of Customer data into a concrete action plan — with benchmark questions, sample dashboards, and a 90-day framework.
            </p>
            <a
              href="#finalCTA"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#F5E100", color: "#0a1a18", fontWeight: 700, borderRadius: 50, padding: "14px 28px 14px 8px", fontSize: 15, textDecoration: "none" }}
            >
              <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#0a1a18", color: "#F5E100", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>↓</span>
              Download the Playbook
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: 250,
                aspectRatio: "3/4",
                borderRadius: 8,
                background: "linear-gradient(150deg, #0d3d37 0%, #0a2c28 55%, #092224 100%)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
                transform: "rotate(-4deg)",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(2,190,204,0.25) 0%, transparent 60%)",
                }}
              />
              <div style={{ position: "relative" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--teal)" }}>Playbook</div>
                <div style={{ fontSize: 23, fontWeight: 800, color: "#fff", lineHeight: 1.2, marginTop: 14 }}>Closed-Loop CX Playbook</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 10 }}>A practical guide for turning Voice of Customer data into board-ready action.</div>
              </div>
              <div style={{ position: "relative", fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 700, letterSpacing: "0.04em" }}>SOGOLYTICS</div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:980px){.resource-wrap{grid-template-columns:1fr !important;gap:40px !important;text-align:center;}}`}</style>
    </section>
  );
}
