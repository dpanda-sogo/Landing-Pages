"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { MockScreen, MockStatRow } from "@/components/MockScreen";
import { CompetencyRadar, InsightChip, CompletionRing } from "./mocks";
import { YellowButton, GhostButton, scrollToForm } from "./ui";

// Sogolytics sales line — verify/replace before publishing.
const PHONE_DISPLAY = "+1 (800) 646-0520";
const PHONE_HREF = "tel:+18006460520";

function TopBar() {
  return (
    <div
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "0 24px 44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.sogolytics.com/wp-content/uploads/2022/07/sogolytics-wbg.png"
        alt="Sogolytics"
        style={{ height: 30 }}
      />
      <a href={PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "#fff" }}>
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
        padding: "28px 0 72px",
        background: "radial-gradient(1100px 520px at 78% -8%, #115049 0%, transparent 60%), linear-gradient(135deg, #04130f 0%, #0a2e29 58%, #0d3d37 100%)",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* grid texture */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
          maskImage: "radial-gradient(900px 500px at 70% 10%, #000 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(900px 500px at 70% 10%, #000 0%, transparent 75%)",
          pointerEvents: "none",
        }}
      />
      {/* glow blob */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          left: -80,
          width: 420,
          height: 420,
          background: "radial-gradient(circle, rgba(2,190,204,0.25) 0%, transparent 70%)",
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      <TopBar />

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "center" }}
          className="hero-grid"
        >
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.16)",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "7px 14px",
                borderRadius: 30,
                marginBottom: 24,
                backdropFilter: "blur(6px)",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#02BECC", boxShadow: "0 0 0 4px rgba(2,190,204,0.25)" }} />
              360° Multi-Rater Feedback
            </span>

            <h1
              style={{
                fontSize: "clamp(34px,4.6vw,56px)",
                fontWeight: 800,
                lineHeight: 1.06,
                marginBottom: 22,
                letterSpacing: "-0.03em",
                color: "#fff",
              }}
            >
              360-degree feedback built for{" "}
              <span
                style={{
                  background: "linear-gradient(100deg,#02BECC 0%,#5ee0c0 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                real performance programs
              </span>
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.6, color: "rgba(255,255,255,0.85)", marginBottom: 34, maxWidth: 540 }}>
              Most 360 tools give you a form. Sogolytics gives you a complete multi-rater study — custom
              competency frameworks, automated rater management, and analytics that go far deeper than averages.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", marginBottom: 30 }}>
              <YellowButton onClick={scrollToForm}>See a 15-Minute Demo</YellowButton>
              <GhostButton onClick={() => document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })}>
                How it works
              </GhostButton>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 22px", alignItems: "center" }}>
              {["Bring your own competencies", "Anonymity built in", "Live in days, not months"].map((t) => (
                <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#02BECC" strokeWidth={2.5} width={15} height={15}>
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: dashboard cluster */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{ position: "relative" }}
            className="hero-visual"
          >
            <MockScreen title="360 Competency Scorecard — J. Rivera">
              <MockStatRow
                stats={[
                  { num: "4.2", label: "Overall" },
                  { num: "12", label: "Raters" },
                  { num: "+0.6", label: "vs Self" },
                ]}
              />
              <div style={{ background: "#fff", borderRadius: 8, padding: 12, border: "1px solid var(--border)" }}>
                <div style={{ fontSize: 11, color: "var(--text-light)", marginBottom: 4, fontWeight: 600 }}>
                  Competency profile — self vs. all raters
                </div>
                <CompetencyRadar size={240} />
              </div>
            </MockScreen>

            {/* floating completion ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                position: "absolute",
                top: -26,
                right: -22,
                background: "#fff",
                borderRadius: 14,
                padding: "12px 14px",
                boxShadow: "0 14px 44px rgba(0,0,0,0.28)",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
              className="hero-float-ring"
            >
              <CompletionRing pct={88} size={72} />
              <div style={{ color: "var(--text)" }}>
                <div style={{ fontSize: 11, color: "var(--text-light)", fontWeight: 600 }}>Response rate</div>
                <div style={{ fontSize: 13, fontWeight: 700 }}>Auto-reminders on</div>
              </div>
            </motion.div>

            {/* floating AI insight */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              style={{ position: "absolute", bottom: -30, left: -26, width: 268, color: "var(--text)" }}
              className="hero-float-ai"
            >
              <InsightChip>
                <strong>AI insight:</strong> Delegation is J. Rivera&apos;s largest blind spot — −0.9 below peer ratings.
              </InsightChip>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:920px){
          .hero-grid{grid-template-columns:1fr !important;gap:56px !important;}
          .hero-float-ai{left:0 !important;}
          .hero-float-ring{right:0 !important;}
        }
        @media(max-width:520px){
          .hero-float-ai{position:static !important;width:100% !important;margin-top:20px;}
        }
      `}</style>
    </section>
  );
}
