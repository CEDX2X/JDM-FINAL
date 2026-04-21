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
    <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 dark:bg-[#00030f]/80 backdrop-blur-xl shadow-[0_12px_32px_rgba(11,29,58,0.06)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 text-xl md:gap-3 md:text-2xl font-black tracking-tighter text-primary dark:text-white font-headline">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kylyoapp-8ec0b.firebasestorage.app/o/Ced%2FJDM.jpeg?alt=media&token=446b9ce2-8680-4102-9761-c2f125b43031"
            alt="JDM SARL Logo"
            className="h-8 md:h-10 w-auto rounded-lg object-contain"
          />
          <span>JDM SARL</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                location.pathname === link.path
                  ? 'text-[#9b3f5a] font-extrabold'
                  : 'text-primary dark:text-white/70 dark:text-[#f7f9fc]/70 font-bold hover:text-[#9b3f5a]'
              } transition-colors duration-300 font-headline tracking-tight`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button 
            onClick={toggleLanguage}
            className="font-bold text-primary dark:text-white/70 dark:text-white hover:text-[#9b3f5a] transition-colors"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
          <button 
            onClick={toggleDarkMode}
            className="text-primary dark:text-white/70 dark:text-white hover:text-[#9b3f5a] transition-transform duration-300 hover:rotate-12 material-symbols-outlined text-2xl"
            translate="no"
          >
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </button>
          <button onClick={() => navigate('/contact')} className="bg-primary-container text-on-primary px-6 py-2.5 rounded-xl font-bold transition-transform duration-300 hover:scale-102">
            {t('nav.getStarted')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="font-bold text-primary dark:text-white/70 dark:text-white hover:text-[#9b3f5a] transition-colors"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
          <button 
            onClick={toggleDarkMode}
            className="text-primary dark:text-white/70 dark:text-white hover:text-[#9b3f5a] transition-transform duration-300 hover:rotate-12 material-symbols-outlined text-2xl md:text-3xl"
            translate="no"
          >
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            translate="no" 
            className="material-symbols-outlined text-primary dark:text-white text-2xl md:text-3xl"
          >
            {isMenuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 md:top-20 left-0 w-full bg-surface-container-lowest dark:bg-[#00030f] border-t border-gray-100 dark:border-gray-800 shadow-xl py-6 px-4 md:px-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`${
                location.pathname === link.path
                  ? 'text-[#9b3f5a] font-extrabold'
                  : 'text-primary dark:text-white/70 dark:text-[#f7f9fc]/70 font-bold'
              } text-xl tracking-tight block`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px w-full bg-gray-100 dark:bg-gray-800 my-2"></div>
          <button onClick={() => { setIsMenuOpen(false); navigate('/contact'); }} className="w-full bg-primary-container text-on-primary px-6 py-4 rounded-xl font-bold text-lg">
            {t('nav.getStarted')}
          </button>
        </div>
      )}
    </nav>
  );
};

export default TopNavBar;
