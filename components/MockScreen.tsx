import React from "react";

interface MockBarProps {
  label: string;
  pct: number;
  val: string;
  color?: string;
  labelColor?: string;
}

export function MockBar({ label, pct, val, color = "var(--green)", labelColor }: MockBarProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
      <div style={{ fontSize: 10, color: labelColor || "var(--text-muted)", width: 60, textAlign: "right", flexShrink: 0 }}>{label}</div>
      <div style={{ flex: 1, height: 8, background: "var(--bg-soft)", borderRadius: 4, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", borderRadius: 4, background: color }} />
      </div>
      <div style={{ fontSize: 10, color: "var(--text-muted)", width: 28, flexShrink: 0 }}>{val}</div>
    </div>
  );
}

interface MockTagProps {
  label: string;
  variant: "green" | "blue" | "amber";
}

export function MockTag({ label, variant }: MockTagProps) {
  const styles: Record<string, React.CSSProperties> = {
    green: { background: "#e8f4f3", color: "var(--green)" },
    blue: { background: "#e6f0ff", color: "#2563eb" },
    amber: { background: "#fef3c7", color: "#92400e" },
  };
  return (
    <span
      style={{
        fontSize: 10,
        padding: "3px 8px",
        borderRadius: 10,
        fontWeight: 600,
        ...styles[variant],
      }}
    >
      {label}
    </span>
  );
}

interface MockScreenProps {
  title: string;
  children: React.ReactNode;
}

export function MockScreen({ title, children }: MockScreenProps) {
  return (
    <div
      style={{
        background: "var(--bg-soft)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          background: "var(--green)",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {[0, 1].map((d) => (
          <div key={d} style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.4)" }} />
        ))}
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{title}</span>
      </div>
      <div style={{ padding: 20 }}>{children}</div>
    </div>
  );
}

export function MockStatRow({ stats }: { stats: { num: string; label: string }[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${stats.length},1fr)`,
        gap: 10,
        marginBottom: 16,
      }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          style={{
            background: "#fff",
            borderRadius: 8,
            padding: 12,
            textAlign: "center",
            border: "1px solid var(--border)",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 700, color: "var(--green)" }}>{s.num}</div>
          <div style={{ fontSize: 10, color: "var(--text-light)", marginTop: 2 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export function MockChartArea({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        padding: 14,
        border: "1px solid var(--border)",
        marginBottom: 12,
      }}
    >
      <div style={{ fontSize: 11, color: "var(--text-light)", marginBottom: 8, fontWeight: 600 }}>{label}</div>
      {children}
    </div>
  );
}
