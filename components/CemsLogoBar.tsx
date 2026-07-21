"use client";

export default function CemsLogoBar() {
  return (
    <section style={{ background: "#fff", borderBottom: "1px solid var(--border)", padding: "36px 24px", textAlign: "center" }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 24 }}>
        Supporting CX Teams to Turn Feedback Into Action
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 40, flexWrap: "wrap", maxWidth: 1160, margin: "0 auto" }}>
        {["LOGO 1", "LOGO 2", "LOGO 3", "LOGO 4", "LOGO 5", "LOGO 6"].map((l) => (
          <div key={l} style={{ height: 34, minWidth: 110, background: "var(--green-light)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, fontWeight: 600, color: "#a8b4b2", letterSpacing: "0.06em", padding: "0 16px" }}>
            {l}
          </div>
        ))}
      </div>
    </section>
  );
}
