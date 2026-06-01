"use client";
import { useEffect, useState } from "react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("finalCTA")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--border)",
        padding: "12px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.sogolytics.com/wp-content/uploads/2022/07/sogolytics-wbg.png"
        alt="Sogolytics"
        style={{ height: 28 }}
      />
      <button
        onClick={scrollToForm}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "#F5E100",
          color: "#0a1a18",
          fontWeight: 700,
          borderRadius: 50,
          padding: "8px 20px 8px 6px",
          border: "none",
          cursor: "pointer",
          fontSize: 14,
          fontFamily: "inherit",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background = "#e6d400")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.background = "#F5E100")
        }
      >
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "#0a1a18",
            color: "#F5E100",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          →
        </span>
        Request a Demo
      </button>
    </div>
  );
}
