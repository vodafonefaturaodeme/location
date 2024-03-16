// pages/HomePage.js

import React from 'react';
import Analytics from './Analytics.jsx';
import Cards from './Cards';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Newsletter from './NewSletter';
import SSS from './ssss';
import ABOUT from './about';
import Contact from "./contact.jsx"
function HomePage() {
  return (
    
      <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <ABOUT />
      <Cards />
      <Contact />
     
      <SSS/>
      <Footer />
      
    </div>
   
  );
}

export default HomePage;
