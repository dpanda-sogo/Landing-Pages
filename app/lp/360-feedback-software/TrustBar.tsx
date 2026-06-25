"use client";

const badges = [
  { src: "https://cdn.sogolytics.com/wp-content/uploads/2024/08/Badge_Aicpa_Soc.png", alt: "SOC 2 Type II" },
  { src: "https://cdn.sogolytics.com/wp-content/uploads/2024/08/Badge_GDPR.png", alt: "GDPR" },
  { src: "https://cdn.sogolytics.com/wp-content/uploads/2024/08/Badge_Hipaa_Compliant.png", alt: "HIPAA" },
  { src: "https://cdn.sogolytics.com/wp-content/uploads/2024/08/Badge_ISO_Seal.png", alt: "ISO" },
];

const logos = ["LOGO 1", "LOGO 2", "LOGO 3", "LOGO 4"];

export default function TrustBar() {
  return (
    <section style={{ padding: "28px 0", borderBottom: "1px solid var(--border)", background: "var(--bg)" }}>
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px 40px",
        }}
        className="trust-row"
      >
        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-muted)" }}>
          Trusted by 500,000+ organizations
        </span>

        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
          {logos.map((l) => (
            <div
              key={l}
              style={{
                width: 96,
                height: 34,
                background: "var(--bg-soft)",
                border: "1px dashed var(--border)",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                fontWeight: 600,
                color: "var(--text-light)",
                letterSpacing: "0.05em",
              }}
            >
              {l}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 18 }}>
          {badges.map((b) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={b.alt} src={b.src} alt={b.alt} style={{ height: 44, width: "auto", objectFit: "contain" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
