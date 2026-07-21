"use client";
import { motion } from "framer-motion";

const stats = [
  { num: "500+", label: "Organizations worldwide using Sogolytics" },
  { num: "10M+", label: "Voice of Customer responses processed" },
  { num: "94%", label: "Average alert-to-action resolution rate" },
];

const badges = [
  {
    label: "SOC 2 Type II Certified",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "HIPAA Compliant",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    label: "GDPR Ready",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "SSO & CRM Integrations",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.07 0l1.93-1.93a5 5 0 0 0-7.07-7.07L10.5 4.5" />
        <path d="M14 11a5 5 0 0 0-7.07 0l-1.93 1.93a5 5 0 0 0 7.07 7.07L13.5 19.5" />
      </svg>
    ),
  },
];

const testimonials = [
  { quote: "[TESTIMONIAL QUOTE — a CX Director on the impact of closing the loop on customer feedback with Sogolytics.]", initials: "[I]", name: "[Name]", title: "[Title], [Company]" },
  { quote: "[TESTIMONIAL QUOTE — a VP Customer Experience on adopting Sogolytics across their CX program.]", initials: "[I]", name: "[Name]", title: "[Title], [Company]" },
];

export default function CemsTrust() {
  return (
    <section style={{ padding: "84px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Trusted Nationwide
          </p>
          <h2 style={{ fontSize: "clamp(26px,3.4vw,40px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14 }}>
            Trusted by Teams Who Take Customer Experience Seriously
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
            500+ organizations rely on Sogolytics customer experience management software to hear every voice.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, maxWidth: 820, margin: "0 auto 44px", textAlign: "center" }} className="trust-stats-grid">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}>
              <div style={{ fontSize: "clamp(32px,4.4vw,46px)", fontWeight: 700, color: "var(--green)", lineHeight: 1, letterSpacing: "-0.03em" }}>{s.num}</div>
              <div style={{ fontSize: 13.5, color: "var(--text-muted)", marginTop: 6, lineHeight: 1.4 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 44 }} className="trust-badges-grid">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10, padding: "20px 12px", background: "#fff", border: "1px solid var(--border)", borderRadius: 12 }}
            >
              <div style={{ width: 38, height: 38, borderRadius: 10, background: "var(--green-light)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green)" }}>{b.icon}</div>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--text)", lineHeight: 1.35 }}>{b.label}</div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 36, flexWrap: "wrap", marginBottom: 48 }}>
          {["LOGO 1", "LOGO 2", "LOGO 3", "LOGO 4", "LOGO 5", "LOGO 6"].map((l) => (
            <div key={l} style={{ height: 34, minWidth: 110, background: "var(--green-light)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, fontWeight: 600, color: "#a8b4b2", letterSpacing: "0.06em", padding: "0 16px" }}>
              {l}
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }} className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid var(--border)", borderRadius: 16, padding: 30, display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text)", fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto" }}>
                <div style={{ width: 46, height: 46, borderRadius: "50%", background: "var(--green-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: "var(--green)", flexShrink: 0 }}>{t.initials}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .trust-stats-grid{grid-template-columns:1fr !important;gap:20px !important;}
          .trust-badges-grid{grid-template-columns:1fr 1fr !important;}
          .testimonial-grid{grid-template-columns:1fr !important;}
        }
      `}</style>
    </section>
  );
}
