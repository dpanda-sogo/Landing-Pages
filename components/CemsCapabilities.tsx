"use client";
import { motion } from "framer-motion";

const mockupCards = [
  {
    badge: "Journey Map",
    title: "Customer Journey Mapping",
    desc: "See where experience breaks down — onboarding, support, renewal — across the full lifecycle.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 6v16l7-4 8 4 7-4V0l-7 4-8-4-7 4z" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    badge: "Live Dashboard",
    title: "Actionable Dashboards",
    desc: "Role-based views for CX leaders, managers, and executive reporting — not a raw data export.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },
  {
    badge: "Benchmarks",
    title: "Benchmark CX Performance",
    desc: "Compare NPS, CSAT, and CES across teams, regions, and time periods to see what's working.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

const photoCards = [
  {
    badge: "AI Sentiment",
    title: "AI Sentiment Analysis",
    desc: "Understand what open-ended responses really mean, at the scale of your entire customer base.",
    photo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
    alt: "Team reviewing AI sentiment analysis on customer feedback",
  },
  {
    badge: "Omnichannel",
    title: "Omnichannel Feedback",
    desc: "Reach customers with surveys across email, SMS, web, in-app, and QR — wherever they already are.",
    photo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80",
    alt: "Customer completing a feedback survey on a mobile device",
  },
  {
    badge: "Early Warning",
    title: "Real-Time Alerts",
    desc: "Flag detractor responses automatically so managers respond before small issues escalate.",
    photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80",
    alt: "Customer success manager responding to a real-time alert",
  },
];

export default function CemsCapabilities() {
  return (
    <section style={{ padding: "84px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Platform Capabilities
          </p>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14 }}>
            One Unified CX Platform — Every Signal, One Login
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
            Six integrated capabilities. One source of truth for every customer signal.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }} className="cap-grid">
          {mockupCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
              style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}
            >
              <div style={{ height: 148, background: "linear-gradient(145deg, var(--green-light) 0%, #dcecea 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "#fff", boxShadow: "0 8px 20px rgba(13,110,101,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green)" }}>
                  {c.icon}
                </div>
                <span style={{ position: "absolute", bottom: 10, left: 10, fontSize: 9.5, fontWeight: 700, padding: "4px 9px", borderRadius: 20, background: "rgba(9,34,36,0.75)", color: "#fff" }}>{c.badge}</span>
              </div>
              <div style={{ padding: "22px 22px 24px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 7 }}>{c.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            </motion.div>
          ))}
          {photoCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 3) * 0.08, duration: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
              style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}
            >
              <div style={{ height: 148, position: "relative", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.photo} alt={c.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <span style={{ position: "absolute", bottom: 10, left: 10, fontSize: 9.5, fontWeight: 700, padding: "4px 9px", borderRadius: 20, background: "rgba(9,34,36,0.75)", color: "#fff", backdropFilter: "blur(4px)" }}>{c.badge}</span>
              </div>
              <div style={{ padding: "22px 22px 24px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 7 }}>{c.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.cap-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
