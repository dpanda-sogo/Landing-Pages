"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

const trustPills = [
  {
    label: "HIPAA & GDPR Compliant",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "500+ Organizations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx={9} cy={7} r={4} />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    label: "96 Countries",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
        <circle cx={12} cy={12} r={10} />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
  { label: "SOC 2 Type II", icon: null },
];

function TrustPill({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 20,
        padding: "5px 12px",
        fontSize: 12,
        fontWeight: 500,
      }}
    >
      {icon}
      {label}
    </span>
  );
}

export default function Hero() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((key) => {
      const el = document.getElementById(key) as HTMLInputElement | null;
      if (el && params.get(key)) el.value = params.get(key)!;
    });
  }, []);

  return (
    <section
      style={{
        padding: "80px 0 60px",
        background: "linear-gradient(135deg,#0a3d39 0%,#0D6E65 50%,#0f8a80 100%)",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* dot pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: 48,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
          className="hero-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: 20,
                marginBottom: 20,
              }}
            >
              For CX, EX &amp; Research Teams
            </span>

            <h1
              style={{
                fontSize: "clamp(32px,4vw,46px)",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: 20,
                letterSpacing: "-0.02em",
              }}
            >
              One Platform for{" "}
              <span style={{ color: "var(--teal)" }}>Every Feedback Signal</span>{" "}
              Across Your Enterprise
            </h1>

            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                opacity: 0.88,
                marginBottom: 28,
                maxWidth: 520,
              }}
            >
              Sogolytics unifies NPS, VoC, employee feedback, and sentiment analysis
              in a single secure platform — with real-time dashboards your leadership
              team will actually use.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
              {trustPills.map((p) => (
                <TrustPill key={p.label} {...p} />
              ))}
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            id="heroForm"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{
              background: "#fff",
              borderRadius: 14,
              padding: "32px 28px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              color: "var(--text)",
            }}
          >
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 6,
                textAlign: "center",
              }}
            >
              Request a Demo
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "var(--text-muted)",
                textAlign: "center",
                marginBottom: 24,
              }}
            >
              30 minutes. No commitment. Tailored to your team size and industry.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 5, letterSpacing: "0.03em" }}>
                  First name
                </label>
                <input type="text" id="fname" name="first_name" placeholder="Jane" className="form-input" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 5, letterSpacing: "0.03em" }}>
                  Last name
                </label>
                <input type="text" id="lname" name="last_name" placeholder="Smith" className="form-input" />
              </div>
            </div>

            {(
              [
                { id: "email", name: "email", label: "Work email", type: "email", placeholder: "jane@company.com" },
                { id: "company", name: "company", label: "Company", type: "text", placeholder: "Acme Corp" },
              ] as const
            ).map((f) => (
              <div key={f.id} style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 5, letterSpacing: "0.03em" }}>
                  {f.label}
                </label>
                <input type={f.type} id={f.id} name={f.name} placeholder={f.placeholder} className="form-input" />
              </div>
            ))}

            <div style={{ marginBottom: 14 }}>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 5, letterSpacing: "0.03em" }}>
                Company size
              </label>
              <select id="size" name="company_size" className="form-input form-select">
                <option value="" disabled>Select company size</option>
                {["1–50 employees","51–200 employees","201–500 employees","501–1,000 employees","1,001–5,000 employees","5,000+ employees"].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <input type="hidden" name="utm_source" id="utm_source" />
            <input type="hidden" name="utm_medium" id="utm_medium" />
            <input type="hidden" name="utm_campaign" id="utm_campaign" />
            <input type="hidden" name="utm_content" id="utm_content" />
            <input type="hidden" name="utm_term" id="utm_term" />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "13px",
                background: "var(--green)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                marginTop: 6,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.background = "var(--green-dark)")}
              onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.background = "var(--green)")}
            >
              Request a Demo →
            </button>
            <p style={{ textAlign: "center", fontSize: 12, color: "var(--text-light)", marginTop: 10 }}>
              No credit card required <span style={{ margin: "0 6px", opacity: 0.5 }}>·</span> We respond within 1 business day
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr !important;}
          #heroForm{max-width:480px;}
        }
      `}</style>
    </section>
  );
}
