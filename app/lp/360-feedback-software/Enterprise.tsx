"use client";
import { motion } from "framer-motion";
import { MockScreen, MockChartArea, MockBar, MockTag } from "@/components/MockScreen";
import { CheckList } from "./ui";

export default function Enterprise() {
  return (
    <section style={{ padding: "72px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div
          className="ent-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p style={{ fontSize: 12, fontWeight: 600, color: "var(--green)", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 10 }}>
              Built for enterprise, not just HR
            </p>
            <h2 style={{ fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 700, lineHeight: 1.25, marginBottom: 18, letterSpacing: "-0.01em" }}>
              Scales across business units, security reviews, and consulting engagements
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>Role-based access</h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65 }}>
                  Managers see their team&apos;s results, executives see rollups, HR sees everything.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>HRIS integration</h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65 }}>
                  Pre-populate participant lists from your HRIS and push results back automatically.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>White-label options</h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65 }}>
                  For consulting firms and enterprise L&amp;D teams running programs across business units.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <MockScreen title="Program Administration">
              <MockChartArea label="Access by role — active users">
                <MockBar label="HR Admin" pct={20} val="4" />
                <MockBar label="Executive" pct={35} val="9" />
                <MockBar label="Manager" pct={75} val="38" color="var(--teal)" />
                <MockBar label="Participant" pct={95} val="412" />
              </MockChartArea>
              <MockChartArea label="Integrations & status">
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  <MockTag label="Workday synced ✓" variant="green" />
                  <MockTag label="BambooHR ✓" variant="green" />
                  <MockTag label="Salesforce ✓" variant="green" />
                  <MockTag label="White-label: ON" variant="blue" />
                </div>
              </MockChartArea>
              <CheckList items={["Anonymity thresholds enforced platform-wide", "Full audit trail for procurement review"]} />
            </MockScreen>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.ent-grid{grid-template-columns:1fr !important;gap:32px !important;}}`}</style>
    </section>
  );
}
