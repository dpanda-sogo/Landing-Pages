"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { MockStatRow, MockBar } from "./MockScreen";

const trustItems = ["SOC 2 Type II", "HIPAA-ready", "GDPR", "500+ Organizations"];

function TrustRow() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center" }}>
      {trustItems.map((item) => (
        <span
          key={item}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
          }}
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

export default function Hero() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((key) => {
      const el = document.getElementById(key) as HTMLInputElement | null;
      if (el && params.get(key)) el.value = params.get(key)!;
    });
  }, []);

  const scrollToFinalCTA = () => {
    document.getElementById("finalCTA")?.scrollIntoView({ behavior: "smooth" });
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
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
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
            {/* Eyebrow pill */}
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
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#0D6E65",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              For CX, EX &amp; Research Teams
            </span>

            <h1
              style={{
                fontSize: "clamp(32px,4vw,46px)",
                fontWeight: 700,
                lineHeight: 1.15,
                marginBottom: 20,
                letterSpacing: "-0.02em",
                color: "#fff",
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
                color: "rgba(255,255,255,0.88)",
                marginBottom: 32,
                maxWidth: 520,
              }}
            >
              Sogolytics unifies NPS, VoC, employee feedback, and sentiment analysis
              in a single secure platform — with real-time dashboards your leadership
              team will actually use.
            </p>

            <div style={{ marginBottom: 32 }}>
              <YellowButton onClick={scrollToFinalCTA}>Request a Demo</YellowButton>
            </div>

            <TrustRow />
          </motion.div>

          {/* Right: image + floating dashboard card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80"
              alt="Professional with tablet"
              style={{
                width: "100%",
                height: 500,
                objectFit: "cover",
                objectPosition: "top center",
                borderRadius: 16,
                display: "block",
              }}
            />

            {/* Floating dashboard card */}
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: -20,
                background: "#fff",
                borderRadius: 12,
                padding: "16px 18px",
                boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
                width: 260,
                color: "var(--text)",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", marginBottom: 10, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Live NPS Dashboard
              </div>
              <MockStatRow
                stats={[
                  { num: "72", label: "NPS Score" },
                  { num: "94%", label: "Response Rate" },
                  { num: "↑8", label: "vs Last Qtr" },
                ]}
              />
              <MockBar label="Promoters" pct={74} val="74%" color="#0D6E65" />
              <MockBar label="Passives" pct={18} val="18%" color="#e6b800" />
              <MockBar label="Detractors" pct={8} val="8%" color="#e05c5c" />
            </div>
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
