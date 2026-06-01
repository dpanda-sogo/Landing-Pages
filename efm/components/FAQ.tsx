"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does enterprise implementation take?",
    a: "Most enterprise teams are fully live within 3–4 weeks. This includes SSO/SAML setup, CRM integration, user provisioning, and your first survey launch. A named Customer Success Manager runs the entire process — you're not handed off to documentation.",
  },
  {
    q: "Does it integrate with Salesforce and our existing tech stack?",
    a: "Yes. Pre-built connectors for Salesforce, HubSpot, Zendesk, ServiceNow, Microsoft Dynamics, Slack, Teams, Tableau, and Power BI. Plus a REST API for custom integrations with proprietary systems. Most integrations take under an hour to configure.",
  },
  {
    q: "Can we run CX and EX programs in the same account?",
    a: "That's exactly what Sogolytics is designed for. CX and EX programs run in the same platform with separate workspaces, separate access controls, and unified executive reporting. Your CX team and HR team each see only what's relevant to them — leadership sees the full picture.",
  },
  {
    q: "How is pricing structured for enterprise?",
    a: "Enterprise pricing is custom based on number of users, survey volume, and programs required. We don't publish a price sheet because every deployment is different. The demo call includes a scoping conversation so we can give you an accurate proposal — usually within 24 hours.",
  },
  {
    q: "What does the SOC 2 Type II certification cover?",
    a: "Our SOC 2 Type II audit covers security, availability, and confidentiality trust service criteria. The full audit report is available under NDA for enterprise procurement teams. We also maintain HIPAA compliance documentation and can provide a Business Associate Agreement (BAA) for healthcare customers.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: "72px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Common questions
          </p>
          <h2 style={{ fontSize: "clamp(26px,3vw,36px)", fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Before you book the demo
          </h2>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              style={{ borderBottom: "1px solid var(--border)" }}
            >
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
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--text-muted)",
                        lineHeight: 1.7,
                        paddingBottom: 18,
                      }}
                    >
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
