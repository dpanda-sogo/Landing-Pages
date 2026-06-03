"use client";
import Link from "next/link";

export interface LandingPage {
  slug: string;
  title: string;
  description: string;
  date: string;
  tag: string;
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
    <div style={{ minHeight: "100vh", background: "#f7f9fc", fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <header style={{
        background: "#fff",
        borderBottom: "1px solid #e2e6ea",
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.sogolytics.com/wp-content/uploads/2022/07/sogolytics-wbg.png"
          alt="Sogolytics"
          style={{ height: 28 }}
        />
        <div style={{ width: 1, height: 24, background: "#e2e6ea" }} />
        <span style={{ fontSize: 13, fontWeight: 600, color: "#5a6472", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Landing Pages
        </span>
      </header>

      {/* Main */}
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: "#1a1a1a", marginBottom: 8, letterSpacing: "-0.02em" }}>
            Campaign Landing Pages
          </h1>
          <p style={{ fontSize: 15, color: "#5a6472" }}>
            {pages.length} page{pages.length !== 1 ? "s" : ""} · Internal use only
          </p>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e2e6ea", borderRadius: 12, overflow: "hidden" }}>
          {/* Table header */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 160px 110px 52px",
            gap: 16,
            padding: "12px 24px",
            background: "#f7f9fc",
            borderBottom: "1px solid #e2e6ea",
            fontSize: 11,
            fontWeight: 700,
            color: "#8a94a0",
            letterSpacing: "0.06em",
            textTransform: "uppercase" as const,
          }}>
            <span>Page</span>
            <span>Created</span>
            <span>Type</span>
            <span />
          </div>

          {pages.map((page, i) => (
            <PageRow key={page.slug} page={page} last={i === pages.length - 1} />
          ))}
        </div>

        <p style={{ marginTop: 24, fontSize: 12, color: "#8a94a0", textAlign: "center" }}>
          Add new pages by creating a folder under{" "}
          <code style={{ background: "#e2e6ea", padding: "1px 6px", borderRadius: 4 }}>app/</code>{" "}
          and registering it in{" "}
          <code style={{ background: "#e2e6ea", padding: "1px 6px", borderRadius: 4 }}>app/page.tsx</code>
        </p>
      </main>
    </div>
  );
}

function PageRow({ page, last }: { page: LandingPage; last: boolean }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 160px 110px 52px",
        gap: 16,
        padding: "20px 24px",
        alignItems: "center",
        borderBottom: last ? "none" : "1px solid #e2e6ea",
        background: "#fff",
        transition: "background 0.15s",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#f7f9fc")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#fff")}
    >
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", marginBottom: 4 }}>
          {page.title}
        </div>
        <div style={{ fontSize: 13, color: "#5a6472", lineHeight: 1.5 }}>
          {page.description}
        </div>
        <div style={{ marginTop: 6, fontSize: 12, color: "#8a94a0" }}>
          /{page.slug}
        </div>
      </div>

      <div style={{ fontSize: 13, color: "#5a6472" }}>
        {formatDate(page.date)}
      </div>

      <div>
        <span style={{
          display: "inline-block",
          fontSize: 11,
          fontWeight: 600,
          padding: "3px 10px",
          borderRadius: 20,
          background: "#e8f4f3",
          color: "#0D6E65",
          letterSpacing: "0.03em",
        }}>
          {page.tag}
        </span>
      </div>

      <Link
        href={`/${page.slug}`}
        target="_blank"
        title={`Open ${page.title}`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "#F5E100",
          color: "#0a1a18",
          flexShrink: 0,
          fontWeight: 700,
          fontSize: 16,
          textDecoration: "none",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#e6d400")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#F5E100")}
      >
        →
      </Link>
    </div>
  );
}
