"use client";
import React from "react";

export function scrollToForm() {
  document.getElementById("finalCTA")?.scrollIntoView({ behavior: "smooth" });
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      style={{
        fontSize: 12,
        fontWeight: 700,
        color: light ? "var(--teal)" : "var(--green)",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: 12,
      }}
    >
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div style={{ textAlign: align, marginBottom: 56, maxWidth: align === "center" ? 680 : undefined, marginInline: align === "center" ? "auto" : undefined }}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        style={{
          fontSize: "clamp(28px,3.4vw,40px)",
          fontWeight: 800,
          lineHeight: 1.12,
          letterSpacing: "-0.025em",
          marginBottom: sub ? 16 : 0,
          color: light ? "#fff" : "var(--text)",
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            fontSize: 17,
            color: light ? "rgba(255,255,255,0.82)" : "var(--text-muted)",
            lineHeight: 1.65,
            maxWidth: 600,
            marginInline: align === "center" ? "auto" : undefined,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export function GhostButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: "transparent",
        color: "#fff",
        fontWeight: 600,
        borderRadius: 50,
        padding: "13px 24px",
        border: "1.5px solid rgba(255,255,255,0.35)",
        cursor: "pointer",
        fontSize: 15,
        fontFamily: "inherit",
        transition: "border-color 0.2s, background 0.2s",
      }}
      onMouseEnter={(e) => {
        const b = e.currentTarget as HTMLButtonElement;
        b.style.borderColor = "rgba(255,255,255,0.7)";
        b.style.background = "rgba(255,255,255,0.06)";
      }}
      onMouseLeave={(e) => {
        const b = e.currentTarget as HTMLButtonElement;
        b.style.borderColor = "rgba(255,255,255,0.35)";
        b.style.background = "transparent";
      }}
    >
      {children}
    </button>
  );
}

export function YellowButton({
  children,
  onClick,
  type = "button",
  full = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  full?: boolean;
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        display: full ? "flex" : "inline-flex",
        width: full ? "100%" : undefined,
        alignItems: "center",
        justifyContent: full ? "center" : undefined,
        gap: 12,
        background: "#F5E100",
        color: "#0a1a18",
        fontWeight: 700,
        borderRadius: 50,
        padding: "14px 28px 14px 8px",
        border: "none",
        cursor: "pointer",
        fontSize: 16,
        fontFamily: "inherit",
        transition: "background 0.2s",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#e6d400")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#F5E100")}
    >
      <span
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#0a1a18",
          color: "#F5E100",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        →
      </span>
      {children}
    </button>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((item) => (
        <li
          key={item}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            fontSize: 14,
            color: "var(--text-muted)",
            lineHeight: 1.55,
          }}
        >
          <span
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "var(--green-light)",
              flexShrink: 0,
              marginTop: 2,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width={10} height={8} viewBox="0 0 10 8" fill="none">
              <path d="M1 4l3 3 5-6" stroke="#0D6E65" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
