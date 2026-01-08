import React from 'react'
import './App.css'
import './components/navbar.css'
import './components/hero.css'
import './components/sections.css'
import './components/footer.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhySection from './components/WhySection'
import HowSection from './components/HowSection'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'

import { useEffect } from 'react'

function App(){
  useEffect(()=>{
    if (window.location.hash){
      const id = window.location.hash.slice(1);
      setTimeout(()=>{
        const el = document.getElementById(id);
        const navH = document.querySelector('.navbar')?.offsetHeight || 64;
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - navH - 12, behavior: 'smooth' });
      }, 120);
    }
  },[]);

  return (
    <div className="app">
      <div className="page-bg" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <HowSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
