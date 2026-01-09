import React, { useEffect, useState } from 'react'
import './App.css'
import './components/navbar.css'
import './components/hero.css'
import './components/sections.css'
import './components/footer.css'
import './components/auth.css'

import './components/home.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhySection from './components/WhySection'
import HowSection from './components/HowSection'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import Home from './components/Home'

function App(){
  const [activeView, setActiveView] = useState(null); // null = scroll all, 'why'/'how'/'features' = single section

  useEffect(()=>{
    if (window.location.hash){
      const id = window.location.hash.slice(1);
      if (['why', 'how', 'features'].includes(id)) {
        setActiveView(id);
      } else {
        setActiveView(null);
        setTimeout(()=>{
          const el = document.getElementById(id);
          const navH = document.querySelector('.navbar')?.offsetHeight || 64;
          if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - navH - 12, behavior: 'smooth' });
        }, 120);
      }
    }
  },[]);

  return (
    <div className="app">
      <div className="page-bg" aria-hidden="true" />
      {activeView !== 'login' && activeView !== 'signup' && activeView !== 'home' && <Navbar setActiveView={setActiveView} />}
      <main>
        {activeView === null && (
          <>
            <Hero setActiveView={setActiveView} />
            <WhySection />
            <HowSection />
            <FeaturesSection />
          </>
        )}
        {activeView === 'why' && <WhySection />}
        {activeView === 'how' && <HowSection />}
        {activeView === 'features' && <FeaturesSection />}
        {activeView === 'login' && <LoginPage setActiveView={setActiveView} />}
        {activeView === 'signup' && <SignUpPage setActiveView={setActiveView} />}
        {activeView === 'home' && <Home />}
      </main>
      {activeView !== 'login' && activeView !== 'signup' && activeView !== 'home' && <Footer />}
    </div>
  )
}

export default App
