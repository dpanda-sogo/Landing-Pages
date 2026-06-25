"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { MockScreen, MockStatRow, MockBar, MockTag, MockChartArea } from "@/components/MockScreen";
import { YellowButton, scrollToForm } from "./ui";

// Sogolytics sales line — verify/replace before publishing.
const PHONE_DISPLAY = "+1 (800) 646-0520";
const PHONE_HREF = "tel:+18006460520";

function TopBar() {
  return (
    <div
      style={{
        maxWidth: 1160,
        margin: "0 auto",
        padding: "0 24px 36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.sogolytics.com/wp-content/uploads/2022/07/sogolytics-wbg.png"
        alt="Sogolytics"
        style={{ height: 30 }}
      />
      <a
        href={PHONE_HREF}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: 15,
          fontWeight: 600,
          color: "#fff",
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#02BECC" strokeWidth={2} width={18} height={18}>
          <path
            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {PHONE_DISPLAY}
      </a>
    </div>
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
        padding: "28px 0 64px",
        background: "linear-gradient(135deg, #061a17 0%, #0a2e29 60%, #0d3d37 100%)",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <TopBar />

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
              360° Multi-Rater Feedback
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
              360-Degree Feedback Built for{" "}
              <span style={{ color: "var(--teal)" }}>Real Performance Programs</span>
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
              Most 360 tools give you a form. Sogolytics gives you a complete multi-rater
              study, advanced analytics, and the flexibility to run it your way.
            </p>

            <div>
              <YellowButton onClick={scrollToForm}>See a 15-Minute Demo</YellowButton>
            </div>
          </motion.div>

          {/* Right: 360 scorecard mock */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            <MockScreen title="360 Competency Scorecard">
              <MockStatRow
                stats={[
                  { num: "4.2", label: "Overall Rating" },
                  { num: "12", label: "Raters" },
                  { num: "+0.4", label: "vs Self" },
                ]}
              />
              <MockChartArea label="Competency ratings — by rater group">
                <MockBar label="Self" pct={68} val="3.4" color="var(--teal)" />
                <MockBar label="Manager" pct={86} val="4.3" />
                <MockBar label="Peers" pct={84} val="4.2" />
                <MockBar label="Reports" pct={80} val="4.0" />
              </MockChartArea>
              <MockChartArea label="Largest blind spots">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <MockTag label="Delegation gap −0.9" variant="amber" />
                  <MockTag label="Strategic vision ↑" variant="green" />
                  <MockTag label="Coaching ↑" variant="green" />
                </div>
              </MockChartArea>
            </MockScreen>
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
