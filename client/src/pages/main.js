import React from "react";

import Hero from "../sections/Hero";
import Focus from "../sections/Focus";
import Footer from "../sections/Footer";
import Services from "../components/ui/Services";
import ByTheNumbers from "../components/ui/ByTheNumbers";
import FAQ from "../components/ui/FAQ";
import ExplanationHero from "./../sections/ExplanationHero";
import ExplainBlocks from "../sections/ExplainBlocks";

export default function Main() {
  return (
    <div className="overflow-x-hidden !w-fill !mx-auto">
      <Hero />
      <ExplanationHero />
      <Focus />
      <ExplainBlocks />
      <Services />
      <ByTheNumbers />
      <FAQ />
      <Footer />
    </div>
  );
}
