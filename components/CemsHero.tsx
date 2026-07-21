"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

function FloatCard({
  style,
  label,
  children,
}: {
  style: React.CSSProperties;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: "absolute",
        background: "#0a2c28",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: 14,
        padding: "12px 14px",
        boxShadow: "0 16px 36px rgba(0,0,0,0.4)",
        width: 128,
        ...style,
      }}
    >
      <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 8 }}>
        {label}
      </div>
      {children}
    </div>
  );
}

function useUtmCapture() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"].forEach((key) => {
      const el = document.getElementById("h_" + key) as HTMLInputElement | null;
      if (el && params.get(key)) el.value = params.get(key)!;
    });
  }, []);
}

export default function CemsHero() {
  useUtmCapture();

  return (
    <section
      style={{
        padding: "72px 24px 64px",
        background: "linear-gradient(135deg, #061a17 0%, #092224 50%, #0d3d37 100%)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px), radial-gradient(ellipse 60% 70% at 85% 15%, rgba(2,190,204,0.14) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 5% 95%, rgba(245,225,0,0.05) 0%, transparent 70%)",
          backgroundSize: "32px 32px, 32px 32px, 100% 100%, 100% 100%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative" }}>
        <div className="hero-inner" style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 48, alignItems: "start" }}>
          {/* Left: headline + photo/metrics visual */}
          <div>
            <p style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--teal)", marginBottom: 18 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--teal)", boxShadow: "0 0 0 3px rgba(2,190,204,0.2)", flexShrink: 0 }} />
              Customer Experience Management Software
            </p>
            <h1 style={{ fontSize: "clamp(32px,4vw,46px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 20 }}>
              You Don&apos;t Have a Customer Feedback Problem. <span style={{ color: "var(--teal)" }}>You Have an Action Problem.</span>
            </h1>
            <p style={{ fontSize: "clamp(16px,1.8vw,17.5px)", lineHeight: 1.6, color: "rgba(255,255,255,0.8)", marginBottom: 24, maxWidth: 480 }}>
              You&apos;re already drowning in NPS and CSAT data. Sogolytics is the <strong>customer experience management software</strong> that turns every signal into a resolved action — automatically.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 12, color: "rgba(255,255,255,0.5)", flexWrap: "wrap", marginBottom: 44 }}>
              <span>✓ SOC 2 Type II &amp; HIPAA-ready</span>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
              <span>✓ 500+ organizations nationwide</span>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
              <a
                href="#problem"
                style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.85)", fontSize: 13.5, fontWeight: 600, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.35)", paddingBottom: 2 }}
              >
                Explore the hidden cost ↓
              </a>
            </div>

            {/* Photo + floating CX-metric cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ position: "relative", maxWidth: 420, margin: "0 auto" }}
              className="hero-photo-wrap"
            >
              <div style={{ aspectRatio: "4/5", borderRadius: 20, overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.4)", background: "#0a2c28" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                  alt="Customer experience manager reviewing feedback dashboards"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              <FloatCard label="Detractors Flagged" style={{ top: -18, left: -28 }}>
                <div style={{ height: 7, background: "rgba(255,255,255,0.12)", borderRadius: 4, overflow: "hidden", marginBottom: 6 }}>
                  <div style={{ width: "78%", height: "100%", borderRadius: 4, background: "var(--green)" }} />
                </div>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#fff" }}>18 today</div>
              </FloatCard>

              <FloatCard label="Response Rate" style={{ top: "36%", right: -34, textAlign: "center" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "conic-gradient(var(--teal) 0% 91%, rgba(255,255,255,.15) 91% 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#0a2c28", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, fontWeight: 800, color: "#fff" }}>91%</div>
                </div>
              </FloatCard>

              <FloatCard label="NPS Trend" style={{ bottom: 54, left: -40, textAlign: "center" }}>
                <div style={{ fontSize: 15, color: "var(--yellow)", letterSpacing: 1 }}>+41 ↑</div>
              </FloatCard>

              <FloatCard label="Cases Resolved" style={{ bottom: -20, right: -18, textAlign: "center" }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "conic-gradient(var(--yellow) 0% 94%, rgba(255,255,255,.15) 94% 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#0a2c28", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10.5, fontWeight: 800, color: "#fff" }}>94%</div>
                </div>
              </FloatCard>
            </motion.div>
          </div>

          {/* Right: compact demo request form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ background: "#fff", borderRadius: 16, padding: "28px 26px", boxShadow: "0 30px 70px rgba(0,0,0,0.4)" }}
          >
            <h3 style={{ fontSize: 19, fontWeight: 800, color: "var(--green)", textAlign: "center", marginBottom: 8, letterSpacing: "-0.01em" }}>
              Book a Personalized Demo
            </h3>
            <p style={{ fontSize: 13, color: "var(--text-muted)", textAlign: "center", marginBottom: 20, lineHeight: 1.5 }}>
              See the platform live in 30 minutes — no commitment required.
            </p>
            <form
              id="heroForm"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const btn = form.querySelector("button[type=submit]") as HTMLButtonElement;
                btn.disabled = true;
                btn.textContent = "Submitting…";
                setTimeout(() => {
                  form.innerHTML =
                    '<div style="text-align:center;padding:16px 0"><div style="font-size:32px;margin-bottom:10px">✓</div><h3 style="color:#0a1a18;font-size:16px;margin-bottom:6px">You\'re on the calendar!</h3><p style="color:#5a6472;font-size:13px">A Sogolytics specialist will reach out within 1 business day.</p></div>';
                }, 700);
              }}
            >
              <input type="hidden" id="h_utm_source" name="utm_source" />
              <input type="hidden" id="h_utm_medium" name="utm_medium" />
              <input type="hidden" id="h_utm_campaign" name="utm_campaign" />
              <input type="hidden" id="h_gclid" name="gclid" />
              <input type="hidden" name="page_variant" value="customer-experience-management-software-hero" />
              {[
                { name: "full_name", type: "text", placeholder: "Name (First, Last)*", required: true },
                { name: "email", type: "email", placeholder: "Work email*", required: true },
                { name: "phone", type: "tel", placeholder: "Phone number", required: false },
                { name: "company", type: "text", placeholder: "Company name", required: false },
              ].map((f) => (
                <div key={f.name} style={{ marginBottom: 12 }}>
                  <input
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    required={f.required}
                    className="form-input"
                    style={{ background: "#edf0f1", border: "none", padding: "13px 15px" }}
                  />
                </div>
              ))}
              <button
                type="submit"
                style={{
                  width: "100%",
                  marginTop: 6,
                  background: "#F5E100",
                  color: "#0a1a18",
                  fontSize: 15,
                  fontWeight: 700,
                  padding: "14px 20px",
                  border: "none",
                  borderRadius: 10,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#e6d400")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#F5E100")}
              >
                Submit
              </button>
            </form>
            <p style={{ fontSize: 10.5, color: "var(--text-light)", textAlign: "center", marginTop: 10, lineHeight: 1.4 }}>
              By submitting you agree to our Privacy Policy. We never sell your data.
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:980px){
          .hero-inner{grid-template-columns:1fr !important;gap:40px !important;}
        }
        @media(max-width:768px){
          .hero-photo-wrap{max-width:300px !important;}
        }
      `}</style>
    </section>
  );
}
