"use client";
import { motion } from "framer-motion";

const logos = [
  { name: "LOGO 1" },
  { name: "LOGO 2" },
  { name: "LOGO 3" },
  { name: "LOGO 4" },
  { name: "LOGO 5" },
  { name: "LOGO 6" },
];

export default function LogoBar() {
  return (
    <section
      style={{
        padding: "36px 0",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: 12,
            fontWeight: 600,
            color: "var(--text-light)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Enterprise and mid-market teams trust Sogolytics for mission-critical feedback
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          {logos.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              style={{
                width: 110,
                height: 40,
                background: "var(--bg-soft)",
                border: "1px dashed var(--border)",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 600,
                color: "var(--text-light)",
                letterSpacing: "0.05em",
              }}
            >
              {l.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
