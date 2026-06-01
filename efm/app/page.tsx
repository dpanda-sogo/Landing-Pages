import StickyBar from "@/components/StickyBar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import StatRow from "@/components/StatRow";
import Features from "@/components/Features";
import FeatureRows from "@/components/FeatureRows";
import UseCases from "@/components/UseCases";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <StickyBar />
      <Hero />
      <LogoBar />
      <StatRow />
      <Features />
      <FeatureRows />
      <UseCases />
      <Testimonial />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
