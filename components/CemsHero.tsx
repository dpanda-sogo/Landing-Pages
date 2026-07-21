"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

const trustItems = ["SOC 2 Type II", "HIPAA-ready", "GDPR", "500+ Organizations"];

function TrustRow() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center" }}>
      {trustItems.map((item) => (
        <span
          key={item}
          style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#02BECC" strokeWidth={2.5} width={16} height={16}>
            <circle cx={12} cy={12} r={10} />
            <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {item}
        </span>
      ))}
    </div>
  );
}

function YellowButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        background: "#F5E100",
        color: "#0a1a18",
        fontWeight: 700,
        borderRadius: 50,
        padding: "14px 28px 14px 8px",
        border: "none",
        cursor: "pointer",
        fontSize: 16,
        fontFamily: "inherit",
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#e6d400")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#F5E100")}
    >
      <span
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#0a1a18",
          color: "#F5E100",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        →
      </span>
      {children}
    </button>
  );
}

function GhostButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "transparent",
        color: "#fff",
        fontWeight: 600,
        borderRadius: 50,
        padding: "13px 22px",
        border: "1.5px solid rgba(255,255,255,0.3)",
        cursor: "pointer",
        fontSize: 15,
        fontFamily: "inherit",
        transition: "border-color 0.2s, background 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.7)";
        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.06)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
      }}
    >
      {children}
      <span aria-hidden>↓</span>
    </button>
  );
}

const flowSteps = [
  { label: "Feedback captured", sub: "Survey, review, support ticket" },
  { label: "AI detects signal", sub: "Sentiment + intent analysis" },
  { label: "Alert triggered", sub: "Detractor flagged in real time" },
  { label: "Owner assigned", sub: "Routed via workflow automation" },
  { label: "Action closed", sub: "Customer retained" },
];

function WorkflowVisual() {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: 16,
        padding: "28px 24px",
        backdropFilter: "blur(8px)",
      }}
    >
      <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.55)", marginBottom: 22, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        From signal to action — automatically
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {flowSteps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
            style={{ display: "flex", alignItems: "flex-start", gap: 14 }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <span
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: i === flowSteps.length - 1 ? "#02BECC" : "rgba(255,255,255,0.12)",
                  color: i === flowSteps.length - 1 ? "#061a17" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                  border: i === flowSteps.length - 1 ? "none" : "1px solid rgba(255,255,255,0.25)",
                }}
              >
                {i === flowSteps.length - 1 ? "✓" : i + 1}
              </span>
              {i < flowSteps.length - 1 && (
                <span style={{ width: 1.5, flex: 1, minHeight: 22, background: "rgba(255,255,255,0.18)" }} />
              )}
            </div>
            <div style={{ paddingBottom: i < flowSteps.length - 1 ? 22 : 0 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{step.label}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>{step.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function CemsHero() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid"].forEach((key) => {
      const el = document.getElementById(key) as HTMLInputElement | null;
      if (el && params.get(key)) el.value = params.get(key)!;
    });
  }, []);

  const scrollToFinalCTA = () => {
    document.getElementById("finalCTA")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToStory = () => {
    document.getElementById("customer-journey")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        padding: "80px 0 60px",
        background: "linear-gradient(135deg, #061a17 0%, #0a2e29 60%, #0d3d37 100%)",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 48, alignItems: "center", position: "relative", zIndex: 1 }}
          className="hero-grid"
        >
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "#fff",
                color: "#0a1a18",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: 20,
                marginBottom: 20,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0D6E65", flexShrink: 0, display: "inline-block" }} />
              Customer Experience Management Software
            </span>

            <h1 style={{ fontSize: "clamp(30px,3.6vw,44px)", fontWeight: 700, lineHeight: 1.14, marginBottom: 20, letterSpacing: "-0.02em", color: "#fff" }}>
              You Don&apos;t Have a Customer Feedback Problem.
              <br />
              You Have an <span style={{ color: "var(--teal)" }}>Action</span> Problem.
            </h1>

            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.88)", marginBottom: 32, maxWidth: 480 }}>
              You&apos;re already drowning in NPS and CSAT data. Sogolytics is the <strong>customer experience management software</strong> that turns every signal into a resolved action — automatically.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 32 }}>
              <YellowButton onClick={scrollToFinalCTA}>Request a Demo</YellowButton>
              <GhostButton onClick={scrollToStory}>See how it works</GhostButton>
            </div>

            <TrustRow />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}>
            <WorkflowVisual />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .hero-grid{grid-template-columns:1fr !important;}
        }
      `}</style>
    </section>
  );
}
