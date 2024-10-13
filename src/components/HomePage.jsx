// src/components/HomePage.jsx
import React from 'react';
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import HowItWorks from "./HowItWorks";
import FeaturedNGOs from "./FeaturedNGOs";
import AboutUs from './AboutUs';
import Impact from './Impact';
import Contact from './Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedNGOs />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Impact />
      <AboutUs />
      <Contact/>
    </>
  );
};

export default HomePage;