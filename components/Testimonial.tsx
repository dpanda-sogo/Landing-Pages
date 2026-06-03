"use client";
import { motion } from "framer-motion";

export default function Testimonial() {
  return (
    <section style={{ background: "var(--green)", color: "#fff", padding: "72px 0" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 780, margin: "0 auto", textAlign: "center" }}
        >
          <div
            style={{
              fontSize: 56,
              lineHeight: 1,
              opacity: 0.3,
              marginBottom: 16,
              fontFamily: "Georgia, serif",
            }}
          >
            &ldquo;
          </div>
          <p
            style={{
              fontSize: "clamp(18px,2.2vw,24px)",
              fontWeight: 500,
              lineHeight: 1.55,
              marginBottom: 28,
              opacity: 0.95,
            }}
          >
            [TESTIMONIAL QUOTE — 2–3 sentences from a CX Director, VP Customer Experience, or COO on the impact of unifying their feedback programs in Sogolytics.]
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                border: "2px solid rgba(255,255,255,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              [I]
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, textAlign: "left" }}>[Name]</div>
              <div style={{ fontSize: 13, opacity: 0.75, textAlign: "left" }}>[Title], [Company]</div>
            </div>
            <div
              style={{
                height: 28,
                background: "rgba(255,255,255,0.15)",
                borderRadius: 4,
                padding: "4px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.05em",
                minWidth: 80,
              }}
            >
              [CO. LOGO]
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
