"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Can we use our existing competency framework?",
    a: "Yes, fully customizable. Bring your own competencies, rating scales, and question logic, or start from a template and adapt it.",
  },
  {
    q: "How is anonymity managed?",
    a: "Configurable thresholds with automatic suppression below minimum respondent counts, so individual raters in a group are never identifiable.",
  },
  {
    q: "Can we integrate with our HRIS or LMS?",
    a: "Yes, via API and native integrations including Salesforce, BambooHR, and Workday — to pre-populate participant lists and push results back.",
  },
];

export default function Objections() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ padding: "72px 0", background: "var(--bg-soft)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Common questions
          </p>
          <h2 style={{ fontSize: "clamp(26px,3vw,36px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Quick answers before your demo
          </h2>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {faqs.map((faq, i) => (
            <div key={faq.q} style={{ borderBottom: "1px solid var(--border)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  padding: "20px 0",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "inherit",
                  fontSize: 15,
                  fontWeight: 600,
                  color: open === i ? "var(--green)" : "var(--text)",
                  gap: 16,
                  transition: "color 0.2s",
                }}
              >
                {faq.q}
                <motion.svg
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  style={{ flexShrink: 0, color: "var(--text-light)" }}
                >
                  <path d="M6 9l6 6 6-6" />
                </motion.svg>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, paddingBottom: 18 }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
