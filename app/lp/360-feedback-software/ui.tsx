"use client";
import React from "react";

export function scrollToForm() {
  document.getElementById("finalCTA")?.scrollIntoView({ behavior: "smooth" });
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
