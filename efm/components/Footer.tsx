"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a2c28",
        color: "rgba(255,255,255,0.7)",
        padding: 24,
        textAlign: "center",
        fontSize: 13,
      }}
    >
      <p style={{ marginBottom: 10 }}>
        {[
          { href: "https://www.sogolytics.com/privacy-policy/", label: "Privacy Policy" },
          { href: "https://www.sogolytics.com/terms-of-service/", label: "Terms of Service" },
          { href: "https://www.sogolytics.com/anti-spam-policy/", label: "Anti-Spam Policy" },
          { href: "https://www.sogolytics.com/safe-harbour-and-survey-data-security/", label: "Data & Security" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.6)", margin: "0 10px", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)")}
          >
            {link.label}
          </a>
        ))}
      </p>
      <p>© 2026 Sogolytics, Inc. All rights reserved.</p>
    </footer>
  );
}
