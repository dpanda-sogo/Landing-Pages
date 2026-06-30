import type { Metadata } from "next";
import StickyBar from "@/components/StickyBar";
import Footer from "@/components/Footer";
import Hero from "./Hero";
import TrustBar from "./TrustBar";
import StatBand from "./StatBand";
import Comparison from "./Comparison";
import Differentiators from "./Differentiators";
import Capabilities from "./Capabilities";
import Walkthrough from "./Walkthrough";
import Enterprise from "./Enterprise";
import Testimonials from "./Testimonials";
import Objections from "./Objections";
import FinalCTA from "./FinalCTA";

export const metadata: Metadata = {
  title: "360-Degree Feedback Software | Sogolytics",
  description:
    "Run complete 360-degree feedback programs in Sogolytics: customizable competency frameworks, automated multi-rater routing, anonymity controls, competency gap analysis, and AI on open-text. See a 15-minute demo.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.sogolytics.com/lp/360-feedback-software/",
  },
};

export default function Feedback360Page() {
  return (
    <>
      <StickyBar />
      <Hero />
      <TrustBar />
      <StatBand />
      <Comparison />
      <Differentiators />
      <Capabilities />
      <Walkthrough />
      <Enterprise />
      <Testimonials />
      <Objections />
      <FinalCTA />
      <Footer />
    </>
  );
}
