"use client";
import { motion } from "framer-motion";

type Cell = { icon: "check" | "partial" | "cross"; label?: string };

const rows: { feature: string; sogo: Cell; legacy: Cell; generic: Cell }[] = [
  { feature: "Voice of Customer feedback in one platform", sogo: { icon: "check" }, legacy: { icon: "partial", label: "Separate tools per channel" }, generic: { icon: "cross" } },
  { feature: "AI-powered sentiment & theme analysis", sogo: { icon: "check", label: "Included" }, legacy: { icon: "cross" }, generic: { icon: "partial", label: "Add-on" } },
  { feature: "Customer journey analytics across the lifecycle", sogo: { icon: "check" }, legacy: { icon: "partial", label: "Manual spreadsheets" }, generic: { icon: "cross" } },
  { feature: "Closed-loop workflow automation & case management", sogo: { icon: "check" }, legacy: { icon: "cross" }, generic: { icon: "cross" } },
  { feature: "Omnichannel survey deployment (email, SMS, in-app, QR)", sogo: { icon: "check" }, legacy: { icon: "partial", label: "Limited channels" }, generic: { icon: "partial", label: "Basic" } },
  { feature: "Real-time, role-based dashboards", sogo: { icon: "check" }, legacy: { icon: "cross" }, generic: { icon: "partial", label: "Basic" } },
  { feature: "Board- and executive-ready reporting templates", sogo: { icon: "check" }, legacy: { icon: "cross" }, generic: { icon: "cross" } },
  { feature: "Dedicated CX implementation team", sogo: { icon: "check" }, legacy: { icon: "partial", label: "Varies" }, generic: { icon: "cross" } },
  { feature: "Time to first insight", sogo: { icon: "check", label: "Days" }, legacy: { icon: "cross", label: "Months" }, generic: { icon: "partial", label: "Weeks" } },
];

function CellView({ cell }: { cell: Cell }) {
  const color = cell.icon === "check" ? "var(--green)" : cell.icon === "partial" ? "#f59e0b" : "#c0c8d0";
  const symbol = cell.icon === "check" ? "✓" : cell.icon === "partial" ? "~" : "✗";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      <span style={{ color, fontWeight: 700, fontSize: 15 }}>{symbol}</span>
      {cell.label && <span style={{ fontSize: 13 }}>{cell.label}</span>}
    </span>
  );
}

export default function CemsComparison() {
  return (
    <section style={{ padding: "84px 0", background: "var(--green-light)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Why Sogolytics
          </p>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14 }}>
            More Than a Survey Tool. A Customer Action System.
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
            See exactly how Sogolytics compares to legacy CX platforms and generic survey tools.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}
        >
          <table style={{ width: "100%", minWidth: 640, borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr>
                <th style={{ padding: "16px 18px", textAlign: "left", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "2px solid var(--border)", color: "var(--text-muted)" }}>
                  Capability
                </th>
                <th style={{ padding: "16px 18px", textAlign: "left", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "2px solid var(--border)", color: "var(--green)", background: "rgba(13,110,101,0.06)", borderRadius: "8px 8px 0 0" }}>
                  Sogolytics
                </th>
                <th style={{ padding: "16px 18px", textAlign: "left", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "2px solid var(--border)" }}>
                  Legacy CX Platforms
                </th>
                <th style={{ padding: "16px 18px", textAlign: "left", fontSize: 11.5, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", borderBottom: "2px solid var(--border)" }}>
                  Generic Survey Tools
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td style={{ padding: "13px 18px", fontWeight: 600, color: "var(--text-muted)", fontSize: 13 }}>{r.feature}</td>
                  <td style={{ padding: "13px 18px", background: "rgba(13,110,101,0.04)" }}><CellView cell={r.sogo} /></td>
                  <td style={{ padding: "13px 18px" }}><CellView cell={r.legacy} /></td>
                  <td style={{ padding: "13px 18px" }}><CellView cell={r.generic} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a
            href="#finalCTA"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#F5E100",
              color: "#0a1a18",
              fontWeight: 700,
              borderRadius: 50,
              padding: "14px 28px 14px 8px",
              fontSize: 15,
              textDecoration: "none",
            }}
          >
            <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#0a1a18", color: "#F5E100", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700 }}>→</span>
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
