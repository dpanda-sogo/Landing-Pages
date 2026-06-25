import type { Metadata } from "next";
import StickyBar from "@/components/StickyBar";
import Footer from "@/components/Footer";
import Hero from "./Hero";
import TrustBar from "./TrustBar";
import Differentiators from "./Differentiators";
import Walkthrough from "./Walkthrough";
import Enterprise from "./Enterprise";
import Testimonials from "./Testimonials";
import Objections from "./Objections";
import FinalCTA from "./FinalCTA";

export const metadata: Metadata = {
  title: "360-Degree Feedback Software | Sogolytics",
  description:
    "Run complete 360-degree feedback programs in Sogolytics: customizable competency frameworks, automated multi-rater routing, anonymity controls, and analytics that go deeper than averages. See a 15-minute demo.",
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
      <Differentiators />
      <Walkthrough />
      <Enterprise />
      <Testimonials />
      <Objections />
      <FinalCTA />
      <Footer />
    </>
  );
}
