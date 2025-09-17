import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import CodingJourney from "./sections/CodingJourney";

import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <CodingJourney />

      <Contact />
      <Footer/>
      <ScrollToTop />
    </div>
  );
};

export default App;
