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
    document.getElementById("heroForm")?.scrollIntoView({ behavior: "smooth" });
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
          background: "var(--green)",
          color: "#fff",
          padding: "8px 20px",
          borderRadius: 6,
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          border: "none",
          fontFamily: "inherit",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          ((e.target as HTMLButtonElement).style.background = "var(--green-dark)")
        }
        onMouseLeave={(e) =>
          ((e.target as HTMLButtonElement).style.background = "var(--green)")
        }
      >
        Request a Demo
      </button>
    </div>
  );
}
