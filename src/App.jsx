import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Layout & UI
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingCTA from './components/ui/FloatingCTA';
import Loading from './components/ui/Loading';

// Sections
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import History from './components/sections/History';
import Facility from './components/sections/Facility';
import Location from './components/sections/Location';
import Contact from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time for visual effect (fonts, images, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <div className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen">
        <Helmet>
          <title>BA TECH - 산업용 펌프 및 설비 엔지니어링의 새로운 기준</title>
          <meta name="description" content="비에이텍은 차별화된 기술력으로 대한민국 산업 현장의 고효율 펌프 및 엔지니어링 설비를 책임집니다." />
          <meta property="og:title" content="BA TECH - 산업용 설비 엔지니어링" />
          <meta property="og:description" content="혁신적 기술력과 최상의 신뢰도를 제공하는 BA TECH" />
          <meta property="og:type" content="website" />
        </Helmet>

        {loading ? <Loading /> : null}

        <Header />
        
        <main>
          <Hero />
          <AboutUs />
          <History />
          <Facility />
          <Location />
          <Contact />
        </main>

        <Footer />
        <FloatingCTA />
      </div>
    </HelmetProvider>
  );
}

export default App;
