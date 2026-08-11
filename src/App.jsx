import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Travel from './pages/Travel';
import Logistics from './pages/Logistics';
import Sport from './pages/Sport';
import Contact from './pages/Contact';
import FloatingActions from './components/FloatingActions';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { useReveal } from './hooks/useReveal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout() {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollToTop />
      <TopNavBar />
      <FloatingActions />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <MainLayout />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
