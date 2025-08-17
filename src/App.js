import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DigitalGrowth from './components/DigitalGrowth';
import Sixstepdigitalgrowth from './components/sixstepdigitalgrowth';
import Portfolio from './components/Portfolio';
import FAQ from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

   useEffect(() => {
      AOS.init({ duration: 1000 });  // animation duration 1000ms (1s)
      AOS.refresh();
    }, []);



  return (
    <>
      <Navbar />
      <Hero data-aos="fade-down"/>
      <Services  data-aos="fade-right" />
      <DigitalGrowth data-aos="fade-left" />
      <Sixstepdigitalgrowth data-aos="fade-right"/>
      <Portfolio />
      <FAQ/>
      <Contact  data-aos="fade-down" />
      <Footer />
    </>
  );
}

export default App;
