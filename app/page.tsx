import type { Metadata } from "next";
import IndexPageClient, { type LandingPage } from "@/components/IndexPageClient";

export const metadata: Metadata = {
  title: "Landing Pages | Sogolytics",
  description: "Sogolytics campaign landing pages",
  robots: "noindex, nofollow",
};

const pages: LandingPage[] = [
  {
    slug: "pages/lp-cx-complete.html",
    title: "CX Platform — Complete / Combined Variant",
    description: "Broad conquesting page combining platform capabilities, ROI value, and 30-day migration. Targets wide keyword groups. Includes live industry news fold.",
    date: "2026-06-11",
    tag: "Conquesting",
    tagBg: "#fff3cd",
    tagColor: "#856404",
    htmlFile: "lp-cx-complete-wp.html",
    designFile: "lp-cx-complete.svg",
  },
  {
    slug: "enterprise-feedback-management",
    title: "Enterprise Feedback Management",
    description: "Unify CX and EX feedback in one enterprise platform. NPS, VoC, sentiment analysis, and real-time dashboards.",
    date: "2026-06-03",
    tag: "Google Ads",
    htmlFile: "enterprise-feedback-management.html",
  },
  {
    slug: "pages/lp-cx-platform.html",
    title: "CX Platform — Platform Variant",
    description: "One platform for every voice. Unified CX, EX, and market research with AI analytics built in. Competitor conquesting.",
    date: "2026-06-04",
    tag: "Conquesting",
    tagBg: "#fff3cd",
    tagColor: "#856404",
    htmlFile: "lp-cx-platform-wp.html",
  },
  {
    slug: "pages/lp-cx-value.html",
    title: "CX Platform — Value / ROI Variant",
    description: "More capability, half the cost. Transparent pricing, no per-module fees, and a personalised ROI estimate.",
    date: "2026-06-04",
    tag: "Conquesting",
    tagBg: "#fff3cd",
    tagColor: "#856404",
    htmlFile: "lp-cx-value-wp.html",
  },
  {
    slug: "pages/lp-cx-switch.html",
    title: "CX Platform — Switch / Migration Variant",
    description: "Switch platforms in 30 days or less. Full data migration, zero disruption, 30-day live guarantee.",
    date: "2026-06-04",
    tag: "Conquesting",
    tagBg: "#fff3cd",
    tagColor: "#856404",
    htmlFile: "lp-cx-switch-wp.html",
  },
  {
    slug: "pages/lp-survey-alternative.html",
    title: "SogoSurvey — Survey Tool Alternative",
    description: "Advanced logic, AI-assisted design, and real analytics — all on a free plan with no response limits. PLG conquesting page targeting users switching from basic survey tools.",
    date: "2026-06-16",
    tag: "PLG",
    tagBg: "#e8f0ff",
    tagColor: "#0A2463",
    htmlFile: "lp-survey-alternative.html",
  },
];

export default function IndexPage() {
  return <IndexPageClient pages={pages} />;
}
