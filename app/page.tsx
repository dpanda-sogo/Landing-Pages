import type { Metadata } from "next";
import IndexPageClient, { type LandingPage } from "@/components/IndexPageClient";

export const metadata: Metadata = {
  title: "Landing Pages | Sogolytics",
  description: "Sogolytics campaign landing pages",
  robots: "noindex, nofollow",
};

const pages: LandingPage[] = [
  {
    slug: "enterprise-feedback-management",
    title: "Enterprise Feedback Management",
    description: "Unify CX and EX feedback in one enterprise platform. NPS, VoC, sentiment analysis, and real-time dashboards.",
    date: "2026-06-03",
    tag: "Google Ads",
  },
];

export default function IndexPage() {
  return <IndexPageClient pages={pages} />;
}
