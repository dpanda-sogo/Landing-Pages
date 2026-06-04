"use client";
import Link from "next/link";

export interface LandingPage {
  slug: string;
  title: string;
  description: string;
  date: string;
  tag: string;
  tagColor?: string;
  tagBg?: string;
  htmlFile?: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function IndexPageClient({ pages }: { pages: LandingPage[] }) {
  return (
    <div style={{ minHeight: "100vh", background: "#f0f4f3", fontFamily: "'Epilogue', system-ui, sans-serif" }}>

      {/* Header */}
      <header style={{
        background: "#fff",
        borderBottom: "1px solid #e2e6ea",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://cdn.sogolytics.com/wp-content/uploads/2022/07/sogolytics-wbg.png"
            alt="Sogolytics"
            style={{ height: 26 }}
          />
          <div style={{ width: 1, height: 20, background: "#e2e6ea" }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#8a94a0", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Landing Pages
          </span>
        </div>
        <span style={{
          fontSize: 12,
          fontWeight: 600,
          background: "#e8f4f3",
          color: "#0D6E65",
          padding: "4px 12px",
          borderRadius: 20,
        }}>
          {pages.length} page{pages.length !== 1 ? "s" : ""}
        </span>
      </header>

      {/* Hero banner */}
      <div style={{
        background: "linear-gradient(135deg, #061a17 0%, #0a2e29 60%, #0d3d37 100%)",
        padding: "56px 40px",
        textAlign: "center",
        color: "#fff",
      }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#02BECC", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
          Sogolytics · Campaign Hub
        </p>
        <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.2 }}>
          Landing Pages
        </h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", maxWidth: 480, margin: "0 auto" }}>
          All active campaign pages in one place. Click any card to preview the live page.
        </p>
      </div>

      {/* Cards grid */}
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
          {[
            { label: "Total Pages", value: pages.length },
            { label: "Google Ads", value: pages.filter(p => p.tag === "Google Ads").length },
            { label: "Last Updated", value: formatDate(pages.sort((a, b) => b.date.localeCompare(a.date))[0]?.date) },
          ].map((s) => (
            <div key={s.label} style={{
              background: "#fff",
              border: "1px solid #e2e6ea",
              borderRadius: 10,
              padding: "16px 24px",
              minWidth: 160,
            }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#0D6E65", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#8a94a0", marginTop: 4, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Page cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {pages.map((page) => (
            <PageCard key={page.slug} page={page} />
          ))}

          {/* Add new page placeholder */}
          <div style={{
            border: "2px dashed #c8d0d8",
            borderRadius: 12,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            color: "#8a94a0",
            minHeight: 200,
            textAlign: "center",
          }}>
            <div style={{ fontSize: 28, opacity: 0.4 }}>+</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>New Landing Page</div>
            <div style={{ fontSize: 12, maxWidth: 180, lineHeight: 1.5 }}>
              Add a new folder under <code style={{ background: "#e2e6ea", padding: "1px 5px", borderRadius: 3, fontSize: 11 }}>app/</code> to create a new page
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #e2e6ea",
        background: "#fff",
        padding: "20px 40px",
        textAlign: "center",
        fontSize: 12,
        color: "#8a94a0",
      }}>
        © {new Date().getFullYear()} Sogolytics, Inc. · Internal use only · Not indexed by search engines
      </footer>
    </div>
  );
}

function PageCard({ page }: { page: LandingPage }) {
  const tagBg = page.tagBg ?? "#e8f4f3";
  const tagColor = page.tagColor ?? "#0D6E65";

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e2e6ea",
        borderRadius: 12,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Dark preview bar matching hero */}
      <div style={{
        background: "linear-gradient(135deg, #061a17 0%, #0a2e29 100%)",
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 24px",
      }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          /{page.htmlFile ?? page.slug}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.3, margin: 0 }}>
            {page.title}
          </h2>
          <span style={{
            fontSize: 10,
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: 20,
            background: tagBg,
            color: tagColor,
            letterSpacing: "0.04em",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}>
            {page.tag}
          </span>
        </div>

        <p style={{ fontSize: 13, color: "#5a6472", lineHeight: 1.6, margin: 0, flex: 1 }}>
          {page.description}
        </p>

        <div style={{ fontSize: 11, color: "#8a94a0", display: "flex", alignItems: "center", gap: 6 }}>
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x={3} y={4} width={18} height={18} rx={2} />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          Created {formatDate(page.date)}
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "0 24px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
        <Link
          href={`/${page.slug}`}
          target="_blank"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            width: "100%",
            padding: "11px 20px 11px 8px",
            background: "#F5E100",
            color: "#0a1a18",
            fontWeight: 700,
            fontSize: 14,
            borderRadius: 50,
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#e6d400")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#F5E100")}
        >
          <span style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "#0a1a18",
            color: "#F5E100",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 700,
            flexShrink: 0,
          }}>
            →
          </span>
          View Landing Page
        </Link>
        {page.htmlFile && (
          <a
            href={`/pages/${page.htmlFile}`}
            download={page.htmlFile}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              padding: "9px 20px",
              background: "#f0f4f3",
              color: "#0D6E65",
              fontWeight: 600,
              fontSize: 13,
              borderRadius: 50,
              textDecoration: "none",
              transition: "background 0.2s",
              border: "1px solid #c8dcd9",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#dcecea")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#f0f4f3")}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download HTML
          </a>
        )}
      </div>
    </div>
  );
}
