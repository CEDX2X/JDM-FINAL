import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const TopNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.travel'), path: '/travel' },
    { name: t('nav.logistics'), path: '/logistics' },
    { name: t('nav.sport'), path: '/sport' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center gap-3 text-xl md:text-2xl font-black tracking-tight text-primary dark:text-white font-headline group">
          <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-white/10 flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2FJDM.jpeg?alt=media&token=446b9ce2-8680-4102-9761-c2f125b43031"
              alt="JDM SARL Logo"
              className="h-full w-full object-contain rounded-lg"
            />
          </div>
          <span className="bg-gradient-to-r from-primary to-primary-container dark:from-white dark:to-white/80 bg-clip-text text-transparent">JDM SARL</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6 items-center px-4 py-1.5 bg-transparent">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold transition-colors font-headline hover-underline py-1 ${
                location.pathname === link.path
                  ? 'text-secondary dark:text-secondary'
                  : 'text-primary dark:text-white/90 hover:text-secondary dark:hover:text-secondary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-surface-container-low dark:bg-surface-container text-primary dark:text-white hover:bg-surface-container-high transition-colors"
          >
            {language === 'en' ? 'FR 🇫🇷' : 'EN 🇬🇧'}
          </button>
          <button 
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-xl bg-surface-container-low dark:bg-surface-container flex items-center justify-center text-primary dark:text-white hover:scale-105 transition-transform material-symbols-outlined text-xl"
            translate="no"
          >
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </button>
          <button onClick={() => navigate('/contact')} className="bg-secondary text-on-secondary px-6 py-2.5 rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-secondary/20">
            {t('nav.getStarted')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button 
            onClick={toggleLanguage}
            className="px-2.5 py-1 rounded-md text-xs font-bold bg-surface-container-low dark:bg-surface-container text-primary dark:text-white"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
          <button 
            onClick={toggleDarkMode}
            className="w-9 h-9 rounded-lg bg-surface-container-low dark:bg-surface-container flex items-center justify-center text-primary dark:text-white material-symbols-outlined text-xl"
            translate="no"
          >
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            translate="no" 
            className="w-10 h-10 rounded-lg bg-surface-container-low dark:bg-surface-container flex items-center justify-center text-primary dark:text-white material-symbols-outlined text-2xl"
          >
            {isMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-surface-container-lowest/95 dark:bg-surface/95 backdrop-blur-2xl border-b border-outline-variant/10 shadow-2xl py-8 px-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-lg font-bold font-headline transition-colors ${
                location.pathname === link.path
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface dark:text-white/80 hover:bg-surface-container-low'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px w-full bg-outline-variant/20 my-2"></div>
          <button onClick={() => { setIsMenuOpen(false); navigate('/contact'); }} className="w-full bg-secondary text-on-secondary px-6 py-4 rounded-xl font-bold text-center shadow-lg">
            {t('nav.getStarted')}
          </button>
        </div>
      )}
    </nav>
  );
};

export default TopNavBar;

