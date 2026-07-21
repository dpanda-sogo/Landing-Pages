"use client";
import { motion } from "framer-motion";
import { MockBar } from "@/components/MockScreen";
import { RaterAvatars, CompletionRing } from "./mocks";
import { SectionHead } from "./ui";

const card = {
  background: "#fff",
  border: "1px solid var(--border)",
  borderRadius: 16,
  padding: 28,
} as const;

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 46,
        height: 46,
        borderRadius: 12,
        background: "var(--green-light)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
        color: "var(--green)",
      }}
    >
      {children}
    </div>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontSize: 19, fontWeight: 800, marginBottom: 8, letterSpacing: "-0.01em" }}>{children}</h3>;
}
function Desc({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 14.5, color: "var(--text-muted)", lineHeight: 1.6 }}>{children}</p>;
}

const fadeUp = (i: number) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.07, duration: 0.45 },
});

export default function Differentiators() {
  return (
    <section style={{ padding: "84px 0", background: "var(--bg-soft)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <SectionHead
          eyebrow="Why Sogolytics for 360"
          title="A complete multi-rater study — not a template bolted onto a survey"
          sub="Four things most 360 tools make hard. We made them the default."
        />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 20 }} className="bento">
          {/* Design — wide */}
          <motion.div {...fadeUp(0)} style={{ ...card, gridColumn: "span 4" }} className="b-4">
            <Icon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={22} height={22}>
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Icon>
            <Title>Design that matches your process</Title>
            <Desc>
              Fully customizable competency frameworks, rating scales, and question logic. Build from a template
              or start from scratch — your model, your language, your scale.
            </Desc>
            <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="design-mini">
              <div style={{ background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: 10, padding: 14 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
                  Competencies
                </div>
                {["Leadership", "Communication", "Execution"].map((c) => (
                  <div key={c} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ display: "grid", gap: 2 }}>
                      {[0, 1].map((d) => (
                        <span key={d} style={{ display: "flex", gap: 2 }}>
                          <i style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--text-light)", display: "block" }} />
                          <i style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--text-light)", display: "block" }} />
                        </span>
                      ))}
                    </span>
                    <span style={{ fontSize: 12, color: "var(--text)", fontWeight: 600 }}>{c}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: 10, padding: 14 }}>
                <div style={{ fontSize: 10, fontWeight: 700, color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>
                  Rating scale
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      style={{
                        flex: 1,
                        height: 26,
                        borderRadius: 6,
                        background: n <= 4 ? "var(--green)" : "#fff",
                        border: n <= 4 ? "none" : "1px solid var(--border)",
                        color: n <= 4 ? "#fff" : "var(--text-light)",
                        fontSize: 11,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {n}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: 10, color: "var(--text-light)", marginTop: 8 }}>1–5, custom labels &amp; N/A</div>
              </div>
            </div>
          </motion.div>

          {/* Multi-rater — tall */}
          <motion.div {...fadeUp(1)} style={{ ...card, gridColumn: "span 2", display: "flex", flexDirection: "column" }} className="b-2">
            <Icon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={22} height={22}>
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </Icon>
            <Title>Multi-rater, minus the admin</Title>
            <Desc>Automated routing, reminder sequences, and anonymity controls do the chasing for you.</Desc>
            <div style={{ marginTop: "auto", paddingTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <RaterAvatars />
              <CompletionRing pct={88} size={78} />
            </div>
          </motion.div>

          {/* Analytics — half */}
          <motion.div {...fadeUp(2)} style={{ ...card, gridColumn: "span 3" }} className="b-3">
            <Icon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={22} height={22}>
                <path d="M3 3v18h18" />
                <path d="M7 14l4-4 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Icon>
            <Title>Analytics deeper than averages</Title>
            <Desc>Competency gap analysis, self-vs-rater benchmarks, and NLP on open-text — in reports managers can use.</Desc>
            <div style={{ marginTop: 18, background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: 10, padding: 14 }}>
              <MockBar label="Manager" pct={86} val="4.3" />
              <MockBar label="Peers" pct={84} val="4.2" />
              <MockBar label="Self" pct={68} val="3.4" color="var(--teal)" />
            </div>
          </motion.div>

          {/* Flexibility — half */}
          <motion.div {...fadeUp(3)} style={{ ...card, gridColumn: "span 3" }} className="b-3">
            <Icon>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={22} height={22}>
                <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
              </svg>
            </Icon>
            <Title>Run it your way</Title>
            <Desc>A one-time leadership study, an always-on development program, or client engagements you white-label and resell.</Desc>
            <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["One-time study", "Ongoing program", "Consulting engagement"].map((p) => (
                <span
                  key={p}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "7px 12px",
                    borderRadius: 20,
                    background: "var(--green-light)",
                    color: "var(--green)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media(max-width:860px){
          .bento{grid-template-columns:1fr 1fr !important;}
          .b-4,.b-3,.b-2{grid-column:span 2 !important;}
        }
        @media(max-width:560px){
          .bento{grid-template-columns:1fr !important;}
          .b-4,.b-3,.b-2{grid-column:span 1 !important;}
          .design-mini{grid-template-columns:1fr 1fr !important;}
        }
      `}</style>
    </section>
  );
}
