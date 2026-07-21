"use client";
import React from "react";
import { motion } from "framer-motion";

/* ---------- Competency radar (self vs. all raters) ---------- */

const AXES = ["Leadership", "Comms", "Strategy", "Execution", "Collab", "Coaching"];
const SELF = [0.62, 0.72, 0.5, 0.82, 0.6, 0.5];
const RATERS = [0.86, 0.8, 0.72, 0.76, 0.92, 0.66];

function polygon(values: number[], cx: number, cy: number, r: number) {
  return values
    .map((v, i) => {
      const ang = -Math.PI / 2 + (i * 2 * Math.PI) / values.length;
      const x = cx + Math.cos(ang) * r * v;
      const y = cy + Math.sin(ang) * r * v;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

export function CompetencyRadar({ size = 260 }: { size?: number }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 46;

  return (
    <div>
      <svg viewBox={`0 0 ${size} ${size}`} width="100%" style={{ display: "block" }}>
        {/* rings */}
        {[0.25, 0.5, 0.75, 1].map((g) => (
          <polygon
            key={g}
            points={polygon(AXES.map(() => g), cx, cy, r)}
            fill="none"
            stroke="#e2e6ea"
            strokeWidth={1}
          />
        ))}
        {/* axes + labels */}
        {AXES.map((label, i) => {
          const ang = -Math.PI / 2 + (i * 2 * Math.PI) / AXES.length;
          const x = cx + Math.cos(ang) * r;
          const y = cy + Math.sin(ang) * r;
          const lx = cx + Math.cos(ang) * (r + 13);
          const ly = cy + Math.sin(ang) * (r + 13);
          const anchor = Math.abs(Math.cos(ang)) < 0.3 ? "middle" : Math.cos(ang) > 0 ? "start" : "end";
          return (
            <g key={label}>
              <line x1={cx} y1={cy} x2={x} y2={y} stroke="#e2e6ea" strokeWidth={1} />
              <text x={lx} y={ly} fontSize={8.5} fontWeight={600} fill="#5a6472" textAnchor={anchor} dominantBaseline="middle">
                {label}
              </text>
            </g>
          );
        })}
        {/* raters polygon */}
        <motion.polygon
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ transformOrigin: "center" }}
          points={polygon(RATERS, cx, cy, r)}
          fill="rgba(13,110,101,0.18)"
          stroke="#0D6E65"
          strokeWidth={2}
        />
        {/* self polygon */}
        <motion.polygon
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ transformOrigin: "center" }}
          points={polygon(SELF, cx, cy, r)}
          fill="rgba(2,190,204,0.14)"
          stroke="#02BECC"
          strokeWidth={2}
          strokeDasharray="4 3"
        />
      </svg>
      <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 4 }}>
        <Legend color="#0D6E65" label="All raters" />
        <Legend color="#02BECC" label="Self" dashed />
      </div>
    </div>
  );
}

function Legend({ color, label, dashed }: { color: string; label: string; dashed?: boolean }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--text-muted)", fontWeight: 600 }}>
      <span style={{ width: 16, height: 0, borderTop: `2px ${dashed ? "dashed" : "solid"} ${color}`, display: "inline-block" }} />
      {label}
    </span>
  );
}

/* ---------- Competency gap heatmap ---------- */

type Cell = number; // gap vs self, roughly -1..+1
const ROWS: { name: string; cells: Cell[] }[] = [
  { name: "Strategic vision", cells: [0, 0.6, 0.5, 0.4] },
  { name: "Communication", cells: [0, 0.3, 0.2, 0.4] },
  { name: "Delegation", cells: [0, -0.6, -0.9, -0.7] },
  { name: "Coaching", cells: [0, 0.4, 0.3, 0.5] },
  { name: "Accountability", cells: [0, 0.1, -0.2, 0.0] },
];
const COLS = ["Self", "Mgr", "Peers", "Reports"];

function cellColor(v: number) {
  if (v <= -0.5) return "#E24B4A";
  if (v < -0.1) return "#f0a35e";
  if (v < 0.2) return "#e7e9ec";
  if (v < 0.45) return "#7cc6bd";
  return "#0D6E65";
}

export function GapHeatmap() {
  return (
    <div style={{ fontSize: 11 }}>
      <div style={{ display: "grid", gridTemplateColumns: "92px repeat(4, 1fr)", gap: 4, marginBottom: 4 }}>
        <span />
        {COLS.map((c) => (
          <span key={c} style={{ textAlign: "center", fontWeight: 700, color: "var(--text-light)", fontSize: 10 }}>
            {c}
          </span>
        ))}
      </div>
      {ROWS.map((row, ri) => (
        <div key={row.name} style={{ display: "grid", gridTemplateColumns: "92px repeat(4, 1fr)", gap: 4, marginBottom: 4 }}>
          <span style={{ fontSize: 10, color: "var(--text-muted)", alignSelf: "center", fontWeight: 600 }}>{row.name}</span>
          {row.cells.map((v, ci) => (
            <motion.span
              key={ci}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (ri * 4 + ci) * 0.02, duration: 0.3 }}
              style={{
                height: 26,
                borderRadius: 5,
                background: ci === 0 ? "#f2f4f6" : cellColor(v),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: ci === 0 ? "var(--text-light)" : Math.abs(v) < 0.2 ? "#5a6472" : "#fff",
                fontWeight: 700,
                fontSize: 10,
              }}
            >
              {ci === 0 ? "—" : v > 0 ? `+${v.toFixed(1)}` : v.toFixed(1)}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ---------- Completion ring ---------- */

export function CompletionRing({ pct = 88, size = 92 }: { pct?: number; size?: number }) {
  const stroke = 9;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e7e9ec" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#0D6E65"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * (1 - pct / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 20, fontWeight: 700, color: "var(--green)" }}>{pct}%</span>
        <span style={{ fontSize: 9, color: "var(--text-light)", fontWeight: 600 }}>complete</span>
      </div>
    </div>
  );
}

/* ---------- AI insight chip ---------- */

export function InsightChip({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        background: dark ? "rgba(255,255,255,0.1)" : "#fff",
        border: dark ? "1px solid rgba(255,255,255,0.18)" : "1px solid var(--border)",
        borderRadius: 10,
        padding: "12px 14px",
        boxShadow: dark ? "none" : "0 6px 22px rgba(0,0,0,0.08)",
      }}
    >
      <span
        style={{
          width: 26,
          height: 26,
          borderRadius: 7,
          flexShrink: 0,
          background: "linear-gradient(135deg,#02BECC,#0D6E65)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width={14} height={14} viewBox="0 0 24 24" fill="#fff">
          <path d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2z" />
        </svg>
      </span>
      <span style={{ fontSize: 12, lineHeight: 1.45, color: dark ? "rgba(255,255,255,0.92)" : "var(--text)", fontWeight: 500 }}>
        {children}
      </span>
    </div>
  );
}

/* ---------- Rater group avatars ---------- */

export function RaterAvatars() {
  const groups = [
    { label: "Self", n: 1, color: "#02BECC" },
    { label: "Manager", n: 1, color: "#0D6E65" },
    { label: "Peers", n: 6, color: "#0D6E65" },
    { label: "Reports", n: 4, color: "#0D6E65" },
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
      {groups.map((g) => (
        <div key={g.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: g.color, flexShrink: 0 }} />
          <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600 }}>
            {g.label} <span style={{ color: "var(--text-light)" }}>· {g.n}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
