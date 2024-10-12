// src/components/HomePage.jsx
import React from 'react';
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import HowItWorks from "./HowItWorks";
import FeaturedNGOs from "./FeaturedNGOs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedNGOs />
      <Features />
      <HowItWorks />
      <Testimonials />
    </>
  );
};

export default HomePage;