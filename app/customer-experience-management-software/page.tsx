import type { Metadata } from "next";
import StickyBar from "@/components/StickyBar";
import CemsHero from "@/components/CemsHero";
import CemsHiddenCost from "@/components/CemsHiddenCost";
import CemsIntro from "@/components/CemsIntro";
import CemsJourney from "@/components/CemsJourney";
import CemsOutcomes from "@/components/CemsOutcomes";
import CemsSwitch from "@/components/CemsSwitch";
import CemsProduct from "@/components/CemsProduct";
import LogoBar from "@/components/LogoBar";
import StatRow from "@/components/StatRow";
import Testimonial from "@/components/Testimonial";
import CemsFAQ from "@/components/CemsFAQ";
import { faqs } from "@/components/cemsFaqData";
import CemsFinalCTA from "@/components/CemsFinalCTA";
import Footer from "@/components/Footer";

const PAGE_URL = "https://www.sogolytics.com/customer-experience-management-software/";

export const metadata: Metadata = {
  title: "Customer Experience Management Software | Turn Feedback Into Action — Sogolytics",
  description:
    "Sogolytics customer experience management software unifies Voice of Customer data, AI sentiment analysis, and closed-loop workflows — so every signal drives action, not just reports. Request a demo.",
  robots: "index, follow",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Customer Experience Management Software | Sogolytics",
    description:
      "Unify Voice of Customer data, AI analytics, and closed-loop workflows in one customer experience management platform. Request a demo.",
    url: PAGE_URL,
    siteName: "Sogolytics",
    type: "website",
    images: [
      {
        url: "https://cdn.sogolytics.com/wp-content/uploads/2022/07/sogolytics-wbg.png",
        width: 1200,
        height: 630,
        alt: "Sogolytics Customer Experience Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Experience Management Software | Sogolytics",
    description:
      "Unify Voice of Customer data, AI analytics, and closed-loop workflows in one customer experience management platform.",
    images: ["https://cdn.sogolytics.com/wp-content/uploads/2022/07/sogolytics-wbg.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sogolytics",
  url: "https://www.sogolytics.com/",
  logo: "https://cdn.sogolytics.com/wp-content/uploads/2022/07/sogolytics-wbg.png",
  sameAs: [
    "https://www.linkedin.com/company/sogolytics/",
    "https://twitter.com/sogolytics",
  ],
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sogolytics Customer Experience Management Software",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Customer experience management software unifying Voice of Customer data, AI sentiment analysis, customer journey analytics, and closed-loop workflow automation.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: PAGE_URL,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "500",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Sogolytics", item: "https://www.sogolytics.com/" },
    { "@type": "ListItem", position: 2, name: "Customer Experience Management Software", item: PAGE_URL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function CustomerExperienceManagementSoftwarePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <StickyBar />
      <CemsHero />
      <CemsHiddenCost />
      <CemsIntro />
      <CemsJourney />
      <CemsOutcomes />
      <CemsSwitch />
      <CemsProduct />
      <LogoBar />
      <StatRow />
      <Testimonial />
      <CemsFAQ />
      <CemsFinalCTA />
      <Footer />
    </>
  );
}
