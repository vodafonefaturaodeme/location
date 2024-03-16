// pages/HomePage.js

import React from 'react';
import Analytics from '../../components/Home/Analytics.jsx';
import Cards from '../../components/Home/Cards.jsx';
import Footer from '../../components/Common/Footer.jsx';
import Hero from '../../components/Home/Hero.jsx';
import Navbar from '../../components/Common/Navbar.jsx';
import Newsletter from '../../components/Home/NewSletter.jsx';

function HomePage() {
  return (
    
      <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
      
    </div>
   
  );
}

export default HomePage;
