import React from 'react';
import Hero from './components/Hero';
import Partners from './components/Partners';
import PopularExams from './components/PopularExams';
import WhyCertipoint from './components/WhyCertipoint';
import Testimonials from './components/Testimonials';
import LocationFinder from './components/LocationFinder';
import FAQ from './components/FAQ';
import SupportCTA from './components/SupportCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background:'#ffffff'}}>
      <Hero />
      <Partners />
      <PopularExams />
      <WhyCertipoint />
      <Testimonials />
      <LocationFinder />
      <FAQ />
      <SupportCTA />
      <Footer />
    </div>
  );
}

export default App;