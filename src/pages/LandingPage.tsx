import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import OfferRibbon from "@/components/OfferRibbon/OfferRibbon";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <OfferRibbon />
      <Navbar />
      <Hero />
    </div>
  );
};

export default LandingPage;
