import React, { createContext, useContext, useState } from 'react';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'fr' : 'en'));
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = language === 'fr' ? fr : en;
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        // Fallback to English if French key is missing
        let fallback = en;
        for (const fK of keys) fallback = fallback?.[fK];
        return fallback || key;
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
