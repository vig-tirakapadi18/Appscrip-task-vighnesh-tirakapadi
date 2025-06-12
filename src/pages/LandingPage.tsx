import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import OfferRibbon from "@/components/OfferRibbon/OfferRibbon";
import { ProductListing } from "@/components/ProductListing/ProductListing";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <OfferRibbon />
      <Navbar />
      <Hero />
      <ProductListing />
      <Footer />
    </div>
  );
};

export default LandingPage;
